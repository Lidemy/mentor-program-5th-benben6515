<?php 
  require_once('conn.php');

  if ( 
    empty($_POST['content'])
  ) {
    header("Location: index.php?errCode=1");
    die('資料不齊全，請重新輸入');
  }

  // get user nickname
  $username = $_COOKIE['username'];
  $user_sql = sprintf(
    "SELECT
      nickname
    FROM
      Benben_users
    WHERE
      username='%s'",
    $username
  );
  $user_result = $conn->query($user_sql);
  $row = $user_result->fetch_assoc();
  $nickname = $row['nickname'];


  $content = htmlspecialchars($_POST['content']);

  $sql = sprintf(
    "INSERT INTO
      Benben_comments(nickname, comments)
    VALUES
      ('%s', '%s')",
    $nickname,
    $content
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>