## 十一到十五週心得

先自首，這周沒什麼複習 XDD
但有看了之前的整理筆記 : 
- [ \[BE101\] 用 PHP 與 MySQL 學習後端基礎](https://hackmd.io/bOZMy5lZQ6eQmGTy_nmEeA?view)
- [ \[FE201\] 前端中階：那些前端會用到的工具們](https://hackmd.io/CHaHgdZQR6WhQwNM__ZWBw?view)
沒什麼複習是因為在研究 Docker ，雖然還是沒有用 Docker 部署完成，但是了解了很多相關知識 ，悄為整理在下面。

---

- Week 11 （06/21 ~ 06/27）：資訊安全
  可能第一次接觸後端，整個卡到不行，不過還好 php 之後可能用不太到，因為 php 蠻舊的加上又後端領域的關係，很多在業界的學長姊也說前端大都用不對 php，算是一路跟著老師做，有點不踏實的感覺，但現在回頭看，總算有比較懂在幹嘛了。不過這周的另一個重點**資安**倒是學到蠻多，但前以就知道 XSS 的概念，如 : `<h1>hello</h1>`，但還是補足了其他重要的資安觀念，SQL injection ( SQL 版的 XSS )、加密等，算是課程特別的地方，因為很多的課都會忽略這一塊，所以我覺得還蠻棒的！

- Week 12 （06/28 ~ 07/04）：前後端整合
  這周學習了 jQuery, Bootstrap 兩大好用的工具，都是快進開發必備的工具，雖然 jQuery 已漸漸被淘汰，但仍有不少公司在使用，畢竟也曾經是前端的老大哥。Bootstrap 也蠻好用，但是不能太依賴他，就像一個 trap 一樣，除非你很熟悉 CSS，不然要改動得話還是很不方便，被綁死死的，所以還是要熟悉 CSS 再學 Bootstrap 會比較好。

- Week 13 （07/05 ~ 07/11）：現代前端工具
  學習了各懂前端的新工具，但是目前還是學習的狀態，所以感覺不太出來好用之處 XD，但是感覺都是之後工作的神兵利器，可以先好好了解一下，尤其是 Webpack 的部分。

- Week 14 （07/12 ~ 07/18）：伺服器與網站部署
  本來應該是部署地獄的，但好在有很多前人的筆記們，讓我可以在這周部署的時候，沒什麼困擾，但是怎麼可以！ ( 我聽到學長姊的吶喊了 )，所以又自己挖了很多坑，像是 Docker 要補都補不完，完完全全新的東西，官方文件長到像規格書了，又要學新的 Dockerfile 語法，嗯，還是之後再研究 ( 抱歉了 @jasOn 助教 QQ )

- Week 15 Week15（07/19 ~ 07/25）：複習週
  - Lidemy 期中考試 : 總共 4 題，每題 30 分鐘，共 2 小時。
    分別考了切板、DOM 元素操作、串 API、整理資料。
    最後一題沒寫完，飲恨啊 QQ
    但也不意外，前面環境就搞很久，完全不知道怎麼看渲染頁面 ( live server )，原來連結已經設定好會自動渲染，再來是視窗的問題也拉很久，想說怎麼看不到我的元素 ( 因為視窗太小跑板 )，然後很想在編輯器的地方找 vim 的設定，平常習慣了 ( 我竟然也有這一天 )，但是沒有，好吧，雖然用起來不會快多少 XD
  - 自我檢討 : 
    前面一直怪罪別的，但明明是自己的問題吧 XD ，太緊張、一直 typo、不夠熟悉，都要再加強！
    - 第一題 : 切板還可以更熟悉的，想說用簡單的 `float` 就可以搞定的東西，還是卡住了，後來用 flex 重構，雖然切板完全沒有 Google 求救，但還是花了太多時間，需要再加強切板。
    - 第二題 : 基本的操作沒太大問題，但有些 WebAPI 常常跟 jQuery 搞混，**function 的拆分跟重構應該要在更熟悉的，對工程師來說，應該就跟吃飯喝水一樣**，還有 localStorage 太少用，忘記怎麼寫了，忘記了應該要立刻 Google 了。
    - 第三題 : 串 API 也沒什麼太大的問題，但是碰到 `li` 的樣式問題，debug 了一下，很快就用了 `list-style: none` 修改
    - 第四題 : 跑了一個迴圈處理資料，有把資料合併到一起了，很接近答案，但後來時間不夠 ( 前面切板太久，錯就錯，理由很多 )


---

**Docker 概念筆記** :
- 三大重要元素
  - Dockerfile : 建立 Image 的藍圖
  - Image : 執行 Container 的模板
  - Container : 執行程式
- Dockerfile ( Ref : https://docs.docker.com/engine/reference/builder/ )
  - 建立 Dockerfile
  - 基楚語法 :  FROM, RUN, ENTRYPOINT
  - The exec form, which is the preferred form:
  - `ENTRYPOINT ["executable", "param1", "param2"]`
  - The shell form:
  - `ENTRYPOINT command param1 param2`
  - 每個語法的 Layer 互相獨立
- Volume
  - 一但 Container 關掉裡面的檔案變動會不見，所以才需要 Volume 保存檔案的變動
  - 如 : 保存 database 的資料 
- docker-compose ( Ref : https://docs.docker.com/compose/compose-file/compose-file-v3/ )
  - 可以結合多種環境，很多時候我們只使用 node.js 等，但如果要結合資料庫等等，就必須使用 docker-compose
  - .yaml 檔 : 是一個可讀性高，用來表達資料序列化的格式。( Ref : https://zh.wikipedia.org/wiki/YAML )
