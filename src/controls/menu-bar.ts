
import {Menu} from "./menu";
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
		if(child.menuCreator && openedMenu && openedMenu.trigger !== child) {
			openedMenu.clearContent();
			child.menuCreator(openedMenu);
			openedMenu.set({trigger:child});
			openedMenu.moveResizeToContent();

			console.log("onItemEnter:" + child.text);
		}
	}

	public addChild(child:Widget, fastMode?:boolean) : Widget {
		child.on(Events.POINTER_ENTER, (evt:PointerEvent) => {
			this.onItemEnter(<MenuBarItem>child);	
		});
	
		return super.addChild(child, fastMode);
	}

	public addImageItem(normalIconURL:string, overActiveIconURL:string, width:number, position:number) : Widget {
		var item = MenuBarItem.create();
		item.styleType = "widget.transparent";
		item.setIcons(normalIconURL, overActiveIconURL);
		item.layoutParam = LinearLayouterParam.create({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	public addTextItem(text:string, width:number, position:number, menuCreator:Function) : Widget {
		var item = MenuBarItem.create();
		item.set({text:text, menuCreator:menuCreator});
		item.layoutParam = LinearLayouterParam.create({w:width||this.itemWidth, h:"100%", position:position||1});
		this.addChild(item);

		return item;
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.itemWidth = 60;
		this.childrenLayouter = LinearLayouter.createH({spacing:1}); 
		return this;
	}

	public dispose() {
		super.dispose();
		MenuBar.recyclbale.recycle(this);
	}

	public static TYPE = "menu-bar";
	private static recyclbale = new RecyclableCreator<MenuBar>(function() {return new MenuBar()});
	public static create() : MenuBar {
		return <MenuBar>MenuBar.recyclbale.create().reset(MenuBar.TYPE);
	}
};

export class MenuBarItem extends Widget {
	public menuCreator : Function;
	protected _normalIcon : ImageTile;
	protected _overActiveIcon : ImageTile;

	public setIcons(normalIconURL:string, overActiveIconURL:string) {
		if(normalIconURL) {
			this._normalIcon = ImageTile.create(normalIconURL, evt => {
				this.requestRedraw();
			});
		}else{
			this._normalIcon = null;
		}

		if(overActiveIconURL) {
			this._overActiveIcon = ImageTile.create(overActiveIconURL, evt => {
				this.requestRedraw();
			});
		}else{
			this._overActiveIcon = null;
		}
	}
	
	protected drawImage(ctx:any, style:Style) : Widget {
		var icon = (this.state === WidgetState.NORMAL || !this._overActiveIcon) ?
			this._normalIcon : this._overActiveIcon;

		if(icon) {
			icon.draw(ctx, ImageDrawType.ICON, 0, 0, this.w, this.h);
		}

		return this;
	}

	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(this.menuCreator) {
			var menuBar = <MenuBar>this.parent;
			var menu = Menu.create();
			menu.set({trigger:this, owner:menuBar});

			this.menuCreator(menu);
			if(menu.hasItems()) {
				menuBar.openedMenu = menu;
				menu.open();
			}else{
				menu.dispose();
			}
		}
	}

	constructor() {
		super(MenuBarItem.TYPE);
	}

	public dispose() {
		super.dispose();
		MenuBarItem.recyclbale.recycle(this);
	}

	public static TYPE = "menu-bar-item";
	private static recyclbale = new RecyclableCreator<MenuBarItem>(function() {return new MenuBarItem()});
	public static create() : MenuBarItem {
		return <MenuBarItem>MenuBarItem.recyclbale.create().reset(MenuBarItem.TYPE);
	}
};


WidgetFactory.register(MenuBar.TYPE, MenuBar.create);
WidgetFactory.register(MenuBarItem.TYPE, MenuBarItem.create);


