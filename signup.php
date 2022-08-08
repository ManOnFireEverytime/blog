<?php

require 'config/constants.php';

$name=$_SESSION['signup-data']['name'] ?? null;
$username=$_SESSION['signup-data']['username'] ?? null;
$email=$_SESSION['signup-data']['email'] ?? null;
$password=$_SESSION['signup-data']['password'] ?? null;
$cpassword=$_SESSION['signup-data']['cpassword'] ?? null;

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
    <title>Sign Up</title>
</head>
<body>
    <section class="side" style="  background: url(assets/images/bk.png) no-repeat;
  background-size: 100% 102%;">
        <img src="assets/images/img.svg" alt="">
    </section>

    <section class="main">
        <div class="login-container">
            <p class="title">Sign Up</p>
            <div class="separator"></div>
            <p class="welcome-message">Old User? <a href="login.php" style="text-decoration: none;">Sign In</a> </p>
            <?php if(isset($_SESSION['signup'])) : ?>
            <div class="alert form-control" style="padding: 20px; background-color: #843bc7; color: white; margin-bottom: 15px;">
                  <p><?= $_SESSION['signup'];
                  unset($_SESSION['signup']);
                  ?>
                  </p> 
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            </div>
            <?php endif ?>
            <form action="<?= ROOT_URL ?>logic.php" method="POST" enctype="multipart/form-data" class="login-form">
                <div class="form-control">
                    <input type="text" name="name" value="<?= $name ?>" placeholder="Full name">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-control">
                    <input type="text" name="username" value="<?= $username ?>" placeholder="Username">
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-control">
                    <input type="email" name="email" value="<?= $email ?>" placeholder="Email address">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="form-control">
                    <input type="password" name="password" value="<?= $password ?>" placeholder="Password">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="form-control">
                    <input type="password" name="cpassword" value="<?= $cpassword ?>" placeholder="Confirm Password">
                    <i class="fas fa-lock"></i>
                </div>

                <div style= "display: flex; flex-direction: column; gap: 0.5rem;">
                    <label for="avatar">Select Avatar</label>
                    <input type="file" name= "avatar" id="avatar">
                    <!-- <input type="file" name="fileToUpload" id="fileToUpload"> -->
                  </div>

                <button class="submit" name="submit" >Sign Up</button>
            </form>
        </div>
    </section>
    
</body>
</html>