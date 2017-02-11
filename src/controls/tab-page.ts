
import {Page} from "./page";
import {Widget} from "./widget";
import {TabButton} from "./tab-button";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * @class TabPage 
 * @extends Widget
 * 标签控件上的标签页。它只是一个普通容器控件，需要自己向其中添加子控件。
 */
export class TabPage extends Page{
	/**
	 * @property {TabButton} tabButton
	 * 与之关联标签按钮。
	 */
	public tabButton : TabButton;

	constructor() {
		super(TabPage.TYPE);
	}

	public dispose() {
		super.dispose();
		this.tabButton = null;
	}

	public  static TYPE = "page";
	private static r = WidgetRecyclableCreator.create(TabPage);
	public static create(options?:any) : TabPage {
		return <TabPage>TabPage.r.create(options);
	}
};

WidgetFactory.register(TabPage.TYPE, TabPage.create);

