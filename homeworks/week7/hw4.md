## 什麼是 DOM？
- DOM ( Document Object Model ) 在 window 底下的 Model 之一，簡單說就是將網頁元素轉換成類似 Object 的模型， 所以我們可以操作網頁上的 UI、元素等等。
- 可以使用 getElement, querySelector 等方法來取得元素，querySelectorAll 則是將網頁的部分 DOM 元素轉成類似 Array 的 NodeList。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
- 從 window 底下開始一層一層往下傳到 target 元素，捕獲是第一階段從上往下的過程；冒泡是第三階段從下往上的過程，第二階段，其實就是在 target 的時候，因為本身沒有左右的捕獲、冒泡事件。
- 因為第二階段在 target 元素沒有分捕獲或是冒泡事件，而且只會有一瞬間，其實捕獲冒泡對我們來說也是一瞬間，但她始終都在，只是我們沒有下監聽，所以無法察覺。
- `addEventListner('事件', callback function, true/false)`，第三個參數其實就是 useCapture ，預設為 false，決定要把間聽的事件放在捕獲 ( true ) 或是冒泡 ( false ) 階段，但不管監聽下在哪，背後的捕獲與冒泡機制都會在，他會在，他永遠都在。

## 什麼是 event delegation，為什麼我們需要它？
- Event Delegation（事件委派）是一種因為冒泡機制而能大幅減少下監聽數目的方法，看起來只要在父節點下一個監聽，但需要在子節點上加入我們要的條件。
- 例如 : 加入 id, class, attribute 等等，但比起在子節點一個一個下監聽方便很多，而且也可以監聽動態新增的子節點，好方法不用嗎@@？　
- 但使用上還是有個限制，就是 : 監聽的事件要一樣、callback function 要類似，如果事件、callback function 都不一樣，還是乖乖一個一個下監聽吧 XD

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
- event.preventDefault() : 取消該事件，但不會影響事件的傳遞，捕獲冒泡機制仍然會在，他一直都在。
- event.stopPropagation() : 遇到的時候，捕獲或是冒泡就不再往下傳了，毆，天呀！捕獲冒泡機制消失了嗎？這個壞人他讓捕獲冒泡機制停止了QQ
- 範例 : [codepen 原始碼](https://codepen.io/benben6515/pen/wvJqeoO?editors=0011)
```javascript
// 第一個 a  捕獲 listener 
document.querySelector('a.link_1').addEventListener('click', (e) => {
    console.log('click 1 capturing!')
    e.preventDefault();
}, true)

// 第一個 a 冒泡 listener
document.querySelector('a.link_1').addEventListener('click', (e) => {
    console.log('click 1 bobbling!')
    e.preventDefault();
}, false)
```

```
click 1 capturing!
click 1 bobbling!
```
> 但是不會有超連結新分頁或是轉跳

```javascript
// 第二個 a 捕獲 listener
document.querySelector('a.link_2').addEventListener('click', (e) => {
    console.log('click 2 capturing!')
    e.stopPropagation();
}, true)

// 第一個 a 冒泡 listener
document.querySelector('a.link_2').addEventListener('click', (e) => {
    console.log('click 2 bobbling!')
}, false)
```

```
click 2 capturing!
```
> 沒有 `click 2 bobbling!` ，但是會跳轉網頁
