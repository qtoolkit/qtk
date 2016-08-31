
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

	clone() : Rect {
		return Rect.create(this.x, this.y, this.w, this.h);
	}

	equal(other:Rect) : boolean {
		return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
	}

	copy(out:Rect) : Rect {
		return this.init(out.x, out.y, out.w, out.h);
	}
	
	merge(other:Rect) : Rect {
		var x = Math.min(this.x, other.x);
		var y = Math.min(this.y, other.y);

		this.w = Math.max(this.x+this.w, other.x+other.w) - x;
		this.h = Math.max(this.y+this.h, other.y+other.h) - y;
		this.x = x;
		this.y = y;

		return this;
	}

	public static create(x?:number, y?:number, w?:number, h?:number) {
		var r = new Rect(x || 0, y || 0, w || 0, h || 0);
		
		return r;
	}

	public static r = Rect.create(0, 0, 0, 0);
};
