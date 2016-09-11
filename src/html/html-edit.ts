
import Events = require("../events");
import {HtmlElement} from "./html-element";

export class HtmlEdit extends HtmlElement {
	protected e : Events.ChangeEvent = Events.ChangeEvent.create();
	
	public set inputType(value:string) {
		if(this.tag === "input") {
			this.element.type = value;
		}
	}

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

	public create(tag : string) : HtmlEdit {
		super.create(tag);
		
		var me = this;
		var element = this.element;
		element.onkeypress = function(e) {
			var detail = {oldValue:this.value, newValue:this.value};
			if(e.keyCode === 13 && tag === "input") {
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
	
	protected static _input : HtmlEdit ;
	public static get input() : HtmlEdit {
		if(!HtmlEdit._input) {
			HtmlEdit._input = new HtmlEdit();
			HtmlEdit._input.create("input");
			HtmlEdit._input.element.type = "text";
		}
		return HtmlEdit._input;
	}
	
	protected static _textArea : HtmlEdit ;
	public static get textArea() : HtmlEdit {
		if(!HtmlEdit._textArea) {
			HtmlEdit._textArea = new HtmlEdit();
			HtmlEdit._textArea.create("textarea");
		}
		return HtmlEdit._textArea;
	}
};

