import { Widget } from "./widget";
/**
 * @class Page
 * 页面管理器中的页面。
 */
export declare class Page extends Widget {
    constructor(type?: string);
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Page;
}
