angular.module('yapp')
  .controller('showQuotes', function($scope,$state,getobject,$http,getDialogData,$mdDialog) {

		$scope.selected=[];


					 $http({
						 method:'GET',
						 url:'http://localhost/print-chowk/api/getQuote.php'
						 })
							.then(function (response) {
										$scope.details=response.data;


							 },
							 function errorCallback(response) {
									 console.log(response);
							 });




							

		console.log($scope.selected);

 });
