<?php

 if(isset($_FILES['file'])){
      $errors= array();
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));

      $expensions= array("html");

      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"/Library/WebServer/Documents/print-chowk/api/uploads/".$file_name);
         echo "Success";
       
      }else{
         print_r($errors);
      }
   }

?>