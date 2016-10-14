import { IValueConverter } from "./ivalue-converter";
export declare class Vector2Fixer implements IValueConverter {
    protected _xMin: number;
    protected _xMax: number;
    protected _yMin: number;
    protected _yMax: number;
    protected _value: {
        x: number;
        y: number;
    };
    convertBack(value: any): any;
    convert(value: any): any;
    constructor(xMin: number, xMax: number, yMin: number, yMax: number);
    static create(xMin: number, xMax: number, yMin: number, yMax: number): Vector2Fixer;
}
