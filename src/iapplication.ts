import {IViewPort} from "./base/iview-port";
import {IMainLoop} from "./base/imain-loop";
import {IThemeManager} from "./base/itheme-manager";
import {IWindowManager} from "./controls/iwindow-manager";

/**
 * 代表整个应用程序。 
 */
export interface IApplication {
	/**
	 * 获取主题管理器。
	 */
	getThemeManager() : IThemeManager;
	
	/**
	 * 获取ViewPort。
	 */
	getViewPort() : IViewPort;
	
	/**
	 * 获取MainLoop。
	 */
	getMainLoop() : IMainLoop;
	
	/**
	 * 获取窗口管理器。
	 */
	getWindowManager(): IWindowManager;

	/**
	 * 分发应用级的事件。
	 */
	dispatchEvent(evt:any);
	on(type:string, callback:Function, useCapture?:boolean);
	off(type:string, callback:Function, useCapture?:boolean);

	/**
	 * 获取App的参数。
	 */
	options : any;
}

