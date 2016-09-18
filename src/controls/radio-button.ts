
import {Widget} from "./widget";
import {CheckButton} from "./check-button";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class RadioButton extends CheckButton {
	constructor(type?:string) {
		super(type || RadioButton.TYPE);
	}
	
	public get value() {
		return this._value;
	}
	public set value(value) {
		var type = this.type;
		if(this.parent && value) {
			var arr = this.parent.children;
			arr.forEach((child:any) => {
				if(child !== this && child.type === type) {
					if(child.value) {
						child.setProp("value", false, true);
					}
				}
			});
		}

		this.setProp("value", true, true);
	}

	public dispose() {
		super.dispose();
		RadioButton.r.recycle(this);
	}

	public static TYPE = "radio-button";
	private static r = new RecyclableCreator<RadioButton>(function() {return new RadioButton()});
	public static create(options?:any) : RadioButton {
		return <RadioButton>RadioButton.r.create().reset(RadioButton.TYPE).set(options);
	}
};

WidgetFactory.register(RadioButton.TYPE, RadioButton.create);

