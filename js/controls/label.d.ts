import { Style } from "../style";
import { Widget, WidgetState } from "./widget";
import { TextLine } from "../graphics";
/**
 * 文本控件。
 */
export declare class Label extends Widget {
    protected _mlm: boolean;
    protected _textLines: Array<TextLine>;
    /**
     * 对文本进行重新排版。
     */
    relayoutText(): Widget;
    /**
     * 是否启用多行模式。
     */
    multiLineMode: boolean;
    /**
     * Label的值即它的文本。
     */
    value: any;
    setStyle(state: WidgetState, style: Style): Widget;
    protected drawTextSL(ctx: any, text: string, style: Style): Widget;
    protected drawTextML(ctx: any, style: Style): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    protected setProp(prop: string, newValue: any, notify: boolean): Widget;
    constructor(type?: string);
    protected onInit(): void;
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
        _mlm: boolean;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Label;
}
