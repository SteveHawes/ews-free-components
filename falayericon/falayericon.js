angular.module('ewsfreecomponentsFalayericon', ['servoy']).directive('ewsfreecomponentsFalayericon', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				api: '=svyApi'
			},
			controller: function($scope, $element, $attrs) {
				/**
				 * Hides the icon layer at the specified index (0 based index)
				 *
				 * @example %%prefix%%%%elementName%%.hideLayer(3);
				 *
				 * @param {Number} layerNo -
				 */
				$scope.api.hideLayer = function(layerNo) {
					if (layerNo >= 0 && $scope.model.layers && $scope.model.layers.length > layerNo) {
						$scope.model.layers[layerNo].hide = true;
					}
				}

				/**
				 * Shows the icon layer at the specified index (0 based index)
				 *
				 * @example %%prefix%%%%elementName%%.showLayer(3);
				 *
				 * @param {Number} layerNo -
				 */
				$scope.api.showLayer = function(layerNo) {
					if (layerNo >= 0 && $scope.model.layers && $scope.model.layers.length > layerNo) {
						$scope.model.layers[layerNo].hide = false;
					}
				}

			},
			templateUrl: 'ewsfreecomponents/falayericon/falayericon.html'
		};
	})