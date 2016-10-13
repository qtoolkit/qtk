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
import inputEventAdapter = require("./input-event-adapter");
import {InteractionRequest} from "./interaction-request/interaction-request";
import {InteractionService} from "./interaction-request/interaction-service";

/**
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export class Application extends Emitter implements IApplication {
	public name : string;
	private _options : any;
	private _isReady : boolean;
	private _viewPort : IViewPort; 
	private _mainLoop : MainLoop;
	private servicesManager : ServiceLocator;

	constructor(name:string) {
		super();
		this.name = name;
		this._options = {};
		this.servicesManager = new ServiceLocator();
		
		var options = this._options;
		var str = window.location.search.substr(1);
		var arr = str.split('&');
		arr.forEach(function(iter) {
			var keyValue = iter.split("=");
			options[keyValue[0]] = keyValue[1];
		});
		
		if(!Application.instance) {
			Application.instance = this;
		}
	}

	public get assets() {
		return Assets;
	}

	public get isReady() : boolean {
		return this._isReady;
	}

	public get mainLoop() : IMainLoop {
		return this._mainLoop;
	}

	public getMainLoop() : IMainLoop {
		return this._mainLoop;
	}

	public get options() : any {
		return this._options;
	}

	public set options(options){
	}

	public loadScript(src:string) {
		Assets.loadScript(src);
	}

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

	private initOptions(args:any) {
		var options = this._options;

		for(var key in args) {
			options[key] = args[key];
		}
	}

	public run() {
		this.dispatchEvent({type:Events.RUN});
		this._mainLoop.requestRedraw();
	}

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
						this._isReady = true;
						this.onReady(this);
					});
				}else{
					this.dispatchEventAsync({type:Events.READY});
					this._isReady = true;
					this.onReady(this);
				}
			});
		}

		this.registerService(Services.THEME_MANAGER, themeManager);
		this._viewPort = ViewPort.create(0, 0, 0);
		this._mainLoop = MainLoop.create();
		DeviceInfo.init(navigator.language, navigator.userAgent);
		inputEventAdapter.init(document, window, DeviceInfo.isPointerSupported, 
				DeviceInfo.isMSPointerSupported, DeviceInfo.isTouchSupported);

		if(DeviceInfo.isMacOS) {
			var density = this.viewPort.density;
			ImageTile.init(density, 1/density, (img) => {
				this.mainLoop.requestRedraw();
			});
		}

		this._mainLoop.on(Events.PRETICK, function(evt) {
			var time = evt.deltaTime;
			TWEEN.update(time);
		});

		return this;
	}

	public getService(name:string) : any {
		return this.servicesManager.get(name); 
	}

	public registerService(name:string, service : any) : Application {
		this.servicesManager.register(name, service); 

		return this;
	}

	public getThemeManager() : IThemeManager {
		return this.getService(Services.THEME_MANAGER);
	}

	public get viewPort() : IViewPort {
		return this._viewPort;
	}
	
	public getViewPort() : IViewPort {
		return this._viewPort;
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

