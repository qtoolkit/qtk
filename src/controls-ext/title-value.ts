
import Events = require("../base/events");
import {Label} from "../controls/label";
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

/**
 * @class TitleValue
 * @extends Widget
 * 带标题控件的基类。
 */
export abstract class TitleValue extends Widget {
	protected _title : string;
	protected _titleW : string;
	protected _valueW : string;
	protected _titleWidget : Widget;
	protected _valueWidget : Widget;

	constructor(type?:string) {
		super(type);
	}

	/**
	 * @property {string} title
	 * 标题。
	 */	
	public set title(value:string) {
		this._title = value;
	}
	public get title() : string {
		return this._title;
	}

	/**
	 * @property {string} titleW
	 * 标题控件的宽度。
	 */
	public set titleW(value:string) {
		this._titleW = value;
		if(this.titleWidget && this.titleWidget.layoutParam) {
			this.titleWidget.layoutParam.w = value;
		}
	}
	public get titleW() : string {
		return this._titleW;
	}

	/**
	 * @prproperty {string} valueW
	 * 值控件的宽度。
	 */	
	public set valueW(value:string) {
		this._valueW = value;
		if(this.valueWidget && this.valueWidget.layoutParam) {
			this.valueWidget.layoutParam.w = value;
		}
	}
	public get valueW() : string {
		return this._valueW;
	}

	/**
	 * @property {Widget} titleWidget
	 * 标题控件。
	 */
	public get titleWidget() : Widget{
		return this._titleWidget;
	}

	/**
	 * @property {Widget} valueWidget
	 * 值控件。
	 */
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

	/**
	 * @method createValueWidget
	 * 创建值控件，子类需要重载此函数。
	 */
	protected createValueWidget(options?:any) : Widget {
		return null;
	}

	public onInit() {
		super.onInit();
		this.titleWidget.text = this._title;
		this.titleWidget.layoutParam = LinearLayouterParam.createWithOptions({w:this._titleW, h:"100%"});
		this.valueWidget.layoutParam = LinearLayouterParam.createWithOptions({w:this._valueW, h:"100%"});
	}

	public onReset() {
		super.onReset();

		this.childrenLayouter = LinearLayouter.createHWithOptions({spacing:5});

		var titleWidget = Label.create();
		this.addChild(titleWidget);
		this._titleWidget = titleWidget;

		var valueWidget = this.createValueWidget();
		this.addChild(valueWidget);
		this._valueWidget = valueWidget;

		if(this._value !== undefined) {
			valueWidget.value = this._value;
		}
	}

	protected forwardChangeEvent(evt:Events.ChangeEvent) {
		var e = this.eChangeEvent;
		e.init(evt.type, {value:this.value});
		this.dispatchEvent(e);
	}

	protected onCreated() {
		super.onCreated();

		var valueWidget = this.valueWidget;
		valueWidget.on(Events.CHANGE, (evt:Events.ChangeEvent) => {
			this.forwardChangeEvent(evt);
		});
		valueWidget.on(Events.CHANGING, (evt:Events.ChangeEvent) => {
			this.forwardChangeEvent(evt);
		});
	}

	protected onToJson(json:any) {
		delete json._value;
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_lp:2, _tp:2, _rp:2, _bp:2,
		_title:null, _titleW:80, _valueW:60});

	protected getDefProps() : any {
		return TitleValue.defProps;
	}
	
	public dispose(){
		super.dispose();
		this._titleWidget = null;
		this._valueWidget = null;
	}
};
