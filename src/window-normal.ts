
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IApplication} from "./iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "./recyclable-creator";

export class WindowNormal extends Window {
	constructor() {
		super(WindowNormal.TYPE);
	}

	static createEx(app:IApplication, options:any) {
		var win = new WindowNormal();
		win.app = app;
	
		return win.init(options);
	}
	
	public dispose() {
		super.dispose();
		WindowNormal.recyclbale.recycle(this);
	}

	public static TYPE = "window-normal";
	public static create() : Widget {
		return WindowNormal.recyclbale.create().reset(WindowNormal.TYPE);
	}

	private static recyclbale = new RecyclableCreator<WindowNormal>(function() {return new WindowNormal()});
};

WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
