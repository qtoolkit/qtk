
import {Menu} from "./menu";
import {Point} from "../base/point";
import {Style} from "../base/style";
import Events = require("../base/events");
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../base/image-tile";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {LinearLayouter, LinearLayouterParam} from "../layouters/linear-layouter";

export class MenuBar extends Widget {
	protected _openedMenu : Menu;
	protected _itemWidth : number;

	constructor() {
		super(MenuBar.TYPE);
	}

	public set openedMenu(value:Menu) {
		this._openedMenu = value;
		if(value) {
			value.on(Events.WINDOW_CLOSE, evt => {
				this._openedMenu = null;
			});
		}
	}
	public get openedMenu() : Menu {
		return this._openedMenu;
	}

	public set itemWidth(value:number) {
		this._itemWidth = value;
	}
	public get itemWidth() : number {
		return this._itemWidth;
	}

	public onItemEnter(child:MenuBarItem){
		var openedMenu = this._openedMenu;
		if(openedMenu) {
			if(openedMenu.trigger !== child) {
				if(child.onInitSubMenu) {
					child.reopenMenu(openedMenu);
				}else{
					openedMenu.close();
				}
			}
		}
	}

	public addChild(child:Widget, fastMode?:boolean) : Widget {
		child.on(Events.POINTER_ENTER, (evt:PointerEvent) => {
			this.onItemEnter(<MenuBarItem>child);	
		});
	
		return super.addChild(child, fastMode);
	}

	public addSpace(width?:number, position?:number) : Widget {
		var item = MenuBarItem.create();
		item.styleType = "widget.transparent";
		item.layoutParam = this.createChildLayoutParam({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	public addLogo(iconURL, width?:number) : Widget {
		var item = MenuBarItem.create();
		var w = width || this.h || (this.itemWidth >> 1);
		item.styleType = "widget.transparent";
		item.setIcons(iconURL, iconURL);
		item.layoutParam = this.createChildLayoutParam({w:w, h:"100%", position:0.1});
		this.addChild(item);

		return item;
	}

	public addItem(text:string, onInitSubMenu:Function, width?:number, position?:number) : Widget {
		var item = MenuBarItem.create();
		item.set({text:text, onInitSubMenu:onInitSubMenu});
		item.layoutParam = this.createChildLayoutParam({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	public addTextButton(text:string, onClick:Function, width?:number, position?:number) : Widget {
		var item = MenuBarItem.create();
		item.set({text:text});
		if(onClick) {
			item.on(Events.CLICK, onClick);
		}
		item.layoutParam = this.createChildLayoutParam({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}
	
	public addImageButton(normalIconURL:string, overIconURL:string, activeIconURL:string, 
				disableIconURL:string, checkedIconURL:string, onClick:Function, position?:number) : Widget {
		var item = MenuBarItem.create();
		if(onClick) {
			item.on(Events.CLICK, onClick);
		}
		item.styleType = "widget.transparent";
		item.setIcons(normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL);
		item.layoutParam = this.createChildLayoutParam({w:this.h, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	protected onReset() {
		super.onReset();
		this.childrenLayouter = LinearLayouter.createHWithOptions({spacing:1}); 
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, {_itemWidth:40});
	protected getDefProps() : any {
		return MenuBar.defProps;
	}

	public static TYPE = "menu-bar";
	private static recycleBin = WidgetRecyclableCreator.create(MenuBar);
	public static create(options?:any) : MenuBar {
		return <MenuBar>MenuBar.recycleBin.create(options);
	}
};

export class MenuBarItem extends Widget {
	public onInitSubMenu : Function;
	protected _normalIcon : ImageTile;
	protected _overIcon : ImageTile;
	protected _activeIcon : ImageTile;
	protected _disableIcon : ImageTile;
	protected _checkedIcon : ImageTile;

	protected _normalIconURL : string;
	protected _overIconURL : string;
	protected _activeIconURL : string;
	protected _disableIconURL : string;
	protected _checkedIconURL : string;

	public setIcons(normalIconURL:string, overIconURL?:string, activeIconURL?:string,
					disableIconURL?:string, checkedIconURL?:string) {
		var redraw = this.requestRedraw.bind(this);

		this._normalIcon = normalIconURL ? ImageTile.create(normalIconURL, redraw) : null;
		this._overIcon = overIconURL ? ImageTile.create(overIconURL, redraw) : null;
		this._activeIcon = activeIconURL ? ImageTile.create(activeIconURL, redraw) : null;
		this._disableIcon = disableIconURL ? ImageTile.create(disableIconURL, redraw) : null;
		this._checkedIcon = checkedIconURL ? ImageTile.create(checkedIconURL, redraw) : null;
	
		this._normalIconURL = normalIconURL?normalIconURL:null;
		this._overIconURL = overIconURL ? overIconURL : null;
		this._activeIconURL = activeIconURL ? activeIconURL : null;
		this._disableIconURL = disableIconURL ? disableIconURL : null;
		this._checkedIconURL = checkedIconURL ? checkedIconURL : null;
	}
	
	protected drawImage(ctx:any, style:Style) : Widget {
		var icon = null;
		if(!this._enable) {
			icon = this._disableIcon;
		}else{
			if(this._value) {
				icon = this._checkedIcon;
			}else{
				if(this.state === WidgetState.OVER) {
					icon = this._overIcon;
				}else if(this.state === WidgetState.ACTIVE) {
					icon = this._activeIcon;
				}
			}
		}
		if(!icon) {
			icon = this._normalIcon;
		}
		if(icon) {
			icon.draw(ctx, ImageDrawType.ICON, 0, 0, this.w, this.h);
		}

		return this;
	}

	public reopenMenu(menu:Menu) {
		menu.clearContent();
		this.onInitSubMenu(menu);
		menu.set({trigger:this});
	
		var p = this.toViewPoint(Point.point.init(0, this.h));
		menu.moveTo(p.x-menu.leftPadding, p.y);
		menu.resizeToContent();
	}

	protected openMenu() {
		var menuBar = <MenuBar>this.parent;
		var menu = Menu.create();
		menu.set({trigger:this, owner:menuBar});

		this.onInitSubMenu(menu);
		if(menu.hasItems()) {
			var p = this.toViewPoint(Point.point.init(0, this.h));
			menu.moveTo(p.x-menu.leftPadding, p.y);
			menuBar.openedMenu = menu;
			menu.open();
		}else{
			menu.dispose();
		}
	}

	public dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(this.onInitSubMenu) {
			this.openMenu();
		}
	}

	constructor() {
		super(MenuBarItem.TYPE);
	}

	public dispose() {
		super.dispose();
	}

	protected static defProps = Object.assign({}, Widget.defProps, {
		_normalIconURL:null, _overIconURL:null, _activeIconURL:null, _disableIconURL:null, _checkedIconURL:null	
	});
	protected getDefProps() : any {
		return MenuBarItem.defProps;
	}
	public static TYPE = "menu-bar-item";
	private static recycleBin = WidgetRecyclableCreator.create(MenuBarItem);
	public static create(options?:any) : MenuBarItem {
		return <MenuBarItem>MenuBarItem.recycleBin.create(options);
	}
};

WidgetFactory.register(MenuBar.TYPE, MenuBar.create);
WidgetFactory.register(MenuBarItem.TYPE, MenuBarItem.create);


