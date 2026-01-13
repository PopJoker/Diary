今天		學姊家APP	歷史數據API 有找到問題 是在計算功率累積的時候 在Influx的沒考慮到UTC時間 語法有寫錯 所以會多算時間 功率就會多累積
		APP藍芽		有先用文傳的手機用成IOS版本 藍芽連線有些問題 

明天		APP藍芽		會再跟文傳討論 沒問題後會上IOS 的 APP Store

##找時間要給產線Qrcode生成器

15Kw		找時間驗機
安哲 加個Braker 附載改燈泡板

2/6

如果到背景 就不管設備 但回到APP就要無感重連

				
貼APP android ios web的連結與下載方式
android(Google Drive Share) https://drive.google.com/uc?export=download&id=1furQw-gf2qtfWr8RO6dmThSgsxAMQtZE
ios(App Store) https://apps.apple.com/us/app/gusems/id6754067023
web https://webems.gustech.com.tw/
帳號：GusOfficeTest@gus-tech.com.tw
密碼：Gus150211

手工具產線網址 http://10.13.29.10:8080/
貼手工具產線網址
==========================
	
	1.	15kW SOP

	2.	高壓Rack

	3.	二樓兩條線要試運行顯上數據收集及管理
		3.1	Influx先測試格式上傳 #完成
		3.2	DAQ格式確認 #完成
		3.3	素梅派測試 #完成

	4.	明後天找天去健康檢查 #完成
	
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

