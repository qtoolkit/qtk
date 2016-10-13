export declare type ProgressInfoUpdateProgress = (progress: number) => void;
export declare type ProgressInfoRunTask = (updateProgress: ProgressInfoUpdateProgress) => void;
export declare class ProgressInfo {
    w: number;
    title: string;
    runTask: ProgressInfoRunTask;
    constructor(title: string, runTask: ProgressInfoRunTask, w?: number);
    static create(title: string, runTask: ProgressInfoRunTask, w?: number): ProgressInfo;
}
