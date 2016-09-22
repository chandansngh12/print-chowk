<?php 
include("config.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
    $orderId=$_POST['orderId'];
    $orderTitle=$_POST['orderTitle'];
    $qty=$_POST['qty'];
	
    $sql = "INSERT INTO priceList (`orderId`,`orderTitle`,`qty`) VALUES (".$orderId.",'".$orderTitle."',".$qty.")";

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