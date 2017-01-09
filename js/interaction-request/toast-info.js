"use strict";
/**
 * @class ToastInfo
 * InteractionRequest.toast的参数。
 */
var ToastInfo = (function () {
    function ToastInfo(text, duration, w) {
        this.text = text;
        this.duration = duration || 2000;
        this.w = w;
    }
    /**
     * @method create
     * @static
     * 创建ToastInfo对象。
     *
     * @param {string} text 要显示的文本信息。
     * @param {number} duration 显示的时间（单位为毫秒）。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {ToastInfo}
     */
    ToastInfo.create = function (text, duration, w) {
        return new ToastInfo(text, duration, w);
    };
    return ToastInfo;
}());
exports.ToastInfo = ToastInfo;
;
