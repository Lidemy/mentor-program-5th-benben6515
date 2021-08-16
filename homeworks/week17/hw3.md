## 什麼是 MVC？
- MVC ( Model, View, Controller ) ，是一種開發時的撰寫風格，可以將資料 ( Model ) 跟視覺呈現 ( View ) 透過控制器 ( Controller ) 分離的更透澈，以使用者所見的功能來說，差別不大內容是一樣的，但以開發人員來說，維護的成本大幅下降！
- 雖然沒有一個明確的規範，但完全的分開的話就可以大幅提升可維護性，那如何分離？還是要看團隊的風格，每個團隊都不一樣，甚至也某種原因而分不乾淨的。
- 也許 MVC 架構前期會比較花時間，但之後的維護會很輕鬆的，讚嘆想出 MVC 的開發者！


## 請寫下這週部署的心得
- hw1 : https://pacific-eyrie-76598.herokuapp.com/
- hw2 : https://limitless-reef-07762.herokuapp.com/
  - 抽獎 API : https://limitless-reef-07762.herokuapp.com/prizeApiRandom
  - 所有獎項 API : https://limitless-reef-07762.herokuapp.com/prizeApiAll
- heroku 比起自己部署真的少很多坑，但我還是遇到了不少問題，後來上小樹屋求救，跟大家一起線上 debug 也蠻棒的！我遇到的問題是 : 如果 migration 有新增欄位，要把舊的 migration 檔案刪掉，還要把遠端 database ( 這邊是 clearDB ) 的 Table 全刪掉再執行部署一次！


## 寫 Node.js 的後端跟之前寫 PHP 差滿多的，有什麼心得嗎？
比起 PHP 我還是比較喜歡 Node.js 寫後端，雖然還沒辨法快速上手，回去看了一些文件花了比較久，才比較懂在幹嘛，要我開一個簡單的 Server ，就兩三個路由那種，是沒有問題的，但頁面一多加上要拆成 MCV 架構，我就開始亂掉了，說直白一點，不看影片的話我自己寫不出來，回去看了幾次跟著做幾次，才比較理解為什麼要這樣寫，但很多東西好像也沒這麼多為什麼，寫就對了 (？) 

像是 : Express 的起手式中
```javascript
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```

你可能知道他在幹嘛，但為什麼要 `let app = express()` ？
這行是做什麼的？不加後面的小括號可以嗎？用 new 可以嗎？不用會怎樣嗎？
我不知道，除非我去看源始碼，或是自己亂搞亂試看看，老實講兩種都蠻耗時間的，但如果不要去管這麼多為什麼，寫就對了，也許會順很多吧 QQ
