
import {Rect} from "../rect";
import {Style} from "../style";
import {Point} from "../point";
import {Edit} from "./edit";
import {Button} from "./button";
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

import {IViewModel, BindingMode} from "../mvvm/iview-model";

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
	public customDraw : CustomItemDrawFunc;

	constructor() {
		super(ComboBoxItem.TYPE);
	}

	protected onReset() {
		super.onReset();
		this.padding = 2;
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

		var r = Rect.rect.init(x, y, w, h);
		if(this.customDraw) {
			this.customDraw(ctx, style, r, this.data);
		}else{
			var text = this.getLocaleText();
			if(text && style.textColor) {
				Graphics.drawTextSL(ctx, text, style, r);
			}
		}

		return this;
	}

	public static TYPE = "combo-box-item";
	private static r = new RecyclableCreator<ComboBoxItem>(function() {return new ComboBoxItem()});
	public static create(options?:any) : ComboBoxItem {
		return <ComboBoxItem>ComboBoxItem.r.create().reset(ComboBoxItem.TYPE, options);
	}
};

export abstract class ComboBoxBase extends Widget {
	protected _value : any;
	protected _ih : number;
	protected _current : ComboBoxOption;
	protected _isPopupOpened : boolean;
	protected _options : Array<ComboBoxOption>;
	protected _customItemDraw : CustomItemDrawFunc;
	
	public get options() : Array<ComboBoxOption>{
		return this._options;
	}
	
	public set options(value:Array<ComboBoxOption>){
		this.resetOptions();
		if(value) {
			value.forEach((item:any) => {
				this.addOption(item.text, item.value, item.imageURL, item.color);
			});
		}
	}
	
	public set optionsJson(options:any) {
		this.resetOptions();
		options.forEach(item => {
			if(typeof item === "string") {
				this.addOption(item);
			}else{
				this.addOption(item.text, item.value, item.imageURL, item.color);
			}
		});
	}

	public set customItemDraw(value:CustomItemDrawFunc) {
		this._customItemDraw = value;
	}

	public get customItemDraw() : CustomItemDrawFunc {
		return this._customItemDraw;
	}

	public get inputable() {
		return true;
	}

	public get itemH() : number {
		return this._ih;
	}

	public set itemH(value:number) {
		this._ih = value;
	}

	public set value(value:any) {
		var arr = this._options;
		this._current = null;
		this._value = value;

		if(arr) {
			var n = arr.length;
			for(var i = 0; i < n; i++) {
				var iter = arr[i];
				if(iter.value === value) {
					this._current = iter;
					break;
				}
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

		if(value === this._value || (value === undefined && text === this._value)) {
			this._current = item;
		}

		return this;
	}

	protected onItemSelected(data:ComboBoxOption) {
		if(data) {
			var oldValue = this._current ? this._current.value : null;
			this._current = data;
			this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, {oldValue:oldValue, newValue:data.value}));
		}
		this.requestRedraw();
	}

	protected showPopup() {
		var vp = this.app.getViewPort();
		var p = this.toViewPoint(Point.point.init(0, 0));

		var x = p.x;
		var w = this.w;
		var y = p.y+this.h;
		var padding = 4;
		var scrollable = false;	
		var itemH = this.itemH;
		var options = this._options;
		var dialog = <Dialog>Dialog.create({app:this.app, hasOwnCanvas:true});
		var n = this._options.length || 1;
		var h = n * itemH + padding + padding;

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

		dialog.set({x:x, y:y, w:w, h:h});
		dialog.styleType = "widget.transparent";
		dialog.childrenLayouter = SimpleLayouter.createWithOptions();
		
		var listView = <ListView>ListView.create();
		listView.padding = padding;
		listView.itemH = itemH;
		listView.styleType = "combo-box-popup";
		listView.layoutParam = SimpleLayouterParam.createWithOptions({x:"0", y:"0px", w:"100%", h:"100%"});
		listView.dragToScroll = scrollable;
	
		dialog.addChild(listView);
		dialog.target = listView;

		for(var i = 0; i < n; i++) {
			var iter = options[i];
			var item = ComboBoxItem.create({customDraw:this.customItemDraw});
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

	protected onBindProp(prop:string, value:any) {
		if(prop === "options") {
			this.resetOptions();
			value.forEach((opt:any) => {
				this.addOption(opt.text, opt.value, opt.imageURL, opt.color);
			});
		}else{
			return super.onBindProp(prop, value);
		}
	}

	protected onReset() {
		super.onReset();
		this._options = [];
		this._current = null;
	}
	
	protected onToJson(json:any) {
		if(this._options) {
			json.options = JSON.parse(JSON.stringify(this._options));
		}
	}

	public onFromJson(json:any){
		if(json.options) {
			this._options = JSON.parse(JSON.stringify(json.options));
		}
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_ih:25, _lp:2, _rp:2});
	protected getDefProps() : any {
		return ComboBoxBase.defProps;
	}
	constructor(type?:string) {
		super(type);
	}
};

export type CustomDrawFunc = (ctx:any, style:Style, rect:Rect, data:ComboBoxOption) => void;
export type CustomItemDrawFunc = (ctx:any, style:Style, rect:Rect, data:ComboBoxOption) => void;

export class ComboBox extends ComboBoxBase {
	protected _customDraw : CustomDrawFunc;

