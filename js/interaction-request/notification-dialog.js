"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_box_1 = require("../controls/message-box");
var NotificationDialog = (function () {
    function NotificationDialog() {
    }
    NotificationDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showMessage(info.content, function (ret) {
            e.returnResult();
        }, info.w);
    };
    return NotificationDialog;
}());
exports.NotificationDialog = NotificationDialog;
