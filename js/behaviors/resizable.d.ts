import Events = require("../events");
import { Widget } from "../controls/widget";
import { Behavior } from "./behavior";
/**
 * Resizable Behavior的初始化参数。
 */
export declare class ResizableOptions {
    /**
     * 控件的上方是否可以Resize。
     */
    north: boolean;
    /**
     * 控件的下方是否可以Resize。
     */
    south: boolean;
    /**
     * 控件的左边是否可以Resize。
     */
    west: boolean;
    /**
     * 控件的右边是否可以Resize。
     */
    east: boolean;
    /**
     * 控件的左上角是否可以Resize。
     */
    northWest: boolean;
    /**
     * 控件的右上角是否可以Resize。
     */
    northEast: boolean;
    /**
     * 控件的左下角是否可以Resize。
     */
    southWest: boolean;
    /**
     * 控件的右下角是否可以Resize。
     */
    southEast: boolean;
    /**
     * 取消时，恢复原位的动画时间，0表示无动画。
     */
    animateDuration: number;
    movable: boolean;
    constructor(options: any);
}
/**
 * 让Widget具有可以Resizable的特性。
 * 当鼠标移动到Widget对应的位置，如四角和四边时，鼠标的指针会提示在此处按下鼠标可以resize Widget。
 *
 * Resize的过程中，按下ESCAPE键，Widget将恢复原来的位置与大小。
 */
export declare class Resizable extends Behavior {
    protected resizingEvent: {
        type: string;
    };
    protected resizeEndEvent: {
        type: string;
    };
    protected resizeBeginEvent: {
        type: string;
    };
    protected resizeCancelEvent: {
        type: string;
    };
    constructor(widget: Widget, options: any);
    protected init(options: any): void;
    private onCancelled();
    protected onKeyDownGlobal(evt: CustomEvent): void;
    protected onPointerDown(evt: Events.PointerEvent): void;
    protected onPointerUp(evt: Events.PointerEvent): void;
    protected testPointerPosition(evt: Events.PointerEvent): string;
    protected onPointerMove(evt: Events.PointerEvent): void;
    private x;
    private y;
    private w;
    private h;
    private resizing;
    private options;
    private pointerDownArea;
    static TYPE: string;
}
