export enum RoundType {
	TL = 1,
	TR = 2,
	BL = 4,
	BR = 8
};

export class Graphics {
	public static drawRoundRect(ctx:any, w:number, h:number, r:number, type?:RoundType) {
		if(!type) {
			type = RoundType.TL | RoundType.TR | RoundType.BL | RoundType.BR;
		}

		var d = r << 1;
		ctx.beginPath();
		if(w < d || h < d || !r) {
			ctx.rect(0, 0, w, h);

			return;
		}

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
	}
};
