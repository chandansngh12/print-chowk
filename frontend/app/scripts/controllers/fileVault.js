
angular.module('yapp')
  .controller('fileVault', function($scope, $state,getobject,$sce,$rootScope) {
    $scope.selected=[];
     $scope.files=[
			 {
				 filename:"du.pdf",
				 date:"20/06/2017",
				 lastModified:"20/06/2017"
			 },
			 {
				 filename:"dusylla.pdf",
				 date:"21/06/2017",
				 lastModified:"21/06/2017"
			 },
			 {
				 filename:"chandan.pdf",
				 date:"23/06/2017",
				 lastModified:"23/06/2017"
			 }
		 ]

 });
