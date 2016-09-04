/// <reference path="../typings/globals/scroller/index.d.ts"/>
/// <reference path="../typings/globals/tween.js/index.d.ts"/>

import {Point} from "./point";
import {Rect} from "./rect";
import {Style} from "./style";
import {Graphics} from "./graphics";
import {Scroller} from "scroller";
import Events = require("./events");
import TWEEN = require("tween.js");
import {MatrixStack} from "./matrix-stack";
import {WidgetFactory} from "./widget-factory";
import {Window} from "./window";
import {Widget, WidgetState, HitTestResult} from "./widget";
import {RecyclableCreator} from "./recyclable-creator";

export class ScrollView extends Widget {
	protected _ox : number;
	protected _oy : number;
	protected _cw : number;
	protected _ch : number;
	protected _touches : any;
	protected _saveOX : number;
	protected _saveOY : number;
	protected _scroller : Scroller;
	protected _vScrollBarRect : Rect;
	protected _hScrollBarRect : Rect;
	protected _vScrollDraggerRect : Rect;
	protected _hScrollDraggerRect : Rect;
	
	protected _dragToScroll : boolean;
	protected _slideToScroll : boolean;
	protected _scrollBarOpacity : number;
	protected _scrollerOptions : any;
	protected _scrollBarOptions : ScrollBarOptions;
	
	protected _pointerInBar : boolean;
	protected _pointerInVScrollBarRectUp : boolean;
	protected _pointerInVScrollBarRectDown : boolean;
	protected _pointerInHScrollBarRectLeft : boolean;
	protected _pointerInHScrollBarRectRight : boolean;
	protected _pointerInVScrollDraggerRect : boolean;
	protected _pointerInHScrollDraggerRect : boolean;

	public set scrollBarOpacity(value:number) {
		this._scrollBarOpacity = value;
		this.requestRedraw();
	}
	public get scrollBarOpacity() : number {
		return this._scrollBarOpacity;
	}

	public set dragToScroll(value:boolean) {
		this._dragToScroll = value;
	}
	public get dragToScroll() : boolean {
		return this._dragToScroll;
	}

	public set slideToScroll(value:boolean) {
		this._slideToScroll = value;
		if(!this._scroller) {
			this.initScroller(this._scrollerOptions);
		}
	}

	public get slideToScroll() : boolean {
		return this._slideToScroll;
	}

	public set scrollBarOptions(value:ScrollBarOptions) {
		this._scrollBarOptions = value;
	}

	public get scrollBarOptions() : ScrollBarOptions {
		return this._scrollBarOptions;
	}

	public isVScrollBarVisible() : boolean {
		var visibility = this.scrollBarOptions.vBarVisibility;
		switch(visibility) {
			case ScrollerBarVisibility.INVISIBLE: {
				return false;
			}
			case ScrollerBarVisibility.ALWAYS : {
				return true;
			}
			default: {
				return (this.h < this.contentHeight);
			}
		}
	}
	
	public isHScrollBarVisible() : boolean {
		var visibility = this.scrollBarOptions.hBarVisibility;
		switch(visibility) {
			case ScrollerBarVisibility.INVISIBLE: {
				return false;
			}
			case ScrollerBarVisibility.ALWAYS : {
				return true;
			}
			default: {
				return (this.w < this.contentWidth);
			}
		}
	}

	public set offsetX(value:number) {
		if(!this.slideToScroll) {
			if(this.dragToScroll) {
				value = Math.min(Math.max(0, value), this._cw - this.w);
			}
		}

		this.setAttr("ox", value, true);
	}

	public get offsetX() {
		return this._ox;
	}

	public set offsetY(value:number) {
		if(!this.slideToScroll) {
			if(this.dragToScroll) {
				value = Math.min(Math.max(0, value), this._ch - this.h);
			}
		}
		this.setAttr("oy", value, true);
	}
	public get offsetY() {
		return this._oy;
	}

	public set contentWidth(value:number) {
		this.setAttr("cw", value, true);
	}
	public get contentWidth() {
		return this._cw;
	}

