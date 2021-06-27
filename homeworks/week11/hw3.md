## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
  - 加密 : 將一段文字轉換成另一段文字，但是可以透過解密還原。 
  - 雜湊 : 將一段文字轉換成另一段文字，但是不能用任何方法還原，是多對一的關係，但現在的雜湊很少碰撞。
  - 為什麼密碼要雜湊 : 首先當然不能存明碼，但是為何選雜湊不是加密呢？因為加密存的本質上還是明碼，只是換一個形式，萬一資料庫被駭了，使用者的密碼，被破解只是時間上的問題，但是如果存的是雜湊，就不一樣了，因為他無法判斷原密碼的長像，有多種可能。( 加密像是把拼圖打散，但是拼的回來，只是時間問題；雜湊像是把白紙切成同樣大小的正方形，拼回來，但有超多種可能，除非你有圖靈機器，但目前不存在 )


## `include`、`require`、`include_once`、`require_once` 的差別
  - include : 如果找不到檔案，不會中斷程式碼。
  - require : 如果找不到檔案，會中斷程式碼，只會產生 warning。
  - include_once : 如果其他檔案也有呼叫同一個 .php 檔，預防巢狀叫呼就可以使用，但找不到檔案還是會執行。
  - require_once : 如果其他檔案也有呼叫同一個 .php 檔，預防巢狀叫呼就可以使用，但找不到檔案就不會執行。 ( 總之，為了方便維護、debug，我們應該盡量使用 require_once )


## 請說明 SQL Injection 的攻擊原理以及防範方法
  - 原理 : 使用 `成對的 ''` 跟 `註解 #` 的機制來實現想達成的 query 或是 subquery
  - 防範 : prepared statement
    ```php
    <?php
      $sql = "INSET INTO comments(nikname, content) VALUE (?, ?)";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param('ss', $nickname, $content);
      $result = $stmt->excute();
      
      $result = $stmt->get_result();
      # 要加這一行才會真正把 result 拿出來
    ?>
    ```


##  請說明 XSS 的攻擊原理以及防範方法
  - 原理 : tag <> 的方式來執行 script
  - 防範 : HTML escape
    ```php
    <? php
      function escape($str) {
        return htmlspecialchars($str, ENT_QUOTES)
      }
    ?>
    ```

## 請說明 CSRF 的攻擊原理以及防範方法
  - 原理 : 在不同的 domain 底下，偽造出「使用者本人發出的 request」
  - 防範 : 大原則 「怎麼擋掉從別的 domain 來的 request」
    - 加上圖形驗證碼、簡訊驗證碼
    - Double Submit Cookie

