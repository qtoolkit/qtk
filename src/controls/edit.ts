
import {Rect} from "../base/rect";
import {Point} from "../base/point";
import {Style} from "../base/style";
import {Label} from "./label";
import Events = require("../base/events");
import {KeyEvent} from "../base/key-event";
import {HtmlEdit} from "../html/html-edit";
import {IViewPort} from "../base/iview-port";
import {IApplication} from "../iapplication";
import {Widget, WidgetState} from "./widget";
import {IThemeManager} from "../base/itheme-manager";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../base/graphics";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 编辑器。multiLineMode决定是多行编辑器还是单行编辑器。
 */
export class Edit extends Label {
	protected _it : string;
	protected _itp : string;
	protected _input : HtmlEdit; 
	protected _isEditing : boolean;
	protected _inputFilter : Function;

	public get inputable() {
		return true;
	}

	/**
	 * 输入过滤器，对输入的文本进行转换。
	 */
	public set inputFilter(value:(value:string) => string) {
		this._inputFilter = value;
	}

	/**
	 * 输入提示。
	 */
	public set inputTips(value:string) {
		this._it = value;
	}

	public get inputTips() : string {
		return this._it;
	}

	/**
	 * 输入类型。
	 */
	public set inputType(value:string) {
		this._itp = value;
	}

	public get inputType() : string {
		return this._itp;
	}

	public draw(ctx:any) {
		if(!this._isEditing) {
			super.draw(ctx);
		}else{
		}
	}

	protected onWheel = function() {
		var input = this._input;
		if(input) {
			input.hide();
			this.hideEditor();
		}
	}.bind(this);

	public relayoutText() : Widget {
		if(!this._isEditing) {
			super.relayoutText();
		}

		return this;
	}

	protected drawText(ctx:any, style:Style) : Widget {
		if(this._textLines && this._textLines.length) {
			super.drawText(ctx, style);
		}else if(this._it){
			this.drawTextSL(ctx, this._it, style);
		}

		return this;
	}

	protected getStyleType() : string {
		if(this._styleType) {
			return this._styleType;
		}else {
			if(this._text || this._isEditing) {
				return this.multiLineMode ? "edit.ml" : "edit.sl";
			}else{
				return this.multiLineMode ? "edit.ml.tips" : "edit.sl.tips";
			}
		}
	}

	protected filterText(value:string) : string {
		return this._inputFilter ? this._inputFilter(value) : value;
	}

	protected hideEditor() {
		if(this._isEditing) {
			this._isEditing = false;
			this.relayoutText();
			this._input = null;
			this.dispatchEvent({type:Events.BLUR});
			this.win.off(Events.WHEEL, this.onWheel);
		}
		this.requestRedraw();
	}

	public notifyChangeEx(type:string, value:any, oldValue:any) {
		var e = this.eChangeEvent;
		e.init(type, {value:value, oldValue:oldValue});;
		this.dispatchEvent(e);
	}

	protected showEditor() {
		var style = this.getStyle();
		this._input = this.multiLineMode ? HtmlEdit.textArea : HtmlEdit.input;
		var input = this._input;
		var vp = this.app.getViewPort();	
		var p = this.toViewPoint(Point.point.init(0, 0));
		var borderWidth = input.borderWidth * 2;
		var x = Math.max(0, p.x);
		var y = Math.max(0, p.y);
		var w = Math.min(this.w, vp.w - x - borderWidth);
		var h = Math.min(this.h, vp.h - y - borderWidth);

		input.move(x, y);
		input.resize(w, h);
		input.fontSize = style.fontSize;
		input.inputType = this.inputType;
		input.textColor = style.textColor;
		input.fontFamily = style.fontFamily;
		input.text = this.text || ""; 
		input.show();
		input.z = this.win.z + 1;
		var oldValue = this.value;

		this.dispatchEvent({type:Events.FOCUS});
		this.win.on(Events.WHEEL, this.onWheel);

		input.on(Events.HIDE, evt => {
			this.hideEditor();
		});
		
		input.on(Events.CHANGING, evt => {
			this.text = this.filterText(evt.value);
			var value = this.inputType === "number" ? +this.text : this.text;	

			this.notifyChangeEx(Events.CHANGING, value, null);
		});
		
		input.on(Events.CHANGE, evt => {
			this.text = this.filterText(evt.value);
			var value = this.inputType === "number" ? +this.text : this.text;	
			
			this.notifyChangeEx(Events.CHANGE, value, oldValue);
		});
		
		input.on(Events.KEYDOWN, evt => {
			this.dispatchEvent(evt);
		});
		
		input.on(Events.KEYUP, evt => {
			if(!this.multiLineMode && evt.keyCode === KeyEvent.VK_RETURN) {
				this.dispatchEvent({type:Events.CONFIRM});
			}
			this.dispatchEvent(evt);
		});
	}

	protected _validationTips : string;
	public set validationTips(value:string) {
		this._validationTips = value;
	}

	protected drawInvalidInputTips = function(evt:Events.DrawEvent) {
		var win = this.win;
		var tm = this._themeManager;
		var text = this._validationTips;
		var style = tm.get("edit.invalid.tips", this.stateToString(WidgetState.NORMAL));
		
		if(!this._isEditing || !text || !style) {
			return;
		}

		var maxH = win.h;
		var maxW = win.w;
		var ctx = evt.ctx;
		var p = this.toGlobalPoint(Point.point.init(0, 0));
		var width = Graphics.measureText(text, style.font) + 20;
	
		var x = p.x - win.x;
		var y = p.y - win.y + 5;
		
		if((x + width) >= maxW) {
			x = maxW - width;
		}
		
		var r = null;
		if((y + this.h) < maxH) {
			r = Rect.rect.init(x, y+this.h, width, 30);
		}else{
			r = Rect.rect.init(x, y, width, 30);
		}

		Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth,
							   r.x, r.y, r.w, r.h, style.roundRadius); 
		Graphics.drawTextSL(ctx, text, style, r);

	}.bind(this);

	protected onInvalidInput(message:string) {
		var win = this.win;
		if(this._validationTips === message) {
			return;
		}

		this._validationTips = message;
		win.off(Events.AFTER_DRAW, this.drawInvalidInputTips);
		if(message) {
			win.on(Events.AFTER_DRAW, this.drawInvalidInputTips); 
		}
		win.requestRedraw();
	}

	constructor() {
		super(Edit.TYPE);
	}

	public dispose() {
		super.dispose();
		this._input = null;
		this._inputFilter = null;
	}

	public dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this._isEditing) {
			this._isEditing = true;
			this.showEditor();
		}
	}

	protected static defProps = Object.assign({}, Label.defProps, {_mlm:false, _it:null, _itp:null});
	protected getDefProps() : any {
		return Edit.defProps;
	}

	public static TYPE = "edit";
	private static r = WidgetRecyclableCreator.create(Edit);
	public static create(options?:any) : Edit {
		return <Edit>Edit.r.create(options);
	}
};

WidgetFactory.register(Edit.TYPE, Edit.create);

