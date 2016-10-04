import { Widget } from "../controls/widget";
import { TitleValue } from "./title-value";
export declare class TitleComboBoxBase extends TitleValue {
    constructor(type: string);
    itemH: number;
    resetOptions(): Widget;
    addOption(text: string, value?: any, imageURL?: string, color?: string): Widget;
}
export declare class TitleComboBox extends TitleComboBoxBase {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleComboBox;
}
export declare class TitleComboBoxEditable extends TitleComboBoxBase {
    constructor(type?: string);
    protected createValueWidget(options?: any): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): TitleComboBoxEditable;
}
