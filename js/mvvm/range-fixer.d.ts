import { IValueConverter } from "./ivalue-converter";
export declare class RangeFixer implements IValueConverter {
    protected _firstMin: number;
    protected _firstMax: number;
    protected _secondMin: number;
    protected _secondMax: number;
    protected _secondMustGreater: boolean;
    protected _value: {
        first: number;
        second: number;
    };
    convertBack(value: any): any;
    convert(value: any): any;
    constructor(firstMin: number, firstMax: number, secondMin: number, secondMax: number, secondMustGreater: boolean);
    static create(firstMin: number, firstMax: number, secondMin: number, secondMax: number, secondMustGreater: boolean): RangeFixer;
}
