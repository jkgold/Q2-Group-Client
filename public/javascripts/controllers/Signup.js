app.controller('SignupController', function ($scope, $http, $location) {
  var LOCAL_API = 'http://localhost:3000/users';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/users';
  

  $scope.title = 'Sign Up';

  $scope.signUp = function(name, email, password){
    $http.post(LOCAL_API +'/signup', {name: name, email: email, password: password})
      .then(function(data){
        if(data.data.error){
          $scope.error = data.data.error
        } else {
          $location.path( "/browse" );
        }
      })
  }
});