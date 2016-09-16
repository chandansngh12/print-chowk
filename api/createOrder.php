<?php
include("config.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	$order = json_decode($_POST["orders"]);


$sql = "INSERT INTO orders 
(`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`,
`fileName`,`amount`,`status`,`paymentType`,`city`,`state`,`landmark`,`zipcode`) 
VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."',
'".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."',
'".$_POST['imageUrl']."','".$_POST['amount']."','".$_POST['orderStatus']."','".$_POST['paymentType']."','".$_POST['city']."','".$_POST['state']."',
'".$_POST['landmark']."','".$_POST['zipCode']."')";

$result=mysql_query($sql);

if ($result)
	{
		echo "success";
	}
else{
	echo "failed";
	}
}
?>