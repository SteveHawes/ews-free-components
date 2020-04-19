angular.module('ewsfreecomponentsFalayericon',['servoy']).directive('ewsfreecomponentsFalayericon', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'ewsfreecomponents/falayericon/falayericon.html'
    };
  })