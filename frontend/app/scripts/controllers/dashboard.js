'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.order_processing=3;
    $scope.order_pending=1;
    $scope.order_shipped=5;
$scope.names = ["Emil", "Tobias", "Linus"];
  });
