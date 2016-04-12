app.controller('ProductDetailController', function ($scope, $http, $routeParams) {
  var LOCAL_API = 'http://localhost:3000/products/';

  loadProductDetail();

  $scope.title = 'Product Detail';

  function loadProductDetail(){
    $http.get(LOCAL_API + $routeParams.id)
      .then(function (data) {
        $scope.product = data.data;
      });
  }
});