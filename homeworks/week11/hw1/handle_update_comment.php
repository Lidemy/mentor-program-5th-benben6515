<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if ( 
    empty($_POST['content'])
  ) {
    header("Location:
      update_comment.php?errCode=1&id=" . $_POST['id']);
    die('資料不齊全，請重新輸入');
  }

  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
  $content = $_POST['content'];
  $id = $_POST['id'];

  $sql =
  "UPDATE 
    Benben_comments
  SET
    comments=?
  WHERE
    id=?
  AND
    username=?";
  
  if (isAdmin($user)) {
    $sql =
    "UPDATE 
      Benben_comments
    SET
      comments=?
    WHERE
      id=?";
  }

  $stmt = $conn->prepare($sql);

  if (isAdmin($user)) {
    $stmt->bind_param('si', $content, $id);
  } else {
    $stmt->bind_param('sis', $content, $id, $username);
  }

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>