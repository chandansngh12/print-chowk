<?php
include('config.php');


$mysqli = new mysqli("127.0.0.1", "root", "", "printchowk");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


$user=$_POST['userName'];
$result = array();
$row = array();
$row_array= array();
$return_arr=array();
if($stmt=$mysqli->prepare("SELECT * FROM orders WHERE userId=?")){
	$stmt->bind_param('s',$user);
	$result=$stmt->execute();
	$result=$stmt->get_result();
	while ($row=$result->fetch_array()) {
    //var_dump($row);
    $row_array['orderId'] = $row['orderId'];
    $row_array['orderType'] = $row['orderType'];
    $row_array['productType'] = $row['productType'];
    $row_array['productType'] = $row['productType'];
    $row_array['productName'] = $row['productName'];
    $row_array['quantity'] = $row['contactnumber'];
    $row_array['heightdim'] = $row['heightdim'];
    $row_array['widthdim'] = $row['widthdim'];
    $row_array['finish'] = $row['finish'];
    $row_array['fileName'] = $row['fileName'];
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
 else echo $mysqli->error;

$mysqli->close();



?>