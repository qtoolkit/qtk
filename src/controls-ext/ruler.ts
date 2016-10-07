
import {Style} from "../style";
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Ruler extends Widget {
	protected _originX : number;
	protected _originY : number;
	protected _scale : number;
	protected _pointerX : number;
	protected _pointerY : number;

	public set originX(value:number) {
		this._originX = value;
	}
	public get originX() : number {
		return this._originX;
	}
	
	public set originY(value:number) {
		this._originY = value;
	}
	public get originY() : number {
		return this._originY;
	}

	public set scale(value:number) {
		this._scale = value;
	}
	public get scale() : number {
		return this._scale;
	}

	public set pointerX(value:number) {
		this._pointerX = value;
	}
	public get pointerX() : number {
		return this._pointerX;
	}
	
	public set pointerY(value:number) {
		this._pointerY = value;
	}
	public get pointerY() : number {
		return this._pointerY;
	}

	public setPointer(x:number, y:number) : Ruler {
		this._pointerX = x;
		this._pointerY = y;
		this.requestRedraw();

		return this;
	}

	public setOrigin(x:number, y:number) : Ruler {
		this._originX = x;
		this._originY = y;
		this.requestRedraw();

		return this;
	}

	public drawBackground(ctx:any, style:Style) : Widget{
		ctx.lineWidth = 1;
		ctx.font = style.font;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.strokeStyle = style.lineColor;
		ctx.fillStyle = style.textColor;

		ctx.beginPath();
		this.drawColorBackground(ctx, style);

		return this;
	}

	public static SIZE = 10;
	constructor(type:string) {
		super(type);
		this.scale = 1;
		this.originX = 0;
		this.originY = 0;
		this.pointerX = 0;
		this.pointerY = 0;
	}
};

export class VRuler extends Ruler {
	protected drawColorBackground(ctx:any, style:Style) : Widget{
		var h = this.w;
		var w = this.h;
		var ox = this.originX;
		var oy = this.originY;
	
		var i = 0;
		var x = 0;
		var y = 0;
		var fh = h;
		var th = h/3;
		var hh = h/2;
		var scale = this.scale;
		var rs = Ruler.SIZE;

		var pixels = Math.floor(10/scale);
		var scaledPixels = pixels * scale;

		ctx.translate(0, oy);
		ctx.rotate(Math.PI * 0.5);
		ctx.translate(0, -h);
		function getH(i) {
			if(i%10 === 0) {
				return fh;
			}
			else if(i%5 === 0) {
				return hh;
			}
			else {
				return th;
			}
		}

		ox = oy;
	/////////////////////////////////	
		ctx.beginPath();
		var n = Math.floor((w - ox)/scaledPixels);
		for(i = 0; i < n; i++) {
			h = getH(i);	
			x = i * scaledPixels;
			if((x + ox) < 0) continue;

			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, h);
		}
		ctx.stroke();

		for(i = 0; i < n; i++) {
			x = i * scaledPixels;
			if((x + ox) < 0) continue;

			if(i%10 === 0) {
				var str = i * pixels;
				x = x;
				y = fh;
				ctx.save()
				ctx.translate(x, y);
				ctx.rotate(Math.PI);
				ctx.fillText(str, 5, th);
				ctx.restore();
			}
		}
	/////////////////////////////////	
		ctx.beginPath();
		var n = Math.floor((ox-rs)/scaledPixels);
		for(i = 1; i < n; i++) {
			h = getH(i);	
			x = -i * scaledPixels;

			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, h);
		}
		ctx.stroke();
		
		for(i = 1; i < n; i++) {
			x = -i * scaledPixels;
			if(i%10 === 0) {
				var str = -i * pixels;
				x = x;
				y = fh;
				ctx.save()
				ctx.translate(x, y);
				ctx.rotate(Math.PI);
				ctx.fillText(str, 5, th);
				ctx.restore();
			}
		}

	/////////////////////////////////	
		h = fh;
		x = this.pointerY-oy;
		
		ctx.fillStyle = style.foreGroundColor;
		ctx.beginPath();
		ctx.moveTo(x-th, hh);
		ctx.lineTo(x+th, hh);
		ctx.lineTo(x, 0);
		ctx.lineTo(x-th, hh);
		ctx.fill();

		return this;
	}

	public relayout() {
		this.moveTo(0, 0, 0);
		this.resizeTo(this.w, this.parent.h, 0);
	}

	constructor() {
		super(VRuler.TYPE);
	}

	public static TYPE = "vruler";
	private static recycleBin = new RecyclableCreator<VRuler>(function() {return new VRuler()});
	public static create(options?:any) : VRuler {
		return <VRuler>VRuler.recycleBin.create().reset(VRuler.TYPE, options);
	}
};

WidgetFactory.register(VRuler.TYPE, VRuler.create);

export class HRuler extends Ruler {
	protected drawColorBackground(ctx:any, style:Style) : Widget {
		var w = this.w;
		var h = this.h;
		var ox = this.originX;
		var oy = this.originY;
		
		var i = 0;
		var x = 0;
		var fh = h;
		var th = h/3;
		var hh = h/2;
		var scale = this.scale;
		var rs = Ruler.SIZE;

		var pixels = Math.floor(10/scale);
		var scaledPixels = pixels * scale;

		ctx.translate(ox, h);

		function getH(i) {
			if(i%10 === 0) {
				return fh;
			}
			else if(i%5 === 0) {
				return hh;
			}
			else {
				return th;
			}
		}

	/////////////////////////////////	
		ctx.beginPath();
		var n = Math.floor((w - ox)/scaledPixels);
		for(i = 0; i < n; i++) {
			h = getH(i);	
			x = i * scaledPixels;
			
			if((x + ox) < 0) continue;
			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, -h);
		}
		ctx.stroke();
		
		for(i = 0; i < n; i++) {
			x = i * scaledPixels;
			if((x + ox) < 0) continue;

			if(i%10 === 0) {
				var str = i * pixels;
				ctx.fillText(str, x+5, -hh);
			}
		}
	/////////////////////////////////	
		ctx.beginPath();
		var n = Math.floor((ox-rs)/scaledPixels);
		for(i = 1; i < n; i++) {
			h = getH(i);	
			x = -i * scaledPixels;

			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, -h);
		}
		ctx.stroke();
		
		for(i = 1; i < n; i++) {
			x = -i * scaledPixels;
			if(i%10 === 0) {
				var str = -i * pixels;
				ctx.fillText(str, x+5, -hh);
			}
		}

	/////////////////////////////////	
		h = fh;
		x = this.pointerX-ox;
		
		ctx.fillStyle = style.foreGroundColor;
		ctx.beginPath();
		ctx.moveTo(x-th, -hh);
		ctx.lineTo(x+th, -hh);
		ctx.lineTo(x, 0);
		ctx.lineTo(x-th, -hh);
		ctx.fill();

		return this;
	}

	public relayout() {
		this.moveTo(0, 0, 0);
		this.resizeTo(this.parent.w, this.h, 0);
	}

	constructor() {
		super(HRuler.TYPE);
	}

	public static TYPE = "hruler";
	private static recycleBin = new RecyclableCreator<HRuler>(function() {return new HRuler()});
	public static create(options?:any) : HRuler {
		return <HRuler>HRuler.recycleBin.create().reset(HRuler.TYPE, options);
	}
};

WidgetFactory.register(HRuler.TYPE, HRuler.create);

