sap.ui.define(["sap/ui/model/json/JSONModel"],
	function (oJsonModel) {

		return {
			createFruitModel: function () {
				var oModel = new oJsonModel();
				oModel.loadData("models/mockData/fruit.json");
				return oModel;
			}

		};
	}
);