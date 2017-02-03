import {InputEventDetail, KeyEventDetail, PointerEventDetail, WheelEventDetail} from "./event-detail";

/**
 * 常见事件名称的定义。
 */
export const WHEEL = "qtk-wheel";
export const KEYUP = "qtk-keyup";
export const KEYDOWN = "qtk-keydown";
export const CONFIRM = "confirm";
export const CONTEXT_MENU = "qtk-context-menu";
export const POINTER_DOWN = "qtk-pointer-down";
export const POINTER_MOVE = "qtk-pointer-move";
export const POINTER_UP   = "qtk-pointer-up";
export const POINTER_OUT  = "qtk-pointer-out";
export const POINTER_OVER = "qtk-pointer-over";
export const POINTER_ENTER = "qtk-pointer-enter";
export const POINTER_LEAVE = "qtk-pointer-leave";
export const CLICK = "qtk-click";
export const DBLCLICK = "qtk-dblclick";
export const CHANGE = "change"
export const PROGRESS = "progress"
export const CHANGING = "changing"
export const PROP_CHANGE = "prop-change"
export const PROP_DELETE = "prop-delete"
export const ITEMS_CHANGE = "items-change"
export const DISPOSE = "dispose"
export const RUN = "run"
export const QUIT = "quit"
export const SHOW = "show"
export const HIDE = "hide"
export const MOVE = "move-end";
export const MOVING = "moving";
export const MOVE_END = "move-end";
export const MOVE_BEGIN = "move-begin";
export const MOVE_CANCEL = "move-cancel";
export const CHOOSE = "choose";
export const WINDOW_OPEN = "window-open"
export const WINDOW_CLOSE = "window-close"
export const WINDOW_CREATE = "window-create"
export const WINDOW_CREATED = "window-created"
export const INIT = "init"
export const FOCUS = "focus"
export const BLUR  = "blur"
export const DEINIT = "deinit"
export const RESIZE = "resize";
export const RESIZING = "resizing";
export const RESIZE_END = "resize-end";
export const RESIZE_BEGIN = "resize-begin";
export const RESIZE_CANCEL = "resize-cancel";
export const READY = "ready";
export const TICK = "tick";
export const PRETICK = "pretick";
export const POSTTICK = "posttick";
export const LOAD = "load";
export const EXPAND = "expand";
export const COLLAPSE = "collapse";
export const BEFORE_DRAW = "before-draw";
export const AFTER_DRAW = "after-draw";
export const BEFORE_APPLY_TRANSFORM = "before-apply-transform";
export const AFTER_APPLY_TRANSFORM = "after-apply-transform";

export const SORT = "sort";
export const SCROLL = "scroll";
export const SCROLL_DONE = "scroll-done";

export const DRAG = "drag";
export const DROP = "drop";
export const DRAGEND   = "dragend";
export const DRAGENTER = "dragenter";
export const DRAGEXIT  = "dragexit";
export const DRAGLEAVE = "dragleave";
export const DRAGOVER  = "dragover";
export const DRAGSTART = "dragstart";
export const SHORTCUT  = "shortcut";
export const INTERACTION_REQUEST = "interaction-request";

export class Event {
	private _type : string;
	private _target : any;
	private _propagationStopped : boolean;
	private _preventedDefault : boolean;

	public timeStamp : number;
	public init(type:string, detail?:any) : any {
		this._type = type;
		this._target = null;
		this._preventedDefault = false;
		this._propagationStopped = false;

		return this;
	}

	public preventDefault() {
		this._preventedDefault = true;
	}

	public get defaultPrevented() : boolean {
		return this._preventedDefault;
	}

	public get propagationStopped() {
		return this._propagationStopped;
	}

	public stopPropagation() {
		this._propagationStopped = true;
	}

	public set type(value) {
		this._type = value;
	}

	public get type() {
		return this._type;
	}
	
	public set target(value) {
		this._target = value;
	}

	public get target() {
		return this._target;
	}

	public dispose() {
	}
};

export class AnyEvent extends Event {
	/**
	 * 消息具体的信息。
	 */
	public payload : any;

	public init(type:string, payload?:any) : any {
		super.init(type);

		this.payload = payload;

		return this;
	}

	public static create(type:string, payload?:any) : AnyEvent {
		var e = new AnyEvent();

		return e.init(type, payload);
	}
};

/**
 * View Model请求显示指定的视图或跳转到指定的视图。
 */
export class InteractionRequestEvent extends Event {
	/**
	 * 消息具体的信息。
	 */
	public payload : any

	/**
	 * 视图的名称。
	 */
	public name: string;;
	protected _callback : Function;
	
	public returnResult() {
		if(this._callback) {
			this._callback(this.payload);
		}
	}

