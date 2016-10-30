
import Events = require("../events");
import {HtmlElement} from "./html-element";
import {KeyEventDetail} from "../event-detail";

export class HtmlEdit extends HtmlElement {
	protected _visible : boolean;	
	protected changeEvent : Events.ChangeEvent = Events.ChangeEvent.create();
	protected keyEvent : Events.KeyEvent = Events.KeyEvent.create(null, KeyEventDetail.create(0));
	
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
		this._visible = true;
		this.dispatchEvent({type:Events.SHOW});

		return this;
	}

	public hide() : HtmlElement {
		if(this._visible) {
			this._visible = false;
			this.element.blur();
			this.dispatchEvent({type:Events.HIDE});
		}
		this.removeAllListeners();

		return super.hide();
	}

	public create(tag : string) : HtmlEdit {
		super.create(tag);
		
		var me = this;
		var element = this.element;
		element.onkeyup = function(e) {
			var evt = me.changeEvent;
			var detail = {oldValue:this.value, newValue:this.value};
			me.dispatchEvent(me.keyEvent.init(Events.KEYUP, KeyEventDetail.create(e.keyCode)));
			
			if(e.keyCode === 13 && tag === "input") {
				me.dispatchEvent(evt.init(Events.CHANGE, detail));
				this.blur();
			}else{
				me.dispatchEvent(evt.init(Events.CHANGING, detail));
			}
		}
		
		element.onkeydown = function(e) {
			me.dispatchEvent(me.keyEvent.init(Events.KEYDOWN, KeyEventDetail.create(e.keyCode)));
		}

		element.oninput = function(evt) {
			var detail = {oldValue:this.value, newValue:this.value};
			me.dispatchEvent(me.changeEvent.init(Events.CHANGING, detail));
		}

		element.onchange = function(evt) {
			var detail = {oldValue:this.value, newValue:this.value};
			me.changeEvent.init(Events.CHANGE, detail);
			me.dispatchEvent(me.changeEvent);
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

