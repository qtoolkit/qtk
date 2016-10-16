import { TitleValue } from "./title-value";
import { Widget } from "../controls/widget";
export declare class TitleCheckBox extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleCheckBox;
}
