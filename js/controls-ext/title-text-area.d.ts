import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleTextArea extends TitleValue {
    protected _inputTips: string;
    inputTips: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleTextArea;
}
