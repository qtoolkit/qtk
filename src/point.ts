export class Point {
	public x : number;
	public y : number;
	
	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	init(x:number, y:number) : Point {
		this.x = x;
		this.y = y;

		return this;
	}

	public dispose() {
	}

	public static create(x?:number, y?:number) : Point {
		return new Point(x, y);
	}

	public static point = Point.create(0, 0);
};


