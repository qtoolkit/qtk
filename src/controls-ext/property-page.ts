
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
import {TitleCheckButton} from "./title-check-button";
import {WidgetFactory} from "../controls/widget-factory";
import {TitleChoosableEdit} from "./title-choosable-edit";
import {BoolPropDesc, LinePropDesc, LinkPropDesc} from "./props-desc";
import {TitleComboBox, TitleComboBoxEditable} from "./title-combo-box";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";
import {LinearLayouterParam, LinearLayouter} from '../layouters/linear-layouter';

import {HtmlElement} from "../html/html-element";
import {toUpdateTiming, toBindingMode} from "../mvvm/iview-model";

import {Vector4PropDesc, ColorPropDesc, ReadonlyTextPropDesc} from "./props-desc";
import {PropsDesc, PropDesc, NumberPropDesc, TextPropDesc, PagePropsDesc} from "./props-desc";
import {RangePropDesc, Vector2PropDesc, Vector3PropDesc, SliderPropDesc, OptionsPropDesc} from "./props-desc";

/**
 * @class PropertyPage
 * @extends Widget
 * 属性编辑页，包装了各种TitleValue，可以直接通过JSON创建属性页。
 */
export class PropertyPage extends Widget {
	protected _itemH : number;
	protected _titleW : string;
	protected _valueW : string;

	/**
	 * @property {number} itemH
	 * 每一项的高度。
	 */
	public set itemH(value:number) {
		this._itemH = value;
	}
	public get itemH():number{
		return this._itemH;
	}

	/**
	 * @property {number} titleW
	 * 属性的标题的宽度。
	 */
	public set titleW(value:string) {
		this._titleW = value;
	}
	public get titleW():string{
		return this._titleW;
	}
	
	/**
	 * @property {number} valueW
	 * 属性的Value的宽度。
	 */
	public set valueW(value:string) {
		this._valueW = value;
	}
	public get valueW():string{
		return this._valueW;
	}
	
	/**
	 * @method addLabel
	 * 增加一个文本控件。
	 * @param {string} title 标题。
	 * @param {string} label 文本内容。
	 * @return {TitleLabel} 返回新创建的TitleLabel控件。
	 */
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
	
