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
    customDraw: CustomItemDrawFunc;
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
    protected _ih: number;
    protected _current: ComboBoxOption;
    protected _isPopupOpened: boolean;
    protected _options: Array<ComboBoxOption>;
    protected _customItemDraw: CustomItemDrawFunc;
    customItemDraw: CustomItemDrawFunc;
    readonly inputable: boolean;
    itemH: number;
    value: any;
    resetOptions(): Widget;
    readonly optionsCount: number;
    addOption(text: string, value?: any, imageURL?: string, color?: string): Widget;
    protected onItemSelected(data: ComboBoxOption): void;
    protected showPopup(): void;
    protected onBindProp(prop: string, value: any): void;
    protected onReset(): void;
    protected onToJson(json: any): void;
    onFromJson(json: any): void;
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
        _ih: number;
        _lp: number;
        _rp: number;
    };
    protected getDefProps(): any;
    constructor(type?: string);
}
export declare type CustomDrawFunc = (ctx: any, style: Style, rect: Rect, data: ComboBoxOption) => void;
export declare type CustomItemDrawFunc = (ctx: any, style: Style, rect: Rect, data: ComboBoxOption) => void;
export declare class ComboBox extends ComboBoxBase {
    protected _customDraw: CustomDrawFunc;
    customDraw: CustomDrawFunc;
    readonly text: string;
    protected getFgImageRect(style: Style): Rect;
    protected drawText(ctx: any, style: Style): Widget;
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
