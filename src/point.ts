export class Point {
	public x : number;
	public y : number;
	
	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	public dispose() {
	}

	public static create(x?:number, y?:number) : Point {
		return new Point(x, y);
	}

	public static p = Point.create(0, 0);
};


