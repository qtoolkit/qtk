import { Widget } from "./widget";
import { Window } from "./window";
import Events = require("../events");
/**
 * 实现窗口管理器的基本功能。
 */
export declare class WindowManager extends Widget {
    /**
     * 窗口列表。
     */
    windows: Array<Window>;
    protected _windows: Array<Window>;
    addWindow(win: Window): void;
    removeWindow(win: Window): void;
    protected onWindowCreate(evt: Events.WindowEvent): void;
    protected onWindowCreated(evt: Events.WindowEvent): void;
    protected onWindowOpen(evt: Events.WindowEvent): void;
    protected onWindowClose(evt: Events.WindowEvent): void;
    /**
     * 向APP注册窗口的事件。
     */
    onCreated(): void;
}
