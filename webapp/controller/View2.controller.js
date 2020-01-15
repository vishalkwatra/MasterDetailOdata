sap.ui.define([
	"oil/ds/controller/BaseController",
	"oil/ds/util/validator",
	"sap/m/SelectDialog"
], function (Controller, Validator, selectDialog) {
	"use strict";

	return Controller.extend("oil.ds.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oil.ds.view.View2
		 */
		onInit: function () {

			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
		},

		herculis: function (oParams) {
			// var sPath = "/fruits/";
			var sPath = "/";
			var id = oParams.getParameters().arguments.productId;
			sPath = sPath + id;
			this.getView().bindElement(sPath, {
				expand: "ToSupplier"
			});
		},

		onBack: function () {
			var oApp = this.getAppObject();
			oApp.to("idView1");
		},

		onItemConfirm: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			this.getView().byId(this.inputField).setValue(oSelectedItem.getTitle());
		},
		inputField: null,
		onF4help: function (oEvent) {
			this.inputField = oEvent.getSource().getId();
			var oItemTemplate = new sap.m.StandardListItem({
				title: "{city}",
				info: "{remarks}"
			});
			var oSelectDialog = new selectDialog({
				title: "Select City",
				items: {
					path: "/cities", //no curly brackets here!
					template: oItemTemplate
				}
			});
			oSelectDialog.setModel(this.getView().getModel());
			oSelectDialog.open();

			oSelectDialog.attachConfirm(this.onItemConfirm, this);
		},

		onSettings: function (oEvent) {
			var oPopUp = sap.ui.core.Fragment.load({
				name: "oil.ds.fragments.popUp"
			});

			// this.getView().addDependent(this.oPopUp);
			var that = this;

			oPopUp.then(function (oSelectDialog) {
				debugger;
				that.getView().addDependent(oSelectDialog);
				oSelectDialog.bindAggregation("items", {
					path: "/suppliers",
					template: new sap.m.StandardListItem({
						title: "{name}",
						info: "{contactPerson}"
					})
				});
				oSelectDialog.open();
			});

		},

		onValidate: function (oEvent) {
			var oInput = this.getView().byId("idInput");
			Validator.checkInput(oInput);
		},

		onCustomControlEvent: function () {
			alert("You hovered custom Control");
		},

		onCustomButtonEvent: function () {
			alert("You hovered over custom Button");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oil.ds.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oil.ds.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oil.ds.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});