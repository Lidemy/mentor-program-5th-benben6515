<?php
  require_once('conn.php');

  function generateToken() {
    $s = '';
    for ($i = 0; $i < 16; $i++) {
      $s .= chr(rand(65,90));
    }
    return $s;
  }

  function getUserFromUsername($username) {
    global $conn;

    $sql = sprintf(
      "SELECT *
      FROM Benben_users
      WHERE username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row;
  }

  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }

  function hasPermission($user, $action, $comment) {
    if ($user["role"] == 5) {
      return true;
    }

    if ($user["role"] == 1) {
      if ($action === 'create') return true;
      return $comment["username"] === $user["username"];
    }

    if ($user["role"] == 2) {
      return $action !== 'create';
    }
  }

  function isAdmin($user) {
    return $user["role"] == 5;
  }
?>