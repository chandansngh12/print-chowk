angular.module('yapp')
 .service('getobject', function() {
  var self=this;
  self.Product={ };
  self.details=null;
  this.isVisited=0;

  self.shareObject= function(x) {
    self.details=x;
  }

  // return self.Product;




  });
