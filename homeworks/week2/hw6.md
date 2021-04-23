``` js
/*line 0*/  function isValid(arr) {
/*line 1*/    for(var i=0; i<arr.length; i++) {
/*line 2*/      if (arr[i] <= 0) return 'invalid'
/*line 3*/    }
/*line 4*/    for(var i=2; i<arr.length; i++) {
/*line 5*/      if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
/*line 6*/    }
/*line 7*/    return 'valid'
/*line 8*/  }

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
01. 執行 line 1，**進入第一個迴圈**，宣告變數 i = 0，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
02. 執行 line 2，此時 i = 0，進入 if 判斷式，檢查是否 arr[0] < = 0？ 否，結束 if 判斷式。
03. 執行 line 3，此時 i = 0，結束第一次迴圈，i++，此時 i = 1，返回 line 1。
04. 執行 line 1，此時 i = 1，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
05. 執行 line 2，此時 i = 1，進入 if 判斷式，檢查是否 arr[1] < = 0？ 否，結束 if 判斷式。
06. 執行 line 3，此時 i = 1，結束第一次迴圈，i++，此時 i = 2，返回 line 1。
07. 執行 line 1，此時 i = 2，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
08. 執行 line 2，此時 i = 2，進入 if 判斷式，檢查是否 arr[2] < = 0？ 否，結束 if 判斷式。
09. 執行 line 3，此時 i = 2，結束第一次迴圈，i++，此時 i = 3，返回 line 1。
10. 執行 line 1，此時 i = 3，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
11. 執行 line 2，此時 i = 3，進入 if 判斷式，檢查是否 arr[3] < = 0？ 否，結束 if 判斷式。
12. 執行 line 3，此時 i = 3，結束第一次迴圈，i++，此時 i = 4，返回 line 1。
13. 執行 line 1，此時 i = 4，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
14. 執行 line 2，此時 i = 4，進入 if 判斷式，檢查是否 arr[4] < = 0？ 否，結束 if 判斷式。
15. 執行 line 3，此時 i = 4，結束第一次迴圈，i++，此時 i = 5，返回 line 1。
16. 執行 line 1，此時 i = 5，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
17. 執行 line 2，此時 i = 5，進入 if 判斷式，檢查是否 arr[5] < = 0？ 否，結束 if 判斷式。
18. 執行 line 3，此時 i = 5，結束第一次迴圈，i++，此時 i = 6，返回 line 1。
19. 執行 line 1，此時 i = 6，檢查是否 i < arr.length ( 長度為 6 )？ 否，**結束第一個迴圈**，往 line 4 執行。

---

20. 執行 line 4，**進入第二個迴圈**，宣告變數 i = 2，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
21. 執行 line 5，此時 i = 2，進入 if 判斷式，檢查是否 arr[2] 不等於 arr[1] + arr[0]？ 否，結束 if 判斷式。
22. 執行 line 6，此時 i = 2，結束第一次迴圈，i++，此時 i = 3，返回 line 4。
23. 執行 line 4，此時 i = 3，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
24. 執行 line 5，此時 i = 3，進入 if 判斷式，檢查是否 arr[3] 不等於 arr[2] + arr[1]？ 否，結束 if 判斷式。
25. 執行 line 6，此時 i = 3，結束第一次迴圈，i++，此時 i = 4，返回 line 4。
26. 執行 line 4，此時 i = 4，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
27. 執行 line 5，此時 i = 4，進入 if 判斷式，檢查是否 arr[4] 不等於 arr[3] + arr[2]？ 否，結束 if 判斷式。
28. 執行 line 6，此時 i = 4，結束第一次迴圈，i++，此時 i = 5，返回 line 4。
29. 執行 line 4，此時 i = 5，檢查是否 i < arr.length ( 長度為 6 )？ 是，繼續往下執行。
30. 執行 line 5，此時 i = 5，進入 if 判斷式，檢查是否 arr[5] 不等於 arr[4] + arr[3]？ 否，結束 if 判斷式。
31. 執行 line 6，此時 i = 5，結束第一次迴圈，i++，此時 i = 6，返回 line 4。
32. 執行 line 4，此時 i = 6，檢查是否 i < arr.length ( 長度為 6 )？ 否，**結束第二個迴圈**，往 line 7 執行。
33. 執行 line 7，因為執行到 return 了，return 'valid' 並結束 function。


## 解釋

這個 function 是在測試傳入的陣列 arr **是否每一項都是前兩項的合**，
如果不是就結束並 return 'invalid'；
如果是就結束並 return 'Valid'。

是的，就是鼎鼎大名的 [Fibonacci 數列](https://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97) ，另外 Fibonacci 數列 的 arr[n] \ arr[n-1]，n 越大越接近黃金比例 (1.6180339887...)。

要注意的是多了第一個迴圈，**判斷是否所以陣列都為正**，
像是 : [-1, -1, -2, -3, -5] 
雖然跑第二個迴圈會過，
但會先被第一個迴圈擋下，結束並 return 'invalid'。