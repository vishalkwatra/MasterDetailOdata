sap.ui.define([], function () {
	return {
		checkInput: function (oInput) {
			if (oInput.getValue() === "") {
				return oInput.setValueState(sap.ui.core.ValueState.Error);
			} else {
				return oInput.setValueState(sap.ui.core.ValueState.Success);
			}
		}
	};
});