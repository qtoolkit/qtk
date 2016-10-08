
import Events = require("../events");
import {Label} from "../controls/label";
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

export abstract class TitleValue extends Widget {
	protected _title : string;
	protected _titleW : string;
	protected _valueW : string;
	protected _titleWidget : Widget;
	protected _valueWidget : Widget;

	constructor(type?:string) {
		super(type);
	}

	public set title(value:string) {
		this._title = value;
	}

	public get title() : string {
		return this._title;
	}

	public set titleW(value:string) {
		this._titleW = value;
	}
	public get titleW() : string {
		return this._titleW;
	}
	
	public set valueW(value:string) {
		this._valueW = value;
	}
	public get valueW() : string {
		return this._valueW;
	}

	public get titleWidget() : Widget{
		return this._titleWidget;
	}

	public get valueWidget() : Widget {
		return this._valueWidget;
	}

	public get value() : any {
		return this._valueWidget ? this.valueWidget.value : this._value;
	}

	public set value(value:any) {
		this._value = value;
		if(this._valueWidget) {
			this._valueWidget.value = value;
		}
	}

	/*
	 * Child must override
	 */
	protected createValueWidget(options?:any) : Widget {
		return null;
	}

	public onInit() {
		super.onInit();
		this.titleWidget.text = this._title;
		this.titleWidget.layoutParam = LinearLayouterParam.create({w:this._titleW, h:"100%"});
		this.valueWidget.layoutParam = LinearLayouterParam.create({w:this._valueW, h:"100%"});
	}

	public onReset() {
		super.onReset();

		this.childrenLayouter = LinearLayouter.createH({spacing:5});

		var titleWidget = Label.create();
		this.addChild(titleWidget);
		this._titleWidget = titleWidget;

		var valueWidget = this.createValueWidget();
		this.addChild(valueWidget);
		this._valueWidget = valueWidget;

		if(this._value !== undefined) {
			valueWidget.value = this._value;
		}

		valueWidget.on(Events.CHANGE, evt => {
			this.dispatchEvent(evt);
		});
		valueWidget.on(Events.CHANGING, evt => {
			this.dispatchEvent(evt);
		});
	}
	
	protected onToJson(json:any) {
		delete json._value;
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_lp:2, _tp:2, _rp:2, _bp:2,
		_title:null, _titleW:60, _valueW:60});

	protected getDefProps() : any {
		return TitleValue.defProps;
	}
	
	public dispose(){
		super.dispose();
		this._titleWidget = null;
		this._valueWidget = null;
	}
};
