import { Widget } from "../controls/widget";
/**
 * 表格左边的序数项。
 */
export declare class TableIndexItem extends Widget {
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableIndexItem;
}
