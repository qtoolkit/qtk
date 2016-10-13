export type ProgressInfoUpdateProgress = (progress:number) => void;
export type ProgressInfoRunTask = (updateProgress:ProgressInfoUpdateProgress) => void;

export class ProgressInfo {
	public w : number;
	public title : string;
	public runTask : ProgressInfoRunTask;

	constructor(title:string, runTask:ProgressInfoRunTask, w?:number) {
		this.w = w;
		this.title = title;
		this.runTask = runTask;
	}

	public static create(title:string, runTask:ProgressInfoRunTask, w?:number) {
		return new ProgressInfo(title, runTask, w);
	}
};
