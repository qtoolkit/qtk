/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
/// <reference path="../../typings/globals/eventemitter3/index.d.ts"/>

import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {Canvas} from "../canvas";
import {Window} from "./window";
import TWEEN = require("tween.js");
import {Emitter} from "../emitter";
import {stableSort} from "../utils";
import Events = require("../events");
import {IMainLoop} from "../imain-loop";
import {MatrixStack} from "../matrix-stack";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {IThemeManager} from "../itheme-manager";
import {RoundType, Graphics} from "../graphics";
import {DirtyRectContext} from "../dirty-rect-context";
import {ImageTile, ImageDrawType} from "../image-tile";
import {Behavior, BehaviorFactory} from "../behaviors/behavior";
import {Layouter, LayouterFactory, LayouterParam, LayouterParamFactory} from '../layouters/layouter';

import {ICommand} from "../mvvm/icommand";
import {IValueConverter} from "../mvvm/ivalue-converter";
import {BindingRule, BindingRuleItem, IBindingSource, BindingDataSource, 
	BindingCommandSource} from "../mvvm/binding-rule";
import {IValidationRule, ValidationResult} from "../mvvm/ivalidation-rule";
import {IViewModal, ICollectionViewModal, UpdateTiming, BindingMode} from "../mvvm/iview-modal";

export enum WidgetMode {
	RUNTIME = 0,
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

/**
 * Widget是所有控件的基类。
 */
export class Widget extends Emitter {
	constructor(type:string) {
		super();
		this.type = type;
	}

	/**
	 * 同时设置多个属性。
	 */
	public set(props?:any) : Widget {
		if(props) {
			for(var key in props) {
				this[key] = props[key];
			}
		}

		return this;
	}

	/**
	 * 同时获取多个属性。
	 */
	public get(props:any) : any {
		if(props) {
			for(var key in props) {
				props[key] = this[key];
			}
		}
		return props;
	}

	/**
	 * 把全局的坐标转换成相对于当前控件左上角的坐标。
	 * @param p 全局坐标。
	 * @returns 相对于当前控件左上角的坐标。
	 */
	public toLocalPoint(p:Point) : Point {
		p.x -= this.x;
		p.y -= this.y;
		
		var iter:Widget = this.parent;
		while(iter) {
			p.x -= iter.x;
			p.y -= iter.y;
			iter = iter.parent;
		}

		return p;
	}
	
	/**
	 * 把Pointer事件的坐标转换成相对于当前控件左上角的坐标。
	 * @param p Pointer事件的坐标。
	 * @returns 相对于当前控件左上角的坐标。
	 */
	public eventPointToLocal(p:Point) : Point {
		if(this._canvas) {
			return p;
		}

		p.x -= this.x;
		p.y -= this.y;
		
		var iter:Widget = this.parent;
		while(iter) {
			if(iter._canvas) {
				break;
			}
			p.x -= iter.x;
			p.y -= iter.y;
			iter = iter.parent;
		}

		return p;
	}
	
	/**
	 * 把相对于当前控件左上角的坐标转换成全局坐标。
	 * @param p 相对于当前控件左上角的坐标。
	 * @returns 全局坐标。
	 */
	public toGlobalPoint(p:Point) : Point {
		p.x += this.x;
		p.y += this.y;
		var iter:Widget = this.parent;
		
		while(iter) {
			p.x += iter.x;
			p.y += iter.y;
			iter = iter.parent;
		}

		return p;
	}
	
	/**
	 * 把相对于当前控件左上角的坐标转换成屏幕上的坐标。
	 * @param p 相对于当前控件左上角的坐标。
	 * @returns 屏幕上的坐标。
	 */
	public toViewPoint(p:Point) : Point {
		p.x += this.x;
		p.y += this.y;
		var iter:any = this.parent;
		
		while(iter) {
			p.x += iter.x;
			p.y += iter.y;
			if(iter.offsetX) {
				p.x -= iter.offsetX;
			}
			if(iter.offsetY) {
				p.y -= iter.offsetY;
			}

			iter = iter.parent;
		}

		return p;
	}

	protected onInit() {
		this._inited = true;
		if(!this.app && this.parent) {
			this.app = this.parent.app;
		}
	}

	/**
	 * 初始化。在窗口打开后，对窗口上所有控件调用，或者在窗口打开后，对新创建的控件调用。
	 */
	public init() : Widget {
		this.onInit();
		this.children.forEach(child => {
			child.init();
		});

		return this;
	}
	
	protected onDeinit() {
		this._inited = false;
	}

	/**
	 * ~初始化。在窗口关闭后，对窗口上所有控件调用，或者对被移出的控件调用。
	 */
	public deinit(){
		this.children.forEach(child => {
			child.deinit();
		});
		this.onDeinit();
	}

	/**
	 * 分发一个事件到当前控件及其子控件。
	 */
	public dispatchEventToAll(evt:any) {
		this.dispatchEvent(evt);
		this.children.forEach(child => {
			child.dispatchEvent(evt);
		});
	}

	/**
	 * 测试点是否落在当前控件中。
	 * @param x X坐标，相对于全局原点的坐标。
	 * @param y Y坐标，相对于全局原点的坐标。
	 * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
	 * @returns 测试结果HitTestResult。
	 */
	protected hitTest(x:number, y:number, ctx:MatrixStack) : HitTestResult {
		return this.doHitTest(x, y, Rect.rect.init(0, 0, this.w, this.h), ctx);
	}
	
