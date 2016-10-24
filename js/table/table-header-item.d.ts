import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "../controls/widget";
/**
 * 表格头的一项。
 */
export declare class TableHeaderItem extends Widget {
    /**
     * 是否点击时按该列排序。
     */
    sortable: boolean;
    protected _sortable: boolean;
    /**
     * 当前的排序状态。
     */
    readonly sortStatus: string;
    protected _sortStatus: string;
    static SORT_INC: string;
    static SORT_DEC: string;
    constructor();
    protected getFgImageRect(style: Style): Rect;
    protected getStyleType(): string;
    protected onReset(): void;
    protected triggerSortStatus(): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TableHeaderItem;
}
