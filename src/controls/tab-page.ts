
import {Page} from "./page";
import {Widget} from "./widget";
import {TabButton} from "./tab-button";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TabPage extends Page{
	protected _tabButton : TabButton;

	public set tabButton(value:TabButton) {
		this._tabButton = value;
	}
	public get tabButton() : TabButton {
		return this._tabButton;
	}

	constructor() {
		super(TabPage.TYPE);
	}

	public dispose() {
		super.dispose();
		TabPage.r.recycle(this);
	}

	public  static TYPE = "page";
	private static r = new RecyclableCreator<TabPage>(function() {return new TabPage()});
	public static create(options?:any) : TabPage {
		return <TabPage>TabPage.r.create().reset(TabPage.TYPE).set(options);
	}
};

WidgetFactory.register(TabPage.TYPE, TabPage.create);

