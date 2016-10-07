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
    constructor(name: string);
    readonly isReady: boolean;
    readonly assets: any;
    readonly mainLoop: IMainLoop;
    getMainLoop(): IMainLoop;
    options: any;
    private initOptions(args);
    run(): void;
    /**
     * 子类可以重载此函数，做App的初始化工作。
     */
    start(): void;
    init(args: any): this;
    getService(name: string): any;
    registerService(name: string, service: any): Application;
    getThemeManager(): IThemeManager;
    readonly viewPort: IViewPort;
    getViewPort(): IViewPort;
    onReady(func: Function): void;
    private static instance;
    static get(): Application;
    static create(name: string): Application;
}
