import { Rect } from "../rect";
import { Edit } from "../controls/edit";
import { Button } from "../controls/button";
import { Widget } from "../controls/widget";
/**
 * @class ChoosableEdit
 * @extends Widget
 * 编辑器+选择按钮。
 */
export declare class ChoosableEdit extends Widget {
    protected _edit: Edit;
    protected _button: Button;
    protected _inputTips: string;
    /**
     * @property {Function} onChoose
     * 点击选择按钮时，会调用该回调函数。
     */
    onChoose: Function;
    inputTips: string;
    value: any;
    dataBindingRule: any;
    relayoutChildren(): Rect;
    dispose(): void;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static rBin;
    static create(options?: any): ChoosableEdit;
}
