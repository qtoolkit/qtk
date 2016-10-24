import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";
import {ComboBox, ComboBoxEditable} from "../controls/combo-box";

export class TitleComboBoxBase extends TitleValue {
	constructor(type:string) {
		super(type);
	}

	public get itemH() : number {
		var comboBox = <ComboBox>this._valueWidget;

		return comboBox.itemH;
	}

	public set itemH(value:number) {
		var comboBox = <ComboBox>this._valueWidget;

		comboBox.itemH = value;
	}

	public resetOptions() : Widget {
		var comboBox = <ComboBox>this._valueWidget;
		comboBox.resetOptions();

		return this;
	}

	public addOption(text:string, value?:any, imageURL?:string, color?:string) : Widget {
		var comboBox = <ComboBox>this._valueWidget;
		comboBox.addOption(text, value, imageURL, color);

		return this;
	}
}

export class TitleComboBox extends TitleComboBoxBase {
	constructor(type?:string) {
		super(type || TitleComboBox.TYPE);
	}
	protected createValueWidget(options?:any) : Widget {
		return ComboBox.create(options);
	}
	public static TYPE = "title-combo-box";
	private static recycleBin = WidgetRecyclableCreator.create(TitleComboBox);
	public static create(options?:any) : TitleComboBox {
		return <TitleComboBox>TitleComboBox.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleComboBox.TYPE, TitleComboBox.create);

export class TitleComboBoxEditable extends TitleComboBoxBase {
	constructor(type?:string) {
		super(type || TitleComboBoxEditable.TYPE);
	}
	protected createValueWidget(options?:any) : Widget {
		return ComboBoxEditable.create(options);
	}
	public static TYPE = "title-combo-box-editable";
	private static recycleBin = WidgetRecyclableCreator.create(TitleComboBoxEditable);
	public static create(options?:any) : TitleComboBoxEditable {
		return <TitleComboBoxEditable>TitleComboBoxEditable.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleComboBoxEditable.TYPE, TitleComboBoxEditable.create);
