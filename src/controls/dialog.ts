
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Dialog extends Window {
	
	constructor(type?:string) {
		super(type||Dialog.TYPE);
	}

	public dispose() {
		super.dispose();
		Dialog.recycleBin.recycle(this);
	}

	public static TYPE = "dialog";
	private static recycleBin = new RecyclableCreator<Dialog>(function() {return new Dialog()});
	public static create(options?:any) : Dialog {
		return <Dialog>Dialog.recycleBin.create().reset(Dialog.TYPE).set(options);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
