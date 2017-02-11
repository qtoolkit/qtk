import { Style } from "../style";
import { Widget } from "./widget";
import { ImageTile } from "../image-tile";
/**
 * @class ToolBarItem
 * @extends Widget
 * 工具条上的图标按钮。一般不需直接创建，而是调用ToolBar的addItem函数。
 */
export declare class ToolBarItem extends Widget {
    constructor(type?: string);
    protected drawImage(ctx: any, style: Style): Widget;
    protected onCreated(): void;
    protected normalIconURL: string;
    protected disableIconURL: string;
    protected normalIcon: ImageTile;
    protected disableIcon: ImageTile;
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
        normalIconURL: any;
        disableIconURL: any;
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ToolBarItem;
}
/**
 * @class ToolBar
 * @extends Widget
 * 工具条。一般显示在主菜单下方，为用户提供一种便捷的操作。
 */
export declare class ToolBar extends Widget {
    protected onInit(): void;
    /**
     * @method addSpacer
     * 向ToolBar中增加一个占位符。
     * @param {number} width 宽度。
     *
     * return {Widget} 返回增加的控件。
     */
    addSpacer(width: number): Widget;
    /**
     * @method addItem
     * 向ToolBar中增加一个按钮。
     * @param {string} cmd 命令名称。
     * @param {string} text 文字。
     * @param {string} tips 提示。
     * @param {normalIconURL} 图标URL。
     * @param {disableIconURL} 禁用时的图标URL。
     *
     * return {Widget} 返回增加的控件。
     */
    addItem(cmd: string, text: string, tips: string, normalIconURL: string, disableIconURL: string): Widget;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ToolBar;
}
