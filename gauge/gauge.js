angular.module('ewsfreecomponentsGauge', ['servoy']).directive('ewsfreecomponentsGauge', function($apifunctions, $svyProperties, $timeout) {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: '=svyHandlers',
				svyServoyapi: '=svyServoyapi',
				api: '=svyApi'
			},
			controller: function($scope, $element, $attrs) {

				$scope.api.getWidth = $apifunctions.getWidth($element[0]);
				$scope.api.getHeight = $apifunctions.getHeight($element[0]);
				$scope.api.getLocationX = $apifunctions.getX($element[0]);
				$scope.api.getLocationY = $apifunctions.getY($element[0]);

				$scope.refreshGauge = function() {
					angular.element(document).ready(function() {
						$scope.target = $element.find('.gauge-canvas')[0];

						var options = {
							renderTo: $scope.target,
							minValue: $scope.model.minValue || 0,
							maxValue: $scope.model.maxValue || 100,
							value: $scope.model.value,
							units: $scope.model.units,
							title: $scope.getTitleText()
						}
						if ($scope.model.gaugeType == "radial") {
							$scope.gauge = new RadialGauge(options);
							if($scope.model.radialGaugeOptions) $scope.gauge.update($scope.model.radialGaugeOptions)
						} else if ($scope.model.gaugeType == "linear") {
							$scope.gauge = new LinearGauge(options);
							if($scope.model.linearGaugeOptions) $scope.gauge.update($scope.model.linearGaugeOptions)
						}
						if($scope.model.highlights) {
							$scope.model.ticks = $scope.model.ticks || {};
							$scope.model.ticks.highlights = $scope.model.highlights;
						}
						if($scope.model.ticks) {
							$scope.gauge.update($scope.model.ticks);
						}
						if($scope.model.animationOptions) $scope.gauge.update($scope.model.animationOptions);
						if($scope.model.colorOptions) $scope.gauge.update($scope.model.colorOptions);
						if($scope.model.valueBoxOptions) $scope.gauge.update($scope.model.valueBoxOptions);
						if($scope.model.needleOptions) $scope.gauge.update($scope.model.needleOptions);
						if($scope.model.borderOptions) $scope.gauge.update($scope.model.borderOptions);
						if($scope.model.fontOptions) $scope.gauge.update($scope.model.fontOptions);
						$scope.gauge.value = $scope.model.value;
						
//						var gaugeHeight = $apifunctions.getHeight($element[0])();
//						var gaugeWidth = $apifunctions.getWidth($element[0])();
//						var textHeight = $apifunctions.getHeight($element.children().first().children().last().children().first()[0])();
//						var canvasHeight = Math.max(1, (gaugeHeight - textHeight - 5));
//						$scope.gauge.update({ height: canvasHeight });
//						$scope.gauge.update({ width: gaugeWidth });
						$timeout(function() {
							$scope.resize();
							$scope.gauge.draw();
						}, 250);
					});
				}
				
				$scope.getTitleText = function() {
					var result = null;
					
					if($scope.model.title) {
						result = (($scope.model.title.dataProviderID == null) ? $scope.model.title.text : $scope.model.title.dataProviderID );
					}
					
					return result;
				}
				
				$scope.resize = function() {
					var gaugeHeight = $apifunctions.getHeight($element[0])();
					var gaugeWidth = $apifunctions.getWidth($element[0])();
					var canvasHeight = Math.max(1, (gaugeHeight - 10));
					$scope.gauge.update({ height: canvasHeight });
					$scope.gauge.update({ width: gaugeWidth });
				}

				var resizeTimeout = null;

				var windowResizeHandler = function() {
					if (resizeTimeout) $timeout.cancel(resizeTimeout);
					if ($element.is(":visible")) {
						resizeTimeout = $timeout(function() {
								$scope.$apply(function() {
									$scope.resize();
								});
							}, 50);
					}
				}

				$(window).on('resize', windowResizeHandler);
				$scope.$on("dialogResize", windowResizeHandler);

				$scope.api.setValue = function(_value) {
					$scope.gauge.set(_value)
				}

			},
			link: function($scope, $element, $attrs) {
				$scope.$watch('model.gaugeType',
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
							$scope.gauge.value = _newValue;
						}
					},
					true
				);

			},
			templateUrl: 'ewsfreecomponents/gauge/gauge.html'
		};
	})