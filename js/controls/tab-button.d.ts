import { Rect } from "../rect";
import { Style } from "../style";
import { Widget } from "./widget";
import { TabPage } from "./tab-page";
import { Orientation } from "../consts";
import { RadioButton } from "./radio-button";
import { ImageTile } from "../image-tile";
/**
 * 标签控件上的标签按钮。
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
    readonly closeButton: Widget;
    closeButtonAtLeft: boolean;
    orientation: Orientation;
    setIcons(normalIconURL: string, currentIconURL: string): void;
    closable: boolean;
    relayoutChildren(): Rect;
    readonly desireWidth: number;
    tabPage: TabPage;
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
