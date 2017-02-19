
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {ChoosableEdit} from "./choosable-edit";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * @class TitleChoosableEdit
 * @extends Widget
 * 带标题的编辑器，同时提供一个选择按钮，用来实现颜色选择和文件选择等功能。
 */
export class TitleChoosableEdit extends TitleValue {
    protected _inputTips : string;

	/**
	 * @property {Function} onChoose
	 * 点击选择按钮时的回调函数。
	 */
	public set onChoose(value:Function) {
		var edit = <ChoosableEdit>this._valueWidget;

		edit.onChoose = value;
	}
	public get onChoose() : Function {
		var edit = <ChoosableEdit>this._valueWidget;
		return edit.onChoose;
	}

	/**
	 * @property {string} inputTips
	 * 输入提示。
	 */
	public set inputTips(value:string) {
		this._inputTips = value;
		if(this._valueWidget) {
			this._valueWidget.set({inputTips:value});
		}
	}
	public get inputTips() : string {
		return this._inputTips;
	}
	
	constructor(type?:string) {
		super(type || TitleChoosableEdit.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return ChoosableEdit.create();
	}

	public static TYPE = "title-choosable-edit";
	private static recycleBin = WidgetRecyclableCreator.create(TitleChoosableEdit);
	public static create(options?:any) : TitleChoosableEdit {
		return <TitleChoosableEdit>TitleChoosableEdit.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleChoosableEdit.TYPE, TitleChoosableEdit.create);
