<?php
include("config.php");
session_start();

function debitAmount($amount,$user_name){
$sql="UPDATE accountCredit set creditAmount = ".$amount." where `userId` = '".$_POST['login_user']."'";
$result=mysql_query($sql);

}

function placeOrder($creditAmount){
 echo $sql = "INSERT INTO orders 
(`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`,`userId`,
`fileName`,`amount`,`status`,`paymentType`,`city`,`state`,`landmark`,`zipcode`) 
VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."',
'".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."',
'".$_POST['login_user']."','".$_POST['imageUrl']."',".$_POST['amount'].",'".$_POST['orderStatus']."','".$_POST['paymentType']."','".$_POST['city']."','".$_POST['state']."',
'".$_POST['landmark']."','".$_POST['zipCode']."')";
$result=mysql_query($sql);

$creditAmount=$_POST['amount'] - $creditAmount;
if ($result)
	{
		debitAmount($_POST['amount'],$_POST['login_user'],$creditAmount);
		echo "success";
	}
else{
	echo mysql_error();
	}

}

if (isset($_SESSION['login_status']))
{
if ($_SERVER['REQUEST_METHOD'] == 'POST' /*&& empty($_POST)*/)
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	$paymentType=$_POST['paymentType'];

if($paymentType=="1"){
 	$amountSql="SELECT creditAmount from accountCredit where userId='".$_POST['login_user']."'";
	$amountResult=mysql_query($amountSql);
	if($amountResult){
	$amountRow=mysql_fetch_row($amountResult,MYSQL_ASSOC);
    $creditAmount=$amountRow['creditAmount'];
	if($creditAmount >= $_POST['amount']){
      placeOrder($creditAmount);
	 }else{
	 	echo"Sorry you don't have enough credit";
	 }
	}
}else{
	echo "rajor pay";
}
die();
$sql = "INSERT INTO orders 
(`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment,`userId`
`fileName`,`amount`,`status`,`paymentType`,`city`,`state`,`landmark`,`zipcode`) 
VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."',
'".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."',
'".$_SESSION['login_user']."',".$_POST['imageUrl']."','".$_POST['amount']."','".$_POST['orderStatus']."','".$_POST['paymentType']."','".$_POST['city']."','".$_POST['state']."',
'".$_POST['landmark']."','".$_POST['zipCode']."')";

$result=mysql_query($sql);

if ($result)
	{
		echo "success";
	}
else{
	echo "failed";
	}
}//}
?>