import { Rect } from "../rect";
import { Widget } from "./widget";
import { TitleContent } from "./title-content";
/**
 * 手风琴控件。它有多个页面，在每一时刻只展开一个。
 */
export declare class Accordion extends Widget {
    protected _titleHeight: number;
    /**
     * titleHeight 标题控件的高度。
     */
    titleHeight: number;
    /**
     * 增加一个页面。
     * @param title 标题文本。
     * @param contentHeight 内容控件。
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
    protected onReset(): void;
    constructor();
    relayoutChildren(): Rect;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Accordion;
}
