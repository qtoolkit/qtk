
import {Widget} from "./widget";
import {CheckButton} from "./check-button";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class RadioButton extends CheckButton {
	constructor() {
		super(RadioButton.TYPE);
	}
	
	public get value() {
		return this._value;
	}
	public set value(value) {
		if(this.parent && value) {
			var arr = this.parent.children;
			arr.forEach((child:any) => {
				if(child !== this && child.type === RadioButton.TYPE) {
					if(child.value) {
						child.setAttr("value", false, true);
					}
				}
			});
		}

		this.setAttr("value", true, true);
	}

	public dispose() {
		super.dispose();
		RadioButton.r.recycle(this);
	}

	public static TYPE = "radio-button";
	private static r = new RecyclableCreator<RadioButton>(function() {return new RadioButton()});
	public static create() : Widget {
		return RadioButton.r.create().reset(RadioButton.TYPE);
	}
};

WidgetFactory.register(RadioButton.TYPE, RadioButton.create);

