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
export const CLICK = "qtk-click";
export const CHANGE = "change"
export const MOVE = "move";
export const RESIZE = "resize";
export const READY = "ready";
export const DRAW = "draw";
export const PREDRAW = "predraw";
export const POSTDRAW = "postdraw";
export const LOAD = "load";

export class Event {
	private _type : string;
	private _detail : any;
	private _target : any;
	private _propagationStopped : boolean;

	constructor(type:string, detail:any) {
		this._type = type;
		this._detail = detail;
		this._target = null;
		this._propagationStopped = false;
	}

	public get propagationStopped() {
		return this._propagationStopped;
	}

	public stopPropagation() {
		this._propagationStopped = true;
	}

	public set detail(value) {
		this._detail = value;
	}

	public get detail() {
		return this._detail;
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

	public static create(type:string, detail:any) {
		return new Event(type, detail);
	}
};

/**
 * 创建事件。
 * @param type 事件的名称。
 * @param detail 事件的详细信息。参考event-detail
 * @returns CustomEvent 
 */
export function createEvent(type:string, detail:any) : Event{
	return Event.create(type, detail);
}

