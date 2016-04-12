app.controller('SignupController', function ($scope, $http) {
  var LOCAL_API = 'http://localhost:3000/users';
  var REMOTE_API = 'https://my-testing-api.herokuapp.com/users';

  loadUserData();

  $scope.title = 'Sign Up';

  function loadUserData(){
    $http.get(REMOTE_API)
      .then(function (data) {
        $scope.data = data.data;
      });
  }

  $scope.signUp = function(name, email, password){
    $http.post(REMOTE_API +'/signup', {name: name, email: email, password: password})
      .then(function(data){
        console.log(data);
        loadUserData()
      })
  }
});