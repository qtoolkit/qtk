
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

/**
 * @class TabControl
 * @extends Widget
 * 标签控件。
 */
export class TabControl extends Widget {
	protected _pages : Pages;
	protected _orientation : Orientation;
	protected _bgAtTop : boolean;
	protected _bgh : number;
	protected _buttonGroup : TabButtonGroup;

	/**
	 * @property {number} value
	 * 标签控件的值代表当前标签页的索引。可以修改value来指定当前的标签页，也可以用activePage来指定当前的标签页。
	 */
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

	/**
	 * @property {TabPage} activePage 
	 * 当前的标签页。
	 */
	public set activePage(tabPage:TabPage) {
		var value = this.pages.indexOfChild(tabPage);

		if(value >= 0) {
			this.value = value;
		}
	}
	public get activePage() : TabPage {
		return <TabPage>(this.pages.children[this.value]);
	}

	/**
	 * @property {Pages} pages 
	 * 标签页的集合。
	 */
	public get pages() : Pages{
		return this._pages;
	}
	
	/**
	 * @property {TabButtonGroup} buttonGroup 
	 * 标签按钮的集合。
	 */
	public get buttonGroup() : TabButtonGroup{
		return this._buttonGroup;
	}

	/**
	 * @property {boolean} expandButton 
	 * 是否扩展标签按钮的宽度。如果为false，则根据当前的标题和图标计算标签按钮的宽度，否则所有标签按钮平分button group的宽度。
	 */
	public set expandButton(value:boolean) {
		this.buttonGroup.autoExpand = value;
	}
	public get expandButton() : boolean {
		return this.buttonGroup.autoExpand;
	}

	/**
	 * @property {boolean} buttonGroupAtTop
	 * true表示标签按钮组的位置在顶部，否则在底部。
	 */
	public set buttonGroupAtTop(value:boolean) {
		this._bgAtTop = value;
		this.relayoutChildren();
	}
	public get buttonGroupAtTop() : boolean {
		return this._bgAtTop;
	}
	
	/**
	 * @property {number} buttonGroupHeight
	 * 标签按钮组的高度。
	 */
	public set buttonGroupHeight(value:number) {
		this._bgh = value;
		this.relayoutChildren();
	}
	public get buttonGroupHeight() : number{
		return this._bgh;
	}

	/**
	 * @method setPageTitle
	 * 设置指定TabPage的标题。
	 * return {TabControl} 控件本身。
	 */
	public setPageTitle(tabPage:TabPage, title:string) : TabControl {
		var index = this.pages.indexOfChild(tabPage);
		if(index >= 0) {
			var button = this.buttonGroup.children[index];
			button.text = title;
		}

		return this;
	}

	/**
	 * @method getPageTitle
	 * 获取指定TabPage的标题。
	 */
	public getPageTitle(tabPage:TabPage) : string {
		var index = this.pages.indexOfChild(tabPage);
		if(index >= 0) {
			var button = this.buttonGroup.children[index];
			return button.text;
		}
		
		return null;
	}

	/**
	 * @method onClosePage 
	 * 在点击标签按钮上的关闭按钮时会调用此函数，子类可以重载本函数，以提供关闭确认之类的功能。
	 */
	protected onClosePage(tabPage:TabPage) {
		this.removePage(tabPage, true);	
	}

	/**
	 * @method removePage
	 * 移除指定的标签页，相应的标签按钮也会移出。
	 * @param {TabPage} tabPage 要移出的标签页。
	 * @param {boolean} destroy 是否移出该标签页。
	 * 
	 * return {TabControl} 控件本身。
	 */
	public removePage(tabPage:TabPage, destroy?:boolean) : TabControl {
		if(tabPage) {
			var tabButton = tabPage.tabButton;
			this.pages.removeChild(tabPage, false, destroy);
			this.buttonGroup.removeChild(tabButton, false, destroy);
			this.value--;
		}
		
		return this;
	}

	/**
	 * @method addPage
	 * 向标签控件中增加一个标签页。
	 * @param {string} title 标题，作为标签按钮的文本。
	 * @param {string} normalIconURL 正常时的图标的URL。
	 * @param {string} currentIconURL 处于当前页时的图标的URL。
	 * @param {boolean} closable 是否显示关闭按钮。
	 * @param {boolean} closeButtonAtLeft 如果显示关闭按钮，关闭按钮是否显示在左边。
	 * 
	 * @return {TabPage} 返回被创建的TabPage。
	 */
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
			tabControl.activePage = this.tabPage;
			if(closable && this.target && this.target === this.closeButton) {
				tabControl.onClosePage(this.tabPage);
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

