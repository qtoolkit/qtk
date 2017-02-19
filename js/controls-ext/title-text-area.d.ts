import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleTextArea
 * @extends Widget
 * 带标题的多行编辑器。
 */
export declare class TitleTextArea extends TitleValue {
    protected _inputTips: string;
    /**
     * @property {string} inputTips
     * 输入提示。
     */
    inputTips: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleTextArea;
}
