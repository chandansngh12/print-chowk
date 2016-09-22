
angular.module('yapp')
  .controller('payment', function($scope, $state,getobject,$sce,localStorageService) {

     $scope.orderDetails=localStorageService.get("orderDetails")

		 console.log($scope.orderDetails);

     $scope.trustSrcurl = function(data)
     {
         return $sce.trustAsResourceUrl(data);
     }

		 $scope.imagePath="http://localhost/print-chowk/api/uploads/"+$scope.orderDetails.imageUrl;


     var paymentSelect = function(){

       if($scope.orderDetails.paymentType==="Pay on Account"){

         console.log("jio");

       }
       else

       if($scope.orderDetails.paymentType==="Razor Pay"){
          console.log("hello");
         $scope.options = {
          'key': '<Your-Key-Here>',
          // Insert the amount here, dynamically, even
          'amount': '50000',
          'name': '',
          'description': 'Pay for Order #2323',
          'image': '',
          'handler': function (transaction) {
            $scope.transactionHandler(transaction);
          },
          'prefill': {
            'name': '',
            'email': '',
            'contact': ''
          }
          };

          var rzp1 = new Razorpay($scope.options);
          rzp1.open();

       }
     };



 });
