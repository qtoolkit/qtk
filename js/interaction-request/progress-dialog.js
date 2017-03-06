"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_box_1 = require("../controls/message-box");
var ProgressDialog = (function () {
    function ProgressDialog() {
    }
    ProgressDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showProgress(info.title, info.runTask, function () {
            e.returnResult();
        }, info.w);
    };
    return ProgressDialog;
}());
exports.ProgressDialog = ProgressDialog;
