
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
import {Button} from "./button";
import {TabPage} from "./tab-page";
import Events = require("../events");
import {Graphics} from "../graphics";
import {Orientation} from "../consts";
import {RadioButton} from "./radio-button";
import {WidgetFactory} from "./widget-factory";
import {ImageDrawType, ImageTile} from "../image-tile";
import {RecyclableCreator} from "../recyclable-creator";

export class TabButton extends RadioButton {
	protected _orientation : Orientation;
	protected _normalIcon : ImageTile;
	protected _currentIcon : ImageTile;
	protected _tabPage : TabPage;
	protected _closeButton : Widget;
	protected _closeButtonAtLeft : boolean;

	public get closeButton() : Widget {
		return this._closeButton;
	}

	public set closeButtonAtLeft(value:boolean) {
		this._closeButtonAtLeft = value;
		this.relayoutChildren();
	}
	public get closeButtonAtLeft() : boolean {
		return this._closeButtonAtLeft;
	}

	public relayoutChildren() : Rect {
		if(this._closeButton) {
			var x = this.leftPadding;
			var y = this.topPadding;
			var h = this.h - this.topPadding - this.bottomPadding;
			var w = h;
			if(!this.closeButtonAtLeft) {
				x = this.w - this.rightPadding - w;
			}
			
			this._closeButton.moveResizeTo(x, y, w, h);
		}

		return Rect.rect.init(0, 0, this.w, this.h);
	}

	public set closable(value:boolean) {
		if(value && this._closeButton || !value && !this._closeButton) {
			return;
		}

		if(this._closeButton) {
			this.removeChild(this._closeButton);
			this._closeButton = null;
		}else{
			var closeButton = Button.create();
			closeButton.set({styleType:"tab-button.close"});
			this.addChild(closeButton);

			this._closeButton = closeButton;
		}
	}

	public get closable() : boolean {
		return !!this._closeButton;
	}

	public get desireWidth() : number {
		var w = this.leftPadding + this.rightPadding;
		var text = this.text;
		var style = this.getStyle();

		if(this._currentIcon || this._normalIcon) {
			w += this.h;
		}
		if(text && style) {
			var font = style.font;
			w += Graphics.measureText(text, font) + style.fontSize;
		}
		
		return w;
	}

	public set tabPage(value:TabPage) {
		this._tabPage = value;
	}
	public get tabPage() : TabPage {
		return this._tabPage;
	}

	public set orientation(value:Orientation) {
		this._orientation = value;
	}
	public get orientation() : Orientation{
		return this._orientation;
	}

	public setIcons(normalIconURL:string, currentIconURL:string) {
		if(normalIconURL) {
			this._normalIcon = ImageTile.create(normalIconURL, evt => {
				this.requestRedraw();
			});
		}else{
			this._normalIcon = null;
		}

		if(currentIconURL) {
			this._currentIcon = ImageTile.create(currentIconURL, evt => {
				this.requestRedraw();
			});
		}else{
			this._currentIcon = null;
		}
	}

	protected getStyleType() : string {
		var appendix = this.value ? "current" : "normal";
		
		return (this._styleType || this.type) +"."+appendix;
	}
	protected drawImage(ctx:any, style:Style) : Widget {
		var text = this.getLocaleText();
		var icon = this.value ? this._currentIcon : this._normalIcon;

		if(icon) {
			var w = 0;
			var h = 0;
			var x = this.leftPadding;
			var y = this.topPadding;

			if(this._orientation === Orientation.V) {
				w = this.w - this.leftPadding - this.rightPadding;
				h = this.h - this.bottomPadding - this.topPadding;
				if(text) {
					h -= style.fontSize;
				}
				icon.draw(ctx, ImageDrawType.ICON, x, y, w, h);
				if(text) {
					y = this.h - this.bottomPadding - style.fontSize;
					Graphics.drawTextSL(ctx, text, style, Rect.rect.init(0, y, w, style.fontSize));
				}
			}else{
				h = this.h - this.topPadding - this.bottomPadding;
				w = h;
				icon.draw(ctx, ImageDrawType.ICON, x, y, w, h);
				if(text) {
					x += w + this.leftPadding;
					w = this.w - x - this.rightPadding;
					Graphics.drawTextSL(ctx, text, style, Rect.rect.init(x, y, w, h));
				}
			}
		}else{
			Graphics.drawTextSL(ctx, text, style, Rect.rect.init(0, 0, this.w, this.h));
		}

		return this;
	}

	protected drawText(ctx:any, style:Style) : Widget {
		return this;
	}

	constructor() {
		super(TabButton.TYPE);
	}
	
	public reset(type:string) : Widget {
		super.reset(type);
		this.padding = 2;
		this._tabPage = null;
		this._closeButton = null;
		this._normalIcon = null;
		this._currentIcon = null;
		this._closeButtonAtLeft = false;
		this._orientation = Orientation.H;

		return this;
	}

	public dispose() {
		super.dispose();
		this._tabPage = null;
		this._closeButton = null;
		this._normalIcon = null;
		this._currentIcon = null;
	}

	public static TYPE = "tab-button";
	private static re = new RecyclableCreator<TabButton>(function() {return new TabButton()});
	public static create() : TabButton {
		return <TabButton>TabButton.re.create().reset(TabButton.TYPE);
	}
};

WidgetFactory.register(TabButton.TYPE, TabButton.create);

