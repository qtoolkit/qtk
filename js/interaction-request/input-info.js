"use strict";
var InputInfo = (function () {
    function InputInfo(title, value, inputTips, inputType, w) {
        this.w = w;
        this.value = value;
        this.title = title;
        this.inputTips = inputTips;
        this.inputType = inputType;
    }
    InputInfo.create = function (title, value, inputTips, inputType, w) {
        return new InputInfo(title, value, inputTips, inputType, w);
    };
    return InputInfo;
}());
exports.InputInfo = InputInfo;
;
