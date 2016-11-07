
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

export class WindowNormal extends Window {
	constructor() {
		super(WindowNormal.TYPE);
		this._windowType = WindowType.NORMAL;	
	}

	public static TYPE = "window-normal";
	private static recycleBin = WidgetRecyclableCreator.create(WindowNormal);
	public static create(options?:any) : Window {
		return <WindowNormal>WindowNormal.recycleBin.create(options);
	}
};

WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
