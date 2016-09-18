
import {Rect} from "../rect";
import {Style} from "../style";
import {Point} from "../point";
import {Widget} from "./widget";
import {Dialog} from "./dialog";
import {Graphics} from "../graphics";
import {IViewPort} from "../iview-port";
import Events = require("../events");
import {ListView} from "./list-view";
import {ListItem} from "./list-item";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {ImageTile, ImageDrawType} from "../image-tile";
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

export class ComboBoxOption {
	public value : any;
	public text : string;
	public color : string;
	public image: ImageTile;
	public isDefault: boolean;

	constructor(text:string, value?:any, imageURL?:string, color?:string) {
		this.text = text;
		this.color = color;
		this.isDefault = false;
		this.value = value === undefined ? text : value;
		this.image = imageURL ? ImageTile.create(imageURL, function() {}) : null;
	}
};

export class ComboBoxItem extends ListItem {
	public data : ComboBoxOption;

	constructor() {
		super(ComboBoxItem.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.padding = 2;

		return this;
	}

	public get text() : string {
		return this.data.text;
	}
	
	protected getStyleType() : string {
		if(this._styleType) {
			return this._styleType;
		}

		if(this.data.isDefault) {
			return "combo-box-item.current";
		}else{
			return "combo-box-item";
		}
	}

	protected drawText(ctx:any, style:Style) : Widget {
		var data = this.data;
		var x = this.leftPadding;;
		var y = this.topPadding;
		var w = this.w - x - this.rightPadding;
		var h = this.h - y - this.bottomPadding;

		if(style.foreGroundImage) {
			style.foreGroundImage.draw(ctx, ImageDrawType.AUTO, x, y, h, h); 
		}
		x += h + this.leftPadding;
		
		if(data.image) {
			data.image.draw(ctx, ImageDrawType.AUTO, x, y, h, h); 
			x += h + this.leftPadding;
		}else if(data.color) {
			ctx.fillStyle = data.color;
			ctx.fillRect(x, y, h, h);
			x += h + this.leftPadding;
		}

		var text = this.getLocaleText();
		if(text && style.textColor) {
			Graphics.drawTextSL(ctx, text, style, Rect.rect.init(x, y, w, h));
		}

		return this;
	}

	public dispose() {
		super.dispose();
		ComboBoxItem.r.recycle(this);
	}

	public static TYPE = "combo-box-item";
	private static r = new RecyclableCreator<ComboBoxItem>(function() {return new ComboBoxItem()});
	public static create(options?:any) : ComboBoxItem {
		return <ComboBoxItem>ComboBoxItem.r.create().reset(ComboBoxItem.TYPE).set(options);
	}
};

export class ComboBox extends Widget {
	protected _value : any;
	protected _current : ComboBoxOption;
	protected _isPopupOpened : boolean;
	protected _options : Array<ComboBoxOption>;
	protected _itemHeight : number;

	public get itemHeight() : number {
		return this._itemHeight || 25;
	}

	public set itemHeight(value:number) {
		this._itemHeight = value;
	}

	public get text() {
		return this._current ? this._current.text : "";
	}

	public set value(value:any) {
		var arr = this._options;
		var n = arr.length;
		this._current = null;
		this._value = value;

		for(var i = 0; i < n; i++) {
			var iter = arr[i];
			if(iter.value === value) {
				this._current = iter;
				break;
			}
		}
	}

	public get value() : any {
		return this._current ? this._current.value : null;
	}

	public resetOptions() : Widget {
		this._options = [];

		return this;
	}

	public addOption(text:string, value?:any, imageURL?:string, color?:string) : Widget {
		var item = new ComboBoxOption(text, value, imageURL, color);
		this._options.push(item);

		if(value === this._value) {
			this._current = item;
		}

		return this;
	}

	protected drawImage(ctx:any, style:Style) : Widget {
		if(style.foreGroundImage) {
			var x = this.w - this.h;
			var y = this.topPadding;
			var w = this.h - this.topPadding - this.bottomPadding;
			var h = w;

			style.foreGroundImage.draw(ctx, ImageDrawType.AUTO, x, y, w, h);
		}

		return this;
	}
	
	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this._isPopupOpened) {
			this.showPopup();
		}
	}

	protected onItemSelected(data:ComboBoxOption) {
		if(data) {
			this._current = data;
			this.requestRedraw();
			var e = Events.ChangeEvent.create();
			e.init(Events.CHANGE, {oldValue:null, newValue:data.value});
			this.dispatchEvent(e);
			e.dispose();
		}
	}

	protected showPopup() {
		var vp = this.app.getViewPort();
		var p = this.toViewPoint(Point.point.init(0, 0));

		var x = p.x;
		var w = this.w;
		var y = p.y+this.h;
		var padding = 4;
		var scrollable = false;	
		var itemHeight = this.itemHeight;
		var options = this._options;
		var dialog = <Dialog>Dialog.create();
		var n = this._options.length || 1;
		var h = n * itemHeight + padding + padding;

		var halfH = vp.h >> 1;
		if((y + h) > vp.h) {
			if(h < halfH) {
				y = p.y - h;
			}else{
				h = halfH;
				if((y + h) > vp.h) {
					y = p.y - h;
				}
				scrollable = true;
			}
		}

		dialog.set({x:x, y:y, w:w, h:h, hasOwnCanvas:true, app:this.app});
		dialog.styleType = "widget.transparent";
		dialog.childrenLayouter = SimpleLayouter.create();
		
		var listView = <ListView>ListView.create();
		listView.padding = padding;
		listView.itemHeight = itemHeight;
		listView.styleType = "combo-box-popup";
		listView.layoutParam = SimpleLayouterParam.create({x:"0", y:"0px", w:"100%", h:"100%"});
		listView.dragToScroll = scrollable;
	
		dialog.addChild(listView);
		dialog.target = listView;

		for(var i = 0; i < n; i++) {
			var iter = options[i];
			var item = ComboBoxItem.create();
			iter.isDefault = this._current === iter;
			item.set({data:iter});
			listView.addChild(item, true);
		}
		listView.relayoutChildren();
		listView.relayoutChildren();
		
		dialog.open();
		dialog.grab();
		this._isPopupOpened = true;
		dialog.on(Events.CLICK, evt => {
			var item = <ComboBoxItem>listView.target;
			if(item || !dialog.hitTestResult) {
				if(item) {	
					var data = item.data;
					this.onItemSelected(data);
				}

				this._isPopupOpened = false;
				dialog.close();
			}
		});
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._options = [];
		this.padding = 6;

		return this;
	}

	constructor() {
		super(ComboBox.TYPE);
	}

	public dispose() {
		super.dispose();
		ComboBox.recycleBin.recycle(this);
	}

	public static TYPE = "combo-box";
	private static recycleBin = new RecyclableCreator<ComboBox>(function() {return new ComboBox()});
	public static create(options?:any) : ComboBox {
		return <ComboBox>ComboBox.recycleBin.create().reset(ComboBox.TYPE).set(options);
	}
};

WidgetFactory.register(ComboBox.TYPE, ComboBox.create);

