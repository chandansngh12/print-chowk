<?php 
include('config.php');
session_start();

function addCredit($user,$amount){
	$limit = (int)$amount;
	$sql="UPDATE  accountCredit SET `creditAmount`= `creditAmount` +".$limit." where `userId` = '".$user."'";
	$result=mysql_query($sql);

	if($result){
		echo "success";
	}else{
		echo mysql_error();
	}
}

//if(isset($_SESSION['login_user'])){
//	$_POST = json_decode(file_get_contents('php://input'), true);
//	$user=$_SESSION['login_user'];
	$user=$_POST['login_user'];
	$limit=trim($_POST['amount']);
	
	if (isset($limit) && ($limit!="")){
		addCredit($user,$limit);
	}

//}

?>