import { Menu } from "./menu";
import { Style } from "../style";
import { Widget } from "./widget";
import { ImageTile } from "../image-tile";
export declare class MenuBar extends Widget {
    protected _openedMenu: Menu;
    protected _itemWidth: number;
    constructor();
    openedMenu: Menu;
    itemWidth: number;
    onItemEnter(child: MenuBarItem): void;
    addChild(child: Widget, fastMode?: boolean): Widget;
    addSpace(width?: number, position?: number): Widget;
    addLogo(iconURL: any): Widget;
    addItem(text: string, onInitSubMenu: Function, width?: number, position?: number): Widget;
    addTextButton(text: string, onClick: Function, width?: number, position?: number): Widget;
    addImageButton(normalIconURL: string, overIconURL: string, activeIconURL: string, disableIconURL: string, checkedIconURL: string, onClick: Function, position?: number): Widget;
    reset(type: string): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): MenuBar;
}
export declare class MenuBarItem extends Widget {
    onInitSubMenu: Function;
    protected _normalIcon: ImageTile;
    protected _overIcon: ImageTile;
    protected _activeIcon: ImageTile;
    protected _disableIcon: ImageTile;
    protected _checkedIcon: ImageTile;
    setIcons(normalIconURL: string, overIconURL?: string, activeIconURL?: string, disableIconURL?: string, checkedIconURL?: string): void;
    protected drawImage(ctx: any, style: Style): Widget;
    reopenMenu(menu: Menu): void;
    protected openMenu(): void;
    protected dispatchClick(evt: any): void;
    constructor();
    dispose(): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): MenuBarItem;
}
