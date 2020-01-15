sap.ui.define([
	"oil/ds/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("oil.ds.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oil.ds.view.View1
		 */
		onInit: function () {
			var oPopover;
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// or
			// this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis2, this);
		},

		herculis2: function (oParams) {
			var id = oParams.getParameters().arguments.productId;
			var oFruitList = this.getView().byId("productslist");
			var oListItems = oFruitList.getItems();
			oFruitList.setSelectedItem(oListItems[id]);
		},

		onSearch: function (oEvent) {

			var queryString = oEvent.getParameter("query");
			if (!queryString) {
				queryString = oEvent.getParameter("newValue");
			}
			var oFilter1 = new sap.ui.model.Filter("CATEGORY",
				sap.ui.model.FilterOperator.Contains,
				queryString
			);

			// var oFilter2 = new sap.ui.model.Filter("NAME",
			// 	sap.ui.model.FilterOperator.Contains,
			// 	queryString
			// );

			// var oFilter = new sap.ui.model.Filter({
			// 	filters: [oFilter1, oFilter2],
			// 	and: false
			// });

			var oList = this.getView().byId("productslist");
			var binding = oList.getBinding("items");
			// console.log(binding);
			binding.filter(oFilter1);
		},

		onNext: function () {
			var oApp = this.getAppObject();
			oApp.to("idView2");
		},

		onItemPress: function (oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oContext = oListItem.getBindingContext();
			var sPath = oContext.sPath;
			// var oApp = this.getAppObject();
			// var oView2 = oApp.getDetailPages()[0];
			// oView2.bindElement(sPath);
			// oApp.to("idView2");

			var sItemIndex = sPath.split("/")[sPath.split("/").length - 1];
			this.oRouter.navTo("productendpoint", {
				productId: sItemIndex
			});
		},

		onFilter: function (oEvent) {
			var that = this;
			if (!this.oPopover) {

				var oItem1 = new sap.ui.core.Item({
					key: 1,
					text: "<50"
				});
				var oItem2 = new sap.ui.core.Item({
					key: 2,
					text: ">50,<=80"
				});
				var oItem3 = new sap.ui.core.Item({
					key: 3,
					text: ">80"
				});
				var oComboBox = new sap.m.ComboBox("idComboBox", {
						items: [oItem1, oItem2, oItem3]
					}

				);

				var oLabel = new sap.m.Label({
					text: "Filter Criteria"
				});

				this.oPopover = new sap.m.Popover("idPopover", {
					title: "Filter fruits",
					content: [oLabel, oComboBox],
					afterClose: function (oCloseEvent) {
						debugger;
						var oCombBox = oCloseEvent.getSource().getContent()[1];
						var sText = oCombBox.getSelectedItem().getText();
						var oList = that.getView().byId("fruitslist");
						var binding = oList.getBinding("items");

						if (sText == "<50") {

							var oFilter = new sap.ui.model.Filter("price",
								sap.ui.model.FilterOperator.LT,
								parseInt(sText.substr(1))
							);
							binding.filter(oFilter);
						}
						if (sText == ">80") {

							var oFilter = new sap.ui.model.Filter("price",
								sap.ui.model.FilterOperator.GT,
								parseInt(sText.substr(1))
							);
							binding.filter(oFilter);

						}

						if (sText == ">50,<=80") {

							var oValue1 = sText.substr(1, 2);
							var oValue2 = sText.substr(6, 7);
							var oVal2 = parseInt(oValue2);
							oVal2 = oVal2 + 1;
							var oFilPrice = new sap.ui.model.Filter("price", sap.ui.model.FilterOperator.BT, parseInt(oValue1), oVal2);
							var aFilter = [oFilPrice];
							binding.filter(aFilter);

						}
					}
				});

			}

			// this.oPopover.openBy(this.getView().byId("idFilter"));
			this.oPopover.openBy(oEvent.getSource());
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oil.ds.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oil.ds.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oil.ds.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});