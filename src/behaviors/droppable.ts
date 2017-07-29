
import Events = require("../base/events");
import {KeyEvent} from "../base/key-event";
import {Widget} from "../controls/widget";
import {Behavior, BehaviorFactory} from "./behavior";

/**
 * 让Widget可作为拖放功能的Drop目标。
 * 
 */
export class Droppable extends Behavior {
	protected dragging : boolean;
	protected onPointerEnter(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.dragging = true;
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER, evt.localX, evt.localY));
		}
	}
	
	protected onPointerLeave(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE, evt.localX, evt.localY));
			this.dragging = false;
		}
	}
	
	protected onPointerUp(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP, evt.localX, evt.localY));
			Events.DragEvent.isDragging = false;
			this.dragging = false;
		}
	}

	protected onPointerMove(evt:Events.PointerEvent){
		if(Events.DragEvent.isDragging) {
			this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER, evt.localX, evt.localY));
		}
	}

	protected onCancelled() {
		var p = this.widget.win.pointerPosition;
		this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGCANCEL, p.x, p.y));
		this.dragging = false;
	}

	protected onKeyDownGlobal(evt:CustomEvent) {
		var keyCode = evt.detail.keyCode;
		if(keyCode === KeyEvent.VK_ESCAPE && this.dragging) {
			this.onCancelled();
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


