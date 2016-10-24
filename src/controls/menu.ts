
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {Dialog} from "./dialog";
import {Graphics} from "../graphics";
import {ListView} from "./list-view";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {Widget, WidgetState} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../image-tile";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {ListLayouter, ListLayouterParam} from "../layouters/list-layouter";
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

export class Menu extends Dialog {
	protected _owner : Widget;
	protected _trigger : Widget;
	protected _openedMenu : Menu;
	protected _listView : ListView;

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

	public hasItems() : boolean {
		return this._listView.children.length > 0;
	}

	public set itemH(value:number) {
		this._listView.itemH = value;
	}
	public get itemH() : number {
		return this._listView.itemH;
	}

	/**
	 * owner代表上级菜单或菜单条。
	 */
	public set owner(owner:Widget) {
		this._owner = owner;
	}
	public get owner() : Widget {
		return this._owner;
	}

	/**
	 * 触发该菜单的MenuBarItem或MenuItem。
	 */
	public set trigger(trigger:Widget) {
		this._trigger = trigger;
		this.app = trigger.app;
	}

	public get trigger() : Widget {
		return this._trigger;
	}
	
	public onItemEnter(child:MenuItem){
		var openedMenu = this._openedMenu;
		if(child.onInitSubMenu) {
			if(!openedMenu) {
				child.openSubMenu();
			}else if(openedMenu.trigger !== child) {
				child.reopenSubMenu(openedMenu);
			}
		}else if(openedMenu) {
			openedMenu.close();
		}
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		var owner:any = this.owner;
		/*
		 * 如果事件在当前菜单外，把事件转发给owner处理。
		 */
		if(!evt.pointerDown && owner) {
			var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
			if(!hitTestResult) {
				ctx.save();
				ctx.identity();
				var x = this.x;
				var y = this.y;
				evt.x += x;
				evt.y += y;
				evt.x -= owner.x;
				evt.y -= owner.y;
				owner.dispatchPointerMove(evt, ctx);
				evt.x += owner.x;
				evt.y += owner.y;
				evt.x -= x;
				evt.y -= y;
				ctx.restore();
			}
		}

		super.dispatchPointerMove(evt, ctx);
	}

	constructor() {
		super(Menu.TYPE);
	}

	public clearContent() : Widget {
		this._listView.removeAllChildren();

		return this;
	}

	public resizeToContent() : Widget {
		var w = this.w || 200;
		var listView = this._listView;
		var h = listView.desireHeight + this.topPadding + this.bottomPadding;
		
		this.resizeTo(w, h);
		this.relayoutChildren();

		return this;
	}

	public open() : Widget {
		this.resizeToContent();
		super.open();
		this.grab();

		return this;
	}
	
	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this.hitTestResult) {
			this.close();
		}
	}

	public addSpace() : Widget {
		var item = this.addItemExt("-", null);
		item.styleType = item.type + ".space";

		return item;
	}
	
	public addCheckableItem(text:string, onClick:Function, value?:boolean, shortcut?:string) : Widget {
		var item = this.addItemExt(text, null, shortcut, null);
		item.set({checkable:true, value:value});
		item.styleType = item.type + ".checkable";
		if(onClick) {
			item.on(Events.CLICK, onClick);
		}

		return item;
	}
	
	public addItem(text:string, onClick:Function, iconURL?:string, shortcut?:string) : Widget {
		var item = this.addItemExt(text, iconURL, shortcut, null);
		if(onClick) {
			item.on(Events.CLICK, onClick);
		}

		return item;
	}
	
	public addFolderItem(text:string, onInitSubMenu:Function) : Widget {
		var item = this.addItemExt(text, null, null, onInitSubMenu);
		item.styleType = item.type + ".folder";

		return item;
	}

	public addItemExt(text:string, iconURL:string, shortcut?:string, onInitSubMenu?:Function) : Widget {
		var listView = this._listView;
		if(!listView.app) {
			listView.app = this.app;
		}

		var item = MenuItem.create();
		var h = text === "-" ? this.itemH >> 1 : this.itemH;

		item.set({iconURL:iconURL, text:text, shortcut:shortcut, onInitSubMenu:onInitSubMenu});
		item.layoutParam = ListLayouterParam.create({h:h});
		listView.addChild(item);

		item.on(Events.POINTER_ENTER, (evt:PointerEvent) => {
			this.onItemEnter(<MenuItem>item);	
		});

		return item;
	}

	protected onReset() {
		super.onReset();
		this.hasOwnCanvas = true;
		this.styleType = "widget.transparent";
		this.childrenLayouter = SimpleLayouter.create();
		
		var listView = <ListView>ListView.create();
		listView.padding = 0;
		listView.itemH = 25;
		listView.styleType = "menu";
		listView.dragToScroll = false;
		listView.slideToScroll = false;
		listView.bottomPadding = 4;	
		listView.layoutParam = SimpleLayouterParam.create({x:"0", y:"0px", w:"100%", h:"100%"});
		
		this.addChild(listView);
		this.target = listView;
		this._listView = listView;
		
		this.topPadding = 0;
		this.bottomPadding = 4;
		this.leftPadding = 2;
		this.rightPadding = 2;
	}

	public dispose() {
		super.dispose();
		this._trigger = null;
		this._listView = null;
		this._openedMenu = null;
	}

	public static TYPE = "menu";
	private static r = WidgetRecyclableCreator.create(Menu);
	public static create(options?:any) : Menu {
		return <Menu>Menu.r.create(options);
	}
};