	public set customDraw(value:CustomDrawFunc) {
		this._customDraw = value;
	}
	
	public get customDraw() : CustomDrawFunc {
		return this._customDraw;
	}

	public get text() {
		return this._current ? this._current.text : "";
	}

	protected getFgImageRect(style:Style) : Rect {
		var h = this.clientH;

		return Rect.rect.init(this.w - this.h, this.topPadding, h, h);
	}

	protected drawText(ctx:any, style:Style) : Widget {
		if(this.customDraw) {
			var r = Rect.rect.init(this.leftPadding, this.topPadding, this.clientW-this.h, this.clientH);
			this.customDraw(ctx, style, r, this._current);
		}else{
			super.drawText(ctx, style);
		}

		return this;
	}

	public dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this._isPopupOpened) {
			this.showPopup();
		}
	}

	constructor() {
		super(ComboBox.TYPE);
	}

	public static TYPE = "combo-box";
	private static recycleBin = new RecyclableCreator<ComboBox>(function() {return new ComboBox()});
	public static create(options?:any) : ComboBox {
		return <ComboBox>ComboBox.recycleBin.create().reset(ComboBox.TYPE, options);
	}
};

WidgetFactory.register(ComboBox.TYPE, ComboBox.create);

export class ComboBoxEditable extends ComboBoxBase {
	protected _edit : Edit;
	protected _button : Button;

	public set value(value:any) {
		this._value = value;
		if(this._edit) {
			this._edit.text = value;
		}
	}

	public get value() : any {
		return this._edit ? this._edit.text : this._value;
	}

	protected onItemSelected(data:ComboBoxOption) {
		if(data) {
			super.onItemSelected(data);
			if(this._edit) {
				this._edit.text = data.text || data.value;
			}
		}
	}

	public relayoutChildren() : Rect {
		this.requestRedraw();
		if(this._edit && this._button) {
			var x = this.leftPadding;
			var y = this.topPadding;
			var w = this.clientW - this.h;
			var h = this.clientH;
			this._edit.moveResizeTo(x, y, w, h, 0);
			x = this.w - this.h;
			w = this.h - this.rightPadding;
			this._button.moveResizeTo(x, y, w, h, 0);
		}

		return this.getLayoutRect();
	}

	public dispose() {
		this._edit = null;
		this._button = null;
		super.dispose();
	}

	protected onReset() {
		super.onReset();
		
		this.padding = 0;
		this._edit = Edit.create({multiLineMode:false});
		this.addChild(this._edit);
		
		this._button = Button.create({styleType:"combo-box.button"});
		this.addChild(this._button);
		this._button.on(Events.CLICK, evt => {
			if(!this._isPopupOpened) {
				this.showPopup();
			}
		});
	}

	constructor() {
		super(ComboBoxEditable.TYPE);
	}

	public static TYPE = "combo-box.editable";
	private static recycleBin = new RecyclableCreator<ComboBoxEditable>(function() {
		return new ComboBoxEditable()});
	public static create(options?:any) : ComboBoxEditable {
		return <ComboBoxEditable>ComboBoxEditable.recycleBin.create().reset(ComboBoxEditable.TYPE, options);
	}
};

WidgetFactory.register(ComboBoxEditable.TYPE, ComboBoxEditable.create);

