import { Rect } from "../rect";
import { Style } from "../style";
import { Edit } from "./edit";
import { Button } from "./button";
import { Widget } from "./widget";
import { ListItem } from "./list-item";
import { ImageTile } from "../image-tile";
export declare class ComboBoxOption {
    value: any;
    text: string;
    color: string;
    image: ImageTile;
    isDefault: boolean;
    constructor(text: string, value?: any, imageURL?: string, color?: string);
}
export declare class ComboBoxItem extends ListItem {
    data: ComboBoxOption;
    constructor();
    protected onReset(): void;
    readonly text: string;
    protected getStyleType(): string;
    protected drawText(ctx: any, style: Style): Widget;
    static TYPE: string;
    private static r;
    static create(options?: any): ComboBoxItem;
}
export declare abstract class ComboBoxBase extends Widget {
    protected _value: any;
    protected _itemHeight: number;
    protected _current: ComboBoxOption;
    protected _isPopupOpened: boolean;
    protected _options: Array<ComboBoxOption>;
    readonly inputable: boolean;
    itemHeight: number;
    value: any;
    resetOptions(): Widget;
    readonly optionsCount: number;
    addOption(text: string, value?: any, imageURL?: string, color?: string): Widget;
    protected onItemSelected(data: ComboBoxOption): void;
    protected showPopup(): void;
    protected onBindProp(prop: string, value: any): void;
    protected onReset(): void;
    constructor(type?: string);
}
export declare class ComboBox extends ComboBoxBase {
    readonly text: string;
    protected getFgImageRect(style: Style): Rect;
    protected dispatchClick(evt: any): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ComboBox;
}
export declare class ComboBoxEditable extends ComboBoxBase {
    protected _edit: Edit;
    protected _button: Button;
    value: any;
    protected onItemSelected(data: ComboBoxOption): void;
    relayoutChildren(): Rect;
    dispose(): void;
    protected onReset(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ComboBoxEditable;
}
