/// <reference path="../../typings/globals/scroller/index.d.ts" />
/// <reference path="../../typings/globals/tween.js/index.d.ts" />
import { Rect } from "../rect";
import { Scroller } from "scroller";
import TWEEN = require("tween.js");
import Events = require("../events");
import { MatrixStack } from "../matrix-stack";
import { Widget, HitTestResult } from "./widget";
/**
 * 滚动视图，同时支持PC和Mobile风格，通过dragToScroll和slideToScroll参数控制。
 */
export declare class ScrollView extends Widget {
    isScrollView: boolean;
    protected scrollBarOpacity: number;
    /**
     * 启用滚动条拖动来实现滚动。
     */
    dragToScroll: boolean;
    /**
     * 启用手势滑动来实现滚动。
     */
    slideToScroll: boolean;
    /**
     * 滚动条的样式。
     */
    scrollBarStyle: ScrollBarStyle;
    /**
     * 垂直滚动条是否可见。
     */
    protected isVScrollBarVisible(): boolean;
    /**
     * 水平滚动条是否可见。
     */
    protected isHScrollBarVisible(): boolean;
    /**
     * 设置水平方向上的偏移，并确保其值的有些性。
     */
    validOffsetX: number;
    /**
     * 设置垂直方向上的偏移，并确保其值的有些性。
     */
    validOffsetY: number;
    protected toValidOffsetX(value: number): number;
    protected toValidOffsetY(value: number): number;
    /**
     * 水平方向上的偏移。
     */
    offsetX: number;
    /**
     * 垂直方向上的偏移。
     */
    offsetY: number;
    /**
     * 滚动视图所包含内容的宽度。
     */
    contentW: number;
    /**
     * 滚动视图所包含内容的高度。
     */
    contentH: number;
    protected selfHitTest(x: number, y: number, ctx: MatrixStack): HitTestResult;
    protected offsetPointerEvent(evt: Events.PointerEvent): void;
    protected unOffsetPointerEvent(evt: Events.PointerEvent): void;
    protected pointerEventToTouches(evt: Events.PointerEvent): any;
    dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerUp(evt: Events.PointerEvent): void;
    dispatchClick(evt: any): void;
    dispatchDblClick(evt: any): void;
    protected updateScrollerDimensions(w: number, h: number, contentW: number, contentH: number): void;
    protected readonly scroller: Scroller;
    hideScrollBar(): void;
    protected handleScrolling(left: number, top: number): void;
    protected handleScrollDone(): void;
    protected initScroller(options: any): void;
    protected drawScrollBarV(ctx: any, hBarVisible: boolean): void;
    protected drawScrollBarH(ctx: any, vBarVisible: any): void;
    protected drawScrollBar(ctx: any): void;
    protected doDrawChildren(ctx: any): void;
    protected beforeDrawChildren(ctx: any): void;
    protected afterDrawChildren(ctx: any): void;
    protected drawChildren(ctx: any): Widget;
    /**
     * 滚动到指定的位置。
     */
    scrollTo(offsetX: number, offsetY: number, duration: number): TWEEN.Tween;
    onWheel(evt: Events.WheelEvent): void;
    readonly scrollerOptions: ScrollerOptions;
    protected getLayoutWidth(): number;
    protected getLayoutHeight(): number;
    protected getViewWidth(): number;
    protected getViewHeight(): number;
    protected getLayoutRect(): Rect;
    protected onInit(): void;
    protected onReset(): void;
    protected _ox: number;
    protected _oy: number;
    protected _cw: number;
    protected _ch: number;
    protected _touches: any;
    protected _saveOX: number;
    protected _saveOY: number;
    protected _scroller: Scroller;
    protected _vScrollBarRect: Rect;
    protected _hScrollBarRect: Rect;
    protected _vScrollDraggerRect: Rect;
    protected _hScrollDraggerRect: Rect;
    protected _dragToScroll: boolean;
    protected _slideToScroll: boolean;
    protected _scrollBarOpacity: number;
    protected _scrollerOptions: any;
    protected _scrollBarStyle: ScrollBarStyle;
    protected _pointerInBar: boolean;
    protected _pointerInVScrollBarRectUp: boolean;
    protected _pointerInVScrollBarRectDown: boolean;
    protected _pointerInHScrollBarRectLeft: boolean;
    protected _pointerInHScrollBarRectRight: boolean;
    protected _pointerInVScrollDraggerRect: boolean;
    protected _pointerInHScrollDraggerRect: boolean;
    protected _scrollEvent: Events.ScrollEvent;
    constructor(type?: string);
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
    };
    protected getDefProps(): any;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ScrollView;
}
export declare enum ScrollerBarVisibility {
    INVISIBLE = 0,
    AUTO = 1,
    ALWAYS = 2,
}
export interface ScrollerOptions {
    scrollingX?: boolean;
    scrollingY?: boolean;
    animating?: boolean;
    animationDuration?: number;
    bouncing?: boolean;
    locking?: boolean;
    paging?: boolean;
    snapping?: boolean;
    zooming?: boolean;
    minZoom?: number;
    maxZoom?: number;
    speedMultiplier?: number;
}
export declare class ScrollBarStyle {
    size: number;
    roundRadius: number;
    draggerSize: number;
    backGroundColor: string;
    foreGroundColor: string;
    foreGroundOverColor: string;
    lineColor: string;
    lineWidth: number;
    hBarVisibility: ScrollerBarVisibility;
    vBarVisibility: ScrollerBarVisibility;
    constructor();
}
