import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
/**
 * 可折叠的标题控件，点击折叠图片或双击时折叠或展开。
 * 只能用于TitleContent的titleWidget。
 *
 */
export declare class CollapsableTitle extends Widget {
    onClickTrigger: Function;
    protected collapsed: boolean;
    protected trigger(): void;
    protected getFgImageRect(style: Style): Rect;
    protected getTextRect(style: Style): Rect;
    protected getStyleType(): string;
    dispatchDblClick(evt: any): void;
    dispatchClick(evt: any): void;
    dispose(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): CollapsableTitle;
}
