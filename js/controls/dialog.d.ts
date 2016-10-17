import { Window } from "./window";
/**
 * 对话框。
 */
export declare class Dialog extends Window {
    constructor(type?: string);
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Dialog;
}
