
import {Widget} from "./widget";
import {Window} from "./window";
import Events = require("../events");

/**
 * 实现窗口管理器的基本功能。
 */
export class WindowManager extends Widget {
	/**
	 * 窗口列表。
	 */
	public get windows() : Array<Window> {
		return this._windows;
	}
	public set windows(value:Array<Window>) {
	}
	protected _windows : Array<Window>;

	public addWindow(win:Window) {
		this._windows.push(win);
	}

	public removeWindow(win:Window) {
		this._windows.remove(win);
	}
	
	protected onWindowCreate(evt:Events.WindowEvent) {
		var win = evt.widget;
		this.addWindow(win);
	}

	protected onWindowCreated(evt:Events.WindowEvent) {
	}

	protected onWindowOpen(evt:Events.WindowEvent) {
	}

	protected onWindowClose(evt:Events.WindowEvent) {
		var win:Window = evt.widget;
		this.removeWindow(win);
	}

	/**
	 * 向APP注册窗口的事件。
	 */
	public onCreated() {
		super.onCreated();
		this.createCanvas();

		this._windows = [];
		var app = this.app;
		app.on(Events.WINDOW_OPEN, evt => this.onWindowOpen(evt));
		app.on(Events.WINDOW_CLOSE, evt => this.onWindowClose(evt));
		app.on(Events.WINDOW_CREATE, evt => this.onWindowCreate(evt));
		app.on(Events.WINDOW_CREATED, evt => this.onWindowCreated(evt));
	}
}
