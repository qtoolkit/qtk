import { ValidationResult } from "./ivalidation-rule";
export declare class DelegateValidationRule {
    _validate: Function;
    validate(value: any): ValidationResult;
    constructor(validate: Function);
    static create(validate: Function): DelegateValidationRule;
}
