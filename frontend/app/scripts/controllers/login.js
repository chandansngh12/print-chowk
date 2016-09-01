'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope,$location,$http) {




$scope.submit = function () {



var request = $http({
    method: "post",
    url:"http://192.168.5.6/print-chowk/api/login.php",
    data: {
        username: $scope.username,
        password: $scope.password
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

/* Check whether the HTTP Request is successful or not. */
request.success(function (data) {
    if(data.login_status == "success"){
      console.log(data.login_status);
    $location.path('/dashboard');}
    else console.log(data);
});
}







    /*$scope.submit = function() {

  $scope.user =



   $http({
    method: 'POST',
    url: '192.168.5.3/print-chowk/api/login.php',
    headers: {
        'Content-Type': 'application/json', /*or whatever type is relevant
        'Accept': 'application/json' /* ditto
    },
    data: {

                userid :" ",
                password :" "

    }
})



      return false;
    }*/

  });
