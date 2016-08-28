import {Point} from "./point";
import {Matrix} from "./matrix";

export class MatrixStack {
	private matrix : Matrix;
	private stack : Array<Matrix>;

	constructor() {
		this.stack = [];
		this.matrix = new Matrix();
	}

	public save() : MatrixStack {
		this.stack.push(this.matrix.clone());
		
		return this;
	}

	public restore() : MatrixStack {
		if(this.stack.length) {
			this.matrix = this.stack.pop();
		}
		
		return this;
	}
	
	public identity() : MatrixStack {
		this.matrix.identity();

		return this;
	}

	public set(a:number, b:number, c:number, d:number, tx:number, ty:number) : MatrixStack {
		this.matrix.set(a, b, c, d, tx, ty);

		return this;
	}

	public rotate (rad:number) : MatrixStack {
		this.matrix.rotate(rad);

		return this;
	}

	public scale(sx:number, sy:number) : MatrixStack {
		this.matrix.scale(sx, sy);

		return this;
	}

	public translate (dx:number, dy:number) {
		this.matrix.translate(dx, dy);
	}

	public transformPoint(x:number, y:number, out?:Point) : Point {
		return this.matrix.transformPoint(x, y, out);
	}

	public invert():Matrix {
		return this.matrix.invert();
	}

	public matrixToString() : string {
		return this.matrix.toString();
	}

	public static create() {

		return new MatrixStack();
	}
};
