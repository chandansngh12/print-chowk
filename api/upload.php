<?php
session_start();

if (isset($_SESSION['login_status']))
{
 if(isset($_FILES['file'])){
      $errors= array();
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));
      $expensions= array("pdf");
     
      if(empty($errors)==true){
         $file_name=date("Y-m-d").$file_name;
         move_uploaded_file($file_tmp,"/Library/WebServer/Documents/print-chowk/api/uploads/".$file_name);
         $sql="INSERT INTO filevault (`fileName`,`userId`) values('".$file_name."'".$_SESSION['login_user']."')";
         $result=mysql_query($sql);
         if ($result)
         echo "Success";
         else{
            echo mysql_error();
         }
      }else{
         print_r($errors);
      }
   }
}
?>