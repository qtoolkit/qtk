import {Rect} from "./rect";

export class Point {
	public x : number;
	public y : number;
	
	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	public dispose() {
	}

	public init(x:number, y:number) : Point {
		this.x = x;
		this.y = y;

		return this;
	}
	
	public copy(p:Point) : Point {
		this.x = p.x;
		this.y = p.y;

		return this;
	}

	public isInRect(r:Rect) : boolean {
		return this.isIn(r.x, r.y, r.w, r.h);
	}

	public isIn(x:number, y:number, w:number, h:number) : boolean {
		var xx = this.x;
		var yy = this.y;

		return xx >= x && xx <= (x+w) && yy >= y && yy <= (y+h);
	}

	public static create(x?:number, y?:number) : Point {
		return new Point(x, y);
	}

	public static point = Point.create(0, 0);
};


