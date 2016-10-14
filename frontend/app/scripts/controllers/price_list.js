
angular.module('yapp')
  .controller('price_list', function($scope, $state,getobject,$http,$mdDialog,$rootScope) {



   $http({
     method:'GET',
     url:'http://localhost/print-chowk/api/getOrder.php'
     })
      .then(function (response) {
            $scope.details=response.data;
            $scope.getOrderDetailId();
       },
       function errorCallback(response) {
           console.log(response);
       });

       $scope.getOrderDetailId = function(){     // a hack to get order id
         for(i in $scope.details)
      {
         $scope.details[i].new = $scope.details[i].orderId;

      }
    }


      $rootScope.getClickedObject= function(x) {
        console.log(x);
        $scope.getTheObject(x);
      }

      $scope.getTheObject= function(x) {
        for(i in $scope.details)
        if($scope.details[i].orderId==x)
        {
          getobject.shareObject($scope.details[i]);
        }
      }


      //  $scope.showTabDialog = function(ev) {
      //    console.log("hello");
      //    $mdDialog.show({
      //      controller: 'addToPrintListDialog',
      //      templateUrl: 'views/dashboard/addToPriceListDialog.html',
      //      parent: angular.element(document.body),
      //      targetEvent: ev,
      //      clickOutsideToClose:true
      //    })
      //        .then(function(answer) {
      //          $scope.status = 'You said the information was "' + answer + '".';
      //        }, function() {
      //          $scope.status = 'You cancelled the dialog.';
      //        });
      //  };


                $rootScope.showTabDialog = function(ev) {

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