	protected doHitTest(x:number, y:number, r:Rect, ctx:MatrixStack) : HitTestResult {
		var m = ctx.invert();
		if(m) {
			var p = m.transformPoint(x, y);
			if(p.x >= r.x && p.x <= (r.x + r.w) && p.y >= r.y && p.y <= (r.y + r.h)) {
				return HitTestResult.MM;
			}
		}

		return HitTestResult.NONE;
	}
	
	protected selfHitTest(x:number, y:number, ctx:MatrixStack) : HitTestResult {
		return this.hitTest(x, y, ctx);	
	}

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		if(!this._enable || !this._sensitive) {
			return;
		}

		ctx.save();
		this.applyTransform(ctx);
		var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);

		if(hitTestResult) {
			this.dispatchEvent(evt, true);
			this.target = this.findEventTargetChild(evt.x, evt.y, ctx);
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
	}

	protected dispatchPointerMoveToTarget(evt:Events.PointerEvent, ctx:MatrixStack) {
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchPointerMove(evt, ctx);
		}
		if(this.onpointermove) {
			this.onpointermove(evt);
		}
		this.dispatchEvent(evt, false);
	}

	protected dispatchPointerMoveToUnder(evt:Events.PointerEvent, ctx:MatrixStack) {
		ctx.save();
		this.applyTransform(ctx);
		var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
	
		if(hitTestResult) {
			this.dispatchEvent(evt, true);
			var _lastOverWidget = this._lastOverWidget;
			var overWidget  = this.findEventTargetChild(evt.x, evt.y, ctx);
			if(_lastOverWidget !== overWidget) {
				var e = null;
				if(_lastOverWidget) {
					_lastOverWidget.dispatchPointerMove(evt, ctx);

					e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
					_lastOverWidget.dispatchEvent(e, false);
					e.dispose();
					_lastOverWidget.state = WidgetState.NORMAL;
				}
			
				if(overWidget) {
					e = Events.PointerEvent.create(Events.POINTER_ENTER, evt);
					overWidget.dispatchEvent(e, false);
					e.dispose();
				}

				this._lastOverWidget = overWidget;
			}
			if(overWidget) {
				overWidget.dispatchPointerMove(evt, ctx);
			}

			if(this.onpointermove) {
				this.onpointermove(evt);
			}
			this.dispatchEvent(evt, false);

			if(evt.pointerDown) {
				this.state = WidgetState.ACTIVE;
			}else{
				this.state = WidgetState.OVER;
			}
		}else{
			this.dispatchEvent(evt, true);
			if(this.onpointermove) {
				this.onpointermove(evt);
			}
			this.dispatchEvent(evt, false);
			this.state = WidgetState.NORMAL;
		}

		ctx.restore();
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		if(evt.pointerDown) {
			this.dispatchPointerMoveToTarget(evt, ctx);
		}
		
		this.dispatchPointerMoveToUnder(evt, ctx);
	}

	protected dispatchPointerUp(evt:Events.PointerEvent) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this._lastOverWidget && this.target !== this._lastOverWidget) {
			this._lastOverWidget.dispatchPointerUp(evt);
		}

		if(this.target) {
			this.target.dispatchPointerUp(evt);
		}
		if(this.onpointerup) {
			this.onpointerup(evt);
		}

		this.dispatchEvent(evt, false);
		this.state = WidgetState.NORMAL;
	}
	
	protected dispatchClick(evt:any) {
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
	
	protected dispatchContextMenu(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchContextMenu(evt);
		}
		if(this.oncontextmenu) {
			this.oncontextmenu(evt);
		}
		this.dispatchEvent(evt, false);
	}
	
	protected dispatchDblClick(evt:any) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchDblClick(evt);
		}
		if(this.ondblclick) {
			this.ondblclick(evt);
		}
		this.dispatchEvent(evt, false);
	}

	protected dispatchKeyDown(evt:any) {
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
	
	protected dispatchKeyUp(evt:any) {
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
	
	protected dispatchWheel(evt:any) {
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
	
	protected applyTransform(ctx:MatrixStack) : Widget {
		var e = Events.ApplyTransformEvent.get();
		this.dispatchEvent(e.reset(Events.BEFORE_APPLY_TRANSFORM, ctx, this));
		if(!this._canvas) {
			ctx.translate(this._x, this._y);
		}
		
		var px = this._pivotX * this._w;
		var py = this._pivotY * this._h;
		if(this._rotation || this._scaleX !== 1 || this._scaleY !== 1) {
			ctx.translate(px, py);
			ctx.rotate(this._rotation);
			ctx.scale(this._scaleX, this._scaleY);
			ctx.translate(-px, -py);
		}
		this.dispatchEvent(e.reset(Events.AFTER_APPLY_TRANSFORM, ctx, this));

		return this;
	}
	
	protected findEventTargetChild(x:number, y:number, ctx:MatrixStack) : Widget {
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
	public animate() : TWEEN.Tween {
		var tween = new TWEEN.Tween(this);
		this.requestRedraw();

		return tween;
	}

	public scaleTo(sx:number, sy:number, duration?:number) : TWEEN.Tween {
		this.requestRedraw();
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({ scaleX : sx, scaleY : sy}, duration).start();
			return tween;
		}else{
			this.scaleX = sx;
			this.scaleY = sy;

			return null;
		}
	}
	
	public opacityTo(opacity:number, duration?:number) : TWEEN.Tween {
		this.requestRedraw();
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({opacity:opacity}, duration).start();
			return tween;
		}else{
			this.opacity = opacity;;
			return null;
		}
	}
	
	public rotateTo(rotation:number, duration?:number) : TWEEN.Tween {
		this.requestRedraw();
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({ rotation : rotation}, duration).start();

			return tween;
		}else{
			this.rotation = rotation;

			return null;
		}
	}

	public moveTo(x:number, y:number, duration?:number) : TWEEN.Tween {
		this.requestRedraw();
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({ x: x, y: y}, duration).start();

			return tween;
		}else{
			this.x = x;
			this.y = y;
			return null;
		}
	}
	
	public moveResizeTo(x:number, y:number, w:number, h:number, duration?:number) : TWEEN.Tween {
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({ x: x, y: y, w:w, h:h}, duration).start();

			return tween;
		}else{
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			return null;
		}
	}
	
	public resizeTo(w:number, h:number, duration?:number) : TWEEN.Tween {
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
				tween.to({w:w, h:h}, duration).start();

			return tween;
		}else{
			this.w = w;
			this.h = h;
			return null;
		}
	}
	
