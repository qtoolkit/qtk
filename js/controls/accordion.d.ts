import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { TitleContent } from "./title-content";
export declare class AccordionTitle extends Widget {
    onClickTrigger: Function;
    protected collapsed: boolean;
    protected trigger(): void;
    protected getFgImageRect(style: Style): Rect;
    protected getTextRect(style: Style): Rect;
    protected getStyleType(): string;
    protected dispatchDblClick(evt: any): void;
    protected dispatchClick(evt: any): void;
    dispose(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): AccordionTitle;
}
export declare class Accordion extends Widget {
    protected _titleHeight: number;
    titleHeight: number;
    protected onReset(): void;
    constructor();
    protected setActivePanel(titleContent: TitleContent, collapsed: boolean): void;
    relayoutChildren(): Rect;
    addPanel(title: string, contentWidget: Widget): TitleContent;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Accordion;
}
