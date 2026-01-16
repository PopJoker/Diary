今天		Gus Ems Web		即時數據介面有重新規劃 已經更新完成
		
下週		Gus MES	APP		畫面有點想法 會先規劃 討論是否合適 再開始進行程式跟API修改
		
想問外面的小屋子可不可以拿來部署環境 來測試系統
		
##		找時間要給產線Qrcode生成器 找時間問彥偉
		
##		Apple APP demo QRcode
		
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
		-	容量 #待處理
		-	備援SOC	BackSOC #待處理
		-	標語超出

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

