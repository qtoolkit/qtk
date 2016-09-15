
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
import {RecyclableCreator} from "../recyclable-creator";
import {ListLayouter, ListLayouterParam} from "../layouters/list-layouter";
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

export class Menu extends Dialog {
	protected _owner : Widget;
	protected _trigger : Widget;
	protected _openedMenu : Menu;
	protected _listView : ListView;

	public hasItems() : boolean {
		return this._listView.children.length > 0;
	}

	public set itemHeight(value:number) {
		this._listView.itemHeight = value;
	}
	public get itemHeight() : number {
		return this._listView.itemHeight;
	}

	public set owner(owner:Widget) {
		this._owner = owner;
	}

	public get owner() : Widget {
		return this._owner;
	}

	public set trigger(trigger:Widget) {
		this._trigger = trigger;
		this.app = trigger.app;
		
	}

	public get trigger() : Widget {
		return this._trigger;
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		var owner:any = this.owner;
		if(!evt.pointerDown && owner) {
			var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
			if(!hitTestResult) {
				ctx.save();
				ctx.identity();
				var x = this.x;
				var y = this.y;
				evt.x += x;
				evt.y += y;
				owner.dispatchPointerMove(evt, ctx);
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

	public moveResizeToContent() : Widget {
		if(this._trigger) {
			var trigger = this._trigger;
			var p = trigger.toViewPoint(Point.point.init(0, trigger.h));
			this.moveTo(p.x-this.leftPadding, p.y);
		}

		var w = this.w || 200;
		var listView = this._listView;
		var h = listView.desireHeight + this.topPadding + this.bottomPadding;
		
		this.resizeTo(w, h);
		this.relayoutChildren();

		return this;
	}

	public open() : Widget {
		this.moveResizeToContent();
		super.open();
		this.grab();

		return this;
	}
	
	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		this.close();
	}

	public addSpace() : Widget {
		var item = this.addItem("-", null);
		item.styleType = item.type + ".space";

		return item;
	}
	
	public addCheckableItem(text:string, value:boolean, shortcut?:string) : Widget {
		var item = this.addItem(text, null, shortcut, null);
		item.set({checkable:true, value:value});
		item.styleType = item.type + ".checkable";

		return item;
	}

	public addItem(text:string, iconURL:string, shortcut?:string, menuCreator?:Function) : Widget {
		var listView = this._listView;
		if(!listView.app) {
			listView.app = this.app;
		}

		var item = MenuItem.create();
		var h = text === "-" ? this.itemHeight >> 1 : this.itemHeight;

		item.set({iconURL:iconURL, text:text, shortcut:shortcut, menuCreator:menuCreator});
		item.layoutParam = ListLayouterParam.create({h:h});
		listView.addChild(item);

		return item;
	}

	public reset(type:string) : Widget {
		super.reset(type);

		this.hasOwnCanvas = true;
		this.styleType = "widget.transparent";
		this.childrenLayouter = SimpleLayouter.create();
		
		var listView = <ListView>ListView.create();
		listView.padding = 0;
		listView.itemHeight = 25;
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

		return this;
	}

	public dispose() {
		super.dispose();
		this._trigger = null;
		this._listView = null;
		this._openedMenu = null;

		Menu.r.recycle(this);
	}

	public static TYPE = "menu";
	private static r = new RecyclableCreator<Menu>(function() {return new Menu()});
	public static create() : Menu {
		return <Menu>Menu.r.create().reset(Menu.TYPE);
	}
};

export class MenuItem extends Widget {
	protected _icon : ImageTile;
	protected _iconURL : string;
	protected _shortCutStyle : Style;	
	public shortcut : string;
	public checkable : boolean;
	public menuCreator : Function;

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

	protected drawImage(ctx:any, style:Style) : Widget {
		var icon = this._icon;
		var y = this.topPadding;
		var x = this.leftPadding;
		var h = this.h - this.topPadding - this.bottomPadding;
		var w = h;

		if(this.checkable && this.value) {
			icon = style.foreGroundImage;
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

	constructor() {
		super(MenuItem.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._icon = null;
		this._iconURL = null;
		this.checkable = false;
		this.shortcut = null;
		this.menuCreator = null;
		this.leftPadding = 2;
		this.rightPadding = 4;

		return this;
	}

	public dispose() {
		super.dispose();
		this._icon = null;
		this._iconURL = null;
		this.checkable = false;
		this.shortcut = null;
		this.menuCreator = null;

		MenuItem.recyclbale.recycle(this);
	}

	public static TYPE = "menu-item";
	private static recyclbale = new RecyclableCreator<MenuItem>(function() {return new MenuItem()});
	public static create() : MenuItem {
		return <MenuItem>MenuItem.recyclbale.create().reset(MenuItem.TYPE);
	}
};

WidgetFactory.register(Menu.TYPE, Menu.create);
WidgetFactory.register(MenuItem.TYPE, MenuItem.create);


