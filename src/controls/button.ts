
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Button extends Widget {
	constructor() {
		super(Button.TYPE);
	}

	public dispose() {
		super.dispose();
		Button.recyclbale.recycle(this);
	}

	public static TYPE = "button";
	private static recyclbale = new RecyclableCreator<Button>(function() {return new Button()});
	public static create() : Button {
		return <Button>Button.recyclbale.create().reset(Button.TYPE);
	}
};

WidgetFactory.register(Button.TYPE, Button.create);

