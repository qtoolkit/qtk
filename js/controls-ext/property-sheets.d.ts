import { Rect } from "../rect";
import { Widget } from "../controls/widget";
import { ScrollView } from "../controls/scroll-view";
import { TitleContent } from "../controls/title-content";
import { Layouter } from '../layouters/layouter';
/**
 * 管理多个页面，每个页面可以展开或折叠。
 */
export declare class PropertySheets extends ScrollView {
    protected _titleHeight: number;
    /**
     * titleHeight 标题控件的高度。
     */
    titleHeight: number;
    childrenLayouter: Layouter;
    /**
     * 增加一个页面。
     * @param title 标题文本。
     * @param contentHeight 内容控件。
     * @returns 返回新增加的TitleContent。
     */
    addPage(title: string, contentWidget: Widget): TitleContent;
    private computeDesireContentHeight();
    relayoutChildren(): Rect;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): PropertySheets;
}
