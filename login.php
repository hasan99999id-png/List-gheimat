<?php
session_start();

$username = "admin";
$password = "123456";

if(isset($_POST['login'])){

    if(
        $_POST['username'] === $username &&
        $_POST['password'] === $password
    ){

        $_SESSION['admin']=true;

        header("Location: dashboard.php");
        exit;

    }else{

        $error="نام کاربری یا رمز اشتباه است.";

    }

}
?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>

<meta charset="UTF-8">

<title>ورود مدیر</title>

<style>

body{

font-family:tahoma;
background:#f5f5f5;
display:flex;
justify-content:center;
align-items:center;
height:100vh;

}

.box{

background:white;
padding:30px;
border-radius:15px;
width:320px;
box-shadow:0 0 20px rgba(0,0,0,.15);

}

input{

width:100%;
padding:12px;
margin:10px 0;
font-size:15px;

}

button{

width:100%;
padding:12px;
background:#0284c7;
color:white;
border:none;
cursor:pointer;

}

.error{

color:red;

}

</style>

</head>

<body>

<div class="box">

<h2>ورود مدیر</h2>

<?php
if(isset($error)){
echo "<p class='error'>$error</p>";
}
?>

<form method="post">

<input
name="username"
placeholder="نام کاربری"
required
>

<input
type="password"
name="password"
placeholder="رمز عبور"
required
>

<button
name="login"
>

ورود

</button>

</form>

</div>

</body>

</html>
