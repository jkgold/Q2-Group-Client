app.controller('SignupController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/users';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/users';
  

  $scope.title = 'Sign Up';

  $scope.signUp = function(name, email, password){
    $http.post(REMOTE_API +'/signup', {name: name, email: email, password: password})
      .then(function(data){
        console.log(data);
      })
  }
});