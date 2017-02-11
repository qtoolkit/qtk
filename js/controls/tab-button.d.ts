import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { TabPage } from "./tab-page";
import { Orientation } from "../consts";
import { RadioButton } from "./radio-button";
import { ImageTile } from "../image-tile";
/**
 * @class TabButton
 * @extends Widget
 * 标签控件上的标签按钮，一般不需要直接使用它。它其实是单项按钮，只有一个按钮处于active状态下，用来指示当前页面。
 */
export declare class TabButton extends RadioButton {
    protected _normalIcon: ImageTile;
    protected _currentIcon: ImageTile;
    protected _normalIconURL: string;
    protected _currentIconURL: string;
    protected _tabPage: TabPage;
    protected _closeButton: Widget;
    protected _orn: Orientation;
    protected _cbAtLeft: boolean;
    /**
     * @property {Widget}  closeButton
     * 关闭按钮（仅当closable为true时才有效）。
     */
    readonly closeButton: Widget;
    /**
     * @property {boolean}  closeButtonAtLeft
     * true表示关闭按钮在左边，false表示关闭按钮在右边。
     */
    closeButtonAtLeft: boolean;
    /**
     * @property {Orientation}  Orientation
     * 按钮上的文字和图标排列的方向。Orientation.H表示水平方向上排列，Orientation.V表示垂直方向上排列。
     */
    orientation: Orientation;
    /**
     * @property {boolean}  closable
     * 表示当前标签是否可关闭，如果可关闭，则会显示一个小的关闭按钮。
     */
    closable: boolean;
    /**
     * @property {TabPage} tabPage
     * 与当前按钮关联的TabPage。
     */
    tabPage: TabPage;
    /**
     * @method setIcons
     * 设置图标。
     * @param {string} normalIconURL 正常情况下的图标URL。
     * @param {string} currentIconURL 处于active时的图标URL。
     * return {TabButton} 控件本身。
     */
    setIcons(normalIconURL: string, currentIconURL: string): TabButton;
    relayoutChildren(): Rect;
    readonly desireWidth: number;
    protected getStyleType(): string;
    protected drawImage(ctx: any, style: Style): Widget;
    protected drawText(ctx: any, style: Style): Widget;
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
        _lp: number;
        _tp: number;
        _rp: number;
        _bp: number;
        _normalIconURL: any;
        _currentIconURL: any;
        closable: boolean;
        _cbAtLeft: boolean;
        _orn: Orientation;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static re;
    static create(options?: any): TabButton;
}
