app.controller('AdminController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/users';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/users';
  var Path = '/admin/login';
  
  $scope.title = 'Admin';

  $scope.adminLogin = function(email, password){
    $http.post(REMOTE_API + Path, {email: email, password: password})
      .then(function(data){
        console.log(data);
      })
  }

});