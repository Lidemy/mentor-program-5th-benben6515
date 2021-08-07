- input : 
  ```javascript
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 0)
  console.log(3)
  setTimeout(() => {
    console.log(4)
  }, 0)
  console.log(5)
  ```
- output : 
	```
  1
  3
  5
  2
  4
	```
- 執行時會先依序呼叫的 function 放到 `call stack` ， `call stack` 是 Stack 的資料結構
- 但因為沒有呼叫的 function ，所以依序放入 `task queue` 裡，`task queue` 是 Queue 的資料結構
- 因為 setTimeout 是非同步的 API，所以 setTimeout 的會先放到 `webapi` 裡，完成之後會把 callback 加入 `task queue` 的後面
- 等到 `call stack` 中沒東西了，`task queue` 就會把剩下的任務加入 `call stack` 中執行
- 所以 setTimeout 的 function 都會先被抽出來放到 `webapi` 裡，即使 time 的設定是 0 毫秒
