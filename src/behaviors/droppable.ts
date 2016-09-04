
import Events = require("../events");
import {KeyEvent} from "../key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";

/**
 * 让Widget具有拖放功能的Drop目标。
 * 
 */
export class Droppable extends Behavior {
	protected onPointerEnter(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER));
		}
	}
	
	protected onPointerLeave(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE));
		}
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP));
		}
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER));
		}
	}

	constructor(widget:Widget, options:any) {
		super(Droppable.TYPE, widget, options);
	};

	public static TYPE = "droppable";
}

BehaviorFactory.register(Droppable.TYPE, function(widget:Widget, options:any) {
	return new Droppable(widget, options);
});


