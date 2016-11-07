
import {Widget} from "./widget";
import {Window, WindowType} from "./window";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {WindowManager} from "./window-manager";
import {IWindowManager} from "./iwindow-manager";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {DirtyRectContext} from "../dirty-rect-context";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 移动应用程序的窗口管理器，所有窗口共享一个Canvas，NormalWindow总是最大化显示。
 */
export class WindowManagerMobile extends WindowManager implements IWindowManager {
	constructor() {
		super(WindowManagerMobile.TYPE);
	}

	public get target() : Widget {
		var n = this._windows.length;
		var win = n > 0 ? this._windows[n-1] : null;	
		
		return win;
	}

	public dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		var target = this.target;
		if(target) {
			target.dispatchPointerDown(evt, ctx);
		}
	}

	public dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		var target = this.target;
		if(target) {
			target.dispatchPointerMove(evt, ctx);
		}
	}
	
	public dispatchPointerUp(evt:Events.PointerEvent) {
		var target = this.target;
		if(target) {
			target.dispatchPointerUp(evt);
		}
	}

	public dispatchKeyDown(evt:any) {
		var target = this.target;
		if(target) {
			target.dispatchKeyDown(evt);
		}
	}

	public dispatchClick(evt:any) {
		var target = this.target;
		if(target) {
			target.dispatchClick(evt);
		}
	}

	public dispatchDblClick(evt:any) {
		var target = this.target;
		if(target) {
			target.dispatchDblClick(evt);
		}
	}

	public dispatchWheel(evt:any) {
		var target = this.target;
		if(target) {
			target.dispatchWheel(evt);
		}
	}

	public computeChildrenDirtyRect(ctx:DirtyRectContext) {
		var windows = this._windows;
		var n = windows.length;
		var start = this.getVisibleWinStartIndex();
		for(var i = start; i < n; i++) {
			var win = windows[i];
			win.computeDirtyRect(ctx);
		}
	}

	protected getVisibleWinStartIndex() : number {
		var windows = this._windows;
		var n = windows.length;
		var start = 0;
		
		for(var i = n - 1; i >=0; i--) {
			var win = windows[i];
			if(win.windowType === WindowType.NORMAL) {
				start = i;
				break;
			}
		}

		return start;
	}

	public draw(ctx:any) : Widget {
		var windows = this._windows;
		var n = windows.length;
		var start = this.getVisibleWinStartIndex();
		
		for(var i = start; i < n; i++) {
			var win = windows[i];
			win.draw(ctx);
		}
		this._dirty = false;

		return this;
	}
	
	protected onWindowCreated(evt:Events.WindowEvent) {
		var win:Window = evt.widget;

		win.hasOwnCanvas = false;
		if(win.windowType === WindowType.NORMAL) {
			win.moveResizeTo(0, 0, this.w, this.h);
		}
	}

	public static TYPE = "window-manager-mobile";
	private static recycleBin = WidgetRecyclableCreator.create(WindowManagerMobile);
	public static create(options?:any) : WindowManagerMobile {
		return <WindowManagerMobile>WindowManagerMobile.recycleBin.create(options);
	}
};

WidgetFactory.register(WindowManagerMobile.TYPE, WindowManagerMobile.create);

