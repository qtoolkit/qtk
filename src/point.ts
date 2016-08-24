export class Point {
	public x : number;
	public y : number;
	
	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	public dispose() {
	}

	public static create() : Point {
		return new Point(0, 0);
	}
};


