import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {ComboBox, ComboBoxEditable} from "../controls/combo-box";

export class TitleComboBoxBase extends TitleValue {
	constructor(type:string) {
		super(type);
	}

	public get itemHeight() : number {
		var comboBox = <ComboBox>this._valueWidget;

		return comboBox.itemHeight;
	}

	public set itemHeight(value:number) {
		var comboBox = <ComboBox>this._valueWidget;

		comboBox.itemHeight = value;
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
	private static recycleBin = new RecyclableCreator<TitleComboBox>(function() {return new TitleComboBox()});
	public static create(options?:any) : TitleComboBox {
		return <TitleComboBox>TitleComboBox.recycleBin.create().reset(TitleComboBox.TYPE, options);
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
	private static recycleBin = new RecyclableCreator<TitleComboBoxEditable>(function() {return new TitleComboBoxEditable()});
	public static create(options?:any) : TitleComboBoxEditable {
		return <TitleComboBoxEditable>TitleComboBoxEditable.recycleBin.create().reset(TitleComboBoxEditable.TYPE, options);
	}
};

WidgetFactory.register(TitleComboBoxEditable.TYPE, TitleComboBoxEditable.create);
