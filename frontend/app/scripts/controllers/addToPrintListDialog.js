angular.module('yapp')
  .controller('addToPrintListDialog', function($scope, $state,getobject,$http,$mdDialog,getDialogData) {


	 $scope.dialogData=getDialogData.dialogData;
   console.log($scope.dialogData);



    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

 });
