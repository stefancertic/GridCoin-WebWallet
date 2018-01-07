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
    
<title>GridCoin - Create Wallet</title>

<?php
require_once('server.php');

if (isset($_POST['submit'])) {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        $error = "You need to set both username and password";
    }
    else 
    {
    $username=$_POST['username'];
    $password=$_POST['password'];    
    $username = stripslashes($username);
    $password = stripslashes($password);
    
    $chk = "select * from users where username='$username'";
    $rows1 = $database->num_rows($chk);
    if ($rows1 == 1) {
        $error1 = 'Username already exsist';
        #exit;
    } else {
    
        $address =$gridcoin->getaccountaddress($username);
    }
        $user_data = array(
           'username' => $username, 
           'password' => $password, 
           'address' => $address
        );
      
    $add_query = $database->insert( 'users', $user_data );
    #$add_query = $database->get_results("INSERT into users (username,password,address) VALUES ('$username', '$password', '$address')");
    if( $add_query )
        {
            $error = "Your account has been created, please login to retreive your private key";
            header( "refresh:5;url=index.php" );
        } else {
            $error = 'Something went wrong' . " $error1";
        }
    }
}


php?>


<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" href="styles/skin.css">
<link rel="stylesheet" type="text/css" href="styles/framework.css">
<link rel="stylesheet" type="text/css" href="styles/font-awesome.css">
    
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/plugins.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>
</head>

<body>
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

        <form action="/create.php" method="post">

        <div class="page-login content">
            <a href="#" class="page-login-logo"><img class="preload-image" data-original="images/preload-logo.png" alt="img"></a>
            <div class="page-login-input">
                <i class="login-icon fa fa-user"></i>
                <input type="text" name="username" value="Username" onfocus="if (this.value=='Username') this.value = ''" onblur="if (this.value=='') this.value = 'Username'">
            </div>                   

            <div class="page-login-input full-bottom">
                <i class="login-icon fa fa-lock"></i>
                <input type="password" name="password" value="password" onfocus="if (this.value=='password') this.value = ''" onblur="if (this.value=='') this.value = 'password'">
            </div>

            <input name="submit" type="submit" value=" Create Account " class="button button-green button-icon button-full half-top full-bottom"></>

            </form>

            <div class="decoration"></div>
            
            <?php echo $error; php?>

            <div class="decoration full-top"></div>

            <a href="/index.php" class="button button-blue button-icon button-full half-top full-bottom"><i class="fa fa-lock"></i>Login Here</a>
        
            
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
    
      
    
<div class="share-bottom share-dark">
    <h3>Share Page</h3>
    <div class="share-socials-bottom">
        <a class="default-link" href="https://www.facebook.com/sharer/sharer.php?u=http://www.themeforest.net/">
            <i class="fa fa-facebook facebook-color"></i>Facebook
        </a>
        <a class="default-link" href="https://twitter.com/home?status=Check%20out%20ThemeForest%20http://www.themeforest.net">
            <i class="fa fa-twitter twitter-color"></i>Twitter
        </a>
        <a class="default-link" href="https://plus.google.com/share?url=http://www.themeforest.net">
            <i class="fa fa-google-plus google-color"></i>Google
        </a>
        <a class="default-link" href="https://pinterest.com/pin/create/button/?url=http://www.themeforest.net/&media=https://0.s3.envato.com/files/63790821/profile-image.jpg&description=Themes%20and%20Templates">
            <i class="fa fa-pinterest-p pinterest-color"></i>Pinterest
        </a>
        <a class="default-link" href="sms:">
            <i class="fa fa-comment-o sms-color"></i>Text
        </a>
        <a class="default-link" href="mailto:?&subject=Check this page out!&body=http://www.themeforest.net">
            <i class="fa fa-envelope-o mail-color"></i>Email
        </a>
        <div class="clear"></div>
    </div>
</div>
<div class="sidebar-tap-close"></div>
<a href="#" class="back-to-top-badge"><i class="fa fa-caret-up"></i>Back to Top</a>
    
</div>
</body>