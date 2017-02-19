import { TitleValue } from "./title-value";
import { Widget } from "../controls/widget";
/**
 * @class TitleCheckButton
 * @extends Widget
 * 带标题的CheckButton。
 */
export declare class TitleCheckButton extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleCheckButton;
}
