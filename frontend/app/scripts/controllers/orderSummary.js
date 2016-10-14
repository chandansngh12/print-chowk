
angular.module('yapp')
  .controller('orderSummary', function($scope,$state,getobject,$sce,$rootScope,localStorageService) {

     $scope.orderDetails=localStorageService.get("orderDetails");
   console.log($scope.orderDetails);
    // $cookies.orderCookie

  // $scope.obtained =

		 console.log($scope.orderDetails);

     $scope.trustSrcurl = function(data)
     {
         return $sce.trustAsResourceUrl(data);
     }

		 $scope.imagePath="http://localhost/print-chowk/api/uploads/"+$scope.orderDetails.fileName;
     console.log($scope.orderDetails.fileName);

    //   $scope.cookieWObject = $cookies.getObject('cookieName');
     //
    //  console.log($scope.cookieWObject);



 });
