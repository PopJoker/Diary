# 🧰 Git 推送教學：將專案上傳到 `master` 分支

本教學適用於將你的 C# 專案上傳（Push）到 Git 遠端倉庫的 `master` 分支。

---

## 📦 步驟一：初始化 Git 倉庫（只需做一次）

1. 打開命令提示字元或 PowerShell
2. 進入你的專案資料夾：
   ```bash
   cd C:\Users\HandsomeMan007\Desktop\BMSHostMonitor
   ```
3. 初始化 Git：
   ```bash
   git init
   ```
4. 新增 Git 遠端 URL（以公司內部 GitLab URL 為例）：
   ```bash
   git remote add origin http://ems.gustech.com.tw:3000/camiu.tseng/BMSHostMonitor.git
   ```

---

## 📁 步驟二：將檔案加入 Git 控管

```bash
git add .
git commit -m "我爽上傳"
```

---

## 🚀 步驟三：推送到 `master` 分支

```bash
git push origin master
```

若提示輸入帳號密碼，請依照 GitLab 帳號登入。若使用 Token，請貼上 Token。

---

## ✅ 常見指令總覽

| 指令 | 說明 |
|------|------|
| `git status` | 查看目前狀態 |
| `git branch` | 查看目前分支 |
| `git checkout master` | 切換到 master 分支 |
| `git pull origin master` | 拉取遠端最新版本 |
| `git push origin master` | 推送本地到遠端 master |

---

# 🧪 C# Form 的 DoWork 方法（防呆版本）

以下是針對 `BackgroundWorker` 使用的 `DoWork` 方法，已加入基本防呆邏輯，避免當 Slave 不存在或資料格式異常時導致程式崩潰。

```csharp
private void backgroundWorker1_DoWork(object sender, DoWorkEventArgs e)
{
    while (!backgroundWorker1.CancellationPending)
    {
        try
        {
            this.Invoke((MethodInvoker)delegate
            {
                if (comboBoxSlave.SelectedItem == null)
                    return;

                string selected = comboBoxSlave.SelectedItem.ToString();
                if (!modbusDevices.ContainsKey(selected))
                    return;

                ModbusDevice device = modbusDevices[selected];
                Dictionary<string, string> data = device.ReadData();

                if (data == null || !data.ContainsKey("SafetyStatusAll"))
                    return;

                string uintValueStr = data["SafetyStatusAll"];

                if (uint.TryParse(uintValueStr, out uint uintValue))
                {
                    List<bool> statusList = IntToBoolList32((int)uintValue);
                    UpdateBitPanel(statusList);
                }
                else
                {
                    // 顯示或記錄格式錯誤資訊
                    Console.WriteLine($"轉換失敗: {uintValueStr}");
                }

                // 顯示原始狀態值
                labelSafetyStatus.Text = uintValueStr;
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"DoWork 發生錯誤: {ex.Message}");
        }

        Thread.Sleep(1000); // 每秒更新一次
    }
}
```

---

## 📌 備註

沒什麼備註 打好玩的

---
## 📬 聯絡資訊

- 👤 作者：杜品延  
- 📧 Email：maverick.tu@gus-tech.com.tw  
- 🗓 日期：2025/07/21
