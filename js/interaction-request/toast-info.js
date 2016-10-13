"use strict";
var ToastInfo = (function () {
    function ToastInfo(text, duration, w) {
        this.text = text;
        this.duration = duration || 2000;
        this.w = w;
    }
    ToastInfo.create = function (text, duration, w) {
        return new ToastInfo(text, duration, w);
    };
    return ToastInfo;
}());
exports.ToastInfo = ToastInfo;
;
