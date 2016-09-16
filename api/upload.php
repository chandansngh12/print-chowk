<?php
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.
/*
$uploaddir = '/tmp';
$uploadfile = $uploaddir ."/".$_FILES['name'];
 var_dump($_FILES['file']);
echo '<pre>';
if (move_uploaded_file($_FILES['name'], "/tmp")) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Possible file upload attack!\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);

print "</pre>";
*/


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