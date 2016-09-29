
import {Style} from "../style";
import {WidgetState, Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../graphics";
import {AlignH, AlignV, Orientation} from "../consts";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 颜色控件。 
 */
export class Color extends Widget {
	protected _style : Style;

	constructor(type:string) {
		super(type);
	}

	public get color() : string {
		return this._style.lineColor;
	}

	public set color(value:string) {
		this._style.lineColor = value;
	}
	
	public get lineColor() : string{
		return this._style.lineColor;
	}

	public set lineColor(value:string) {
		this._style.lineColor = value;
	}

	public get lineWidth() : number {
		return this._style.lineWidth;
	}

	public set lineWidth(value:number) {
		this._style.lineWidth = value;
	}

	public set value(color:string) {
		this.color = color;
	}

	public get value() : string {
		return this.color;
	}

	public setStyle(state:WidgetState, style:Style):Widget{
		this._style = style;

		return this;
	}

	public onReset() {
		this._style = Style.create();
		this._style.fontSize = 16;
		this._style.textColor = "Black";
	}

	public getStyle() : Style {
		return this._style;
	}
};

export class ColorTile extends Color {
	public get color() : string {
		return this._style.backGroundColor;
	}

	public set color(value:string) {
		this._style.backGroundColor = value;
	}
	
	public get roundRadius() : number {
		return this._style.roundRadius;
	}

	public set roundRadius(value:number) {
		this._style.roundRadius = value;
	}
	
	constructor() {
		super(ColorTile.TYPE);
	}

	public static TYPE = "color-tile";
	private static recycleBin = new RecyclableCreator<ColorTile>(function() {return new ColorTile()});
	public static create(options?:any) : ColorTile {
		return <ColorTile>ColorTile.recycleBin.create().reset(ColorTile.TYPE, options);
	}
};

WidgetFactory.register(ColorTile.TYPE, ColorTile.create);

export class ColorLine extends Color {
	protected  _vAlign : AlignV;
	protected  _hAlign : AlignH;
	protected  _orientation : Orientation;
	
	public get color() : string {
		return this._style.lineColor;
	}

	public set color(value:string) {
		this._style.lineColor = value;
	}
	
	public get orientation() : Orientation{
		return this._orientation;
	}

	public set orientation(value:Orientation) {
		this._orientation = value;
	}

	public get vAlign() : AlignV {
		return this._vAlign;
	}

	public set vAlign(value:AlignV) {
		this._vAlign = value;
	}
	
	public get hAlign() : AlignH {
		return this._hAlign;
	}

	public set hAlign(value:AlignH) {
		this._hAlign = value;
	}
	
	public get lineJoin() : number {
		return this._style.lineJoin;
	}

	public set lineJoin(value:number) {
		this._style.lineJoin = value;
	}
	
	public get lineCap() : number {
		return this._style.lineCap;
	}

	public set lineCap(value:number) {
		this._style.lineCap = value;
	}

	public get dashLine() : Array<number>{
		return this._style.dashLine;
	}

	public set dashLine(value:Array<number>) {
		this._style.dashLine = value;
	}

	protected drawColorBackground(ctx:any, style:Style) : Widget {
		var x = 0;
		var y = 0;
		var lineWidth = style.lineWidth || 1;

		ctx.lineCap = style.lineCap || "butt";
		ctx.lineJoin = style.lineJoin || "miter";
		if(style.dashLine) {
			ctx.setLineDash(style.dashLine);
		}

		if(this._orientation === Orientation.V) {
			switch(this._hAlign) {
				case AlignH.L: {
					x = 0;
					break;
				}
				case AlignH.R: {
					x = this.w - lineWidth;
					break;
				}
				default: {
					x = this.w >> 1;
					break;
				}
			}
			Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, x, this.h);
		}else{
			switch(this._vAlign) {
				case AlignV.T: {
					y = 0;
					break;
				}
				case AlignV.B: {
					y = this.h - lineWidth;
					break;
				}
				default: {
					y = this.h >> 1;
					break;
				}
			}
			Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, this.w, y);
		}

		return this;
	}

	constructor() {
		super(ColorLine.TYPE);
	}

	public static TYPE = "color-tile";
	private static recycleBin = new RecyclableCreator<ColorLine>(function() {return new ColorLine()});
	public static create(options?:any) : ColorLine {
		return <ColorLine>ColorLine.recycleBin.create().reset(ColorLine.TYPE, options);
	}
};

WidgetFactory.register(ColorLine.TYPE, ColorLine.create);

