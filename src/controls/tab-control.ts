
import {Rect} from "../rect";
import {Pages} from "./pages";
import {Widget} from "./widget";
import {TabPage} from "./tab-page";
import Events = require("../events");
import {Orientation} from "../consts";
import {TabButton} from "./tab-button";
import {TabButtonGroup} from "./tab-button-group";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

export class TabControl extends Widget {
	protected _pages : Pages;
	protected _orientation : Orientation;
	protected _bgAtTop : boolean;
	protected _bgh : number;
	protected _buttonGroup : TabButtonGroup;

	public set value(value:number) {
		var oldValue = this.value;

		this._value = value;
		this._pages.value = value;
		this.buttonGroup.value = value;
		if(value !== oldValue) {		
			this.notifyChange(oldValue);
		}
	}

	public get value() : number {
		return this._pages.value;
	}

	public get pages() : Pages{
		return this._pages;
	}
	
	public get buttonGroup() : TabButtonGroup{
		return this._buttonGroup;
	}

	public set expandButton(value:boolean) {
		this.buttonGroup.autoExpand = value;
	}

	public get expandButton() : boolean {
		return this.buttonGroup.autoExpand;
	}

	public set buttonGroupAtTop(value:boolean) {
		this._bgAtTop = value;
		this.relayoutChildren();
	}
	public get buttonGroupAtTop() : boolean {
		return this._bgAtTop;
	}
	
	public set buttonGroupHeight(value:number) {
		this._bgh = value;
		this.relayoutChildren();
	}
	public get buttonGroupHeight() : number{
		return this._bgh;
	}

	public setPageTitle(tabPage:TabPage, title:string) : Widget {
		var index = this.pages.indexOfChild(tabPage);
		if(index >= 0) {
			var button = this.buttonGroup.children[index];
			button.text = title;
		}

		return this;
	}

	public getPageTitle(tabPage:TabPage) : string {
		var index = this.pages.indexOfChild(tabPage);
		if(index >= 0) {
			var button = this.buttonGroup.children[index];
			return button.text;
		}
		
		return null;
	}

	public activatePage(tabPage:TabPage) : Widget {
		var value = this.pages.indexOfChild(tabPage);

		if(value >= 0) {
			this.value = value;
		}
		
		return this;
	}

	public getActivePage() : TabPage {
		return <TabPage>(this.pages.children[this.value]);
	}

	public closePage(tabPage:TabPage) {
		this.removePage(tabPage, true);	
	}

	public removePage(tabPage:TabPage, destroy?:boolean) {
		if(tabPage) {
			var tabButton = tabPage.tabButton;
			this.pages.removeChild(tabPage, false, destroy);
			this.buttonGroup.removeChild(tabButton, false, destroy);
			this.value--;
		}
	}

	public addPage(title:string, normalIconURL?:string, currentIconURL?:string, 
				   closable?:boolean, closeButtonAtLeft?:boolean) : TabPage {
		
		if(!this.pages.app) {
			this.pages.app = this.app;
		}

		if(!this.buttonGroup.app) {
			this.buttonGroup.app = this.app;
		}

		var tabButton = TabButton.create();
		tabButton.setIcons(normalIconURL, currentIconURL);
		tabButton.set({text:title, closable:closable, closeButtonAtLeft:closeButtonAtLeft});

		var tabPage = TabPage.create();
		
		tabButton.tabPage = tabPage;
		tabPage.tabButton = tabButton;

		this.pages.addChild(tabPage);
		this.buttonGroup.addChild(tabButton);

		var tabControl = this;
		tabButton.on(Events.CLICK, function(evt) {
			tabControl.activatePage(this.tabPage);
			if(closable && this.target && this.target === this.closeButton) {
				tabControl.closePage(this.tabPage);
			}
		});

		this.value = this._value;
		this.relayoutChildren();

		return tabPage;
	}

	public relayoutChildren() : Rect {
		var x = this.leftPadding;
		var y = this.topPadding;
		var buttonGroupHeight = this.buttonGroupHeight;
		var h = this.h - this.topPadding - this.bottomPadding;
		var w = this.w - this.leftPadding - this.rightPadding;

		var pages = this._pages;
		var buttonGroup = this._buttonGroup;
		if(this.buttonGroupAtTop) {
			if(buttonGroup) {
				buttonGroup.moveResizeTo(x, y, w, buttonGroupHeight);
				buttonGroup.relayoutChildren();
			}
			y+=buttonGroupHeight;
			h-=buttonGroupHeight;
		}else{
			if(buttonGroup) {
				buttonGroup.moveResizeTo(x, this.h-buttonGroupHeight-this.bottomPadding, w, buttonGroupHeight);
				buttonGroup.relayoutChildren();
			}
			h-=buttonGroupHeight;
		}

		if(pages) {
			pages.moveResizeTo(x, y, w, h);
			pages.relayoutChildren();
		}

		return Rect.rect.init(0, 0, this.w, this.h);
	}

	constructor() {
		super(TabControl.TYPE);
	}

	protected onReset() {
		this._value = 0;
		this._pages = Pages.create();
		this.addChild(this._pages, true);

		this._buttonGroup = TabButtonGroup.create();
		this.addChild(this._buttonGroup, true);
	}

	public dispose() {
		super.dispose();
		this._pages = null;
		this._buttonGroup = null;
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, {_bgh:30, _bgAtTop:false}); 
	protected getDefProps() : any {
		return TabControl.defProps;
	}

	public  static TYPE = "tab-control";
	private static r = WidgetRecyclableCreator.create(TabControl);
	public static create(options?:any) : TabControl {
		return <TabControl>TabControl.r.create(options);
	}
};

WidgetFactory.register(TabControl.TYPE, TabControl.create);

