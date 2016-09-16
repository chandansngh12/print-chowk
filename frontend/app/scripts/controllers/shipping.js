angular.module('yapp')
  .controller('shippingCtrl', function($scope,$location,$http,getobject,$state) {

  $scope.existingAdd = ["kirtinagar,delhi",
												"lonawala,mumbai",
												"sector 34,gurgaon",

												];

$scope.orderDetails=getobject;
console.log($scope.orderDetails)

$scope.gotoState= function () {
  $state.go('payment');
}

// $scope.addOrder = function () {
//
// var request = $http({
//     method: "post",
//     url:"http://localhost/print-chowk/api/createOrder.php",
//     data: {
//      orderType:$scope.orderDetails.Product.orderType,
//      productType:$scope.orderDetails.Product.productType,
//      paperType:$scope.orderDetails.paperType,
//      productTitle:$scope.orderDetails.Product.productTitle,
//      productName:$scope.orderDetails.Product.productName,
//      quantity:$scope.orderDetails.Product.quantity,
//      dimensions:$scope.orderDetails.Product.dimensions,
//      heightdim:$scope.orderDetails.Product.heightdim,
//      widthdim:$scope.orderDetails.Product.widthdim,
//      finish:$scope.orderDetails.Product.finish,
//      cutting:$scope.orderDetails.Product.cutting,
//      comment:$scope.orderDetails.Product.comment,
//      imageUrl:$scope.orderDetails.Product.imageUrl,
//      amount:$scope.orderDetails.Product.amount,
//      orderStatus:$scope.orderDetails.Product.orderStatus,
//      paymentType:$scope.orderDetails.Product.paymentType,
//      city:$scope.orderDetails.Product.city,
//      state:$scope.orderDetails.Product.state,
//      landmark:$scope.orderDetails.Product.landmark,
//      zipCode:$scope.orderDetails.Product.zipCode,
//     },
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
// });
//
// /* Check whether the HTTP Request is successful or not. */
// request.success(function (data) {
//     if(data=="success"){
//     $location.path('/thankYou');
//   }
//     else console.log(data);
// });
// }





  });
