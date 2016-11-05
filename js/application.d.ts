import Assets = require("./assets");
import { Emitter } from "./emitter";
import { IViewPort } from "./iview-port";
import { IMainLoop } from "./imain-loop";
import { IApplication } from "./iapplication";
import { IThemeManager } from "./itheme-manager";
/**
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export declare class Application extends Emitter implements IApplication {
    name: string;
    private _options;
    private _isReady;
    private _viewPort;
    private _mainLoop;
    private servicesManager;
    private _windwManager;
    constructor(name: string);
    readonly assets: typeof Assets;
    readonly isReady: boolean;
    readonly mainLoop: IMainLoop;
    getMainLoop(): IMainLoop;
    options: any;
    loadScript(src: string): void;
    preload(assetsURLS: Array<string>, onDone: Function, onProgress?: Function): this;
    private initOptions(args);
    run(): void;
    init(args: any): this;
    getService(name: string): any;
    registerService(name: string, service: any): Application;
    getThemeManager(): IThemeManager;
    readonly viewPort: IViewPort;
    getViewPort(): IViewPort;
    /**
     * 子类可以重载此函数，做App的初始化工作。
     */
    onReady(app: IApplication): void;
    private static instance;
    static get(): Application;
    static create(name: string): Application;
}
