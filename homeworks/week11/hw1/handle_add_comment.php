<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if ( 
    empty($_POST['content'])
  ) {
    header("Location: index.php?errCode=1");
    die('資料不齊全，請重新輸入');
  }

  $username = $_SESSION['username'];
  $content = $_POST['content'];
  $user = getUserFromUsername($user);
  
  if (!hasPermission($user, 'create', NULL)) {
    header("Location: index.php");
    exit;
  }

  $sql =
  "INSERT INTO 
    Benben_comments(username, comments)
  VALUES
    (?, ?)";
  
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $content);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>