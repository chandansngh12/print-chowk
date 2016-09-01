<?php
include("config.php");
session_start();

$order = json_decode($_POST["orders"]);
echo($order->product_name);
$sql = "INSERT INTO orders (`product_name`, `product_id`, `qty`, `user_id`, `uploaded_design_path`) VALUES ('".$order->product_name."', '".$order->product_id."', '".$order->qty."', '".$order->user_id."', '".$order->file_name."')";
$result=mysql_query($sql);

if ($result)
	{
		echo "success";
	}
else{
	echo "failed";
	}
?>