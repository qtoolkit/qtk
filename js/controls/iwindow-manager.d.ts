import { Window } from "./window";
/**
 * 窗口管理器接口。
 */
export interface IWindowManager {
    /**
     * 全部窗口列表。
     */
    windows: Array<Window>;
    /**
     * 增加窗口到窗口管理器中。
     */
    addWindow(win: Window): any;
    /**
     * 从窗口管理器删除指定的窗口。
     */
    removeWindow(win: Window): any;
}
