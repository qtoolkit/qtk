import { Rect } from "../rect";
import Events = require("../events");
import { Widget } from "../controls/widget";
import { MatrixStack } from "../matrix-stack";
/**
 * 可滚的分组。
 */
export declare abstract class ScrollableGroup extends Widget {
    protected _ox: number;
    protected _oy: number;
    offsetX: number;
    offsetY: number;
    relayoutChildren(): Rect;
    protected doDrawChildren(ctx: any): void;
    protected drawChildren(ctx: any): Widget;
    protected offsetPointerEvent(evt: Events.PointerEvent): void;
    protected unOffsetPointerEvent(evt: Events.PointerEvent): void;
    protected onReset(): void;
    constructor(type: string);
    protected dispatchClick(evt: any): void;
    protected dispatchDblClick(evt: any): void;
    protected dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerUp(evt: Events.PointerEvent): void;
}