	public init(type:string, detail:any) : Event {
		super.init(type);

		this.name = detail.name;
		this.payload = detail.payload;
		this._callback = detail.callback;

		return this;
	}

	public static create(type:string, detail:any) : Event {
		var e = new InteractionRequestEvent();

		return e.init(type, detail);
	}
};

export class InputEvent extends Event {
	/**
	 * alt键是否按下。
	 */
	public altKey   : boolean;
	/**
	 * ctrl键是否按下。
	 */
	public ctrlKey  : boolean;
	/**
	 * shift键是否按下。
	 */
	public shiftKey : boolean;
	/**
	 * command键是否按下。
	 */
	public commandKey : boolean;

	public init(type:string, detail:InputEventDetail) : any {
		super.init(type);

		this.altKey = detail.altKey;
		this.ctrlKey = detail.ctrlKey;
		this.shiftKey = detail.shiftKey;
		this.commandKey = detail.commandKey;

		return this;
	}
};

export class PointerEvent extends InputEvent {
	/**
	 * 指针事件的ID。
	 */
	public id : number;
	/**
	 * 指针事件的x坐标。
	 */
	public x : number;
	/**
	 * 指针事件的y坐标。
	 */
	public y : number;
	/**
	 * 指针事件相对于当前控件左上角的x坐标。
	 */
	public localX : number;
	/**
	 * 指针事件相对于当前控件左上角的y坐标。
	 */
	public localY : number;
	/**
	 * 指针是否按下。
	 */
	public pointerDown : boolean;
	/**
	 * 如果指针按下，按下时的x坐标。
	 */
	public pointerDownX : number;
	/**
	 * 如果指针按下，按下时的y坐标。
	 */
	public pointerDownY : number;
	/**
	 * 如果指针按下，按下时的时间。
	 */
	public pointerDownTime : number;

	/**
	 * 指针事件的x变化量。
	 */
	public dx : number;
	/**
	 * 指针事件的y变化量。
	 */
	public dy : number;

	public init(type:string, detail:PointerEventDetail|PointerEvent) : any{
		super.init(type, detail);

		this.id = detail.id;
		this.x = detail.x;
		this.y = detail.y;
		this.localX = detail.x;
		this.localY = detail.y;
		this.timeStamp = detail.timeStamp;
		this.pointerDown = detail.pointerDown;
		this.pointerDownX = detail.pointerDownX;
		this.pointerDownY = detail.pointerDownY;
		this.pointerDownTime = detail.pointerDownTime;
		this.dx = detail.x - detail.pointerDownX;
		this.dy = detail.y - detail.pointerDownY;

		return this;
	}

	public static create(type:string, detail:PointerEventDetail|PointerEvent) : PointerEvent {
		var e = new PointerEvent();
		
		return e.init(type, detail);
	}
}

export class WheelEvent extends InputEvent {
	/**
	 * 滚动的间隔。
	 */
	public delta : number;
	public init(type:string, detail:WheelEventDetail) : any {
		super.init(type, detail);
		this.delta = detail.delta;
		this.timeStamp = detail.timeStamp;

		return this;
	}

	public static create(detail:WheelEventDetail) : WheelEvent {
		var e = new WheelEvent();

		return e.init(WHEEL, detail);
	}
}

export class KeyEvent extends InputEvent {
	public keyCode : number;
	
	public init(type:string, detail:KeyEventDetail) : any {
		super.init(type, detail);
		this.keyCode = detail.keyCode;
		this.timeStamp = detail.timeStamp;

		return this;
	}

	public static create(type:string, detail:KeyEventDetail) {
		var e = new KeyEvent();

		return e.init(type, detail);
	}
}

export class ShortcutEvent extends Event {
	public keys : string;
	
	public init(type:string, keys:string) : any {
		super.init(type, {});
		this.keys = keys;

		return this;
	}

	public static create(type:string, keys:string) {
		var e = new ShortcutEvent();

		return e.init(type, keys);
	}
}

export class TickEvent extends Event {
	/**
	 * 当前时间。
	 */
	public time : number;
	/**
	 * 间隔时间。
	 */
	public deltaTime : number;
	/**
	 * 帧率。
	 */
	public fps : number;

	public init(type:string, detail:any) : any {
		super.init(type);

		this.fps = detail.fps;
		this.time = detail.time;
		this.deltaTime = detail.deltaTime;

		return this;
	}

	public static create(type:string) {
		var e = new TickEvent();

		return e.init(type, {});
	}
};

export class ChangeEvent extends Event {
	/**
	 * 属性的旧值。
	 */
	public oldValue : any;
	/**
	 * 属性的新值。
	 */
	public newValue : any;
	
	/**
	 * 属性的新值。
	 */
	public value : any;

	public init(type:string, detail:any) : any {
		super.init(type);
		var value = detail.newValue === undefined ? detail.value : detail.newValue;
		this.value = value;
		this.newValue = value;
		this.oldValue = detail.oldValue;

		return this;
	}

