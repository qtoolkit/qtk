/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import Events = require("./events");
import {Style} from "./style";
import {Canvas} from "./canvas";
import {Rect} from "./rect";
import {Emitter} from "./emitter";
import {Graphics} from "./graphics";
import {ImageTile} from "./image-tile";
import {MatrixStack} from "./matrix-stack";
import {IApplication} from "./iapplication";
import {IThemeManager} from "./itheme-manager";
import {ChangeEventDetail, PointerEventDetail, KeyEventDetail, WheelEventDetail} from "./event-detail";

/**
 * Widget是所有控件的基类。
 */
export class Widget extends Emitter {
	constructor(type:string) {
		super();
		this.reset(type);
	}

	/**
	 * 测试点是否落在当前控件中。
	 * @param x X坐标，相对于全局原点的坐标。
	 * @param y Y坐标，相对于全局原点的坐标。
	 * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
	 * @returns 测试结果HitTestResult。
	 */
	private hitTest(x:number, y:number, ctx:MatrixStack) : HitTestResult {
		var m = ctx.invert();
		var p = m.transformPoint(x, y);

		if(p.x >= 0 && p.x < this.w && p.y >= 0 && p.y <= this.h) {
			return HitTestResult.MM;
		}

		return HitTestResult.NONE;
	}

	private dispatchPointerDown(evt:any, ctx:MatrixStack) {
		var detail = evt.detail;
		if(!this._enable || !this._sensitive) {
			return;
		}

		ctx.save();
		this.applyTransform(ctx);
		var hitTestResult = this.hitTest(detail.x, detail.y, ctx);

		if(hitTestResult) {
			this.dispatchEvent(evt, true);
			this.target = this.findEventTargetChild(detail.x, detail.y, ctx);
			if(this.target) {
				this.target.dispatchPointerDown(evt, ctx);
			}
			if(this.onpointerdown) {
				this.onpointerdown(evt);
			}
			this.dispatchEvent(evt, false);
			this.state = WidgetState.ACTIVE;
		}else{
			if(this.onpointerdown) {
				this.onpointerdown(evt);
			}
			this.state = WidgetState.NORMAL;
		}

		ctx.restore();

		this.hitTestResult = hitTestResult;
		return hitTestResult !== HitTestResult.NONE;
	}

	private dispatchPointerMove(evt:any, ctx:MatrixStack) {
		var detail = evt.detail;
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		if(detail.pointerDown) {
			this.dispatchEvent(evt, true);
			if(this.target) {
				this.target.dispatchPointerMove(evt, ctx);
			}
			if(this.onpointermove) {
				this.onpointermove(evt);
			}
			this.dispatchEvent(evt, false);
		}else{
			ctx.save();
			this.applyTransform(ctx);
			var hitTestResult = this.hitTest(detail.x, detail.y, ctx);
		
			if(hitTestResult) {
				this.dispatchEvent(evt, true);
				var _lastOverWidget = this._lastOverWidget;
				var overWidget  = this.findEventTargetChild(detail.x, detail.y, ctx);
				if(_lastOverWidget !== overWidget) {
					if(_lastOverWidget) {
						_lastOverWidget.dispatchPointerMove(evt, ctx);
					}

					if(overWidget) {
						overWidget.dispatchPointerMove(evt, ctx);
					}
					this._lastOverWidget = overWidget;
				}
				if(this.onpointermove) {
					this.onpointermove(evt);
				}
				this.dispatchEvent(evt, false);
				this.state = WidgetState.OVER;
			}else{
				this.state = WidgetState.NORMAL;
				if(this.onpointermove) {
					this.onpointermove(evt);
				}
			}

			ctx.restore();
		}
	}

	private dispatchPointerUp(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchPointerUp(evt);
		}
		if(this.onpointerup) {
			this.onpointerup(evt);
		}
		this.dispatchEvent(evt, false);

