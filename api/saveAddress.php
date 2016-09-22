<?php
include("config.php");
session_start();

if (isset($_SESSION['login_status']))
{
if ($_SERVER['REQUEST_METHOD'] == 'POST' /*&& empty($_POST)*/)
{
    //$_POST = json_decode(file_get_contents('php://input'), true);
    $address = trim($_POST['address']);

    if (isset($address)){
    	$sql="INSERT INTO saveAddress (`Address`,`userName`) values ('".$address."','".$_SESSION['login_user']."')";
    	$result=mysql_query($sql);
		
		if($result){
			echo "success";
			}else
			echo "failed";
    	}
	}
}

?>