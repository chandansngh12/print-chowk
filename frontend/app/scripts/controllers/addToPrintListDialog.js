angular.module('yapp')
  .controller('addToPrintListDialog', function($scope, $state,getobject,$http,$mdDialog,getDialogData) {


	 $scope.dialogData=getDialogData.dialogData;
   console.log($scope.dialogData);

    $scope.cancelled=function(){
      $mdDialog.hide();
    }
   $scope.orderTitle=" ";

    $scope.addPriceList = function() {


      var request = $http({
          method: "post",
          url:"http://localhost/print-chowk/api/priceList.php",
          data: {
           orderId:$scope.dialogData.orderId,
           orderTitle:$scope.orderTitle,
           qty:$scope.dialogData.quantity
          },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      /* Check whether the HTTP Request is successful or not. */
      request.success(function (data) {
          if(data=="success"){
          $mdDialog.hide();
          // $location.path('/thankYou');
        }
          else console.log(data);
      });
      }






 });
