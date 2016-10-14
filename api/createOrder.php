<?php
include("config.php");
session_start();

function debitAmount($amount,$user_name){
$sql="UPDATE accountCredit set creditAmount = ".$amount." where `userId` = '".$_POST['login_user']."'";
$result=mysql_query($sql);

}

function placeOrder($creditAmount){
 $sql = "INSERT INTO orders 
(`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`,`userId`,
`fileName`,`amount`,`status`,`paymentType`) 
VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."',
'".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."',
'".$_POST['login_user']."','".$_POST['imageUrl']."',".$_POST['amount'].",'".$_POST['orderStatus']."','".$_POST['paymentType']."')";
$result=mysql_query($sql);

$creditAmount=$_POST['amount'] - $creditAmount;
if ($result)
	{
		debitAmount($_POST['amount'],$_POST['login_user'],$creditAmount);
		 $order="select max(orderId) as orderId from orders where `userId`='".$_POST['login_user']."'";
        $result=mysql_query($order);
        $orderId=mysql_fetch_row($result,MYSQL_ASSOC);
         echo $orderId['orderId'];

//		echo "success";
	}
else{
	echo mysql_error();
	}

}

if (isset($_SESSION['login_status']))
{
if ($_SERVER['REQUEST_METHOD'] )== 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	$paymentType=$_POST['paymentType'];

if($paymentType=="Pay on Account"){
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
}}
}

?>