		this.state = WidgetState.NORMAL;
	}
	
	private dispatchClick(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchClick(evt);
		}
		if(this.onclick) {
			this.onclick(evt);
		}
		this.dispatchEvent(evt, false);
	}

	private dispatchKeyDown(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchKeyDown(evt);
		}
		if(this.onkeydown) {
			this.onkeydown(evt);
		}
		this.dispatchEvent(evt, false);
	}
	
	private dispatchKeyUp(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchKeyUp(evt);
		}
		if(this.onkeyup) {
			this.onkeyup(evt);
		}
		this.dispatchEvent(evt, false);
	}
	
	private dispatchWheel(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchWheel(evt);
		}
		if(this.onwheel) {
			this.onwheel(evt);
		}
		this.dispatchEvent(evt, false);
	}
	
	private applyTransform(ctx:MatrixStack) : Widget {
		ctx.translate(this._x, this._y);
		var px = this._pivotX * this._w;
		var py = this._pivotY * this._h;
		
		if(this._rotation || this._scaleX !== 1 || this._scaleY !== 1) {
			ctx.translate(px, py);
			ctx.rotate(this._rotation);
			ctx.scale(this._scaleX, this._scaleY);
			ctx.translate(-px, -py);
		}

		return this;
	}
	
	private findEventTargetChild(x:number, y:number, ctx:MatrixStack) : Widget {
		var arr = this._children;
		var n = arr.length;
		for(var i = n-1; i >= 0; i--) {
			var iter = arr[i];
			if(iter._enable && iter._sensitive) {
				ctx.save();
				iter.applyTransform(ctx);
				var hitTestResult = iter.hitTest(x, y, ctx);
				if(hitTestResult) {
					ctx.restore();
					return iter;
				}
				ctx.restore();
			}
		}

		return null;
	}

///////////////////////////////////////////

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
		if(!this._canvas) {
			ctx.translate(this.x, this.y);
		}

		return this;
	}

	public drawBackground(ctx:any, style:Style) : Widget {
		if(style.backGroundImage) {
			style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h); 
		}else if(style.backGroundColor || (style.lineColor && style.lineWidth)) {
			Graphics.drawRoundRect(ctx, this.w, this.h, style.roundRadius||0);
			if(style.backGroundColor) {
				ctx.fillStyle = style.backGroundColor;
				ctx.fill();
			}

			if(style.lineColor) {
				ctx.lineWidth = style.lineWidth;
				ctx.strokeStyle = style.lineColor;
				ctx.stroke();
			}
		}
		return this;
	}
	
	public getLocaleText() : string {
		return this._text;
	}

	public drawText(ctx:any, style:Style) : Widget {
		var text = this.getLocaleText();

		if(text && style.fontColor) {
			ctx.font = style.font;
			ctx.fillStyle = style.fontColor;
			ctx.textAlign = style.textAlign;
			ctx.textBaseline = style.textBaseline;
			ctx.fillText(text, this.w >> 1, this.h >> 1);
		}

		return this;
	}

	public drawChildren(ctx:any) : Widget {
		this._children.forEach(function(child) {
			if(child.visible) {
				child.draw(ctx);
			}
		});

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
		if(style) {
			this.drawBackground(ctx, style)
				.drawChildren(ctx)
				.drawText(ctx, style)
				.drawTips(ctx, style);
		}else{
			this.drawChildren(ctx);
		}

		ctx.restore();

		return;
	}

	public stateToString(state?:WidgetState) : string {
		var s = state || this.state;

		return states[s];
	};

	public set styleType(styleType:string){
		this._styleType = styleType;
	}
	
	public setStyle(state:WidgetState, style:Style):Widget{
		if(!this._styles) {
			this._styles = {};
		}

		var stateName = this.stateToString(state);
		this._styles[stateName] = style;

		return this;
	}

	public getStyleOfState(state : WidgetState) : Style {
		var style = null;
		var stateName = this.stateToString(state);
		
		if(this._styles) {
			style = this._styles[stateName];
		}else{
			var tm = this._themeManager;
			var styleType = this._styleType || this.type;
			style = tm.get(styleType, stateName);
		}
		
		return style;
	}

	public getStyle() : Style {
		var state = this._state;
		var style = this.getStyleOfState(state);
		if(!style) {
			style = this.getStyleOfState(WidgetState.NORMAL);
		}
		return style;
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
		var app = this._app;
		this._dirty = true;
		if(app) {
			app.getMainLoop().requestRedraw();
		}

		return this;
	}

