import { Widget } from "./widget";
import { Style } from "../style";
/**
 * 进度条的类型有三种：水平，垂直和圆形。
 */
export declare enum ProgressBarType {
    H = 1,
    HORIZONTAL = 1,
    V = 2,
    VERTICAL = 2,
    C = 3,
    CIRCLE = 3,
}
/**
 * 进度条。value表示进度，取值在0到1之间。
 */
export declare class ProgressBar extends Widget {
    barType: ProgressBarType;
    textFormater: (value: number) => string;
    constructor(type?: string);
    readonly text: string;
    value: any;
    protected drawColorForeGround(ctx: any, style: Style): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    protected static defProps: {} & {
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
        barType: ProgressBarType;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ProgressBar;
}
