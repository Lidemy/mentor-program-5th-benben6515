<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');

  if (
    empty($_POST["todo"])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Please input id in url"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }

  $todo = $_POST["todo"];

  $sql =
  "INSERT INTO
    Benben_todo(todo)
  VALUE
    (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $todo);

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
    "massage" => "success!",
    "id" => $conn->insert_id
  );
  $response = json_encode($json);
  echo $response;
  
?>