//////////////////////////////////////////////////
	public initCanvas() : Widget {
		var density = this.app.getViewPort().density;
		var canvas = Canvas.create(this.x, this.y, this.w, this.h, density);
		var matrixStack = MatrixStack.create();

		canvas.ensureCanvas();
		canvas.on(Events.POINTER_DOWN, evt => {
			matrixStack.identity();
			this.dispatchPointerDown(evt, matrixStack);
		});

		canvas.on(Events.POINTER_MOVE, evt => {
			matrixStack.identity();
			this.dispatchPointerMove(evt, matrixStack);
		});

		canvas.on(Events.POINTER_UP, evt => {
			this.dispatchPointerUp(evt);
		});

		canvas.on(Events.CLICK, evt => {
			this.dispatchClick(evt);
		});

		canvas.on(Events.WHEEL, evt => {
			this.dispatchWheel(evt);
		});

		canvas.on(Events.KEYDOWN, evt => {
			this.dispatchKeyDown(evt);
		});

		canvas.on(Events.KEYUP, evt => {
			this.dispatchKeyUp(evt);
		});

		this._canvas = canvas;
	
		var mainLoop = this.app.getMainLoop();
		mainLoop.on(Events.DRAW, evt => {
			var ctx = canvas.getContext("2d");
			this.draw(ctx);
		});

		this.on(Events.CHANGE, evt => {
			var attr = evt.detail.attr;
			var value = evt.detail.newValue;

			switch(attr) {
				case "x": {
					canvas.x = value;
					break;
				}
				case "y": {
					canvas.y = value;
					break;
				}
				case "w": {
					canvas.w = value;
					break;
				}
				case "h": {
					canvas.h = value;
					break;
				}
				case "z": {
					canvas.z = value;
					break;
				}
			}
		});

		return this;
	}
