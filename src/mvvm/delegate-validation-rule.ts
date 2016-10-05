import {ValidationResult, IValidationRule} from "./ivalidation-rule";

export class DelegateValidationRule {
	public _validate : Function;

	public validate(value:any) : ValidationResult {
		return this._validate(value);
	}

	constructor(validate:Function) {
		this._validate = validate;
	}

	public static create(validate:Function) {
		return new DelegateValidationRule(validate);
	}
};
