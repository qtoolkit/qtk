
import {Menu} from "./menu";
import {Point} from "../point";
import {Style} from "../style";
import Events = require("../events");
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../image-tile";
import {RecyclableCreator} from "../recyclable-creator";
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
			value.on(Events.CLOSE, evt => {
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

	public addLogo(iconURL) : Widget {
		var item = MenuBarItem.create();
		item.styleType = "widget.transparent";
		item.setIcons(iconURL, iconURL);
		item.layoutParam = this.createChildLayoutParam({w:this.h, h:"100%", position:0.1});
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
		item.on(Events.CLICK, onClick);
		item.layoutParam = this.createChildLayoutParam({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}
	
	public addImageButton(normalIconURL:string, overIconURL:string, activeIconURL:string, 
				disableIconURL:string, checkedIconURL:string, onClick:Function, position?:number) : Widget {
		var item = MenuBarItem.create();
		item.on(Events.CLICK, onClick);
		item.styleType = "widget.transparent";
		item.setIcons(normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL);
		item.layoutParam = this.createChildLayoutParam({w:this.h, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.itemWidth = 40;
		this.childrenLayouter = LinearLayouter.createH({spacing:1}); 
		return this;
	}

	public static TYPE = "menu-bar";
	private static recycleBin = new RecyclableCreator<MenuBar>(function() {return new MenuBar()});
	public static create(options?:any) : MenuBar {
		return <MenuBar>MenuBar.recycleBin.create().reset(MenuBar.TYPE).set(options);
	}
};

export class MenuBarItem extends Widget {
	public onInitSubMenu : Function;
	protected _normalIcon : ImageTile;
	protected _overIcon : ImageTile;
	protected _activeIcon : ImageTile;
	protected _disableIcon : ImageTile;
	protected _checkedIcon : ImageTile;

	public setIcons(normalIconURL:string, overIconURL?:string, activeIconURL?:string,
					disableIconURL?:string, checkedIconURL?:string) {
		var redraw = this.requestRedraw.bind(this);

		this._normalIcon = normalIconURL ? ImageTile.create(normalIconURL, redraw) : null;
		this._overIcon = overIconURL ? ImageTile.create(overIconURL, redraw) : null;
		this._activeIcon = activeIconURL ? ImageTile.create(activeIconURL, redraw) : null;
		this._disableIcon = disableIconURL ? ImageTile.create(disableIconURL, redraw) : null;
		this._checkedIcon = checkedIconURL ? ImageTile.create(checkedIconURL, redraw) : null;
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

	protected dispatchClick(evt:any) {
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

	public static TYPE = "menu-bar-item";
	private static recycleBin = new RecyclableCreator<MenuBarItem>(function() {return new MenuBarItem()});
	public static create(options?:any) : MenuBarItem {
		return <MenuBarItem>MenuBarItem.recycleBin.create().reset(MenuBarItem.TYPE).set(options);
	}
};

WidgetFactory.register(MenuBar.TYPE, MenuBar.create);
WidgetFactory.register(MenuBarItem.TYPE, MenuBarItem.create);


