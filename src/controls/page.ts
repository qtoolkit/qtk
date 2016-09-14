
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Page extends Widget {
	constructor() {
		super(Page.TYPE);
	}

	public dispose() {
		super.dispose();
		Page.recyclbale.recycle(this);
	}

	public static TYPE = "page";
	private static recyclbale = new RecyclableCreator<Page>(function() {return new Page()});
	public static create() : Widget {
		return Page.recyclbale.create().reset(Page.TYPE);
	}
};

WidgetFactory.register(Page.TYPE, Page.create);

