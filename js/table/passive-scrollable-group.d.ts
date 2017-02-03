import { Rect } from "../rect";
import Events = require("../events");
import { Widget } from "../controls/widget";
/**
 * 被动式可滚分组。滚动区域由外面设置。
 */
export declare abstract class PassiveScrollableGroup extends Widget {
    /**
     * X的偏移。
     */
    offsetX: number;
    protected _ox: number;
    /**
     * Y的偏移。
     */
    offsetY: number;
    protected _oy: number;
    constructor(type: string);
    relayoutChildren(): Rect;
    protected doDrawChildren(ctx: any): void;
    protected drawChildren(ctx: any): Widget;
    protected offsetPointerEvent(evt: Events.PointerEvent): void;
    protected unOffsetPointerEvent(evt: Events.PointerEvent): void;
    protected onReset(): void;
    dispatchClick(evt: any): void;
    dispatchDblClick(evt: any): void;
    dispatchPointerDown(evt: Events.PointerEvent): void;
    dispatchPointerMove(evt: Events.PointerEvent): void;
    dispatchPointerUp(evt: Events.PointerEvent): void;
}
