const express = require('express');
const router = express.Router();
const { writeInflux } = require('../influxWriter');
const { queryApi } = require('../influxdb');
const bucket = process.env.INFLUXDB_BUCKET;

// Helper: 統一回傳
function apiResponse(res, status, code, message, data = null) {
    return res.status(code).json({ status, code, message, data });
}

// --- POST /upload (支援單筆 & 批次) ---
router.post('/upload', async (req, res) => {
    try {
        const body = req.body;
        if (!body) return apiResponse(res, 'error', 400, 'Missing body');

        const items = Array.isArray(body) ? body : [body];
        const results = [];

        for (const data of items) {
            try {
                // 必填欄位檢查
                if (!data.stage) throw new Error("Missing 'stage' in data");

                await writeInflux(data);
                results.push({ stage: data.stage, status: 'ok' });
                apiResponse(res, 'success', 200, 'Upload completed', results);
            } catch (err) {
                results.push({ stage: data.stage || null, status: 'error', message: err.message });
                apiResponse(res, 'fail', 404, 'Upload fail', results);
            }
        }
    } catch (err) {
        console.error(err);
        apiResponse(res, 'error', 500, err.message);
    }
});

// --- GET /stats/:station ---
router.get('/stats/:station', async (req, res) => {
    const station = req.params.station;
    const hours = Number(req.query.hours) || 1;

    const fluxQuery = `
        from(bucket: "${bucket}")
        |> range(start: -${hours}h)
        |> filter(fn: (r) => r["_measurement"] == "${station}")
        |> keep(columns: ["_time"])
        |> group()
        |> distinct(column: "_time")
        |> map(fn: (r) => ({ r with cnt: 1 }))
        |> sum(column: "cnt")
        |> toInt()
    `;

    try {
        let countValue = 0;

        for await (const { values, tableMeta } of queryApi.iterateRows(fluxQuery)) {
            const o = tableMeta.toObject(values);
            console.log(o) 
            countValue += o.cnt || 0;
        }

        res.json({ station, hours, count: countValue });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// --- GET /history/:station ---
router.get('/history/:station', async (req, res) => {
    const station = req.params.station;
    const limitN = Number(req.query.limit) || 10;

    const fluxQuery = `
        from(bucket: "${bucket}")
        |> range(start: 0)
        |> filter(fn: (r) => r["_measurement"] == "${station}")
        |> pivot(rowKey: ["_time"], columnKey: ["_field"], valueColumn: "_value")
        |> sort(columns: ["_time"], desc: true)
        |> limit(n: ${limitN})
    `;

    try {
        const result = [];
        for await (const { values, tableMeta } of queryApi.iterateRows(fluxQuery)) {
            const row = tableMeta.toObject(values);

            // 移除 null / undefined 欄位
            Object.keys(row).forEach(key => {
                if (row[key] === null || row[key] === ""|| row[key] === undefined) {
                    delete row[key];
                }
            });

            result.push(row);
        }

        res.json({ station, history: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// --- GET /dashboard ---
router.get('/dashboard', async (req, res) => {
    const stations = ["cellsort", "corepack", "daq970cellmeasure", "combine", "etest", "package"];
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();

    try {
        // 1. 取得 orderInfo (最後一筆)
        const fluxHistory = `
            from(bucket: "${bucket}")
            |> range(start: 0)
            |> filter(fn: (r) => r["_measurement"] == "worksheet")
            |> pivot(rowKey: ["_time"], columnKey: ["_field"], valueColumn: "_value")
            |> sort(columns: ["_time"], desc: true)
            |> limit(n: 1)
        `;
        let orderInfo = { orderId: "Loading...", reqCount: 0, dueDate: "---" };
        for await (const { values, tableMeta } of queryApi.iterateRows(fluxHistory)) {
            const row = tableMeta.toObject(values);
            orderInfo = {
                orderId: row.orderId,
                reqCount: row.requestCount,
                dueDate: row.requestDate
            };
        }

        // 2. 取得 stationCounts (今日的總數)
        const stationCounts = {};
        for (const station of stations) {
            const fluxStats = `
                from(bucket: "${bucket}")
                |> range(start: ${startOfDay})
                |> filter(fn: (r) => r["_measurement"] == "${station}")
                |> keep(columns: ["_time"])
                |> group()
                |> distinct(column: "_time")
                |> map(fn: (r) => ({ r with cnt: 1 }))
                |> sum(column: "cnt")
                |> toInt()
            `;
            let countValue = 0;
            for await (const { values, tableMeta } of queryApi.iterateRows(fluxStats)) {
                const o = tableMeta.toObject(values);
                countValue += o.cnt || 0;
            }
            stationCounts[station] = countValue;
        }

        // 3. 計算 completed
        let completed = 0;
        if (orderInfo.orderId) {
            // 3.1 查 corepack 對應 barcode
            const corepackFlux = `
                from(bucket: "${bucket}")
                |> range(start: -30d)
                |> filter(fn: (r) => r["_measurement"] == "corepack" and r["orderId"] == "${orderInfo.orderId}")
                |> keep(columns: ["corepackBarcode"])
            `;
            const corepackBarcodes = new Set();
            for await (const { values, tableMeta } of queryApi.iterateRows(corepackFlux)) {
                const row = tableMeta.toObject(values);
                if (row.corepackBarcode) corepackBarcodes.add(row.corepackBarcode);
            }

            // 3.2 查 combine 對應 caseBarcode
            const combineFlux = `
                from(bucket: "${bucket}")
                |> range(start: -30d)
                |> filter(fn: (r) => r["_measurement"] == "combine")
                |> keep(columns: ["corepackBarcode","caseBarcode"])
            `;
            const caseBarcodes = new Set();
            for await (const { values, tableMeta } of queryApi.iterateRows(combineFlux)) {
                const row = tableMeta.toObject(values);
                if (corepackBarcodes.has(row.corepackBarcode)) caseBarcodes.add(row.caseBarcode);
            }

            // 3.3 查 package 裡面完成的 caseBarcode
            const packageFlux = `
                from(bucket: "${bucket}")
                |> range(start: -30d)
                |> filter(fn: (r) => r["_measurement"] == "package")
                |> keep(columns: ["caseBarcode"])
            `;
            for await (const { values, tableMeta } of queryApi.iterateRows(packageFlux)) {
                const row = tableMeta.toObject(values);
                if (caseBarcodes.has(row.caseBarcode)) completed++;
            }
        }

        // 4. 回傳結果
        res.json({
            orderInfo,
            completed,
            stationCounts
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// --- GET /weeklyhistory ---
router.get('/weeklyhistory', async (req, res) => {
    const stations = ["cellsort", "corepack", "daq970cellmeasure", "combine", "etest", "package"];

    // 最近 7 天（含今天）
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        days.push(d.toISOString().slice(0, 10)); // YYYY-MM-DD
    }

    const result = {};
    stations.forEach(s => result[s] = Array(7).fill(0));

    try {
        for (const station of stations) {
            const fluxQuery = `
                from(bucket: "${bucket}")
                |> range(start: -7d)
                |> filter(fn: (r) => r["_measurement"] == "${station}")
                |> aggregateWindow(every: 1d, fn: count, createEmpty: true)
            `;

            for await (const { values, tableMeta } of queryApi.iterateRows(fluxQuery)) {
                const row = tableMeta.toObject(values);
                const day = row._time.slice(0, 10); // 取日期
                const idx = days.indexOf(day);

                if (idx !== -1) {
                    result[station][idx] = row._value || 0;
                }
            }
        }

        const formatted = days.map((day, idx) => {
			const obj = { date: day };
			stations.forEach(station => {
				obj[station] = result[station][idx] || 0;
			});
			return obj;
		});

res.json(formatted);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
