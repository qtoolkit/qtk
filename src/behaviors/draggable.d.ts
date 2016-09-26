import Events = require("../events");
import { Widget } from "../controls/widget";
import { Behavior } from "./behavior";
/**
 * 让Widget具有拖放功能的拖动功能。
 *
 */
export declare class Draggable extends Behavior {
    private dragging;
    private onDrawDragging;
    protected init(options: any): void;
    protected onCancelled(): void;
    protected onKeyDownGlobal(evt: CustomEvent): void;
    protected onPointerDown(evt: Events.PointerEvent): void;
    protected onPointerUp(evt: Events.PointerEvent): void;
    protected onPointerMove(evt: Events.PointerEvent): void;
    constructor(widget: Widget, options: any);
    static TYPE: string;
}
