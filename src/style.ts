/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import {Emitter} from "./emitter";
import Events = require("./events");
import {ImageDrawType, ImageTile} from "./image-tile";

/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
export class Style extends Emitter {
	private _backGroundColor : string;
	private _foreGroundColor : string;
	private _backGroundImage : ImageTile;
	private _backGroundImageDrawType : ImageDrawType;
	private _foreGroundImage : ImageTile;
	private _foreGroundImageDrawType : ImageDrawType;
	private _lineCap : number;
	private _lineJoin : number;
	private _dashLine : Array<number>;
	private _lineWidth : number;
	private _lineColor : string;
	private _roundRadius : number;
	private _roundType : string;
	private _fontFamily : string;
	private _fontSize : number;
	private _textColor : string;
	private _fontBold : boolean;
	private _fontItalic : boolean;
	private _fontUnderline : boolean;
	private _textAlign : string;
	private _textBaseline : string;

	constructor() {
		super();
	}

	private notifyChanged() {
		this.dispatchEvent({type:Events.CHANGE});
	}

	public get textLineHeight() : number {
		return Math.round(this.fontSize * 1.2);
	}

	public clone() : Style {
		var other = new Style();

		if(this._backGroundColor) {
			other._backGroundColor = this._backGroundColor;
		}

		if(this._foreGroundColor) {
			other._foreGroundColor = this._foreGroundColor;
		}

		if(this._backGroundImage) {
			other._backGroundImage = this._backGroundImage;
		}

		if(this._backGroundImageDrawType) {
			other._backGroundImageDrawType = this._backGroundImageDrawType;
		}

		if(this._foreGroundImage) {
			other._foreGroundImage = this._foreGroundImage;
		}

		if(this._foreGroundImageDrawType) {
			other._foreGroundImageDrawType = this._foreGroundImageDrawType;
		}

		if(this._fontFamily) {
			other._fontFamily = this._fontFamily;
		}

		if(this._fontSize) {
			other._fontSize = this._fontSize;
		}

		if(this._textColor) {
			other._textColor = this._textColor;
		}

		if(this._fontBold) {
			other._fontBold = this._fontBold;
		}

		if(this._fontItalic) {
			other._fontItalic = this._fontItalic;
		}

		if(this._fontUnderline) {
			other._fontUnderline = this._fontUnderline;
		}
		
		if(this._lineColor) {
			other._lineColor = this._lineColor;
		}

		if(this._lineWidth) {
			other._lineWidth = this._lineWidth;
		}

		if(this._lineJoin) {
			other._lineJoin = this._lineJoin;
		}
		
		if(this._lineCap) {
			other._lineCap = this._lineCap;
		}

		if(this._dashLine) {
			other._dashLine = this._dashLine;
		}
		
		if(this._roundRadius) {
			other._roundRadius = this._roundRadius;
		}
		
		if(this._roundType) {
			other._roundType = this._roundType;
		}

		return other;
	}