	/**
	 * @method addCheckButton
	 * 增加一个CheckButton控件。
	 * @param {string} title 标题。
	 * @param {string} value CheckButton的值。
	 * @return {TitleCheckButton} 返回新创建的TitleCheckButton控件。
	 */
	public addCheckButton(title:string, value:boolean) : TitleCheckButton {
		var itemH = this.itemH;
		var widget = TitleCheckButton.create({
				h:itemH,
				name:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		var valueWidget = widget.valueWidget;
		valueWidget.text = title;

		widget.value = value,
		this.addChild(widget, true);

		return widget;
	}

	/**
	 * @method addLink
	 * 增加一个超链接控件。
	 * @param {string} title 标题。
	 * @param {string} value URL。
	 * @return {TitleLink} 返回新创建的TitleLink控件。
	 */
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

	/**
	 * @method addGroupBegin
	 * 增加一个分组开始控件。
	 * @param {string} title 标题。
	 * @return {TitleLine} 返回新创建的TitleLine控件。
	 */
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
	
	/**
	 * @method addGroupEnd
	 * 增加一个分组结束控件。
	 * @return {TitleLine} 返回新创建的TitleLine控件。
	 */
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

	/**
	 * @method addRange
	 * 增加一个范围控件。
	 * @param {string} title 标题。
	 * @param {number} firstValue 起始值 
	 * @param {number} secondValue 结束值
	 * @return {TitleRange} 返回新创建的TitleRange控件。
	 */	
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
	
	/**
	 * @method addVector2
	 * 增加一个二维向量控件。
	 * @param {string} title 标题。
	 * @param {number} x X分量。
	 * @param {number} y Y分量。
	 * @param {string} xTitle X分量标题。
	 * @param {string} yTitle X分量标题。
	 * @return {TitleVector} 返回新创建的TitleVector控件。
	 */	
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
	
	/**
	 * @method addVector3
	 * 增加一个三维向量控件。
	 * @param {string} title 标题。
	 * @param {number} x X分量。
	 * @param {number} y Y分量。
	 * @param {number} z Z分量。
	 * @param {string} xTitle X分量标题。
	 * @param {string} yTitle X分量标题。
	 * @param {string} zTitle Z分量标题。
	 * @return {TitleVector} 返回新创建的TitleVector控件。
	 */	
	public addVector3(title:string, x?:number, y?:number, z?:number, 
					  xTitle?:string, yTitle?:string, zTitle?:string) : TitleVector {
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
	
	/**
	 * @method addVector4
	 * 增加一个四维向量控件。
	 * @param {string} title 标题。
	 * @param {number} x X分量。
	 * @param {number} y Y分量。
	 * @param {number} z Z分量。
	 * @param {number} w W分量。
	 * @param {string} xTitle X分量标题。
	 * @param {string} yTitle X分量标题。
	 * @param {string} zTitle Z分量标题。
	 * @param {string} wTitle W分量标题。
	 * @return {TitleVector} 返回新创建的TitleVector控件。
	 */	
	public addVector4(title:string, x?:number, y?:number, z?:number, w?:number, 
					  xTitle?:string, yTitle?:string, zTitle?:string, wTitle?:string) : TitleVector {
		var itemH = this.itemH*2;
		var widget = TitleVector.create({
				d:4,
				h:itemH,
				name:title,
				title:title,
				titleW:this.titleW,
				valueW:this.valueW
			});
		
		var valueWidget = widget.valueWidget;
		valueWidget.set({xTitle:xTitle, yTitle:yTitle, zTitle:zTitle, wTitle:wTitle});

		widget.value = {x:x, y:y, z:z, w:w};
		this.addChild(widget, true);

		return widget;
	}

	/**
	 * @method addEdit
	 * 增加一个编辑控件。
	 * @param {string} title 标题。
	 * @param {string} value 编辑器的值。
	 * @param {string} inputTips 输入提示。
	 * @param {string} inputType 输入类型，"text"为文本，"number"为数字。
	 * @param {Function} inputFilter输入过滤器，对输入的值进行过滤。
	 * @return {TitleEdit} 返回新创建的TitleEdit控件。
	 */	
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
	
	/**
	 * @method addColorEdit
	 * 增加一个颜色编辑控件。
	 * @param {string} title 标题。
	 * @param {string} value 编辑器的值。
	 * @param {string} inputTips 输入提示。
	 * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
	 */	
	public addColorEdit(title:string, value?:string, inputTips?:string) : TitleChoosableEdit {
		var choosableEdit = this.addChoosableEdit(title, value, inputTips);
		
		choosableEdit.onChoose = function() {
			HtmlElement.showColocPicker(value||"#FFFFFF", (newValue:string) => {
				choosableEdit.value = newValue;
				console.log("new color" + newValue);
			});
		}

		return choosableEdit;
	}

	/**
	 * @method addChoosableEdit
	 * 增加一个可选择的编辑控件。
	 * @param {string} title 标题。
	 * @param {string} value 编辑器的值。
	 * @param {string} inputTips 输入提示。
	 * @return {TitleChoosableEdit} 返回新创建的TitleChoosableEdit控件。
	 */	
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

	/**
	 * @method addComboBox
	 * 增加一个下拉选择控件。
	 * @param {string} title 标题。
	 * @param {string} value 值。
	 * @return {TitleComboBox} 返回新创建的TitleComboBox控件。
	 */	
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
	
	/**
	 * @method addComboBoxEditable
	 * 增加一个可编辑的下拉选择控件。
	 * @param {string} title 标题。
	 * @param {string} value 值。
	 * @return {TitleComboBoxEditable} 返回新创建的TitleComboBoxEditable控件。
	 */	
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
	
	/**
	 * @method addSlider
	 * 增加一个滑块控件。
	 * @param {string} title 标题。
	 * @param {string} value 值。
	 * @return {TitleSlider} 返回新创建的TitleSlider控件。
	 */
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
	
	/**
	 * @method addTextArea
	 * 增加一个多行编辑器。
	 * @param {string} title 标题。
	 * @param {string} value 值。
	 * @param {number} h高度。
	 * @return {TitleTextArea} 返回新创建的TitleTextArea控件。
	 */
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

	/**
	 * @method findByTitle
	 * 通过标题查找指定的子控件。
	 * @param {string} title 标题。
	 * @return {Widget} 返回子控件或null。 
	 */
	public findByTitle(title:string) : Widget {
		return this.findChildByName(title);
	}

	protected addWithPropDesc(item:PropDesc) {
		var titleValue:TitleValue = null;

		if(item.type === NumberPropDesc.TYPE) {
			titleValue = this.addEdit(item.name, item.value, item.desc, "number");
		}else if(item.type === TextPropDesc.TYPE) {
			var lines = (<TextPropDesc>item).lines;
			if(lines > 1) {
				titleValue = this.addTextArea(item.name, item.value, lines * 12);
			}else{
				titleValue = this.addEdit(item.name, item.value, item.desc, "text");
			}
		}else if(item.type === ColorPropDesc.TYPE) {
			titleValue = this.addColorEdit(item.name, item.value, item.desc);
		}else if(item.type === ReadonlyTextPropDesc.TYPE) {
			titleValue = this.addLabel(item.name, item.value);
		}else if(item.type === SliderPropDesc.TYPE) {
			titleValue = this.addSlider(item.name, item.value);
		}else if(item.type === LinkPropDesc.TYPE) {
			titleValue = this.addLink(item.name, item.value);
		}else if(item.type === BoolPropDesc.TYPE) {
			titleValue = this.addCheckButton(item.name, item.value);
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
		}else if(item.type === Vector4PropDesc.TYPE) {
			var p4 = <Vector4PropDesc>item;
			var value = item.value || {x:0, y:0, z:0, w:0};
			titleValue = this.addVector4(item.name, value.x, value.y, value.z, value.w,
							p4.xTitle, p4.yTitle, p4.zTitle, p4.wTitle);
		}

		if(titleValue && item.path) {
			var valueWidget = titleValue.valueWidget;
			var bindRule = {
				value:{
					path:item.path, 
					converter:item.converter, 
					validationRule:item.validationRule,
					updateTiming:toUpdateTiming(item.updateTiming)
				}
			};
			valueWidget.dataBindingRule = bindRule;
			if(item.titleW) {
				titleValue.titleW = item.titleW;
			}

			if(item.valueW) {
				titleValue.valueW = item.valueW;
			}
		}
	}

	/**
	 * 通过propsDesc初始化。
	 */
	public initWithPropsDesc(propsDesc:PropsDesc) {
		this.removeAllChildren();
		propsDesc.forEach((item:PropDesc) => {
			this.addWithPropDesc(item);
		});
		propsDesc.once(Events.CHANGE, evt=> {
			console.log("reload changed");
			this.initWithPropsDesc(propsDesc);
		});
		
		var viewModel = this._viewModel;
		if(viewModel) {
			this.children.forEach((child:Widget) => {
				child.bindData(viewModel);
			});
		}

		this.relayoutChildren();
		this.dispatchEvent(Events.ChangeEvent.create().init(Events.CHANGE, {}));
	}

	/**
	 * 通过JSON初始化。
	 */
	public initWithJson(json:any) {
		var propsDesc = PropsDesc.create(json);
		this.initWithPropsDesc(propsDesc);
	}

	protected onAddChild(child:Widget) {
		this.recomputeHeight();
	}
	
	protected onRemoveChild(child:Widget) {
		this.recomputeHeight();
	}

	/*
	 * 根据子控件重新计算本身的高度。 
	 */
	protected recomputeHeight() : Widget {
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
	
	protected static defProps = Object.assign({}, Widget.defProps,	{_bp : 5, _itemH:30, _titleW:"80px", _valueW:"100%"});
	protected getDefProps() : any {
		return PropertyPage.defProps;
	}

	public static TYPE = "property-page";
	private static rBin = WidgetRecyclableCreator.create(PropertyPage);
	public static create(options?:any) : PropertyPage {
		return <PropertyPage>PropertyPage.rBin.create(options);
	}
};

WidgetFactory.register(PropertyPage.TYPE, PropertyPage.create);

