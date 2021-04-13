## 跟你朋友介紹 Git

既然被蔡哥發現我永不貧血 `血成四` 的秘密了，
但他不知道的是 : 其實我不只`血成四`，月圓的時候還會變成 `攻城獅` 呢！

不過蔡哥都知道我的秘密了，也只能勉強教他 Git 囉～

自己去找我的筆記吧，我把所有寶藏都放在那裏了，自己去找吧！
=> [那裏](https://hackmd.io/fQ7tF7CDRBWtXVtUJwxe1g?view)

威，不是~

要管理笑話也是不錯的
1. 先下載 [Git](https://git-scm.com/) ，repeat 下一步， you know it!
2. 打開 GitBash，會看到一個黑黑的視窗，先不要怕。
3. 輸入 `cd desktop` ，就是把當前工作區域移到桌面。
4. 再輸入 `mkdir jokes` ，這時候桌面會多一個叫 jokes 的資料夾。
5. 接著在輸入 `cd jokes` ，就是把當前工作區域移到 jokes 資料夾。
6. 輸入 `touch joke.txt`，這就是你的 joke 文字檔。
7. 輸入 `git init`，初始化 Git
8. 修改你的 joke.txt ver2 版後，存檔。
9. 輸入 `git add joke.txt`，將 joke.txt 加入版本控制。
10. 輸入 `git commit -m "joke ver2"`，把 joke.txt 更新成 joke ver2 版

蔡哥到這裡有跟上嗎@@?
如果沒有可以找小頭佛 (聽起來怪怪的) 一起來報下一期唷~

那就繼續囉~ 再來是管理的部分
1. 輸入 `git log`，可以查看歷史版本。
2. 找到你要的版本號，對應到 joke ver2 的那個版本，並複製起來。( 找不到？這就是 commit message 的重要性 )
3. 輸入 `git checkout` 後 `貼上剛剛複製的版本號` 在按 enter，就會回到 joke ver2 版唷。
4. 如果要回到最新版， 輸入 `git checkout master`。

什麼你還要有遠端的功能才可以拿冠軍？

好吧，好人當到底
1. 先註冊 GitHub 帳號。
2. 開一個 repository 叫做 jokes。
3. 輸入 `git remote add origin` 加上 `剛剛 repository 的網址`　按 Enter，在遠端加入 repository。
4. 輸入 `git push -u origin master`，把你的 (冷) 笑話推上去。
5. 這時你就會發現你的笑話，在 GitHub 上大家都看的到。
6. 有些人覺得你的笑話有夠難笑，於是跟你討論，你在遠端修改後完後，想要更新到電腦。
7. 這時可以輸入 `git pull origin master`，把遠端的笑話下載更新到電腦。

好啦，教學到此。
愛台灣啦 ~ 多練習幾次冠軍一定是你的！(應該吧？)