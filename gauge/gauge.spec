{
	"name": "ewsfreecomponents-gauge",
	"displayName": "Gauge",
	"version": 1,
	"definition": "ewsfreecomponents/gauge/gauge.js",
	"icon": "ewsfreecomponents/gauge/gauge.png",
	"libraries": 
	[
		{
			"name": "gauge.min.js",
			"version": "0.10.1",
			"url": "ewsfreecomponents/libs/gauge.min.js",
			"mimetype": "text/javascript"
		}
	],

	"model": {
		"options": {
			"type": "gaugeOptions"
		},

		"title": {
			"type": "string",
			"default": "Hello World"
		},

		"value": {
			"type": "dataprovider"
		},

		"gaugeType": {
			"type": "string",
			"default": "donut",
			"values": [
				"donut",
				"gauge"
			]
		}
	},
	"api": {
		"setValue": {
			"parameters": [
				{
					"name": "_value",
					"type": "double"
				}
			]
		}
	},

	"types": {
		"gaugeOptions": {
			"angle": {
				"type": "double",
				"default": 0.22
			},

			"animationSpeed": {
				"type": "int",
				"default": 32
			},

			"colorPercentages": {
				"type": "colorPercent[]"
			},

			"colorStart": {
				"type": "color",
				"default": "#2DA3DC"
			},

			"colorStop": {
				"type": "color",
				"default": "#C0C0DB"
			},

			"generateGradient": {
				"type": "boolean",
				"default": true
			},

			"highDpiSupport": {
				"type": "boolean",
				"default": true
			},

			"limitMax": {
				"type": "boolean",
				"default": false
			},

			"limitMin": {
				"type": "boolean",
				"default": true
			},

			"lineWidth": {
				"type": "double",
				"default": 0.1
			},

			"maxValue": {
				"type": "double",
				"default": 100
			},

			"pointer": {
				"type": "pointer"
			},

			"radiusScale": {
				"type": "double",
				"default": 0.87
			},

			"renderTicks": {
				"type": "tickOptions"
			},

			"staticZones": {
				"type": "staticZone[]"
			},

			"strokeColor": {
				"type": "color",
				"default": "#EEEEEE"
			}
		},

		"staticZone": {
			"strokeStyle": {
				"type": "color"
			},

			"min": {
				"type": "double"
			},

			"max": {
				"type": "double"
			},

			"height": {
				"type": "double"
			}
		},

		"pointer": {
			"length": {
				"type": "double",
				"default": 0.41
			},

			"strokeWidth": {
				"type": "double",
				"default": 0.06
			},

			"color": {
				"type": "color",
				"default": "#000000"
			},

			"iconPath": {
				"type": "string"
			},

			"iconScale": {
				"type": "double",
				"default": 1
			},

			"iconAngle": {
				"type": "double",
				"default": 0
			}
		},

		"tickOptions": {
			"divisions": {
				"type": "int",
				"default": 5
			},

			"divWidth": {
				"type": "double",
				"default": 1.1
			},

			"divLength": {
				"type": "double",
				"default": 0.7
			},

			"divColor": {
				"type": "color",
				"default": "#333333"
			},

			"subDivisions": {
				"type": "int",
				"default": 3
			},

			"subLength": {
				"type": "double",
				"default": 0.5
			},

			"subWidth": {
				"type": "double",
				"default": 0.6
			},

			"subColor": {
				"type": "color",
				"default": "#666666"
			}
		},

		"colorPercent": {
			"percentage": {
				"type": "double"
			},

			"color": {
				"type": "color"
			}
		}
	}
}