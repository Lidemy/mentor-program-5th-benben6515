# AWS 部署

#### LAMP 環境 & 各種名詞

- L : 「Linux」作業系統
- A : 「Apache」網頁伺服器
- M : 「MySQL」資料庫
- P : 「PHP」程式語言

( 加起來就是 LAMP 環境，所以不是一個名詞，L, A, M, P 可能都不一樣 )

- [Ubuntu](https://zh.wikipedia.org/zh-tw/Ubuntu) : 以桌面應用為主的Linux發行版
- [phpMyadmin](https://www.phpmyadmin.net/) : 用 PHP 管理 MySQL 

---

#### 註冊 AWS
- 註冊時資料都必須填 `英文`
- 地址可參考 : 中華郵政 - [地址中翻英](https://www.post.gov.tw/post/internet/SearchZone/index.jsp?ID=130112)
- 註 : 使用 `臺灣之星` 電信可能收不到認證簡訊！可向家人朋友借用手機

#### 配置
- AWS ( Web Serveice )
  - AWS EC2 ( Elastic Compute Cloud )
  - [Compute Cloud](https://aws.amazon.com/what-is-cloud-computing/)
- AMI type : 
  - Ubuntu Server 20.04 LTS
  - [AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
- Instance Type : 
  - t2.micro
  - [t2 規格表](https://aws.amazon.com/ec2/instance-types/t2/)
- 中間的設定都預設就可以了
- Configure Security Group : 
  - HTTP : 預設 80 port
  - HTTPS : 檢設 443 port
- 設定私鑰
  - 下載下來的檔案要保存起來之後會用到
- 回到 AWS Instances
  - 就會看到 serve 是 runing 的狀態
  - 把 IPv4 的 IP 記下來之後會用到
- AWS EC2 設定完成！

---

#### LAMP 安裝設定
- 使用 git bash 遠端連線
  - ssh : `ssh -i FileURL ubuntu@IPv4`
  - 其中的 -i 參數是 identity_file 的義思
  - 後面的 "ubuntu" 其實是主機名稱，只是剛好都叫 ubuntu
  - 可參考以下 : `ssh remote_host_userID@server.example.org`
  - [SSH => Secure Shell or Secure Socket Shell](https://searchsecurity.techtarget.com/definition/Secure-Shell)
- 第一次進來要先更新 ubuntu 
  - `sudo apt update`
  - `sudo apt upgrade`
  - `sudo apt dist-upgrade`
  - 也可以用 && 全部連在一起更新
    - 如果你跟我一樣想知道 sudo,  apt 是什麼可以參考 [這篇](https://embeddedinventor.com/sudo-apt-update-command-explained-for-beginners/)
    - sudo => "super-user do"
    - apt => "Advanced Packaging Tool"
- 安裝 Taskel
  - `sudo apt install taskel`
  - [Taskel](https://help.ubuntu.com/community/Tasksel) 是一個環境資源包，可以快速安裝 LAMP server 環境，其他還有多達 40 種的環境
- 安裝 phpMyadmin
  - `sudo apt install phpmyadmin`

#### 上傳檔案
- 設定資料夾權限
  - `cd /var/www/html`
  - `sudo chown ubuntu /var/www/html`
  - chown => change owner :  https://blog.gtwang.org/linux/linux-chown-command-tutorial/
- git clone
- FileZlli : http://www.jysblog.com/coding/web/aws-%E9%80%8F%E9%81%8E-filezilla-%E4%BD%BF%E7%94%A8-key-pairs-%E7%99%BB%E5%85%A5-aws-ec2-%E5%AD%98%E5%8F%96%E6%AA%94%E6%A1%88/


#### 設定域名
- gandi.net
- 選一個 `.tw` 結尾的域名
- 結帳，**輸入折扣碼**，最重要的一個步驟！ (上面的錯了都可以重來，錢付出去了就是付出去了)

---

#### Ref
- AWS
  - offical : https://aws.amazon.com/tw/free/
  - EC2 : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html
- 名詞解釋
  - [深入淺出的AWS服務教學介紹 ( 別的課程文章，可以看看就好 ) ](https://progressbar.tw/posts/224)
  - [Ubuntu](https://zh.wikipedia.org/zh-tw/Ubuntu)
  - [Taskel](https://help.ubuntu.com/community/Tasksel)
- CLI
  - [sudo](https://embeddedinventor.com/sudo-apt-update-command-explained-for-beginners/)
  - [apt](https://embeddedinventor.com/sudo-apt-update-command-explained-for-beginners/)
  - [ssh](https://searchsecurity.techtarget.com/definition/Secure-Shell)
  - [wget](https://www.gnu.org/software/wget/manual/wget.html)
  - [chown](https://blog.gtwang.org/linux/linux-chown-command-tutorial/)

---


![](https://i.imgur.com/Duruywg.png)
> 看到這一刻太感動了

**部署跟名詞解釋到這邊告一段落**

心得 : 
本來來自己試看看**只看 AWS 的官方文件**就部署成功，但真的太難了，應該也都是看學長姊的文章或是另人寫的文章，才完成部署的吧XD

不過即然有前人寫好的人手把手教學，那我這邊就不再造輪子了，所以整理了不少名詞，發現很多人應該也不懂，例如 : 
1. `sudo` 是什麼？也許你會知道，喔，那管理員的意思，但原文是 : `super do`
2. `apt` 是什麼？這個應該又更少人知道了，可以會以為是 apache 的語法，但這是 `Advanced Packaging Tool`

當然還有很多名詞，我都放在上面的 Ref 了

我覺得應該很多人都是跟著複制貼上，如果我是面試官看到你履歷寫有部署經驗，我就問你 : apt 是什麼意思，如果你答不出來，可以合理懷疑你真的會部署嗎？

好啦，其實前端不會問這些啦，部署問題一律丟給後端，但如果是後端還是要知道一下比較好喔 XD

以上是我的簡單心得筆記跟挖坑血淚史

**以下挑戰題 ( 沒有完成 )，坑挖到一半，但是太深了QQ / 待續...**

---

#### 挑戰題

- LNAMP : https://magiclen.org/lnamp/
  - L : 「Linux」作業系統
  - N : 「Nginx」網頁伺服器 
  - A : 「Apache」網頁伺服器
  - M : 「MySQL」資料庫
  - P : 「PHP」程式語言

查看cpu, mem : `htop`
查看文件 : `less`


![](https://i.imgur.com/jk9ISWz.png)
> 好，先這樣吧XD


---

- Docker
  - offical : https://www.docker.com/
  - start : https://docs.docker.com/get-started/
- AWS Docker
  - https://aws.amazon.com/tw/docker/

其他資源
  - [jason 助教的部署筆記](https://medium.com/@jas0nhuang/%E7%94%A8-docker-compose-%E5%9C%A8-aws-ec2-%E4%B8%8A%E9%83%A8%E7%BD%B2-lemp-%E7%B6%B2%E7%AB%99-472439e04b42)
  - [Docker 學習手冊 v1.0](https://philipzheng.gitbook.io/docker_practice/)
  - [鐵人](https://ithelp.ithome.com.tw/users/20103456/ironman/1320)