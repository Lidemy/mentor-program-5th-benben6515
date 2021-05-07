## 請以自己的話解釋 API 是什麼

API ( Application Programming Interface )
應用程式介面。

簡單說就是，應用程式的 `接口` ，方便交換資料使用。

因為多時候我們只是要取得簡單的數據，並不用整個網頁載入進來，像是 hw4.js 裡面的觀看人數，我們不用一個一個點進去看，然後為了看一個觀看人數還要等他載入一下等他跑完，最後才取得我們要的資料，使用 API 可以大幅減少時間跟效能，熟悉 API 後我們跟網路世界只差一個 request ，就可以取得你想要的資訊。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- `418` : I'm a teapot
    - The server refuses the attempt to brew coffee with a teapot.
    - 覺得很酷的 status Code ， 服務器拒絕用茶壺沖泡咖啡 ( ? ) ，可是我就想喝咖啡呀。
- `429` : Too Many Requests (en-US)
    - 用戶在給定的時間內 ("rate limiting") 發送了過多的請求。
    - 測試、爬蟲的時候需要注意 rate limiting ，不然 sever 會哭哭。
- `451` : Unavailable For Legal Reasons
    - 用戶端請求違法的資源，例如受政府審查的網頁。
    - 不要黑白來唷，政府什麼都知道。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| 說明 | Method | path | 參數  | 範例 |
|---|---|---|---|---|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /books/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名稱 | 無              |
| 更改餐廳   | PATCH   | /restaurants/:id     | name: 新餐廳名稱 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
