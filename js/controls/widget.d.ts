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
import { BindingRule, BindingDataSource } from "../mvvm/binding-rule";
import { IViewModal, BindingMode } from "../mvvm/iview-modal";
export declare enum WidgetMode {
    RUNTIME = 0,
    DESIGN = 1,
}
export declare enum WidgetState {
    NORMAL = 0,
    OVER = 1,
    ACTIVE = 2,
    DISABLE = 3,
    SELECTED = 4,
}
export declare enum HitTestResult {
    NONE = 0,
    TL = 1,
    TM = 2,
    TR = 3,
    ML = 4,
    MM = 5,
    MR = 6,
    RL = 7,
    RM = 8,
    RR = 9,
}
/**
 * Widget是所有控件的基类。
 */
export declare class Widget extends Emitter {
    constructor(type: string);
    /**
     * 同时设置多个属性。
     */
    set(props?: any): Widget;
    /**
     * 同时获取多个属性。
     */
    get(props: any): any;
    /**
     * 把全局的坐标转换成相对于当前控件左上角的坐标。
     * @param p 全局坐标。
     * @returns 相对于当前控件左上角的坐标。
     */
    toLocalPoint(p: Point): Point;
    /**
     * 把Pointer事件的坐标转换成相对于当前控件左上角的坐标。
     * @param p Pointer事件的坐标。
     * @returns 相对于当前控件左上角的坐标。
     */
    eventPointToLocal(p: Point): Point;
    /**
     * 把相对于当前控件左上角的坐标转换成全局坐标。
     * @param p 相对于当前控件左上角的坐标。
     * @returns 全局坐标。
     */
    toGlobalPoint(p: Point): Point;
    /**
     * 把相对于当前控件左上角的坐标转换成屏幕上的坐标。
     * @param p 相对于当前控件左上角的坐标。
     * @returns 屏幕上的坐标。
     */
    toViewPoint(p: Point): Point;
    protected onInit(): void;
    /**
     * 初始化。在窗口打开后，对窗口上所有控件调用，或者在窗口打开后，对新创建的控件调用。
     */
    init(): Widget;
    protected onDeinit(): void;
    /**
     * ~初始化。在窗口关闭后，对窗口上所有控件调用，或者对被移出的控件调用。
     */
    deinit(): void;
    /**
     * 分发一个事件到当前控件及其子控件。
     */
    dispatchEventToAll(evt: any): void;
    /**
     * 测试点是否落在当前控件中。
     * @param x X坐标，相对于全局原点的坐标。
     * @param y Y坐标，相对于全局原点的坐标。
     * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
     * @returns 测试结果HitTestResult。
     */
    protected hitTest(x: number, y: number, ctx: MatrixStack): HitTestResult;
    protected doHitTest(x: number, y: number, r: Rect, ctx: MatrixStack): HitTestResult;
    protected selfHitTest(x: number, y: number, ctx: MatrixStack): HitTestResult;
    protected dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMoveToTarget(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMoveToUnder(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    protected dispatchPointerUp(evt: Events.PointerEvent): void;
    protected dispatchClick(evt: any): void;
    protected dispatchContextMenu(evt: any): void;
    protected dispatchDblClick(evt: any): void;
    protected dispatchKeyDown(evt: any): void;
    protected dispatchKeyUp(evt: any): void;
    dispatchWheel(evt: any): void;
    protected applyTransform(ctx: MatrixStack): Widget;
    protected findEventTargetChild(x: number, y: number, ctx: MatrixStack): Widget;
    animate(): TWEEN.Tween;
    scaleTo(sx: number, sy: number, duration?: number): TWEEN.Tween;
    opacityTo(opacity: number, duration?: number): TWEEN.Tween;
    rotateTo(rotation: number, duration?: number): TWEEN.Tween;
    moveTo(x: number, y: number, duration?: number): TWEEN.Tween;
    moveResizeTo(x: number, y: number, w: number, h: number, duration?: number): TWEEN.Tween;
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
    /**
     * 根据当前的childrenLayouter创建子控件的布局参数。
     */
    createChildLayoutParam(options: any): any;
    /**
     * 启用指定的childrenLayouter。
     */
    useChildrenLayouter(type: string, options: any): Widget;
    /**
     * 设置childrenLayouter。
     */
    childrenLayouter: Layouter;
    /**
     * 布局参数是父控件在布局当前控件时使用的。
     */
    layoutParam: any;
    indexOfChild(child: Widget): number;
    findChild(func: Function): Widget;
    findChildByName(name: string): Widget;
    findChildByID(id: string): Widget;
    find(path: string): Widget;
    protected drawColorBackground(ctx: any, style: Style): Widget;
    protected drawBackground(ctx: any, style: Style): Widget;
    /**
     * 获取本地化后的文本。
     */
    getLocaleText(): string;
    /**
     * 获取前景图片区域。
     */
    protected getFgImageRect(style: Style): Rect;
    /**
     * 绘制前景图片，子控件根据需要重载。
     */
    protected drawImage(ctx: any, style: Style): Widget;
    /**
     * 获取文本显示区域。
     */
    protected getTextRect(style: Style): Rect;
    protected drawText(ctx: any, style: Style): Widget;
    protected drawChildren(ctx: any): Widget;
    protected drawTips(ctx: any, style: Style): Widget;
    protected computeDirtyRectSelf(ctx: DirtyRectContext): void;
    /**
     * 计算脏矩形。
     */
    computeDirtyRect(ctx: DirtyRectContext): void;
    protected doDraw(ctx: any, style: Style): void;
    draw(ctx: any): void;
    stateToString(state: WidgetState): string;
    styleType: string;
    setStyle(state: WidgetState, style: Style): Widget;
    protected getStyleType(): string;
    getStyleOfState(state: WidgetState): Style;
    protected getStateForStyle(): WidgetState;
    getStyle(): Style;
    sortChildren(): Widget;
    removeAllChildren(): Widget;
    protected onRemoveChild(child: Widget): void;
    removeChild(child: Widget, fastMode?: boolean, destroy?: boolean): Widget;
    protected onAddChild(child: Widget): void;
    addChild(child: Widget, fastMode?: boolean): Widget;
    dispose(): void;
    requestRedraw(): Widget;
    createCanvas(): Widget;
    readonly dirty: boolean;
    x: number;
    y: number;
    z: number;
    readonly desireWidth: number;
    w: number;
    width: number;
    readonly clientW: number;
    readonly clientH: number;
    height: number;
    h: number;
    state: WidgetState;
    value: any;
    selected: boolean;
    protected _isEnableFunc: Function;
    isEnableFunc: Function;
    enable: any;
    visible: boolean;
    /**
     * 用户是否可以通过本控件输入/选择数据。
     */
    readonly inputable: boolean;
    setVisible(value: any): void;
    opacity: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    focusable: boolean;
    sensitive: boolean;
    pivotX: number;
    pivotY: number;
    tips: string;
    text: any;
    name: string;
    type: string;
    readonly id: string;
    tag: string;
    userData: any;
    target: Widget;
    hitTestResult: HitTestResult;
    parent: Widget;
    app: IApplication;
    readonly win: Window;
    readonly children: Array<Widget>;
    readonly canvas: Canvas;
    isWindow(): boolean;
    leftPadding: number;
    rightPadding: number;
    topPadding: number;
    bottomPadding: number;
    padding: number;
    protected setProp(prop: string, newValue: any, notify: boolean): Widget;
    setText(text: string, notify: boolean): Widget;
    useBehavior(type: string, options: any): Behavior;
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
    protected _focusable: boolean;
    protected _sensitive: boolean;
    protected _tips: string;
    protected _text: string;
    protected _dirty: boolean;
    protected _name: string;
    protected _id: string;
    protected _tag: string;
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
    };
    reset(type: string, options: any): Widget;
    protected onFromJson(json: any): void;
    fromJson(json: any): Widget;
    clone(): Widget;
    protected onToJson(json: any): void;
    toJson(): any;
    protected _templateItem: Widget;
    protected _templateItemJson: Widget;
    templateItem: Widget;
    addChildWithTemplate(fastMode?: boolean): Widget;
    protected onBindProp(prop: string, value: any): void;
    protected _dataBindingRule: BindingRule;
    protected _viewModal: IViewModal;
    /**
     * 数据绑定规则。
     */
    dataBindingRule: any;
    /**
     * 显式的更新ViewModal。
     */
    updateExplicit(): void;
    protected viewModalChangeFunc: any;
    protected removeBinding(): void;
    protected onBeforeBindData(): void;
    protected onAfterBindData(): void;
    /**
     * 绑定数据。
     */
    bindData(viewModal: IViewModal): Widget;
    protected bindChildren(viewModal: IViewModal): void;
    protected onBindCommand(viewModal: IViewModal, dataBindingRule: any): void;
    protected onBindData(viewModal: IViewModal, dataBindingRule: any): void;
    protected getPropDefaultBindMode(prop: string): BindingMode;
    protected onInvalidInput(message: string): void;
    protected onUpdateToDataSource(): void;
    protected updateValueToSource(value: any, dataSource: BindingDataSource, oldValue?: any): void;
    protected watchTargetValueChange(dataSource: BindingDataSource): void;
    protected watchTargetChange(dataBindingRule: BindingRule): void;
    private static ID;
}
