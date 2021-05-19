## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- `sup & sub` : 分別是上標、下標，可以用在次方、化學元素等。
- `hr & br` : 分別是水平線跟換行，兩的都可以不用斜線 `/` 結束。
- `vedio & audio` : 分別是影片跟音檔，引入的屬性都是 `src=URL` 。

## 請問什麼是盒模型（box modal）
由內至外分別是 : 
1. 元素 : 本體
2. padding : 本體到 border 的距離
3. border : 線框
4. outline : 緊貼著 border 外，不計算元素的距離
5. margin : border 外的距離

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- block : 元素是區塊排列的，自動換行，預設的 tag 有 :  div, h1, p ...等等。
- inline : 元素是行內排列的，預設的有 : span, a, ...等等。
- inline-block : 元素本身是 inline ，對區塊內部是 block。 ，

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static : 預設的屬性，依照元素本身的屬性排列下來。
- relative : 相對定位，可以分別 top, right, bottom, left 設定定位屬性，定位後元素原本的空間還會在。
- absolute : 絕對定位，根據上一個是 relative 的元素定位，都沒有就是根據視窗定位，定位後元素原本的位置消失。
- fixed : 相對視窗做絕對定位，例如 : navbar, 廣告視窗 ...等等。
