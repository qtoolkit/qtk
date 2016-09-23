
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../graphics";
import {RecyclableCreator} from "../recyclable-creator";
import {ImageTile, ImageDrawType} from "../image-tile";

export enum ListItemStyle {
	NORMAL,
	FIRST,
	LAST
};

export class ListItem extends Widget {
	public listItemStyle : ListItemStyle;
	protected _icon : ImageTile;
	protected _iconURL : string;

	constructor(type?:string) {
		super(type || ListItem.TYPE);
	}
	
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

	public get iconURL() : string {
		return this._iconURL;
	}

	protected drawBackground(ctx:any, style:Style) : Widget {
		if(style.backGroundImage) {
			style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h); 
		}else if(style.backGroundColor || (style.lineColor && style.lineWidth)) {
			Graphics.drawRect(ctx, style.backGroundColor, null, 0, 0, 0, this.w, this.h);
			if(this.listItemStyle === ListItemStyle.FIRST) {
				Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, 0, this.w, 0);
			}
			Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, this.h, this.w, this.h);
		}

		return this;
	}
	
	protected drawImage(ctx:any, style:Style) : Widget {
		var icon = this._icon;
		var y = this.topPadding;
		var x = this.leftPadding;
		var h = this.h - this.topPadding - this.bottomPadding;
		var w = h;
		
		if(icon) {
			icon.draw(ctx, ImageDrawType.ICON, x, y, w, h);
		}

		return this;
	}
	
	protected getTextRect(style:Style) : Rect {
		var x = this.leftPadding;
		if(this._icon) {
			x += this.h;
		}

		var y = this.topPadding;
		var w = this.w - x - this.rightPadding;
		var h = this.h - y - this.bottomPadding;
		if(style.foreGroundImage) {
			w -= this.h;
		}
		return Rect.rect.init(x, y, w, h);
	}

	public static TYPE = "list-item";
	private static recycleBin = new RecyclableCreator<ListItem>(function() {return new ListItem()});
	public static create(options?:any) : ListItem {
		return <ListItem>ListItem.recycleBin.create().reset(ListItem.TYPE).set(options);
	}
};

WidgetFactory.register(ListItem.TYPE, ListItem.create);

export class ListItemCheckable extends ListItem {
	protected _multiCheckable : boolean;

	public set multiCheckable(value:boolean) {
		this._multiCheckable = value;
	}
	
	public get multiCheckable() : boolean {
		return this._multiCheckable;
	}
		
	protected drawImage(ctx:any, style:Style) : Widget {
		if(this.value) {
			var icon = style.foreGroundImage;
			if(icon) {
				var h = this.h-this.topPadding-this.bottomPadding;
				var w = h;
				var y = this.topPadding;
				var x = this.w - this.rightPadding - w;
				icon.draw(ctx, ImageDrawType.ICON, x, y, w, h);
			}
		}

		return super.drawImage(ctx, style);
	}
	
	protected dispatchClick(evt:any) {
		this.value = !this.value;	
		super.dispatchClick(evt);
	}

	public get value() : boolean {
		return this._value;
	}

	public set value(value:boolean) {
		this.setValue(value, true, !this.multiCheckable);
	}

	constructor(type?:string) {
		super(type || ListItemCheckable.TYPE);
	}
	
	public static TYPE = "list-item.checkable";
	private static rBin = new RecyclableCreator<ListItemCheckable>(function() {return new ListItemCheckable()});
	public static create(options?:any) : ListItemCheckable {
		return <ListItemCheckable>ListItemCheckable.rBin.create().reset(ListItemCheckable.TYPE).set(options);
	}
};

WidgetFactory.register(ListItemCheckable.TYPE, ListItemCheckable.create);

