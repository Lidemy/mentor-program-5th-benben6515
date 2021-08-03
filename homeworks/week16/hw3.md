- input :
	```javascript
	var a = 1
	function fn(){
		console.log(a) // 第一個 a
		var a = 5
		console.log(a) // 第二個 a
		a++
		var a
		fn2()
		console.log(a) // 第四個 a
		function fn2(){
			console.log(a) // 第三個 a
			a = 20
			b = 100
		}
	}
	fn()
	console.log(a) // 第五個 a
	a = 10
	console.log(a) // 第六個 a
	console.log(b) // 第一個 b
	```
- output : 
	```
	undefined
	5
	6
	20
	1
	10
	100
	```
- 第一個 a : 因為在 fn() 的 scope 裡有宣告 a ，所以 a 會先被 hoisting 到上面，可以看成 var a，所以會映出 `undefined`
- 第二個 a : 上面一行有把 a 重新賦值為 5 了，所以會映出 `5`
- 第三個 a : 因為 fn2() 先呼叫，但 fn2() 中沒有宣告，下面的 a = 20 也不會 hoisting，所以從 scopeChain 會往上找，會找到 fn() 裡的 a，此時 a = 6，所以會映出 `6`
- 第四個 a : 因為剛剛執行 fn2() 的時候，對 a 重新賦值為 20 了，所以會映出 `20`
- 第五個 a : fn() 執行結束，因為離開了 fn() 的 scope 了，自然會去抓全域的 a ，所以會映出 `1`
- 第六個 a : 上一行又把全域的 a 重新賦值為 10 了，所以會映出 `10`
- 第一個 b : 這個比較要想一下，因為在 fn2() 的時候，沒有宣告 b ，再往上的 scope 也都沒有，所以會在全域自動宣告一個 b = undefined，等 fn2() 執行到 b = 100 的時候，全域的 b 也被重新賦值為 100 了，所以最後一個會映出 `100`