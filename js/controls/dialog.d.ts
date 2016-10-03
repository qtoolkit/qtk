import { Widget } from "./widget";
import { Window } from "./window";
/**
 * 对话框。
 */
export declare class Dialog extends Window {
    constructor(type?: string);
    /**
     * 将对话框移动到屏幕中间。
     */
    moveToCenter(): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Dialog;
}
