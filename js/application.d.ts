import { Emitter } from "./emitter";
import { IViewPort } from "./iview-port";
import { IMainLoop } from "./imain-loop";
import { IApplication } from "./iapplication";
import { IThemeManager } from "./itheme-manager";
import { IWindowManager } from "./controls/iwindow-manager";
declare global  {
    interface Window {
        sysThemeJson: any;
        appThemeJson: any;
    }
}
/**
 * @class Application
 * @extends IApplication
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export declare class Application extends Emitter implements IApplication {
    constructor(name: string);
    /**
     * @property {String} name 应用程序的名字。
     */
    name: string;
    private _name;
    /**
     * @property {Object} options 应用程序的参数。
     */
    options: any;
    private _options;
    /**
     * 获取窗口管理器。
     */
    getWindowManager(): IWindowManager;
    private _windwManager;
    /**
     * 获取主循环。
     */
    getMainLoop(): IMainLoop;
    private _mainLoop;
    /**
     * 加载指定的脚本。
     * @param {string} src 脚本URL。
     */
    loadScript(src: string): void;
    /**
     * 预加载指定的资源。
     * @param {Array<string>} assetsURLS 资源URL列表。
     * @param {Function} onDone 加载完成时的回调函数。
     * @param {Function} onProgress 每加载一个资源时的回调函数。
     *
     * 示例：
     *
     *     @example
     *     app.preload(assetsURLs, function onLoad() {
     *        app.init({sysThemeDataURL:themeURL, appThemeDataURL:appThemeURL});
     *        app.run();
     *     });
     */
    preload(assetsURLS: Array<string>, onDone: Function, onProgress?: Function): this;
    /**
     * 开始运行。
     */
    run(): void;
    /**
     * 初始化。
     */
    init(args: any): this;
    /**
     * 获取主题管理器。
     */
    getThemeManager(): IThemeManager;
    private _themeManager;
    /**
     * 获取ViewPort。
     */
    getViewPort(): IViewPort;
    private _viewPort;
    private initOptions(args);
    private parseURLParams();
    /**
     * 子类可以重载此函数，做App的初始化工作。
     */
    onReady(app: IApplication): void;
    private static instance;
    static get(): Application;
    static create(name: string): Application;
}
