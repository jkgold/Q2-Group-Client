angular.module('additem', [])
  .directive('additem', function(){
    return{
      restrict: 'C',
      link: function(s,e,a){
        s.text = 'Add Item';
        s.itemData = a.price;
        e.bind('click', function(){
          console.log(s.itemData);
        })
      },
      template: "{{text}}"
    }
  });