
export class Rect {
	public x : number;
	public y : number;
	public w : number;
	public h : number;

	constructor(x:number, y:number, w:number, h:number) {
		this.init(x, y, w, h);
	}
	
	init(x:number, y:number, w:number, h:number):Rect {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		return this;
	}
	
	public dispose() {
	}

	public clone() : Rect {
		return Rect.create(this.x, this.y, this.w, this.h);
	}

	public equal(other:Rect) : boolean {
		return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
	}

	public copy(other:Rect) : Rect {
		return this.init(other.x, other.y, other.w, other.h);
	}
	
	public merge(other:Rect) : Rect {
		var x = Math.min(this.x, other.x);
		var y = Math.min(this.y, other.y);

		this.w = Math.max(this.x+this.w, other.x+other.w) - x;
		this.h = Math.max(this.y+this.h, other.y+other.h) - y;
		this.x = x;
		this.y = y;

		return this;
	}

	public containsPoint(x:number, y:number) : boolean {
		return x >= this.x && x < (this.x + this.w) && y >= this.y && y < (this.y + this.h); 
	}

	public static create(x?:number, y?:number, w?:number, h?:number) {
		var r = new Rect(x || 0, y || 0, w || 0, h || 0);
		
		return r;
	}

	public static rect = Rect.create(0, 0, 0, 0);
};
