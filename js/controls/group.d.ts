import { Widget } from "./widget";
export declare class Group extends Widget {
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Group;
}
