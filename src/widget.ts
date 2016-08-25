/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import Events = require("./events");
import {Style} from "./style";
import {Canvas} from "./canvas";
import {Rect} from "./rect";
import {Emitter} from "./emitter";
import {MatrixStack} from "./matrix-stack";
import {IApplication} from "./iapplication";
import {IThemeManager} from "./itheme-manager";

export enum WidgetMode {
	RUNTIME,
	DESIGN
};
	
export enum WidgetState {
	NORMAL,
	OVER,
	ACTIVE,
	DISABLE
};

export class Widget extends Emitter {
	private _x : number;
	private _y : number;
	private _z : number;
	private _w : number;
	private _h : number;
	private _state : WidgetState;
	private _value : number;
	private _selected : number;
	private _opacity  : number;
	private _scaleX   : number;
	private _scaleY   : number;
	private _pivotX   : number;
	private _pivotY   : number;
	private _rotation : number;
	private _focusable : boolean;
	private _tips: string;
	private _text : string;
	private _dirty : boolean;
	private _name : string;
	private _id : string;
	private _tag : string;
	private _type : string;
	private _userData : any;
	private _isWindow : boolean;
	private _parent : Widget;
	private _app : IApplication;
	private _children : Array<Widget>;
	private _themeManager : IThemeManager;
	private _matrixStack : MatrixStack;
	private _mode : WidgetMode;
	private _canvas : Canvas;

	constructor() {
		super();

		this._x = 0;
		this._y = 0;
		this._z = 0;
		this._w = 0;
		this._h = 0;
		this._opacity  = 1;
		this._scaleX   = 1;
		this._scaleY   = 1;
		this._pivotX   = 0.5;
		this._pivotY   = 0.5;
		this._rotation = 0;
		this._tips = null;
		this._text = null;
		this._dirty = true;
		this._name = null;
		this._id = null;
		this._tag = null;
		this._type = null;
		this._userData = null;
		this._isWindow = false;
		this._parent = null;
		this._children = [];
		this._themeManager = null;
		this._mode = WidgetMode.RUNTIME;
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
		if(this._canvas) {
			this._canvas.x = value;
		}
	}


	public get y() {
		return this._y;
	}
	public set y(value) {
		this._dirty = true;
		this._y = value;
		if(this._canvas) {
			this._canvas.y = value;
		}
	}

	public get z() {
		return this._z;
	}
	public set z(value) {
		this._dirty = true;
		this._z = value;
		if(this._parent) {
			this._parent.sortChildren();
		}
		if(this._canvas) {
			this._canvas.z = value;
		}
	}


	public get w() {
		return this._w;
	}
	public set w(value) {
		this._dirty = true;
		this._w = value;
		if(this._canvas) {
			this._canvas.w = value;
		}
	}


	public get h() {
		return this._h;
	}
	public set h(value) {
		this._dirty = true;
		this._h = value;
		if(this._canvas) {
			this._canvas.h = value;
		}
	}

	public get state() {
		return this._state;
	}
	public set state(value) {
		this._dirty = true;
		this._state = value;
	}

	public get value() {
		return this._value;
	}
	public set value(value) {
		this._dirty = true;
		this._value = value;
	}

