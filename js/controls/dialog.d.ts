import { Widget } from "./widget";
import { Window } from "./window";
export declare class Dialog extends Window {
    constructor(type?: string);
    moveToCenter(): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Dialog;
}
