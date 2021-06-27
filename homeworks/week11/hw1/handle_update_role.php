<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if ( 
    empty($_GET['id']) ||
    empty($_GET['role'])
  ) {
    die('資料不齊全，請重新輸入');
  }

  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  $content = $_GET['content'];
  $id = $_GET['id'];
  $role = $_GET['role'];

  if (!$user || $user['role'] != 5) {
    header('Location: admin.php');
    exit;
  }

  $sql =
  "UPDATE 
    Benben_users
  SET
    role=?
  WHERE
    id=?";
  
  $stmt = $conn->prepare($sql);

  $stmt->bind_param('ii', $role, $id);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: admin.php");
?>