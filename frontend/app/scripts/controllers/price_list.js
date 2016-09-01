
angular.module('yapp')
  .controller('price_list', function($scope, $state,getobject,$http) {

	 $scope.orders={
			records: [
							{ qouteTitle:"32X32mugs",
								product:"mugs",
								quantity:40,
								price:"test ship",
								lastModified:"11-20-10",


			 				},
								 {
									  qouteTitle:"45X56banner",
 										product:"banner",
 										quantity:30,
 										price:1300,
 										lastModified:"22-20-10",

							 },
							 {
								   qouteTitle:"78X45tshirt",
									 product:"tshirt",
									 quantity:20,
									 price:1400,
									 lastModified:"23-20-10",

						 }
					 ]
  };

 });
