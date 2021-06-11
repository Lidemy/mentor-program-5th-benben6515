<?php 
  require_once('conn.php');

  if ( 
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全，請重新輸入');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf(
    "SELECT
      *
    FROM
      Benben_users
    WHERE
      username='%s'
    AND
      password='%s'",
    $username,
    $password
  );

  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  
  if ($result->num_rows) {
    // echo "登入成功"
    $expire = 3600 * 24 * 14 + time();
    setcookie("username", $username, $expire);
    header('Location: index.php');
  } else {
    header('Location: login.php?errCode=2');
  }

  // header("Location: index.php");
?>