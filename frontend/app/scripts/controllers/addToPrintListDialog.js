angular.module('yapp')
  .controller('addToPrintListDialog', function($scope, $state,getobject,$http,localStorageService,$mdDialog,Upload,$timeout) {

$scope.upload_file=null;
	 $scope.dialogData=getobject.details;
   console.log($scope.dialogData);
   $scope.isUploaded=false;
  //  console.log($scope.dialogData);

   $scope.quantity=[100,200,300];

    $scope.cancelled=function(){
      $mdDialog.hide();
    }


 $scope.orderNow = function() {

   localStorageService.set("orderDetails",$scope.dialogData);
   getobject.isVisited=1;
   $state.go('orderSummary');
   $mdDialog.hide();


 }



      // UPLOADCARE_PUBLIC_KEY = 'demopublickey';

      $(document).ready(function()
          {
            $scope.testme=$("#fileuploader").uploadFile({
            url:"http://localhost/print-chowk/api/upload_me.php",
            fileName:"myfile",
            multiple:false,
            dragDrop:false,
            maxFileCount:1,
            onSuccess:function()
                  {
                      $scope.dialogData.fileName=$scope.testme.existingFileNames[0]; //get the file name
                      $scope.isUploaded=true;

                  },
            });

          });





 });
