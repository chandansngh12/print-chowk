
angular.module('yapp')
  .controller('reportsCtrl', function($scope,$state,getobject,$http,$location,fileUpload,$state,localStorageService) {
  $scope.productNames = ["banner", "mugs", "tshirts"];
	$scope.paper = ["100 GSM Matt Paper", "170 GSM Matt Paper", "250 GSM Matt Paper","300 GSM Matt Paper","Textured Paper"];
  $scope.dimensions =["mm","cm","inch","ft"];
	$scope.finishArr=["No Lamination","Matt Lamination","Gloss Lamination","Waterproof Lamination"];
  $scope.getcutting=["Leave White Border","End-to-End"];
  $scope.sides=["Front","Back"]
  $scope.upload_file="upload";
  $scope.isUploaded=false;
  $scope.productName={};
  $scope.productTab=0;

  // intialising object for order details

if(getobject.isVisited===0){
	 $scope.orderDetails =
   {
		 orderType:null,
		 productType:"paper",
     nonPaperType:"",
     paperType:"",
     paperTypeOther:"",
		 productTitle:"",
     productName:"",
		 quantity:null,
		 dimensions:"",
		 heightdim:null,
     widthdim:null,
		 finish:"",
     sides:"",
     cutting:"  ",
     comment:"",
     fileName:" ",
     amount:null,
     paymentType:"  ",
     orderStatus:"Processing",
     productTime:"",
	 }
   getobject.isVisited=1;           //the form has been visited in case of page is visited again form other page

}

else{

  $scope.orderDetails = localStorageService.get("orderDetails"); //getting object from local storage of browser

}

// jquery pic upload plugin
     $(document).ready(function()
         {
           $scope.testme=$("#fileuploader").uploadFile({
           url:"http://localhost/print-chowk/api/upload_me.php",
           fileName:"myfile",
           multiple:false,
           dragDrop:false,
           maxFileCount:1,

           onSuccess:function()
                 {
                     $scope.orderDetails.fileName=$scope.testme.existingFileNames[0]; //get the file name
                     $scope.isUploaded=true;

                 },
           });

         });



    $scope.goToPath = function(path){
      $scope.orderDetails.fileName=$scope.testme.existingFileNames[0]; //get the file name
      localStorageService.set("orderDetails",$scope.orderDetails); //setting object to local storage
      $state.go(path);

    }


    $scope.existingOrders ={}; //an object to get existing orders

     //getting existing order details from database
    $http({
      method:'GET',
      url:'http://localhost/print-chowk/api/getOrder.php'
      })
       .then(function (response) {
             $scope.existingOrders=response.data;
             console.log($scope.existingOrders);


        },
        function errorCallback(response) {
            console.log(response);
        });

     //function to get selected order from input dropdown
        $scope.getExistingOrderDetails = function(x) {

               $scope.orderDetails=x;
               $scope.changeType();
               	$scope.productTab=1;
               console.log($scope.orderDetails);

        }

        //changing the type for numbers was giving error when taken from database
        $scope.changeType = function() {

                    $scope.orderDetails.quantity= parseInt($scope.orderDetails.quantity);
                    $scope.orderDetails.heightdim= parseInt($scope.orderDetails.heightdim);
                    $scope.orderDetails.widthdim= parseInt($scope.orderDetails.widthdim);
                    $scope.orderDetails.amount= parseInt($scope.orderDetails.amount);

        }




//// test codes

    // $scope.obj = {
    //     currentUser: {
    //       username: "testUN",
    //       authdata: "authdata"
    //     }
    //   };
    //   $cookies.putObject('cookieName', $scope.obj);

   //image end

  /*$scope.addOrder = function () {

    var request = $http({
        method: "post",
        url:"http://localhost/print-chowk/api/createOrder.php",
        data: {
         orderType:$scope.orderDetails.orderType,
         productType:$scope.orderDetails.productType,
         productTitle:$scope.orderDetails.productTitle,
         productName:$scope.orderDetails.productName,
         quantity:$scope.orderDetails.quantity,
         dimensions:$scope.orderDetails.dimensions,
         heightdim:$scope.orderDetails.heightdim,
         widthdim:$scope.orderDetails.widthdim,
         finish:$scope.orderDetails.finish,
         cutting:$scope.orderDetails.cutting,
         comment:$scope.orderDetails.comment,
         imageUrl:$scope.orderDetails.imageUrl,
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    //Check whether the HTTP Request is successful or not.
    request.success(function (data) {
        if(data=="success"){
        $location.path('/orderSummary');
      }
        else console.log(data);
    });
    }
*/
// //image directive for name
//
//      $scope.uploadFile = function(){
//         var file = $scope.file;
//         $scope.orderDetails.imageUrl=$scope.file.name;
//
//     };


 });
