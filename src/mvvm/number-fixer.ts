
import {IValueConverter} from "./ivalue-converter";

export class NumberFixer implements  IValueConverter {
	protected vMin:number;
	protected vMax:number;

	public convertBack(value:any) : any {
		return Math.min(this.vMax, Math.max(this.vMin, +value));
	}

	public convert(value:any) : any {
		return value;
	}

	constructor(vMin:number, vMax:number) {
		this.vMin = vMin;
		this.vMax = vMax;
	}

	public static create (vMin:number, vMax:number) {
		return new NumberFixer(vMin, vMax);
	}
}

