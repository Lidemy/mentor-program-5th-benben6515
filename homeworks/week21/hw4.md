## 為什麼我們需要 React？可以不用嗎？
- 在回答這個問題之前，我覺得必須先回答 `為什麼我們需要使用框架` ，為什麼呢？我認為這是更深層的問題，因為框架現在發展的很快，不只有 3 種，還有很多，也有公司用自己的框架，如果只用原生的 JavaScript 不行嗎？可以！只是在原生中，可以達到同一事的方法太多了，所以會很難維護，例如 : A 喜歡寫復古風、B 喜歡寫花式，而我只能小心翼翼在夾縫中求生存。但是 `框架` 固定了一種風格，是不能任意修改的，在 `Library` 中還可以修改一些東西，例如 : jQuery 中的 `$`，我不開心可以換成 `&` 之類的。但是在 react 的 hook 中，用 useState 就是只能用 useState ，不能修改成 useData 之類的，而客製化的 hook 也是由舊的 hook 組合而成，因為框架是固定的，但除此之外，資料跟介面的分離也是框架會制定好的，對現在的框架來說是基本的。
- 可以不用 React 嗎？也可以！只是光效能上就差人家一大截了，React 有 Virtual DOM 的技術，就是在 HTML 的元素上有改變時，才去重新 render 改變的部分，但要在原生的 JavaScript 上做到，應該不容易，在原生要做到資料跟介面分離，在重新 render 的時候，只能全部打掉重練，光這一個就直得去用看看了，或是選則其他框架看看。

## React 的思考模式跟以前的思考模式有什麼不一樣？
- 在 React 中把所有的東西都 `模組化` 了，一般來說，我們只習慣把 function 拆成很多小的 function ，這其實就是模組化，因為這些很多的小 function 都是可以 `重複使用` 的，這對開發者來說算是一個基本能力，好處超多啊，好維護、好閱讀，好像也沒什麼壞處。
- 但 React 做到了，他把所有的東西都變成 component ( 組件 )，一個 button 、一個 div 都可以是 component，因為是 component ，所以可以一直重用，再加上 styled-component ，所以連 CSS 也可以是 component 。但其中最關鍵的地方是如何把保存一個有 `狀態` 的 component ，React 目前有兩個解決方案，在 16.8 版本之前有 `class component` 、之後有 `hook` ，但其實都有 `function component` ，只是差別在如何去使用 state 。
- 所以在 react 中要思考的是 : 我要如何拆 component ，但有趣的是：一個簡單的東西會一直用到，拆 component ！一個很複雜的東西，拆 component ！我會找到你，我會去拆你的 component ！


## state 跟 props 的差別在哪裡？
- state 是一個 component ( 組件 ) 當前的 `狀態`，除了 Number、String 外，還可以是一個 Array 或是 Object 。
- props 是由上層的 component 傳給下層 component `屬性 ( property )` ，除了 Number、String 外，還可以是一個 Array 或是 Object，甚至是一個 function 。
- 例如 : 下層的 component 要設定上層的 `state` ，可以把上層 setState 的 `setter function` 當成 `props` 往下傳，這樣下層就可以用這個 function，去修改上層 component 的值了。 

