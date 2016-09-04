
import {Point} from "../point";
import Events = require("../events");
import {KeyEvent} from "../key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";
import inputEventAdapter = require("../input-event-adapter");

/**
 * Resizable Behavior的初始化参数。
 */
export class ResizableOptions {
	/**
	 * 控件的上方是否可以Resize。
	 */
	public north : boolean;
	/**
	 * 控件的下方是否可以Resize。
	 */
	public south : boolean;
	/**
	 * 控件的左边是否可以Resize。
	 */
	public west  : boolean;
	/**
	 * 控件的右边是否可以Resize。
	 */
	public east  : boolean;
	/**
	 * 控件的左上角是否可以Resize。
	 */
	public northWest : boolean;
	/**
	 * 控件的右上角是否可以Resize。
	 */
	public northEast : boolean;
	/**
	 * 控件的左下角是否可以Resize。
	 */
	public southWest : boolean;
	/**
	 * 控件的右下角是否可以Resize。
	 */
	public southEast : boolean;
	/**
	 * 取消时，恢复原位的动画时间，0表示无动画。
	 */
	public animateDuration : number;

	constructor(options:any) {
		this.north = options.north || options.all || false;
		this.south = options.south || options.all || false;
		this.west = options.west || options.all || false;
		this.east = options.east || options.all || false;
		this.northWest = options.northWest || options.all || false;
		this.northEast = options.northEast || options.all || false;
		this.southWest = options.southWest || options.all || false;
		this.southEast = options.southEast || options.all || false;
		this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
	}
};

/**
 * 让Widget具有可以Resizable的特性。
 * 当鼠标移动到Widget对应的位置，如四角和四边时，鼠标的指针会提示在此处按下鼠标可以resize Widget。
 *
 * Resize的过程中，按下ESCAPE键，Widget将恢复原来的位置与大小。
 */
export class Resizable extends Behavior {
	constructor(widget:Widget, options:any) {
		super(Resizable.TYPE, widget, options);
	}

	protected init(options:any) {
		this.options = new ResizableOptions(options);
	}

	private onCancelled() {
		this.widget.requestRedraw();
		document.body.style.cursor = "default"; 
		this.widget.moveResizeTo(this.x, this.y, this.w, this.h, this.options.animateDuration);
	}

	protected onKeyDownGlobal(evt:CustomEvent) {
		var keyCode = evt.detail.keyCode;
		if(keyCode === KeyEvent.VK_ESCAPE && this.resizing) {
			this.resizing = false;
			this.onCancelled();
		}
	}

	protected onPointerDown(evt:Events.PointerEvent){
		var result = this.testPointerPosition(evt);
		if(result) {
			this.x = this.widget.x;
			this.y = this.widget.y;
			this.w = this.widget.w;
			this.h = this.widget.h;
			this.resizing = true;
			this.pointerDownArea = result;
			document.body.style.cursor = result + "-resize";
		}else{
			document.body.style.cursor = "default"; 
		}
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		this.resizing = false;
		document.body.style.cursor = "default"; 
	}

	protected testPointerPosition(evt:Events.PointerEvent){
		var delta = 3;
		var w = this.widget.w;
		var h = this.widget.h;
		var p = this.widget.toLocalPoint(Point.point.init(evt.x, evt.y));
		var right = w - delta;
		var bottom = h - delta;
		var options = this.options;

		if(p.y >= 0 && p.y <= delta) {
			if(p.x >= 0 && p.x <= delta && options.northWest) {
				return "nw";
			}else if(p.x > delta && p.x < right && options.north)  {
				return "n"; 
			}else if(p.x >= right && p.x <= w && options.northEast) {
				return "ne"; 
			}
		}else if(p.y > delta && p.y < bottom) {
			if(p.x >= 0 && p.x <= delta && options.west) {
				return "w";
			}else if(p.x >= right && p.x <= w && options.east) {
				return "e"; 
			}
		}else if(p.y >= bottom && p.y <= h && options.southWest) {
			if(p.x >= 0 && p.x <= delta) {
				return "sw";
			}else if(p.x > delta && p.x < right && options.south)  {
				return "s"; 
			}else if(p.x >= right && p.x <= w && options.southEast) {
				return "se"; 
			}
		}

		return null;
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(this.resizing) {
			var widget = this.widget;
			var dx = evt.x - evt.pointerDownX;
			var dy = evt.y - evt.pointerDownY;
			switch(this.pointerDownArea) {
				case "n": {
					widget.moveResizeTo(this.x, this.y+dy, this.w, this.h-dy);
					break;
				}case "ne": {
					widget.moveResizeTo(this.x, this.y+dy, this.w+dx, this.h-dy);
					break;
				}case "nw": {
					widget.moveResizeTo(this.x+dx, this.y+dy, this.w-dx, this.h-dy);
					break;
				}case "w": {
					widget.moveResizeTo(this.x+dx, this.y, this.w-dx, this.h);
					break;
				}case "e": {
					widget.moveResizeTo(this.x, this.y, this.w+dx, this.h);
					break;
				}case "s": {
					widget.moveResizeTo(this.x, this.y, this.w, this.h+dy);
					break;
				}case "se": {
					widget.moveResizeTo(this.x, this.y, this.w+dx, this.h+dy);
					break;
				}case "sw": {
					widget.moveResizeTo(this.x+dx, this.y, this.w-dx, this.h+dy);
					break;
				}
			}
		}else{
			var result = this.testPointerPosition(evt);
			if(result) {
				document.body.style.cursor = result + "-resize";
			}else{
				document.body.style.cursor = "default"; 
			}
		}
	}

	private x : number;
	private y : number;
	private w : number;
	private h : number;
	private resizing : boolean;
	private options : ResizableOptions;
	private pointerDownArea : string;

	public static TYPE = "resizable";
}

BehaviorFactory.register(Resizable.TYPE, function(widget:Widget, options:any) {
	return new Resizable(widget, options);
});


