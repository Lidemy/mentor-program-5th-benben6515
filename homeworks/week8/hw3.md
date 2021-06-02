## 什麼是 Ajax？
- Ajax ( Acynchronous JavaScript and XML ) 非同步載入的 JavaScript & XML 技術
- 簡單說就是，在餐廳點餐時，不用在收銀台前等餐點好，可以在座位上等，餐點好了會有服務生送來，服務生就是 API 、整個用餐體驗就是 ajax
- 如果沒有 ajax ，可以想成只有一個人的餐廳，要點餐嗎？稍等；要加水嗎？稍等；餐點好了嗎？稍等；結帳嗎？稍等。
- 沒有 ajax 的 www 是 world wide wait

## 用 Ajax 與我們用表單送出資料的差別在哪？
- 當我們 submit 一個 form 表單時，頁面會重新整理。
- 使用 Ajax 時，頁面不會重新整理，使用者體驗比較好。

## JSONP 是什麼？
- JSONP ( JSON with padding ) 是使用 <script src="URL"></script> 的方式來傳送資料的方式
- 使用這種方式可以達到 CORS 的效果，不過這樣就有安全上的疑慮，想出來的人也是蠻奇耙的XD

## 要如何存取跨網域的 API？
1. 在同源的 domain 下發 request
2. 在 serve 端加上 `access-contorl-allow-origin: *`

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
- 因為這周是使用 `瀏覽器.js`， 而為了保護我們，所以有很多限制。
- 上一周是使用 `node.js`，所以沒有這些限制。
