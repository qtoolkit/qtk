
import {Emitter} from "./emitter";
import Events = require("./events");
import {PointerEventDetail} from "./event-detail";
import inputEventAdapter = require("./input-event-adapter");

/**
 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
 *
 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
 *
 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。 
 *
 */
export class Canvas extends Emitter {
	private _x : number;
	private _y : number;
	private _z : number;
	private _w: number;
	private _h: number;
	private _id : string;
	private _offline : boolean;
	private _devicePixelRatio : number;
	public canvas : HTMLCanvasElement;
	private onWheelEvent : any;
	private onKeyEvent : any;
	private onPointerEvent : any;

	private transformXY(detail:any) {
		detail.x -= this.x;
		detail.y -= this.y;
		detail.pointerDownX -= this.x;
		detail.pointerDownY -= this.y;
	}

	constructor(x?:number, y?:number, w?:number, h?:number,devicePixelRatio?:number, offline?:boolean) {
		super();

		this._id = "canvas";
		this._x = x || 0;
		this._y = y || 0;
		this._w = w || 0;
		this._h = h || 0;
		this._offline = offline || false;
		this._devicePixelRatio = devicePixelRatio || 1;

		var me = this;
		this.onPointerEvent = function(evt) {
			me.transformXY(evt.detail);
			var e = Events.PointerEvent.create(evt.type, evt.detail);
			me.dispatchEvent(e);
			e.dispose();
		};

		this.onKeyEvent = function(evt) {
			var e = Events.KeyEvent.create(evt.type, evt.detail);
			me.dispatchEvent(e);
			e.dispose();
		};
		
		this.onWheelEvent = function(evt) {
			var e = Events.WheelEvent.create(evt.detail);
			me.dispatchEvent(e);
			e.dispose();
		};
	}

	public get id() {
		return this._id;
	}

	public  get x() {
		return this._x;
	}
	
	public get y() {
		return this._y;
	}

	public get w() {
		return this._w; 
	}
	
	public get h() {
		return this._h; 
	}

	public get width() {
		return this._w; 
	}
	
	public get height() {
		return this._h; 
	}

	public set id(value) {
		this._id = value;
		if(this.canvas) {
			this.canvas.id = value;
		}
	}
	
	public grabKey() {
		inputEventAdapter.grabKey(this.canvas);
	}

	public ungrabKey() {
		inputEventAdapter.ungrabKey(this.canvas);
	}

	public grab() {
		inputEventAdapter.grab(this.canvas);
	}

	public ungrab() {
		inputEventAdapter.ungrab(this.canvas);
	}

	private moveCanvas(canvas:HTMLCanvasElement) {
		if(canvas) {
			var x = this._x;
			var y = this._y;
			canvas.style.position = "absolute";
			canvas.style.left = x + "px";
			canvas.style.top = y + "px";
		}
	}
	
	private resizeCanvas(canvas:HTMLCanvasElement) {
		if(canvas) {
			var w = this._w;
			var h = this._h;
			canvas.width = w* this._devicePixelRatio;
			canvas.style.width = w + "px";
			canvas.height = h * this._devicePixelRatio;
			canvas.style.height = h + "px";
		}
	}

	public set x(value) {
		this._x = value;
		this.moveCanvas(this.canvas);
	}
	
	public set y(value) {
		this._y = value;
		this.moveCanvas(this.canvas);
	}
	
	public set z(value) {
		this._z = value;
		this.canvas.style.zIndex = value;
	}

	public set w(value) {
		this._w = value;
		this.resizeCanvas(this.canvas);
	}
	
	public set h(value) {
		this._h = value;
		this.resizeCanvas(this.canvas);
	}
	
	public set width(value) {
		this.w = value;
	}
	
	public set height(value) {
		this.h = value;
	}

	public dispose() {
		var canvas = this.canvas;
		if(!this._offline) {
			document.body.removeChild(canvas);
		}
		canvas.removeEventListener(Events.POINTER_DOWN, this.onPointerEvent);
		canvas.removeEventListener(Events.POINTER_MOVE, this.onPointerEvent);
		canvas.removeEventListener(Events.POINTER_UP, this.onPointerEvent);
		canvas.removeEventListener(Events.CLICK, this.onPointerEvent);
		canvas.removeEventListener(Events.WHEEL, this.onWheelEvent);
		canvas.removeEventListener(Events.KEYDOWN, this.onKeyEvent);
		canvas.removeEventListener(Events.KEYUP, this.onKeyEvent);
	}

	public createCanvas() {
		var canvas = document.createElement("canvas");
		canvas.id = this._id;
		this.moveCanvas(canvas);
		this.resizeCanvas(canvas);
		
		if(!this._offline) {
			document.body.appendChild(canvas);
		}

		var me = this;
		canvas.addEventListener(Events.POINTER_DOWN, this.onPointerEvent);
		canvas.addEventListener(Events.POINTER_MOVE, this.onPointerEvent);
		canvas.addEventListener(Events.POINTER_UP, this.onPointerEvent);
		canvas.addEventListener(Events.CLICK, this.onPointerEvent);
		canvas.addEventListener(Events.DBLCLICK, this.onPointerEvent);
		canvas.addEventListener(Events.WHEEL, this.onWheelEvent);
		canvas.addEventListener(Events.KEYDOWN, this.onKeyEvent);
		canvas.addEventListener(Events.KEYUP, this.onKeyEvent);
		canvas.oncontextmenu = function(evt) {
			evt.preventDefault();
			var detail = PointerEventDetail.create(evt.which, evt.pageX, evt.pageY, 
								evt.altKey, evt.ctrlKey, evt.shiftKey, false);
			me.onPointerEvent({type:Events.CONTEXT_MENU, detail:detail});
			detail.dispose();
		}

		return canvas;
	}

	public ensureCanvas() {
		if(!this.canvas) {
			this.canvas = this.createCanvas();
		}
	}

	public getContext(type:string) {
		if(!this.canvas) {
			this.canvas = this.createCanvas();
		}

		var ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(this._devicePixelRatio, this._devicePixelRatio);

		return ctx;
	}

	public static create(x?:number, y?:number, w?:number, h?:number, devicePixelRatio?:number, offline?:boolean) {
		return new Canvas(x, y, w, h, devicePixelRatio, offline);
	}
}
