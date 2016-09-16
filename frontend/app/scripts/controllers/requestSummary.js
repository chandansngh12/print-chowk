
angular.module('yapp')
  .controller('requestSummary', function($scope,$location, $state,getobject,$sce,$http,$cookies) {

     $scope.orderDetails=getobject;
		//  console.log($scope.orderDetails);

     $scope.trustSrcurl = function(data)
     {
         return $sce.trustAsResourceUrl(data);
     }

		  $scope.imagePath="http://localhost/print-chowk/api/uploads/"+"ashna.pdf";

      $scope.addOrder = function () {

      var request = $http({
          method: "post",
          url:"http://localhost/print-chowk/api/createRequestQuotes.php",
          data: {
           orderType:$scope.orderDetails.Product.orderType,
           productType:$scope.orderDetails.Product.productType,
           productTitle:$scope.orderDetails.Product.productTitle,
           productName:$scope.orderDetails.Product.productName,
           quantity:$scope.orderDetails.Product.quantity,
           dimensions:$scope.orderDetails.Product.dimensions,
           heightdim:$scope.orderDetails.Product.heightdim,
           widthdim:$scope.orderDetails.Product.widthdim,
           finish:$scope.orderDetails.Product.finish,
           cutting:$scope.orderDetails.Product.cutting,
           comment:$scope.orderDetails.Product.comment,
           imageUrl:$scope.orderDetails.Product.imageUrl,
           amount:$scope.orderDetails.Product.amount,
           orderStatus:$scope.orderDetails.Product.orderStatus,
           paperType:$scope.orderDetails.paperType,
           paymentType:$scope.orderDetails.Product.paymentType,
          },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      /* Check whether the HTTP Request is successful or not. */
      request.success(function (data) {
          if(data=="success"){
          $location.path('/thankYou');
        }
          else console.log(data);
      });
      }





 });
