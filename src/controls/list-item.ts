
import {Rect} from "../base/rect";
import {Style} from "../base/style";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../base/graphics";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {ImageTile, ImageDrawType} from "../base/image-tile";

export enum ListItemStyle {
	NORMAL,
	FIRST,
	LAST
};

/**
 * 列表项。
 */
export class ListItem extends Widget {
	public listItemStyle : ListItemStyle;
	protected _icon : ImageTile;
	protected _iconURL : string;
	protected _index : number; 
	protected _oddEvenStyle : boolean;
	
	/**
	 * 奇数行和偶数行是否采用不同的风格。 
	 */
	public set oddEvenStyle(value:boolean) {
		this._oddEvenStyle = value;
	}
	
	public get oddEvenStyle() : boolean{
		return this._oddEvenStyle;
	}
	
	protected getStyleType() : string {
		if(!this._oddEvenStyle) {
			return super.getStyleType();
		}

		return this._index%2 ? "list-item.even" : "list-item.odd";
	}

	public relayoutChildren() : Rect {
		if(this.parent) {
			this._index = this.parent.children.indexOf(this);
		}

		return super.relayoutChildren();
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
	
	constructor(type?:string) {
		super(type || ListItem.TYPE);
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_oddEvenStyle:false, _iconURL:null});
	protected getDefProps() : any {
		return ListItem.defProps;
	}
	
	public static TYPE = "list-item";
	private static recycleBin = WidgetRecyclableCreator.create(ListItem);
	public static create(options?:any) : ListItem {
		return <ListItem>ListItem.recycleBin.create(options);
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
	
	public dispatchClick(evt:any) {
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
	private static rBin = WidgetRecyclableCreator.create(ListItemCheckable);
	public static create(options?:any) : ListItemCheckable {
		return <ListItemCheckable>ListItemCheckable.rBin.create(options);
	}
};

WidgetFactory.register(ListItemCheckable.TYPE, ListItemCheckable.create);

