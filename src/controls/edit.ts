
import {Style} from "../style";
import {Point} from "../point";
import {Label} from "./label";
import {Widget} from "./widget";
import Events = require("../events");
import {WidgetFactory} from "./widget-factory";
import {HtmlEdit} from "../html/html-edit";
import {RecyclableCreator} from "../recyclable-creator";

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

	protected showEditor() {
		var style = this.getStyle();
		this._input = this.multiLineMode ? HtmlEdit.textArea : HtmlEdit.input;
		
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
			var e = this.eChangeEvent;
			this.text = this.filterText(evt.value);
			
			e.init(Events.CHANGING, {value:this.text});;
			this.dispatchEvent(e);
		});
		
		input.on(Events.CHANGE, evt => {
			var e = this.eChangeEvent;
			this.text = this.filterText(evt.value);
			
			e.init(Events.CHANGE, {value:this.text});;
			this.dispatchEvent(e);
		});
	}

	constructor() {
		super(Edit.TYPE);
	}

	public dispose() {
		super.dispose();
		this._input = null;
		this._inputFilter = null;
	}

	protected dispatchClick(evt:any) {
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
	private static r = new RecyclableCreator<Edit>(function() {return new Edit()});
	public static create(options?:any) : Edit {
		return <Edit>Edit.r.create().reset(Edit.TYPE, options);
	}
};

WidgetFactory.register(Edit.TYPE, Edit.create);

