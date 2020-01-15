sap.ui.define([], function () {

	return sap.ui.core.Control.extend("oil.ds.controls.customControl", {
		//metadata
		metadata: {
			properties: {
				"arya": "",
				"color": ""
			}
			// ,
			// events: {
			// 	"customControlEvent": {}
			// }
		},
		// onmouseover: function () {
		// 	this.fireCustomControlEvent();
		// },
		init: function () {},
		renderer: function (oRm, oControl) {
			// oRm.write("<h1>Custom control printing heading</h1>");
			oRm.write('<h1 style="color:' + oControl.getColor() + '" >' + "Custom control printing in color" + "</h1>");
		}
	});

});