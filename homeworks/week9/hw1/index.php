<?php
  require_once("conn.php");

  $result = $conn->query(
  "SELECT 
    *
  FROM 
    mtr04group2.Benben_comments
  ORDER BY
    id
  DESC");

  if (!result) {
    die('Error' . $conn->error);
  }

  $username = NULL;
  if ($_COOKIE['username']) {
    $username = $_COOKIE['username'];
  }
?>


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
      <?php if ($username) { ?>
        <a class="board__btn" href="logout.php" >登出</a>
      <?php } else { ?>
        <a class="board__btn" href="login.php" >登入</a>
        <a class="board__btn" href="register.php" >註冊</a>
      <?php } ?>
        <h2 class="board__top-title">是在哈囉 - 留言板</h2>
          <?php if ($username) { ?>
            <div class="board__top-content"><?php echo "$username" . " 你好！" ?></div>
          <?php } ?>
        <div class="board__top-content">有什麼想說的嗎？
        <?php 
          if($_GET['errCode']) {
            $code = $_GET['errCode'];
            if ($code === '1') {
              echo "<span class='error'>錯誤 : 資料不齊全，請重新輸入<span>";
            } else {
              echo "error!";
            }
        }?>
      </div>
      <form method="POST" action="handle_add_comment.php">
        <div class="content-name">
          <!-- <span>暱稱 : </span>
          <input type="text" name="nickname" /> -->
        </div>
        <textarea class="content-input" type="textarea" name="content" rows="5" /></textarea>
      <?php if ($username) { ?>
        <input class="content-submit" type="submit" value="送出" />
      <?php } else { ?>
        <div class="board__top-content">請登入發佈留言</div>
      <?php } ?>
      </form>
    </div>
    <hr class="top-hr">

  <?php while($row = $result->fetch_assoc()) { ?>
    <div class="board__comments">
      <div class="board__comment-avatar"></div>
      <div class="board__comment-wrapper">
        <div class="board__comment-infos">
          <span class="board__comment-name"><?php echo $row["nickname"]; ?></span>
          <span class="board__comment-time"> · <?php echo $row["created_at"]; ?></span>
        </div>
        <div class="board__comment-text"><?php echo $row["comments"]; ?></div>
      </div>
    </div>
    <hr>
  <?php  } ?>

  </div>
</body>
</html>