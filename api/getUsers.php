<?php
include ('config.php');


$mysqli = new mysqli("127.0.0.1", "root", "", "printchowk");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$row_array= array();
$return_arr= array();
$result=array();
if(isset($userName) && (!is_null($userName))){
	$stmt = $mysqli->prepare("SELECT username,passcode,companyname,email,name,contactnumber,contactnumber FROM users where username=?");
	$stmt->bind_param("s",$userName);
}else {
	$stmt = $mysqli->prepare("SELECT username,passcode,companyname,email,name,contactnumber,contactnumber FROM users");
}
if ($stmt) {
 //$stmt->bind_param("s",$userName);
if($result=$stmt->execute()){
	//$stmt->bind_result($username,$passcode,$companyname,$email,$name,$contactnumber,$alternatenumber);
    $result = $stmt->get_result();
	while ($row=$result->fetch_array()) {
    $row_array['userName'] = $row['username'];
    $row_array['passcode'] = $row['passcode'];
    $row_array['companyname'] = $row['companyname'];
    $row_array['email'] = $row['email'];
    $row_array['name'] = $row['name'];
    $row_array['contactnumber'] = $row['contactnumber'];
    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);
}
   
 else 
   echo $mysqli->error;
 $stmt->close();
}else echo $mysqli->error;
$mysqli->close();






?>