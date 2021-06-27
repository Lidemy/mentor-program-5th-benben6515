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

  $page = 1;
  if (!empty($_GET['page'])) {
    $page = intval($_GET['page']);
  }
  $limit = 5;
  $offset = ($page - 1) * $limit;

  $stmt = $conn->prepare(
    "SELECT 
      C.id AS id,
      C.comments AS comments,
      C.created_at AS created_at,
      U.nickname AS nickname,
      U.username AS username
    FROM 
      Benben_comments AS C
    LEFT JOIN
      Benben_users AS U
    ON
      C.username = U.username
    WHERE
      C.is_deleted IS null
    ORDER BY
      C.id
    DESC
    LIMIT
      ?
    OFFSET
      ?");
  $stmt->bind_param('ii', $limit, $offset);
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
  <title>留言板</title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="bg">
    <iframe src="bg.html"></iframe>
  </div>
  <header class="warning">注意！本站為練習網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</header>
  <div class="board">
    <div class="board__top">
      <?php if ($user && $user["role"] == 5) { ?>
        <a class="board__btn" href="admin.php" >管理後台</a>
      <?php } ?>
      <?php if ($username) { ?>
        <a class="board__btn update-nickname" class="update-nickname">編輯暱稱</a>
        <a class="board__btn" href="logout.php" >登出</a>
      <?php } else { ?>
        <a class="board__btn" href="login.php" >登入</a>
        <a class="board__btn" href="register.php" >註冊</a>
      <?php } ?>
        <h2 class="board__top-title">是在哈囉 - 留言板</h2>
          <?php if ($username) { ?>
            <div class="board__top-content"><?php echo $user['nickname'] . " 你好！" ?></div>
            <form method="POST" action="update_nickname.php" class="hide form_nickname">
              新的暱稱 : <input type="text" name="nickname" />
            <input class="content-submit" type="submit" value="送出" />
            </form>
          <?php } ?>
        <div class="board__top-content">有什麼想說的嗎？
        <?php 
          if($_GET['errCode']) {
            $code = $_GET['errCode'];
            if ($code === '1') {
              echo "<span class='error'>錯誤 : 資料不齊全，請重新輸入<span>";
            } else {
              echo "error!";
            }
        }?>
      </div>
      <form method="POST" action="handle_add_comment.php">
        <div class="content-name">
          <!-- <span>暱稱 : </span>
          <input type="text" name="nickname" /> -->
        </div>
        <textarea class="content-input" type="textarea" name="content" rows="5" cols="30"/></textarea>
        <?php if ($username && !hasPermission($user, 'create', NULL)) { ?>
          <div class="board__top-content">你己被停權！</div>
        <?php } else if ($username) { ?>
          <input class="content-submit" type="submit" value="送出" />
        <?php } else { ?>
          <div class="board__top-content">請登入發佈留言</div>
        <?php } ?>
      </form>
    </div>
    <hr class="top-hr">

  <?php while($row = $result->fetch_assoc()) { ?>
    <div class="board__comments">
      <div class="board__comment-avatar"></div>
      <div class="board__comment-wrapper">
        <div class="board__comment-infos">
          <?php if (hasPermission($user, 'create', $row)) { ?>
            <a href="delete_comment.php?id=<?php echo $row["id"]; ?>">刪除</a>
            <a href="update_comment.php?id=<?php echo $row["id"]; ?>">編輯</a>
          <?php } ?>
          <span class="board__comment-name">
            <?php echo escape($row["nickname"]); ?>
            (@<?php echo escape($row["username"]); ?>)
            </span>
          <span class="board__comment-time"> · <?php echo escape($row["created_at"]); ?></span>
        </div>
        <div class="board__comment-text"><?php echo escape($row["comments"]); ?></div>
      </div>
    </div>
    <hr>
  <?php  } ?>
    <hr class="top-hr">
    <?php
      $stmt = $conn->prepare(
        "SELECT
          count(id) AS count
        FROM
          Benben_comments
        WHERE
          is_deleted IS NULL"
      );
      $result = $stmt->execute();
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      $count = $row['count'];
      $total_page = ceil($count / $limit);
    ?>
    <div class="page__info">
      總共有 <?php echo $count; ?> 留言，頁數 : <?php echo $page; ?> / <?php echo $total_page; ?>
    </div>
    <div class="page__paginator">
      <?php if ($page != 1) { ?>
      <a href="index.php?page=1">首頁</a>
      <a href="index.php?page=<?php echo $page - 1?>">上一頁</a>
      <?php } ?>
      <?php if ($page != $total_page) { ?>
      <a href="index.php?page=<?php echo $page + 1?>">下一頁</a>
      <a href="index.php?page=<?php echo $total_page?>">最後一頁</a>
      <?php } ?>
    </div>
  
  </div>

  <script>
    let btn = document.querySelector('.update-nickname')
    btn.addEventListener('click', e => {
      let form = document.querySelector('.form_nickname')
      form.classList.toggle('hide')
    })
  </script>
</body>
</html>