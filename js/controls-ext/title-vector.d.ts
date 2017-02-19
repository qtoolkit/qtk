import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleVector
 * @extends Widget
 * 带标题的向量编辑器。
 */
export declare class TitleVector extends TitleValue {
    protected _d: number;
    /**
     * 向量的维度。
     */
    d: number;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleVector;
}
