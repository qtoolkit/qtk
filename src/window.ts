import {Widget} from "./widget";
import Events = require("./events");
import {IApplication} from "./iapplication";
import inputEventAdapter = require("./input-event-adapter");

export enum WindowType {
	NORMAL,
	POPUP
};

export class Window extends Widget {
	private _grabbed : boolean;
	private _shouldGrabWhenVisible : boolean;

	constructor(type:string) {
		super(type);
		this._grabbed = false;
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
		this.dispatchEvent({type:Events.OPEN});

		return this;
	}

	public close () {
		this.dispatchEvent({type:Events.CLOSE});
		this.dispose();
	}

	public dispose() {
		this.ungrab();
		super.dispose();
	}

	public init(app:IApplication, x?:number, y?:number, w?:number, h?:number, createCanvas?:boolean) : Widget {
		this.app = app;
		this.x = x || 0;
		this.y = y || 0;
		this.w = w || 0;
		this.h = h || 0;
		if(createCanvas) {
			this.createCanvas();
		}

		return this;
	}

	private windowType: WindowType;
};
