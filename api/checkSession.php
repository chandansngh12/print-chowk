<?php
session_start();
if (isset($_SESSION['login_status'])){
print_r($_SESSION);
} else 
echo "no session";
?>