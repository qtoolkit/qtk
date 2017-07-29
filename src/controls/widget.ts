/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
/// <reference path="../../typings/globals/eventemitter3/index.d.ts"/>

import {Rect} from "../base/rect";
import {Point} from "../base/point";
import {Style} from "../base/style";
import {Canvas} from "../base/canvas";
import {Window} from "./window";
import TWEEN = require("tween.js");
import {Emitter} from "../base/emitter";
import {stableSort} from "../base/utils";
import Events = require("../base/events");
import {IMainLoop} from "../base/imain-loop";
import {StringTable} from "../base/string-table";
import {MatrixStack} from "../base/matrix-stack";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "./widget-factory";
import {IThemeManager} from "../base/itheme-manager";
import {RoundType, Graphics} from "../base/graphics";
import {DirtyRectContext} from "../base/dirty-rect-context";
import {ImageTile, ImageDrawType} from "../base/image-tile";
import {Behavior, BehaviorFactory} from "../behaviors/behavior";
import {Layouter, LayouterFactory, LayouterParam, LayouterParamFactory} from '../layouters/layouter';

import {ICommand} from "../mvvm/icommand";
import {IValueConverter} from "../mvvm/ivalue-converter";
import {IValidationRule, ValidationResult} from "../mvvm/ivalidation-rule";
import {BindingDataSource, BindingCommandSource} from "../mvvm/binding-rule";
import {BindingRule, BindingRuleItem, IBindingSource} from "../mvvm/binding-rule";
import {IViewModel, ICollectionViewModel, UpdateTiming, BindingMode} from "../mvvm/iview-model";

/** 
 * @enum WidgetState
 * 控件的状态
 */
export enum WidgetState {
	/** 
	 * @property {number} 
	 * 正常状态。
	 */
	NORMAL = 0,
	/** 
	 * @property {number} 
	 * Pointer在控件上。
	 */
	OVER,
	/** 
	 * @property {number} 
	 * Pointer按下的状态。
	 */
	ACTIVE,
	/** 
	 * @property {number} 
	 * 禁用状态。
	 */
	DISABLE,
	/** 
	 * @property {number} 
	 * 选中状态。只对部分设备有效。
	 */
	SELECTED
};

/** 
 * @enum HitTestResult
 * 点击测试结果。
 */
export enum HitTestResult {
	/** 
	 * @property {number} 
	 * 点击在控件之外。
	 */
	NONE = 0,
	/** 
	 * @property {number} 
	 * 点击在控件左上角。
	 */
	TL = 1,
	/** 
	 * @property {number} 
	 * 点击在控件上面中间。
	 */
	TM,
	/** 
	 * @property {number} 
	 * 点击在控件右上角。
	 */
	TR,
	/** 
	 * @property {number} 
	 * 点击在控件左边中间。
	 */
	ML,
	/** 
	 * @property {number} 
	 * 点击在控件中间区域。
	 */
	MM,
	/** 
	 * @property {number} 
	 * 点击在控件右边中间。
	 */
	MR,
	/** 
	 * @property {number} 
	 * 点击在控件左下角。
	 */
	BL,
	/** 
	 * @property {number} 
	 * 点击在控件下面中间。
	 */
	BM,
	/** 
	 * @property {number} 
	 * 点击在控件右下角。
	 */
	BR
};

/**
 * @class Widget
 * Widget是所有控件的基类。
 */
export class Widget extends Emitter {
	constructor(type:string) {
		super();
		this.type = type;
	}

	/**
	 * @method set 
	 * 同时设置多个属性。
	 */
	public set(props?:any) : Widget {
		if(props) {
			for(var key in props) {
				var value = props[key];
				if(value !== undefined) {
					this[key] = value;
				}
			}
		}

		return this;
	}
	
	/**
	 * @method get 
	 * 同时获取多个属性。
	 */
	public get(props?:any) : Widget {
		if(props) {
			for(var key in props) {
				var value = this[key];
				if(value !== undefined) {
					props[key] = value;
				}
			}
		}

		return this;
	}

