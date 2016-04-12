app.controller('LoginController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com';
  var Path = '/user/login';
  
  $scope.title = 'Login';
  
  $scope.userLogin = function(email, password){
    $http.post(REMOTE_API + Path, {email: email, password: password})
      .then(function(data){
        console.log(data);
      })
  }
});