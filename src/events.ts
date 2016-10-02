import {InputEventDetail, KeyEventDetail, PointerEventDetail, WheelEventDetail} from "./event-detail";

/**
 * 常见事件名称的定义。
 */
export const WHEEL = "qtk-wheel";
export const KEYUP = "qtk-keyup";
export const KEYDOWN = "qtk-keydown";
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
export const DISPOSE = "dispose"
export const RUN = "run"
export const QUIT = "quit"
export const SHOW = "show"
export const HIDE = "hide"
export const MOVE = "move";
export const MOVING = "moving";
export const CHOOSE = "choose";
export const OPEN = "open"
export const INIT = "init"
export const FOCUS = "focus"
export const BLUR  = "blur"
export const DEINIT = "deinit"
export const CLOSE = "close"
export const RESIZE = "resize";
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

export class Event {
	private _type : string;
	private _target : any;
	private _propagationStopped : boolean;

	public timeStamp : number;
	public init(type:string, detail?:any) : any {
		this._type = type;
		this._target = null;
		this._propagationStopped = false;

		return this;
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

	public init(type:string, detail:PointerEventDetail|PointerEvent) : any{
		super.init(type, detail);

		this.id = detail.id;
		this.x = detail.x;
		this.y = detail.y;
		this.timeStamp = detail.timeStamp;
		this.pointerDown = detail.pointerDown;
		this.pointerDownX = detail.pointerDownX;
		this.pointerDownY = detail.pointerDownY;
		this.pointerDownTime = detail.pointerDownTime;

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

		this.value = detail.newValue || detail.value;
		this.oldValue = detail.oldValue;
		this.newValue = detail.newValue;

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
	public dataTransfer : DataTransfer;

	constructor() {
		super();
		this.dataTransfer = new DataTransfer();
	}

	public init(type:string, detail?:any) : any{
		super.init(type, detail);

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
	public static get(type:string) : DragEvent {
		var e = DragEvent.event;

		return e.init(type);
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

export function createAnyEvent(type:string, payload?:any) : AnyEvent {
	return AnyEvent.create(type, payload);
}
