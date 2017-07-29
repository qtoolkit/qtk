
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../base/recyclable-creator";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

export class Button extends Widget {
	constructor() {
		super(Button.TYPE);
	}

	public static TYPE = "button";
	private static recycleBin = WidgetRecyclableCreator.create(Button);
	public static create(options?:any) : Button {
		return <Button>Button.recycleBin.create(options);
	}
};

WidgetFactory.register(Button.TYPE, Button.create);

