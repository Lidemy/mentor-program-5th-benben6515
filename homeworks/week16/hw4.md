- input : 
	```javascript
	const obj = {
		value: 1,
		hello: function() {
			console.log(this.value)
		},
		inner: {
			value: 2,
			hello: function() {
				console.log(this.value)
			}
		}
	}
		
	const obj2 = obj.inner
	const hello = obj.inner.hello
	obj.inner.hello() // ??
	obj2.hello() // ??
	hello() // ??
	```
- output: 
	```javascript
	2 // , obj.inner
	2 // , obj2
	undefined
	```
- 第一個，可以看成是 `obj.inner.hello.call(obj.inner)` ，所以此刻 this 的值是 `obj.inner` ，那他的 scope 中剛好有一個 property 是 `value`，其值為 `2`，故輸出 `2`
- 第二個，可以看成是 `obj.2.hello.call(obj2)` ，所以此刻的 this 的值是 `obj2` ，那他的值會 **參考** ( 如果說用傳址來說還是傳值 ) 到 `obj.inner` 這個物件，他的 scope 中也會有 `value` 這個 property，其值為 `2` ，故輸出 `2`
- 第三個，一樣看成是 `hello.call()` ，但我要講一個小細節，如果在前面的 call() 加入 null 會怎麼樣呢？像是 : `hello.call(null)` ，好的，經過實測 `hello.call()`, `hello.call(null)`, `hello.call(undefined)` ，在非嚴格模式下 this 的值都是 window ( 以瀏覽器為例 )，如果沒傳東西，預設值會是 `null` 但之後轉成 window，所以不是直接是 window ，有一個轉換的過程，雖然結果都是 window ，那麼這邊的 this 的值就會 window，但沒有 `value` 這個 property ，所以會輸出 `undefined` ( 但如果在 window 中宣告 `var value = 5` ，就會輸出 `5` )
  - This 的預設值是 `null` ，因為是 ES3 的規格書，不確定之後有沒有改
  - Ref. : http://dmitrysoshnikov.com/ecmascript/chapter-3-this/#function-call-and-non-reference-type
