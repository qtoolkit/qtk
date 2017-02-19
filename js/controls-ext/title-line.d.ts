import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleLine
 * @extends Widget
 * 带标题的直线，用于属性的分组。
 */
export declare class TitleLine extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleLine;
}
