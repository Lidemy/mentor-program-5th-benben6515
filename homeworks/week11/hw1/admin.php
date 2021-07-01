<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $username = NULL;
  $user = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  }

  if ($user === NULL || $user["role"] != 5) {
    header('Location: index.php');
    exit;
  }

  $stmt = $conn->prepare(
    "SELECT
      id, role, nickname, username
    FROM
      Benben_users
    ORDER BY
      id
    ASC");
  $result = $stmt->execute();

  if (!$result) {
    die('Error' . $conn->error);
  }

  $result = $stmt->get_result();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>後台管理</title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="bg">
    <iframe src="bg.html"></iframe>
  </div>
  <header class="warning">注意！本站為練習網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</header>
  <div class="board">
    <div class="board__top">

    <table>
      <tr>
        <th>id</th>
        <th>role</th>
        <th>nickname</th>
        <th>username</th>
        <th>調整身份</th>
      </tr>
      <?php while($row = $result->fetch_assoc()) { ?>
        <tr>
          <td><?php echo escape($row["id"]); ?></td>
          <td><?php echo escape($row["role"]); ?></td>
          <td><?php echo escape($row["nickname"]); ?></td>
          <td><?php echo escape($row["username"]); ?></td>
          <td>
            <a href="handle_update_role.php?role=5&id=<?php echo escape($row["id"]); ?>">管理員</a>
            <a href="handle_update_role.php?role=1&id=<?php echo escape($row["id"]); ?>">使用者</a>
            <a href="handle_update_role.php?role=2&id=<?php echo escape($row["id"]); ?>">停權</a>
          </td>
        </tr>
      <?php  } ?>
    </table>
    <hr class="top-hr">
    </div>
  </div>

</body>
</html>