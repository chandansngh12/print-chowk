
angular.module('yapp')
  .controller('reportsCtrl', function($scope,$state,getobject,$http,$location,fileUpload,$state,localStorageService) {
  $scope.productNames = ["banner", "mugs", "tshirts"];
	$scope.paper = ["100 GSM Matt Paper", "170 GSM Matt Paper", "250 GSM Matt Paper","300 GSM Matt Paper","Textured Paper"];
  $scope.dimensions =["mm","cm","inch","ft"];
	$scope.finishArr=["No Lamination","Matt Lamination","Gloss Lamination","Waterproof Lamination"];
  $scope.getcutting=["Leave White Border","End-to-End"];
  $scope.upload_file="upload";
  $scope.isUploaded=0;
  //$scope.check ='false';

if(getobject.isVisited===0){
	 $scope.orderDetails =
   {
		 orderType:"existing",
		 productType:"paper",
     nonPaperType:"",
     paperType:"",
     paperTypeOther:"",
		 productTitle:"",
     productName:"",
		 quantity:10,
		 dimensions:"",
		 heightdim:0,
     widthdim:0,
		 finish:"",
     cutting:"  ",
     comment:" ",
     imageUrl:" ",
     amount:10000,
     paymentType:"  ",
     orderStatus:"Processing",
     productTime:"",
	 }
   getobject.isVisited=1;

    // getobject.Product=$scope.orderDetails;
}

else{

  $scope.orderDetails = localStorageService.get("orderDetails");

}

//image directive for name

     $scope.uploadFile = function(){
        var file = $scope.file;
        $scope.orderDetails.imageUrl=$scope.file.name;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost/print-chowk/api/upload.php";
        console.log(uploadUrl);
        if(fileUpload.uploadFileToUrl(file, uploadUrl))
          {
            console.log("hello");
          }
        else {
          console.log("no");
        }

    };


    $scope.goToPath = function(path){
      localStorageService.set("orderDetails",$scope.orderDetails);
      $state.go(path);
    }


    //
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



 });
