import { Rect } from "../rect";
import { TitleLink } from "./title-link";
import { TitleLine } from "./title-line";
import { TitleEdit } from "./title-edit";
import { TitleLabel } from "./title-label";
import { TitleRange } from "./title-range";
import { TitleVector } from "./title-vector";
import { Button } from "../controls/button";
import { Widget } from "../controls/widget";
import { TitleSlider } from "./title-slider";
import { TitleTextArea } from "./title-text-area";
import { TitleCheckButton } from "./title-check-button";
import { TitleChoosableEdit } from "./title-choosable-edit";
import { TitleComboBox, TitleComboBoxEditable } from "./title-combo-box";
import { PropsDesc, PropDesc } from "./props-desc";
/**
 * @class PropertyPage
 * @extends Widget
 * 属性编辑页，包装了各种TitleValue，可以直接通过JSON创建属性页。
 */
export declare class PropertyPage extends Widget {
    protected _itemH: number;
    protected _titleW: string;
    protected _valueW: string;
    /**
     * @property {number} itemH
     * 每一项的高度。
     */
    itemH: number;
    /**
     * @property {number} titleW
     * 属性的标题的宽度。
     */
    titleW: string;
    /**
     * @property {number} valueW
     * 属性的Value的宽度。
     */
    valueW: string;
    /**
     * @method addLabel
     * 增加一个文本控件。
     * @param {string} title 标题。
     * @param {string} label 文本内容。
     * @return {TitleLabel} 返回新创建的TitleLabel控件。
     */
    addLabel(title: string, value: string): TitleLabel;
    /**
     * @method addButton
     * 增加一个按钮控件。
     * @param {string} title 标题。
     * @param {string} command 文本内容。
     * @return {Button} 返回新创建的Button控件。
     */
    addButton(text: string, command: string, width?: string): Button;
    /**
     * @method addCheckButton
     * 增加一个CheckButton控件。
     * @param {string} title 标题。
     * @param {string} value CheckButton的值。
     * @return {TitleCheckButton} 返回新创建的TitleCheckButton控件。
     */
    addCheckButton(title: string, value: boolean): TitleCheckButton;
    /**
     * @method addLink
     * 增加一个超链接控件。
     * @param {string} title 标题。
     * @param {string} value URL。
     * @return {TitleLink} 返回新创建的TitleLink控件。
     */
    addLink(title: string, value: string): TitleLink;
    /**
     * @method addGroupBegin
     * 增加一个分组开始控件。
     * @param {string} title 标题。
     * @return {TitleLine} 返回新创建的TitleLine控件。
     */
    addGroupBegin(title: string): TitleLine;
    /**
     * @method addGroupEnd
     * 增加一个分组结束控件。
     * @return {TitleLine} 返回新创建的TitleLine控件。
     */
    addGroupEnd(): TitleLine;
    /**
     * @method addRange
     * 增加一个范围控件。
     * @param {string} title 标题。
     * @param {number} firstValue 起始值
     * @param {number} secondValue 结束值
     * @return {TitleRange} 返回新创建的TitleRange控件。
     */
    addRange(title: string, firstValue?: number, secondValue?: number): TitleRange;
    /**
     * @method addVector2
     * 增加一个二维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    addVector2(title: string, x?: number, y?: number, xTitle?: string, yTitle?: string): TitleVector;
    /**
     * @method addVector3
     * 增加一个三维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {number} z Z分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @param {string} zTitle Z分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    addVector3(title: string, x?: number, y?: number, z?: number, xTitle?: string, yTitle?: string, zTitle?: string): TitleVector;
    /**
     * @method addVector4
     * 增加一个四维向量控件。
     * @param {string} title 标题。
     * @param {number} x X分量。
     * @param {number} y Y分量。
     * @param {number} z Z分量。
     * @param {number} w W分量。
     * @param {string} xTitle X分量标题。
     * @param {string} yTitle X分量标题。
     * @param {string} zTitle Z分量标题。
     * @param {string} wTitle W分量标题。
     * @return {TitleVector} 返回新创建的TitleVector控件。
     */
    addVector4(title: string, x?: number, y?: number, z?: number, w?: number, xTitle?: string, yTitle?: string, zTitle?: string, wTitle?: string): TitleVector;
    /**
     * @method addEdit
     * 增加一个编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @param {string} inputType 输入类型，"text"为文本，"number"为数字。
     * @param {Function} inputFilter输入过滤器，对输入的值进行过滤。
     * @return {TitleEdit} 返回新创建的TitleEdit控件。
     */
    addEdit(title: string, value?: string, inputTips?: string, inputType?: string, inputFilter?: Function): TitleEdit;
    /**
     * @method addColorEdit
     * 增加一个颜色编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
     */
    addColorEdit(title: string, value?: string, inputTips?: string): TitleChoosableEdit;
    /**
     * @method addChoosableEdit
     * 增加一个可选择的编辑控件。
     * @param {string} title 标题。
     * @param {string} value 编辑器的值。
     * @param {string} inputTips 输入提示。
     * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
     */
    addChoosableEdit(title: string, value?: string, inputTips?: string): TitleChoosableEdit;
    /**
     * @method addComboBox
     * 增加一个下拉选择控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleComboBox} 返回新创建的TitleComboBox控件。
     */
    addComboBox(title: string, value?: string): TitleComboBox;
    /**
     * @method addComboBoxEditable
     * 增加一个可编辑的下拉选择控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleComboBoxEditable} 返回新创建的TitleComboBoxEditable控件。
     */
    addComboBoxEditable(title: string, value?: string): TitleComboBoxEditable;
    /**
     * @method addSlider
     * 增加一个滑块控件。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @return {TitleSlider} 返回新创建的TitleSlider控件。
     */
    addSlider(title: string, value?: string): TitleSlider;
    /**
     * @method addTextArea
     * 增加一个多行编辑器。
     * @param {string} title 标题。
     * @param {string} value 值。
     * @param {number} h高度。
     * @return {TitleTextArea} 返回新创建的TitleTextArea控件。
     */
    addTextArea(title: string, value?: string, h?: number): TitleTextArea;
    /**
     * @method findByTitle
     * 通过标题查找指定的子控件。
     * @param {string} title 标题。
     * @return {Widget} 返回子控件或null。
     */
    findByTitle(title: string): Widget;
    protected addWithPropDesc(item: PropDesc): void;
    /**
     * 通过propsDesc初始化。
     */
    initWithPropsDesc(propsDesc: PropsDesc): void;
    /**
     * 通过JSON初始化。
     */
    initWithJson(json: any): void;
    protected onAddChild(child: Widget): void;
    protected onRemoveChild(child: Widget): void;
    protected recomputeHeight(): Widget;
    relayoutChildren(): Rect;
    constructor();
    protected static defProps: {} & {
        _x: number;
        _y: number;
        _z: number;
        _w: number;
        _h: number;
        _state: number;
        _value: number;
        _enable: boolean;
        _visible: boolean;
        _selected: boolean;
        _opacity: number;
        _scaleX: number;
        _scaleY: number;
        _pivotX: number;
        _pivotY: number;
        _rotation: number;
        _sensitive: boolean;
        _tips: any;
        _text: any;
        _name: any;
        _hitTestResult: number;
        _isWindow: boolean;
        _mode: number;
        _styleType: any;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _bp: number;
        _itemH: number;
        _titleW: string;
        _valueW: string;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static rBin;
    static create(options?: any): PropertyPage;
}
