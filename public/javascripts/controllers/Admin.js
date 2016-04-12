app.controller('AdminController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000';
  
  $scope.title = 'Admin';

  $scope.adminSignup = function(name, email, password){
    $http.post(LOCAL_API +'/admin/signup', {name: name, email: email, password: password})
      .then(function(data){
        if(data.data.error){
          $scope.error = data.data.error
        } else {
          $location.path( "/browse" );
        }
      })
  };

  $scope.adminLogin = function(email, password){
    $http.post(LOCAL_API + '/admin/login', {email: email, password: password})
      .then(function(data){
        console.log(data);
      })
  }

});