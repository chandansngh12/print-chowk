
angular.module('yapp')
  .controller('price_list', function($scope, $state,getobject,$http) {



   $http({
     method:'GET',
     url:'http://localhost/print-chowk/api/priceList.php'
     })
      .then(function (response) {
            $scope.details=response.data;


       },
       function errorCallback(response) {
           console.log(response);
       });

 });
