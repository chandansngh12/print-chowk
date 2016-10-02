<?php 
include ('config.php');

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

if ($stmt = $mysqli->prepare("INSERT INTO users (userName, passcode,companyName,email,name,contactNumber,alternateNumber) values(?,?,?,?,?,?,?)")) {
 $stmt->bind_param("sssssss",$userName,$passcode,$companyName,$email,$name,$contactNumber,$alternateNumber);
 if($stmt->execute())
   echo "Record saved successfully";
 else 
   echo $mysqli->error;
 $stmt->close();
}else echo $mysqli->error;
$mysqli->close();

?>