<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if ( 
    empty($_POST['content']) ||
    empty($_POST['title'])
  ) {
    header("Location: index.php?errCode=1");
    die('資料不齊全，請重新輸入');
  }

  $username = $_SESSION['username'];
  $content = $_POST['content'];
  $title = $_POST['title'];
  $user = getUserFromUsername($user);

  $sql =
  "INSERT INTO 
    Benben_blog(username, content, title)
  VALUES
    (?, ?, ?)";
  
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $username, $content, $title);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>