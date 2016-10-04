"use strict";
;
;
(function (BindingMode) {
    BindingMode[BindingMode["TWO_WAY"] = 0] = "TWO_WAY";
    BindingMode[BindingMode["ONE_WAY"] = 1] = "ONE_WAY";
    BindingMode[BindingMode["ONE_TIME"] = 2] = "ONE_TIME";
    BindingMode[BindingMode["ONE_WAY_TO_SOURCE"] = 3] = "ONE_WAY_TO_SOURCE";
})(exports.BindingMode || (exports.BindingMode = {}));
var BindingMode = exports.BindingMode;
;
(function (UpdateSourceTrigger) {
    UpdateSourceTrigger[UpdateSourceTrigger["DEFAULT"] = 0] = "DEFAULT";
    UpdateSourceTrigger[UpdateSourceTrigger["EXPLICIT"] = 1] = "EXPLICIT";
    UpdateSourceTrigger[UpdateSourceTrigger["LOSTFOCUS"] = 2] = "LOSTFOCUS";
    UpdateSourceTrigger[UpdateSourceTrigger["PROPERTYCHANGED"] = 3] = "PROPERTYCHANGED";
})(exports.UpdateSourceTrigger || (exports.UpdateSourceTrigger = {}));
var UpdateSourceTrigger = exports.UpdateSourceTrigger;
;
