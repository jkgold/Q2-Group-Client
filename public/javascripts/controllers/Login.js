app.controller('LoginController', function ($scope, $http, $location) {
  var LOCAL_API = 'http://localhost:3000';
  var Path = '/users/login';
  
  $scope.title = 'Login';
  
  $scope.userLogin = function(email, password){
    $http.post(LOCAL_API + Path, {email: email, password: password})
      .then(function(data){
        if(data.data.error){
          $scope.error = data.data.error
        } else {
          $location.path( "/" );
        }
      })
  }
});