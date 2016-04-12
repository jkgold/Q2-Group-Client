angular.module('sitename', [])
  .directive('sitename', function(){
    return{
      restrict: 'C',
      link: function(s,e,a){
        s.siteName = "Fruite Company";
        e.bind('click', function(){
          console.log(s.siteName);
        })

      },
      template: "{{siteName}}"
    }
});