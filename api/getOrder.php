<?php
include("config.php");
session_start();

if(isset($_SESSION['login_status']));{

$return_arr = array();
$row_array = array();


$sql="SELECT * FROM orders where `userId`='".$_SESSION['login_user']."'";
$result=mysql_query($sql);
$count=mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
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

echo json_encode($return_arr);
}
else
{
	echo("Sorry, no orders found.");
}

}
?>
