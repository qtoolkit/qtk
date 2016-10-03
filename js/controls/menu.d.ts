import { Style } from "../style";
import { Dialog } from "./dialog";
import { ListView } from "./list-view";
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
import { Widget } from "./widget";
import { ImageTile } from "../image-tile";
export declare class Menu extends Dialog {
    protected _owner: Widget;
    protected _trigger: Widget;
    protected _openedMenu: Menu;
    protected _listView: ListView;
    openedMenu: Menu;
    hasItems(): boolean;
    itemHeight: number;
    /**
     * owner代表上级菜单或菜单条。
     */
    owner: Widget;
    /**
     * 触发该菜单的MenuBarItem或MenuItem。
     */
    trigger: Widget;
    onItemEnter(child: MenuItem): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    constructor();
    clearContent(): Widget;
    resizeToContent(): Widget;
    open(): Widget;
    protected dispatchClick(evt: any): void;
    addSpace(): Widget;
    addCheckableItem(text: string, onClick: Function, value?: boolean, shortcut?: string): Widget;
    addItem(text: string, onClick: Function, iconURL?: string, shortcut?: string): Widget;
    addFolderItem(text: string, onInitSubMenu: Function): Widget;
    addItemExt(text: string, iconURL: string, shortcut?: string, onInitSubMenu?: Function): Widget;
    protected onReset(): void;
    dispose(): void;
    static TYPE: string;
    private static r;
    static create(options?: any): Menu;
}
export declare class MenuItem extends Widget {
    protected _icon: ImageTile;
    protected _iconURL: string;
    protected _shortCutStyle: Style;
    shortcut: string;
    checkable: boolean;
    onInitSubMenu: Function;
    iconURL: string;
    protected dispatchClick(evt: any): void;
    protected drawImage(ctx: any, style: Style): Widget;
    protected drawText(ctx: any, style: Style): Widget;
    reopenSubMenu(menu: Menu): void;
    openSubMenu(): void;
    closeMenu(): void;
    constructor();
    protected onReset(): void;
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
        checkable: boolean;
        shortcut: any;
        _lp: number;
        _rp: number;
    };
    protected getDefProps(): any;
    dispose(): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): MenuItem;
}
