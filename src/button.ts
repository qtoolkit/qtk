
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";

export class Button extends Widget {
	constructor() {
		super(Button.TYPE);
	}

	public requestRedraw() : Widget {
		return super.requestRedraw();
	}

	public static TYPE = "button";
	public static create() : Widget {
		var widget = new Button();

		return widget;
	}
};

WidgetFactory.register(Button.TYPE, Button.create);

