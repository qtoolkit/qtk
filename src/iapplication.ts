import {IThemeManager} from "./itheme-manager";

/**
 * 代表整个应用程序。 
 */
export interface IApplication {
	/**
	 * 请求重绘。
	 */
	requestRedraw();

	/**
	 * 获取指定名称的服务。
	 */
	getService(name:string) : any;

	/**
	 * 注册一个服务。指定服务的名称和对象。
	 */
	registerService(name:string, service : any) : IApplication;

	/**
	 * 获取主题管理器。
	 */
	getThemeManager() : IThemeManager;
}

