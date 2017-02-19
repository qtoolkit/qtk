import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleLink
 * @extends Widget
 * 带标题的超链接。
 */
export declare class TitleLink extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleLink;
}
