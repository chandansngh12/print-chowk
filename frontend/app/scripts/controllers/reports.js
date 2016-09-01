
angular.module('yapp')
  .controller('reportsCtrl', function($scope, $state,getobject) {
  $scope.productNames = ["Emil", "Tobias", "Linus"];
	$scope.paper = ["100 GSM Matt Paper", "170 GSM Matt Paper", "250 GSM Matt Paper","300 GSM Matt Paper","Textured Paper"];
  $scope.dimensions =["mm","cm","inch","ft"];
	$scope.finishArr=["No Lamination","Matt Lamination","Gloss Lamination","Waterproof Lamination"];
  $scope.getcutting=["Leave White Border","End-to-End"];
   $scope.tab_to=0;
	 $scope.orderDetails={
		 orderType:"existing",
		 productType:"paper",
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
	$scope.selectedItem="";

self.savedObject = $scope.orderDetails;

$scope.$watch('$scope.orderDetails', function() {
       $scope.orderDetails = self.savedObject;
    });

    var request = $http({
        method: "post",
        url:"http://localhost/print-chowk/api/login.php",
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



 });

angular.module('yapp')
 .service('getobject', function() {
    self=this;
     self.savedObject ={};

 });
