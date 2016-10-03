
import {Widget} from "./widget";
import {IViewPort} from "../iview-port";
import {Window, WindowType} from "./window";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 对话框。
 */
export class Dialog extends Window {
	
	constructor(type?:string) {
		super(type||Dialog.TYPE);
	}

	/**
	 * 将对话框移动到屏幕中间。
	 */
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
		return <Dialog>Dialog.recycleBin.create().reset(Dialog.TYPE, options);
	}
};

WidgetFactory.register(Dialog.TYPE, Dialog.create);