//////////////////////////////////////////////////
	public get dirty() {
		return this._dirty;
	}

	public get x() {
		return this._x;
	}
	public set x(value) {
		this.setAttr("x", value, true);
	}

	public get y() {
		return this._y;
	}
	public set y(value) {
		this.setAttr("y", value, true);
	}

	public get z() {
		return this._z;
	}
	public set z(value) {
		this.setAttr("z", value, true);
		if(this._parent) {
			this._parent.sortChildren();
		}
	}


	public get w() {
		return this._w;
	}
	public set w(value) {
		this.setAttr("w", value, true);
	}


	public get h() {
		return this._h;
	}
	public set h(value) {
		this.setAttr("h", value, true);
	}

	public get state() {
		return this._state;
	}
	public set state(value) {
		this.setAttr("state", value, true);
	}

	public get value() {
		return this._value;
	}
	public set value(value) {
		this.setAttr("value", value, true);
	}

	public get selected() {
		return this._selected;
	}
	public set selected(value) {
		this.setAttr("selected", value, true);
	}

	public get enable() {
		return this._enable;
	}
	public set enable(value) {
		this.setAttr("enable", value, true);
	}

	public get visible() {
		return this._visible;
	}
	public set visible(value) {
		this.setAttr("visible", value, true);
	}

	public get opacity() {
		return this._opacity;
	}
	public set opacity(value) {
		this.setAttr("opacity", value, true);
	}


	public get scaleX() {
		return this._scaleX;
	}
	public set scaleX(value) {
		this.setAttr("scaleX", value, true);
	}


	public get scaleY() {
		return this._scaleY;
	}
	public set scaleY(value) {
		this.setAttr("scaleY", value, true);
	}


	public get rotation() {
		return this._rotation;
	}
	public set rotation(value) {
		this.setAttr("rotation", value, true);
	}

	public get focusable() {
		return this._focusable;
	}
	public set focusable(value) {
		this.setAttr("focusable", value, true);
	}

	public get sensitive() {
		return this._sensitive;
	}
	public set sensitive(value) {
		this.setAttr("sensitive", value, true);
	}

	public get pivotX() {
		return this._pivotX;
	}
	public set pivotX(value) {
		this.setAttr("pivotX", value, true);
	}


	public get pivotY() {
		return this._pivotY;
	}
	public set pivotY(value) {
		this.setAttr("pivotY", value, true);
	}

	public get tips() {
		return this._tips;
	}
	public set tips(value) {
		this.setAttr("tips", value, true);
	}


	public get text() {
		return this._text;
	}
	public set text(value) {
		this.setAttr("text", value, true);
	}


	public get name() {
		return this._name;
	}
	public set name(value) {
		this.setAttr("name", value, true);
	}
	
	public get type() {
		return this._type;
	}
	public set type(value) {
		this.setAttr("type", value, true);
	}

	public get id() {
		return this._id;
	}

	public get tag() {
		return this._tag;
	}
	public set tag(value) {
		this.setAttr("tag", value, true);
	}

	public get userData() {
		return this._userData;
	}
	public set userData(value) {
		this._userData = value;
	}

	public get target() {
		return this._target;
	}
	public set target(value) {
		this._target = value;
	}

	public get hitTestResult() {
		return this._hitTestResult;
	}
	public set hitTestResult(value) {
		this._hitTestResult = value;
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
	public set app(app) {
		this._app = app;
		this._themeManager = app.getThemeManager();
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

	private setAttr(attr:string, newValue:any, notify:boolean) : Widget {
		var attrName = "_"+attr;
		var oldValue = this[attrName];

		if(oldValue !== newValue) {
			if(notify) {
				var evt = Events.createEvent(Events.CHANGE, ChangeEventDetail.create(attr, oldValue, newValue));
				this.dispatchEvent(evt);
			}
			this._dirty = true;
			this.requestRedraw();
			this[attrName] = newValue;
		}

		return this;
	}

	public setText(text:string, notify:boolean) : Widget {
		return this.setAttr("text", text, notify);
	}

	public setValue(value:number, notify:boolean) : Widget {
		return this.setAttr("value", value, notify);
	}

	public init(options?:any) : Widget {
		if(options && options.hasOwnCanvas) {
			this.initCanvas();
		}

		return this;
	}

	private _x : number;
	private _y : number;
	private _z : number;
	private _w : number;
	private _h : number;
	private _state : WidgetState;
	private _value : any;
	private _enable : boolean;
	private _visible : boolean;
	private _selected : boolean;
	private _opacity  : number;
	private _scaleX   : number;
	private _scaleY   : number;
	private _pivotX   : number;
	private _pivotY   : number;
	private _rotation : number;
	private _focusable : boolean;
	private _sensitive : boolean;
	private _tips : string;
	private _text : string;
	private _dirty : boolean;
	private _name : string;
	private _id : string;
	private _tag : string;
	private _type : string;
	private _userData : any;
	private _target : Widget;
	private _hitTestResult : HitTestResult;
	private _isWindow : boolean;
	private _parent : Widget;
	private _app : IApplication;
	private _children : Array<Widget>;
	private _themeManager : IThemeManager;
	private _mode : WidgetMode;
	private _canvas : Canvas;
	private _styles : any;
	private _styleType : string;
	private _lastOverWidget : Widget;
	public onclick : Function;
	public onpointerdown : Function;
	public onpointermove : Function;
	public onpointerup : Function;
	public onwheel : Function;
	public onkeydown : Function;
	public onkeyup : Function;

	public reset(type:string) {
		this._x  = 0;
		this._y  = 0;
		this._z  = 0;
		this._w  = 0;
		this._h  = 0;
		this._state = WidgetState.NORMAL;
		this._value  = 0;
		this._enable  = true;
		this._visible  = true;
		this._selected  = false;
		this._opacity   = 1;
		this._scaleX    = 1;
		this._scaleY    = 1;
		this._pivotX    = 0.5;
		this._pivotY    = 0.5;
		this._rotation  = 0;
		this._focusable  = false;
		this._sensitive  = true;
		this._tips = null;
		this._text = null;
		this._dirty  = false;
		this._name = type;
		this._id = Date.now() +"." + Widget.ID++;;
		this._tag = null;
		this._type = type;
		this._userData = null;
		this._target = null;
		this._hitTestResult = HitTestResult.NONE;
		this._isWindow  = false;
		this._parent = null;
		this._app = null;
		this._children = [];
		this._themeManager = null;
		this._mode = WidgetMode.RUNTIME;
		this._canvas = null;
		this._styles = null;
		this._styleType = null;
		this._lastOverWidget = null;
		this.onclick = null;
		this.onpointerdown = null;
		this.onpointermove = null;
		this.onpointerup = null;
		this.onwheel = null;
		this.onkeydown = null;
		this.onkeyup = null;
	}

	public fromJson(json:any) : Widget{
		this._x = json.x;
		this._y = json.y;
		this._z = json.z;
		this._w = json.w;
		this._h = json.h;
		this._state = json.state;
		this._enable = json.enable;
		this._visible = json.visible;
		this._opacity = json.opacity;
		this._scaleX = json.scaleX;
		this._scaleY = json.scaleY;
		this._pivotX = json.pivotX;
		this._pivotY = json.pivotY;
		this._rotation = json.rotation;
		this._focusable = json.focusable;
		this._sensitive = json.sensitive;
		this._tips = json.tips;
		this._text = json.text;
		this._name = json.name;
		this._id = json.id;
		this._tag = json.tag;
		this._type = json.type;
		this._mode = json.mode;
		this.value = json.value;
		
		var styles = json.styles;
		if(styles) {
			this._styles = {};
			for(var key in styles){
				var style = styles[key];
				json._styles[key] = Style.create(style);
			}
		}
	
		return this;
	}

	public toJson(json:any) : any {
		if(!json) {
			json = {};
		}

		json.x = this._x;
		json.y = this._y;
		json.z = this._z;
		json.w = this._w;
		json.h = this._h;
		json.state = this._state;
		json.enable = this._enable;
		json.visible = this._visible;
		json.opacity = this._opacity;
		json.scaleX = this._scaleX;
		json.scaleY = this._scaleY;
		json.pivotX = this._pivotX;
		json.pivotY = this._pivotY;
		json.rotation = this._rotation;
		json.focusable = this._focusable;
		json.sensitive = this._sensitive;
		json.tips = this._tips;
		json.text = this._text;
		json.name = this._name;
		json.id = this._id;
		json.tag = this._tag;
		json.type = this._type;
		json.mode = this._mode;

		json.value = this.value;

		var styles = this._styles;
		if(styles) {
			json.styles = {};
			for(var key in styles){
				var style = styles[key];
				json.styles[key] = style.toJson();
			}
		}

		return json;
	}

	public static create(app:IApplication, options:any) : Widget {
		var widget = new Widget("dummy");

		widget.app = app;

		return widget;
	}

	static ID = 10000;
};

export enum WidgetMode {
	RUNTIME,
	DESIGN
};
	
export enum WidgetState {
	NORMAL = 0,
	OVER,
	ACTIVE,
	DISABLE,
	SELECTED
};

export enum HitTestResult {
	NONE = 0,
	TL = 1,
	TM,
	TR,
	ML,
	MM,
	MR,
	RL,
	RM,
	RR,
};

const states = ["normal", "over", "active", "disable", "selected"];

