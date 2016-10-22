
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 可滚的分组。 
 */
export abstract class PassiveScrollableGroup extends Widget {
	protected _ox : number;
	protected _oy : number;

	public set offsetX(value:number) {
		this._ox = value;
	}
	
	public get offsetX() {
		return this._ox;
	}
	
	public set offsetY(value:number) {
		this._oy = value;
	}
	
	public get offsetY() {
		return this._oy;
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

	constructor(type:string) {
		super(type);
	}

	protected dispatchClick(evt:any) {
		this.offsetPointerEvent(evt);
		super.dispatchClick(evt);
		this.unOffsetPointerEvent(evt);
	}
	
	protected dispatchDblClick(evt:any) {
		this.offsetPointerEvent(evt);
		super.dispatchDblClick(evt);
		this.unOffsetPointerEvent(evt);
	}
	
	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerDown(evt, ctx);
		this.unOffsetPointerEvent(evt);
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerMove(evt, ctx);
		this.unOffsetPointerEvent(evt);
	}

	protected dispatchPointerUp(evt:Events.PointerEvent) {
		this.offsetPointerEvent(evt);
		super.dispatchPointerUp(evt);
		this.unOffsetPointerEvent(evt);
	}
};


