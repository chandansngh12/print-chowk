
angular.module('yapp')
  .controller('requestQoute', function($scope, $state,getobject,$http,$location,fileUpload) {
  $scope.productNames = ["banner", "mugs", "tshirts"];
	$scope.paper = ["100 GSM Matt Paper", "170 GSM Matt Paper", "250 GSM Matt Paper","300 GSM Matt Paper","Textured Paper"];
  $scope.dimensions =["mm","cm","inch","ft"];
	$scope.finishArr=["No Lamination","Matt Lamination","Gloss Lamination","Waterproof Lamination"];
  $scope.getcutting=["Leave White Border","End-to-End"];

   $scope.tab_to=0;
	 $scope.orderDetails={
		 orderType:"existing",
		 productType:"paper",
     nonPaperType:"",
     paperType:"100 GSM Matt Paper",
		 productTitle:"34X34 banner",
     productName:"banner",
		 quantity:10,
		 dimensions:"mm",
		 heightdim:10,
     widthdim:10,
		 finish:"No Lamination",
     cutting:"Leave White Border",
     comment:"",
     imageUrl:"",
     amount:10000,
     paymentType:"pay on account",
     orderStatus:"Processing",
     city:"New Delhi",
     state:"Delhi",
     landmark:"near shiv temple",
     zipCode:110044
	 }

   getobject.Product = $scope.orderDetails;

  //image directive for name

     $scope.uploadFile = function(){
        var file = $scope.file;
        $scope.orderDetails.imageUrl=$scope.file.name;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost/print-chowk/api/upload.php";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
   //image end



	 });