	public set contentHeight(value:number) {
		this.setAttr("ch", value, true);
	}
	public get contentHeight() {
		return this._ch;
	}

	protected selfHitTest(x:number, y:number, ctx:MatrixStack) : HitTestResult {
		return super.selfHitTest(x-this._ox, y-this._oy, ctx);
	}

	protected offsetPointerEvent(evt:Events.PointerEvent) {
		evt.x += this._ox;
		evt.y += this._oy;
	}
	protected unOffsetPointerEvent(evt:Events.PointerEvent) {
		evt.x -= this._ox;
		evt.y -= this._oy;
	}

	protected pointerEventToTouches(evt:Events.PointerEvent) {
		var touch = this._touches[0];
		touch.id = evt.id;
		touch.pageX = evt.x;
		touch.pageY = evt.y;

		return this._touches;
	}

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		this._pointerInBar = false;
		this._scrollBarOpacity = 1;

		if(this.dragToScroll) {
			this._saveOX = this._ox;
			this._saveOY = this._oy;
			var win = this.win;
			var p = this.toLocalPoint(Point.point.copy(win.pointerPosition));
			if(p.isInRect(this._vScrollBarRect)) {
				if(p.isInRect(this._vScrollDraggerRect)) {
					this._pointerInVScrollDraggerRect = true;
				}else{
					if(p.y < this._vScrollDraggerRect.y) {
						this._pointerInVScrollBarRectUp = true;
					}else {
						this._pointerInVScrollBarRectDown = true;
					}
				}
				this._pointerInBar = true;
			}

			if(p.isInRect(this._hScrollBarRect)) {
				if(p.isInRect(this._hScrollDraggerRect)) {
					this._pointerInHScrollDraggerRect = true;
				}else{
					if(p.x < this._hScrollDraggerRect.x) {
						this._pointerInHScrollBarRectLeft = true;
					}else{
						this._pointerInHScrollBarRectRight = true;
					}
				}
				this._pointerInBar = true;
			}
		}

		if(!this._pointerInBar && this.slideToScroll) {
			this.scroller.doTouchStart(this.pointerEventToTouches(evt), evt.timeStamp);
		}

		this.offsetPointerEvent(evt);
		super.dispatchPointerDown(evt, ctx);
		this.unOffsetPointerEvent(evt);
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		if(evt.pointerDown) {
			if(this.dragToScroll) {
				if(this._pointerInVScrollDraggerRect) {
					var dy = evt.y - evt.pointerDownY;
					this.offsetY = this._saveOY + (dy/this.h)*this._ch;
				}
				if(this._pointerInHScrollDraggerRect) {
					var dx = evt.x - evt.pointerDownX;
					this.offsetX = this._saveOX + (dx/this.w)*this._cw;
				}
			}

			if(!this._pointerInBar && this.slideToScroll) {
				this.scroller.doTouchMove(this.pointerEventToTouches(evt), evt.timeStamp);
			}
		}
		this.offsetPointerEvent(evt);
		super.dispatchPointerMove(evt, ctx);
		this.unOffsetPointerEvent(evt);

