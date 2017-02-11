import { Rect } from "../rect";
import { Pages } from "./pages";
import { Widget } from "./widget";
import { TabPage } from "./tab-page";
import { Orientation } from "../consts";
import { TabButtonGroup } from "./tab-button-group";
/**
 * @class TabControl
 * @extends Widget
 * 标签控件。
 */
export declare class TabControl extends Widget {
    protected _pages: Pages;
    protected _orientation: Orientation;
    protected _bgAtTop: boolean;
    protected _bgh: number;
    protected _buttonGroup: TabButtonGroup;
    /**
     * @property {number} value
     * 标签控件的值代表当前标签页的索引。可以修改value来指定当前的标签页，也可以用activePage来指定当前的标签页。
     */
    value: number;
    /**
     * @property {TabPage} activePage
     * 当前的标签页。
     */
    activePage: TabPage;
    /**
     * @property {Pages} pages
     * 标签页的集合。
     */
    readonly pages: Pages;
    /**
     * @property {TabButtonGroup} buttonGroup
     * 标签按钮的集合。
     */
    readonly buttonGroup: TabButtonGroup;
    /**
     * @property {boolean} expandButton
     * 是否扩展标签按钮的宽度。如果为false，则根据当前的标题和图标计算标签按钮的宽度，否则所有标签按钮平分button group的宽度。
     */
    expandButton: boolean;
    /**
     * @property {boolean} buttonGroupAtTop
     * true表示标签按钮组的位置在顶部，否则在底部。
     */
    buttonGroupAtTop: boolean;
    /**
     * @property {number} buttonGroupHeight
     * 标签按钮组的高度。
     */
    buttonGroupHeight: number;
    /**
     * @method setPageTitle
     * 设置指定TabPage的标题。
     * return {TabControl} 控件本身。
     */
    setPageTitle(tabPage: TabPage, title: string): TabControl;
    /**
     * @method getPageTitle
     * 获取指定TabPage的标题。
     */
    getPageTitle(tabPage: TabPage): string;
    /**
     * @method onClosePage
     * 在点击标签按钮上的关闭按钮时会调用此函数，子类可以重载本函数，以提供关闭确认之类的功能。
     */
    protected onClosePage(tabPage: TabPage): void;
    /**
     * @method removePage
     * 移除指定的标签页，相应的标签按钮也会移出。
     * @param {TabPage} tabPage 要移出的标签页。
     * @param {boolean} destroy 是否移出该标签页。
     *
     * return {TabControl} 控件本身。
     */
    removePage(tabPage: TabPage, destroy?: boolean): TabControl;
    /**
     * @method addPage
     * 向标签控件中增加一个标签页。
     * @param {string} title 标题，作为标签按钮的文本。
     * @param {string} normalIconURL 正常时的图标的URL。
     * @param {string} currentIconURL 处于当前页时的图标的URL。
     * @param {boolean} closable 是否显示关闭按钮。
     * @param {boolean} closeButtonAtLeft 如果显示关闭按钮，关闭按钮是否显示在左边。
     *
     * @return {TabPage} 返回被创建的TabPage。
     */
    addPage(title: string, normalIconURL?: string, currentIconURL?: string, closable?: boolean, closeButtonAtLeft?: boolean): TabPage;
    relayoutChildren(): Rect;
    constructor();
    protected onReset(): void;
    dispose(): void;
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
        _bgh: number;
        _bgAtTop: boolean;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static r;
    static create(options?: any): TabControl;
}
