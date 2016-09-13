/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import {Emitter} from "./emitter";
import {IViewPort} from "./iview-port";
import Events = require("./events");

/**
 * 表示屏幕大小和密度。
 */
export class ViewPort extends Emitter implements IViewPort {
	private _width : number;
	private _height : number;
	private _density : number;

	constructor() {
		super();
	}

	private getScaleValues() {
	    var scale = (1/(this.density)).toString();
	    var str = "initial-scale=SS, minimum-scale=SS, maximum-scale=SS, user-scalable=0";
	    
	    return "target-densitydpi=device-dpi, width=device-width, " + str.replace(/SS/g, scale);
	}

	private updateHeadViewportMeta(value) {
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

	public init(width?:number, height?:number, density?:number) {
		this._density = density || window.devicePixelRatio;
		this.updateHeadViewportMeta(this.getScaleValues());

		this._width = width || window.innerWidth;
		this._height = height || window.innerHeight;
		window.addEventListener(Events.RESIZE, (evt) => {
			this._width = window.innerWidth;
			this._height = window.innerHeight;
			this.dispatchEvent({type:"resize"});
		});
	}

	public get width() {
		return this._width;
	}

	public get height() {
		return this._height;
	}
	
	public get w() {
		return this._width;
	}

	public get h() {
		return this._height;
	}

	public get density() {
		return this._density;
	}

	static create(width?:number, height?:number, density?:number) : IViewPort {
		var vp = new ViewPort();

		vp.init(width, height, density);

		return vp;
	}
}

