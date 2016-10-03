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
        _focusable: boolean;
        _sensitive: boolean;
        _tips: any;
        _text: any;
        _name: any;
        _tag: any;
        _hitTestResult: number;
        _isWindow: boolean;
        _mode: number;
        _styleType: any;
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
    } & {
        _itemH: number;
        _titleW: string;
        _valueW: string;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static rBin;
    static create(options?: any): PropertyPage;
}
