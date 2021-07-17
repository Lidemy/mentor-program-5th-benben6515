## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
- Domain Name System ，它作為將域名和IP位址相互對映的一個分散式資料庫，能夠使人更方便地存取網際網路。
- 對 Google 的好處 : 當然是可以繼續監視人民，持續監控資本主義啊。Google **聲稱**為了效能及安全, 只有使用者的IP位址（24小時後刪除）、ISP和地理位置資訊（永久儲存）會被伺服器留存。
- 對人民的好處 : 就是有個 DNS 服務可以用 XD ，不用再記長長的 ip 名子，可以記有語意的網址，跟其他第三方的 DNS 服務，比起來安全多了，如 : 插入廣告、導向其他網頁 ...等。
- Ref : https://zh.wikipedia.org/wiki/Google_Public_DNS

## 什麼是資料庫的 lock？為什麼我們需要 lock？
- 資料庫的 lock 是指，在進行資料庫的操作的之前，先把資料庫上鎖，可以鎖住一個 row 或是整個 table
- 之所以需要 lock 是因為，如果同時有多個 SQL 操作同一筆資料，沒有 lock 就會對資料庫產生重覆的操作，如 : 搶票系統，如果只剩 1 張票，有 10 個人一起搶，如果沒有 lock 就會超賣，客人很開心，但你的老闆不開心。

## NoSQL 跟 SQL 的差別在哪裡？
- SQL 是關連式資料庫，資料是以資料表 (table) 的方式存放，資料有明確的關連，支持 SQL 語法與 SQL 的邏輯。
- NoSQL ( Not Only SQL ) 是非關連式資料庫，使用 JSON 格式儲存，並不支持 SQL 語法 與 SQL 的邏輯，使用 ODM (Object Document Mapper) 與 ORM (Object Relational Mapping) 存取資料庫。

## 資料庫的 ACID 是什麼？
- A ( atomicity ) : 原子性，所有的操作，全部完成或很全部不完成。
- C ( consistency ) : 一致性，操作開始之前和結束以後，資料庫的完整性沒有被破壞，如 : 買賣完的金額要一致。
- I ( isolation ) : 隔離性，防止多個操作執行時，由於交叉執行而導致數據的不一致。
- D ( durability ) : 持久性，處理結束後，對數據的修改就是永久的，即便系統故障也不會丟失。