
import {Style} from "./style";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "./image-tile";

/**
 * 图片控件。 
 */
export class Image extends Widget {
	private _style : Style;

	constructor() {
		super(Image.TYPE);
		this._style = Style.create();
	}

	public get image() : ImageTile {
		return this._style.backGroundImage;
	}

	public set image(image:ImageTile) {
		this._style.backGroundImage = image;
	}
	
	public get drawType() : ImageDrawType {
		return this._style.backGroundImageDrawType;
	}

	public set drawType(drawType:ImageDrawType) {
		this._style.backGroundImageDrawType = drawType;
	}

	public set value(url:string) {
		this._style.backGroundImage = ImageTile.create(url, evt => {
			this.requestRedraw();
		});
	}

	public get value() : string {
		var image = this._style.backGroundImage;
		
		return image ? image.src : null;
	}

	public getStyle() : Style {
		return this._style;
	}

	public static TYPE = "image";
	public static create() : Widget {
		var widget = new Image();
		return widget;
	}
};

WidgetFactory.register(Image.TYPE, Image.create);

