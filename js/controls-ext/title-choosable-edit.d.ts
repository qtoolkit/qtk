import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleChoosableEdit
 * @extends Widget
 * 带标题的编辑器，同时提供一个选择按钮，用来实现颜色选择和文件选择等功能。
 */
export declare class TitleChoosableEdit extends TitleValue {
    protected _inputTips: string;
    /**
     * @property {Function} onChoose
     * 点击选择按钮时的回调函数。
     */
    onChoose: Function;
    /**
     * @property {string} inputTips
     * 输入提示。
     */
    inputTips: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleChoosableEdit;
}
