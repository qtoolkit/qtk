
import {Widget} from "../widget";
import Events = require("../events");
import {KeyEvent} from "../key-event";
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

	constructor(moveParent:boolean, animateDuration:number) {
		this.moveParent = moveParent || false;
		this.animateDuration = animateDuration >= 0 ? animateDuration : 500;
	}
};

/**
 * 让Widget具有可以Movable的特性，按住鼠标可以拖动控件。
 *
 * move的过程中，按下ESCAPE键，Widget将恢复原来的位置与大小。
 */
export class Movable extends Behavior {
	protected init(options:any) {
		this.options = new MovableOptions(options.moveParent, options.animateDuration);
	}

	protected moveWidget(x:number, y:number, animate) {
		var moveParent = this.options.moveParent;
		var widget = moveParent ? this.widget.parent : this.widget;
		var duration = this.options.animateDuration;

		widget.moveTo(x, y, animate ? 500 : 0);
	}

	protected onCancelled() {
		this.widget.requestRedraw();
		this.moveWidget(this.x, this.y, true);
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
		document.body.style.cursor = "move"; 
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		this.dragging = false;
		document.body.style.cursor = "default"; 
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(this.dragging) {
			var dx = evt.x - evt.pointerDownX;
			var dy = evt.y - evt.pointerDownY;
			this.moveWidget(this.x+dx, this.y+dy, false);
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


