"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_box_1 = require("../controls/message-box");
var ChoiceDialog = (function () {
    function ChoiceDialog() {
    }
    ChoiceDialog.show = function (e) {
        var info = e.payload;
        message_box_1.MessageBox.showChoice(info.title, info.options, info.multiple, function (value) {
            info.value = value;
            e.returnResult();
        }, info.w, info.h);
    };
    return ChoiceDialog;
}());
exports.ChoiceDialog = ChoiceDialog;
