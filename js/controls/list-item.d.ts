import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { ImageTile } from "../image-tile";
export declare enum ListItemStyle {
    NORMAL = 0,
    FIRST = 1,
    LAST = 2,
}
/**
 * 列表项。
 */
export declare class ListItem extends Widget {
    listItemStyle: ListItemStyle;
    protected _icon: ImageTile;
    protected _iconURL: string;
    protected _index: number;
    protected _oddEvenStyle: boolean;
    /**
     * 奇数行和偶数行是否采用不同的风格。
     */
    oddEvenStyle: boolean;
    protected getStyleType(): string;
    relayoutChildren(): Rect;
    iconURL: string;
    protected drawBackground(ctx: any, style: Style): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    protected getTextRect(style: Style): Rect;
    constructor(type?: string);
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
        _oddEvenStyle: boolean;
        _iconURL: any;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ListItem;
}
export declare class ListItemCheckable extends ListItem {
    protected _multiCheckable: boolean;
    multiCheckable: boolean;
    protected drawImage(ctx: any, style: Style): Widget;
    dispatchClick(evt: any): void;
    value: boolean;
    constructor(type?: string);
    static TYPE: string;
    private static rBin;
    static create(options?: any): ListItemCheckable;
}
