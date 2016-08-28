import Events = require("./events");
import assets = require("./assets");
import * as Services from  "./services";
import {MainLoop} from "./main-loop";
import {Emitter} from "./emitter";
import {ViewPort} from "./view-port";
import {IViewPort} from "./iview-port";
import {IMainLoop} from "./imain-loop";
import {IThemeManager} from "./itheme-manager";
import {ThemeManager} from "./theme-manager";
import {IApplication} from "./iapplication";
import * as deviceInfo from "./device-info";
import inputEventAdapter = require("./input-event-adapter");

/**
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export class Application extends Emitter implements IApplication {
	public name : string;
	private _viewPort : IViewPort; 
	private _mainLoop : MainLoop;
	private servicesManager : Services.Manager;

	constructor(name:string) {
		super();
		this.name = name;
		this.servicesManager = new Services.Manager();
	}

	public get mainLoop() : IMainLoop {
		return this._mainLoop;
	}

	public getMainLoop() : IMainLoop {
		return this._mainLoop;
	}

	public init(args) {
		var themeDataURL = args.themeDataURL;
		var themeManager = new ThemeManager();

		assets.loadJSON(themeDataURL).then(json => {
			themeManager.init(json);
			this.dispatchEventAsync({type:Events.READY});
		});

		this.registerService(Services.THEME_MANAGER, themeManager);
		this._viewPort = ViewPort.create(0, 0, 0);
		this._mainLoop = MainLoop.create();
		deviceInfo.init(navigator.language, navigator.userAgent);
		inputEventAdapter.init(document, window, deviceInfo.isPointerSupported, 
				deviceInfo.isMSPointerSupported, deviceInfo.isTouchSupported);

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

	static create(name:string) {
		var app = new Application(name);

		return app;
	}
};

