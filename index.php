<!DOCTYPE HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0 minimal-ui" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<link rel="icon" type="image/png" href="images/splash/android-chrome-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" sizes="196x196" href="images/splash/apple-touch-icon-196x196.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/splash/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="152x152" href="images/splash/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="144x144" href="images/splash/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="120x120" href="images/splash/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/splash/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="76x76" href="images/splash/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/splash/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="60x60" href="images/splash/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="57x57" href="images/splash/apple-touch-icon-57x57.png">
<link rel="icon" type="image/png" href="images/splash/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="images/splash/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="images/splash/favicon-16x16.png" sizes="16x16">
<link rel="shortcut icon" href="images/splash/favicon.ico" type="image/x-icon" />
<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet' type='text/css'>
    
<title>GridCoin Wallet</title>

<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" href="styles/skin.css">
<link rel="stylesheet" type="text/css" href="styles/framework.css">
<link rel="stylesheet" type="text/css" href="styles/font-awesome.css">
    
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/plugins.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>
</head>

<body>
<?php
require_once('server.php');
require('login.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
header("location: profile.php");
}
# $results = $database->get_results( $query );
php?>

<div id="page-transitions">
    
<div class="page-preloader page-preloader-dark">
    <img class="page-preload" src="images/preload.gif">
</div>
    
<div class="header header-dark">
    <a href="#" class="header-icon header-icon-1 open-left-sidebar"><i class="fa fa-navicon"></i></a>
    <a href="#" class="header-logo scale-hover"></a>
    <a href="#" class="header-icon header-icon-4 open-right-sidebar"><i class="fa fa-envelope-o"></i></a>
</div>

            
<div id="page-content" class="page-content header-clear">
    <div id="page-content-scroll">

        <div class="page-login content full-bottom">
            <a href="#" class="page-login-logo"><img class="preload-image" data-original="images/preload-logo.png"></a>
            <?php
            echo "<center>WARNING: EARLY BETA</center>";
            echo "<center>Absolutely no warranty</center>";
            #require_once('main.php');
            ?>
            <form action="/index.php" method="post">
            <div class="page-login-input">
                <i class="login-icon fa fa-user"></i>
                <input id="name" name="username" type="text" value="Username" onfocus="if (this.value=='Username') this.value = ''" onblur="if (this.value=='') this.value = 'Username'">
            </div>                
            <div class="page-login-input">
                <i class="login-icon fa fa-lock"></i>
                <input id="password" name="password" type="password" value="password" onfocus="if (this.value=='password') this.value = ''" onblur="if (this.value=='') this.value = 'password'">
            </div>
            
            <div class="page-login-links">
                <a href="#" class="page-login-forgot"><i class="fa fa-eye"></i>Forgot Credentials</a>
                <a href="create.php" class="page-login-create">Create Wallet<i class="fa fa-user"></i></a>
                <div class="clear"></div>
            </div>            
            
            <?php
            #<a href="" class="button button-green button-icon button-full half-top full-bottom"><i class="fa fa-angle-right"></i>Login</a>
            #<input name="submit" type="submit" value=" Login " class="button button-green button-icon button-full half-top full-bottom"><i class="fa fa-angle-right"></i></>
            php?>
            <input name="submit" type="submit" value=" Login " class="button button-green button-icon button-full half-top full-bottom"></>

            <span><?php echo $error; ?></span>
            </form>

            <div class="decoration"></div>

            <div class="decoration full-top"></div>

            <a href="create.php" class="button button-blue button-icon button-full half-top full-bottom"><i class="fa fa-lock"></i>Create Wallet</a>           
        </div>
                    
        <div class="decoration decoration-margins"></div>
        
        <div class="footer footer-dark">
            <a href="#" class="footer-logo scale-hover"></a>
            <p>
                This is very early stage development of GridCoin Wallet, 
                running on test node.
            </p>
            <div class="footer-socials">
                <a href="#" class="default-link icon icon-round no-border icon-xs facebook-bg"><i class="fa fa-facebook"></i></a>
                <a href="#" class="default-link icon icon-round no-border icon-xs twitter-bg"><i class="fa fa-twitter"></i></a>
                <a href="#" class="default-link icon icon-round no-border icon-xs google-bg"><i class="fa fa-google-plus"></i></a>
                <a href="#" class="default-link icon icon-round no-border icon-xs phone-bg"><i class="fa fa-phone"></i></a>
                <a href="#" class="icon icon-round no-border icon-xs show-share-bottom bg-blue-dark"><i class="fa fa-retweet"></i></a>
                <a href="#" class="icon icon-round no-border icon-xs back-to-top bg-night-dark"><i class="fa fa-angle-up"></i></a>
            </div>
            <div class="decoration"></div>
            <p class="copyright-text">Donations: S1fvbZH9YpLPCT6TDnmNyi6QnZobEN4s21</p>
            
        </div>
        
    </div>  
</div>

<?php
#include 'menu.php';
?>    

<?php
# Ovde social
?>

<?php
#include 'right.php';
?>  

<?php
# Kraj
?>

<?php
#include 'sharer.php';
?>  
<div class="sidebar-tap-close"></div>
<a href="#" class="back-to-top-badge"><i class="fa fa-caret-up"></i>Back to Top</a>

</div>
    

</body>