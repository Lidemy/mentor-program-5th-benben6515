#!/bin/bash

# 測試 ./num.sh 5 ，結果 : OK
# 註 : 使用方法在 README

# 跑迴圈建立 N.js 檔
for (( i = 1; i <=${1}; i = i + 1 ))
do
	touch "${i}.js";
	echo "檔案 ${i}.js 建立完成";
done
