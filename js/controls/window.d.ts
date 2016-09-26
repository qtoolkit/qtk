import { Point } from "../point";
import { Widget } from "./widget";
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
export declare enum WindowType {
    NORMAL = 0,
    POPUP = 1,
}
export declare class Window extends Widget {
    private _grabbed;
    private _hasOwnCanvas;
    private _pointerPosition;
    private _shouldGrabWhenVisible;
    constructor(type: string);
    hasOwnCanvas: boolean;
    reset(type: string): Widget;
    readonly pointerPosition: Point;
    protected dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    readonly grabbed: boolean;
    grab(): Widget;
    ungrab(): Widget;
    setVisible(value: any): void;
    open(): Widget;
    close(): void;
    dispose(): void;
    private windowType;
}