///////////////////////////////////////////

	protected layoutRect = Rect.create(0, 0, 0, 0);
	protected getLayoutRect() : Rect {
		return this.layoutRect.init(this.leftPadding, this.topPadding,
				this.w - this.leftPadding - this.rightPadding,
				this.h - this.topPadding - this.bottomPadding);
	}

	/**
	 * 根据当前的childrenLayouter重新布局子控件。
	 */
	public relayoutChildren() : Rect {
		this.requestRedraw();

		if(this.childrenLayouter && ((this.w > 0 && this.h > 0) || this._inited)) {
			var ret = this.childrenLayouter.layoutChildren(this, this.children, this.getLayoutRect());

			return this.layoutRect.copy(ret);
		}

		return this.getLayoutRect();
	}

	/**
	 * 请求重新布局当前控件。
	 */
	public requestRelayout() : Widget {
		if(this.parent) {
			this.parent.relayoutChildren();	
		}

		return this;
	}

	/**
	 * 根据当前的childrenLayouter创建子控件的布局参数。
	 */
	public createChildLayoutParam(options:any) : any {
		var layouter = this.childrenLayouter;

		return layouter ? layouter.createParam(options) : null; 
	}

	/**
	 * 启用指定的childrenLayouter。
	 */
	public useChildrenLayouter(type:string, options:any) : Widget {
		this.childrenLayouter = LayouterFactory.create(type, options);	
		
		return this;
	}

	/**
	 * 设置childrenLayouter。
	 */
	public set childrenLayouter(layouter:Layouter) {
		if(typeof layouter === "string") {
			this._childrenLayouter = LayouterFactory.create(<string>layouter, null);
		}
		else{
			this._childrenLayouter = layouter;
		}
	}

	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}

	/**
	 * 布局参数是父控件在布局当前控件时使用的。
	 */
	public set layoutParam(param:any) {
		this._layoutParam = param;
	}

	public get layoutParam() : any {
		return this._layoutParam;
	}

