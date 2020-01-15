sap.ui.define(["sap/ui/core/UIComponent"],

	function (UIComponent) {

		return UIComponent.extend("oil.ds.Component", {
				// four sections are there metadata, init,create content,destroy
				metadata: {
					manifest: "json"
				},
				init: function () {
					// call the base class constructor which would give us lots of objects e.g. router object
					// router is used for navigation between views
					UIComponent.prototype.init.apply(this);
					// get the router object from base class
					var oRouter = this.getRouter();
					// initialize the router and goes to manifest.json and searches for routing configuration
					oRouter.initialize();

				},
				// createContent: function () {
				// create the app view(starting view) from the createContent function instead of index.html
				// var oAppView = new sap.ui.view({
				// 	id: "idAppView",
				// 	viewName: "oil.ds.view.App",
				// 	type: sap.ui.core.mvc.ViewType.XML
				// });
				// return oAppView;
				// },
				destroy: function () {}

			}

		);

	}

);