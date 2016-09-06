import {Point} from "../point";
import {Widget} from "./widget";
import Events = require("../events");
import {IApplication} from "../iapplication";
import {MatrixStack} from "../matrix-stack";
import inputEventAdapter = require("../input-event-adapter");

export enum WindowType {
	NORMAL,
	POPUP
};

export class Window extends Widget {
	private _grabbed : boolean;
	private _hasOwnCanvas : boolean;
	private _pointerPosition : Point;
	private _shouldGrabWhenVisible : boolean;

	constructor(type:string) {
		super(type);
	}

	public set hasOwnCanvas(value:boolean) {
		this._hasOwnCanvas = value;
	}

	public get hasOwnCanvas() : boolean{
		return this._hasOwnCanvas;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._isWindow = true;
		this._grabbed = false;
		this._pointerPosition = Point.create(0, 0);

		return this;
	}

	public get pointerPosition() : Point {
		return this._pointerPosition;
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		this._pointerPosition.init(evt.x-this.x, evt.y-this.y);
		super.dispatchPointerMove(evt, ctx);
	}

	public get grabbed() : boolean {
		return this._grabbed;
	}

	public grab() : Widget {
		if(!this._grabbed && this.canvas) {
			this._grabbed = true;
			this.canvas.grab();
		}

		return this;
	}

	public ungrab() : Widget {
		if(this._grabbed && this.canvas) {
			this._grabbed = false;
			this.canvas.ungrab();
		}

		return this;
	}
	
	public setVisible(value) {
		super.setVisible(value);
		if(!value) {
			if(this._grabbed) {
				this.ungrab();
				this._shouldGrabWhenVisible = true;
			}
		}else{
			if(this._shouldGrabWhenVisible) {
				this.grab();
			}
		}
	}

	public open() : Widget {
		if(this._hasOwnCanvas) {
			this.createCanvas();
		}

		this.init();
		this.dispatchEvent({type:Events.OPEN});

		return this;
	}

	public close () {
		this.dispatchEvent({type:Events.CLOSE});
		this.deinit();
		this.dispose();
	}

	public dispose() {
		this.ungrab();
		super.dispose();
	}

	private windowType: WindowType;
};
