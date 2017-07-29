
import {Emitter} from "./emitter";
import Events = require("./events");
import {PointerEventDetail} from "./event-detail";
import inputEventAdapter = require("./input-event-adapter");

/**
 *
 * @class Canvas
 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
 *
 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
 *
 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。 
 *
 */
export class Canvas extends Emitter {
	public canvas : HTMLCanvasElement;

	constructor(x?:number, y?:number, w?:number, h?:number,devicePixelRatio?:number, offline?:boolean) {
		super();

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
	private onWheelEvent : any;
	private onKeyEvent : any;
	private onPointerEvent : any;
	private _offline : boolean;
	private _devicePixelRatio : number;

	/**
	 * @property {number} x 
	 * X 坐标
	 */
	public  get x() {
		return this._x;
	}
	public set x(value) {
		this._x = value;
		this.moveCanvas(this.canvas);
	}
	private _x : number;
	
	/**
	 * @property {number} y 
	 * Y 坐标
	 */
	public get y() {
		return this._y;
	}
	public set y(value) {
		this._y = value;
		this.moveCanvas(this.canvas);
	}
	private _y : number;
	
	/**
	 * @property {number} z 
	 * Z 坐标
	 */
	public set z(value) {
		this._z = value;
		this.canvas.style.zIndex = value;
	}
	private _z : number;
	
	/**
	 * @property {number} w 
	 * 宽度
	 */
	public set w(value) {
		this._w = value;
		this.resizeCanvas(this.canvas);
	}
	public get w() {
		return this._w; 
	}
	public set width(value) {
		this.w = value;
	}
	public get width() {
		return this._w; 
	}
	private _w: number;
	
	/**
	 * @property {number} h 
	 * 高度
	 */
	public get h() {
		return this._h; 
	}
	public get height() {
		return this._h; 
	}
	public set h(value) {
		this._h = value;
		this.resizeCanvas(this.canvas);
	}
	public set height(value) {
		this.h = value;
	}
	private _h: number;

	/**
	 * @property {string} id 
	 * ID
	 */
	public set id(value) {
		this._id = value;
		if(this.canvas) {
			this.canvas.id = value;
		}
	}
	public get id() {
		return this._id;
	}
	private _id : string;

	/**
	 * @method grabKey
	 * Grab Key事件。
	 */
	public grabKey() {
		inputEventAdapter.grabKey(this.canvas);
	}

	/**
	 * @method ungrabKey
	 * ungrabKey Key事件。
	 */
	public ungrabKey() {
		inputEventAdapter.ungrabKey(this.canvas);
	}

	/**
	 * @method grab
	 * grab事件。
	 */
	public grab() {
		inputEventAdapter.grab(this.canvas);
	}

	/**
	 * @method ungrab
	 * ungrab事件。
	 */
	public ungrab() {
		inputEventAdapter.ungrab(this.canvas);
	}

	private transformXY(detail:any) {
		detail.x -= this.x;
		detail.y -= this.y;
		detail.pointerDownX -= this.x;
		detail.pointerDownY -= this.y;
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

	public createCanvas() : HTMLCanvasElement {
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

	/**
	 * @method getContext
	 * 获取Canvas的绘图Context。
	 */
	public getContext(type:string) {
		if(!this.canvas) {
			this.canvas = this.createCanvas();
		}

		var ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(this._devicePixelRatio, this._devicePixelRatio);

		return ctx;
	}

	/**
	 * @method create
	 * @static
	 * 创建一个Canvas对象。
	 * @param {number} x X坐标。
	 * @param {number} y Y坐标。
	 * @param {number} w 宽度。
	 * @param {number} h 高度。
	 * @param {number} devicePixelRatio 屏幕密度。
	 * @param {boolean} offline 是否是离线Canvas。 
	 */
	public static create(x?:number, y?:number, w?:number, h?:number, devicePixelRatio?:number, offline?:boolean) {
		return new Canvas(x, y, w, h, devicePixelRatio, offline);
	}
}

