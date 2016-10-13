"use strict";
var ConfirmationInfo = (function () {
    function ConfirmationInfo(content, w) {
        this.w = w;
        this.content = content;
        this.confirmed = false;
    }
    ConfirmationInfo.create = function (content, w) {
        return new ConfirmationInfo(content, w);
    };
    return ConfirmationInfo;
}());
exports.ConfirmationInfo = ConfirmationInfo;
;
