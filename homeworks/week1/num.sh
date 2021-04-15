#!/bin/bash

for (( i = 1; i <=${1}; i = i + 1 ))
do
	touch "${i}.js";
	echo "檔案 ${i}.js 建立完成";
done
