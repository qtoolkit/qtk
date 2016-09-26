import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { ProgressBar } from "./progress-bar";
export declare class Slider extends ProgressBar {
    protected dragger: Widget;
    constructor(type?: string);
    onDraggerMoved(dragEnd: boolean): void;
    relayoutChildren(): Rect;
    protected onInit(): void;
    protected setProp(prop: string, newValue: any, notify: boolean): Widget;
    protected drawColorBackground(ctx: any, style: Style): Widget;
    protected drawColorForeGround(ctx: any, style: Style): Widget;
    static TYPE: string;
    private static r;
    static create(options?: any): Slider;
}
