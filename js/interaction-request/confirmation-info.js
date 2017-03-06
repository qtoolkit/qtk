"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class ConfirmationInfo
 * InteractionRequest.confirm的参数。
 */
var ConfirmationInfo = (function () {
    function ConfirmationInfo(content, w) {
        this.w = w;
        this.content = content;
        this.confirmed = false;
    }
    /**
     * @method create
     * @static
     * 创建ConfirmationInfo对象。
     *
     * @param {string} content 要显示的文本信息。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {ConfirmationInfo}
     */
    ConfirmationInfo.create = function (content, w) {
        return new ConfirmationInfo(content, w);
    };
    return ConfirmationInfo;
}());
exports.ConfirmationInfo = ConfirmationInfo;
;
