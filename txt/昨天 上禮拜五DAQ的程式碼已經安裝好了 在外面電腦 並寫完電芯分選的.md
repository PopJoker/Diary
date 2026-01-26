今天		藍芽APP			除了有拿掉本來的審核權限頁外 有增加之前預防系統字體畫面爆炸的功能 今天有處理Apple在關掉後開啟自動重連的問題
						但目前還沒找到原因 導致現在如果使用者關掉APP 再重新開啟 會需要重新掃描條碼
						目前有先給Apple審核 後續會找無法重連的問題 修正好在用更新的方式上傳 審核時間會比較快

		Gus ems app		下午有收到Helan的反饋 所以有更改部分 目前APP更改的還差不多

明天		Gus ems APP		下周會盡快提出更新審核給Apple

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

##		APP 充放電數據修正

##		APP List數據修正

##		Web API 修正

##		Web 更新 設備管理傳輸數據錯誤 #待修正

##		客戶支援 教學影片 #待修正	

##		local端不限制有幾貨櫃 Max:12

##		[RTU to TCP] survey	gateway combine

##		login卡住 顯示Error: getaddrinfo ENOTFOUND 

##		python排程 改

##		場域的ems

##		找時間詢價
		
2/6		

網路應用程式 survey
		
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

