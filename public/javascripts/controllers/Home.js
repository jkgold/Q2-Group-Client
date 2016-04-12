app.controller('HomeController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/users';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/users';

  loadUserData();

  $scope.title = 'Hi!';

  function loadUserData(){
    $http.get(LOCAL_API)
      .then(function (data) {
        $scope.data = data.data;
      });
  }
});