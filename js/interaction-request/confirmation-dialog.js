"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_box_1 = require("../controls/message-box");
var ConfirmationDialog = (function () {
    function ConfirmationDialog() {
    }
    ConfirmationDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showConfirm(info.content, function (ret) {
            info.confirmed = true;
            e.returnResult();
        }, function (ret) {
            info.confirmed = false;
            e.returnResult();
        }, info.w);
    };
    return ConfirmationDialog;
}());
exports.ConfirmationDialog = ConfirmationDialog;
