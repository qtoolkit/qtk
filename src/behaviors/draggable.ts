
import {Widget} from "../widget";
import {Behavior, BehaviorFactory} from "./behavior";
import Events = require("../events");
import inputEventAdapter = require("../input-event-adapter");

export class Draggable extends Behavior {
	public x:number;
	public y:number;

	public onPointerDown(evt:Events.PointerEvent){
		this.x = this.widget.x;
		this.y = this.widget.y;
		document.body.style.cursor="move"; 
	}
	
	public onPointerUp(evt:Events.PointerEvent){
		document.body.style.cursor="default"; 
	}

	public onPointerMove(evt:Events.PointerEvent){
		if(evt.pointerDown) {
			var dx = evt.x - evt.pointerDownX;
			var dy = evt.y - evt.pointerDownY;

			this.widget.x = this.x + dx;
			this.widget.y = this.y + dy;
		}
	}

	constructor(widget:Widget, options:any) {
		super(Draggable.TYPE, widget, options);
	};

	public static TYPE = "draggable";
}

BehaviorFactory.register(Draggable.TYPE, function(widget:Widget, options:any) {
	return new Draggable(widget, options);
});

