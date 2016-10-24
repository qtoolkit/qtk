import { Rect } from "../rect";
import { Widget } from "../controls/widget";
/**
 * 表格中的一行。
 */
export declare class TableRow extends Widget {
    constructor();
    relayoutChildren(): Rect;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableRow;
}
