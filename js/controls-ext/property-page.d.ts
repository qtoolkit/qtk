import { TitleEdit } from "./title-edit";
import { Widget } from "../controls/widget";
import { TitleSlider } from "./title-slider";
import { TitleTextArea } from "./title-text-area";
import { TitleComboBox, TitleComboBoxEditable } from "./title-combo-box";
import { TitleChoosableEdit } from "./title-choosable-edit";
/**
 * 属性编辑页，包装了各种TitleValue。
 */
export declare class PropertyPage extends Widget {
    protected _itemH: number;
    protected _titleW: string;
    protected _valueW: string;
    itemH: number;
    titleW: string;
    valueW: string;
    addEdit(title: string, value?: string, inputTips?: string, inputType?: string, inputFilter?: Function): TitleEdit;
    addChoosableEdit(title: string, value?: string, inputTips?: string): TitleChoosableEdit;
    addComboBox(title: string, value?: string): TitleComboBox;
    addComboBoxEditable(title: string, value?: string): TitleComboBoxEditable;
    addSlider(title: string, value?: string): TitleSlider;
    addTextArea(title: string, value?: string, h?: number): TitleTextArea;
    findByTitle(title: string): Widget;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): PropertyPage;
}
