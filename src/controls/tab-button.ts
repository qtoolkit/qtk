
import {Rect} from "../rect";
import {Style} from "../style";
import {Widget} from "./widget";
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

	public set orientation(value:number) {
		this._orientation = value;
	}
	public get orientation() {
		return this._orientation;
	}

	public setIcons(normalIconURL:string, currentIconURL:string) {
		this._normalIcon = ImageTile.create(normalIconURL, evt => {
			this.requestRedraw();
		});
		this._currentIcon = ImageTile.create(currentIconURL, evt => {
			this.requestRedraw();
		});
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

	public dispose() {
		super.dispose();
		TabButton.re.recycle(this);
	}

	public static TYPE = "tab-button";
	private static re = new RecyclableCreator<TabButton>(function() {return new TabButton()});
	public static create() : Widget {
		return TabButton.re.create().reset(TabButton.TYPE);
	}
};

WidgetFactory.register(TabButton.TYPE, TabButton.create);