	public toJson() : any {
		var json : any = {};
		if(this._backGroundColor) {
			json.backGroundColor = this._backGroundColor;
		}

		if(this._foreGroundColor) {
			json.foreGroundColor = this._foreGroundColor;
		}

		if(this._backGroundImage) {
			json.backGroundImage = this._backGroundImage.toJson();
		}

		if(this._backGroundImageDrawType) {
			json._backGroundImageDrawType = ImageDrawType[this._backGroundImageDrawType];
		}

		if(this._foreGroundImage) {
			json.foreGroundImage = this._foreGroundImage.toJson();
		}

		if(this._foreGroundImageDrawType) {
			json._foreGroundImageDrawType = ImageDrawType[this._foreGroundImageDrawType];
		}


		if(this._fontFamily) {
			json.fontFamily = this._fontFamily;
		}

		if(this._fontSize) {
			json.fontSize = this._fontSize;
		}

		if(this._textColor) {
			json.textColor = this._textColor;
		}

		if(this._fontBold) {
			json.fontBold = this._fontBold;
		}

		if(this._fontItalic) {
			json.fontItalic = this._fontItalic;
		}

		if(this._fontUnderline) {
			json.fontUnderline = this._fontUnderline;
		}

		if(this._textBaseline) {
			json.textBaseline = this._textBaseline;
		}

		if(this._textAlign) {
			json.textAlign = this._textAlign;
		}

		if(this._lineWidth) {
			json.lineWidth = this._lineWidth;
		}

		if(this._lineJoin) {
			json.lineJoin = this._lineJoin;
		}

		if(this._lineCap) {
			json.lineCap = this._lineCap;
		}

		if(this._dashLine) {
			json.dashLine = this._dashLine;
		}

		if(this._lineColor) {
			json.lineColor = this._lineColor;
		}

		if(this._roundRadius) {
			json.roundRadius = this._roundRadius;
		}
		if(this._roundType) {
			json.roundType = this._roundType;
		}

		return json;
	}

	public fromJson(json:any, baseURL:string) {
		if(json.backGroundColor) {
			this._backGroundColor = json.backGroundColor;
		}

		if(json.foreGroundColor) {
			this._foreGroundColor = json.foreGroundColor;
		}

		if(json.backGroundImage) {
			var url = baseURL ? baseURL + "/" + json.backGroundImage : json.backGroundImage;
			this._backGroundImage = ImageTile.create(url, evt => {
				this.notifyChanged();
			});
		}

		if(json.foreGroundImage) {
			var url = baseURL ? baseURL + "/" + json.foreGroundImage : json.foreGroundImage;
			this._foreGroundImage = ImageTile.create(url, evt => {
				this.notifyChanged();
			});
		}

		if(json.backGroundImageDrawType) {
			this._backGroundImageDrawType =<ImageDrawType>parseInt(ImageDrawType[json.backGroundImageDrawType]);
		}
	
		if(json.foreGroundImageDrawType) {
			this._foreGroundImageDrawType = <ImageDrawType>parseInt(ImageDrawType[json.foreGroundImageDrawType]);
		}

		if(json.fontFamily) {
			this._fontFamily = json.fontFamily;
		}

		if(json.fontSize) {
			this._fontSize = json.fontSize;
		}

		if(json.textColor) {
			this._textColor = json.textColor;
		}

		if(json.fontBold) {
			this._fontBold = json.fontBold;
		}

		if(json.fontItalic) {
			this._fontItalic = json.fontItalic;
		}

		if(json.fontUnderline) {
			this._fontUnderline = json.fontUnderline;
		}

		if(json.textBaseline) {
			this._textBaseline = json.textBaseline;
		}

		if(json.textAlign) {
			this._textAlign = json.textAlign;
		}

		if(json.lineWidth) {
			this._lineWidth = json.lineWidth;
		}
		
		if(json.lineJoin) {
			this._lineJoin = json.lineJoin;
		}

		if(json.lineCap) {
			this._lineCap = json.lineCap;
		}

		if(json.dashLine) {
			this._dashLine = json.dashLine;
		}

		if(json.lineColor) {
			this._lineColor = json.lineColor;
		}

		if(json.roundRadius) {
			this._roundRadius = json.roundRadius;
		}
		if(json.roundType) {
			this._roundType = json.roundType;
		}

		this.notifyChanged();
	}

	public get backGroundColor() {
		return this._backGroundColor;
	}
	public set backGroundColor(value) {
		this._backGroundColor = value;
		this.notifyChanged();
	}

	public get foreGroundColor() {
		return this._foreGroundColor;
	}
	public set foreGroundColor(value) {
		this._foreGroundColor = value;
		this.notifyChanged();
	}


	public get backGroundImage() {
		return this._backGroundImage;
	}
	public set backGroundImage(value) {
		this._backGroundImage = value;
		this.notifyChanged();
	}


