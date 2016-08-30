
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
		var r = new Rect(x || 0, y || 0, w || 0, h || 0);
		
		return r;
	}

	public static r = Rect.create(0, 0, 0, 0);
};
