angular.module('sitename', [])
  .directive('sitename', function(){
    return{
      restrict: 'C',
      link: function(s,e,a){
        s.siteTitle = "Fruite Company";
        e.bind('click', function(){
          console.log(s.siteTitle);
        })
      },
      template: "{{siteTitle}}"
    }
});