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
