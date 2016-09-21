
import {Style} from "../style";
import {Point} from "../point";
import {Label} from "./label";
import {Widget} from "./widget";
import Events = require("../events");
import {WidgetFactory} from "./widget-factory";
import {HtmlEdit} from "../html/html-edit";
import {RecyclableCreator} from "../recyclable-creator";

export class Edit extends Label {
	protected _input : HtmlEdit; 
	protected _isEditing : boolean;
	protected _inputType : string;
	protected _inputTips : string;

	public set inputTips(value:string) {
		this._inputTips = value;
	}

	public get inputTips() : string {
		return this._inputTips;
	}

	public set inputType(value:string) {
		this._inputType = value;
	}

	public get inputType() : string {
		return this._inputType;
	}

	public draw(ctx:any) {
		if(!this._isEditing) {
			super.draw(ctx);
		}
	}

	public relayoutText() : Widget {
		if(!this._isEditing) {
			super.relayoutText();
		}

		return this;
	}

	protected drawText(ctx:any, style:Style) : Widget {
		if(this._textLines && this._textLines.length) {
			super.drawText(ctx, style);
		}else if(this._inputTips){
			this.drawTextSL(ctx, this._inputTips, style);
		}

		return this;
	}

	protected getStyleType() : string {
		if(this._styleType) {
			return this._styleType;
		}else {
			if(this._text || this._isEditing) {
				return this.multiLines ? "edit.ml" : "edit.sl";
			}else{
				return "edit.tips";
			}
		}
	}

	protected showEditor() {
		var style = this.getStyle();
		this._input = this.multiLines ? HtmlEdit.textArea : HtmlEdit.input;
		
		var input = this._input;
		var p = this.toViewPoint(Point.point.init(0, 0));

		input.move(p.x, p.y);
		input.text = this.text || ""; 
		input.resize(this.w, this.h);
		input.fontSize = style.fontSize;
		input.inputType = this.inputType;
		input.textColor = style.textColor;
		input.fontFamily = style.fontFamily;
		input.show();
		input.z = this.win.z + 1;

		this.dispatchEvent({type:Events.FOCUS});
		input.on(Events.HIDE, evt => {
			this._isEditing = false;
			this.relayoutText();
			this._input = null;
			this.dispatchEvent({type:Events.BLUR});
		});
		
		input.on(Events.CHANGING, evt => {
			this.text = evt.value;
			this.dispatchEvent(evt);
		});
		
		input.on(Events.CHANGE, evt => {
			this.text = evt.value;
			this.dispatchEvent(evt);
		});
	}

	constructor() {
		super(Edit.TYPE);
	}

	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this._isEditing) {
			this._isEditing = true;
			this.showEditor();
		}
	}

	public static TYPE = "edit";
	private static r = new RecyclableCreator<Edit>(function() {return new Edit()});
	public static create(options?:any) : Edit {
		return <Edit>Edit.r.create().reset(Edit.TYPE).set(options);
	}
};

WidgetFactory.register(Edit.TYPE, Edit.create);

