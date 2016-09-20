
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Page extends Widget {
	constructor(type?:string) {
		super(type||Page.TYPE);
	}

	public static TYPE = "page";
	private static recycleBin = new RecyclableCreator<Page>(function() {return new Page()});
	public static create(options?:any) : Page {
		return <Page>Page.recycleBin.create().reset(Page.TYPE).set(options);
	}
};

WidgetFactory.register(Page.TYPE, Page.create);

