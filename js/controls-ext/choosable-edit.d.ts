import { Rect } from "../rect";
import { Edit } from "../controls/edit";
import { Button } from "../controls/button";
import { Widget } from "../controls/widget";
/**
 * 编辑器+选择按钮。
 */
export declare class ChoosableEdit extends Widget {
    protected _edit: Edit;
    protected _button: Button;
    protected _inputTips: string;
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
