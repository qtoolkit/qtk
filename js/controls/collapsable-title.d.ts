import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
export declare class CollapsableTitle extends Widget {
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
    private static rBin;
    static create(options?: any): CollapsableTitle;
}
