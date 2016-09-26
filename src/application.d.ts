import { Emitter } from "./emitter";
import { IViewPort } from "./iview-port";
import { IMainLoop } from "./imain-loop";
import { IThemeManager } from "./itheme-manager";
import { IApplication } from "./iapplication";
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
    isReady: boolean;
    assets: any;
    mainLoop: IMainLoop;
    getMainLoop(): IMainLoop;
    options: any;
    private initOptions(args);
    run(): void;
    init(args: any): this;
    getService(name: string): any;
    registerService(name: string, service: any): Application;
    getThemeManager(): IThemeManager;
    viewPort: IViewPort;
    getViewPort(): IViewPort;
    onReady(func: Function): void;
    private static instance;
    static get(): Application;
    static create(name: string): Application;
}
