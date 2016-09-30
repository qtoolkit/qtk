import { Rect } from "../rect";
import { Widget } from "./widget";
export declare class TitleContent extends Widget {
    protected _saveH: number;
    protected _movable: boolean;
    protected _collapsed: boolean;
    protected _titleHeight: number;
    protected _titleWidget: Widget;
    protected _contentWidget: Widget;
    moveResizeTo(x: number, y: number, w: number, h: number, duration?: number): TWEEN.Tween;
    titleHeight: number;
    movable: boolean;
    collapsed: boolean;
    titleWidget: Widget;
    contentWidget: Widget;
    protected onReset(): void;
    onInit(): void;
    relayoutChildren(): Rect;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleContent;
}
