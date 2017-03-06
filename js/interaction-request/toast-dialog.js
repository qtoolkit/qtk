"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_box_1 = require("../controls/message-box");
var ToastDialog = (function () {
    function ToastDialog() {
    }
    ToastDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showToast(info.text, info.duration || 1000, info.w);
    };
    return ToastDialog;
}());
exports.ToastDialog = ToastDialog;
