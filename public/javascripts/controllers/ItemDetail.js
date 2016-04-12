app.controller('ItemDetailController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/products';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/products';

  loadProductDetail();

  $scope.title = 'Item Detail';

  function loadProductDetail(){
    $http.get(LOCAL_API + '/12')
      .then(function (data) {
        $scope.product = data.data;
      });
  }
});