	public static create() : ChangeEvent {
		var e = new ChangeEvent();

		return e;
	}
};

export class PropChangeEvent extends ChangeEvent {
	/**
	 * 属性名。
	 */
	public prop : string;
	public trigger : any;

	public init(type:string, detail:any) : any {
		super.init(type, detail);
		this.prop = detail.prop;
		this.trigger = detail.trigger;

		return this;
	}

	public static create() : PropChangeEvent {
		var e = new PropChangeEvent();

		return e;
	}
};

export class DataTransfer {
	private data : any;
	public dragImage : any;
	public dropEffect : string;

	constructor() {
		this.data = {};
		this.dragImage = null;
		this.dropEffect = "move";
	}

	public clearData(format?:string) {
		if(format) {
			delete this.data[format];
		}else{
			this.data = {};
		}
	}

	public getData(format:string) : string {
		return this.data[format];
	}
	
	public setData(format:string, data:any) {
		this.data[format] = data;
	}

	public setDragImage(dragImage:any) {
		this.dragImage = dragImage;
	}
};

export class DragEvent extends Event {
	public x : number;
	public y : number;
	public dataTransfer : DataTransfer;

	constructor() {
		super();
		this.dataTransfer = new DataTransfer();
	}

	public init(type:string, detail?:any) : any{
		super.init(type, detail);
		this.x = detail.x;
		this.y = detail.y;

		return this;
	}

	private static _isDragging : boolean = false;
	public static get isDragging() : boolean {
		return DragEvent._isDragging;
	}

	public static set isDragging(isDragging:boolean) {
		DragEvent._isDragging = isDragging;
	}

	public static event = new DragEvent();
	public static get(type:string, x:number, y:number) : DragEvent {
		var e = DragEvent.event;

		return e.init(type, {x:x, y:y});
	}
};

export class DrawEvent extends Event {
	public widget : any;
	public ctx : any;

	public reset(type:string, ctx:any, widget:any) : any {
		super.init(type);

		this.ctx = ctx;
		this.widget = widget;

		return this;
	}

	public static get() : DrawEvent {
		return DrawEvent.event;
	}

	private static event = new DrawEvent();
};

export class ApplyTransformEvent extends Event {
	public widget : any;
	public ctx : any;

	public reset(type:string, ctx:any, widget:any) : any {
		super.init(type);

		this.ctx = ctx;
		this.widget = widget;

		return this;
	}

	public static get() : ApplyTransformEvent {
		return ApplyTransformEvent.event;
	}

	private static event = new ApplyTransformEvent();
};

export class ScrollEvent extends Event {
	public offsetX : number;
	public offsetY : number;
	public widget : any;

	public reset(type:string, widget:any, offsetX:number, offsetY:number) : any {
		super.init(type);

		this.widget = widget;
		this.offsetX = offsetX;
		this.offsetY = offsetY;

		return this;
	}

	public static create() : ScrollEvent  {
		return new ScrollEvent();
	}
};

export class WindowEvent extends Event {
	public widget : any;

	public reset(type:string, widget:any) : any {
		super.init(type);

		this.widget = widget;

		return this;
	}

	public static create() : WindowEvent  {
		return new WindowEvent();
	}
};

export class ProgressEvent extends Event {
	public done: number;
	public total: number;
	public progress : number;

	public reset(progress:number, total?:number, done?:number) : ProgressEvent {
		super.init(PROGRESS);

		this.done = done;
		this.total = total;
		this.progress = progress;

		return this;
	}

	public static create() : ProgressEvent  {
		return new ProgressEvent();
	}
};

/**
 * 排序事件
 */
export class SortEvent extends Event {
	/**
	 * 排序的关键字
	 */
	public key : string;
	
	/**
	 * 是否是降序排序
	 */
	public isDec : boolean;

	public init(key:string, isDec:boolean) : any {
		super.init(SORT);

		this.key = key;
		this.isDec = isDec;

		return this;
	}

	public static create(key:string, isDec:boolean) : SortEvent {
		var e = new SortEvent();

		return e.init(key, isDec);
	}
};

export function createAnyEvent(type:string, payload?:any) : AnyEvent {
	return AnyEvent.create(type, payload);
}

const eventsMapToType = {
	click:CLICK,
	keydown:KEYDOWN,
	keyup:KEYUP,
	confirm:CONFIRM,
	change:CHANGE,
	chaning:CHANGING,
	dblclick:DBLCLICK,
	pointerup:POINTER_UP,
	pointermove:POINTER_MOVE,
	pointerdown:POINTER_DOWN,
	pointerenter:POINTER_ENTER,
	pointerleave:POINTER_LEAVE
};

export function mapToEvent(name:string) {
	return eventsMapToType[name];
}

