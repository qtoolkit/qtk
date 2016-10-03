import { Rect } from "../rect";
import { Widget } from "./widget";
/**
 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
 */
export declare class TitleContent extends Widget {
    protected _animating: boolean;
    protected _collapsed: boolean;
    protected _titleWidget: Widget;
    protected _contentWidget: Widget;
    /**
     * titleHeight 标题控件的高度。
     */
    protected _th: number;
    titleHeight: number;
    /**
     * titleHeight 内容控件的高度。
     */
    protected _ch: number;
    contentHeight: number;
    /**
     * movable 决定是否能通过拖动标题控件来拖动整个TitleContent控件。
     */
    protected _movable: boolean;
    movable: boolean;
    /**
     * 折叠或展开控件。
     * @param duration 动画时间(可选)。
     * @param onStep 动画执行期间单步的回调函数(可选)。
     * @returns 返回控件本身。
     */
    triggerCollapsed(duration?: number, onStep?: Function): Widget;
    /**
     * collapsed 控件当前折叠或展开的状态。
     */
    collapsed: boolean;
    /**
     * 标题控件。
     */
    titleWidget: Widget;
    /**
     * 内容控件。
     */
    contentWidget: Widget;
    protected drawChildren(ctx: any): Widget;
    onInit(): void;
    protected reComputeH(): void;
    relayoutChildren(): Rect;
    protected onReset(): void;
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
        _movable: boolean;
        _th: number;
        _ch: number;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static rBin;
    static create(options?: any): TitleContent;
}
