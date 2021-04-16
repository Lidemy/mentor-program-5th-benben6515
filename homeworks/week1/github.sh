#!/bin/bash

res=`curl https://api.github.com/users/$1 -s | tail -n 15`;

echo $res | grep -o '"name": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"bio": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"location": ".*",' | cut -d '"' -f4;
echo $res | grep -o '"blog": ".*",' | cut -d '"' -f4;