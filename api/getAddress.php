<?php
include("config.php");
session_start();

if (isset($_SESSION['login_status']))
{
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
    
       	echo $sql="SELECT * FROM addressall  where `userName`='".$_POST['login_user']."'";
    	$result=mysql_query($sql);
			if($result){
			echo "success";
			}else
			echo "failed";
    	}
}

?>