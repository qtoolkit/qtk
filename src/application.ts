import Events = require("./events");
import assets = require("./assets");
import * as Services from  "./services";
import {MainLoop} from "./main-loop";
import {Emitter} from "./emitter";
import {IThemeManager} from "./itheme-manager";
import {ThemeManager} from "./theme-manager";
import {IApplication} from "./iapplication";

/**
 * 代表整个应用程序，可以通过Application获取各种服务。
 *
 */
export class Application extends Emitter implements IApplication {
	private name : string;
	private servicesManager : Services.Manager;

	constructor(name:string) {
		super();
		this.name = name;
		this.servicesManager = new Services.Manager();
	}

	public get mainLoop() {
		return MainLoop;
	}

	public init(args) {
		var themeDataURL = args.themeDataURL;
		var themeManager = new ThemeManager();

		assets.loadJSON(themeDataURL).then(json => {
			themeManager.init(json);
			this.dispatchEvent({type:Events.READY});
		});

		this.registerService(Services.THEME_MANAGER, themeManager);

		return this;
	}

	public requestRedraw() {
		MainLoop.requestRedraw();
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

	static create(name:string) {
		var app = new Application(name);

		return app;
	}
};

