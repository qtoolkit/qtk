"use strict";
/**
 * @class NotificationInfo
 * InteractionRequest.notify的参数。
 */
var NotificationInfo = (function () {
    function NotificationInfo(content, w) {
        this.w = w;
        this.content = content;
    }
    /**
     * @method create
     * @static
     * 创建NotificationInfo对象。
     *
     * @param {string} content 要显示的文本信息。
     * @param {number} w 宽度（单位为像素）。
     *
     * @return {NotificationInfo}
     */
    NotificationInfo.create = function (content, w) {
        return new NotificationInfo(content, w);
    };
    return NotificationInfo;
}());
exports.NotificationInfo = NotificationInfo;
;
