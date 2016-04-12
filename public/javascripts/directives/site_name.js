angular.module('sitename', [])
  .directive('sitename', function(){
    return{
      restrict: 'E',
      link: function(s,e,a){
        s.fullName = "Fruite Company"
      },
      replace: true,
      template: "<h1>{{fullName}}</h1>"
    }
});