
import {IValueConverter} from "./ivalue-converter";

export class RangeFixer implements  IValueConverter {
	protected _firstMin:number;
	protected _firstMax:number;
	protected _secondMin:number;
	protected _secondMax:number;
	protected _secondMustGreater:boolean;
	protected _value = {first:0, second:0};

	public convertBack(value:any) : any {
		var first = Math.min(this._firstMax, Math.max(this._firstMin, +value.first));
		var second = Math.min(this._secondMax, Math.max(this._secondMin, +value.second));
	
		if(this._secondMustGreater) {
			this._value.first = Math.min(first, second);
			this._value.second = Math.max(first, second);
		}else{
			this._value.first = first;
			this._value.second = second;
		}

		return this._value;
	}

	public convert(value:any) : any {
		return value;
	}

	constructor(firstMin:number, firstMax:number, secondMin:number, secondMax:number, secondMustGreater:boolean) {
		this._firstMin = firstMin;
		this._firstMax = firstMax;
		this._secondMin = secondMin;
		this._secondMax = secondMax;
		this._secondMustGreater = secondMustGreater || false;
	}

	public static create (firstMin:number, firstMax:number, secondMin:number, secondMax:number, 
						  secondMustGreater:boolean) {
		return new RangeFixer(firstMin, firstMax, secondMin, secondMax, secondMustGreater);
	}
};
