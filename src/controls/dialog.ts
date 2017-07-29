
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IViewPort} from "../base/iview-port";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 对话框。
 */
export class Dialog extends Window {
	
	constructor(type?:string) {
		super(type||Dialog.TYPE);
		this._windowType = WindowType.POPUP;	
	}

	public static TYPE = "dialog";
	private static recycleBin = WidgetRecyclableCreator.create(Dialog);
	public static create(options?:any) : Dialog {
		return <Dialog>Dialog.recycleBin.create(options);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
