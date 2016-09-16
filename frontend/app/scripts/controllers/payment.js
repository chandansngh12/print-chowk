
angular.module('yapp')
  .controller('payment', function($scope, $state,getobject,$sce,localStorageService) {

     $scope.orderDetails=localStorageService.get("orderDetails")

		 console.log($scope.orderDetails);

     $scope.trustSrcurl = function(data)
     {
         return $sce.trustAsResourceUrl(data);
     }

		 $scope.imagePath="http://localhost/print-chowk/api/uploads/"+"ashna.pdf";


 });
