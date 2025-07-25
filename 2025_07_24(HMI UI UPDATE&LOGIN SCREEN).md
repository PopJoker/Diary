# 🚀 Advantech HMI 專案開發筆記
---

## 🔑 登入系統
### 使用字串變數 `InputPass` 儲存密碼輸入，並使用 `STRCMP()` 進行字串比較：

```c
IF STRCMP(InputPass, "1234") == 0 THEN
    IsLogin = 1
    $U3456.0 = 1d(B)  // 設置權限位元
    OpenScreen(1,0,0) // 登入成功跳轉主頁面
ELSEIF STRCMP(InputPass, "0000") == 0 THEN
    IsLogin = 1
    $U3456.0 = 0(B)
    OpenScreen(1,0,0)
ELSE
    InputPass = ""    // 清空輸入
    MessageBox("密碼錯誤")
ENDIF
```
---
## ⚠️ 警告畫面控制
### 使用 $U2000.0 ~ $U2007.0 作為 警告訊號位元：
```c
$U2000.0 = 0(B)
$U2001.0 = 0(B)
$U2002.0 = 0(B)
$U2003.0 = 0(B)
$U2004.0 = 0(B)
$U2005.0 = 0(B)
$U2006.0 = 0(B)
$U2007.0 = 0(B)

IF $U4002 & 1 (U)
  $U2000.0 = 1d(B)
ENDIF
IF $U4002 & 2 (U)
  $U2001.0 = 1d(B)
ENDIF
IF $U4002 & 4 (U)
  $U2002.0 = 1d(B)
ENDIF
IF $U4002 & 8 (U)
  $U2003.0 = 1d(B)
ENDIF
IF $U4002 & 16 (U)
  $U2004.0 = 1d(B)
ENDIF
IF $U4002 & 32 (U)
  $U2005.0 = 1d(B)
ENDIF
IF $U4002 & 64 (U)
  $U2006.0 = 1d(B)
ENDIF
IF $U4002 & 128 (U)
  $U2007.0 = 1d(B)
ENDIF
```
---
## 🔄單頁刷新與換頁效果
### 利用 PackNum 變數控制資料刷新與顯示：
```c
IF 0\PackNum == 1 (U)
  $U1100 = MOV($U100, 36)
ELIF 0\PackNum == 2 (U)
  $U1100 = MOV($U200, 36)
ELIF 0\PackNum == 3 (U)
  $U1100 = MOV($U300, 36)
ELIF 0\PackNum == 4 (U)
  $U1100 = MOV($U400, 36)
ELIF 0\PackNum == 5 (U)
  $U1100 = MOV($U500, 36)
ELIF 0\PackNum == 6 (U)
  $U1100 = MOV($U600, 36)
ELIF 0\PackNum == 7 (U)
  $U1100 = MOV($U700, 36)
ELIF 0\PackNum == 8 (U)
  $U1100 = MOV($U800, 36)
ELIF 0\PackNum == 9 (U)
  $U1100 = MOV($U900, 36)
ELIF 0\PackNum == 10 (U)
  $U1100 = MOV($U1000, 36)
ENDIF
```
這樣可以透過 同一個頁面，藉由切換 PackNum 變數來達到 換頁顯示效果。
---
## 📋總結
1. 登入畫面： 使用 STRCMP() 來處理文字密碼比對。
2. 警告畫面： $U4002 的每個 bit 對應到 $U2000.0~$U2007.0 控制警告顯示。
3. 換頁刷新： PackNum 決定 $U1100 顯示哪組資料，達到單頁多組資訊顯示。
---
## 📌 備註

沒什麼備註 打好玩的

---
## 📬 聯絡資訊

- 👤 作者：杜品延  
- 📧 Email：maverick.tu@gus-tech.com.tw  
- 🗓 日期：2025/07/21