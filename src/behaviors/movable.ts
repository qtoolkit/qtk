
import Events = require("../events");
import {KeyEvent} from "../key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";
import inputEventAdapter = require("../input-event-adapter");

/**
 * Movable Behavior的初始化参数。
 */
export class MovableOptions {
	/**
	 * 移动自己还是移动parent。
	 */
	public moveParent : boolean;
	
	/**
	 * 取消时，恢复原位的动画时间，0表示无动画。
	 */
	public animateDuration : number;

	/**
	 * 如果xLimit为true, xMin代表控件在水平方向上可移动的最小值。
	 */
	public xMin : number;
	/**
	 * 如果yLimit为true, yMin代表控件在垂直方向上可移动的最小值。
	 */
	public yMin : number;
	/**
	 * 如果xLimit为true, xMax代表控件在水平方向上可移动的最大值。
	 */
	public xMax : number;
	/**
	 * 如果yLimit为true, yMax代表控件在垂直方向上可移动的最大值。
	 */
	public yMax : number;

	/**
	 * 是否启用在水平方向上可移动的范围限制。
	 */
	public xLimit : boolean;
	/**
	 * 是否启用在垂直方向上可移动的范围限制。
	 */
	public yLimit : boolean;
	
	/**
	 * 控件在水平方向上是否可移动。
	 */
	public xMovable : boolean;
	/**
	 * 控件在垂直方向上是否可移动。
	 */
	public yMovable : boolean;

	constructor(opts:any) {
		var options = opts || {};

		this.xMin = options.xMin || 0;
		this.yMin = options.yMin || 0;
		this.xMax = options.xMax || 0;
		this.yMax = options.yMax || 0;
		this.xLimit = options.xLimit || false;
		this.yLimit = options.yLimit || false;
		this.xMovable = options.xMovable !== undefined ?  options.xMovable : true;
		this.yMovable = options.yMovable !== undefined ? options.yMovable : true;

		this.moveParent = options.moveParent || false;
		this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
	}
};

/**
 * 让Widget具有可以Movable的特性，按住鼠标可以拖动控件。
 *
 * move的过程中，按下ESCAPE键，Widget将恢复原来的位置。
 */
export class Movable extends Behavior {
	protected moveEvent = {type:Events.MOVE};
	protected movingEvent = {type:Events.MOVING};
	protected moveEndEvent = {type:Events.MOVE_END};
	protected moveBeginEvent = {type:Events.MOVE_BEGIN};

	protected init(options:any) {
		this.options = new MovableOptions(options);
	}

	protected moveWidget(x:number, y:number, animate:boolean, end:boolean) {
		var options = this.options;

		var moveParent = options.moveParent;
		var duration = options.animateDuration;
		var widget = moveParent ? this.widget.parent : this.widget;

		if(!options.xMovable) {
			x = widget.x;
		}
		if(!options.yMovable) {
			y = widget.y;
		}

		if(options.xLimit) {
			x = Math.min(options.xMax, Math.max(options.xMin, x));
		}
		if(options.yLimit) {
			y = Math.min(options.yMax, Math.max(options.yMin, y));
		}

		widget.moveTo(x, y, animate ? 500 : 0);
		if(end) {
			widget.dispatchEvent(this.moveEndEvent);
		}else{
			widget.dispatchEvent(this.movingEvent);
		}
	}

	protected onCancelled() {
		this.widget.requestRedraw();
		this.moveWidget(this.x, this.y, true, true);
		document.body.style.cursor = "default"; 
	}

	protected onKeyDownGlobal(evt:CustomEvent) {
		var keyCode = evt.detail.keyCode;
		if(keyCode === KeyEvent.VK_ESCAPE && this.dragging) {
			this.dragging = false;
			this.onCancelled();
		}
	}

	protected onPointerDown(evt:Events.PointerEvent){
		var moveParent = this.options.moveParent;
		var widget = moveParent ? this.widget.parent : this.widget;
		this.x = widget.x;
		this.y = widget.y;
		this.dragging = true;
		widget.dispatchEvent(this.moveBeginEvent);

		document.body.style.cursor = "move"; 
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		document.body.style.cursor = "default"; 
		if(this.dragging) {
			this.dragging = false;
			var dx = evt.x - evt.pointerDownX;
			var dy = evt.y - evt.pointerDownY;
			this.moveWidget(this.x+dx, this.y+dy, false, true);
		}
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(this.dragging) {
			var dx = evt.x - evt.pointerDownX;
			var dy = evt.y - evt.pointerDownY;
			this.moveWidget(this.x+dx, this.y+dy, false, false);
		}
	}

	private x : number;
	private y : number;
	private dragging : boolean;
	private options : MovableOptions;

	constructor(widget:Widget, options:any) {
		super(Movable.TYPE, widget, options);
	};

	public static TYPE = "movable";
}

BehaviorFactory.register(Movable.TYPE, function(widget:Widget, options:any) {
	return new Movable(widget, options);
});


