import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleRange extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleRange;
}
