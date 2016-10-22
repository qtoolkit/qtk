import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "../controls/widget";
/**
 * 表格头的一项。
 */
export declare class TableHeaderItem extends Widget {
    protected _sortable: boolean;
    protected _sortStatus: string;
    sortable: boolean;
    protected getFgImageRect(style: Style): Rect;
    protected getStyleType(): string;
    protected onReset(): void;
    protected triggerSortStatus(): void;
    constructor();
    static SORT_INC: string;
    static SORT_DEC: string;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableHeaderItem;
}
