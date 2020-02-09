sap.ui.define([
	"oil/ds/controller/BaseController",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("oil.ds.controller.Add", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oil.ds.view.Add
		 */
		onInit: function () {
			debugger;
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.cincinati, this);
			var jsonData = {
				"productData": {
					"PRODUCT_ID": "VS-2020",
					"TYPE_CODE": "PR",
					"CATEGORY": "Notebooks",
					"NAME": "test",
					"DESCRIPTION": "test",
					"PRICE": "100",
					"CURRENCY_CODE": "INR",
					"PRODUCT_PIC_URL": "/sap/public/bc/NWDEMO_MODEL/IMAGES/",
					"MIME_TYPE": "0",
					"TAX_TARIF_CODE": 1,
					"SUPPLIER_ID": "0100000046",
					"MEASURE_UNIT": "EA"
				}

			};

			var olocalModel = new sap.ui.model.json.JSONModel();
			olocalModel.setData(jsonData);
			this.getView().setModel(olocalModel, "local");
		},

		cincinati: function () {
			if (!this.oDataModel) {
				this.oDataModel = this.getView().getModel();

			}
		},

		onSave: function () {
				var olocalModel = this.getView().getModel("local");
				var productPayload = olocalModel.getProperty("/productData");
				this.oDataModel.create("/ProductSet", productPayload, {
					success: function (oData) {
						MessageToast.show("Waao!! The product got created");
					},
					error: function (oError) {
						var oErrorResponse = JSON.parse(oError.responseText);
						MessageBox.error(oErrorResponse.error.message.value);
						// MessageBox.error("Could not create the product");
					}

				});
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf oil.ds.view.Add
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oil.ds.view.Add
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oil.ds.view.Add
		 */
		//	onExit: function() {
		//
		//	}

	});

});