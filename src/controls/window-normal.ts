
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class WindowNormal extends Window {
	constructor() {
		super(WindowNormal.TYPE);
	}

	public static TYPE = "window-normal";
	private static recycleBin = new RecyclableCreator<WindowNormal>(function() {return new WindowNormal()});
	public static create(options?:any) : Window {
		return <WindowNormal>WindowNormal.recycleBin.create().reset(WindowNormal.TYPE).set(options);
	}
};

WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
