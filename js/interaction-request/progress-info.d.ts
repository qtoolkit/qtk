export declare type ProgressInfoUpdateProgress = (progress: number) => void;
export declare type ProgressInfoRunTask = (updateProgress: ProgressInfoUpdateProgress) => void;
/**
 * @class ProgressInfo
 * InteractionRequest.progress的参数。
 */
export declare class ProgressInfo {
    w: number;
    title: string;
    runTask: ProgressInfoRunTask;
    constructor(title: string, runTask: ProgressInfoRunTask, w?: number);
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
    static create(title: string, runTask: ProgressInfoRunTask, w?: number): ProgressInfo;
}
