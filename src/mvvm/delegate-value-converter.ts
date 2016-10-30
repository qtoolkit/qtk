
import {IValueConverter} from "./ivalue-converter";

export class DelegateValueConverter implements IValueConverter {
	protected _convert : Function;
	protected _convertBack : Function;

	public convert(data:any) : any {
		return this._convert(data);
	}

	public convertBack(data:any):any {
		return this._convertBack(data);
	}

	private constructor(convert:Function, convertBack:Function) {
		this._convert = convert;
		this._convertBack = convertBack;
	}

	public static create(convert:Function, convertBack:Function) {
		return new DelegateValueConverter(convert, convertBack);
	}
};
