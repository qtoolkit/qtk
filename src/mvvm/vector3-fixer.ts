
import {IValueConverter} from "./ivalue-converter";

export class Vector3Fixer implements  IValueConverter {
	protected _xMin:number;
	protected _xMax:number;
	protected _yMin:number;
	protected _yMax:number;
	protected _zMin:number;
	protected _zMax:number;
	protected _value = {x:0, y:0, z:0};

	public convertBack(value:any) : any {
		this._value.x = Math.min(this._xMax, Math.max(this._xMin, +value.x));
		this._value.y = Math.min(this._yMax, Math.max(this._yMin, +value.y));
		this._value.z = Math.min(this._zMax, Math.max(this._zMin, +value.z));
	
		return this._value;
	}

	public convert(value:any) : any {
		return value;
	}

	constructor(xMin:number, xMax:number, yMin:number, yMax:number, zMin:number, zMax:number) {
		this._xMin = xMin;
		this._xMax = xMax;
		this._yMin = yMin;
		this._yMax = yMax;
		this._zMin = zMin;
		this._zMax = zMax;
	}

	public static create (xMin:number, xMax:number, yMin:number, yMax:number, zMin:number, zMax:number) {
		return new Vector3Fixer(xMin, xMax, yMin, yMax, zMin, zMax);
	}
}

