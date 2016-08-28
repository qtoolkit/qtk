
import {Window, WindowType} from "./window";
import {IApplication} from "./iapplication";
import {WidgetFactory} from "./widget-factory";

export class WindowNormal extends Window {
	constructor() {
		super(WindowNormal.TYPE);
	}

	static TYPE = "window-normal";
	static createEx(app:IApplication, options:any) {
		var win = new WindowNormal();
		win.app = app;
	
		return win.init(options);
	}
	
	static create(app:IApplication, options:any) {
		var win = new WindowNormal();
	
		return win.init();
	}
};

WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
