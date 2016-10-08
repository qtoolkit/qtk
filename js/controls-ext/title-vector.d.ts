import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleVector extends TitleValue {
    protected _d: number;
    /**
     * dimension
     */
    d: number;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleVector;
}
