import { InputEventDetail, KeyEventDetail, PointerEventDetail, WheelEventDetail } from "./event-detail";
/**
 * 常见事件名称的定义。
 */
export declare const WHEEL = "qtk-wheel";
export declare const KEYUP = "qtk-keyup";
export declare const KEYDOWN = "qtk-keydown";
export declare const CONFIRM = "confirm";
export declare const CONTEXT_MENU = "qtk-context-menu";
export declare const POINTER_DOWN = "qtk-pointer-down";
export declare const POINTER_MOVE = "qtk-pointer-move";
export declare const POINTER_UP = "qtk-pointer-up";
export declare const POINTER_OUT = "qtk-pointer-out";
export declare const POINTER_OVER = "qtk-pointer-over";
export declare const POINTER_ENTER = "qtk-pointer-enter";
export declare const POINTER_LEAVE = "qtk-pointer-leave";
export declare const CLICK = "qtk-click";
export declare const DBLCLICK = "qtk-dblclick";
export declare const CHANGE = "change";
export declare const PROGRESS = "progress";
export declare const CHANGING = "changing";
export declare const PROP_CHANGE = "prop-change";
export declare const PROP_DELETE = "prop-delete";
export declare const ITEMS_CHANGE = "items-change";
export declare const DISPOSE = "dispose";
export declare const RUN = "run";
export declare const QUIT = "quit";
export declare const SHOW = "show";
export declare const HIDE = "hide";
export declare const MOVE = "move-end";
export declare const MOVING = "moving";
export declare const MOVE_END = "move-end";
export declare const MOVE_BEGIN = "move-begin";
export declare const MOVE_CANCEL = "move-cancel";
export declare const CHOOSE = "choose";
export declare const WINDOW_OPEN = "window-open";
export declare const WINDOW_CLOSE = "window-close";
export declare const WINDOW_CREATE = "window-create";
export declare const WINDOW_CREATED = "window-created";
export declare const INIT = "init";
export declare const FOCUS = "focus";
export declare const BLUR = "blur";
export declare const DEINIT = "deinit";
export declare const RESIZE = "resize";
export declare const RESIZING = "resizing";
export declare const RESIZE_END = "resize-end";
export declare const RESIZE_BEGIN = "resize-begin";
export declare const RESIZE_CANCEL = "resize-cancel";
export declare const READY = "ready";
export declare const TICK = "tick";
export declare const PRETICK = "pretick";
export declare const POSTTICK = "posttick";
export declare const LOAD = "load";
export declare const EXPAND = "expand";
export declare const COLLAPSE = "collapse";
export declare const BEFORE_DRAW = "before-draw";
export declare const AFTER_DRAW = "after-draw";
export declare const BEFORE_APPLY_TRANSFORM = "before-apply-transform";
export declare const AFTER_APPLY_TRANSFORM = "after-apply-transform";
export declare const SORT = "sort";
export declare const SCROLL = "scroll";
export declare const SCROLL_DONE = "scroll-done";
export declare const DRAG = "drag";
export declare const DROP = "drop";
export declare const DRAGEND = "dragend";
export declare const DRAGENTER = "dragenter";
export declare const DRAGCANCEL = "dragcancel";
export declare const DRAGLEAVE = "dragleave";
export declare const DRAGOVER = "dragover";
export declare const DRAGSTART = "dragstart";
export declare const SHORTCUT = "shortcut";
export declare const INTERACTION_REQUEST = "interaction-request";
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
 * View Model请求显示指定的视图或跳转到指定的视图。
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
     * 指针事件相对于当前控件左上角的x坐标。
     */
    localX: number;
    /**
     * 指针事件相对于当前控件左上角的y坐标。
     */
    localY: number;
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
    /**
     * 指针事件的x变化量。
     */
    dx: number;
    /**
     * 指针事件的y变化量。
     */
    dy: number;
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
export declare class ShortcutEvent extends Event {
    keys: string;
    init(type: string, keys: string): any;
    static create(type: string, keys: string): any;
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
    x: number;
    y: number;
    dataTransfer: DataTransfer;
    constructor();
    init(type: string, detail?: any): any;
    private static _isDragging;
    static isDragging: boolean;
    static event: DragEvent;
    static get(type: string, x: number, y: number): DragEvent;
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
export declare class WindowEvent extends Event {
    widget: any;
    reset(type: string, widget: any): any;
    static create(): WindowEvent;
}
export declare class ProgressEvent extends Event {
    done: number;
    total: number;
    progress: number;
    reset(progress: number, total?: number, done?: number): ProgressEvent;
    static create(): ProgressEvent;
}
/**
 * 排序事件
 */
export declare class SortEvent extends Event {
    /**
     * 排序的关键字
     */
    key: string;
    /**
     * 是否是降序排序
     */
    isDec: boolean;
    init(key: string, isDec: boolean): any;
    static create(key: string, isDec: boolean): SortEvent;
}
export declare function createAnyEvent(type: string, payload?: any): AnyEvent;
export declare function mapToEvent(name: string): any;
