# Windows 11 23H2 重灌教學

以下步驟可以完整重灌 Windows 11 23H2，適合自己或朋友參考。

---

## 1️⃣ 下載官方 ISO

1. 前往 Microsoft 官方網站：  
   [Windows 11 下載頁面](https://www.microsoft.com/software-download/windows11)
2. 往下找到 **「Windows 11 光碟映像檔 (ISO) 下載」**。
3. 選擇 **Windows 11 (multi-edition ISO)**，點擊下載。
4. 選擇語言（建議：中文(繁體)），下載 ISO 檔案。

> ✅ 這個檔案包含最新版本，現在下載就是 23H2。

---

## 2️⃣ 製作 USB 開機碟

需要一隻 **至少 8GB 的 USB**，並且要備份資料（會被格式化）。  
建議使用 **Rufus** 製作：

1. 下載 [Rufus](https://rufus.ie/)（免安裝版即可）。
2. 插入 USB → 打開 Rufus → 選擇剛下載的 ISO。
3. 推薦設定：
   - 分割區類型：GPT  
   - 目標系統：UEFI  
   - 檔案系統：NTFS
4. 點「開始」，等待製作完成。

---

## 3️⃣ 安裝 Windows 11

1. 插入 USB → 重新開機 → 進入 BIOS（通常按 **DEL / F2 / F12**）。
2. 把 USB 設成第一開機。
3. 開機後進入 Windows 安裝畫面。
4. 選擇 **「自訂：只安裝 Windows (進階)」** → 刪除系統磁區 → 選擇未配置空間 → 下一步。
5. 等待安裝完成，依指示設定帳號、地區等。

---

## 4️⃣ 安裝驅動與更新

1. 進入桌面後，打開 **設定 → Windows Update**，檢查更新。
2. 安裝主機板、顯示卡等驅動程式（建議到官網下載最新版本）。

---

✅ 完成！現在你就有乾淨的 Windows 11 23H2 環境了。