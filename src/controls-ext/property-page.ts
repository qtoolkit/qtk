
import {Rect} from "../rect";
import {TitleEdit} from "./title-edit";
import {Widget} from "../controls/widget";
import {TitleSlider} from "./title-slider";
import {TitleTextArea} from "./title-text-area";
import {TitleComboBox, TitleComboBoxEditable} from "./title-combo-box";
import {TitleChoosableEdit} from "./title-choosable-edit";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {LinearLayouterParam, LinearLayouter} from '../layouters/linear-layouter';

/**
 * 属性编辑页，包装了各种TitleValue。
 */
export class PropertyPage extends Widget {
	protected _itemH : number;
	protected _titleW : string;
	protected _valueW : string;

	public set itemH(value:number) {
		this._itemH = value;
	}
	public get itemH():number{
		return this._itemH;
	}
	public set titleW(value:string) {
		this._titleW = value;
	}
	public get titleW():string{
		return this._titleW;
	}
	
	public set valueW(value:string) {
		this._valueW = value;
	}
	public get valueW():string{
		return this._valueW;
	}

	public addEdit(title:string, value?:string, inputTips?:string, 
				   inputType?:string, inputFilter?:Function) : TitleEdit {
		var itemH = this.itemH;
		var valueW = inputType === "number" ? "50%" : this.valueW;

		var widget = TitleEdit.create({
				name:title,
				title:title,
				value:value,
				valueW:valueW,
				titleW:this.titleW,
				inputType:inputType,
				inputTips:inputTips,
				inputFilter:inputFilter,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);

		return widget;
	}

	public addChoosableEdit(title:string, value?:string, inputTips?:string) : TitleChoosableEdit {
		var itemH = this.itemH;
		var widget = TitleChoosableEdit.create({
				name:title,
				title:title,
				value:value,
				inputTips:inputTips,
				titleW:this.titleW,
				valueW:this.valueW,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);

		return widget;
	}
	
	public addComboBox(title:string, value?:string) : TitleComboBox {
		var itemH = this.itemH;
		var widget = TitleComboBox.create({
				name:title,
				title:title,
				value:value,
				titleW:this.titleW,
				valueW:this.valueW,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);

		return widget;
	}
	
	public addComboBoxEditable(title:string, value?:string) : TitleComboBoxEditable {
		var itemH = this.itemH;
		var widget = TitleComboBoxEditable.create({
				name:title,
				title:title,
				value:value,
				titleW:this.titleW,
				valueW:this.valueW,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);

		return widget;
	}
	
	public addSlider(title:string, value?:string) : TitleSlider{
		var itemH = this.itemH;
		var widget = TitleSlider.create({
				name:title,
				title:title,
				value:value,
				titleW:this.titleW,
				valueW:this.valueW,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);

		return widget;
	}
	
	public addTextArea(title:string, value?:string, h?:number) : TitleTextArea {
		var itemH = h || (this.itemH * 4);
		var widget = TitleTextArea.create({
				name:title,
				title:title,
				value:value,
				titleW:this.titleW,
				valueW:this.valueW,
				layoutParam : LinearLayouterParam.create({h:itemH})
			});
		this.addChild(widget, true);
		
		return widget;
	}

	public findByTitle(title:string) : Widget {
		return this.findChildByName(title);
	}

	protected onReset() {
		super.onReset();
		this.childrenLayouter = LinearLayouter.createV({spacing:5});
	}

	constructor() {
		super(PropertyPage.TYPE);
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, {_itemH:30, _titleW:"60px", _valueW:"100%"});
	protected getDefProps() : any {
		return PropertyPage.defProps;
	}

	public static TYPE = "property-page";
	private static rBin = new RecyclableCreator<PropertyPage>(function() {return new PropertyPage()});
	public static create(options?:any) : PropertyPage {
		return <PropertyPage>PropertyPage.rBin.create().reset(PropertyPage.TYPE, options);
	}
};

WidgetFactory.register(PropertyPage.TYPE, PropertyPage.create);

