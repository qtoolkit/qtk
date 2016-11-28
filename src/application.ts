import path = require("path");
import TWEEN = require("tween.js");
import Assets = require("./assets");
import Events = require("./events");
import {Services} from "./consts";
import {MainLoop} from "./main-loop";
import {Emitter} from "./emitter";
import {ViewPort} from "./view-port";
import {IViewPort} from "./iview-port";
import {ImageTile} from "./image-tile";
import {IMainLoop} from "./imain-loop";
import {ThemeManager} from "./theme-manager";
import {IApplication} from "./iapplication";
import {DeviceInfo} from "./device-info";
import {IThemeManager} from "./itheme-manager";
import {ServiceLocator} from  "./service-locator";
import {IWindowManager} from "./controls/iwindow-manager";
import {WindowManagerMobile} from "./controls/window-manager-mobile";
import {WindowManagerDesktop} from "./controls/window-manager-desktop";
import inputEventAdapter = require("./input-event-adapter");
import {InteractionRequest} from "./interaction-request/interaction-request";
import {InteractionService} from "./interaction-request/interaction-service";

/**
 * @class Application 
 * @extends IApplication
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export class Application extends Emitter implements IApplication {
	constructor(name:string) {
		super();
		this._name = name;
		this.parseURLParams();	
		if(!Application.instance) {
			Application.instance = this;
		}
	}
	
	/**
	 * @property {String} name 应用程序的名字。
	 */
	public get name() : string {
		return this._name;	
	}
	public set name(value:string) {}
	private _name : string;
	
	/**
	 * @property {Object} options 应用程序的参数。
	 */
	public get options() : any {
		return this._options;
	}
	public set options(options){
	}
	private _options : any;

	/**
	 * 获取窗口管理器。
	 */
	public getWindowManager() : IWindowManager {
		return this._windwManager;
	}
	private _windwManager : IWindowManager;

	/**
	 * 获取主循环。
	 */
	public getMainLoop() : IMainLoop {
		return this._mainLoop;
	}
	private _mainLoop : MainLoop;

	/**
	 * 加载指定的脚本。
	 * @param {string} src 脚本URL。
	 */
	public loadScript(src:string) {
		Assets.loadScript(src);
	}

	/**
	 * 预加载指定的资源。
	 * @param {Array<string>} assetsURLS 资源URL列表。
	 * @param {Function} onDone 加载完成时的回调函数。
	 * @param {Function} onProgress 每加载一个资源时的回调函数。
	 * 
	 *    @example
	 *
	 *    app.preload(assetsURLs, function onLoad() {
     *        app.init({sysThemeDataURL:themeURL, appThemeDataURL:appThemeURL});
     *        app.run();
     *    });
	 */
	public preload(assetsURLS:Array<string>, onDone:Function, onProgress?:Function) {
		Assets.Group.preload(assetsURLS, function(evt) {
			if(evt.loaded === evt.total) {
				if(onDone) {
					onDone(evt);
				}
			}

			if(onProgress) {
				onProgress(evt);
			}
		});
		return this;
	}

	/**
	 * 开始运行。
	 */
	public run() {
		this.dispatchEvent({type:Events.RUN});
		this._mainLoop.requestRedraw();
	}

	/**
	 * 初始化。
	 */
	public init(args:any) {
		this.initOptions(args);
		var themeManager = new ThemeManager();
		var sysThemeDataURL = this._options.sysThemeDataURL;
		var appThemeDataURL = this._options.appThemeDataURL;
		InteractionRequest.init(InteractionService.init());

		if(sysThemeDataURL) {
			Assets.loadJSON(sysThemeDataURL).then(json => {
				var baseURL = path.dirname(sysThemeDataURL);
				themeManager.load(json, baseURL);
				
				return appThemeDataURL;
			}).then(url => {
				if(url) {
					Assets.loadJSON(url).then(json => {
						var baseURL = path.dirname(url);
						themeManager.load(json, baseURL);
						this.dispatchEventAsync({type:Events.READY});
						this.onReady(this);
					});
				}else{
					this.dispatchEventAsync({type:Events.READY});
					this.onReady(this);
				}
			});
		}

		this._themeManager = themeManager;
		this._viewPort = ViewPort.create(0, 0, 0);
		this._mainLoop = MainLoop.create();
		DeviceInfo.init(navigator.language, navigator.userAgent);
		inputEventAdapter.init(document, window, DeviceInfo.isPointerSupported, 
				DeviceInfo.isMSPointerSupported, DeviceInfo.isTouchSupported);

		if(DeviceInfo.isMacOS) {
			var density = this._viewPort.density;
			ImageTile.init(density, 1/density, (img) => {
				this._mainLoop.requestRedraw();
			});
		}

		this._mainLoop.on(Events.PRETICK, function(evt) {
			var time = evt.deltaTime;
			TWEEN.update(time);
		});

		var vp = this._viewPort;
		if(DeviceInfo.isMobile || this.options.isMobile) {
			this._windwManager = WindowManagerMobile.create({app:this, x:0, y:0, w:vp.w, h:vp.h});
		}else{
			this._windwManager = WindowManagerDesktop.create({app:this, x:0, y:0, w:vp.w, h:vp.h});
		}

		return this;
	}

	/**
	 * 获取主题管理器。
	 */
	public getThemeManager() : IThemeManager {
		return this._themeManager;
	}
	private _themeManager : IThemeManager;

	/**
	 * 获取ViewPort。
	 */
	public getViewPort() : IViewPort {
		return this._viewPort;
	}
	private _viewPort : IViewPort; 

	private initOptions(args:any) {
		var options = this._options;

		for(var key in args) {
			options[key] = args[key];
		}
	}
	private parseURLParams() : void {
		this._options = {};
		var options = this._options;
		var str = window.location.search.substr(1);
		var arr = str.split('&');
		arr.forEach(function(iter) {
			var keyValue = iter.split("=");
			options[keyValue[0]] = keyValue[1];
		});
	}

	/**
	 * 子类可以重载此函数，做App的初始化工作。
	 */
	public onReady(app:IApplication) {
	}

	private static instance : Application;
	public static get() : Application {
		return Application.instance;
	}

	public static create(name:string) {
		var app = new Application(name);

		return app;
	}
};

