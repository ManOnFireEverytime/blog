<?php

require 'config/constants.php';

$username_email=$_SESSION['signin-data']['username_email'] ?? null;
$password=$_SESSION['signin-data']['password'] ?? null;
unset($_SESSION['signup-data']);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="assets/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <title>Login</title>
</head>
<body>
    <section class="side" style="  background: url(assets/images/bk.png) no-repeat;
  background-size: 100% 102%;">
        <img src="assets/images/img.svg" alt="">
    </section>

    <section class="main">
        <div class="login-container">
            <p class="title">Login</p>
            <div class="separator"></div>
            <p class="welcome-message">New User? <a href="signup.php" style="text-decoration: none;">Sign Up</a> </p>
            <?php if(isset($_SESSION['signup-success'])) : ?>
              <div class="alert form-control" style="padding: 20px; background-color: #843bc7; color: white; margin-bottom: 15px;">
                  <p><?= $_SESSION['signup-success'];
                  unset($_SESSION['signup-success']);
                  ?>
                  </p> 
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            </div>
            <?php elseif(isset($_SESSION['login'])) : ?>
              <div class="alert form-control" style="padding: 20px; background-color: #843bc7; color: white; margin-bottom: 15px;">
                  <p><?= $_SESSION['login'];
                  unset($_SESSION['login']);
                  ?>
                  </p> 
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            </div>
            <?php endif ?>
            <form action="<?= ROOT_URL ?>login-logic.php" method="POST" class="login-form">
                <div class="form-control">
                    <input type="text" name="username_email" value="<?= $username_email ?>" placeholder="Username or email">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-control">
                    <input type="password" name="password" value="<?= $password ?>" placeholder="Password">
                    <i class="fas fa-lock"></i>
                </div>

                <button class="submit" name="submit" >Login</button>
            </form>
        </div>
    </section>
    
</body>
</html>