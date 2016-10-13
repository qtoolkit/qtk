"use strict";
var ProgressInfo = (function () {
    function ProgressInfo(title, runTask, w) {
        this.w = w;
        this.title = title;
        this.runTask = runTask;
    }
    ProgressInfo.create = function (title, runTask, w) {
        return new ProgressInfo(title, runTask, w);
    };
    return ProgressInfo;
}());
exports.ProgressInfo = ProgressInfo;
;
