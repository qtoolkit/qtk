
import Events = require("../events");
import {HtmlElement} from "./html-element";

export class HtmlEdit extends HtmlElement {
	protected e : Events.ChangeEvent = Events.ChangeEvent.create();

	public set text(value:string) {
		this.element.value = value;
	}

	public get text() {
		return this.element.value;
	}

	public show() : HtmlElement {
		super.show();
		this.element.focus();
		this.dispatchEvent({type:Events.SHOW});

		return this;
	}

	public hide() : HtmlElement {
		this.element.blur();
		this.dispatchEvent({type:Events.HIDE});

		return super.hide();
	}

	public create(tag?:string) : HtmlElement {
		var me = this;
		super.create(tag);
		var element = this.element;

		element.type = "text";
		element.onkeypress = function(e) {
			var detail = {oldValue:this.value, newValue:this.value};
			if(e.keyCode === 13) {
				this.blur();
				me.e.init(Events.CHANGE, detail);
			}else{
				me.e.init(Events.CHANGING, detail);
			}
			me.dispatchEvent(me.e);
		}
		
		element.onchange = function(evt) {
			var detail = {oldValue:this.value, newValue:this.value};
			me.e.init(Events.CHANGE, detail);
			me.dispatchEvent(me.e);
		}
		
		element.onblur = function(evt) {
			me.hide();
		}

		return this;
	}
};

