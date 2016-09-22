<?php
include('config.php');
session_start();

if (isset($_SESSION['login_status']))
{
$return_arr = array();
$row_array = array();
if ($_SERVER['REQUEST_METHOD'] == 'POST') && empty($_POST))
{
    $_POST = json_decode(file_get_contents('php://input'), true);
   $userId=$_POST['userId'];
   $sql = "SELECT * FROM fileVault where userId=".$userId;

   $result=mysql_query($sql);
   $count=mysql_num_rows($result);

if($count >0){
   while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
   $row_array['fileName'] = $row['fileName'];
   $row_array['saveDate'] = $row['saveDate'];
   array_push($return_arr,$row_array);
}
echo json_encode($return_arr);
}
else {
   echo "No result found";
   }
}

}
?>