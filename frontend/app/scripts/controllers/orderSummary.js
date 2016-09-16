
angular.module('yapp')
  .controller('orderSummary', function($scope,$state,getobject,$sce,$rootScope,localStorageService) {

     $scope.orderDetails=localStorageService.get("orderDetails");

    // $cookies.orderCookie

  // $scope.obtained =

		 console.log($scope.orderDetails);

     $scope.trustSrcurl = function(data)
     {
         return $sce.trustAsResourceUrl(data);
     }

		 $scope.imagePath="http://localhost/print-chowk/api/uploads/"+"ashna.pdf";

    //   $scope.cookieWObject = $cookies.getObject('cookieName');
     //
    //  console.log($scope.cookieWObject);



 });
