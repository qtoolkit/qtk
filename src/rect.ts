
export class Rect {
	public x : number;
	public y : number;
	public w : number;
	public h : number;

	constructor(x:number, y:number, w:number, h:number) {
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
	}
	
	public dispose() {
	}

	public static create(x?:number, y?:number, w?:number, h?:number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
};
