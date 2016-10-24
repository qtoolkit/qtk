
import {Widget} from "./widget";
import {Window} from "./window";
import {IViewPort} from "../iview-port";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 对话框。
 */
export class Dialog extends Window {
	
	constructor(type?:string) {
		super(type||Dialog.TYPE);
	}

	public static TYPE = "dialog";
	private static recycleBin = WidgetRecyclableCreator.create(Dialog);
	public static create(options?:any) : Dialog {
		return <Dialog>Dialog.recycleBin.create(options);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
