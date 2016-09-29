import { Rect } from "../rect";
import { Widget } from "./widget";
import { Layouter } from "../layouters/layouter";
import { ScrollView } from "./scroll-view";
export declare class GridView extends ScrollView {
    cols: number;
    colWidth: number;
    rows: number;
    rowHeight: number;
    setItemMargins(margins: any): Widget;
    childrenLayouter: Layouter;
    protected doDrawChildren(ctx: any): Widget;
    relayoutChildren(): Rect;
    protected ensureOptions(): void;
    protected onInit(): void;
    protected _rows: number;
    protected _cols: number;
    protected _colWidth: number;
    protected _rowHeight: number;
    constructor();
    protected onReset(): void;
    static TYPE: string;
    private static recycleBinGridView;
    static create(options?: any): GridView;
}
