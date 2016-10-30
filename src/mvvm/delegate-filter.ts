
import {IFilter} from "./ifilter";

export class DelegateFilter implements IFilter {
	protected _check : Function;

	public check(data:any) : boolean {
		return this._check(data);
	}

	private constructor(check:Function) {
		this._check = check;
	}

	public static create(check:Function) {
		return new DelegateFilter(check);
	}
};
