import { IValueConverter } from "./ivalue-converter";
export declare class NumberFixer implements IValueConverter {
    protected vMin: number;
    protected vMax: number;
    convertBack(value: any): any;
    convert(value: any): any;
    constructor(vMin: number, vMax: number);
    static create(vMin: number, vMax: number): NumberFixer;
}
