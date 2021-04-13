## 請解釋後端與前端的差異。

基本上使用者看到的都是前端 ( 你看，前端，到處都是前端 ) ，看不到的是後端。

前端像是 : 標題、表格、圖片...等，都算是前端負責的。
後端像是 : 使用者傳送的資料、資料庫、伺服器...等，就是後端的部分。

不過隨著 SPA 等技術發明 ( [跟著小明學專有名詞](https://hulitw.medium.com/introduction-mvc-spa-and-ssr-545c941669e9) )，前端話語權越來越大，講話越來越大聲 (你是在大聲什麼啦？)，
後端逐漸勢微，甚至有人譏笑 : 「你是後端工程師？是不是只要管好 API 就好？」
幫後端QQ  ㄟ，不是，後端還是很重要的好嗎！

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. User 在瀏覽器輸入 Javascipt 並按下 Enter。
2. 瀏覽器送出搜尋 JavaScript 的 Request 給 Google_Serve。
3. Google_Serve 去 DataBase 抓 JavaScript 相關的資料回來。
4. Google_Serve 回傳 Response 給 Local_端 。
5. Local_端 依照 Response 的資料渲染給 User 看到。
6. User 看到 JavaScript 相關 搜尋結果。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `notepad` : 開啟記事本；你說這有什麼功用？就是當你突然想起 9X9=87 的時候，但你沒裝 subline 或想不起 `subl` 這個語法，就可以用來紀錄。

2. `exit` : 關閉 terminal ；我常用的語法，沒有使用滑鼠的狀況下很方便或是裝 B 的時候(?)，我要成為鍵盤大師XDD

3. `shutdown -s -t 10` : 電腦將在 10 秒內關機；什麼你說還沒存檔，還剩下..8..7..6，阿門。 註 : 謹慎使用。