export class MenuItem extends Widget {
	protected _icon : ImageTile;
	protected _iconURL : string;
	protected _shortCutStyle : Style;	
	public shortcut : string;
	public checkable : boolean;
	public onInitSubMenu : Function;

	public set iconURL(value:string) {
		if(value) {
			this._icon = ImageTile.create(value, evt => {
				this.requestRedraw();
			});
		}else{
			this._icon = null;
		}
		this._iconURL = value;
	}

	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this.onInitSubMenu) {
			this.closeMenu();
		}
	}

	protected drawImage(ctx:any, style:Style) : Widget {
		var icon = this._icon;
		var y = this.topPadding;
		var x = this.leftPadding;
		var h = this.h - this.topPadding - this.bottomPadding;
		var w = h;

		if(this.checkable && this.value || this.onInitSubMenu) {
			icon = style.foreGroundImage;
			if(this.onInitSubMenu) {
				x = this.w - this.rightPadding - w;
			}
		}

		if(icon) {
			icon.draw(ctx, ImageDrawType.ICON, x, y, w, h);
		}

		return this;
	}
	
	protected drawText(ctx:any, style:Style) : Widget {
		var text = this.getLocaleText();;
		var h = this.h - this.topPadding - this.bottomPadding;
		var x = this.leftPadding + h;
		var y = this.topPadding;
		var w = this.w - x - this.rightPadding;

		if(text) {
			if(text === "-") {
				y = this.h >> 1;
				w = this.w;
				Graphics.drawLine(ctx, style.lineColor, 1, 0, y, w, y);
			}else{
				Graphics.drawTextSL(ctx, text, style, Rect.rect.init(x, y, w, h));
			}
		}

		if(this.shortcut) {
			if(!this._shortCutStyle) {
				this._shortCutStyle = style.clone();
				this._shortCutStyle.textAlign = "right";
			}
			text = this.shortcut;
			Graphics.drawTextSL(ctx, text, this._shortCutStyle, Rect.rect.init(x, y, w, h));
		}

		return this;
	}
	
	public reopenSubMenu(menu:Menu) {
		var ownerMenu = <Menu>this.win;

		menu.clearContent();
		this.onInitSubMenu(menu);
		menu.set({trigger:this});

		var p = this.toViewPoint(Point.point.init(this.w, 0));
		var x = p.x-menu.leftPadding;
		var y = p.y-menu.topPadding;
		menu.moveTo(x, y);
		menu.resizeToContent();
	}

	public openSubMenu() {
		var ownerMenu = <Menu>this.win;
		var menu = Menu.create();
		menu.set({trigger:this, owner:ownerMenu});

		this.onInitSubMenu(menu);
		if(menu.hasItems()) {
			var p = this.toViewPoint(Point.point.init(this.w, 0));
			var x = p.x-menu.leftPadding;
			var y = p.y-menu.topPadding;
			menu.moveTo(x, y);
			ownerMenu.openedMenu = menu;
			menu.open();
		}else{
			menu.dispose();
		}
	}
	
	public closeMenu() {
		var menu : Menu = <Menu>this.win;
		while(menu) {
			var owner = menu.owner;
			menu.close();
			if(owner.type === Menu.TYPE) {
				menu = <Menu>owner;	
			}else{
				break;
			}
		}
	}

	constructor() {
		super(MenuItem.TYPE);
	}

	protected onReset() {
		super.onReset();
		this._icon = null;
		this.onInitSubMenu = null;
	}
	
	protected static defProps = Object.assign({}, Widget.defProps, {_iconURL:null, 
		checkable:false, shortcut:null, _lp:2, _rp:4
	});
	protected getDefProps() : any {
		return MenuItem.defProps;
	}

	public dispose() {
		super.dispose();
		this._icon = null;
		this.onInitSubMenu = null;
	}

	public static TYPE = "menu-item";
	private static recycleBin = WidgetRecyclableCreator.create(MenuItem);
	public static create(options?:any) : MenuItem {
		return <MenuItem>MenuItem.recycleBin.create(options);
	}
};

WidgetFactory.register(Menu.TYPE, Menu.create);
WidgetFactory.register(MenuItem.TYPE, MenuItem.create);


