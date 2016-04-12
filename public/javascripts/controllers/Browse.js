app.controller('BrowseController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/products';

  loadProductData();
  
  $scope.title = 'Browse';

  function loadProductData(){
    $http.get(LOCAL_API)
      .then(function (data) {
        $scope.products = data.data;
      });
  }
});