///////////////////////////////////////////
	public indexOfChild(child:Widget) : number {
		return this.children.indexOf(child);
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

	protected drawColorBackground(ctx:any, style:Style) : Widget {
		var roundType = 0;
		var roundTypeName = style.roundType;

		if(roundTypeName) {
			if(roundTypeName === "top") {
				roundType = RoundType.TL | RoundType.TR;
			}else if(roundTypeName === "bottom") {
				roundType = RoundType.BL | RoundType.BR;
			}else if(roundTypeName === "left") {
				roundType = RoundType.BL | RoundType.TL;
			}else if(roundTypeName === "right") {
				roundType = RoundType.TR | RoundType.BR;
			}
		}

		Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth,
				0, 0, this.w, this.h, style.roundRadius, roundType);
		return this;
	}

	protected drawBackground(ctx:any, style:Style) : Widget {
		if(style.backGroundImage) {
			style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h); 
		}else if(style.backGroundColor || (style.lineColor && style.lineWidth)) {
			this.drawColorBackground(ctx, style);
		}
		return this;
	}

	/**
	 * 获取本地化后的文本。
	 */
	public getLocaleText() : string {
		return this.text;
	}

	/**
	 * 获取前景图片区域。
	 */
	protected getFgImageRect(style:Style) : Rect {
		return Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
	}

	/**
	 * 绘制前景图片，子控件根据需要重载。
	 */
	protected drawImage(ctx:any, style:Style) : Widget {
		if(style.foreGroundImage) {
			var r = this.getFgImageRect(style);
			style.foreGroundImage.draw(ctx, ImageDrawType.ICON, r.x, r.y, r.w, r.h);
		}
		return this;
	}

	/**
	 * 获取文本显示区域。
	 */
	protected getTextRect(style:Style) : Rect {
		return Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
	}

	protected drawText(ctx:any, style:Style) : Widget {
		var text = this.getLocaleText();
		if(text && style.textColor) {
			Graphics.drawTextSL(ctx, text, style, this.getTextRect(style));
		}

		return this;
	}

	protected drawChildren(ctx:any) : Widget {
		this._children.forEach(function(child) {
			if(child.visible) {
				child.draw(ctx);
			}
		});

		return this;
	}

	protected drawTips(ctx:any, style:Style) : Widget {
		return this;
	}

	protected computeDirtyRectSelf(ctx:DirtyRectContext) {
		if(this._dirty) {
			ctx.addRect(-5, -5, this.w+10, this.h+10);
		}
	}

	/**
	 * 计算脏矩形。
	 */
	public computeDirtyRect(ctx:DirtyRectContext) {
		ctx.save();
		this.applyTransform(ctx);
		this.computeDirtyRectSelf(ctx);
		this.children.forEach(function(child) {
			child.computeDirtyRect(ctx);
		});
		ctx.restore();
	}

	protected doDraw(ctx:any, style:Style) {
		if(style) {
			this.drawBackground(ctx, style)
				.drawImage(ctx, style)
				.drawChildren(ctx)
				.drawText(ctx, style)
				.drawTips(ctx, style);
		}else{
			this.drawChildren(ctx);
		}
	}

	public draw(ctx:any) {
		this._dirty = false;
		var style = this.getStyle();
		ctx.save();
		
		var opacity = this._opacity;
		if(opacity !== 1) {
			ctx.globalAlpha *= opacity;
		}

		this.applyTransform(ctx);
		var drawEvent = Events.DrawEvent.get();

		this.dispatchEvent(drawEvent.reset(Events.BEFORE_DRAW, ctx, this));
		this.doDraw(ctx, style);
		this.dispatchEvent(drawEvent.reset(Events.AFTER_DRAW, ctx, this));

		ctx.restore();

		return;
	}

	public stateToString(state:WidgetState) : string {
		return states[state];
	};

	public set styleType(styleType:string){
		this._styleType = styleType;
	}
	
	public get styleType() : string{
		return this._styleType;
	}
	
	public setStyle(state:WidgetState, style:Style):Widget{
		if(!this._styles) {
			this._styles = {};
		}

		var stateName = this.stateToString(state);
		this._styles[stateName] = style;

		return this;
	}

	protected getStyleType() : string {
		return this._styleType || this.type;
	}

	public getStyleOfState(state : WidgetState) : Style {
		var style = null;
		var tm = this._themeManager;
		var stateName = this.stateToString(state);
		
		if(this._styles) {
			style = this._styles[stateName];
		}else if(tm){
			var styleType = this.getStyleType();
			style = tm.get(styleType, stateName);
		}
		
		return style;
	}

	protected getStateForStyle() : WidgetState {
		return this.enable ? this._state : WidgetState.DISABLE;
	}

	public getStyle() : Style {
		var state = this.getStateForStyle();
		var style = this.getStyleOfState(state);
		if(!style) {
			style = this.getStyleOfState(WidgetState.NORMAL);
		}

		return style;
	}

	public sortChildren() : Widget {
		var arr = this._children;
		stableSort(arr, function(a, b) {
			return a.z - b.z;
		});

		return this;
	}

	public removeAllChildren() : Widget {
		this.children.forEach(child => {
			child.deinit();
			child.dispose();
		});
		
		this.target = null;
		this.children.length = 0;
		this._lastOverWidget = null;

		return this;
	}

	protected onRemoveChild(child:Widget) {
	}

	public removeChild(child:Widget, fastMode?:boolean, destroy?:boolean) : Widget {
		var arr = this._children;
		var index = arr.indexOf(child);
		
		if(index >= 0) {
			arr.splice(index, 1);
			if(!fastMode) {
				this.relayoutChildren();
			}
		}

		this.onRemoveChild(child);

		if(destroy) {
			child.deinit();
			child.dispose();
		}

		return this;
	}

	protected onAddChild(child:Widget) {
	}

	public addChild(child:Widget, fastMode?:boolean) : Widget {
		var arr = this._children;
		
		arr.push(child);
		child.parent = this;
		child.app = this.app;
	
		if(this._inited) {
			child.init();
		}

		if(!fastMode) {
			this.sortChildren();
			this.relayoutChildren();
		}
		this.onAddChild(child);

		return this;
	}

	public dispose(){
		this.dispatchEvent({type:Events.DISPOSE});

		if(this._canvas) {
			this._canvas.dispose();
			this._canvas = null;
		}
		this.removeAllListeners();
		this._children.forEach(function(child) {
			child.dispose();
		});

		this._app = null;
		this._parent = null;
		this._children = [];
		this._layoutParam = null;
		this._childrenLayouter = null;
		this._viewModal = null;
		this._dataBindingRule = null;
		this.removeBinding();

		if(this.recycle) {
			this.recycle();
		}
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
	public createCanvas() : Widget {
		var app = this.app;
		var density = app.getViewPort().density;
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

		canvas.on(Events.DBLCLICK, evt => {
			this.dispatchDblClick(evt);
		});

		canvas.on(Events.CONTEXT_MENU, evt => {
			this.dispatchContextMenu(evt);
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
		var dirtyRectContext = DirtyRectContext.create();
		var lastDirtyRect = Rect.create(0, 0, this.w, this.h);

		var debugDirtyRect = app.options.debugDirtyRect;
		function drawWithDirtyRect(evt) {
			var ctx = canvas.getContext("2d");
		
			dirtyRectContext.reset();
			this.computeDirtyRect(dirtyRectContext);
			var dirtyRect = dirtyRectContext.getRect();
			var r = lastDirtyRect.merge(dirtyRect);

			if(r.w > 0 && r.h > 0) {
				ctx.save();
				ctx.beginPath();
				ctx.clearRect(r.x, r.y, r.w, r.h);
				ctx.rect(r.x, r.y, r.w, r.h);
				ctx.clip();
				
				ctx.globalAlpha = 1;
				this.draw(ctx);
			
				if(debugDirtyRect) {
					ctx.lineWidth = 1;
					ctx.strokeStyle = "gold";
					ctx.strokeRect(dirtyRect.x+1, dirtyRect.y+1, dirtyRect.w-2, dirtyRect.h-2);
				}

				ctx.restore();
			}
			lastDirtyRect.copy(dirtyRect);
		}

		function drawWithoutDirtyRect(evt) {
			var ctx = canvas.getContext("2d");
			ctx.globalAlpha = 1;
			this.draw(ctx);
		}

		var withoutDirtyRect = app.options.withoutDirtyRect;
		var draw = withoutDirtyRect ? drawWithoutDirtyRect.bind(this) : drawWithDirtyRect.bind(this);
		
		mainLoop.on(Events.TICK, draw);
		this.on(Events.DISPOSE, evt => {
			mainLoop.off(Events.TICK, draw);
		});

		this.on(Events.PROP_CHANGE, (evt:Events.PropChangeEvent) => {
			var prop = evt.prop;
			var value = evt.newValue;

			switch(prop) {
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
		this.setProp("x", value, true);
	}

	public get y() {
		return this._y;
	}
	public set y(value) {
		this.setProp("y", value, true);
	}

	public get z() {
		return this._z;
	}
	public set z(value) {
		this.setProp("z", value, true);
		if(this._parent) {
			this._parent.sortChildren();
		}
	}

	public get desireWidth() {
		return this._w;
	}

	public get w() {
		return this._w;
	}
	public set w(value) {
		this.setProp("w", value, true);
	}
	
	public get width() {
		return this._w;
	}
	public set width(value) {
		this.setProp("w", value, true);
	}

	public get clientW() {
		return this._w - this.leftPadding - this.rightPadding;
	}
	
	public get clientH() {
		return this._h - this.topPadding - this.bottomPadding;
	}

	public get height() {
		return this._h;
	}
	public set height(value) {
		this.setProp("h", value, true);
	}
	public get h() {
		return this._h;
	}
	public set h(value) {
		this.setProp("h", value, true);
	}

	public get state() {
		return this._state;
	}
	public set state(value) {
		if(this._state !== value) {
			this.setProp("state", value, true);
		}
	}

	public get value() {
		return this._value;
	}
	public set value(value) {
		this.setValue(value, true, false);
	}

	public get selected() {
		return this._selected;
	}
	public set selected(value) {
		this.setProp("selected", value, true);
	}

	protected _isEnableFunc : Function;

	public get isEnableFunc() : Function {
		return this._isEnableFunc;
	}
	public set isEnableFunc(value:Function) {
		this._isEnableFunc = value;
	}

	public get enable() {
		if(this.isEnableFunc) {
			return this.isEnableFunc();
		}

		return this._enable;
	}
	public set enable(value) {
		this.setProp("enable", value, true);
	}

	public get visible() {
		return this._visible;
	}

	/**
	 * 用户是否可以通过本控件输入/选择数据。
	 */
	public get inputable() {
		return false;
	}

	public setVisible(value) {
		this.setProp("visible", value, true);
		this.dispatchEvent({type:value ? Events.SHOW : Events.HIDE});
		this.requestRedraw();
	}

	public set visible(value) {
		var oldValue = this._visible;
		if(this.value !== oldValue) {
			this.setVisible(value);
		}
	}

	public get opacity() {
		return this._opacity;
	}
	public set opacity(value) {
		this.setProp("opacity", value, true);
	}


	public get scaleX() {
		return this._scaleX;
	}
	public set scaleX(value) {
		this.setProp("scaleX", value, true);
	}


	public get scaleY() {
		return this._scaleY;
	}
	public set scaleY(value) {
		this.setProp("scaleY", value, true);
	}


	public get rotation() {
		return this._rotation;
	}
	public set rotation(value) {
		this.setProp("rotation", value, true);
	}

	public get focusable() {
		return this._focusable;
	}
	public set focusable(value) {
		this.setProp("focusable", value, true);
	}

	public get sensitive() {
		return this._sensitive;
	}
	public set sensitive(value) {
		this.setProp("sensitive", value, true);
	}

	public get pivotX() {
		return this._pivotX;
	}
	public set pivotX(value) {
		this.setProp("pivotX", value, true);
	}


	public get pivotY() {
		return this._pivotY;
	}
	public set pivotY(value) {
		this.setProp("pivotY", value, true);
	}

	public get tips() {
		return this._tips;
	}
	public set tips(value) {
		this.setProp("tips", value, true);
	}


	public get text() {
		return this._text;
	}
	public set text(value:any) {
		this.setProp("text", (value || value === 0) ? value.toString() : "", true);
	}


	public get name() {
		return this._name;
	}
	public set name(value) {
		this.setProp("name", value, true);
	}
	
	public get type() {
		return this._type;
	}
	public set type(value) {
		this.setProp("type", value, true);
	}

	public get id() {
		return this._id;
	}

	public get tag() {
		return this._tag;
	}
	public set tag(value) {
		this.setProp("tag", value, true);
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
		if(app) {
			this._mainLoop = app.getMainLoop();
			this._themeManager = app.getThemeManager();
		}

		this.children.forEach((child:Widget) => {
			child.app = app;
		});
	}

	public get win() : Window {
		for(var iter:Widget = this; iter !== null; iter = iter._parent) {
			if(iter._isWindow) {
				return <Window>iter;
			}
		}

		return null;
	}

	public get children() : Array<Widget> {
		return this._children;
	}

	public get canvas() : Canvas {
		return this._canvas;
	}

	public isWindow() : boolean {
		return this._isWindow;
	}

	public get leftPadding() {
		return this._lp;
	}
	public set leftPadding(value) {
		this.setProp("lp", value, true);
	}

	public get rightPadding() {
		return this._rp;
	}
	public set rightPadding(value) {
		this.setProp("rp", value, true);
	}

	public get topPadding() {
		return this._tp;
	}
	public set topPadding(value) {
		this.setProp("tp", value, true);
	}


	public get bottomPadding() {
		return this._bp;
	}
	public set bottomPadding(value) {
		this.setProp("bp", value, true);
	}


	public get padding() {
		return this._tp;
	}
	public set padding(value) {
		this.setProp("lp", value, true);
		this.setProp("tp", value, true);
		this.setProp("rp", value, true);
		this.setProp("bp", value, true);
	}

	protected setProp(prop:string, newValue:any, notify:boolean) : Widget {
		var propName = "_"+prop;
		var oldValue = this[propName];

		if(oldValue !== newValue) {
			this[propName] = newValue;
			this.requestRedraw();
			
			if(notify) {
				var evt = this.ePropChangeEvent;
				evt.init(Events.PROP_CHANGE, {prop:prop, oldValue:oldValue, newValue:newValue});
				this.dispatchEvent(evt);
			}
		}

		return this;
	}

	public setText(text:string, notify:boolean) : Widget {
		return this.setProp("text", text, notify);
	}

	public useBehavior(type:string, options:any) : Behavior {
		var behavior : Behavior;
		if(!this._behaviors[type]) {
			behavior = BehaviorFactory.create(type, this, options);
			this._behaviors[type] = behavior;
		}else{
			behavior = this._behaviors[type];
			behavior.setOptions(options);
		}

		return behavior;
	}

	protected _x : number;
	protected _y : number;
	protected _z : number;
	protected _w : number;
	protected _h : number;
	protected _inited : boolean;
	protected _state : WidgetState;
	protected _value : any;
	protected _enable : boolean;
	protected _visible : boolean;
	protected _selected : boolean;
	protected _opacity  : number;
	protected _scaleX   : number;
	protected _scaleY   : number;
	protected _pivotX   : number;
	protected _pivotY   : number;
	protected _rotation : number;
	protected _focusable : boolean;
	protected _sensitive : boolean;
	protected _tips : string;
	protected _text : string;
	protected _dirty : boolean;
	protected _name : string;
	protected _id : string;
	protected _tag : string;
	protected _type : string;
	protected _userData : any;
	protected _target : Widget;
	protected _hitTestResult : HitTestResult;
	protected _isWindow : boolean;
	protected _parent : Widget;
	protected _app : IApplication;
	protected _children : Array<Widget>;
	protected _mainLoop : IMainLoop;
	protected _themeManager : IThemeManager;
	protected _mode : WidgetMode;
	protected _canvas : Canvas;
	protected _styles : any;
	protected _styleType : string;
	protected _lastOverWidget : Widget;
	protected _behaviors : any;
	private _lp : number;
	private _rp : number;
	private _tp : number;
	private _bp : number;
	public onclick : Function;
	public ondblclick : Function;
	public oncontextmenu: Function;
	public onpointerdown : Function;
	public onpointermove : Function;
	public onpointerup : Function;
	public onwheel : Function;
	public onkeydown : Function;
	public onkeyup : Function;
	
	protected recycle : Function;
	protected _layoutParam : any;
	protected _childrenLayouter : Layouter;
	protected eChangeEvent = Events.ChangeEvent.create();
	protected ePropChangeEvent = Events.PropChangeEvent.create();
	
	protected notifyChange() {
		this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, {newValue:this.value, oldValue:!this.value}));
	}
	
	public setValue(value:boolean, notify:boolean, exclude:boolean) {
		if(exclude) {
			var type = this.type;
			if(this.parent && value) {
				var arr = this.parent.children;
				arr.forEach((child:any) => {
					if(child !== this && child.type === type) {
						if(child.value) {
							child.setProp("value", false, true);
						}
					}
				});
			}
			this.setProp("value", true, notify);
		}else{
			this.setProp("value", value, notify);
		}
		if(notify) {
			this.notifyChange();	
		}
	}

	protected onReset() {
	}

	protected onCreated() {
	}

	protected getDefProps() : any {
		return Widget.defProps;
	}

	protected static defProps = {
			_x  : 0,
			_y  : 0,
			_z  : 0,
			_w  : 0,
			_h  : 0,
			_state : 0,
			_value  : 0,
			_enable  : true,
			_visible  : true,
			_selected  : false,
			_opacity   : 1,
			_scaleX    : 1,
			_scaleY    : 1,
			_pivotX    : 0.5,
			_pivotY    : 0.5,
			_rotation  : 0,
			_focusable  : false,
			_sensitive  : true,
			_tips : null,
			_text : null,
			_name : null,
			_tag : null,
			_hitTestResult : 0,
			_isWindow  : false,
			_mode : 0,
			_styleType : null,
			_lp : 0,
			_tp : 0,
			_rp : 0,
			_bp : 0
	};

	public reset(type:string, options:any) : Widget {
		var defProps = this.getDefProps();
		for(var key in defProps) {
			this[key] = defProps[key];
		}
	
		this._dirty = true;
		this._type = type;
		this._app = null;
		this._children = [];
		this._parent = null;
		this._canvas = null;
		this._styles = null;
		this._target = null;
		this._mainLoop = null;
		this._userData = null;
		this._themeManager = null;
		this._lastOverWidget = null;
		this._id = Date.now() +"." + Widget.ID++;;
		
		this.onclick = null;
		this.oncontextmenu = null;
		this.onpointerdown = null;
		this.onpointermove = null;
		this.onpointerup = null;
		this.onwheel = null;
		this.onkeydown = null;
		this.onkeyup = null;
		this._behaviors = {};
		this._viewModal = null;
		this._dataBindingRule = null;

		this.onReset();
		this.set(options);
		this.onCreated();

		return this;
	}

	protected onFromJson(json:any) {
	}

	public fromJson(json:any) : Widget{
		var defProps = this.getDefProps();
		for(var key in defProps) {
			var value = json[key];
			if(value === undefined) {
				value = defProps[key];
			}
			this[key] = value; 
		}

		var styles = json.styles;
		if(styles) {
			this._styles = {};
			for(var key in styles){
				var style = styles[key];
				json._styles[key] = Style.create(style);
			}
		}

		var childrenLayouter = json.childrenLayouter;
		if(childrenLayouter) {
			this.childrenLayouter = LayouterFactory.create(childrenLayouter.type, childrenLayouter);
		}

		var layoutParam = json.layoutParam;
		if(layoutParam) {
			this.layoutParam = LayouterParamFactory.create(layoutParam.type, layoutParam);
		}

		this._children.length = 0;
		if(json.children) {
			json.children.forEach((childJson:any) => {
				var child = WidgetFactory.create(childJson.type);
				child.fromJson(childJson);
				this._children.push(child);
			});
		}

		if(json._dataBindingRule) {
			this._dataBindingRule = json._dataBindingRule;
		}

		this.onFromJson(json);

		return this;
	}

	public clone() : Widget {
		var json = this.toJson();
		var widget = WidgetFactory.createWithJson(json);
		
		return widget;
	}

	protected onToJson(json:any) {
	}

	public toJson() : any {
		var json:any = {};
	
		json.type = this._type;
		var defProps = this.getDefProps();
		for(var key in defProps) {
			var value = this[key];
			if(value !== defProps[key]) {
				json[key] = value;
			}
		}

		var styles = this._styles;
		if(styles) {
			json.styles = {};
			for(var key in styles){
				var style = styles[key];
				json.styles[key] = style.toJson();
			}
		}

		if(this.childrenLayouter) {
			json.childrenLayouter = this.childrenLayouter.toJson();
		}

		if(this.layoutParam) {
			json.layoutParam = this.layoutParam.toJson();
		}

		if(this.children.length) {
			json.children = [];
			this.children.forEach((child:Widget) => {
				json.children.push(child.toJson());
			});
		}

		if(this._dataBindingRule) {
			json._dataBindingRule = this._dataBindingRule;
		}

		this.onToJson(json);

		return json;
	}

////////////////////////////////////////////	
	protected _templateItem : Widget;
	protected _templateItemJson : Widget;

	public set templateItem(value:Widget) {
		this._templateItem = value;
		this._templateItemJson = value ? value.toJson() : null;
	}

	public get templateItem() : Widget {
		return this._templateItem;
	}

	public addChildWithTemplate(fastMode?:boolean) : Widget {
		var child = null;
		var json = this._templateItemJson;
		if(json) {
			child = WidgetFactory.createWithJson(json);
			this.addChild(child, fastMode);
		}

		return child;
	}

////////////////////////////////////////////	
	//绑定单个属性，子控件可以重载本函数去支持其它属性。
	protected onBindProp(prop:string, value:any) {
		if(prop === "text") {
			this.text = value;
		} else if(prop === "value") {
			this.value = value;
		}
	}

	protected _dataBindingRule : BindingRule;
	protected _viewModal : IViewModal;

	/**
	 * 数据绑定规则。
	 */
	public set dataBindingRule(dataBindingRule:any) {
		this._dataBindingRule = BindingRule.create(dataBindingRule);
	}

	public get dataBindingRule() : any {
		return this._dataBindingRule;
	}
	
	/**
	 * 显式的更新ViewModal。
	 */
	public updateExplicit() {
		if(this._dataBindingRule) {
			this.onUpdateToDataSource();
		}

		this.children.forEach((child:Widget) => {
			child.updateExplicit();
		});
	}

	protected viewModalChangeFunc = function(evt) {
		var viewModal = this._viewModal;
		var dataBindingRule = this._dataBindingRule;
		
		if(dataBindingRule && viewModal) {
			this.onBindData(viewModal, dataBindingRule);
		}
	}.bind(this);

	protected removeBinding() {
		var viewModal = this._viewModal;
		var dataBindingRule = this._dataBindingRule;
		
		if(dataBindingRule && viewModal) {
			viewModal.offChange(this.viewModalChangeFunc);
		}
		this._viewModal = null;
		this._dataBindingRule = null;
	}

	/**
	 * 绑定数据。
	 */
	public bindData(viewModal:IViewModal) : Widget {
		var dataBindingRule = this._dataBindingRule;
		
		this._viewModal = viewModal;
		if(dataBindingRule && viewModal) {
			var bindingMode = viewModal.getBindingMode();
			
			this.onBindCommand(viewModal, dataBindingRule);
			if(bindingMode !== BindingMode.ONE_WAY_TO_SOURCE) {
				this.onBindData(viewModal, dataBindingRule);
			}

			if(bindingMode === BindingMode.TWO_WAY || bindingMode === BindingMode.ONE_WAY_TO_SOURCE) {
				this.watchTargetChange(dataBindingRule);
			}

			if(bindingMode !== BindingMode.ONE_TIME && bindingMode !== BindingMode.ONE_WAY_TO_SOURCE) {
				viewModal.onChange(this.viewModalChangeFunc);
			}

			this._isEnableFunc = function() {
				var enable = true;

				dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
					var source = item.source;
					if(source.type === BindingCommandSource.TYPE) {
						var commandSource = <BindingCommandSource>source;
						enable = enable && viewModal.canExecute(commandSource.command)	
					}
				});

				return enable;
			}
		}

		this.bindChildren(viewModal);
		if(viewModal.isCollection && this._templateItemJson) {
			var collectionViewModal = <ICollectionViewModal>viewModal;
			collectionViewModal.onItemsChange((evt:Events.ChangeEvent) => {
				this.bindChildren(viewModal);
			});
		}

		return this;
	}
	
	protected bindChildren(viewModal:IViewModal) {
		if(viewModal.isCollection) {
			if(this._templateItemJson) {	
				//对于集合viewModal，如果有模板项存在，则动态生成子控件。
				var json = this._templateItemJson;
				var collectionViewModal = <ICollectionViewModal>viewModal;
				var n = collectionViewModal.total;

				this.removeAllChildren();
				for(var i = 0; i < n; i++) {
					var itemViewModal = collectionViewModal.getItemViewModal(i);
					var child = this.addChildWithTemplate(true);
					child.bindData(itemViewModal);
				}
				this.relayoutChildren();
			}else{
				//对于集合viewModal，如果没有模板项存在，则绑定集合viewModal当前项到子控件。
				this._children.forEach((child:Widget) => {
					child.bindData(viewModal);
				});
			}
		}else{
			//对于非集合viewModal，按正常绑定子控件。
			this._children.forEach((child:Widget) => {
				child.bindData(viewModal);
			});
		}
	}

	protected onBindCommand(viewModal:IViewModal, dataBindingRule:any) {
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			var source = item.source;
			if(source.type === BindingCommandSource.TYPE) {
				var commandSource = <BindingCommandSource>source;
				if(prop === "click") {
					if(commandSource.eventHandler) {
						this.off(Events.CLICK, commandSource.eventHandler);
					}
					commandSource.eventHandler = function(evt:any) {
						viewModal.execCommand(commandSource.command, commandSource.commandArgs);
					}
					this.on(Events.CLICK, commandSource.eventHandler);
				}
			}
		});
	}

	/*
	 * 把数据显示到界面上。
	 */
	protected onBindData(viewModal:IViewModal, dataBindingRule:any) {
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			var source = item.source;
			if(source.type === BindingDataSource.TYPE) {
				var dataSource = <BindingDataSource>source;
				var value = dataSource.value;
				var bindingMode = dataSource.mode || BindingMode.TWO_WAY;
				
				if(value === undefined && dataSource.path) {
					value = viewModal.getProp(dataSource.path, dataSource.converter);
				}
				
				if(bindingMode !== BindingMode.ONE_WAY_TO_SOURCE) {
					this.onBindProp(prop, value);
				}
			}
		});
	}

	protected getPropDefaultBindMode(prop:string) : BindingMode {
		return (prop === "value" && this.inputable) ? BindingMode.TWO_WAY : BindingMode.ONE_WAY;
	}

	/*
	 * 子控件重载此函数向用户提示数据无效。
	 */
	protected onInvalidInput(message:string) {
		if(message) {
			console.log("invalid value:" + message);
		}
	}

	protected onUpdateToDataSource() {
		var dataBindingRule = this._dataBindingRule;
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			if(item.source.type === BindingDataSource.TYPE) {
				var dataSource = <BindingDataSource>item.source;
				if(dataSource.updateTiming === UpdateTiming.EXPLICIT) {
					this.updateValueToSource(this.value, dataSource);
				}
			}
		});
	}

	protected updateValueToSource(value:any, dataSource:BindingDataSource, oldValue?:any) {
		var result = this._viewModal.setPropEx(dataSource, value, oldValue);
		if(result.code) {
			this.onInvalidInput(result.message);
		}else{
			this.onInvalidInput(null);
		}
	}

	/*
	 * 监控控件单个属性的变化。
	 */
	protected watchTargetValueChange(dataSource:BindingDataSource) {
		var updateTiming = dataSource.updateTiming;
		var bindingMode = dataSource.mode || BindingMode.TWO_WAY;
		
		if(updateTiming === UpdateTiming.EXPLICIT) {
			return;
		}
		if(bindingMode === BindingMode.TWO_WAY || bindingMode === BindingMode.ONE_WAY_TO_SOURCE) {
			this.on(Events.CHANGE, (evt:Events.ChangeEvent) => {
				this.updateValueToSource(evt.value, dataSource, evt.oldValue);
			});

			if(updateTiming === UpdateTiming.CHANGING) {
				this.on(Events.CHANGING, (evt:Events.ChangeEvent) => {
					this.updateValueToSource(evt.value, dataSource);
				});
			}
		}
	}

	/*
	 * 监控控件属性的变化。
	 */
	protected watchTargetChange(dataBindingRule:BindingRule) {
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			var source = item.source;
			if(source.type === BindingDataSource.TYPE) {
				var dataSource = <BindingDataSource>source;
				var bindingMode = this.getPropDefaultBindMode(prop);
				if(bindingMode === BindingMode.TWO_WAY) {
					this.watchTargetValueChange(dataSource);
				}
			}
		});
	}

	private static ID = 10000;
};

