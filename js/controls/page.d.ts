import { Widget } from "./widget";
export declare class Page extends Widget {
    constructor(type?: string);
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Page;
}