	public get backGroundImageDrawType() {
		return this._backGroundImageDrawType;
	}
	public set backGroundImageDrawType(value) {
		this._backGroundImageDrawType = value;
		this.notifyChanged();
	}


	public get foreGroundImage() {
		return this._foreGroundImage;
	}
	public set foreGroundImage(value) {
		this._foreGroundImage = value;
		this.notifyChanged();
	}


	public get foreGroundImageDrawType() {
		return this._foreGroundImageDrawType;
	}
	public set foreGroundImageDrawType(value) {
		this._foreGroundImageDrawType = value;
		this.notifyChanged();
	}


	public get font() {
		return this._fontSize + "px " + (this._fontFamily||"Sans");
	}

	public get fontFamily() {
		return this._fontFamily || "Sans";
	}
	public set fontFamily(value) {
		this._fontFamily = value;
		this.notifyChanged();
	}


	public get fontSize() {
		return this._fontSize;
	}
	public set fontSize(value) {
		this._fontSize = value;
		this.notifyChanged();
	}


	public get textColor() {
		return this._textColor;
	}
	public set textColor(value) {
		this._textColor = value;
		this.notifyChanged();
	}


	public get fontBold() {
		return this._fontBold;
	}
	public set fontBold(value) {
		this._fontBold = value;
		this.notifyChanged();
	}


	public get fontItalic() {
		return this._fontItalic;
	}
	public set fontItalic(value) {
		this._fontItalic = value;
		this.notifyChanged();
	}


	public get fontUnderline() {
		return this._fontUnderline;
	}
	public set fontUnderline(value) {
		this._fontUnderline = value;
		this.notifyChanged();
	}

	public get textAlign() {
		return this._textAlign || "center";
	}
	public set textAlign(value) {
		this._textAlign = value;
		this.notifyChanged();
	}

	public get textBaseline() {
		return this._textBaseline || "middle";
	}
	public set textBaseline(value) {
		this._textBaseline = value;
		this.notifyChanged();
	}

	public get lineWidth() {
		return this._lineWidth;
	}
	public set lineWidth(value) {
		this._lineWidth = value;
		this.notifyChanged();
	}

	public get lineJoin() {
		return this._lineJoin;
	}
	public set lineJoin(value) {
		this._lineJoin = value;
		this.notifyChanged();
	}

	public get lineCap() {
		return this._lineCap;
	}
	public set lineCap(value) {
		this._lineCap = value;
		this.notifyChanged();
	}

	public get dashLine() {
		return this._dashLine;
	}
	public set dashLine(value) {
		this._dashLine = value;
		this.notifyChanged();
	}

	public get lineColor() {
		return this._lineColor;
	}
	public set lineColor(value) {
		this._lineColor = value;
		this.notifyChanged();
	}

	public get roundRadius() {
		return this._roundRadius;
	}
	public set roundRadius(value) {
		this._roundRadius = value;
		this.notifyChanged();
	}

	public get roundType() {
		return this._roundType;
	}
	public set roundType(value) {
		this._roundType = value;
		this.notifyChanged();
	}

	static create(json?:any, baseURL?:string) {
		var style = new Style();
		if(json) {
			style.fromJson(json, baseURL);
		}
		return style;
	}

	static fillStyles = {};

	static fill(ctx:any, fillStyle:string, h:number){
		
		if(!fillStyle || typeof fillStyle === "string") {
			ctx.fillStyle = fillStyle;
		}else{	
			var key = fillStyle + "." + h;
			var value = Style.fillStyles[key];
			if(!value) {
				var data = fillStyle;
				var n = data.length;
				var delta = 1/n;
				var value = ctx.createLinearGradient(0,0,0,h);
				
				for(var i = 0; i < n; i++) {
					var color = data[i];
					value.addColorStop(i*delta, color);
				}

				Style.fillStyles[key] = value;
			}
			ctx.fillStyle = value;
		}

		ctx.fill();

		return;
	}
};
