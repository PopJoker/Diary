今天		Gus Ems Web		今天有改即時數據的流向圖 替代之前的數據跟Icon的版本 現在有一張情境圖 可以反映目前的用電狀況
		藍芽APP			有為了Apple上次反映的需要一個demo數據畫面做一個demo模式 有給一個特定的QRcode 讓他掃描後會進入demo模式	
		
明天		Gus ems APP		會改即時數據的畫面
		Gus ems web		會加入更改充放電時段跟更改備援SOC的功能在web上面

想問外面的小屋子可不可以拿來部署環境 來測試系統 #完成
		
##		找時間要給產線Qrcode生成器 找時間問彥偉
		
##		Apple APP demo QRcode

##		Ems App 
		
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
		-	流向圖Load超出、電池櫃子 PcsBat位子不準確 #待處理
		- 

	-	充放電分析：	附載的電 多少為太陽能 多少為電池 多少為大電 #待處理
					電池充電	多少為太陽能 多少為電網
					計算炭耗能 ESG報告(how)

	-	

歷史 (電流充放)
	
	-	BMS ID分開 API改一下 優先
	
	-	對準本地UTC(台灣)

設備管理

	-	加充放電時間設定
	
	-	back up SOC
		
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

