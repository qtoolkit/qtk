/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import Emitter = require("./emitter");
import Events = require("./events");
import {IApplication} from "./iapplication";
import {IThemeManager} from "./itheme-manager";

export class Widget extends Emitter {
	private _x : number;
	private _y : number;
	private _w : number;
	private _h : number;
	private _opacity  : number;
	private _scaleX   : number;
	private _scaleY   : number;
	private _pivotX   : number;
	private _pivotY   : number;
	private _rotation : number;
	private _tips: string;
	private _text : string;
	private _dirty : boolean;
	private _name : string;
	private _id : string;
	private _tag : string;
	private _type : string;
	private hasOwnCanvas : boolean;
	
	private _parent : Widget;
	private _children : Array<Widget>;

	private app : IApplication;
	private themeManager : IThemeManager;

	constructor() {
		super();
	}

	public get dirty() {
		return this._dirty;
	}

	public get x() {
		return this._x;
	}
	public set x(value) {
		this._dirty = true;
		this._x = value;
	}


	public get y() {
		return this._y;
	}
	public set y(value) {
		this._dirty = true;
		this._y = value;
	}


	public get w() {
		return this._w;
	}
	public set w(value) {
		this._dirty = true;
		this._w = value;
	}


	public get h() {
		return this._h;
	}
	public set h(value) {
		this._dirty = true;
		this._h = value;
	}


	public get opacity() {
		return this._opacity;
	}
	public set opacity(value) {
		this._dirty = true;
		this._opacity = value;
	}


	public get scaleX() {
		return this._scaleX;
	}
	public set scaleX(value) {
		this._dirty = true;
		this._scaleX = value;
	}


	public get scaleY() {
		return this._scaleY;
	}
	public set scaleY(value) {
		this._dirty = true;
		this._scaleY = value;
	}


	public get rotation() {
		return this._rotation;
	}
	public set rotation(value) {
		this._dirty = true;
		this._rotation = value;
	}


	public get pivotX() {
		return this._pivotX;
	}
	public set pivotX(value) {
		this._dirty = true;
		this._pivotX = value;
	}


	public get pivotY() {
		return this._pivotY;
	}
	public set pivotY(value) {
		this._dirty = true;
		this._pivotY = value;
	}


	public get tips() {
		return this._tips;
	}
	public set tips(value) {
		this._tips = value;
		this._dirty = true;
	}


	public get text() {
		return this._text;
	}
	public set text(value) {
		this._dirty = true;
		this._text = value;
	}


	public move(x:number, y:number) : Widget {
		this._x = x;
		this._y = y;
		this._dirty = true;
		this.dispatchEvent({type:Events.MOVE});

		return this;
	}

	public resize(w:number, h:number) : Widget {
		this._w = w;
		this._h = h;
		this._dirty = true;
		
		this.dispatchEvent({type:Events.RESIZE});

		return this;
	}

	public drawBackground(ctx:any, style:any) : Widget {
		return this;
	}
	
	public drawText(ctx:any, style:any) : Widget {
		return this;
	}

	public drawChildren(ctx:any, style:any) : Widget {
		return this;
	}

	public draw(ctx:any) : Widget {
		return this;
	}

	public getStyle() : any {
		return null;
	}

	public setApp(app:IApplication) : Widget {
		return this;
	}

	public addChild(child:Widget) : Widget {
		return this;
	}

	public removeChild(child:Widget) : Widget {
		return this;
	}

	public init(options:any) {
		var hasOwnCanvas = options && options.hasOwnCanvas;
		
	}

};
