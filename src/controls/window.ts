import {Point} from "../point";
import {Widget} from "./widget";
import Events = require("../events");
import {IApplication} from "../iapplication";
import {MatrixStack} from "../matrix-stack";
import inputEventAdapter = require("../input-event-adapter");

/**
 * 窗口的基类。
 */
export abstract class Window extends Widget {
	private _grabbed : boolean;
	private _hasOwnCanvas : boolean;
	private _pointerPosition : Point;
	private _shouldGrabWhenVisible : boolean;
	private _shortcutEvent : Events.ShortcutEvent;
	constructor(type:string) {
		super(type);
	}

	public get grabbed() : boolean {
		return this._grabbed;
	}

	/**
	 * 是否有自己的Canvas元素(此属性需要在窗口打开之前赋值)。
	 * PC上运行时，每个窗口都有自己的Canvas元素。
	 * Mobile上运行是，每个窗口共享一个Canvas。
	 */
	public set hasOwnCanvas(value:boolean) {
		if(this._inited) {
			console.log("too late to set hasOwnCanvas");
			return;
		}

		this._hasOwnCanvas = value;
	}

	public get hasOwnCanvas() : boolean{
		return this._hasOwnCanvas;
	}

	/**
	 * 获取鼠标在当前窗口上的位置。
	 */
	public get pointerPosition() : Point {
		return this._pointerPosition;
	}

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		this._pointerPosition.init(evt.x, evt.y);
		super.dispatchPointerDown(evt, ctx);
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		this._pointerPosition.init(evt.x, evt.y);
		super.dispatchPointerMove(evt, ctx);
	}

	/**
	 * 抓住事件，让输入事件始终发到当前窗口，直到ungrab为止。
	 */
	public grab() : Widget {
		if(!this._grabbed && this.canvas) {
			this._grabbed = true;
			var canvas = this.canvas;
			setTimeout(evt => {
				canvas.grab();
			}, 0);
		}

		return this;
	}

	/**
	 * 取消抓住事件。
	 */
	public ungrab() : Widget {
		if(this._grabbed && this.canvas) {
			this._grabbed = false;
			this.canvas.ungrab();
		}

		return this;
	}

	/**
	 * 窗口隐藏或显示时，需要grab/ungrab事件。
	 */
	public setVisible(value) {
		super.setVisible(value);
		if(!value) {
			if(this._grabbed) {
				this.ungrab();
				this._shouldGrabWhenVisible = true;
			}
		}else{
			if(this._shouldGrabWhenVisible) {
				this.grab();
			}
		}
	}

	/**
	 * 打开窗口。创建窗口的Canvas元素，初始化窗口内的控件，布局窗口内的控件。
	 */
	public open() : Widget {
		if(this._hasOwnCanvas) {
			this.createCanvas();
			this._canvas.grabKey();
		}

		this.init();
		this.dispatchEvent({type:Events.OPEN});
		this.relayoutChildren();

		return this;
	}

	/**
	 * 关闭窗口。
	 */
	public close () {
		if(this._hasOwnCanvas) {
			this._canvas.ungrabKey();
		}

		this.dispatchEvent({type:Events.CLOSE});
		this.ungrab();
		this.deinit();
		this.dispose();
	}

	/**
	 * 让窗口最大化，即填满父控件(窗口管理器)或整个可见区域。
	 */
	public maximize() : Widget {
		var containor = this.parent || this.app.getViewPort();
		var w = containor.w;
		var h = containor.h;

		if(w !== this.w) {
			this.w = w;
		}
		if(h !== this.h) {
			this.h = h;
		}

		if(this._inited) {
			this.relayoutChildren();
		}

		return this;
	}

	/**
	 * 将对话框移动到屏幕中间。
	 */
	public moveToCenter() : Widget {
		var containor = this.parent || this.app.getViewPort();
		var w = containor.w;
		var h = containor.h;
		this.x = (w - this.w) >> 1;
		this.y = (h - this.h) >> 1;
		
		return this;
	}

	protected dispatchKeyDown(evt:any) {
		super.dispatchKeyDown(evt);
		var keys = "";
		if(evt.ctrlKey) {
			keys = "ctrl";
		}
		if(evt.commandKey) {
			keys += keys ? "+cmd" : "cmd";
		}
		if(evt.altKey) {
			keys += keys ? "+alt" : "alt";
		}
		if(evt.shiftKey) {
			keys += keys ? "+shift" : "shift";
		}

		var key = String.fromCharCode(evt.keyCode).toLowerCase();	

		if(key) {
			keys += (keys ? ("+" + key) : key);
			var e = this._shortcutEvent;
			e.init(Events.SHORTCUT, keys);
			this.dispatchShortcut(e);
		}
	}

	protected dispatchShortcut(e:Events.ShortcutEvent) {
		this.dispatchEvent(e);
	}

	public registerShortcut(keys:string, func:Function) {
		var lowerKeys = keys.toLowerCase();
		this.on(Events.SHORTCUT, function(evt:Events.ShortcutEvent) {
			if(lowerKeys === evt.keys) {
				func(evt);
			}
		});
	}

	protected onReset() {
		this._isWindow = true;
		this._grabbed = false;
		this.hasOwnCanvas = true;
		this._pointerPosition = Point.create(0, 0);
		this._shortcutEvent = Events.ShortcutEvent.create(null, null);
	}

};
