<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');

  if (
    empty($_POST["content"]) ||
    empty($_POST["nickname"]) ||
    empty($_POST["site_key"])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input missing fields"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $nickname = $_POST["nickname"];
  $site_key = $_POST["site_key"];
  $content = $_POST["content"];

  $sql =
  "INSERT INTO
    Benben_discussions(site_key, nickname, content)
  VALUE
    (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $site_key, $nickname, $content);

  $result = $stmt->execute();

  if (!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error,
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $json = array(
    "ok" => true,
    "massage" => "success!"
  );
  $response = json_encode($json);
  echo $response;
  
?>
