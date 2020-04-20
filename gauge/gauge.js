angular.module('ewsfreecomponentsGauge',['servoy']).directive('ewsfreecomponentsGauge', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
    	  handlers: '=svyHandlers',
    	  svyServoyapi: '=svyServoyapi',
    	  api: '=svyApi'
      },
		controller: function($scope, $element, $attrs) {

			$scope.refreshGauge = function() {
				angular.element(document).ready(function() {
					$scope.target = $element.find('.gauge-canvas')[0];
					if($scope.model.options.colorPercentages != null) {
						$scope.model.options.percentColors = [];
						$scope.model.options.colorPercentages.forEach(function(element) {
							var _percentColor = [];
							_percentColor.push(element.percentage);
							_percentColor.push(element.color);
							$scope.model.options.percentColors.push(_percentColor)
						})
					}
					if ($scope.model.gaugeType == "donut") {
						$scope.gauge = new Donut($scope.target).setOptions($scope.model.options);
					} else if ($scope.model.gaugeType == "gauge") {
						$scope.gauge = new Gauge($scope.target).setOptions($scope.model.options);
					}
					$scope.gauge.setTextField($element.find('.gauge-textfield')[0]);
					$scope.gauge.set($scope.model.value);
					$scope.gauge.maxValue = $scope.model.options.maxValue;
					$scope.gauge.animationSpeed = $scope.model.options.animationSpeed;
				});
			}

			$scope.api.setValue = function(_value) {
				$scope.gauge.set(_value)
			}


		},
		link: function($scope, $element, $attrs) {
			$scope.$watch('model.options',
				function(_newValue, _oldValue) {
					angular.element(document).ready(function() {
						$scope.refreshGauge();
					});
				},
				true
			);

			$scope.$watch('model.value',
				function(_newValue, _oldValue) {
					if ($scope.gauge) {
						$scope.gauge.set(_newValue);
					}
				},
				true
			);

		},
      templateUrl: 'ewsfreecomponents/gauge/gauge.html'
    };
  })