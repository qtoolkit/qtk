import { Style } from "../style";
import { WidgetState, Widget } from "./widget";
import { AlignH, AlignV, Orientation } from "../consts";
/**
 * 颜色控件。
 */
export declare class Color extends Widget {
    protected _style: Style;
    constructor(type: string);
    color: string;
    lineColor: string;
    lineWidth: number;
    value: string;
    setStyle(state: WidgetState, style: Style): Widget;
    reset(type: string): Widget;
    getStyle(): Style;
}
export declare class ColorTile extends Color {
    color: string;
    roundRadius: number;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ColorTile;
}
export declare class ColorLine extends Color {
    protected _vAlign: AlignV;
    protected _hAlign: AlignH;
    protected _orientation: Orientation;
    color: string;
    orientation: Orientation;
    vAlign: AlignV;
    hAlign: AlignH;
    lineJoin: number;
    lineCap: number;
    dashLine: Array<number>;
    protected drawColorBackground(ctx: any, style: Style): Widget;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ColorLine;
}
