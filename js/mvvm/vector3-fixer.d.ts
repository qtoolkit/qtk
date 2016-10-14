import { IValueConverter } from "./ivalue-converter";
export declare class Vector3Fixer implements IValueConverter {
    protected _xMin: number;
    protected _xMax: number;
    protected _yMin: number;
    protected _yMax: number;
    protected _zMin: number;
    protected _zMax: number;
    protected _value: {
        x: number;
        y: number;
        z: number;
    };
    convertBack(value: any): any;
    convert(value: any): any;
    constructor(xMin: number, xMax: number, yMin: number, yMax: number, zMin: number, zMax: number);
    static create(xMin: number, xMax: number, yMin: number, yMax: number, zMin: number, zMax: number): Vector3Fixer;
}
