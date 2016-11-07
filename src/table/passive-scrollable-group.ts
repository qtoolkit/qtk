
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 被动式可滚分组。滚动区域由外面设置。 
 */
export abstract class PassiveScrollableGroup extends Widget {
	/**
	 * X的偏移。
	 */
	public set offsetX(value:number) {
		this._ox = value;
	}
	public get offsetX() {
		return this._ox;
	}
	protected _ox : number;
	
	/**
	 * Y的偏移。
	 */
	public set offsetY(value:number) {
		this._oy = value;
	}
	public get offsetY() {
		return this._oy;
	}
	protected _oy : number;
	
	constructor(type:string) {
		super(type);
	}

	public relayoutChildren() : Rect {
		if(!this.w || !this.h) {
			return null;
		}

		var x = this.leftPadding;
		var y = this.topPadding;
		if(this.w > this.h) {
			var h = this.clientH;

			this.children.forEach((child:Widget) => {
				child.moveResizeTo(x, y, child.w, h);
				child.relayoutChildren();
				x += child.w;
			});
		}else{
			var w = this.clientW;
			this.children.forEach((child:Widget) => {
				child.moveResizeTo(x, y, w, child.h);
				child.relayoutChildren();
				y += child.h;
			});
		}

		return this.getLayoutRect();
	}
	
	protected doDrawChildren(ctx:any) {
		super.drawChildren(ctx);
	}
	
	protected drawChildren(ctx:any) : Widget {
		var ox = this._ox;
		var oy = this._oy;
		var x = this.leftPadding;
		var y = this.topPadding;
		var w = this.w - x - this.rightPadding;
		var h = this.h - y - this.bottomPadding;
		
		ctx.save();
		ctx.beginPath();
		ctx.rect(x, y, w, h);
		ctx.clip();
		
		ctx.translate(-ox, -oy);
		this.doDrawChildren(ctx);
		ctx.restore();

		return this;
	}
	
	/*
	 * 在处理指针事件前，先加上滚动的偏移。
	 */
	protected offsetPointerEvent(evt:Events.PointerEvent) {
		evt.x += this._ox;
		evt.y += this._oy;
	}
	
	/*
	 * 在处理指针事件后，再减去滚动的偏移。
	 */
	protected unOffsetPointerEvent(evt:Events.PointerEvent) {
		evt.y -= this._oy;
	}

	protected onReset() {
		super.onReset();
		this._ox = 0;
		this._oy = 0;
	}

	public dispatchClick(evt:any) {
		this.offsetPointerEvent(evt);
		super.dispatchClick(evt);
		this.unOffsetPointerEvent(evt);
	}
	
	public dispatchDblClick(evt:any) {
		this.offsetPointerEvent(evt);
		super.dispatchDblClick(evt);
		this.unOffsetPointerEvent(evt);
	}
	
	public dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerDown(evt, ctx);
		this.unOffsetPointerEvent(evt);
	}

	public dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerMove(evt, ctx);
		this.unOffsetPointerEvent(evt);
	}

	public dispatchPointerUp(evt:Events.PointerEvent) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerUp(evt);
		this.unOffsetPointerEvent(evt);
	}
};


