sap.ui.define(["sap/ui/core/mvc/Controller"],
	function (oController) {
		return oController.extend("oil.ds.controller.BaseController", {
				getAppObject: function () {
					// return sap.ui.getCore().byId("idAppView--myApp");	
					// return this.getView().getParent().getParent();
				},
			}

		);

	}

);