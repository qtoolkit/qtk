/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import Emitter = require("./emitter");

/**
 * Style用来控制Widget的外观效果，如背景和字体等等。
 */
export = class Style extends Emitter {
	private _backGroundColor : string;
	private _forceGroundColor : string;
	private _backGroundImage : any;
	private _forceGroundImage : any;
	private _leftPadding : number;
	private _rightPadding : number;
	private _topPadding : number;
	private _bottomPadding : number;
	private _fontFamily : string;
	private _fontSize : number;
	private _fontColor : string;
	private _fontBold : boolean;
	private _fontItalic : boolean;
	private _fontUnderline : boolean;

	constructor() {
		super();
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
			json.backGroundImage = this._backGroundImage;
		}

		if(this._forceGroundImage) {
			json.forceGroundImage = this._forceGroundImage;
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

		return json;
	}

	public fromJson(json:any) {
		if(this._backGroundColor) {
			this._backGroundColor = json.backGroundColor;
		}

		if(this._forceGroundColor) {
			this._forceGroundColor = json.forceGroundColor;
		}

		if(this._backGroundImage) {
			this._backGroundImage = json.backGroundImage;
		}

		if(this._forceGroundImage) {
			this._forceGroundImage = json.forceGroundImage;
		}

		if(this._leftPadding) {
			this._leftPadding = json.leftPadding;
		}

		if(this._rightPadding) {
			this._rightPadding = json.rightPadding;
		}

		if(this._topPadding) {
			this._topPadding = json.topPadding;
		}

		if(this._bottomPadding) {
			this._bottomPadding = json.bottomPadding;
		}

		if(this._fontFamily) {
			this._fontFamily = json.fontFamily;
		}

		if(this._fontSize) {
			this._fontSize = json.fontSize;
		}

		if(this._fontColor) {
			this._fontColor = json.fontColor;
		}

		if(this._fontBold) {
			this._fontBold = json.fontBold;
		}

		if(this._fontItalic) {
			this._fontItalic = json.fontItalic;
		}

		if(this._fontUnderline) {
			this._fontUnderline = json.fontUnderline;
		}

	}

	public get backGroundColor() {
		return this._backGroundColor;
	}
	public set backGroundColor(value) {
		this._backGroundColor = value;
	}

	public get forceGroundColor() {
		return this._forceGroundColor;
	}
	public set forceGroundColor(value) {
		this._forceGroundColor = value;
	}


	public get backGroundImage() {
		return this._backGroundImage;
	}
	public set backGroundImage(value) {
		this._backGroundImage = value;
	}


	public get forceGroundImage() {
		return this._forceGroundImage;
	}
	public set forceGroundImage(value) {
		this._forceGroundImage = value;
	}


	public get leftPadding() {
		return this._leftPadding;
	}
	public set leftPadding(value) {
		this._leftPadding = value;
	}


	public get rightPadding() {
		return this._rightPadding;
	}
	public set rightPadding(value) {
		this._rightPadding = value;
	}


	public get topPadding() {
		return this._topPadding;
	}
	public set topPadding(value) {
		this._topPadding = value;
	}


	public get bottomPadding() {
		return this._bottomPadding;
	}
	public set bottomPadding(value) {
		this._bottomPadding = value;
	}


	public get padding() {
		return this._topPadding;
	}
	public set padding(value) {
		this._leftPadding = this._topPadding = this._rightPadding = this.bottomPadding = value;
	}


	public get fontFamily() {
		return this._fontFamily;
	}
	public set fontFamily(value) {
		this._fontFamily = value;
	}


	public get fontSize() {
		return this._fontSize;
	}
	public set fontSize(value) {
		this._fontSize = value;
	}


	public get fontColor() {
		return this._fontColor;
	}
	public set fontColor(value) {
		this._fontColor = value;
	}


	public get fontBold() {
		return this._fontBold;
	}
	public set fontBold(value) {
		this._fontBold = value;
	}


	public get fontItalic() {
		return this._fontItalic;
	}
	public set fontItalic(value) {
		this._fontItalic = value;
	}


	public get fontUnderline() {
		return this._fontUnderline;
	}
	public set fontUnderline(value) {
		this._fontUnderline = value;
	}

};
