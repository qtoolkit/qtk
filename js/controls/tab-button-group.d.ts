import { Rect } from "../rect";
import { Widget } from "./widget";
export declare class TabButtonGroup extends Widget {
    protected _ae: boolean;
    value: number;
    autoExpand: boolean;
    relayoutChildren(): Rect;
    protected drawChildren(ctx: any): Widget;
    constructor();
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
        _ae: boolean;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static r;
    static create(options?: any): TabButtonGroup;
}
