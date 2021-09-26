## 為什麼我們需要 Redux？
- 因為隨著專案越來越大，狀態（state）的管理越來越難，Component 傳了好幾層，debug 的時候也就要一層一層的去追，但有了 Redux 就方便很多，因為在 React 的世界中，資料會是單向資料流（如果使用單向資料流框架也可以使用 Redux），但是如果一個 model 可以更新其他的 model，一個 view 可以更新一個 model，而它更新了另一個 model，而這個順帶的，可能造成另一個 view 被更新，這一定不是開發人員所希望的。
- 跟著 Redux 走就可以減少這些坑，Redux 有三大原則：
  - 唯一真相來源（Single Source of Truth）：你整個應用程式的 state，被儲存在一個樹狀物件放在唯一的 store 裡面。
  - State 是唯讀的（State is Read-Only）：改變 state 的唯一的方式是發出一個 action，也就是一個描述發生什麼事的物件。
  - 變更被寫成 pure function（Changes are Made with Pure Reducer Functions）：我是覺得這個中文翻譯怪怪的，應該是說「只能透過 Pure Reducer Functions 去改變 state/store」，總之，要自己寫一個 Reducer Function ，寫得越純越好維護唷（？）
- 使用 Redux 一開始雖然比較累，但隨著專案越來越大好處也越來越明顯

![](https://i.imgur.com/404jOub.png)

使用 Redux 與不使用 Redux
> X 軸為時間（Time）、Y 軸為複雜度（Complex）


## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
- Redux：是一個給 JavaScrip App 用、可預測 State 的容器（A Predictable State Container for JS Apps），擁有可預測、集中化、容易 debug、可擴充性，可以跟任何的 UI 層結合，也擁有大量的生態系可以選擇。
- 元件 - Action：從應用程式傳遞資料到 store 的資訊 （payload）。它們是 store 唯一的資訊來源。可以藉由 store.dispatch() 來把它們傳遞到 store。其實就是一個 `Object`，可以寫你想寫的資訊。
- 元件 - Reducer：是一個 pure function，它接收先前的 state 和一個 action，然後回傳下一個 state。不應該在 function 裡直接改變 state 的值，有點像原生 JavaScript Array 的 `.reduce()` method 。
- 元件 - Store： 是把 Action 跟 Reducer 結合在一起的物件，可以使用 `getState()` 來獲取 state 、`dispatch(action)` 來更新 state，應用程式中將只會有一個 store。如果要結合多個 store 應該要用 `combineReducers()`。
- 資料流：Redux 架構圍繞著嚴格的單向資料流。Redux 中的資料生命周期都遵照 4 個步驟：
  1. 呼叫 `store.dispatch(action)`。
  2. Redux store 呼叫你給它的 reducer action。
  3. root reducer 把多個 reducer 的 output 合併成一個單一的 state tree。
  4. Redux store 儲存 root reducer 回傳的完整 state tree。

## 該怎麼把 React 跟 Redux 串起來？

以 Redux toolkit （他把 actionTypes 跟 createAction 都包好了）為例：

1. 先在最上層的 App 加入，Provider
```javascript
// ...
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
2. 規劃好 `Slice`
```javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {...},
  },
})

export const { ... } = counterSlice.actions
export default counterSlice.reducer
```
3. 加入 `store.js`
```javascript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```
4. 要使用的 Component
```javascript
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ... } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (...)
```
