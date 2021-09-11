## 請列出 React 內建的所有 hook，並大概講解功能是什麼
#### 常見的 hook
- useState
  - 說明：回傳一個 state 的值，以及更新 state 的 function。
  - 用法：
  ```javascript
  const [state, setState] = useState(initialState)
  ```
- useEffect
  - 說明：在預設情況下，effect 會在每一個完整 render 後執行，但你也可以在某些值改變的時候才執行。
  - 用法：
  ```javascript
  useEffect(
    () => {...},
    [dependency],
  )
  ```
- useContext
  - 說明：接收一個 context object（React.createContext 的回傳值）並回傳該 context 目前的值。Context 目前的值是取決於由上層 component 距離最近的 <MyContext.Provider> 的 value prop。
  - 用法：
  ```javascript
  // 要先 React.createContext 建立 context object
  const value = useContext(MyContext)
  ```
#### 少用的 hook
- useReducer
  - 說明：當你需要複雜的 state 邏輯而且包括多個子數值或下一個 state 依賴之前的 state，useReducer 會比 useState 更適用。而且 useReducer 可以讓你觸發深層更新的 component 作效能的最佳化，因為你可以傳遞 dispatch 而不是 callback。
  - 用法：
  ```javascript
  const [state, dispatch] = useReducer(reducer, initialArg, init)
  ```
- useCallback
  - 說明：傳遞一個 inline callback 及依賴 array。useCallback 會回傳該 callback 的 memoized 版本，它僅在依賴改變時才會更新。useCallback(fn, deps) 相等於 useMemo(() => fn, deps)。
  - 用法：
  ```javascript
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  )
  ```
- useMemo
  - 說明：傳遞一個「建立」function 及依賴 array。useMemo 只會在依賴的值改變時才重新計算 memoized 的值。這個可以避免在每次 render 都進行費時的計算。但 useMemo 的 function 會在 render 期間執行。不要做會關係到 render 事情。
  - 用法：
  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
  ```
- useRef
  - 說明：主要是用來訪問 DOM 的方式。如果你在 React 中以 <div ref={myRef} /> 傳入 ref object，無論節點如何改變，React 都會將其 .current 屬性設為相應的 DOM 節點。
  - 用法：
  ```javascript
  const refContainer = useRef(initialValue)
  ```
- useImperativeHandle
  - 說明：可以讓使用 ref 時能向父 component 暴露自定義的 instance 值。在大多數的情況下應避免使用 ref 的命令式代碼。useImperativeHandle 應與 forwardRef 一同使用
  - 用法：
  ```javascript
  // useImperativeHandle(ref, createHandle, [deps])
  function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} ... />;
  }
  FancyInput = forwardRef(FancyInput);
  ```
- useLayoutEffect
  - 說明：與宣告 useEffect 本身相同，但它會在所有 DOM 改變後，同步調用。使用它來讀取 DOM layout 並同步重新 render。建議先使用 useEffect 來避免阻礙視覺上的更新。
  - 用法：
  ```javascript
  useLayoutEffect(
    () => {...},
    [dependency],
  )
  ```
- useDebugValue
  - 說明：可以用來在 React DevTools 中顯示自訂義 hook 的標籤。
  - 用法：
  ```javascript
  useDebugValue(value)
  ```

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
- componentDidMount：在一個 component 被 mount（加入 DOM tree 中）後，會馬上被呼叫
- componentDidUpdate：會在更新後馬上被呼叫。這個方法並不會在初次 render 時被呼叫。
- componentWillUnmount：會在一個 component 被 unmount 和 destroy 後馬上被呼叫。
- shouldComponentUpdate：會在新的 prop 或 state 被接收之後並在該 component 被 render 之前被呼叫。
- componentDidCatch：在 render 的過程、生命週期、或在某個 child component 的 constructor 中發生錯誤時
- getSnapshotBeforeUpdate：在提交最新 render 的 output 之前立即被調用。它讓你在 DOM 改變之前先從其中抓取一些資訊（例如滾動軸的位置）。
- static getDerivedStateFromProps：會在一個 component 被 render 前被呼叫，不管是在首次 mount 時或後續的更新時。
- static getDerivedStateFromError：在某個錯誤被一個 descendant component 拋出後被呼叫。

## 請問 class component 與 function component 的差別是什麼？
> 其實我覺得這個題目是陷阱題，應該是要問 `class component + function component` 跟 `hooks + function component` 的差別是什麼？所以我也稍為講看看這兩個的差別。
- class component：
  - 先用 class 先繼承 `React.Component` 再定義 `state` 或其他 method 的方式，來達成 React 的組件，需要搭配 `生命周期函式` 使用，最後在 `render()` function 中再 return 一個 `JSX`。
- function component
  - 其中可以 return 一個 `JSX` 就可以算一個 function component 了，在 class component 也有 "純 function component" 了，就是沒有 `state` 的 component ，你可能會想：沒有 state ，這個 component 可以幹麻？但他可以有 `props` 啊！這樣帶出差異了，很多 class component 下面的 component ，沒有用到 `state` 的 component 就可以只用 "純 function component"，這樣就簡單很多，但其實也可以裡面自訂 method ，例如：把 props 乘以 2。
- hooks + function component
  - 剛剛上面有說 "純 function component" 就只回傳一個 `JSX` ，不能有任何的 `state` ，因為他就只是個 `function` ，所以我才會是 "純 function component" ，但是有純就會有不純（？）這時候 hooks 就登場了，大家都喜歡寫 function component，因為好寫、沒有太多複雜的東東（this, class 等等），所以在 React 16.8 版就推出 hooks ，有了 hooks ，function component 就可以有了 `state` ，有了 `state` 也就變不純了，因為還要多學習 hook 的用法去操作 `state`，但比起 class 學習曲線低了許多，而且現在新的專案好像也用 hook 比較多了。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？
- uncontrolled component
  - 不受 React 控制的 component，就是當這個 component 的某個值改變時，畫面不會重新宣染。
- controlled component
  - 受 React 控制的 component，當這個 component 的某個值改變時，畫面會依照這個值重新宣染。
- 如何使用
  - 能用 controlled component 就用 controlled component ，通常你會希望你的值跟畫面是綁定的，所以會建議使用 controlled component，常見的用法（如：input）：
  ```javascript
  <input type="text" value={this.state.value} onChange={this.handleChange} />
  ```
  - uncontrolled component 感覺可以少寫一個 onChange ，不用為了每個 state 的更新寫 event handler，寫法如下： component。
  ```javascript
  <input type="text" ref={this.input} />
  ```
  如果你想有個又快又髒的方法，就大膽的使用 uncontrolled component 吧！