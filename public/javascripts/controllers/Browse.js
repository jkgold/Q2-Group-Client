app.controller('BrowseController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/products';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/products';

  $scope.title = 'Browse';
  
  loadProductData();

  function loadProductData(){
    $http.get(LOCAL_API)
      .then(function (data) {
        console.log(data);
        $scope.products = data.data;
      });
  }
});