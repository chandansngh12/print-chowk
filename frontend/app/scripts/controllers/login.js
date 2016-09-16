'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope,$location,$http,$rootScope) {




$scope.submit = function () {



var request = $http({
    method: "post",
    url:"http://localhost/print-chowk/api/login.php",
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




  });
