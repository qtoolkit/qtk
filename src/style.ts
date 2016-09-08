/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import {Emitter} from "./emitter";
import Events = require("./events");
import {ImageDrawType, ImageTile} from "./image-tile";

/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
export class Style extends Emitter {
	private _backGroundColor : string;
	private _forceGroundColor : string;
	private _backGroundImage : ImageTile;
	private _backGroundImageDrawType : ImageDrawType;
	private _forceGroundImage : ImageTile;
	private _forceGroundImageDrawType : ImageDrawType;
	private _lineWidth : number;
	private _lineColor : string;
	private _roundRadius : number;
	private _fontFamily : string;
	private _fontSize : number;
	private _fontColor : string;
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

	public clone() : Style {
		var other = new Style();

		if(this._backGroundColor) {
			other._backGroundColor = this._backGroundColor;
		}

		if(this._forceGroundColor) {
			other._forceGroundColor = this._forceGroundColor;
		}

		if(this._backGroundImage) {
			other._backGroundImage = this._backGroundImage;
		}

		if(this._backGroundImageDrawType) {
			other._backGroundImageDrawType = this._backGroundImageDrawType;
		}

		if(this._forceGroundImage) {
			other._forceGroundImage = this._forceGroundImage;
		}

		if(this._forceGroundImageDrawType) {
			other._forceGroundImageDrawType = this._forceGroundImageDrawType;
		}

		if(this._fontFamily) {
			other._fontFamily = this._fontFamily;
		}

		if(this._fontSize) {
			other._fontSize = this._fontSize;
		}

		if(this._fontColor) {
			other._fontColor = this._fontColor;
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
		
		if(this._roundRadius) {
			other._roundRadius = this._roundRadius;
		}

		return other;
	}

	public toJson() : any {
		var json : any = {};
		if(this._backGroundColor) {
			json.backGroundColor = this._backGroundColor;
		}

		if(this._forceGroundColor) {
			json.forceGroundColor = this._forceGroundColor;
		}

		if(this._backGroundImage) {
			json.backGroundImage = this._backGroundImage.toJson();
		}

		if(this._backGroundImageDrawType) {
			json.backGroundImageDrawType = this._backGroundImageDrawType;
		}

		if(this._forceGroundImage) {
			json.forceGroundImage = this._forceGroundImage.toJson();
		}

		if(this._forceGroundImageDrawType) {
			json.forceGroundImageDrawType = this._forceGroundImageDrawType;
		}


		if(this._fontFamily) {
			json.fontFamily = this._fontFamily;
		}

		if(this._fontSize) {
			json.fontSize = this._fontSize;
		}

		if(this._fontColor) {
			json.fontColor = this._fontColor;
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

		if(this._lineColor) {
			json.lineColor = this._lineColor;
		}

		if(this._roundRadius) {
			json.roundRadius = this._roundRadius;
		}

		return json;
	}

	public fromJson(json:any, baseURL:string) {
		if(json.backGroundColor) {
			this._backGroundColor = json.backGroundColor;
		}

		if(json.forceGroundColor) {
			this._forceGroundColor = json.forceGroundColor;
		}

		if(json.backGroundImage) {
			var url = baseURL ? baseURL + "/" + json.backGroundImage : json.backGroundImage;
			this._backGroundImage = ImageTile.create(url, evt => {
				this.notifyChanged();
			});
		}

		if(json.forceGroundImage) {
			var url = baseURL ? baseURL + "/" + json.forceGroundImage : json.forceGroundImage;
			this._forceGroundImage = ImageTile.create(url, evt => {
				this.notifyChanged();
			});
		}

		if(json.fontFamily) {
			this._fontFamily = json.fontFamily;
		}

		if(json.fontSize) {
			this._fontSize = json.fontSize;
		}

		if(json.fontColor) {
			this._fontColor = json.fontColor;
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

		if(json.lineColor) {
			this._lineColor = json.lineColor;
		}

		if(json.roundRadius) {
			this._roundRadius = json.roundRadius;
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

	public get forceGroundColor() {
		return this._forceGroundColor;
	}
	public set forceGroundColor(value) {
		this._forceGroundColor = value;
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


	public get forceGroundImage() {
		return this._forceGroundImage;
	}
	public set forceGroundImage(value) {
		this._forceGroundImage = value;
		this.notifyChanged();
	}


	public get forceGroundImageDrawType() {
		return this._forceGroundImageDrawType;
	}
	public set forceGroundImageDrawType(value) {
		this._forceGroundImageDrawType = value;
		this.notifyChanged();
	}


	public get font() {
		return (this._fontFamily||"Sans") + " " + this._fontSize + "px";
	}

	public get fontFamily() {
		return this._fontFamily;
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


	public get fontColor() {
		return this._fontColor;
	}
	public set fontColor(value) {
		this._fontColor = value;
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

	static create(json?:any, baseURL?:string) {
		var style = new Style();
		if(json) {
			style.fromJson(json, baseURL);
		}
		return style;
	}
};
