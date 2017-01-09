export type ProgressInfoUpdateProgress = (progress:number) => void;
export type ProgressInfoRunTask = (updateProgress:ProgressInfoUpdateProgress) => void;

/**
 * @class ProgressInfo
 * InteractionRequest.progress的参数。
 */
export class ProgressInfo {
	public w : number;
	public title : string;
	public runTask : ProgressInfoRunTask;

	constructor(title:string, runTask:ProgressInfoRunTask, w?:number) {
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
	public static create(title:string, runTask:ProgressInfoRunTask, w?:number) : ProgressInfo {
		return new ProgressInfo(title, runTask, w);
	}
};
