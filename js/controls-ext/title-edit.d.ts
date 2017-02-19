import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
/**
 * @class TitleEdit
 * @extends Widget
 * 带标题的编辑器。
 */
export declare class TitleEdit extends TitleValue {
    protected _inputType: string;
    protected _inputTips: string;
    protected _inputFilter: (value: string) => string;
    /**
     * @property {Function} inputFilter
     * 输入过滤器函数。
     */
    inputFilter: (value: string) => string;
    /**
     * @property {string} inputTips
     * 输入提示。
     */
    inputTips: string;
    /**
     * @property {string} inputType
     * 输入类型。
     */
    inputType: string;
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleEdit;
}
