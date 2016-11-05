
import {Widget} from "./widget";
import Events = require("../events");
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

export class WindowManager extends Widget {
	constructor() {
		super(WindowManager.TYPE);
	}

	public onWindowCreate(evt:Events.WindowEvent) {
		console.log("onWindowCreate");
	}
	public onWindowCreated(evt:Events.WindowEvent) {
		console.log("onWindowCreated");
	}
	public onWindowOpen(evt:Events.WindowEvent) {
		console.log("onWindowOpen");
	}
	public onWindowClose(evt:Events.WindowEvent) {
		console.log("onWindowClose");
	}

	public onCreated() {
		super.onCreated();
		var app = this.app;
		this.createCanvas();
	
		app.on(Events.WINDOW_OPEN, evt => this.onWindowOpen(evt));
		app.on(Events.WINDOW_CLOSE, evt => this.onWindowClose(evt));
		app.on(Events.WINDOW_CREATE, evt => this.onWindowCreate(evt));
		app.on(Events.WINDOW_CREATED, evt => this.onWindowCreated(evt));
	}

	public static TYPE = "window-manager";
	private static recycleBin = WidgetRecyclableCreator.create(WindowManager);
	public static create(options?:any) : WindowManager {
		return <WindowManager>WindowManager.recycleBin.create(options);
	}
};

WidgetFactory.register(WindowManager.TYPE, WindowManager.create);

