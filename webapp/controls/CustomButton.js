sap.ui.define(["sap/m/Button"], function (Button) {

	return Button.extend("oil.ds.controls.CustomButton", {

		metadata: {
			events: {
				"customButtonEvent": {}
			}

		},
		onmouseover: function () {
			this.fireCustomButtonEvent();
		},
		init: function () {},
		renderer: {}
	});

});