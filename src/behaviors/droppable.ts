
import Events = require("../events");
import {KeyEvent} from "../key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";

/**
 * 让Widget可作为拖放功能的Drop目标。
 * 
 */
export class Droppable extends Behavior {
	protected onPointerEnter(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER, evt.x, evt.y));
		}
	}
	
	protected onPointerLeave(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE, evt.x, evt.y));
		}
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP, evt.x, evt.y));
		}
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER, evt.x, evt.y));
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


