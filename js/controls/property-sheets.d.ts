import { Rect } from "../rect";
import { Widget } from "./widget";
import { ScrollView } from "./scroll-view";
import { TitleContent } from "./title-content";
/**
 * 管理多个页面，每个页面可以展开或折叠。
 */
export declare class PropertySheets extends ScrollView {
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
    relayoutChildren(): Rect;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): PropertySheets;
}
