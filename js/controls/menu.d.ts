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
    reset(type: string): Widget;
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
    reset(type: string): Widget;
    dispose(): void;
    static TYPE: string;
    private static recycleBin;
    static create(): MenuItem;
}
