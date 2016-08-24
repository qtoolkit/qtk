/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import {Emitter} from "./emitter";
import Events = require("./events");
import ImageTile = require("./image-tile");

/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
export class Style extends Emitter {
	private _backGroundColor : string;
	private _forceGroundColor : string;
	private _backGroundImage : any;
	private _forceGroundImage : any;
	private _leftPadding : number;
	private _rightPadding : number;
	private _topPadding : number;
	private _bottomPadding : number;
	private _lineWidth : number;
	private _lineColor : string;
	private _roundRadius : number;
	private _fontFamily : string;
	private _fontSize : number;
	private _fontColor : string;
	private _fontBold : boolean;
	private _fontItalic : boolean;
	private _fontUnderline : boolean;

	constructor() {
		super();
	}

	private notifyChanged() {
		this.dispatchEvent({type:Events.CHANGED});
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

		if(this._forceGroundImage) {
			other._forceGroundImage = this._forceGroundImage;
		}

		if(this._leftPadding) {
			other._leftPadding = this._leftPadding;
		}

		if(this._rightPadding) {
			other._rightPadding = this._rightPadding;
		}

		if(this._topPadding) {
			other._topPadding = this._topPadding;
		}

		if(this._bottomPadding) {
			other._bottomPadding = this._bottomPadding;
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

		if(this._forceGroundImage) {
			json.forceGroundImage = this._forceGroundImage.toJson();
		}

		if(this._leftPadding) {
			json.leftPadding = this._leftPadding;
		}

		if(this._rightPadding) {
			json.rightPadding = this._rightPadding;
		}

		if(this._topPadding) {
			json.topPadding = this._topPadding;
		}

		if(this._bottomPadding) {
			json.bottomPadding = this._bottomPadding;
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

	public fromJson(json:any) {
		if(json.backGroundColor) {
			this._backGroundColor = json.backGroundColor;
		}

		if(json.forceGroundColor) {
			this._forceGroundColor = json.forceGroundColor;
		}

		if(json.backGroundImage) {
			this._backGroundImage = ImageTile.create(json.backGroundImage, evt => {
				this.notifyChanged();
			});
		}

		if(json.forceGroundImage) {
			this._forceGroundImage = ImageTile.create(json.forceGroundImage, evt => {
				this.notifyChanged();
			});
		}

		if(json.leftPadding) {
			this._leftPadding = json.leftPadding;
		}

		if(json.rightPadding) {
			this._rightPadding = json.rightPadding;
		}

		if(json.topPadding) {
			this._topPadding = json.topPadding;
		}

		if(json.bottomPadding) {
			this._bottomPadding = json.bottomPadding;
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


	public get forceGroundImage() {
		return this._forceGroundImage;
	}
	public set forceGroundImage(value) {
		this._forceGroundImage = value;
		this.notifyChanged();
	}


	public get leftPadding() {
		return this._leftPadding;
	}
	public set leftPadding(value) {
		this._leftPadding = value;
		this.notifyChanged();
	}


	public get rightPadding() {
		return this._rightPadding;
	}
	public set rightPadding(value) {
		this._rightPadding = value;
		this.notifyChanged();
	}


	public get topPadding() {
		return this._topPadding;
	}
	public set topPadding(value) {
		this._topPadding = value;
		this.notifyChanged();
	}


	public get bottomPadding() {
		return this._bottomPadding;
	}
	public set bottomPadding(value) {
		this._bottomPadding = value;
		this.notifyChanged();
	}


	public get padding() {
		return this._topPadding;
	}
	public set padding(value) {
		this._leftPadding = this._topPadding = this._rightPadding = this.bottomPadding = value;
		this.notifyChanged();
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

	static create(json?:any) {
		var style = new Style();
		if(json) {
			style.fromJson(json);
		}
		return style;
	}
};
