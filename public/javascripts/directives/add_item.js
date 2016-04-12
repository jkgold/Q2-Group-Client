angular.module('additem', [])
  .directive('additem', function(){
    return{
      restrict: 'C',
      link: function(s,e,a){
        s.text = 'Add Item';
        s.product = a.product;
        e.bind('click', function(){
          console.log(s.product);
        })
      },
      template: "{{text}}"
    }
  });