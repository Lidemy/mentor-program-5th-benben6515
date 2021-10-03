## Redux middleware 是什麼？
- Redux 的中間件，可以在 dispatch 發出去之後、reducer 執行之前可以做別的事，[Redux 生態系](https://redux.js.org/introduction/ecosystem) 也有著大量的資源，不少也是使用 middleware 的方式去執行的。
- 比較有名的如 Redux thunk 可以 **dispatch 一個 function** ，一般來說只能 dispatch 一個 action （通常只能是 Object 型別），介由 Redux thunk 就可以使用打 API 之類的非同步操作。

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？
- Client Side Rendering：server 端會先回傳一個 html 檔，瀏覽器會先載入 html 檔，再載入其他的檔案，最後才呈現畫面。
- Server Side Rendering：在 server 端就預先 render 好一個 **能見** 的畫面，回傳給使用者後就不關 server 的事了。
- CSR 的話，使用者會先看到一個 `template` 之類的畫面，再發 API 拿資料後才會 render 好畫面給使用者看到，所以畫面會短暫的空白一下，如果 API 打的比較久，使用者體驗可能就會不好，還有 SEO 的議題，因為有的爬蟲不會幫你執行 JavaScript ，所以爬蟲看到的只有空空的 `template`。但 SSR 就不一樣了，因為他已經再 server 端就 render 好畫面了，除了速度提升之外、SEO 的問題也得已解決。

## React 提供了哪些原生的方法讓你實作 SSR？
- [ReactDOMServer](https://zh-hant.reactjs.org/docs/react-dom-server.html#rendertostring)：可以將 `Component` render 成 `string` 或是靜態的 markup。
- 在伺服器跟瀏覽器都能使用的：`renderTosString()`, `renderToStaticMarkup()`
- 只能在伺服器端使用：`renderToNodeStream()`, `renderToStaticNodeStream()`

## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種
- [Next](https://nextjs.org/)：一個 React 的 Framework ，如果有 SSR 的需求，或是其他如 TypeScript 的需求，可以讓你有好的開發體驗。
- [react-dom-stream](https://github.com/aickin/react-dom-stream)：可以看一下就好，因為 repo 上次更新已經是 6 年前的 ...
- [hypernova](https://github.com/airbnb/hypernova)：上次更新也是 3 年前 ...

看來 Next.js 真的打啪不少人...

以上都是跟 React 搭配的 SSR 解決方案，如果是其他 Framework 如：Vue, Angular 等，應該還有更多方案。 
