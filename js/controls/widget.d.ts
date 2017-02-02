/// <reference path="../../typings/globals/tween.js/index.d.ts" />
/// <reference path="../../typings/globals/eventemitter3/index.d.ts" />
import { Rect } from "../rect";
import { Point } from "../point";
import { Style } from "../style";
import { Canvas } from "../canvas";
import { Window } from "./window";
import TWEEN = require("tween.js");
import { Emitter } from "../emitter";
import Events = require("../events");
import { IMainLoop } from "../imain-loop";
import { MatrixStack } from "../matrix-stack";
import { IApplication } from "../iapplication";
import { IThemeManager } from "../itheme-manager";
import { DirtyRectContext } from "../dirty-rect-context";
import { Behavior } from "../behaviors/behavior";
import { Layouter } from '../layouters/layouter';
import { IViewModel, BindingMode } from "../mvvm/iview-model";
import { BindingRule, BindingDataSource } from "../mvvm/binding-rule";
/**
 * @enum WidgetMode
 * 控件当前的运行模式。
 */
export declare enum WidgetMode {
    /**
     * @property {number}
     * 运行模式
     */
    RUNTIME = 0,
    /**
     * @property {number}
     * 设计模式
     */
    DESIGN = 1,
}
/**
 * @enum WidgetState
 * 控件的状态
 */
export declare enum WidgetState {
    /**
     * @property {number}
     * 正常状态。
     */
    NORMAL = 0,
    /**
     * @property {number}
     * Pointer在控件上。
     */
    OVER = 1,
    /**
     * @property {number}
     * Pointer按下的状态。
     */
    ACTIVE = 2,
    /**
     * @property {number}
     * 禁用状态。
     */
    DISABLE = 3,
    /**
     * @property {number}
     * 选中状态。只对部分设备有效。
     */
    SELECTED = 4,
}
/**
 * @enum HitTestResult
 * 点击测试结果。
 */
export declare enum HitTestResult {
    /**
     * @property {number}
     * 点击在控件之外。
     */
    NONE = 0,
    /**
     * @property {number}
     * 点击在控件左上角。
     */
    TL = 1,
    /**
     * @property {number}
     * 点击在控件上面中间。
     */
    TM = 2,
    /**
     * @property {number}
     * 点击在控件右上角。
     */
    TR = 3,
    /**
     * @property {number}
     * 点击在控件左边中间。
     */
    ML = 4,
    /**
     * @property {number}
     * 点击在控件中间区域。
     */
    MM = 5,
    /**
     * @property {number}
     * 点击在控件右边中间。
     */
    MR = 6,
    /**
     * @property {number}
     * 点击在控件左下角。
     */
    BL = 7,
    /**
     * @property {number}
     * 点击在控件下面中间。
     */
    BM = 8,
    /**
     * @property {number}
     * 点击在控件右下角。
     */
    BR = 9,
}
/**
 * @class Widget
 * Widget是所有控件的基类。
 */
