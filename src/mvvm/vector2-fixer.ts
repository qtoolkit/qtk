
import {IValueConverter} from "./ivalue-converter";

export class Vector2Fixer implements  IValueConverter {
	protected _xMin:number;
	protected _xMax:number;
	protected _yMin:number;
	protected _yMax:number;
	protected _value = {x:0, y:0};

	public convertBack(value:any) : any {
		this._value.x = Math.min(this._xMax, Math.max(this._xMin, +value.x));
		this._value.y = Math.min(this._yMax, Math.max(this._yMin, +value.y));
	
		return this._value;
	}

	public convert(value:any) : any {
		return value;
	}

	constructor(xMin:number, xMax:number, yMin:number, yMax:number) {
		this._xMin = xMin;
		this._xMax = xMax;
		this._yMin = yMin;
		this._yMax = yMax;
	}

	public static create (xMin:number, xMax:number, yMin:number, yMax:number) {
		return new Vector2Fixer(xMin, xMax, yMin, yMax);
	}
}

