<?php

define( 'DB_HOST', 'localhost' ); // set database host
define( 'DB_USER', 'dbuser' ); // set database user
define( 'DB_PASS', 'dbpass' ); // set database password
define( 'DB_NAME', 'dbname' ); // set database name
define( 'SEND_ERRORS_TO', 'info@gridcoins.info' ); //set email notification email address
define( 'DISPLAY_DEBUG', true ); //display db errors?
require_once( 'class.db.php' );
//Initiate the database class
$database = new DB();

//Initiate the gridcoin class
require_once('main.php');
$gridcoin = new Gridcoin('rpcuser','rpcpass');


?>