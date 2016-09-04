
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Dialog extends Window {
	
	constructor() {
		super(Dialog.TYPE);
	}

	public dispose() {
		super.dispose();
		Dialog.recyclbale.recycle(this);
	}

	public static TYPE = "dialog";
	private static recyclbale = new RecyclableCreator<Dialog>(function() {return new Dialog()});
	public static create() : Widget {
		return Dialog.recyclbale.create().reset(Dialog.TYPE);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
