import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleChoosableEdit extends TitleValue {
    protected _inputTips: string;
    onChoose: Function;
    inputTips: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleChoosableEdit;
}
