import { CheckButton } from "./check-button";
/**
 * 单选按钮。同一个父控件中，只有一个单选按钮被勾选。被勾选时value为true，否则为false。
 */
export declare class RadioButton extends CheckButton {
    constructor(type?: string);
    value: boolean;
    static TYPE: string;
    private static r;
    static create(options?: any): RadioButton;
}
