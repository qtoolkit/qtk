import Events = require("../events");
import { Widget } from "../controls/widget";
import { Behavior } from "./behavior";
/**
 * 让Widget可作为拖放功能的Drop目标。
 *
 */
export declare class Droppable extends Behavior {
    protected onPointerEnter(evt: Events.PointerEvent): void;
    protected onPointerLeave(evt: Events.PointerEvent): void;
    protected onPointerUp(evt: Events.PointerEvent): void;
    protected onPointerMove(evt: Events.PointerEvent): void;
    constructor(widget: Widget, options: any);
    static TYPE: string;
}
