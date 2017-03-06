"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_dialog_1 = require("../controls-ext/property-dialog");
var PropsDialog = (function () {
    function PropsDialog() {
    }
    PropsDialog.show = function (e) {
        var info = e.payload;
        var onCancel = info.mutable ? function (ret) { } : null;
        property_dialog_1.PropertyDialog.show(info.pagePropsDesc, info.data, function (ret) {
            info.data = ret;
            e.returnResult();
        }, onCancel, info.w);
    };
    return PropsDialog;
}());
exports.PropsDialog = PropsDialog;
