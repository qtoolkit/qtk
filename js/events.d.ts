import { InputEventDetail, KeyEventDetail, PointerEventDetail, WheelEventDetail } from "./event-detail";
/**
 * 常见事件名称的定义。
 */
export declare const WHEEL: string;
export declare const KEYUP: string;
export declare const KEYDOWN: string;
export declare const CONTEXT_MENU: string;
export declare const POINTER_DOWN: string;
export declare const POINTER_MOVE: string;
export declare const POINTER_UP: string;
export declare const POINTER_OUT: string;
export declare const POINTER_OVER: string;
export declare const POINTER_ENTER: string;
export declare const POINTER_LEAVE: string;
export declare const CLICK: string;
export declare const DBLCLICK: string;
export declare const CHANGE: string;
export declare const PROGRESS: string;
export declare const CHANGING: string;
export declare const PROP_CHANGE: string;
export declare const PROP_DELETE: string;
export declare const ITEM_ADD: string;
export declare const ITEM_DELETE: string;
export declare const DISPOSE: string;
export declare const RUN: string;
export declare const QUIT: string;
export declare const SHOW: string;
export declare const HIDE: string;
export declare const MOVE: string;
export declare const MOVING: string;
export declare const MOVE_END: string;
export declare const MOVE_BEGIN: string;
export declare const CHOOSE: string;
export declare const OPEN: string;
export declare const INIT: string;
export declare const FOCUS: string;
export declare const BLUR: string;
export declare const DEINIT: string;
export declare const CLOSE: string;
export declare const RESIZE: string;
export declare const READY: string;
export declare const TICK: string;
export declare const PRETICK: string;
export declare const POSTTICK: string;
export declare const LOAD: string;
export declare const EXPAND: string;
export declare const COLLAPSE: string;
export declare const BEFORE_DRAW: string;
export declare const AFTER_DRAW: string;
export declare const BEFORE_APPLY_TRANSFORM: string;
export declare const AFTER_APPLY_TRANSFORM: string;
export declare const SCROLL: string;
export declare const SCROLL_DONE: string;
export declare const DRAG: string;
export declare const DROP: string;
export declare const DRAGEND: string;
export declare const DRAGENTER: string;
export declare const DRAGEXIT: string;
export declare const DRAGLEAVE: string;
export declare const DRAGOVER: string;
export declare const DRAGSTART: string;
export declare const INTERACTION_REQUEST: string;
export declare class Event {
    private _type;
    private _target;
    private _propagationStopped;
    private _preventedDefault;
    timeStamp: number;
    init(type: string, detail?: any): any;
    preventDefault(): void;
    readonly defaultPrevented: boolean;
    readonly propagationStopped: boolean;
    stopPropagation(): void;
    type: string;
    target: any;
    dispose(): void;
}
export declare class AnyEvent extends Event {
    /**
     * 消息具体的信息。
     */
    payload: any;
    init(type: string, payload?: any): any;
    static create(type: string, payload?: any): AnyEvent;
}
/**
 * View Modal请求显示指定的视图或跳转到指定的视图。
 */
export declare class InteractionRequestEvent extends Event {
    /**
     * 消息具体的信息。
     */
    payload: any;
    /**
     * 视图的名称。
     */
    name: string;
    protected _callback: Function;
    returnResult(): void;
    init(type: string, detail: any): Event;
    static create(type: string, detail: any): Event;
}
export declare class InputEvent extends Event {
    /**
     * alt键是否按下。
     */
    altKey: boolean;
    /**
     * ctrl键是否按下。
     */
    ctrlKey: boolean;
    /**
     * shift键是否按下。
     */
    shiftKey: boolean;
    /**
     * command键是否按下。
     */
    commandKey: boolean;
    init(type: string, detail: InputEventDetail): any;
}
export declare class PointerEvent extends InputEvent {
    /**
     * 指针事件的ID。
     */
    id: number;
    /**
     * 指针事件的x坐标。
     */
    x: number;
    /**
     * 指针事件的y坐标。
     */
    y: number;
    /**
     * 指针是否按下。
     */
    pointerDown: boolean;
    /**
     * 如果指针按下，按下时的x坐标。
     */
    pointerDownX: number;
    /**
     * 如果指针按下，按下时的y坐标。
     */
    pointerDownY: number;
    /**
     * 如果指针按下，按下时的时间。
     */
    pointerDownTime: number;
    init(type: string, detail: PointerEventDetail | PointerEvent): any;
    static create(type: string, detail: PointerEventDetail | PointerEvent): PointerEvent;
}
export declare class WheelEvent extends InputEvent {
    /**
     * 滚动的间隔。
     */
    delta: number;
    init(type: string, detail: WheelEventDetail): any;
    static create(detail: WheelEventDetail): WheelEvent;
}
export declare class KeyEvent extends InputEvent {
    keyCode: number;
    init(type: string, detail: KeyEventDetail): any;
    static create(type: string, detail: KeyEventDetail): any;
}
export declare class TickEvent extends Event {
    /**
     * 当前时间。
     */
    time: number;
    /**
     * 间隔时间。
     */
    deltaTime: number;
    /**
     * 帧率。
     */
    fps: number;
    init(type: string, detail: any): any;
    static create(type: string): any;
}
export declare class ChangeEvent extends Event {
    /**
     * 属性的旧值。
     */
    oldValue: any;
    /**
     * 属性的新值。
     */
    newValue: any;
    /**
     * 属性的新值。
     */
    value: any;
    init(type: string, detail: any): any;
    static create(): ChangeEvent;
}
export declare class PropChangeEvent extends ChangeEvent {
    /**
     * 属性名。
     */
    prop: string;
    trigger: any;
    init(type: string, detail: any): any;
    static create(): PropChangeEvent;
}
export declare class DataTransfer {
    private data;
    dragImage: any;
    dropEffect: string;
    constructor();
    clearData(format?: string): void;
    getData(format: string): string;
    setData(format: string, data: any): void;
    setDragImage(dragImage: any): void;
}
export declare class DragEvent extends Event {
    dataTransfer: DataTransfer;
    constructor();
    init(type: string, detail?: any): any;
    private static _isDragging;
    static isDragging: boolean;
    static event: DragEvent;
    static get(type: string): DragEvent;
}
export declare class DrawEvent extends Event {
    widget: any;
    ctx: any;
    reset(type: string, ctx: any, widget: any): any;
    static get(): DrawEvent;
    private static event;
}
export declare class ApplyTransformEvent extends Event {
    widget: any;
    ctx: any;
    reset(type: string, ctx: any, widget: any): any;
    static get(): ApplyTransformEvent;
    private static event;
}
export declare class ScrollEvent extends Event {
    offsetX: number;
    offsetY: number;
    widget: any;
    reset(type: string, widget: any, offsetX: number, offsetY: number): any;
    static create(): ScrollEvent;
}
export declare function createAnyEvent(type: string, payload?: any): AnyEvent;
