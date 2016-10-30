import { IValueConverter } from "./ivalue-converter";
export declare class DelegateValueConverter implements IValueConverter {
    protected _convert: Function;
    protected _convertBack: Function;
    convert(data: any): any;
    convertBack(data: any): any;
    private constructor(convert, convertBack);
    static create(convert: Function, convertBack: Function): DelegateValueConverter;
}
