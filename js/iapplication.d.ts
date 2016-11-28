import { IViewPort } from "./iview-port";
import { IMainLoop } from "./imain-loop";
import { IThemeManager } from "./itheme-manager";
import { IWindowManager } from "./controls/iwindow-manager";
/**
 * 代表整个应用程序。
 */
export interface IApplication {
    /**
     * 获取主题管理器。
     */
    getThemeManager(): IThemeManager;
    /**
     * 获取ViewPort。
     */
    getViewPort(): IViewPort;
    /**
     * 获取MainLoop。
     */
    getMainLoop(): IMainLoop;
    /**
     * 获取窗口管理器。
     */
    getWindowManager(): IWindowManager;
    /**
     * 分发应用级的事件。
     */
    dispatchEvent(evt: any): any;
    on(type: string, callback: Function, useCapture?: boolean): any;
    off(type: string, callback: Function, useCapture?: boolean): any;
    /**
     * 获取App的参数。
     */
    options: any;
}
