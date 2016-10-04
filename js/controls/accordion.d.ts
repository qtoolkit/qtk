import { Rect } from "../rect";
import { Widget } from "./widget";
import { TitleContent } from "./title-content";
/**
 * 手风琴控件。它有多个页面，在每一时刻只展开一个。
 */
export declare class Accordion extends Widget {
    protected _titleHeight: number;
    /**
     * titleH 标题控件的高度。
     */
    titleH: number;
    /**
     * 增加一个页面。
     * @param title 标题文本。
     * @param contentH 内容控件。
     * @returns 返回新增加的TitleContent。
     */
    addPage(title: string, contentWidget: Widget): TitleContent;
    /**
     * 展开或折叠指定的页面。
     * @param titleContent 要展开或折叠的页面。
     * @param collapsed 展开或折叠。
     * @param duration 动画的时间。
     * @returns 返回当前控件。
     */
    setActivePage(titleContent: TitleContent, collapsed: boolean, duration?: number): Widget;
    constructor();
    relayoutChildren(): Rect;
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
        _titleHeight: number;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Accordion;
}
