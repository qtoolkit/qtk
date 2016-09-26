import { Style } from "../style";
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
    reset(type: string): Widget;
    readonly text: string;
    protected getStyleType(): string;
    protected drawText(ctx: any, style: Style): Widget;
    static TYPE: string;
    private static r;
    static create(options?: any): ComboBoxItem;
}
export declare class ComboBox extends Widget {
    protected _value: any;
    protected _current: ComboBoxOption;
    protected _isPopupOpened: boolean;
    protected _options: Array<ComboBoxOption>;
    protected _itemHeight: number;
    itemHeight: number;
    readonly text: string;
    value: any;
    resetOptions(): Widget;
    addOption(text: string, value?: any, imageURL?: string, color?: string): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    protected dispatchClick(evt: any): void;
    protected onItemSelected(data: ComboBoxOption): void;
    protected showPopup(): void;
    reset(type: string): Widget;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ComboBox;
}
