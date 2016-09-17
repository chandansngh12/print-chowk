<?php 
include("config.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	
$sql = "INSERT INTO priceList (`orderId`) VALUES (".$_POST['ordersId'].")";

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