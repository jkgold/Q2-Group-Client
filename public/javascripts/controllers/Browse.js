app.controller('BrowseController', function ($scope, $http) {

  $scope.title = 'Browse';
  var LOCAL_API = 'http://localhost:3000/products';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/products';

  console.log(window.location);

  loadProductData();

  function loadProductData(){
    $http.get(LOCAL_API)
      .then(function (data) {
        console.log(data);
        $scope.data = data.data;
      });
  }
});