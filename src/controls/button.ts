
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Button extends Widget {
	constructor() {
		super(Button.TYPE);
	}

	public static TYPE = "button";
	private static recycleBin = new RecyclableCreator<Button>(function() {return new Button()});
	public static create(options?:any) : Button {
		return <Button>Button.recycleBin.create().reset(Button.TYPE, options);
	}
};

WidgetFactory.register(Button.TYPE, Button.create);

