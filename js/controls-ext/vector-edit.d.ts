import { Label } from "../controls/label";
import { Edit } from "../controls/edit";
import { Widget } from "../controls/widget";
import Events = require("../events");
/**
 * 范围编辑器。
 */
export declare class VectorEdit extends Widget {
    protected _d: number;
    protected _xTitle: string;
    protected _xLabel: Label;
    protected _xEditor: Edit;
    protected _yTitle: string;
    protected _yLabel: Label;
    protected _yEditor: Edit;
    protected _zLabel: Label;
    protected _zEditor: Edit;
    protected _zTitle: string;
    protected _wLabel: Label;
    protected _wEditor: Edit;
    protected _wTitle: string;
    xTitle: string;
    yTitle: string;
    zTitle: string;
    wTitle: string;
    readonly inputable: boolean;
    /**
     * dimension
     */
    d: number;
    readonly xEditor: Edit;
    readonly yEditor: Edit;
    readonly zEditor: Edit;
    readonly wEditor: Edit;
    value: any;
    protected onToJson(json: any): void;
    dispose(): void;
    protected forwardChangeEvent(evt: Events.ChangeEvent): void;
    protected createEdit(value: number): Edit;
    protected createLabel(text: string): Label;
    protected onCreated(): void;
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
        _focusable: boolean;
        _sensitive: boolean;
        _tips: any;
        _text: any;
        _name: any;
        _tag: any;
        _hitTestResult: number;
        _isWindow: boolean;
        _mode: number;
        _styleType: any;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _d: number;
        _xTitle: string;
        _yTitle: string;
        _zTitle: string;
        _wTitle: string;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static rBin;
    static create(options?: any): VectorEdit;
}
