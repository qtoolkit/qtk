
import {Style} from "../base/style";
import {WidgetState, Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {ImageTile, ImageDrawType} from "../base/image-tile";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 图片控件。 
 */
export class Image extends Widget {
	private _style : Style;

	constructor() {
		super(Image.TYPE);
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

	protected onToJson(json:any) {
		if(this._style) {
			json.style = this._style.toJson();
		}
	}

	public onFromJson(json:any){
		if(json.style) {
			this._style = Style.create(json.style);
		}
	}
	public setStyle(state:WidgetState, style:Style):Widget{
		this._style = style;

		return this;
	}

	protected onReset() {
		super.onReset();

		var style = Style.create();
		style.fontSize = 12;
		style.textColor = "Black";
		style.backGroundImageDrawType = ImageDrawType.DEFAULT;
		this._style = style; 
	}

	public getStyle() : Style {
		return this._style;
	}
	
	public static TYPE = "image";
	private static recycleBin = WidgetRecyclableCreator.create(Image);
	public static create(options?:any) : Image{
		return <Image>Image.recycleBin.create(options);
	}
};

WidgetFactory.register(Image.TYPE, Image.create);

