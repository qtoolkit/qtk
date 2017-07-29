
import {Point} from "../base/point";
import Events = require("../base/events");
import {KeyEvent} from "../base/key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";
import inputEventAdapter = require("../base/input-event-adapter");

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
	protected resizingEvent = {type:Events.RESIZING};
	protected resizeEndEvent = {type:Events.RESIZE_END};
	protected resizeBeginEvent = {type:Events.RESIZE_BEGIN};
	protected resizeCancelEvent = {type:Events.RESIZE_CANCEL};
	
	constructor(widget:Widget, options:any, type?:string) {
		super(type || Resizable.TYPE, widget, options);
	}

	protected init(options:any) {
		this.options = new ResizableOptions(options);
	}

	private onCancelled() {
		var widget = this.widget;
		var duration = this.options.animateDuration;
		
		widget.requestRedraw();
		document.body.style.cursor = "default"; 
		
		var tween = this.widget.moveResizeTo(this.x, this.y, this.w, this.h, duration);
		if(tween) {
			tween.onComplete(evt=> {
				widget.dispatchEvent(this.resizeCancelEvent);
			});
			tween.onUpdate(evt => {
				widget.dispatchEvent(this.resizingEvent);
			});
		}else{
			widget.dispatchEvent(this.resizeCancelEvent);
		}
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
			var widget = this.widget;
			this.x = widget.x;
			this.y = widget.y;
			this.w = widget.w;
			this.h = widget.h;
			this.resizing = true;
			this.pointerDownArea = result;
			document.body.style.cursor = result + "-resize";
			widget.dispatchEvent(this.resizeBeginEvent);
		}else{
			document.body.style.cursor = "default"; 
		}
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		if(this.resizing) {	
			this.widget.dispatchEvent(this.resizeEndEvent);
		}
		this.resizing = false;
		this.pointerDownArea = null;
		document.body.style.cursor = "default"; 
	}

	protected testPointerPosition(evt:Events.PointerEvent){
		var border = this.border;
		var w = this.widget.w;
		var h = this.widget.h;
		var right = w - border;
		var bottom = h - border;
		var options = this.options;
		var p = this.widget.toLocalPoint(Point.point.init(evt.x, evt.y));
		var southResizable = options.southWest || options.southEast || options.south;
		var northResizable = options.northWest || options.northEast || options.north;

		if(p.y >= 0 && p.y <= border) {
			if(p.x >= 0 && p.x <= border && northResizable) {
				return "nw";
			}else if(p.x > border && p.x < right && options.north)  {
				return "n"; 
			}else if(p.x >= right && p.x <= w && options.northEast) {
				return "ne"; 
			}
		}else if(p.y > border && p.y < bottom) {
			if(p.x >= 0 && p.x <= border && options.west) {
				return "w";
			}else if(p.x >= right && p.x <= w && options.east) {
				return "e"; 
			}
		}else if(p.y >= bottom && p.y <= h && southResizable) {
			if(p.x >= 0 && p.x <= border) {
				return "sw";
			}else if(p.x > border && p.x < right && options.south)  {
				return "s"; 
			}else if(p.x >= right && p.x <= w && options.southEast) {
				return "se"; 
			}
		}

		return null;
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(this.resizing) {
			var dx = evt.dx;
			var dy = evt.dy;
			var widget = this.widget;

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
			widget.dispatchEvent(this.resizingEvent);
		}else{
			var result = this.testPointerPosition(evt);
			if(result) {
				document.body.style.cursor = result + "-resize";
			}else{
				document.body.style.cursor = "default"; 
			}
		}
	}

	protected x : number;
	protected y : number;
	protected w : number;
	protected h : number;
	protected resizing : boolean;
	protected options : ResizableOptions;
	protected pointerDownArea : string;
	protected border = 5;

	public static TYPE = "resizable";
}

BehaviorFactory.register(Resizable.TYPE, function(widget:Widget, options:any) {
	return new Resizable(widget, options);
});


