
import {IComparator} from "./icomparator";

export class DelegateComparator implements IComparator {
	protected _compare : Function;

	public compare(a:any, b:any) : number {
		return this._compare(a, b);
	}

	private constructor(compare:Function) {
		this._compare = compare;
	}

	public static create(compare:Function) {
		return new DelegateComparator(compare);
	}
};
