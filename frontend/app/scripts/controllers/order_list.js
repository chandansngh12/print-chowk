
angular.module('yapp')
  .controller('order_list', function($scope, $state,getobject,$http) {


  /*$http.get("http://192.168.5.2/print-chowk/api/getOrder.php")
        .then(function(response) {
          $scope.details = response.data;
        });*/
    $scope.events =  $http.get('http://192.168.5.2/print-chowk/api/getOrder.php')
           .then(function successCallback(response) {

                console.log(response.data);
                return response.data;
            },
            function errorCallback(response) {
                alert(response);
            });

console.log($scope.events.$$state);
	 $scope.orders={
			records: [
							{ order_ID:1,
								product:"red",
								payment:34,
								shipping:"test ship",
								orderDate:"12-20-10",
								amount:4323,
								status:"shipped"

			 				},
								 {
								  order_ID:2,
									product:"green",
									payment:123,
									shipping:"test ship",
									orderDate:"12-20-10",
									amount:423,
									status:"shipped"

							 },
							 {
								  order_ID:3,
									product:"blue",
									payment:56,
									shipping:"test ship",
									orderDate:"12-20-10",
									amount:342,
									status:"shipped"

						 }
					 ]
  };

 });
