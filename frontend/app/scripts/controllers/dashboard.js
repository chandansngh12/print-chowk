'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope,$mdSidenav,$state,$mdMedia) {
    $scope.$mdMedia = $mdMedia;
    $scope.tabs=1;
  

   $scope.togMenu = function() {
     if($scope.tab==1)
     $scope.tab=0;
     else {
       $scope.tab=1;
     }
     console.log($scope.tab);
   };

    $scope.$state = $state;
    $scope.order_processing=3;
    $scope.order_pending=1;
    $scope.order_shipped=5;
    $scope.tab=1;
$scope.names = ["Emil", "Tobias", "Linus"];
  });
