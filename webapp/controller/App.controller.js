sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"oil/ds/models/model"
], function (Controller, Model) {
	"use strict";

	return Controller.extend("oil.ds.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oil.ds.view.App
		 */
		onInit: function () {

			// var oModel = Model.createFruitModel();
			// // sap.ui.getCore().setModel(oModel);
			// this.getView().setModel(oModel);
			// var oApp = this.getView().byId("myApp");
			// var oView1 = new sap.ui.view({
			// 	id: "idView1",
			// 	viewName: "oil.ds.view.View1",
			// 	type: sap.ui.core.mvc.ViewType.XML
			// });
			// var oView2 = new sap.ui.view({
			// 	id: "idView2",
			// 	viewName: "oil.ds.view.View2",
			// 	type: sap.ui.core.mvc.ViewType.XML
			// });
			// var oEmpty = new sap.ui.view({
			// 	id: "idEmpty",
			// 	viewName: "oil.ds.view.Empty",
			// 	type: sap.ui.core.mvc.ViewType.XML
			// });
			// oApp.addMasterPage(oView1);
			// oApp.addDetailPage(oView2);
			// oApp.addDetailPage(oEmpty);
			// oApp.setInitialDetail("idEmpty");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oil.ds.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oil.ds.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oil.ds.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});