<?php
require 'config/database.php';


if(isset($_POST['submit'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $cpassword = filter_var($_POST['cpassword'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $avatar = $_FILES['avatar'];

    if(!$name){
        $_SESSION['signup'] = "Please enter your name";
    }elseif(!$username){
        $_SESSION['signup'] = "Please enter your username";
    }elseif(!$email){
        $_SESSION['signup'] = "Please enter a valid email";
    }elseif(strlen($password)< 8 || strlen($cpassword) < 8){
        $_SESSION['signup'] = "Password should have 8 or more characters";
    }elseif(!$avatar['name']){
        $_SESSION['signup'] = "Add an Avatar";
    }else{
        if ($password !== $cpassword){
            $_SESSION['signup'] = "Passwords do not match";
        }else{
            $hashed_pword = password_hash($password, PASSWORD_DEFAULT);
            
            $user_check_query = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
            $user_check_result = mysqli_query($connection, $user_check_query);
            if(mysqli_num_rows($user_check_result) > 0){
                $_SESSION['signup'] = "Username already taken";
            } else{
                $time = time();
                $avatar_name = $time . $avatar['name'];
                $avatar_tmp_name = $time . $avatar['tmp_name'];
                $avatar_destination_path = "images/";
                $allowed_files = ['png', 'jpg', 'jpeg'];
                $extension = explode('.', $avatar_name);
                $extension = end($extension);
                if(in_array($extension, $allowed_files)){
                    if($avatar['size'] < 1000000){
                        move_uploaded_file($avatar_tmp_name, $avatar_destination_path);
                    }else{
                        $_SESSION['signup'] = "File size is too large. Should be less than 2mb";
                    }
                }else{

                    $_SESSION['signup'] = "File should be png, jpg or jpeg";
                }
            }
        }
    }
    if(isset($_SESSION['signup'])){
        $_SESSION['signup-data'] = $_POST;
        header('location: ' . ROOT_URL . 'signup.php');
        die();
    }else{
        $insert_user_query = "INSERT INTO users SET name = '$name', username = '$username', email = '$email', password = '$hashed_pword', avatar = '$avatar_name', is_admin = 0";
        $insert_user_result = mysqli_query($connection, $insert_user_query);
        if(!mysqli_errno($connection)){
            $_SESSION['signup-success'] = "Registration Successful. Please Log In";
            header('location: ' . ROOT_URL . "login.php");
            die();
        }
    }
} else {
    header('location: ' . ROOT_URL . 'signup.php');
    die();
}