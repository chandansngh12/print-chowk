<?php 

$mysqli = new mysqli("127.0.0.1", "root", "", "printchowk");

if (mysqli_connect_errno()) {

    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$user=$_POST['userName'];
$row = array();
$row_array= array();
$return_arr=array();
if($stmt=$mysqli->prepare("SELECT * FROM filevault WHERE userId=?")){
	$stmt->bind_param('s',$user);
	$result=$stmt->execute();
	$result=$stmt->get_result();
	while ($row=$result->fetch_array()) {
		$row_array['fileName']=$row['fileName'];
		$row_array['saveDate']=$row['saveDate'];
		array_push($return_arr,$row_array);
	}
echo json_encode($return_arr);
}else $mysqli->error;
$mysqli->close;

?>