	public get selected() {
		return this._selected;
	}
	public set selected(value) {
		this._dirty = true;
		this._selected = value;
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

	public get focusable() {
		return this._focusable;
	}
	public set focusable(value) {
		this._dirty = true;
		this._focusable = value;
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


	public get name() {
		return this._name;
	}
	public set name(value) {
		this._dirty = true;
		this._name = value;
	}
	
	public get type() {
		return this._type;
	}
	public set type(value) {
		this._dirty = true;
		this._type = value;
	}

	public get id() {
		return this._id;
	}
	public set id(value) {
		this._id = value;
	}

	public get tag() {
		return this._tag;
	}
	public set tag(value) {
		this._tag = value;
	}

	public get userData() {
		return this._userData;
	}
	public set userData(value) {
		this._userData = value;
	}

	public get parent() {
		return this._parent;
	}
	public set parent(value) {
		this._parent = value;
	}
	
	public get app() {
		return this._app;
	}
	public set app(value) {
		this._app = value;
	}

	public get win() : Widget {
		for(var iter:Widget = this; iter !== null; iter = iter._parent) {
			if(iter._isWindow) {
				return iter;
			}
		}

		return null;
	}

	public get children() : Array<Widget> {
		return this._children;
	}

	public isWindow() : boolean {
		return this._isWindow;
	}

	public setText(text:string, notify:boolean) : Widget {
		if(notify) {
			var evt = {type:Events.CHANGE, attr:"text", oldValue:this.text, newValue:text};
			this.dispatchEvent(evt);
		}
		
		this.text = text;

		return this;
	}

	public setValue(value:number, notify:boolean) : Widget {
		if(notify) {
			var evt = {type:Events.CHANGE, attr:"value", oldValue:this.value, newValue:value};
			this.dispatchEvent(evt);
		}
		
		this.value = value;
		
		return this;
	}

	public findChild(func:Function) : Widget {
		var i = 0;
		var arr = this._children;
		var n = arr.length;
		for(var i = 0; i < n; i++) {
			var iter = arr[i];
			if(func(iter)) {
				return iter;
			}
		}

		return null;
	}

	public findChildByName(name:string) : Widget {
		var ret = this.findChild(function(child) {
			return child.name === name;
		});

		return ret;
	}

	public findChildByID(id:string) : Widget {
		var ret = this.findChild(function(child) {
			return child.id === id;
		});
		
		return ret;
	}

	public find(path:string) : Widget {
		var items = path.split("/");
		var n = items.length;

		var ret : Widget = this;
		for(var i = 0; i < n; i++) {
			var name = items[i];
			ret = ret.findChildByName(name); 
		}

		return ret;
	}

///////////////////////////////////////////
	public onPointerDown(evt:any, ctx:MatrixStack) {
	}

	public onPointerMove(evt:any, ctx:MatrixStack) {
	}

	public onPointerUp(evt:any, ctx:MatrixStack) {
	}
	
	public onKeyDown(evt:any) {
	}
	
	public onKeyUp(evt:any) {
	}
	
	public onWheel(evt:any) {
	}
///////////////////////////////////////////
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

	public translateCavnas(ctx:any) : Widget {
		if(this._canvas) {
			ctx.translate(-this.x, -this.y);
		}else{
			ctx.translate(this.x, this.y);
		}

		return this;
	}

	public drawBackground(ctx:any, style:Style) : Widget {
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, this.w, this.h);

		return this;
	}
	
	public drawText(ctx:any, style:Style) : Widget {
		return this;
	}

	public drawChildren(ctx:any, style:Style) : Widget {
		return this;
	}

	public drawTips(ctx:any, style:Style) : Widget {
		return this;
	}

	public getDirtyRect(matrixStack:MatrixStack) : Rect {
		return Rect.create(0, 0, this.w, this.h);
	}

	public draw(ctx:any) {
		var style = this.getStyle();
		ctx.save();
		this.translateCavnas(ctx);

		this.drawBackground(ctx, style)
			.drawChildren(ctx, style)
			.drawText(ctx, style)
			.drawTips(ctx, style);
		ctx.restore();

		return;
	}

	public getStyle() : Style {
		return null;
	}

	public sortChildren() : Widget {
		var arr = this._children;
		arr.sort(function(a, b) {
			return a.z - b.z;
		});

		return this;
	}

	public appendChild(child:Widget) : Widget {
		this._children.push(child);

		return this;
	}

	public addChild(child:Widget) : Widget {
		var arr = this._children;
		
		arr.push(child);
		
		child.parent = this;
		child.app = this.app;
		this.sortChildren();
		this.relayoutChildren();

		return this;
	}

	public dispose(){
		if(this._canvas) {
			this._canvas.dispose();
			this._canvas = null;
		}
	}

	public relayoutChildren() : Widget {
		return this;
	}

	public removeChild(child:Widget) : Widget {
		var arr = this._children;
		var index = arr.indexOf(child);
		if(index >= 0) {
			arr.splice(index, 1);
			this.relayoutChildren();
		}
		return this;
	}

	public requestRedraw() : Widget {
		this.app.getMainLoop().requestRedraw();

		return this;
	}

	public initCanvas() : Widget {
		var density = this.app.getViewPort().density;
		var canvas = Canvas.create(this.x, this.y, this.w, this.h, density);
		var matrixStack = new MatrixStack();

		canvas.on(Events.POINTER_DOWN, evt => {
			matrixStack.identity();
			this.onPointerDown(evt, matrixStack);
		});

		canvas.on(Events.POINTER_MOVE, evt => {
			matrixStack.identity();
			this.onPointerMove(evt, matrixStack);
		});

		canvas.on(Events.POINTER_UP, evt => {
			matrixStack.identity();
			this.onPointerMove(evt, matrixStack);
		});

		canvas.on(Events.WHEEL, evt => {
			this.onWheel(evt);
		});

		canvas.on(Events.KEYDOWN, evt => {
			this.onKeyDown(evt);
		});

		canvas.on(Events.KEYUP, evt => {
			this.onKeyUp(evt);
		});

		this._canvas = canvas;
	
		var mainLoop = this.app.getMainLoop();
		mainLoop.on(Events.DRAW, evt => {
			var ctx = canvas.getContext("2d");
			this.draw(ctx);
		});

		return this;
	}

	public init(options:any) : Widget {
		if(options.hasOwnCanvas) {
			this.initCanvas();
		}

		return this;
	}

	public static create(app:IApplication, options:any) : Widget {
		var widget = new Widget();

		widget.app = app;

		return widget;
	}
};
