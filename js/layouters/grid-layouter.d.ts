import { Rect } from '../rect';
import { Widget } from '../controls/widget';
import { Layouter, LayouterParam } from './layouter';
/**
 * 网格布局器。
 */
export declare class GridLayouter extends Layouter {
    readonly type: string;
    constructor();
    /**
     * 设置参数。
     */
    setOptions(options: any): any;
    layoutChildren(widget: Widget, children: Array<Widget>, r: Rect): Rect;
    createParam(options?: any): GridLayouterParam;
    /**
     * 网格项的左边的空白。
     */
    leftMargin: number;
    /**
     * 网格项的右边的空白。
     */
    rightMargin: number;
    /**
     * 网格项的顶部的空白。
     */
    topMargin: number;
    /**
     * 网格项的底部的空白。
     */
    bottomMargin: number;
    /**
     * 网格的列数。
     */
    cols: number;
    /**
     * 网格的行数。
     */
    rows: number;
    /**
     * 网格项的宽度。
     */
    colWidth: number;
    /**
     * 网格项的高度。
     */
    rowHeight: number;
    private rect;
    static create(options: any): GridLayouter;
}
/**
 * 网格布局器的参数。
 *
 * 如果父控件使用GridLayouter布局器，则子控件需要把layoutParam设置为GridLayouterParam。
 *
 */
export declare class GridLayouterParam extends LayouterParam {
    /**
     * 列序数。
     */
    col: number;
    /**
     * 跨越列数。
     */
    spanCols: number;
    /**
     * 行序数。
     */
    row: number;
    /**
     * 跨越行数。
     */
    spanRows: number;
    constructor(row?: number, spanRows?: number, col?: number, spanCols?: number);
    static create(opts: any): GridLayouterParam;
}
