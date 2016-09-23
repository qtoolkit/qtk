
import {Widget} from "./widget";
import {CheckButton} from "./check-button";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

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
	private static r = new RecyclableCreator<RadioButton>(function() {return new RadioButton()});
	public static create(options?:any) : RadioButton {
		return <RadioButton>RadioButton.r.create().reset(RadioButton.TYPE).set(options);
	}
};

WidgetFactory.register(RadioButton.TYPE, RadioButton.create);

