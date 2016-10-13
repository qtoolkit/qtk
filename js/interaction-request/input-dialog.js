"use strict";
var message_box_1 = require("../controls/message-box");
var InputDialog = (function () {
    function InputDialog() {
    }
    InputDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showInput(info.title, info.inputTips, info.value, info.isValueValid, function (value) {
            info.value = value;
            e.returnResult();
        }, info.inputType, info.w);
    };
    return InputDialog;
}());
exports.InputDialog = InputDialog;
