<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  $page = $_POST["page"];
  if ( 
    empty($_POST["content"]) ||
    empty($_POST["title"]) ||
    empty($_POST["id"])
  ) {
    header("Location: " . $page);
    die('資料不齊全，請重新輸入');
  }

  $id = intval($_POST["id"]);
  $content = $_POST["content"];
  $title = $_POST["title"];
  $user = getUserFromUsername($user);

  $sql =
  "UPDATE 
    Benben_blog
  SET
    content = ?,
    title = ?
  WHERE
    id = ?";
  
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ssi', $content, $title, $id);

  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: " . $page);
?>