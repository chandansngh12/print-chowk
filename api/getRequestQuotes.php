<?php
include("config.php");
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
	$order = json_decode($_POST["orders"]);



$sql = "select * from requestQuotes where userId='".$_SESSION['login_user']."'";

$result=mysql_query($sql);

if($count>1)
{
	while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $row_array['orderId'] = $row['orderId'];
    $row_array['orderType'] = $row['orderType'];
    $row_array['productType'] = $row['productType'];
    $row_array['productTitle'] = $row['productTitle'];
    $row_array['productName'] = $row['productName'];
    $row_array['quantity'] = $row['quantity'];
    $row_array['dimensions'] = $row['dimensions'];
    $row_array['heightdim'] = $row['heightdim'];
    $row_array['widthdim'] = $row['widthdim'];
    $row_array['finish'] = $row['finish'];
    $row_array['cutting'] = $row['cutting'];
    $row_array['comment'] = $row['comment'];
    $row_array['amount'] = $row['amount'];
    $row_array['status'] = $row['status'];
    $row_array['paymentType'] = $row['paymentType'];
    $row_array['city'] = $row['city'];
    $row_array['state'] = $row['state'];
    $row_array['landmark'] = $row['landmark'];
    $row_array['zipcode'] = $row['zipcode'];
    array_push($return_arr,$row_array);
}
}
else{
	echo "failed";
	}
}
?>