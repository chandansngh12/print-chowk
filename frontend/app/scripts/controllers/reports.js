
angular.module('yapp')
  .controller('reportsCtrl', function($scope, $state,getobject,$http,$location) {
  $scope.productNames = ["banner", "mugs", "tshirts"];
	$scope.paper = ["100 GSM Matt Paper", "170 GSM Matt Paper", "250 GSM Matt Paper","300 GSM Matt Paper","Textured Paper"];
  $scope.dimensions =["mm","cm","inch","ft"];
	$scope.finishArr=["No Lamination","Matt Lamination","Gloss Lamination","Waterproof Lamination"];
  $scope.getcutting=["Leave White Border","End-to-End"];
   $scope.tab_to=0;
	 $scope.orderDetails={
		 orderType:"existing",
		 productType:"paper",
     nonPaperType:"",
		 productTitle:"",
     productName:"",
		 quantity:10,
		 dimensions:"",
		 heightdim:0,
     widthdim:0,
		 finish:"",
     cutting:"",
     comment:""
	 }

   getobject.Product = $scope.orderDetails;



    $scope.addOrder = function () {

    var request = $http({
        method: "post",
        url:"http://192.168.5.6/print-chowk/api/createOrder.php",
        data: {
         orderType:$scope.orderDetails.orderType,
         productType:$scope.orderDetails.productType,
         productTitle:$scope.orderDetails.productTitle,
         productName:$scope.orderDetails.productName,
         quantity:$scope.orderDetails.quantity,
         dimensions:$scope.orderDetails.dimensions,
         heightdim:$scope.orderDetails.heightdim,
         widthdim:$scope.orderDetails.widthdim,
         finish:$scope.orderDetails.finish,
         cutting:$scope.orderDetails.cutting,
         comment:$scope.orderDetails.comment
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    /* Check whether the HTTP Request is successful or not. */
    request.success(function (data) {
        if(data=="success"){
        $location.path('/orderSummary');
      }
        else console.log(data);
    });
    }







 });
