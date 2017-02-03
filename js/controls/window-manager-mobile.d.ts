import { Widget } from "./widget";
import Events = require("../events");
import { WindowManager } from "./window-manager";
import { IWindowManager } from "./iwindow-manager";
import { DirtyRectContext } from "../dirty-rect-context";
/**
 * 移动应用程序的窗口管理器，所有窗口共享一个Canvas，NormalWindow总是最大化显示。
 */
export declare class WindowManagerMobile extends WindowManager implements IWindowManager {
    constructor();
    readonly target: Widget;
    dispatchPointerDown(evt: Events.PointerEvent): void;
    dispatchPointerMove(evt: Events.PointerEvent): void;
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
