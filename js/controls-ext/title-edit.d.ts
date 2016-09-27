import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleEdit extends TitleValue {
    protected _inputType: string;
    protected _inputTips: string;
    protected _inputFilter: (value: string) => string;
    inputFilter: (value: string) => string;
    inputType: string;
    inputTips: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleEdit;
}
