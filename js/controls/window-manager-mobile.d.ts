import { Widget } from "./widget";
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
import { WindowManager } from "./window-manager";
import { IWindowManager } from "./iwindow-manager";
import { DirtyRectContext } from "../dirty-rect-context";
export declare class WindowManagerMobile extends WindowManager implements IWindowManager {
    constructor();
    readonly target: Widget;
    dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerUp(evt: Events.PointerEvent): void;
    dispatchKeyDown(evt: any): void;
    dispatchClick(evt: any): void;
    dispatchDblClick(evt: any): void;
    dispatchWheel(evt: any): void;
    computeChildrenDirtyRect(ctx: DirtyRectContext): void;
    protected getVisibleWinStartIndex(): number;
    draw(ctx: any): Widget;
    protected onWindowCreated(evt: Events.WindowEvent): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): WindowManagerMobile;
}
