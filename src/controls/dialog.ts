
import {Widget} from "./widget";
import {IViewPort} from "../iview-port";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Dialog extends Window {
	
	constructor(type?:string) {
		super(type||Dialog.TYPE);
	}

	public moveToCenter() : Widget {
		if(this.app) {
			var vp = this.app.getViewPort();
			this.x = (vp.w - this.w) >> 1;
			this.y = (vp.h - this.h) >> 1;
		}

		return this;
	}

	public static TYPE = "dialog";
	private static recycleBin = new RecyclableCreator<Dialog>(function() {return new Dialog()});
	public static create(options?:any) : Dialog {
		return <Dialog>Dialog.recycleBin.create().reset(Dialog.TYPE).set(options);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
