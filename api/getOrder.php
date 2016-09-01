<?php
include("config.php");
session_start();

$sql="SELECT * FROM orders";
$result=mysql_query($sql);
$row=mysql_fetch_array($result);
$count=mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
if($count>1)
{
	echo(json_encode($row));
}
else
{
	echo("Sorry, no orders found.");
}
?>
