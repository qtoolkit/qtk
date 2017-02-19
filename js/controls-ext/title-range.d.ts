import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleRange
 * @extends Widget
 * 带标题的范围的编辑器。
 */
export declare class TitleRange extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleRange;
}
