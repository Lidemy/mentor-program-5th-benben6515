### 作業一 : 短網址系統設計

為了避免 single point of failure 
- Load Balancer 都用兩台，然後使用 Round-robin 的方式去輪流跑每個 Server 
- Database 使用基本的 RAID1 去做鏡像備份，所以一台壞了也還可以擋一下

![](https://i.imgur.com/RUKOLaw.jpg)

Ref:
- [CS75 : (Summer 2012) Lecture 9 Scalability](https://www.youtube.com/watch?v=-W9F__D3oY4)
- [Round-robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)
- [RAID](https://zh.wikipedia.org/zh-tw/RAID)