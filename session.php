<?php
// Establishing Connection with Server by passing server_name, user_id and password as a parameter
#$connection = mysql_connect("localhost", "root", "");
// Selecting Database
#$db = mysql_select_db("company", $connection);
include('server.php');
session_start();// Starting Session
// Storing Session
$user_check=$_SESSION['login_user'];
// SQL Query To Fetch Complete Information Of User
$query= "select username from users where username='$user_check'";
if( $database->num_rows( $query ) > 0 )
{
    list( $username, $password, $address ) = $database->get_row( $query );
    #echo "<p>With an ID of $id, $name has a parent of $parent</p>";
}
$login_session =$username;
if(!isset($login_session)){
#mysql_close($connection); // Closing Connection
header('Location: index.php'); // Redirecting To Home Page
}
?>