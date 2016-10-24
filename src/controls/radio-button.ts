
import {Widget} from "./widget";
import {CheckButton} from "./check-button";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 单选按钮。同一个父控件中，只有一个单选按钮被勾选。被勾选时value为true，否则为false。
 */
export class RadioButton extends CheckButton {
	constructor(type?:string) {
		super(type || RadioButton.TYPE);
	}
	
	public get value() : boolean {
		return this._value;
	}

	public set value(value:boolean) {
		this.setValue(value, true, true);
	}

	public static TYPE = "radio-button";
	private static r = WidgetRecyclableCreator.create(RadioButton);
	public static create(options?:any) : RadioButton {
		return <RadioButton>RadioButton.r.create(options);
	}
};

WidgetFactory.register(RadioButton.TYPE, RadioButton.create);

