
angular.module('yapp')
  .controller('order_list', function($scope,getDialogData,$state,getobject,$http,$mdDialog,getDialogData,$rootScope) {

 $scope.selected=[];

  // dialog functionality
  // $scope.getDataForDialog = function(x) {
  //   getDialogData.dialogData=x;
  // };


        $http({
          method:'GET',
          url:'http://localhost/print-chowk/api/getOrder.php'
          })
           .then(function (response) {
                 $scope.details=response.data;
                 $rootScope.details=response.data;
                 console.log($scope.details);

            },
            function errorCallback(response) {
                console.log(response);
            });



            // dialog functionality

            $scope.showTabDialog = function(ev) {
              $mdDialog.show({
                controller: 'addToPrintListDialog',
                templateUrl: 'views/dashboard/addToPriceListDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
              })
                  .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                  }, function() {
                    $scope.status = 'You cancelled the dialog.';
                  });
            };



 });
