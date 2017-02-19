import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleSlider
 * @extends Widget
 * 带标题的滑块。
 */
export declare class TitleSlider extends TitleValue {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleSlider;
}
