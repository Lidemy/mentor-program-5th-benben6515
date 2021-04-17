#!/bin/bash

# 測試 ./github.sh aszx87410 ，結果 : OK
# 註 : 使用方法在 README

# 使用 curl 取得 API
res=`curl https://api.github.com/users/$1 -s | tail -n 15`;

# 使用 gerp 取得我要的欄位，使用 cut 處理字串
echo $res | grep -o '"name": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"bio": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"location": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"blog": ".*",' | cut -d '"' -f4;

# -s 加上助教 @JAS0N HUANG 提示的參數，讓 output 乾淨很多
# tail -n 15 取 JSON 倒數 15 行資料，優化後面匹配的效率
# gerp -o 最關鍵的地方 ，-o 這參數平常根本找不到 ( 不用找了鳥哥那也沒有，我總共找了 8小時 )
# cut -d '"' -f4 後面的處理簡單用 cut 就完成了 ( 可以參考鳥哥 cut 介紹)

# 解題過程 : https://github.com/Lidemy/forum/discussions/50
