/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import EventEmitter = require("eventemitter3");

class ViewPortImpl extends EventEmitter {
	private _width : number;
	private _height : number;
	private _density : number;

	constructor() {
		super();
	}

	getScaleValues() {
	    var scale = (1/(this.density)).toString();
	    var str = "initial-scale=SS, minimum-scale=SS, maximum-scale=SS, user-scalable=0";
	    
	    return "target-densitydpi=device-dpi, width=device-width, " + str.replace(/SS/g, scale);
	}

	updateHeadViewportMeta(value) {
		var meta = null;
		var head = document.getElementsByTagName('head')[0];
		var arr = document.getElementsByTagName('meta');
		for(var i = 0; i < arr.length; i++) {
			var iter = arr[i];
			if(iter.name === "viewport") {
				meta = iter;
				break;
			}
		}

		if(!meta) {
			meta = document.createElement('meta');
			head.appendChild(meta);
		}

		meta.name = 'viewport';
		meta.content = value;
	}

	init(width?:number, height?:number, density?:number) {
		this._density = density || window.devicePixelRatio;
		this.updateHeadViewportMeta(this.getScaleValues());

		this._width = width || window.innerWidth;
		this._height = height || window.innerHeight;
		window.addEventListener("resize", (evt) => {
			this._width = window.innerWidth;
			this._height = window.innerHeight;
		});
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get density() {
		return this._density;
	}
}

/**
 * 表示屏幕大小和密度(单例对象，直接调用)。
 */
class ViewPort {
	private static instance = new ViewPortImpl();

	public static init(width?:number, height?:number, density?:number) {
		ViewPort.instance.init(width, height, density);
	}

	/**
	 * 屏幕宽度
	 */
	public static get width() {
		return ViewPort.instance.width;
	}
	
	/**
	 * 屏幕高度
	 */
	public static get height() {
		return ViewPort.instance.height;
	}
	
	/**
	 * 屏幕密度
	 */
	public static get density() {
		return ViewPort.instance.density;
	}
};

export = ViewPort;

