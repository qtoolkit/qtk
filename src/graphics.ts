import {Rect} from "./rect";
import {Style} from "./style";

export enum RoundType {
	TL = 1,
	TR = 2,
	BL = 4,
	BR = 8
};

export class Graphics {
	public static drawTextSL(ctx:any, text:string, style:Style, r:Rect) {
		var x = 0;
		var y = 0;

		switch(style.textAlign) {
			case "right": {
				x = r.x + r.w;
				break;
			}
			case "center": {
				x = r.x + (r.w >> 1);
				break;
			}
			default: {
				x = r.x;
				break;
			}
		}

		switch(style.textBaseline) {
			case "top": {
				y = r.y;
				break;
			}
			case "bottom": {
				y = r.y + r.h;
				break;
			}
			default: {
				y = r.y + (r.h >> 1);
				break;
			}
		}
		
		if(text && style.fontColor) {
			ctx.font = style.font;
			ctx.fillStyle = style.fontColor;
			ctx.textAlign = style.textAlign;
			ctx.textBaseline = style.textBaseline;
			ctx.fillText(text, x, y, r.w);
		}
	}

	public static drawLine(ctx:any, strokeStyle:string, lineWidth:number, 
						   x1:number, y1:number, x2:number, y2:number) {
		if(strokeStyle && lineWidth > 0) {
			ctx.beginPath();
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = strokeStyle;
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	}

	public static drawRect(ctx:any, fillStyle:string, strokeStyle:string, lineWidth:number, 
			x:number, y:number, w:number, h:number) {
		if(fillStyle || (strokeStyle && lineWidth > 0)) {
			ctx.beginPath();
			ctx.rect(x, y, w, h);
			if(fillStyle) {
				ctx.fillStyle = fillStyle;
				ctx.fill();
			}
			if(strokeStyle && lineWidth > 0) {
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = strokeStyle;
				ctx.stroke();
			}
		}
	}

	public static drawRoundRect(ctx:any, fillStyle:string, strokeStyle:string, lineWidth:number, 
			x:number, y:number, w:number, h:number, r:number, type?:RoundType) {
		if(fillStyle || (strokeStyle && lineWidth > 0)) {
			Graphics.roundRect(ctx, x, y, w, h, r, type);
			if(fillStyle) {
				ctx.fillStyle = fillStyle;
				ctx.fill();
			}
			if(strokeStyle && lineWidth > 0) {
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = strokeStyle;
				ctx.stroke();
			}
		}
	}

	public static roundRect(ctx:any, x:number, y:number, w:number, h:number, r:number, type?:RoundType) {
		if(!type) {
			type = RoundType.TL | RoundType.TR | RoundType.BL | RoundType.BR;
		}

		var d = r << 1;
		ctx.beginPath();
		if(w < d || h < d || !r) {
			ctx.rect(x, y, w, h);

			return;
		}

		ctx.translate(x, y);
		if(type & RoundType.TL) {
			ctx.moveTo(0, r);
			ctx.quadraticCurveTo(0, 0, r, 0);
		}else{
			ctx.moveTo(0, 0);
		}

		if(type & RoundType.TR) {
			ctx.lineTo(w-r, 0);
			ctx.quadraticCurveTo(w, 0, w, r);
		}else{
			ctx.lineTo(w, 0);
		}

		if(type & RoundType.BR) {
			ctx.lineTo(w, h-r);
			ctx.quadraticCurveTo(w, h, w-r, h);
		}else{
			ctx.lineTo(w, h);
		}
	
		if(type & RoundType.BL) {
			ctx.lineTo(r, h);
			ctx.quadraticCurveTo(0, h, 0, h-r);
		}else{
			ctx.lineTo(0, h);
		}

		ctx.closePath();
		ctx.translate(-x, -y);
	}
};
