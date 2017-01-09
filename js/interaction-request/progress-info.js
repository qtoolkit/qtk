"use strict";
/**
 * @class ProgressInfo
 * InteractionRequest.progress的参数。
 */
var ProgressInfo = (function () {
    function ProgressInfo(title, runTask, w) {
        this.w = w;
        this.title = title;
        this.runTask = runTask;
    }
    /**
     * @method create
     * @static
     * 创建ProgressInfo对象。
     *
     * @param {string} title 标题。
     * @param {ProgressInfoRunTask} runTask 执行任务的函数，函数内调用updateProgress更新进度。
     * @param {number} w 宽度（单位为像素）(可选)。
     *
     * @return {ProgressInfo}
     */
    ProgressInfo.create = function (title, runTask, w) {
        return new ProgressInfo(title, runTask, w);
    };
    return ProgressInfo;
}());
exports.ProgressInfo = ProgressInfo;
;
