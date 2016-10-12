import Events = require("../events");
import { Widget } from "../controls/widget";
import { Behavior } from "./behavior";
/**
 * Movable Behavior的初始化参数。
 */
export declare class MovableOptions {
    /**
     * 移动自己还是移动parent。
     */
    moveParent: boolean;
    /**
     * 取消时，恢复原位的动画时间，0表示无动画。
     */
    animateDuration: number;
    /**
     * 如果xLimit为true, xMin代表控件在水平方向上可移动的最小值。
     */
    xMin: number;
    /**
     * 如果yLimit为true, yMin代表控件在垂直方向上可移动的最小值。
     */
    yMin: number;
    /**
     * 如果xLimit为true, xMax代表控件在水平方向上可移动的最大值。
     */
    xMax: number;
    /**
     * 如果yLimit为true, yMax代表控件在垂直方向上可移动的最大值。
     */
    yMax: number;
    /**
     * 是否启用在水平方向上可移动的范围限制。
     */
    xLimit: boolean;
    /**
     * 是否启用在垂直方向上可移动的范围限制。
     */
    yLimit: boolean;
    /**
     * 控件在水平方向上是否可移动。
     */
    xMovable: boolean;
    /**
     * 控件在垂直方向上是否可移动。
     */
    yMovable: boolean;
    constructor(opts: any);
}
/**
 * 让Widget具有可以Movable的特性，按住鼠标可以拖动控件。
 *
 * move的过程中，按下ESCAPE键，Widget将恢复原来的位置。
 */
export declare class Movable extends Behavior {
    protected moveEvent: {
        type: string;
    };
    protected movingEvent: {
        type: string;
    };
    protected moveEndEvent: {
        type: string;
    };
    protected moveBeginEvent: {
        type: string;
    };
    protected init(options: any): void;
    protected moveWidget(x: number, y: number, animate: boolean, end: boolean): void;
    protected onCancelled(): void;
    protected onKeyDownGlobal(evt: CustomEvent): void;
    protected onPointerDown(evt: Events.PointerEvent): void;
    protected onPointerUp(evt: Events.PointerEvent): void;
    protected onPointerMove(evt: Events.PointerEvent): void;
    private x;
    private y;
    private dragging;
    private options;
    constructor(widget: Widget, options: any);
    static TYPE: string;
}
