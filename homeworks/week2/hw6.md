``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 跑第一個迴圈，i = 0，如果當中有負數，結束並 return 'invalid' ( 這邊的 i 是第一個迴圈的 )
2. 第一個迴圈完，i = 1，此時如果 **arr.length <= 2 不會執行第二個迴圈，結束並 return 'Valid'**
3. 跑第二個迴圈，i = 2，如果 arr[2] !== arr[1] + arr[0]，結束並 return 'invalid' ( 從這邊 i = 2 開始的 i 是第二個迴圈的 )
4. 跑第二個迴圈，i = 3，如果 arr[3] !== arr[2] + arr[1]，結束並 return 'invalid'
5. 跑第二個迴圈，i = 4，如果 arr[4] !== arr[3] + arr[2]，結束並 return 'invalid'
6. 跑第二個迴圈，i = 5，如果 arr[5] !== arr[4] + arr[3]，結束並 return 'invalid'
7. 兩個迴圈都跑完，**當中都沒有 return 'isValid' 的話，最後結束並 return 'valid'**

## 解釋

這個 function 是在測試傳入的陣列 arr **是否每一項都是前兩項的合**，
如果不是就結束並 return 'invalid'；
如果是就結束並 return 'Valid'。

是的，就是鼎鼎大名的 [Fibonacci 數列](https://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97) ，另外 Fibonacci 數列 的 arr[n] \ arr[n-1]，n 越大越接近黃金比例 (1.6180339887...)。

要注意的是多了第一個迴圈，**判斷是否所以陣列都為正**，
像是 : [-1, -1, -2, -3, -5] 
雖然跑第二個迴圈會過，
但會先被第一個迴圈擋下，結束並 return 'invalid'。