	/**
	 * 把全局的坐标转换成相对于当前控件左上角的坐标。
	 * @param {Pointer} p 全局坐标。
	 * @return {Pointer} 相对于当前控件左上角的坐标。
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
	 * 把相对于当前控件左上角的坐标转换成全局坐标。
	 * @param {Point} p 相对于当前控件左上角的坐标。
	 * @return {Point} 全局坐标。
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
	 * @param {Point} p 相对于当前控件左上角的坐标。
	 * @return {Point}  屏幕上的坐标。
	 */
	public toViewPoint(p:Point) : Point {
		var iter:any = this;

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

	public deinit(){
		this.children.forEach(child => {
			child.deinit();
		});
		this.onDeinit();
	}

	protected translatePointerEvent(evt:Events.PointerEvent) {
		evt.localX -= this.x;
		evt.localY -= this.y;
	}
	
	protected untranslatePointerEvent(evt:Events.PointerEvent) {
		evt.localX += this.x;
		evt.localY += this.y;
	}

	public dispatchPointerDown(evt:Events.PointerEvent) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.translatePointerEvent(evt);

		var x = evt.localX;
		var y = evt.localY;
		var hitTestResult = this.selfHitTest(x, y);

		if(hitTestResult) {
			this.dispatchEvent(evt, true);
			this.target = this.findEventTargetChild(x, y);
			if(this.target) {
				this.target.dispatchPointerDown(evt);
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
		this.untranslatePointerEvent(evt);

		this.hitTestResult = hitTestResult;
	}

	public dispatchPointerMoveToTarget(evt:Events.PointerEvent) {
		this.dispatchEvent(evt, true);
		if(this.target) {
			this.target.dispatchPointerMove(evt);
		}
		if(this.onpointermove) {
			this.onpointermove(evt);
		}
		this.dispatchEvent(evt, false);
	}

	public dispatchPointerLeave(evt:Events.PointerEvent) {
		if(this.state === WidgetState.OVER || this.state === WidgetState.ACTIVE) {
			var e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
			this.dispatchEvent(e, false);
			this.state = WidgetState.NORMAL;
			e.dispose();
		}
		if(this.target) {
			this.target.dispatchPointerLeave(evt);
		}
		if(this._lastOverWidget) {
			this._lastOverWidget.dispatchPointerLeave(evt);
			this._lastOverWidget = null;
		}
	}
	
	public dispatchPointerEnter(evt:Events.PointerEvent) {
		var e = Events.PointerEvent.create(Events.POINTER_ENTER, evt);
		this.dispatchEvent(e, false);
		e.dispose();
	}

	public dispatchPointerMoveToUnder(evt:Events.PointerEvent) {
		var x = evt.localX;
		var y = evt.localY;
		var hitTestResult = this.selfHitTest(x, y);
	
		if(hitTestResult) {
			this.dispatchEvent(evt, true);
			var _lastOverWidget = this._lastOverWidget;
			var overWidget  = this.findEventTargetChild(x, y);
			if(_lastOverWidget !== overWidget) {
				var e = null;
				if(_lastOverWidget) {
					_lastOverWidget.dispatchPointerMove(evt);
					_lastOverWidget.dispatchPointerLeave(evt);
				}
			
				if(overWidget) {
					overWidget.dispatchPointerEnter(evt);
				}

				this._lastOverWidget = overWidget;
			}
			if(overWidget) {
				overWidget.dispatchPointerMove(evt);
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
	}

	public dispatchPointerMove(evt:Events.PointerEvent) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.translatePointerEvent(evt);

		if(evt.pointerDown) {
			this.dispatchPointerMoveToTarget(evt);
		}
		this.dispatchPointerMoveToUnder(evt);

		this.untranslatePointerEvent(evt);
	}

	public dispatchPointerUp(evt:Events.PointerEvent) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.translatePointerEvent(evt);

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

		this.untranslatePointerEvent(evt);
	}
	
	public dispatchClick(evt:Events.PointerEvent) {
		if(!this._enable || !this._sensitive) {
			return;
		}
		
		this.translatePointerEvent(evt);
		var x = evt.localX;
		var y = evt.localY;
		var hitTestResult = this.selfHitTest(x, y);
		var isClick = Math.abs(evt.dx) < 5 && Math.abs(evt.dy) < 5;

		if(isClick || hitTestResult) {
			this.dispatchEvent(evt, true);
			if(this.target) {
				this.target.dispatchClick(evt);
			}
			if(this.onclick) {
				this.onclick(evt);
			}
			this.dispatchEvent(evt, false);
		}

		this.untranslatePointerEvent(evt);
	}
	
	public dispatchContextMenu(evt:Events.PointerEvent) {
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
	
	public dispatchDblClick(evt:Events.PointerEvent) {
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

	public dispatchKeyDown(evt:Events.KeyEvent) {
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
	
	public dispatchKeyUp(evt:Events.KeyEvent) {
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
	
	public dispatchWheel(evt:Events.WheelEvent) {
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
	
	protected findEventTargetChild(x:number, y:number) : Widget {
		var arr = this._children;
		var n = arr.length;

		for(var i = n-1; i >= 0; i--) {
			var iter = arr[i];
			if(iter._enable && iter._sensitive) {
				if(Rect.rect.init(iter.x, iter.y, iter.w, iter.h).containsPoint(x, y)) {
					return iter;
				}
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

	/**
	 * @method scaleTo
	 * 设置控件的缩放比例到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} sx 宽度缩放比例。
	 * @param {number} sy 高度缩放比例。
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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
	
	/**
	 * @method opacityTo
	 * 设置控件的透明度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} opacity 不透明度[0-1]
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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
	
	/**
	 * @method rotateTo
	 * 设置控件的旋转角度到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} rotation 旋转角度，单位为弧度。
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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

	/**
	 * @method moveTo
	 * 设置控件的位置到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} x X 坐标。
	 * @param {number} y Y 坐标。
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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
	
	/**
	 * @method moveResizeTo
	 * 设置控件的位置和大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} x X 坐标。
	 * @param {number} y Y 坐标。
	 * @param {number} w 宽度。
	 * @param {number} h 高度。
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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
	
	/**
	 * @method resizeTo
	 * 设置控件的大小到指定的值。如果duration > 0则启用动画，并返回TWEEN.Tween，否则返回null。
	 * @param {number} w 宽度。
	 * @param {number} h 高度。
	 * @param {number} duration 动画时间。
	 * @return {TWEEN.Tween}
	 */
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

		if(this.children.length > 0 && this.childrenLayouter && ((this.w > 0 && this.h > 0) || this._inited)) {
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

	/*
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
	 * @property {Layouter} childrenLayouter 
	 * 用于子控件布局的Layouter。
	 */
	public set childrenLayouter(layouter:Layouter) {
		if(typeof layouter === "string") {
			this._childrenLayouter = LayouterFactory.create(<string>layouter, null);
		}
		else{
			this._childrenLayouter = layouter;
		}
		
		if(this.children.length) {
			this.relayoutChildren();
		}
	}

	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}

	/**
	 * @property {Object} layoutParam
	 * 布局参数是父控件在布局当前控件时使用的参数。
	 */
	public set layoutParam(param:any) {
		this._layoutParam = param;
		if(param) {
			param.widget = this;
		}
	}

	public get layoutParam() : any {
		return this._layoutParam;
	}

	public getParentByType(type:string) : Widget{
		var iter = this.parent;
		
		while(iter && iter.type !== type) {
			iter = iter.parent;
		}

		return iter;
	}
///////////////////////////////////////////
	/**
	 * @method indexOfChild
	 * 获取指定子控件的位置序数。
	 * @param {Widget} child 子控件
	 * @return {number} 位置序数。
	 */
	public indexOfChild(child:Widget) : number {
		return this.children.indexOf(child);
	}

	/**
	 * @method findChild
	 * 查找满足指定条件的子控件。
	 * @param {Function} func 比较函数。
	 * @return {Widget} 如果找到，返回该子控件，否则返回null。
	 */
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

	/**
	 * @method findChildByName
	 * 按名称查找子控件。
	 * @param {string} name 子控件的名称。
	 * @return {Widget} 如果找到，返回该子控件，否则返回null。
	 */
	public findChildByName(name:string) : Widget {
		var ret = this.findChild(function(child) {
			return child.name === name;
		});

		return ret;
	}

	/**
	 * @method findChildByID
	 * 按ID查找子控件。
	 * @param {string} id 子控件的ID。
	 * @return {Widget} 如果找到，返回该子控件，否则返回null。
	 */
	public findChildByID(id:string) : Widget {
		var ret = this.findChild(function(child) {
			return child.id === id;
		});
		
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
	 * @method getLocaleText
	 * 获取本地化后的文本。
	 */
	public getLocaleText() : string {
		return StringTable.tr(this.text);
	}

	protected getFgImageRect(style:Style) : Rect {
		return Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
	}

	protected drawImage(ctx:any, style:Style) : Widget {
		if(style.foreGroundImage) {
			var r = this.getFgImageRect(style);
			style.foreGroundImage.draw(ctx, ImageDrawType.ICON, r.x, r.y, r.w, r.h);
		}
		return this;
	}

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

	public computeDirtyRect(ctx:DirtyRectContext) {
		ctx.save();
		this.applyTransform(ctx);
		this.computeDirtyRectSelf(ctx);
		this.computeChildrenDirtyRect(ctx);
		ctx.restore();
	}

	public computeChildrenDirtyRect(ctx:DirtyRectContext) {
		this.children.forEach(function(child) {
			child.computeDirtyRect(ctx);
		});
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
		return WidgetState[state].toLowerCase();
	}

	/**
	 * @property {string} styleType
	 * 用于从主题中获取style数据。
	 */
	public set styleType(styleType:string){
		this._styleType = styleType;
	}
	
	public get styleType() : string{
		return this._styleType;
	}

	/**
	 * @method setStyle
	 * 设置控件的Style。
	 * @param {WidgetState} state 状态。
	 * @param {Style} style 控件的Style。
	 * return {Widget} 控件本身。
	 */
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

	/**
	 * @method removeAllChildren 
	 * 移出并销毁所有的子控件。
	 * return {Widget} 控件本身。
	 */
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

	/**
	 * @method removeChild
	 * 移出子控件。批量删除时，请使用快速模式，并在完成时调用relayoutChildren。
	 * @param {Widget} child 子控件。
	 * @param {boolean} fastMode 快速模式下，不重新布局子控件。
	 * @param {boolean} destroy 是否销毁子控件。
	 * return {Widget} 控件本身。
	 */
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

	/**
	 * @method addChild 
	 * 增加子控件。批量增加时，请使用快速模式，并在完成时调用relayoutChildren。
	 * @param {Widget} child 子控件。
	 * @param {boolean} fastMode 快速模式下，不重新布局子控件。
	 * return {Widget} 控件本身。
	 */
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

	/**
	 * @method dispose
	 * 销毁控件及其全部子控件。
	 */
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
		this._viewModel = null;
		this._dataBindingRule = null;
		this.removeBinding();

		if(this.recycle) {
			this.recycle();
		}
	}

	/**
	 * @method requestRedraw
	 * 请求重绘。
	 */
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
		
		canvas.ensureCanvas();
		canvas.on(Events.POINTER_DOWN, evt => {
			this.dispatchPointerDown(evt);
		});

		canvas.on(Events.POINTER_MOVE, evt => {
			this.dispatchPointerMove(evt);
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

			if(r.x < 0) r.x = 0;
			if(r.y < 0) r.y = 0;
			if((r.x + r.w) > this.w) {
				r.w = this.w - r.x;
			}
			if((r.y + r.h) > this.h) {
				r.h = this.h - r.y;
			}

			if(r.w > 0 && r.h > 0) {
				r.x = r.x >> 0;
				r.y = r.y >> 0;
				r.w = (r.w + 1) >> 0;
				r.h = (r.h + 2) >> 0;

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

	/**
	 * @property {number} x
	 * 控件的X坐标。
	 */
	public get x() {
		return this._x;
	}
	public set x(value) {
		this.setProp("x", value, true);
	}

	/**
	 * @property {number} y
	 * 控件的Y坐标。
	 */
	public get y() {
		return this._y;
	}
	public set y(value) {
		this.setProp("y", value, true);
	}

	/**
	 * @property {number} z 
	 * 控件的位置序数。
	 */
	public get z() {
		return this._z;
	}
	public set z(value) {
		this.setProp("z", value, true);
		if(this._parent) {
			this._parent.sortChildren();
		}
	}

	/**
	 * @property {number} w 
	 * 控件的宽度。
	 */
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

	/**
	 * @property {number} h 
	 * 控件的高度。
	 */
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

	/**
	 * @property {WidgetState} state 
	 * 控件的状态。
	 */
	public get state() : WidgetState {
		return this._state;
	}
	public set state(value) {
		if(this._state !== value) {
			this.setProp("state", value, true);
		}
	}

	/**
	 * @property {any} value
	 * 控件的值。不同的控件，值的定义不一样。
	 */
	public get value() {
		return this._value;
	}
	public set value(value) {
		this.setValue(value, false, false);
	}

	/**
	 * @property {boolean} selected 
	 * 控件是否被选中。
	 */
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

	/**
	 * @property {boolean} enable
	 * 控件是否处于enable状态。
	 */
	public get enable() {
		if(this.isEnableFunc) {
			return this.isEnableFunc();
		}

		return this._enable;
	}
	public set enable(value) {
		this.setProp("enable", value, true);
	}

	/**
	 * @property {boolean} inputable
	 * [只读] 控件是否可输入，也就是是否可以通过界面修改它的值。
	 */
	public get inputable() {
		return false;
	}

	/**
	 * @property {boolean} visible
	 * 控件是否可见。
	 */
	public get visible() {
		return this._visible;
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

	/**
	 * @property {number} opacity
	 * 控件的不透明度(0-1)。
	 */
	public get opacity() {
		return this._opacity;
	}
	public set opacity(value) {
		this.setProp("opacity", value, true);
	}

	/**
	 * @property {number} scaleX
	 * 控件的宽度缩放比例。
	 */
	public get scaleX() {
		return this._scaleX;
	}
	public set scaleX(value) {
		this.setProp("scaleX", value, true);
	}

	/**
	 * @property {number} scaleY
	 * 控件的高度缩放比例。
	 */
	public get scaleY() {
		return this._scaleY;
	}
	public set scaleY(value) {
		this.setProp("scaleY", value, true);
	}


	/**
	 * @property {number} rotation
	 * 控件的旋转角度。
	 */
	public get rotation() {
		return this._rotation;
	}
	public set rotation(value) {
		this.setProp("rotation", value, true);
	}

	/**
	 * @property {number} sensitive
	 * 控件是否接受用户事件。
	 */
	public get sensitive() {
		return this._sensitive;
	}
	public set sensitive(value) {
		this.setProp("sensitive", value, true);
	}

	/**
	 * @property {number} pivotX
	 * 控件的X轴点，也就旋转点的X坐标。
	 */
	public get pivotX() {
		return this._pivotX;
	}
	public set pivotX(value) {
		this.setProp("pivotX", value, true);
	}

	/**
	 * @property {number} pivotY
	 * 控件的Y轴点，也就旋转点的Y坐标。
	 */
	public get pivotY() {
		return this._pivotY;
	}
	public set pivotY(value) {
		this.setProp("pivotY", value, true);
	}

	/**
	 * @property {string} tips
	 * 控件的提示文本。
	 */
	public get tips() {
		return this._tips;
	}
	public set tips(value) {
		this.setProp("tips", value, true);
	}

	/**
	 * @property {string} text
	 * 控件的文本。
	 */
	public get text() {
		return this._text;
	}
	public set text(value:any) {
		this.setProp("text", (value || value === 0) ? value.toString() : "", true);
	}

	/**
	 * @property {string} name
	 * 控件的名称。
	 */
	public get name() {
		return this._name;
	}
	public set name(value) {
		this.setProp("name", value, true);
	}
	
	/**
	 * @property {string} type 
	 * 控件的类型。
	 */
	public get type() {
		return this._type;
	}
	public set type(value) {
		this.setProp("type", value, true);
	}

	/**
	 * @property {string} id
	 * 控件的ID。
	 */
	public get id() {
		return this._id;
	}

	/**
	 * @property {any} userData
	 * 控件的应用数据。
	 */
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

	/**
	 * @property {Widget} parent
	 * 控件的父控件。
	 */
	public get parent() {
		return this._parent;
	}
	public set parent(value) {
		this._parent = value;
	}
	
	/**
	 * @property {IApplication} app 
	 * 应用程序。
	 */
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

	/**
	 * @property {Window} win 
	 * 控件所在的窗口。
	 */
	public get win() : Window {
		for(var iter:Widget = this; iter !== null; iter = iter._parent) {
			if(iter._isWindow) {
				return <Window>iter;
			}
		}

		return null;
	}

	/**
	 * @property {Array<Widget>} children
	 * 控件的全部子控件。
	 */
	public get children() : Array<Widget> {
		return this._children;
	}

	public get canvas() : Canvas {
		return this._canvas;
	}

	public isWindow() : boolean {
		return this._isWindow;
	}

	/**
	 * @property {number} leftPadding
	 * 控件的左边界。
	 */
	public get leftPadding() {
		return this._lp;
	}
	public set leftPadding(value) {
		this.setProp("lp", value, true);
	}

	/**
	 * @property {number} rightPadding
	 * 控件的右边界。
	 */
	public get rightPadding() {
		return this._rp;
	}
	public set rightPadding(value) {
		this.setProp("rp", value, true);
	}

	/**
	 * @property {number} topPadding
	 * 控件的上边界。
	 */
	public get topPadding() {
		return this._tp;
	}
	public set topPadding(value) {
		this.setProp("tp", value, true);
	}

	/**
	 * @property {number} bottomPadding
	 * 控件的下边界。
	 */
	public get bottomPadding() {
		return this._bp;
	}
	public set bottomPadding(value) {
		this.setProp("bp", value, true);
	}

	/**
	 * @property {number} padding
	 * 控件的边界。
	 */
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

	/**
	 * @method useBehavior
	 * 启用指定名称的Behavior
	 * @param {string} name Behavior的名称。 
	 * @param {any} options 选项。
	 * @return {Behavior}
	 */
	public useBehavior(name:string, options:any) : Behavior {
		var behavior : Behavior;
		if(!this._behaviors[name]) {
			behavior = BehaviorFactory.create(name, this, options);
			this._behaviors[name] = behavior;
		}else{
			behavior = this._behaviors[name];
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
	protected _sensitive : boolean;
	protected _tips : string;
	protected _text : string;
	protected _dirty : boolean;
	protected _name : string;
	protected _id : string;
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
	
	protected notifyChange(oldValue:any) {
		this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, {newValue:this.value, oldValue:oldValue}));
	}
	
	public setValue(value:boolean, notify:boolean, exclude:boolean) {
		var oldValue = this.value;

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
			this.notifyChange(oldValue);	
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
			_sensitive  : true,
			_tips : null,
			_text : null,
			_name : null,
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
		this._viewModel = null;
		this._dataBindingRule = null;

		this.onReset();
		this.set(options);
		this.onCreated();

		return this;
	}

	protected onFromJson(json:any) {
	}

	/**
	 * @method fromJson 
	 * 用JSON数据初始化当前控件。
	 * @param {any} json 数据。
	 */
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
				var child = WidgetFactory.create(childJson.type, {parent:this, app:this.app});
				child.fromJson(childJson);
				this._children.push(child);
			});
		}

		if(json.dataBindingRule) {
			this._dataBindingRule = BindingRule.createFromJson(json.dataBindingRule);
		}
		if(json.behaviors) {
			this.behaviorsFromJson(json.behaviors);
		}

		this.onFromJson(json);

		return this;
	}

	/**
	 * @method clone
	 * CLONE当前控件。
	 * @return {Widget} 新对象。
	 */
	public clone() : Widget {
		var json = this.toJson();
		var widget = WidgetFactory.createWithJson(json);
		
		return widget;
	}

	protected onToJson(json:any) {
	}

	private behaviorsToJson() {
		var json = {};
		var behaviors = this._behaviors;

		if(behaviors) {	
			for(var key in behaviors) {
				var value = behaviors[key];
				json[key] = value.toJson();
			}
		}
		
		return json;
	}
	
	private behaviorsFromJson(json) {
		var behaviors = this._behaviors;

		if(behaviors) {	
			for(var key in behaviors) {
				var value = behaviors[key];
				value.dispose();
			}
		}
		if(json) {
			for(var key in json) {
				this.useBehavior(key, json.options);
			}
		}

		return ;
	}

	/**
	 * @method toJson
	 * 序列化当前的控件到JSON数据。 
	 * @return {any} JSON数据。
	 */
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
			json.dataBindingRule = this._dataBindingRule.toJson();
		}

		if(this._behaviors) {
			json.behaviors = this.behaviorsToJson();
		}

		this.onToJson(json);

		return json;
	}

////////////////////////////////////////////	
	protected _templateItem : Widget;
	protected _templateItemJson : Widget;

	/**
	 * @property {Widget} templateItem
	 * 模板项。用于在数据绑定时，自动生成子控件的模板。
	 */
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
		this[prop] = value;
	}

	protected _dataBindingRule : BindingRule;
	protected _viewModel : IViewModel;

	/**
	 * @property {any} dataBindingRule
	 * 数据绑定规则。
	 */
	public set dataBindingRule(dataBindingRule:any) {
		this._dataBindingRule = BindingRule.create(dataBindingRule);
	}
	public get dataBindingRule() : any {
		return this._dataBindingRule;
	}
	
	/**
	 * @method updateExplicit
	 * 显式的更新ViewModel。
	 */
	public updateExplicit() : Widget {
		if(this._dataBindingRule) {
			this.onUpdateToDataSource();
		}

		this.children.forEach((child:Widget) => {
			child.updateExplicit();
		});

		return this;
	}

	protected viewModelChangeFunc = function(evt) {
		var viewModel = this._viewModel;
		var dataBindingRule = this._dataBindingRule;
		
		if(dataBindingRule && viewModel) {
			this.onBindData(viewModel, dataBindingRule);
		}
	}.bind(this);

	protected removeBinding() {
		var viewModel = this._viewModel;
		var dataBindingRule = this._dataBindingRule;
		
		if(dataBindingRule && viewModel) {
			viewModel.offChange(this.viewModelChangeFunc);
		}
		this._viewModel = null;
		this._dataBindingRule = null;
	}

	protected onBeforeBindData() {
	}
	
	protected onAfterBindData() {
	}

	/**
	 * @method bindData
	 * 绑定数据。
	 * @param {IViewModel} viewModel View Model。 
	 * @return {Widget} 控件本身。
	 */
	public bindData(viewModel:IViewModel) : Widget {
		var dataBindingRule = this._dataBindingRule;
		this._viewModel = viewModel;

		this.onBeforeBindData();
		if(dataBindingRule && viewModel) {
			var bindingMode = viewModel.bindingMode;
			
			this.onBindCommand(viewModel, dataBindingRule);
			if(bindingMode !== BindingMode.ONE_WAY_TO_SOURCE) {
				this.onBindData(viewModel, dataBindingRule);
			}

			if(bindingMode === BindingMode.TWO_WAY || bindingMode === BindingMode.ONE_WAY_TO_SOURCE) {
				this.watchTargetChange(dataBindingRule);
			}

			if(bindingMode !== BindingMode.ONE_TIME && bindingMode !== BindingMode.ONE_WAY_TO_SOURCE) {
				viewModel.onChange(this.viewModelChangeFunc);
			}

			this._isEnableFunc = function() {
				var enable = true;
				var vm = this._viewModel;
				
				if(vm) {
					dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
						var source = item.source;
						if(source.type === BindingCommandSource.TYPE) {
							var commandSource = <BindingCommandSource>source;
							enable = enable && vm.canExecute(commandSource.command)	
						}
					});
				}

				return enable;
			}
		}

		this.bindDataToChildren(viewModel);
		if(viewModel.isCollection && this._templateItemJson) {
			var collectionViewModel = <ICollectionViewModel>viewModel;
			collectionViewModel.onItemsChange((evt:Events.ChangeEvent) => {
				this.bindDataToChildren(viewModel);
			});
		}
		this.onAfterBindData();

		return this;
	}
	
	protected bindDataToChildren(viewModel:IViewModel) {
		if(viewModel.isCollection) {
			if(this._templateItemJson) {	
				//对于集合viewModel，如果有模板项存在，则动态生成子控件。
				var json = this._templateItemJson;
				var collectionViewModel = <ICollectionViewModel>viewModel;
				var n = collectionViewModel.total;

				this.removeAllChildren();
				for(var i = 0; i < n; i++) {
					var itemViewModel = collectionViewModel.getItemViewModel(i);
					var child = this.addChildWithTemplate(true);
					child.bindData(itemViewModel);
				}
				this.relayoutChildren();
			}else{
				//对于集合viewModel，如果没有模板项存在，则绑定集合viewModel当前项到子控件。
				this._children.forEach((child:Widget) => {
					child.bindData(viewModel);
				});
			}
		}else{
			//对于非集合viewModel，按正常绑定子控件。
			this._children.forEach((child:Widget) => {
				child.bindData(viewModel);
			});
		}
	}

	/*
	 * 绑定命令，注册相应的事件处理函数。
	 */
	protected onBindCommand(viewModel:IViewModel, dataBindingRule:any) {
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			var source = item.source;
			if(source.type === BindingCommandSource.TYPE) {
				var commandSource = <BindingCommandSource>source;
				var type = Events.mapToEvent(prop);
				if(type) {
					var command = <any>commandSource.command;
					if(typeof command == "object" && command.path) {
						commandSource.command = viewModel.getProp(command.path); 		
					}
					
					var commandArgs = <any>commandSource.commandArgs;
					if(typeof commandArgs == "object" && commandArgs.path) {
						commandSource.commandArgs = viewModel.getProp(commandArgs.path); 		
					}

					if(commandSource.eventHandler) {
						this.off(type, commandSource.eventHandler);
					}

					commandSource.eventHandler = function(evt:any) {
						var args = commandSource.commandArgs || evt;
						viewModel.execCommand(commandSource.command, args);
					}

					this.on(type, commandSource.eventHandler);
				}else{
					console.log(prop+" is not supported yet.");
				}
			}
		});
	}

	/*
	 * 把数据显示到界面上。
	 */
	protected onBindData(viewModel:IViewModel, dataBindingRule:any) {
		dataBindingRule.forEach((prop:string, item:BindingRuleItem) => {
			var source = item.source;
			if(source.type === BindingDataSource.TYPE) {
				var dataSource = <BindingDataSource>source;
				var value = dataSource.value;
				var bindingMode = dataSource.mode || BindingMode.TWO_WAY;
				
				if(value === undefined && dataSource.path) {
					value = viewModel.getProp(dataSource.path, dataSource.converter);
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

	/*
	 * 把界面数据更新到模型。
	 */
	protected updateValueToSource(value:any, dataSource:BindingDataSource, oldValue?:any) {
		var result = this._viewModel.setPropEx(dataSource, value, oldValue);
		this.onInvalidInput(result.code ? result.message : null);
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

	protected hitTest(x:number, y:number) : HitTestResult {
		return this.doHitTest(x, y, Rect.rect.init(0, 0, this.w+1, this.h+1));
	}
	
	protected doHitTest(x:number, y:number, r:Rect) : HitTestResult {
		return r.containsPoint(x, y) ? HitTestResult.MM : HitTestResult.NONE;
	}
	
	protected selfHitTest(x:number, y:number) : HitTestResult {
		return this.hitTest(x, y);	
	}

	private static ID = 10000;
};

