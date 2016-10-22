import { Rect } from "../rect";
import { Widget } from "../controls/widget";
/**
 * 表格
 */
export declare class TableRow extends Widget {
    constructor();
    protected onReset(): void;
    relayoutChildren(): Rect;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableRow;
}
