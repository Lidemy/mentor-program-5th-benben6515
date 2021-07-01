<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $id = $_GET["id"];

  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  }
  $stmt = $conn->prepare(
    "SELECT
      *
    FROM
      Benben_comments
    WHERE
      id=?
    ");
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();

  if (!$result) {
    die('Error' . $conn->error);
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();

  print_r($result);
  echo $id;
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
      <h2 class="board__top-title">是在哈囉 - 編輯留言</h2>
      <?php
        if(!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          if ($code === '1') {
            echo "<span class='error'>錯誤 : 資料不齊全，請重新輸入<span>";
          } else {
            echo "error!";
          }
        }
      ?>
    </div>
      <form method="POST" action="handle_update_comment.php">
        <div class="content-name">
        </div>
        <textarea class="content-input" type="textarea" name="content" rows="5" cols="30" /><?php echo $row["comments"]; ?></textarea>

        <!-- 隱藏的 id 帶到下一頁去 -->
        <input type="hidden" name="id" value="<?php echo $id; ?>" />
        <input class="content-submit" type="submit" value="送出" />
      </form>
    </div>

  </div>

</body>
</html>