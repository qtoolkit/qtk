
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import Events = require("../base/events");
import {WindowManager} from "./window-manager";
import {IWindowManager} from "./iwindow-manager";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../base/recyclable-creator";
import {DirtyRectContext} from "../base/dirty-rect-context";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 桌面应用程序的窗口管理器。
 */
export class WindowManagerDesktop extends WindowManager implements IWindowManager {
	constructor() {
		super(WindowManagerDesktop.TYPE);
	}

	public createCanvas() : Widget {
		return this;
	}
	
	protected onWindowCreated(evt:Events.WindowEvent) {
		var win:Window = evt.widget;

		win.hasOwnCanvas = true;
		if(win.windowType === WindowType.NORMAL && !win.w && !win.h) {
			win.moveResizeTo(0, 0, this.w, this.h);
		}
	}

	public static TYPE = "window-manager-desktop";
	private static recycleBin = WidgetRecyclableCreator.create(WindowManagerDesktop);
	public static create(options?:any) : WindowManagerDesktop {
		return <WindowManagerDesktop>WindowManagerDesktop.recycleBin.create(options);
	}
};

WidgetFactory.register(WindowManagerDesktop.TYPE, WindowManagerDesktop.create);