		this.requestRedraw();
	}

	protected dispatchPointerUp(evt:Events.PointerEvent) {
		if(this.dragToScroll) {
			if(this._pointerInVScrollBarRectUp) {
				this.offsetY -= this.h;
			}else if(this._pointerInVScrollBarRectDown) {
				this.offsetY += this.h;
			}else if(this._pointerInHScrollBarRectLeft) {
				this.offsetX -= this.w;
			}else if(this._pointerInHScrollBarRectRight) {
				this.offsetX += this.w;
			}
			this._pointerInVScrollBarRectUp    = false;
			this._pointerInVScrollBarRectDown  = false;
			this._pointerInHScrollBarRectLeft  = false;
			this._pointerInHScrollBarRectRight = false;
			this._pointerInVScrollDraggerRect  = false;
			this._pointerInHScrollDraggerRect  = false;
		}

		if(!this._pointerInBar && this.slideToScroll) {
			this.scroller.doTouchEnd(evt.timeStamp);
		}

		this._pointerInBar = false;
		this.offsetPointerEvent(evt);
		super.dispatchPointerUp(evt);
		this.unOffsetPointerEvent(evt);
	}

	protected updateScrollerDimensions(w:number, h:number, contentWidth:number, contentHeight:number){
		if(this._slideToScroll) {
			this.scroller.setDimensions(w, h, contentWidth, contentHeight);
		}
	}

	protected get scroller() : Scroller {
		return this._scroller;
	}

	public hideScrollBar() {
		if(!this.dragToScroll) {
			var tween = new TWEEN.Tween(this);
			tween.to({scrollBarOpacity:0}, 500).start()
			tween.onComplete(function() {
				this.scrollBarOpacity = 0;
			});
			this.requestRedraw();
		}
	}

	public handleScroller(left:number, top:number) {
		this.offsetX = left;
		this.offsetY = top;
	}

	public initScroller(options:any) {
		var me = this;
		options.scrollingComplete = function() {
			me.hideScrollBar();
		}

		this._scroller = new Scroller(function(left:number, top:number){
			me.handleScroller(left, top);
		}, options);

		this.on(Events.CHANGE, (evt:Events.ChangeEvent) => {
			var attr = evt.attr;
			var value = evt.newValue;
			if(attr === "w" || attr === "h" || attr === "cw" || attr === "ch") {
				this.updateScrollerDimensions(this.w, this.h, this.contentWidth, this.contentHeight);
			}
		});
	}

	protected drawScrollBarV(ctx:any, hBarVisible:boolean){
		var w = this.w;
		var h = this.h;
		var options = this.scrollBarOptions;
		
		var barY = 0;
		var barH = h;
		var barW = options.size;
		var barX = w - barW;
		var barColor = options.backGroundColor;

		var r = options.roundRadius;	
		var draggerY = (this.offsetY/this.contentHeight) * h;
		var draggerH = Math.min(h, h*h/this.contentHeight);
		var draggerW = options.draggerSize;
		var draggerX = barX + ((barW - draggerW) >> 1);
		var draggerColor = options.foreGroundColor;
		if(hBarVisible) {
			draggerY = Math.min(draggerY, h - barW - draggerH);
		}
	
		var win : Window = this.win;
		var p = this.toLocalPoint(Point.point.copy(win.pointerPosition));
		if(p.isIn(draggerX, draggerY, draggerW, draggerH)) {
			draggerColor = options.foreGroundOverColor;
		}
		
		this._vScrollBarRect.init(barX, barY, barW, barH);
		this._vScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);

		Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
		Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);
		var lineColor = options.lineColor;
		var lineWidth = options.lineWidth;
		Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, barX, hBarVisible ? barH-barW : barH);		
	}

	protected drawScrollBarH(ctx:any, vBarVisible){
		var w = this.w;
		var h = this.h;
		var options = this.scrollBarOptions;
		var barX = 0;
		var barW = w;
		var barH = options.size;
		var barY = h - barH;
		var barColor = options.backGroundColor;

		var r = options.roundRadius;	
		var draggerX = (this.offsetX/this.contentWidth) * w;
		var draggerW = Math.min(w, w*w/this.contentWidth);
		var draggerH = options.draggerSize;
		var draggerY = barY + ((barH - draggerH) >> 1);
		var draggerColor = options.foreGroundColor;

		if(vBarVisible) {
			draggerX = Math.min(draggerX, w - barH - draggerW);
		}

		var win : Window = this.win;
		var p = this.toLocalPoint(Point.point.copy(win.pointerPosition));
		if(p.isIn(draggerX, draggerY, draggerW, draggerH)) {
			draggerColor = options.foreGroundOverColor;
		}

		this._hScrollBarRect.init(barX, barY, barW, barH);
		this._hScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);

		Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
		Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);

		var lineColor = options.lineColor;
		var lineWidth = options.lineWidth;
		Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, vBarVisible ? barW-barH : barW, barY);		
	}

	protected drawScrollBar(ctx:any){
		var hBarVisible = this.isHScrollBarVisible();
		var vBarVisible = this.isVScrollBarVisible();

		if(this._scrollBarOpacity > 0) {
			var opacity = ctx.globalAlpha;
			ctx.globalAlpha = this._scrollBarOpacity;
			if(vBarVisible) {
				this.drawScrollBarV(ctx, hBarVisible);
			}

			if(hBarVisible) {
				this.drawScrollBarH(ctx, vBarVisible);
			}
			ctx.globalAlpha = opacity;
		}
	}

	protected drawChildren(ctx:any) : Widget {
		var ox = this._ox;
		var oy = this._oy;
		ctx.beginPath();
		ctx.rect(0, 0, this.w, this.h);
		ctx.clip();
		
		ctx.translate(-ox, -oy);
		super.drawChildren(ctx);
		ctx.translate(ox, oy);
		this.drawScrollBar(ctx);

		return this;
	}

	public scrollTo(offsetX:number, offsetY:number, duration:number) : TWEEN.Tween {
		if(duration > 0) {
			var tween = new TWEEN.Tween(this);
			tween.to({ offsetX : offsetX, offsetY : offsetY}, duration).start();

			return tween;
		}else{
			this.offsetX = offsetX;
			this.offsetY = offsetY; 
			return null;
		}
	}

	public onWheel(evt:Events.WheelEvent) {
		this.offsetY -= evt.delta/10;
	}

	public reset(type:string) : Widget {
		super.reset(type);

		this._ox = 0;
		this._oy = 0;
		this._cw = 0;
		this._ch = 0;
		this._scrollerOptions = {
				scrollingX:true, 
				scrollingY:true,
				decelerationRate:0.95, 
				penetrationAcceleration:0.08
		};
		
		this._scroller = null;
		this._scrollBarOpacity = 1;
		this._scrollBarOptions = new ScrollBarOptions();
		this._touches = [{pageX:0, pageY:0, id:0}];
		this._hScrollBarRect = Rect.create(0, 0, 0, 0);
		this._vScrollBarRect = Rect.create(0, 0, 0, 0);
		this._hScrollDraggerRect = Rect.create(0, 0, 0, 0);
		this._vScrollDraggerRect = Rect.create(0, 0, 0, 0);

		this.on(Events.WHEEL, evt => {
			this.onWheel(evt);
		});

		return this;
	}

	constructor() {
		super(ScrollView.TYPE);
	}

	public dispose() {
		super.dispose();
		ScrollView.recyclbale.recycle(this);
	}

	public static TYPE = "scroll-view";
	private static recyclbale = new RecyclableCreator<ScrollView>(function() {return new ScrollView()});
	public static create() : Widget {
		return ScrollView.recyclbale.create().reset(ScrollView.TYPE);
	}
};

export enum ScrollerBarVisibility {
	INVISIBLE,
	AUTO,
	ALWAYS
};

export class ScrollBarOptions {
	public size : number;
	public roundRadius : number;
	public draggerSize : number;
	public backGroundColor : string;
	public foreGroundColor : string;
	public foreGroundOverColor : string;
	public lineColor : string;
	public lineWidth : number;
	public hBarVisibility : ScrollerBarVisibility;
	public vBarVisibility : ScrollerBarVisibility;
	
	constructor() {
		this.size = 12;
		this.draggerSize = 8;
		this.roundRadius = 4;
		this.lineColor = "#E7E7E7";
		this.lineColor = "red";
		this.lineWidth = 0.5;
		this.backGroundColor = "#FAFAFA";
		this.foreGroundColor = "#c1c1c1";
		this.foreGroundOverColor = "#818181";
		this.hBarVisibility = ScrollerBarVisibility.AUTO; 
		this.vBarVisibility = ScrollerBarVisibility.AUTO; 
	}
};


WidgetFactory.register(ScrollView.TYPE, ScrollView.create);

