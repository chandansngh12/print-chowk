<?php

include("config.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
//if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $_POST = json_decode(file_get_contents('php://input'), true);
// username and password sent from form 
$myusername=addslashes($_POST['username']); 
$mypassword=addslashes($_POST['password']); 

$sql="SELECT id FROM admin WHERE username='$myusername' and passcode='$mypassword'";
$result=mysql_query($sql);
$row=mysql_fetch_array($result);
$active=$row['active'];

$count=mysql_num_rows($result);


// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1)
{
//session_register("myusername");
$_SESSION['login_user']=$myusername;
$_SESSION['login_status']="success";
	//echo "success";
	echo(json_encode($_SESSION));
}
else
{
	//echo $error="Your Login Name or Password is invalid";
	$_SESSION['login_status']="failed";
	echo(json_encode($_SESSION));
}
}
?>
