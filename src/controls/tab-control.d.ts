import { Rect } from "../rect";
import { Pages } from "./pages";
import { Widget } from "./widget";
import { TabPage } from "./tab-page";
import { Orientation } from "../consts";
import { TabButtonGroup } from "./tab-button-group";
export declare class TabControl extends Widget {
    protected _pages: Pages;
    protected _orientation: Orientation;
    protected _buttonGroupAtTop: boolean;
    protected _buttonGroup: TabButtonGroup;
    protected _buttonGroupHeight: number;
    value: number;
    readonly pages: Pages;
    readonly buttonGroup: TabButtonGroup;
    buttonGroupAtTop: boolean;
    buttonGroupHeight: number;
    removePage(tabPage: TabPage, destroy?: boolean): void;
    addPage(title: string, normalIconURL?: string, currentIconURL?: string, closable?: boolean, closeButtonAtLeft?: boolean): TabPage;
    relayoutChildren(): Rect;
    constructor();
    reset(type: string): Widget;
    dispose(): void;
    static TYPE: string;
    private static r;
    static create(options?: any): TabControl;
}
