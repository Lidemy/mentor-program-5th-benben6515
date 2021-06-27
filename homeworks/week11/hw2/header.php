<?php
  $uri = $_SERVER["REQUEST_URI"];

  $isAdminPage = (strpos($uri, 'admin.php') !== false);
?>

<div class="bg">
  <footer>Copyright © 2020 Benben's Blog All Rights Reserved.</footer>
</div>
<nav class="navbar">
  <div class="wrapper navbar__wrapper">
    <div class="navbar__site-name">
      <a href='index.php'>Benben's Blog</a>
    </div>
    <ul class="navbar__list">
      <div>
        <li><a href="list.php">文章列表</a></li>
        <li><a href="https://blog.huli.tw/">Huli 我老師</a></li>
        <li><a href="https://github.com/benben6515">關於我</a></li>
      </div>
      <div>
        <?php if(!empty($_SESSION["username"])) { ?>
          <?php if($isAdminPage) { ?>
            <li><a href="create_post.php">發布文章</a></li>
          <?php } else { ?>
            <li><a href="admin.php">管理後台</a></li>
          <?php } ?>
          <li><a href="logout.php">登出</a></li>
        <?php } else { ?>
          <li><a href="login.php">登入</a></li>
        <?php } ?>
      </div>
    </ul>
  </div>
</nav>