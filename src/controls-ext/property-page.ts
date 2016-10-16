
import {Rect} from "../rect";
import Events = require("../events");
import {TitleLink} from "./title-link";
import {TitleLine} from "./title-line";
import {TitleEdit} from "./title-edit";
import {TitleValue} from "./title-value";
import {TitleLabel} from "./title-label";
import {TitleRange} from "./title-range";
import {TitleVector} from "./title-vector";
import {Widget} from "../controls/widget";
import {TitleSlider} from "./title-slider";
import {ComboBox} from "../controls/combo-box";
import {TitleTextArea} from "./title-text-area";
import {LinePropDesc, LinkPropDesc} from "./props-desc";
import {PropsDesc, PropDesc, NumberPropDesc, TextPropDesc, ReadonlyTextPropDesc} from "./props-desc";
import {RangePropDesc, Vector2PropDesc, Vector3PropDesc, SliderPropDesc, OptionsPropDesc} from "./props-desc";
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
	
	public addLabel(title:string, value:string) : TitleLabel {
		var itemH = this.itemH;
		var widget = TitleLabel.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});

		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}
	
	public addLink(title:string, value:string) : TitleLink {
		var itemH = this.itemH;
		var widget = TitleLink.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});

		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}

	public addGroupBegin(title:string) : TitleLine{
		var itemH = this.itemH;
		var widget = TitleLine.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});

		this.addChild(widget, true);

		return widget;
	}
	
	public addGroupEnd() : TitleLine {
		var itemH = this.itemH;
		var widget = TitleLine.create({
				h:itemH,
				titleW:this.titleW,
				valueW:this.valueW
			});

		this.addChild(widget, true);

		return widget;
	}
	
	public addRange(title:string, firstValue?:number, secondValue?:number) : TitleRange{
		var itemH = this.itemH;
		var widget = TitleRange.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = {first:firstValue, second:secondValue};
		this.addChild(widget, true);

		return widget;
	}
	
	public addVector2(title:string, x?:number, y?:number, xTitle?:string, yTitle?:string) : TitleVector {
		var itemH = this.itemH * 2;
		var widget = TitleVector.create({
				d:2,
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		
		var valueWidget = widget.valueWidget;
		valueWidget.set({xTitle:xTitle, yTitle:yTitle});

		widget.value = {x:x, y:y};
		this.addChild(widget, true);

		return widget;
	}
	
	public addVector3(title:string, x?:number, y?:number, z?:number, xTitle?:string, yTitle?:string, zTitle?:string) : TitleVector {
		var itemH = this.itemH *2;
		var widget = TitleVector.create({
				d:3,
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		
		var valueWidget = widget.valueWidget;
		valueWidget.set({xTitle:xTitle, yTitle:yTitle, zTitle:zTitle});

		widget.value = {x:x, y:y, z:z};
		this.addChild(widget, true);

		return widget;
	}
	

	public addEdit(title:string, value?:string, inputTips?:string, 
				   inputType?:string, inputFilter?:Function) : TitleEdit {
		var itemH = this.itemH;
		var valueW = inputType === "number" ? "50%" : this.valueW;

		var widget = TitleEdit.create({
				h:itemH,
				name:title,
				title:title,
				valueW:valueW,
				titleW:this.titleW,
				inputType:inputType,
				inputTips:inputTips,
				inputFilter:inputFilter
			});
		
		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}

	public addChoosableEdit(title:string, value?:string, inputTips?:string) : TitleChoosableEdit {
		var itemH = this.itemH;
		var widget = TitleChoosableEdit.create({
				h:itemH,
				name:title,
				title:title,
				inputTips:inputTips,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}
	
	public addComboBox(title:string, value?:string) : TitleComboBox {
		var itemH = this.itemH;
		var widget = TitleComboBox.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}
	
	public addComboBoxEditable(title:string, value?:string) : TitleComboBoxEditable {
		var itemH = this.itemH;
		var widget = TitleComboBoxEditable.create({
				h:itemH,
				name:title,
				title:title,
				value:value,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}
	
	public addSlider(title:string, value?:string) : TitleSlider{
		var itemH = this.itemH;
		var widget = TitleSlider.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}
	
	public addTextArea(title:string, value?:string, h?:number) : TitleTextArea {
		var itemH = h || (this.itemH * 4);
		var widget = TitleTextArea.create({
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		widget.value = value,
		this.addChild(widget, true);
		
		return widget;
	}

	public findByTitle(title:string) : Widget {
		return this.findChildByName(title);
	}

	protected addWithPropDesc(item:PropDesc) {
		var titleValue:TitleValue = null;

		if(item.type === NumberPropDesc.TYPE) {
			titleValue = this.addEdit(item.name, item.value, item.desc, "number");
		}else if(item.type === TextPropDesc.TYPE) {
			titleValue = this.addEdit(item.name, item.value, item.desc, "text");
		}else if(item.type === ReadonlyTextPropDesc.TYPE) {
			titleValue = this.addLabel(item.name, item.value);
		}else if(item.type === SliderPropDesc.TYPE) {
			titleValue = this.addSlider(item.name, item.value);
		}else if(item.type === LinkPropDesc.TYPE) {
			titleValue = this.addLink(item.name, item.value);
		}else if(item.type === LinePropDesc.TYPE) {
			if(item.name) {
				titleValue = this.addGroupBegin(item.name);
			}else{
				titleValue = this.addGroupEnd();
			}
		}else if(item.type === RangePropDesc.TYPE) {
			var value = item.value || {first:0, second:0};
			titleValue = this.addRange(item.name, value.first, value.second);
		}else if(item.type === Vector2PropDesc.TYPE) {
			var p2 = <Vector2PropDesc>item;
			var value = item.value || {x:0, y:0};
			titleValue = this.addVector2(item.name, value.x, value.y, p2.xTitle, p2.yTitle);
		}else if(item.type === OptionsPropDesc.TYPE) {
			var value = item.value || {x:0, y:0};
			var propDesc = <OptionsPropDesc>item;
			titleValue = this.addComboBox(item.name, value);
			if(propDesc.options) {
				var comboBox = <ComboBox>titleValue.valueWidget;
				comboBox.optionsJson = propDesc.options;
			}
		}else if(item.type === Vector3PropDesc.TYPE) {
			var p3 = <Vector3PropDesc>item;
			var value = item.value || {x:0, y:0, z:0};
			titleValue = this.addVector3(item.name, value.x, value.y, value.z, p3.xTitle, p3.yTitle, p3.zTitle);
		}

		if(titleValue && item.path) {
			var valueWidget = titleValue.valueWidget;
			var bindRule = {
				value:{
					path:item.path, 
					converter:item.converter, 
					validationRule:item.validationRule
				}
			};
			valueWidget.dataBindingRule = bindRule;
		}
	}

	public initWithPropsDesc(propsDesc) {
		this.removeAllChildren();
		propsDesc.forEach((item:PropDesc) => {
			this.addWithPropDesc(item);
		});
		propsDesc.once(Events.CHANGE, evt=> {
			console.log("reload changed");
			this.initWithPropsDesc(propsDesc);
		});
		
		var viewModal = this._viewModal;
		if(viewModal) {
			this.children.forEach((child:Widget) => {
				child.bindData(viewModal);
			});
		}

		this.relayoutChildren();
	}

	public initWithJson(json:any) {
		var propsDesc = PropsDesc.create(json);
		this.initWithPropsDesc(propsDesc);
	}

	protected onAddChild(child:Widget) {
		this.reComputeH();
	}
	
	protected onRemoveChild(child:Widget) {
		this.reComputeH();
	}

	protected reComputeH() : Widget {
		var h = this.topPadding + this.bottomPadding;

		this.children.forEach((child:Widget) => {
			h += child.h;
		});

		this.h = h;

		return this;
	}

	public relayoutChildren() : Rect {
		var r = this.getLayoutRect();
		
		var y = r.y;
		this.children.forEach((child:Widget) => {
			child.moveResizeTo(r.x, y, r.w, child.h, 0);
			child.relayoutChildren();
			y+= child.h;
		});

		this.h = this.bottomPadding + y;
		this.requestRedraw();
		return r;
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

