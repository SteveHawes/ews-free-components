{
	"name": "ewsfreecomponents-falayericon",
	"displayName": "FontAwesome Layering Icon",
	"version": 1,
	"definition": "ewsfreecomponents/falayericon/falayericon.js",
	"icon": "ewsfreecomponents/falayericon/falayericon.png",
	"libraries": [
	],
	"model": {
		"layers": {
			"type": "layer[]"
		},

		"enabled": {
			"type": "enabled",
			"blockingOn": false,
			"default": true,
			"for": [
				"dataProviderID",
				"onActionMethodID"
			]
		},

		"styleClass": {
			"type": "styleclass",
			"tags": {
				"scope": "design"
			}
		},

		"size": {
			"type": "dimension",
			"default": {
				"width": 25,
				"height": 25
			}
		},

		"toolTipText": {
			"type": "tagstring"
		},

		"visible": "visible",
		"alignment": {
			"type": "string",
			"tags": {
				"scope": "design"
			},

			"default": "text",
			"values": [
				"center",
				"center-horizontally",
				"center-vertically"
			]
		}
	},

	"handlers": {
		"onActionMethodID": {
			"parameters": [
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},

		"onDoubleClickMethodID": {
			"parameters": [
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		},

		"onRightClickMethodID": {
			"parameters": [
				{
					"name": "event",
					"type": "JSEvent"
				}
			]
		}
	},

	"api": {
		"hideLayer": {
			"parameters": [
				{
					"name": "layerNo",
					"type": "int"
				}
			]
		},

		"showLayer": {
			"parameters": [
				{
					"name": "layerNo",
					"type": "int"
				}
			]
		}
	},
	
	"types": {
		"layer": {
			"layerType": {
				"type": "string",
				"tags": {
					"scope": "design"
				},

				"default": "icon",
				"values": [
					"counter",
					"text"
				]
			},

			"color": {
				"type": "color",
				"default": "inherit"
			},

			"iconText": {
				"type": "string",
				"tags": {
					"doc": "Only applies if the layer type is text"
				}
			},

			"iconTextExpression": {
				"type": "dataprovider",
				"tags": {
					"doc": "Only applies if the layer type is text",
					"scope": "design"
				}
			},

			"iconCounter": {
				"type": "dataprovider",
				"tags": {
					"doc": "Only applies if the layer type is counter",
					"scope": "design"
				}
			},

			"layerStyleClass": {
				"type": "styleclass"
			},

			"transform": {
				"type": "string"
			},
			
			"hide": "boolean"
		}
	}
}