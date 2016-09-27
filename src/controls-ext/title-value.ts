
import {Label} from "../controls/label";
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

export class TitleValue extends Widget {
	protected _title : string;
	protected _titleW : string;
	protected _valueW : string;
	protected _titleWidget : Widget;
	protected _valueWidget : Widget;
	protected _valueWidgetCreator : Function;

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

	protected onInit() {
		super.onInit();
		var h = this.clientH; 
		
		var titleWidget = Label.create({text:this._title});
		titleWidget.layoutParam = LinearLayouterParam.create({w:this._titleW, h:h});
		this.addChild(titleWidget);
		this._titleWidget = titleWidget;

		var valueWidget = this.createValueWidget();
		if(valueWidget) {
			valueWidget.layoutParam = LinearLayouterParam.create({w:this._valueW, h:h});
			this.addChild(valueWidget);
			this._valueWidget = valueWidget;
		}
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.childrenLayouter = LinearLayouter.createH({spacing:5});

		return this;
	}
	
	public dispose(){
		super.dispose();
		this._titleWidget = null;
		this._valueWidget = null;
	}
};
