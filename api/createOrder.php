<?php
include("config.php");
session_start();

var_dump($_POST);
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
var_dump($_POST);

$order = json_decode($_POST["orders"]);
echo($order->product_name);
//$sql = "INSERT INTO orders (`product_name`, `product_id`, `qty`, `user_id`, `uploaded_design_path`) VALUES ('".$order->product_name."', '".$order->product_id."', '".$order->qty."', '".$order->user_id."', '".$order->file_name."')";
$sql = "INSERT INTO orders (`orderType`, `productType`, `productTitle`, `productName`, `quantity`,`dimensions`,`heightdim`,`widthdim`,`finish`,`cutting`,`comment`) VALUES ('"$_POST['orderType'].",".$_POST['productType'].",".$_POST['productTitle'].",".$_POST['productName'].",".$_POST['quantity'].",".$_POST['dimensions'].",".$_POST['heightdim'].",".$_POST['widthdim'].",".$_POST['finish'].",".$_POST['cutting'].",".$_POST['comment']."')";
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