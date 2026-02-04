今天		Gus ems APP 有設計 APP介面 如果首次使用沒有裝置會到導覽畫面 會帶著使用者 連接藍芽 設定Wifi 輸入名稱 設定經緯度與地區後 跟綁定 完成後再到列表頁面

明天		Gus ems APP 會再跟 阿傑 這邊測試藍芽連網的整體流程

==========================

備忘 學姊家 Title加個SOC[kW] Temp 

備忘 【CT01】5kWh鈦酸鋰電池模組EVT階段文件 放置以下路徑

附件_ 試產問題清單, 填寫問題改善對策

待資料完整後進行EVT 結案Pre Meeting，謝謝
 


文件放置路徑: 

\\gus01ad.com\fs\OAFS\02_部門資料區\CA430_模組開發部\Project\CT01_詮祐 5kWh ESS\2.EVT

市電或電池電壓為0 三次 要警示

23% 便 25%

想問外面的小屋子可不可以拿來部署環境 來測試系統 #完成
		
##		找時間要給產線Qrcode生成器 找時間問彥偉 #完成
		
##		Apple APP demo QRcode #完成

##		即時改 資料時間放大 #完成

##		即時改 加名稱 #完成

##		截圖 流向圖 #完成

##		即時改 房子改成多點位判斷 #完成

##		流向圖 改虛線 #完成

##		即時改 剩餘容量+幾kw  #完成

##		流向圖 改天氣顯示 #完成

##		歷史數據改 開始結束日期內 #完成

##		歷史數據 下載時間改 #完成

##		看SOC API 跟 log 是否一樣 #完成

##		.ps1排程 改 #完成

##		流向圖 動畫修正 #完成

##		流向圖 加個電線桿 #完成

##		歷史API #完成

##		Ems App 字體大小 要偵測手機字體大小 不然會爆等比例縮放 #完成

##		找時間詢價 #完成

##		APP 充放電數據修正 #完成

##		APP List數據修正 #完成

##		Web API 修正 #完成

##		Web 更新 設備管理傳輸數據錯誤 #完成

##		PCS Grid Battery 都要做alarm 確保沒斷線API #完成

##		做個警示 #完成

##		APP PCS 稍微改好後 先上架 #完成

##		客戶支援 教學影片 #完成

##		Web 15kW 加入斷線判斷 與警示訊息 跳窗 #完成

##		APP Version判斷 ios 先 survey #待處理

##		APP BLE配網 #進行中

##		local端不限制有幾貨櫃 Max:12

##		[RTU to TCP] survey	gateway combine

##		login卡住 顯示Error: getaddrinfo ENOTFOUND 

##		python排程 改

##		場域的ems
		
2/6		

		
==========================
	android(Google Drive Share) https://drive.google.com/uc?export=download&id=1furQw-gf2qtfWr8RO6dmThSgsxAMQtZE
	ios(App Store) https://apps.apple.com/us/app/gusems/id6754067023
	web https://webems.gustech.com.tw/

	帳號：GusOfficeTest@gus-tech.com.tw
	密碼：Gus150211

	手工具產線網址 - http://modulemes.gus.local:8080/	(http://10.13.29.10:8080/)
==========================
15kW 

及時
	
	-	流向圖
		-	每個節點的Power折線圖
		-	

	-	及時數據
		-	總電壓 #完成
		-	總電流 #完成
		-	系統溫度(6個最高) #完成
		-	運作狀態 #完成
		-	本月累積放電 #完成
		-	本月收益 #完成
		-	容量 #完成
		-	備援SOC	BackSOC #完成
		-	標語超出 #完成
		-	流向圖Load超出、電池櫃子 PcsBat位子不準確 #完成
		- 

	-	充放電分析：	附載的電 多少為太陽能 多少為電池 多少為大電 #完成
					電池充電	多少為太陽能 多少為電網 #完成
					計算炭耗能 ESG報告(how) #完成

	-	

歷史 (電流充放)
	
	-	BMS ID分開 API改一下 優先 #完成
	
	-	對準本地UTC(台灣) #完成

設備管理

	-	加充放電時間設定 #完成
	
	-	back up SOC #完成
		
==========================

HIOKI

	工程模式 密碼0314

 	設定檔 導入檔

 	SQLlite Test upload influxdb




==========================

Server 2.0





==========================

\##彥瑋



 	10/29 DAQ970 要求 #完成

 

 	目前寫了第一版 測試後更新 #完成

 

 	log分時間 #完成

 

 	log改好看一點 多加判斷標準 #完成

 

 	載入設定檔案 #完成

 

 	判斷3次 #完成

 

 	分選 判斷可以勾選 #完成



 	容量 #完成

 

 	尋找 ID find Pack #完成



 	內阻sort #完成



 	內阻->電壓->容量->日期 #完成



 	ID IR(歐姆) V(V) 容量(mAH) deletaV(mV) #完成



 	想加入一個local的SQLlite 方便如果電芯有問題可以回查數據 #完成



 	存取	\[時間日].csv 內容 \[Barcode] \[Slot] \[Chanel] \[V] \[R]


==========================

\## Server Res Interface



==========================

\## Server APP Interface



==========================

