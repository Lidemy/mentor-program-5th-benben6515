- input : 
	```javascript
	for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
	```
- output : 
  ```
	i: 0
	i: 1
	i: 2
	i: 3
	i: 4
	5 // 0s
	5 // 1s
	5 // 2s
	5 // 3s
	5 // 4s
	```
- 執行時會先依序呼叫的 function 放到 `call stack` ， `call stack` 是 Stack 的資料結構
- 但因為沒有呼叫的 function ，所以依序放入 `task queue` 裡，`task queue` 是 Queue 的資料結構
- 因為 setTimeout 是非同步的 API，所以 setTimeout 的會先放到 `webapi` 裡，完成之後會把 callback 加入 `task queue` 的後面
- 等到 `call stack` 中沒東西了，`task queue` 就會把剩下的任務加入 `call stack` 中執行
- 但 setTimeout 分別設定的是 0, 1, 2, 3, 4 秒，所以會依照這個時間加入 `task queue` 再放到 `call stack` 中，但因為 for 迴圈裡是使用 var 宣告，所以先會被 `hoisting` 到全域變數中，然後 for 迴圈繼續跑，迴圈結束後，此時 i = 5，所以後面的 `console.log(i)` 都會是 5，才會映出 5 個 5