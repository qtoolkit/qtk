
import {Rect} from "../rect";
import {Style} from "../style";
import {Point} from "../point";
import {Widget} from "./widget";
import {Dialog} from "./dialog";
import {Graphics} from "../graphics";
import Events = require("../events");
import {ListView} from "./list-view";
import {ListItem} from "./list-item";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {ImageTile, ImageDrawType} from "../image-tile";
import {SimpleLayouter, SimpleLayouterParam} from "../layouters/simple-layouter";

export class ComboBoxOption {
	image: ImageTile;
	color : string;
	text : string;
	value : any;
	isDefault: boolean;

	constructor(text:string, value?:any, imageURL?:string, color?:string) {
		this.text = text;
		this.color = color;
		this.isDefault = false;
		this.value = value === undefined ? text : value;
		this.image = imageURL ? ImageTile.create(imageURL, function() {}) : null;
	}
};

export class ComboBoxItem extends ListItem {
	public index : number;
	public data : ComboBoxOption;

	constructor() {
		super(ComboBoxItem.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this.padding = 4;
		this.index = 0;

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

		if(data.image) {
			data.image.draw(ctx, ImageDrawType.AUTO, x, y, h, h); 
		}else if(data.color) {
			ctx.fillStyle = data.color;
			ctx.fillRect(x, y, h, h);
		}else if(style.foreGroundImage) {
			style.foreGroundImage.draw(ctx, ImageDrawType.AUTO, x, y, h, h); 
		}
		x += h + this.leftPadding;

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
	public static create() : Widget {
		return ComboBoxItem.r.create().reset(ComboBoxItem.TYPE);
	}
};

export class ComboBox extends Widget {
	protected _value : any;
	protected _current : ComboBoxOption;
	protected _isPopupOpened : boolean;
	protected _options : Array<ComboBoxOption>;

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

	public addOption(text:string, value:any, imageURL:string, color:string) : Widget {
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

	protected onItemSelected(index:number, data:ComboBoxOption) {
		this._current = data;
		this.requestRedraw();
		console.log("onItemSelected:" + index + " " + data.text);
	}

	protected showPopup() {
		var p = this.toViewPoint(Point.point.init(0, 0));

		var x = p.x-1;
		var y = p.y+this.h;
		var w = this.w;
		var itemHeight = 20;
		var dialog = <Dialog>Dialog.create();
		var n = this._options.length || 1;
		var h = n * itemHeight + 8;

		var options = this._options;
		dialog.set({x:x, y:y, w:w, h:h, hasOwnCanvas:true, app:this.app});
		dialog.childrenLayouter = SimpleLayouter.create();
		dialog.styleType = "widget.transparent";
		var listView = <ListView>ListView.create();
		listView.layoutParam = SimpleLayouterParam.create({x:"0", y:"0px", w:"100%", h:"100%"});
		listView.styleType = "combo-box-popup";
		listView.padding = 5;
		dialog.addChild(listView);
		listView.itemHeight = itemHeight;

		for(var i = 0; i < n; i++) {
			var iter = options[i];
			var item = ComboBoxItem.create();
			iter.isDefault = this._current === iter;
			item.set({index:i, data:iter});
			listView.addChild(item);
		}

		listView.relayoutChildren();
		this._isPopupOpened = true;
		
		dialog.open();
		dialog.grab();
		dialog.on(Events.CLICK, evt => {
			var item = <ComboBoxItem>listView.target;
			var data = item ? item.data : null;
			var index = item ? item.index : 0;
			this.onItemSelected(index, data);

			dialog.close();
		});

		dialog.on(Events.CLOSE, evt => {
			this._isPopupOpened = false;
		});
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._options = [];
		this.padding = 5;
		return this;
	}

	constructor() {
		super(ComboBox.TYPE);
	}

	public dispose() {
		super.dispose();
		ComboBox.recyclbale.recycle(this);
	}

	public static TYPE = "combo-box";
	private static recyclbale = new RecyclableCreator<ComboBox>(function() {return new ComboBox()});
	public static create() : Widget {
		return ComboBox.recyclbale.create().reset(ComboBox.TYPE);
	}
};

WidgetFactory.register(ComboBox.TYPE, ComboBox.create);

