## Webpack 是做什麼用的？可以不用它嗎？
- Webpack 是一個非常熱門的前端打包工具，可以把各種資源，如 : `.css`, `.jpg` 甚至套件等等，都可以變成用 `script` 的 `src` 屬性引入，最重要的，可以在瀏覽器實現模組化開發，以往只有在 `node.js` 才可以模組化開發，但現在可以透過 Webpack 轉譯給瀏覽器使用，前端開發神器啊
- 可以不用它嗎？當然可以！在網頁的領域只要精通 `HTML`, `CSS`, `JavaScript` 就可以做到任何事喔 XD ，所有的套件都只是輔助(？)，但還是依要照公司的使用工具而定，因為隨著專案越來越大，就會有模組化的需求，所以基本上現代開發的使用率非常高，很多的職缺也會註明需要 Webpack 的技能，不一定是必備但就是加分

## gulp 跟 webpack 有什麼不一樣？
- 不一樣的地方 : 
  - Gulp 做不到 boudle，就是沒辨法把資源整合起來，資源還是分散的，如 : 轉換後只變成 `.css`, `.js` 但還是分散的檔案，但 webpack 可以將許多的 `.js` 檔打包成一個 `main.js`。
  - Webpack 做不到 task manage ，沒辨法像 IFTTT ( if this than that ) 的功能，如 : 每次寫完都需要再 `build` 一次。
- 相像的地方 : 都可以做資料的轉換的動作，如 : `sass` -> `css`, `ES6` -> `ES5` 等等

## CSS Selector 權重的計算方式為何？

- 依權重高低 ( 1 最高，6 最低 )
	1. !important
	2. inline style
	3. ID
	4. Class / psuedo-class (偽類) / attribute （屬性選擇器）
	5. Element (tag)
	6. *
- 沒事不要亂用 `!important` ，如果用了，就只有 `!important` 能蓋過 `!important` ，除了原本的 `!important` 之外還需要加上其他選擇器，所以會非常難之維護，還有要注意 `class`, `psuedo-calss` 跟 `attribute` 是一樣等級的