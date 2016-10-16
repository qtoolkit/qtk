
import {Rect} from "../rect";
import {Style} from "../style";
import {Point} from "../point";
import {Label} from "../controls/label";
import {Edit} from "../controls/edit";
import {Button} from "../controls/button";
import {Widget} from "../controls/widget";
import Events = require("../events");
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {GridLayouter, GridLayouterParam} from "../layouters/grid-layouter";

/**
 * 范围编辑器。
 */
export class VectorEdit extends Widget {
	protected _d : number;

	protected _xTitle : string;
	protected _xLabel : Label;
	protected _xEditor : Edit;
	
	protected _yTitle : string;
	protected _yLabel : Label;
	protected _yEditor : Edit;
	
	protected _zLabel : Label;
	protected _zEditor : Edit;
	protected _zTitle : string;
	
	protected _wLabel : Label;
	protected _wEditor : Edit;
	protected _wTitle : string;

	public set xTitle(value:string) {
		if(value || value === "") {
			this._xTitle;
			this._xLabel.text = value;
		}
	}
	public get xTitle() : string{
		return this._xTitle;
	}

	public set yTitle(value:string) {
		if(value || value === "") {
			this._yTitle;
			this._yLabel.text = value;
		}
	}
	public get yTitle() : string{
		return this._yTitle;
	}

	public set zTitle(value:string) {
		if(value || value === "") {
			this._zTitle;
			this._zLabel.text = value;
		}
	}
	public get zTitle() : string{
		return this._zTitle;
	}
	
	public set wTitle(value:string) {
		if(value || value === "") {
			this._wTitle;
			this._wLabel.text = value;
		}
	}
	public get wTitle() : string{
		return this._wTitle;
	}

	public get inputable() {
		return true;
	}

	/**
	 * dimension
	 */
	public get d() : number {
		return this._d;
	}
	
	public set d(value:number){
		this._d = value;;
	}

	public get xEditor() : Edit {
		return this._xEditor;
	}

	public get yEditor() : Edit {
		return this._yEditor;
	}
	
	public get zEditor() : Edit {
		return this._zEditor;
	}
	
	public get wEditor() : Edit {
		return this._wEditor;
	}

	public set value(value:any) {
		this._value = value;
		if(this._xEditor) {
			this._xEditor.value = +value.x;
		}
		if(this._yEditor) {
			this._yEditor.value = +value.y;
		}
		if(this._zEditor) {
			this._zEditor.value = +value.z;
		}
		if(this._wEditor) {
			this._wEditor.value = +value.w;
		}
	}

	public get value() : any {
		if(!this._value) {
			this._value = {};
		}
		if(this._xEditor) {
			this._value.x = +(this._xEditor.value);
		}
		if(this._yEditor) {
			this._value.y = +(this._yEditor.value);
		}
		if(this._zEditor) {
			this._value.z = +(this._zEditor.value);
		}
		if(this._wEditor) {
			this._value.w = +(this._wEditor.value);
		}

		return this._value;
	}
	
	protected onToJson(json:any) {
		delete json._value;
	}

	public dispose() {
		this._xEditor = null;
		this._yEditor = null;
		this._zEditor = null;
		this._wEditor = null;
		this._xLabel = null;
		this._yLabel = null;
		this._zLabel = null;
		this._wLabel = null;

		super.dispose();
	}

	protected forwardChangeEvent(evt:Events.ChangeEvent) {
		var e = this.eChangeEvent;
		e.init(evt.type, {value:this.value});
		this.dispatchEvent(e);
	}

	protected createEdit(value:number) : Edit {
		var edit = Edit.create({multiLineMode:false, value:value, inputType:"number"});
		this.addChild(edit, false);

		edit.on(Events.CHANGE, evt => {
			this.forwardChangeEvent(evt);
		});
		edit.on(Events.CHANGING, evt => {
			this.forwardChangeEvent(evt);
		});

		return edit;
	}

	protected createLabel(text:string) : Label {
		var label  = Label.create({text:text});
		label.set({multiLineMode:false, topPadding:10, bottomPadding:0, styleType:"label.small"});
		this.addChild(label, false);

		return label;
	}

	protected onCreated() {
		super.onCreated();
		this.padding = 0;
		var value = this._value || {x:0, y:0, z:0, w:0};
		this.d = Math.max(2, Math.min(4, this.d || 2));
		var cols = this.d;
		var rows = 2;
		
		this.childrenLayouter = GridLayouter.create({rows:rows, cols:cols, rightMargin:10}); 
		
		this._xLabel = this.createLabel(this._xTitle);
		this._yLabel = this.createLabel(this._yTitle);
		if(this.d > 2) {
			this._zLabel = this.createLabel(this._zTitle);
		}
		if(this.d > 3) {
			this._wLabel = this.createLabel(this._wTitle);
		}

		this._xEditor = this.createEdit(value.x);
		this._yEditor = this.createEdit(value.y);
		if(this.d > 2) {
			this._zEditor = this.createEdit(value.z);
		}
		if(this.d > 3) {
			this._wEditor = this.createEdit(value.w);
		}

		this.relayoutChildren();
	}

	constructor() {
		super(VectorEdit.TYPE);
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, 
				{_d:2, _xTitle:"X", _yTitle:"Y", _zTitle:"Z", _wTitle:"W"});
	protected getDefProps() : any {
		return VectorEdit.defProps;
	}

	public static TYPE = "vector.edit";
	private static rBin = new RecyclableCreator<VectorEdit>(function() {
		return new VectorEdit()});
	public static create(options?:any) : VectorEdit {
		return <VectorEdit>VectorEdit.rBin.create().reset(VectorEdit.TYPE, options);
	}
};

WidgetFactory.register(VectorEdit.TYPE, VectorEdit.create);