export declare class Widget extends Emitter {
    constructor(type: string);
    /**
     * @method set
     * 同时设置多个属性。
     */
    set(props?: any): Widget;
    get(props?: any): Widget;
    /**
     * 把全局的坐标转换成相对于当前控件左上角的坐标。
     * @param {Pointer} p 全局坐标。
     * @return {Pointer} 相对于当前控件左上角的坐标。
     */
    toLocalPoint(p: Point): Point;
    /**
     * 把Pointer事件的坐标转换成相对于当前控件左上角的坐标。
     * @param {Pointer} p Pointer事件的坐标。
     * @return {Pointer} 相对于当前控件左上角的坐标。
     */
    eventPointToLocal(p: Point): Point;
    /**
     * 把相对于当前控件左上角的坐标转换成全局坐标。
     * @param {Point} p 相对于当前控件左上角的坐标。
     * @return {Point} 全局坐标。
     */
    toGlobalPoint(p: Point): Point;
    /**
     * 把相对于当前控件左上角的坐标转换成屏幕上的坐标。
     * @param {Point} p 相对于当前控件左上角的坐标。
     * @return {Point}  屏幕上的坐标。
     */
    toViewPoint(p: Point): Point;
    protected onInit(): void;
    init(): Widget;
    protected onDeinit(): void;
    deinit(): void;
    dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerMoveToTarget(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerLeave(evt: Events.PointerEvent): void;
    dispatchPointerEnter(evt: Events.PointerEvent): void;
    dispatchPointerMoveToUnder(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerUp(evt: Events.PointerEvent): void;
    dispatchClick(evt: any): void;
    dispatchContextMenu(evt: any): void;
    dispatchDblClick(evt: any): void;
    dispatchKeyDown(evt: any): void;
    dispatchKeyUp(evt: any): void;
    dispatchWheel(evt: any): void;
    protected applyTransform(ctx: MatrixStack): Widget;
    protected findEventTargetChild(x: number, y: number, ctx: MatrixStack): Widget;
    animate(): TWEEN.Tween;
    /**
     * @method scaleTo
     * 设置控件的缩放比例到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} sx 宽度缩放比例。
     * @param {number} sy 高度缩放比例。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    scaleTo(sx: number, sy: number, duration?: number): TWEEN.Tween;
    /**
     * @method opacityTo
     * 设置控件的透明度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} opacity 不透明度[0-1]
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    opacityTo(opacity: number, duration?: number): TWEEN.Tween;
    /**
     * @method rotateTo
     * 设置控件的旋转角度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} rotation 旋转角度，单位为弧度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    rotateTo(rotation: number, duration?: number): TWEEN.Tween;
    /**
     * @method moveTo
     * 设置控件的位置到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} x X 坐标。
     * @param {number} y Y 坐标。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    moveTo(x: number, y: number, duration?: number): TWEEN.Tween;
    /**
     * @method moveResizeTo
     * 设置控件的位置和大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} x X 坐标。
     * @param {number} y Y 坐标。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    moveResizeTo(x: number, y: number, w: number, h: number, duration?: number): TWEEN.Tween;
    /**
     * @method resizeTo
     * 设置控件的大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
     * @param {number} w 宽度。
     * @param {number} h 高度。
     * @param {number} duration 动画时间。
     * @return {TWEEN.Tween}
     */
    resizeTo(w: number, h: number, duration?: number): TWEEN.Tween;
    protected layoutRect: Rect;
    protected getLayoutRect(): Rect;
    /**
     * 根据当前的childrenLayouter重新布局子控件。
     */
    relayoutChildren(): Rect;
    /**
     * 请求重新布局当前控件。
     */
    requestRelayout(): Widget;
    createChildLayoutParam(options: any): any;
    /**
     * 启用指定的childrenLayouter。
     */
    useChildrenLayouter(type: string, options: any): Widget;
    /**
     * @property {Layouter} childrenLayouter
     * 用于子控件布局的Layouter。
     */
    childrenLayouter: Layouter;
    /**
     * @property {Object} layoutParam
     * 布局参数是父控件在布局当前控件时使用的参数。
     */
    layoutParam: any;
    /**
     * @method indexOfChild
     * 获取指定子控件的位置序数。
     * @param {Widget} child 子控件
     * @return {number} 位置序数。
     */
    indexOfChild(child: Widget): number;
    /**
     * @method findChild
     * 查找满足指定条件的子控件。
     * @param {Function} func 比较函数。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
    findChild(func: Function): Widget;
    /**
     * @method findChildByName
     * 按名称查找子控件。
     * @param {string} name 子控件的名称。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
    findChildByName(name: string): Widget;
    /**
     * @method findChildByID
     * 按ID查找子控件。
     * @param {string} id 子控件的ID。
     * @return {Widget} 如果找到，返回该子控件，否则返回null。
     */
    findChildByID(id: string): Widget;
    protected drawColorBackground(ctx: any, style: Style): Widget;
    protected drawBackground(ctx: any, style: Style): Widget;
    /**
     * @method getLocaleText
     * 获取本地化后的文本。
     */
    getLocaleText(): string;
    protected getFgImageRect(style: Style): Rect;
    protected drawImage(ctx: any, style: Style): Widget;
    protected getTextRect(style: Style): Rect;
    protected drawText(ctx: any, style: Style): Widget;
    protected drawChildren(ctx: any): Widget;
    protected drawTips(ctx: any, style: Style): Widget;
    protected computeDirtyRectSelf(ctx: DirtyRectContext): void;
    computeDirtyRect(ctx: DirtyRectContext): void;
    computeChildrenDirtyRect(ctx: DirtyRectContext): void;
    protected doDraw(ctx: any, style: Style): void;
    draw(ctx: any): void;
    stateToString(state: WidgetState): string;
    /**
     * @property {string} styleType
     * 用于从主题中获取style数据。
     */
    styleType: string;
    /**
     * @method setStyle
     * 设置控件的Style。
     * @param {WidgetState} state 状态。
     * @param {Style} style 控件的Style。
     * return {Widget} 控件本身。
     */
    setStyle(state: WidgetState, style: Style): Widget;
    protected getStyleType(): string;
    getStyleOfState(state: WidgetState): Style;
    protected getStateForStyle(): WidgetState;
    getStyle(): Style;
    sortChildren(): Widget;
    /**
     * @method removeAllChildren
     * 移出并销毁所有的子控件。
     * return {Widget} 控件本身。
     */
    removeAllChildren(): Widget;
    protected onRemoveChild(child: Widget): void;
    /**
     * @method removeChild
     * 移出子控件。批量删除时，请使用快速模式，并在完成时调用relayoutChildren。
     * @param {Widget} child 子控件。
     * @param {boolean} fastMode 快速模式下，不重新布局子控件。
     * @param {boolean} destroy 是否销毁子控件。
     * return {Widget} 控件本身。
     */
    removeChild(child: Widget, fastMode?: boolean, destroy?: boolean): Widget;
    protected onAddChild(child: Widget): void;
    /**
     * @method addChild
     * 增加子控件。批量增加时，请使用快速模式，并在完成时调用relayoutChildren。
     * @param {Widget} child 子控件。
     * @param {boolean} fastMode 快速模式下，不重新布局子控件。
     * return {Widget} 控件本身。
     */
    addChild(child: Widget, fastMode?: boolean): Widget;
    /**
     * @method dispose
     * 销毁控件及其全部子控件。
     */
    dispose(): void;
    /**
     * @method requestRedraw
     * 请求重绘。
     */
    requestRedraw(): Widget;
    createCanvas(): Widget;
    readonly dirty: boolean;
    /**
     * @property {number} x
     * 控件的X坐标。
     */
    x: number;
    /**
     * @property {number} y
     * 控件的Y坐标。
     */
    y: number;
    /**
     * @property {number} z
     * 控件的位置序数。
     */
    z: number;
    /**
     * @property {number} w
     * 控件的宽度。
     */
    readonly desireWidth: number;
    w: number;
    width: number;
    readonly clientW: number;
    readonly clientH: number;
    /**
     * @property {number} h
     * 控件的高度。
     */
    height: number;
    h: number;
    /**
     * @property {WidgetState} state
     * 控件的状态。
     */
    state: WidgetState;
    /**
     * @property {any} value
     * 控件的值。不同的控件，值的定义不一样。
     */
    value: any;
    /**
     * @property {boolean} selected
     * 控件是否被选中。
     */
    selected: boolean;
    protected _isEnableFunc: Function;
    isEnableFunc: Function;
    /**
     * @property {boolean} enable
     * 控件是否处于enable状态。
     */
    enable: any;
    /**
     * @property {boolean} inputable
     * [只读] 控件是否可输入，也就是是否可以通过界面修改它的值。
     */
    readonly inputable: boolean;
    /**
     * @property {boolean} visible
     * 控件是否可见。
     */
    visible: boolean;
    setVisible(value: any): void;
    /**
     * @property {number} opacity
     * 控件的不透明度(0-1)。
     */
    opacity: number;
    /**
     * @property {number} scaleX
     * 控件的宽度缩放比例。
     */
    scaleX: number;
    /**
     * @property {number} scaleY
     * 控件的高度缩放比例。
     */
    scaleY: number;
    /**
     * @property {number} rotation
     * 控件的旋转角度。
     */
    rotation: number;
    /**
     * @property {number} sensitive
     * 控件是否接受用户事件。
     */
    sensitive: boolean;
    /**
     * @property {number} pivotX
     * 控件的X轴点，也就旋转点的X坐标。
     */
    pivotX: number;
    /**
     * @property {number} pivotY
     * 控件的Y轴点，也就旋转点的Y坐标。
     */
    pivotY: number;
    /**
     * @property {string} tips
     * 控件的提示文本。
     */
    tips: string;
    /**
     * @property {string} text
     * 控件的文本。
     */
    text: any;
    /**
     * @property {string} name
     * 控件的名称。
     */
    name: string;
    /**
     * @property {string} type
     * 控件的类型。
     */
    type: string;
    /**
     * @property {string} id
     * 控件的ID。
     */
    readonly id: string;
    /**
     * @property {any} userData
     * 控件的应用数据。
     */
    userData: any;
    target: Widget;
    hitTestResult: HitTestResult;
    /**
     * @property {Widget} parent
     * 控件的父控件。
     */
    parent: Widget;
    /**
     * @property {IApplication} app
     * 应用程序。
     */
    app: IApplication;
    /**
     * @property {Window} win
     * 控件所在的窗口。
     */
    readonly win: Window;
    /**
     * @property {Array<Widget>} children
     * 控件的全部子控件。
     */
    readonly children: Array<Widget>;
    readonly canvas: Canvas;
    isWindow(): boolean;
    /**
     * @property {number} leftPadding
     * 控件的左边界。
     */
    leftPadding: number;
    /**
     * @property {number} rightPadding
     * 控件的右边界。
     */
    rightPadding: number;
    /**
     * @property {number} topPadding
     * 控件的上边界。
     */
    topPadding: number;
    /**
     * @property {number} bottomPadding
     * 控件的下边界。
     */
    bottomPadding: number;
    /**
     * @property {number} padding
     * 控件的边界。
     */
    padding: number;
    protected setProp(prop: string, newValue: any, notify: boolean): Widget;
    setText(text: string, notify: boolean): Widget;
    /**
     * @method useBehavior
     * 启用指定名称的Behavior
     * @param {string} name Behavior的名称。
     * @param {any} options 选项。
     * @return {Behavior}
     */
    useBehavior(name: string, options: any): Behavior;
    protected _x: number;
    protected _y: number;
    protected _z: number;
    protected _w: number;
    protected _h: number;
    protected _inited: boolean;
    protected _state: WidgetState;
    protected _value: any;
    protected _enable: boolean;
    protected _visible: boolean;
    protected _selected: boolean;
    protected _opacity: number;
    protected _scaleX: number;
    protected _scaleY: number;
    protected _pivotX: number;
    protected _pivotY: number;
    protected _rotation: number;
    protected _sensitive: boolean;
    protected _tips: string;
    protected _text: string;
    protected _dirty: boolean;
    protected _name: string;
    protected _id: string;
    protected _type: string;
    protected _userData: any;
    protected _target: Widget;
    protected _hitTestResult: HitTestResult;
    protected _isWindow: boolean;
    protected _parent: Widget;
    protected _app: IApplication;
    protected _children: Array<Widget>;
    protected _mainLoop: IMainLoop;
    protected _themeManager: IThemeManager;
    protected _mode: WidgetMode;
    protected _canvas: Canvas;
    protected _styles: any;
    protected _styleType: string;
    protected _lastOverWidget: Widget;
    protected _behaviors: any;
    private _lp;
    private _rp;
    private _tp;
    private _bp;
    onclick: Function;
    ondblclick: Function;
    oncontextmenu: Function;
    onpointerdown: Function;
    onpointermove: Function;
    onpointerup: Function;
    onwheel: Function;
    onkeydown: Function;
    onkeyup: Function;
    protected recycle: Function;
    protected _layoutParam: any;
    protected _childrenLayouter: Layouter;
    protected eChangeEvent: Events.ChangeEvent;
    protected ePropChangeEvent: Events.PropChangeEvent;
    protected notifyChange(): void;
    setValue(value: boolean, notify: boolean, exclude: boolean): void;
    protected onReset(): void;
    protected onCreated(): void;
    protected getDefProps(): any;
    protected static defProps: {
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
    };
    reset(type: string, options: any): Widget;
    protected onFromJson(json: any): void;
    /**
     * @method fromJson
     * 用JSON数据初始化当前控件。
     * @param {any} json 数据。
     */
    fromJson(json: any): Widget;
    /**
     * @method clone
     * CLONE当前控件。
     * @return {Widget} 新对象。
     */
    clone(): Widget;
    protected onToJson(json: any): void;
    private behaviorsToJson();
    private behaviorsFromJson(json);
    /**
     * @method toJson
     * 序列化当前的控件到JSON数据。
     * @return {any} JSON数据。
     */
    toJson(): any;
    protected _templateItem: Widget;
    protected _templateItemJson: Widget;
    /**
     * @property {Widget} templateItem
     * 模板项。用于在数据绑定时，自动生成子控件的模板。
     */
    templateItem: Widget;
    addChildWithTemplate(fastMode?: boolean): Widget;
    protected onBindProp(prop: string, value: any): void;
    protected _dataBindingRule: BindingRule;
    protected _viewModel: IViewModel;
    /**
     * @property {any} dataBindingRule
     * 数据绑定规则。
     */
    dataBindingRule: any;
    /**
     * @method updateExplicit
     * 显式的更新ViewModel。
     */
    updateExplicit(): Widget;
    protected viewModelChangeFunc: any;
    protected removeBinding(): void;
    protected onBeforeBindData(): void;
    protected onAfterBindData(): void;
    /**
     * @method bindData
     * 绑定数据。
     * @param {IViewModel} viewModel View Model。
     * @return {Widget} 控件本身。
     */
    bindData(viewModel: IViewModel): Widget;
    protected bindDataToChildren(viewModel: IViewModel): void;
    protected onBindCommand(viewModel: IViewModel, dataBindingRule: any): void;
    protected onBindData(viewModel: IViewModel, dataBindingRule: any): void;
    protected getPropDefaultBindMode(prop: string): BindingMode;
    protected onInvalidInput(message: string): void;
    protected onUpdateToDataSource(): void;
    protected updateValueToSource(value: any, dataSource: BindingDataSource, oldValue?: any): void;
    protected watchTargetValueChange(dataSource: BindingDataSource): void;
    protected watchTargetChange(dataBindingRule: BindingRule): void;
    protected hitTest(x: number, y: number, ctx: MatrixStack): HitTestResult;
    protected doHitTest(x: number, y: number, r: Rect, ctx: MatrixStack): HitTestResult;
    protected selfHitTest(x: number, y: number, ctx: MatrixStack): HitTestResult;
    private static ID;
}
