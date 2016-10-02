<?php 
include ('config.php');
//include ('getUsers.php');

$mysqli = new mysqli("127.0.0.1", "root", "", "printchowk");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$userName=$_POST['userName'];
$passcode=$_POST['passcode'];
$companyName=$_POST['companyName'];
$email=$_POST['email'];
$name=$_POST['Name'];
$contactNumber=$_POST['contactNumber'];
$alternateNumber=$_POST['alternateNumber'];
$creditAmountStatus=$_POST['creditAmountStatus'];
$creditAmount=$_POST['creditAmount'];

if ($stmt = $mysqli->prepare("INSERT INTO users (username, passcode,companyname,email,name,contactnumber,alternatenumber) values(?,?,?,?,?,?,?)")) {
 $stmt->bind_param("sssssdd",$userName,$passcode,$companyName,$email,$name,$contactNumber,$alternateNumber);
 if($stmt->execute()){
   if($id=$mysqli->prepare("INSERT INTO accountCredit (userId,creditAmount,creditStatus) values (?,?,?)")){
   $id->bind_param("sss",$userName,$creditAmount,$creditAmountStatus);
   $id->execute();
   $id->close();
}
if($address=$mysqli->prepare("INSERT INTO address (username,house,street,city,state,zipcode,landmark,type) values(?,?,?,?,?,?,?,?)")){
	$address->bind_param('ssssssss',$username,$house,$street,$city,$state,$zipcode,$landmark,$type);
	$address->execute();
	$address->close();
	}
echo "Record Saved Sucessfully!!";
}
 else 
   echo $mysqli->error;
 $stmt->close();
}else echo $mysqli->error;
$mysqli->close();

?>