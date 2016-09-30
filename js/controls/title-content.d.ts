import { Rect } from "../rect";
import { Widget } from "./widget";
/**
 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
 */
export declare class TitleContent extends Widget {
    protected _animating: boolean;
    protected _titleHeight: number;
    protected _contentHeight: number;
    protected _movable: boolean;
    protected _collapsed: boolean;
    protected _titleWidget: Widget;
    protected _contentWidget: Widget;
    /**
     * titleHeight 标题控件的高度。
     */
    titleHeight: number;
    /**
     * titleHeight 内容控件的高度。
     */
    contentHeight: number;
    /**
     * movable 决定是否能通过拖动标题控件来拖动整个TitleContent控件。
     */
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
    protected onReset(): void;
    onInit(): void;
    relayoutChildren(): Rect;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): TitleContent;
}
