import {Widget} from "./widget";
import Events = require("./events");
import {IApplication} from "./iapplication";
import inputEventAdapter = require("./input-event-adapter");

export enum WindowType {
	NORMAL,
	POPUP
};

export class Window extends Widget {
	constructor(type:string) {
		super(type);
	}
	
	public grab() : Widget {
		if(this.canvas) {
			inputEventAdapter.grab(this.canvas);
		}

		return this;
	}

	public ungrab() : Widget {
		if(this.canvas) {
			inputEventAdapter.ungrab(this.canvas);
		}

		return this;
	}
	
	public open() : Widget {
		this.dispatchEvent({type:Events.OPEN});

		return this;
	}

	public close () {
		this.dispatchEvent({type:Events.CLOSE});
		this.dispose();
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
