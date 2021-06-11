## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
- VARCHAR : 可以限制 data 的 **最大** 長度，從 MySQL 5.0.3 版之後，最大長度已經支援到 65535 ( 2¹⁶ - 1 ) 了，所以在新版本中，如果需要固定長度的 TEXT，可以使用 VARCHAR。
- TEXT : **不可以** 限制 data 的 **最大** 長度，最大長度到 65535 ( 2¹⁶ - 1 ) ，如果有惡意的使用者輸入大量資料資，資料庫很快就會爆炸，能使用 VARCHAR 盡量使用 VARCHAR。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
- Cookie : ~~餅乾？~~ 從 server 傳給 user 的一個小型的 data ，browser 會幫我們儲存起來，通常在下次連到同樣的 sever 的時候 browser 會附帶回去，例如 : 記得使用者的登入資訊
- 設定 Cookie : ` document.cookie = "username=Benben; expires=13 Jun 2021 12:00:00 UTC; path=/"; ` ，或使用其他語言框架等等，格式上差不多 : <cookie-name>=<cookie-value>, <expire-time> 。
- 附帶 Cookie : 通常 browser 會自動在 `header` 中附帶 cookie，如果要查看，可以在開發人員工具中使用 `document.cookie;`，看到很多亂碼嗎？正常！因為通常都是加密過的。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- 安全機制 : 會員系統沒有安全機制，廢話！網頁的 header 就告訴大家了。雖然會員系統是為了防止機器人亂留言，但如果機器人亂註冊，目前好像還防不了。
- 重複登入 : 會員的辨示目前也沒辦法去預防，例如 : 重複登入，因為只要在資料庫中有撈到資料就可以登入。
- 會員盜用 : 有可能有惡意人事，在 header 中附帶 `set-cookie: username=NAME` 的方式，盜用帳號。