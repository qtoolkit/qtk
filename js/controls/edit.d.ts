import { Style } from "../style";
import { Label } from "./label";
import { HtmlEdit } from "../html/html-edit";
import { Widget } from "./widget";
/**
 * 编辑器。multiLineMode决定是多行编辑器还是单行编辑器。
 */
export declare class Edit extends Label {
    protected _it: string;
    protected _itp: string;
    protected _input: HtmlEdit;
    protected _isEditing: boolean;
    protected _inputFilter: Function;
    readonly inputable: boolean;
    /**
     * 输入过滤器，对输入的文本进行转换。
     */
    inputFilter: (value: string) => string;
    /**
     * 输入提示。
     */
    inputTips: string;
    /**
     * 输入类型。
     */
    inputType: string;
    draw(ctx: any): void;
    protected onWheel: any;
    relayoutText(): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    protected getStyleType(): string;
    protected filterText(value: string): string;
    protected hideEditor(): void;
    protected showEditor(): void;
    protected _validationTips: string;
    validationTips: string;
    protected drawInvalidInputTips: any;
    protected onInvalidInput(message: string): void;
    constructor();
    dispose(): void;
    protected dispatchClick(evt: any): void;
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
        _mlm: boolean;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _mlm: boolean;
        _it: any;
        _itp: any;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static r;
    static create(options?: any): Edit;
}
