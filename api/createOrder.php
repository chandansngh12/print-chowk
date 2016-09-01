<?php
include("config.php");
session_start();
print_r($_SESSION);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	$order = json_decode($_POST["orders"]);

$sql = "INSERT INTO orders (`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`) VALUES ('".$_POST['orderType']."','".$_POST['productType']."','".$_POST['productTitle']."','".$_POST['productName']."','".$_POST['quantity']."','".$_POST['dimensions']."','".$_POST['heightdim']."','".$_POST['widthdim']."','".$_POST['finish']."','".$_POST['cutting']."','".$_POST['comment']."')";

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