<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言板</title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="bg">
    <iframe src="bg.html"></iframe>
  </div>
  <header class="warning">注意！本站為練習網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</header>
  <div class="board">
    <div class="board__top">
      <a class="board__btn" href="index.php" >回留言板</a>
      <a class="board__btn" href="register.php" >註冊</a>
      <h2 class="board__top-title">是在哈囉 - 登入</h2>
        <?php 
          if($_GET['errCode']) {
            $code = $_GET['errCode'];
            if ($code === '1') {
              echo "<span class='error'>錯誤 : 資料不齊全，請重新輸入<span>";
            } else if ($code === '2') {
              echo "<span class='error'>錯誤 : 帳號或密碼錯誤，請重新輸入<span>";
            } else {
              echo "error!";
            }
        }?>
      <form method="POST" action="handle_login.php">
        <div class="content-name">
          <span>帳號 : </span>
          <input type="text" name="username" />
        </div>
        <div class="content-name">
          <span>密碼 : </span>
          <input type="password" name="password" />
        </div>
        <input class="content-submit" type="submit" value="登入" />
      </form>
    </div>
    <hr class="top-hr">

  </div>
</body>
</html>