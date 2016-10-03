import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { ImageTile } from "../image-tile";
export declare enum ListItemStyle {
    NORMAL = 0,
    FIRST = 1,
    LAST = 2,
}
export declare class ListItem extends Widget {
    listItemStyle: ListItemStyle;
    protected _icon: ImageTile;
    protected _iconURL: string;
    constructor(type?: string);
    iconURL: string;
    protected drawBackground(ctx: any, style: Style): Widget;
    protected drawImage(ctx: any, style: Style): Widget;
    protected getTextRect(style: Style): Rect;
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
    protected dispatchClick(evt: any): void;
    value: boolean;
    constructor(type?: string);
    static TYPE: string;
    private static rBin;
    static create(options?: any): ListItemCheckable;
}
