"use strict";
var NotificationInfo = (function () {
    function NotificationInfo(content, w) {
        this.w = w;
        this.content = content;
    }
    NotificationInfo.create = function (content, w) {
        return new NotificationInfo(content, w);
    };
    return NotificationInfo;
}());
exports.NotificationInfo = NotificationInfo;
;
