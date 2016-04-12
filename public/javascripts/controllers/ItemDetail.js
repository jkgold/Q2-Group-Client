app.controller('ItemDetailController', function ($scope, $http, $routeParams) {
  var LOCAL_API = 'http://localhost:3000/products/';

  loadProductDetail();

  $scope.title = 'Item Detail';

  function loadProductDetail(){
    $http.get(LOCAL_API + $routeParams.id)
      .then(function (data) {
        $scope.product = data.data;
      });
  }
});