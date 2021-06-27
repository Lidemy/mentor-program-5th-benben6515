<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

    $stmt = $conn->prepare(
    "SELECT
      P.id AS id, 
      P.content AS content, 
      P.title AS title, 
      P.created_at AS created_at, 
      U.nickname AS nickname, 
      U.username AS username
    FROM
      Benben_blog AS P
    LEFT JOIN
      Benben_users AS U
    ON
      P.username COLLATE utf8_unicode_ci = U.username COLLATE utf8_unicode_ci
    WHERE
      P.is_deleted = 0
    ORDER BY
      id DESC"
  );
  $result = $stmt->execute();
  if (!$result) {
    die('Error' . $conn->error);
  }
  $result = $stmt->get_result();

?>

<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <?php include_once('header.php'); ?>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="admin-posts">

        <?php while ($row = $result->fetch_assoc()) { ?>
            <div class="admin-post">
              <div class="admin-post__title">
                <?php echo escape($row["title"]); ?>
              </div>
              <div class="admin-post__info">
                <div class="admin-post__created-at">
                  <?php echo substr(escape($row["created_at"]), 0, 10); ?>
                </div>
                <a class="admin-post__btn" href="post.php?id=<?php echo escape($row["id"]); ?>">Read</a>
              </div>
            </div>
        <?php } ?>

      </div>
    </div>
  </div>

</body>

</html>