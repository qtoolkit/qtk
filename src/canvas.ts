
import {Emitter} from "./emitter";

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
	private _w: number;
	private _h: number;
	private _id : string;
	private _offline : boolean;
	private _devicePixelRatio : number;
	public canvas : HTMLCanvasElement;
	private onOtherEvent : any;
	private onPointerEvent : any;

	private transformXY(detail:any) {
		detail.x -= this.x;
		detail.y -= this.y;
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
			me.dispatchEvent(evt);
		};

		this.onOtherEvent = function(evt) {
			me.dispatchEvent(evt);
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
		canvas.removeEventListener("qtk-pointer-down", this.onPointerEvent);
		canvas.removeEventListener("qtk-pointer-move", this.onPointerEvent);
		canvas.removeEventListener("qtk-pointer-up", this.onPointerEvent);
		canvas.removeEventListener("qtk-wheel", this.onOtherEvent);
		canvas.removeEventListener("qtk-keydown", this.onOtherEvent);
		canvas.removeEventListener("qtk-keyup", this.onOtherEvent);
	}

	public createCanvas() {
		var canvas = document.createElement("canvas");
		canvas.id = this._id;
		this.moveCanvas(canvas);
		this.resizeCanvas(canvas);
		
		if(!this._offline) {
			document.body.appendChild(canvas);
		}

		canvas.addEventListener("qtk-pointer-down", this.onPointerEvent);
		canvas.addEventListener("qtk-pointer-move", this.onPointerEvent);
		canvas.addEventListener("qtk-pointer-up", this.onPointerEvent);
		canvas.addEventListener("qtk-wheel", this.onOtherEvent);
		canvas.addEventListener("qtk-keydown", this.onOtherEvent);
		canvas.addEventListener("qtk-keyup", this.onOtherEvent);

		return canvas;
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
