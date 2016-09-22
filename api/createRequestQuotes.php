<?php
include("config.php");
session_start();

if (isset($_SESSION['login_status']))
{
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    print_r($_FILE);
    $_POST = json_decode(file_get_contents('php://input'), true);
	$order = json_decode($_POST["orders"]);


$sql = "INSERT INTO requestQuotes 
(`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`,
`fileName`,`amount`,`status`,`paperType`,`paymentType`) 
VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."',
'".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."',
'".$_POST['imageUrl']."','".$_POST['amount']."','".$_POST['orderStatus']."','".$_POST['paperType']."','".$_POST['paymentType']."')";

$result=mysql_query($sql);

if ($result)
	{
		echo "success";
	}
else{
	echo "failed";
	}
}
}
?>