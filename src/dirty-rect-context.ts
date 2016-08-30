import {Rect} from "./rect";
import {Point} from "./point";
import {MatrixStack} from "./matrix-stack";

export class DirtyRectContext extends MatrixStack {
	private _rect : Rect;
	private _minX : number;
	private _minY : number;
	private _maxX : number;
	private _maxY : number;
	private _pointsNr : number;

	constructor() {
		super();
		this._rect = Rect.create(0, 0, 0, 0);
		this.reset();
	}

	public addRect(x:number, y:number, w:number, h:number) {
		var p = Point.p;
		this.addPoint(this.transformPoint(x, y, p));
		this.addPoint(this.transformPoint(x+w, y, p));
		this.addPoint(this.transformPoint(x+w, y+h, p));
		this.addPoint(this.transformPoint(x, y+h, p));
	}

	private addPoint(p:Point) {
		var x = p.x;
		var y = p.y;
		if(!this._pointsNr) {
			this._minX = this._maxX = x;
			this._minY = this._maxY = y;
		}else{
			if(this._minX > x) {
				this._minX = x;
			}
			if(this._maxX < x) {
				this._maxX = x;
			}
			if(this._minY > y) {
				this._minY = y;
			}
			if(this._maxY < y) {
				this._maxY = y;
			}
		}
		this._pointsNr++;
	}

	public getRect() : Rect {
		var r = this._rect;
		r.x = this._minX;
		r.y = this._minY;
		r.w = this._maxX - this._minX;
		r.h = this._maxY - this._minY;

		return r;
	}

	public reset() { 
		this._pointsNr = 0;
		this.identity();
		this._minX = -1;
		this._minY = -1;
		this._maxX = -1;
		this._maxY = -1;
	}
	static create() {
		return new DirtyRectContext();
	}
};

