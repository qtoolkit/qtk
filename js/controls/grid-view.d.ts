import { Rect } from "../rect";
import { Widget } from "./widget";
import { Layouter } from "../layouters/layouter";
import { ScrollView } from "./scroll-view";
/**
 * 网格视图。
 */
export declare class GridView extends ScrollView {
    /**
     * 列数。列数和列宽设置其中之一即可。
     */
    cols: number;
    /**
     * 列宽。列数和列宽设置其中之一即可。
     */
    colWidth: number;
    /**
     * 行数。行数和行高设置其中之一即可。
     */
    rows: number;
    /**
     * 行高。行数和行高设置其中之一即可。
     */
    rowHeight: number;
    /**
     * 每一网格周围的空白。
     */
    setItemMargins(margins: any): Widget;
    readonly childrenLayouter: Layouter;
    protected doDrawChildren(ctx: any): Widget;
    relayoutChildren(): Rect;
    protected ensureOptions(): void;
    protected onToJson(json: any): void;
    protected onInit(): void;
    protected _rows: number;
    protected _cols: number;
    protected _colWidth: number;
    protected _rowHeight: number;
    constructor();
    protected onReset(): void;
    protected static defProps: {} & {} & {
        _x: number;
        _y: number;
        _z: number;
        _w: number;
        _h: number;
        _state: number;
        _value: number;
        _enable: boolean;
        _visible: boolean;
        _selected: boolean;
        _opacity: number;
        _scaleX: number;
        _scaleY: number;
        _pivotX: number;
        _pivotY: number;
        _rotation: number;
        _sensitive: boolean;
        _tips: any;
        _text: any;
        _name: any;
        _hitTestResult: number;
        _isWindow: boolean;
        _mode: number;
        _styleType: any;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _cols: number;
        _rows: number;
        _rowHeight: number;
        _colWidth: number;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBinGridView;
    static create(options?: any): GridView;
}
