<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = 
    "SELECT
      *
    FROM
      Benben_users
    WHERE
      username=?";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $username);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  $result = $stmt->get_result();
  # 執行完拿 result 回來

  if ($result->num_rows === 0) {
    header('Location: login.php?errCode=2');
    exit();
  }
  
  $row = $result->fetch_assoc();
  if (password_verify($password, $row['password'])) {
    
    // "登入成功"
    $_SESSION['username'] = $username;
    header('Location: index.php');
  } else {
    header('Location: login.php?errCode=2');
  }

  // header("Location: index.php");
?>