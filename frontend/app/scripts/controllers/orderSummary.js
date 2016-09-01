
angular.module('yapp')
  .controller('orderSummary', function($scope, $state,getobject) {

     $scope.orderDetails=getobject;
		 console.log($scope.orderDetails);

		 $scope.imageurl="/images/flat-avatar.png";

 });
