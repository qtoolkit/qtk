
import {Rect} from "../base/rect";
import {Point} from "../base/point";
import {Style} from "../base/style";
import {Widget} from "./widget";
import Events = require("../base/events");
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

/**
 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
 */
export class TitleContent extends Widget {
	protected _animating : boolean;
	protected _collapsed : boolean;
	protected _titleWidget : Widget;
	protected _contentWidget : Widget;

	/**
	 * titleH 标题控件的高度。
	 */
	protected _th : number;
	public set titleH(value:number) {
		this._th = value;
	}
	public get titleH() : number {
		return this._th;
	}
	
	/**
	 * titleH 内容控件的高度。
	 */
	protected _ch : number;
	public set contentH(value:number) {
		this._ch = value;
	}
	public get contentH() : number {
		return this._ch;
	}

	/**
	 * movable 决定是否能通过拖动标题控件来拖动整个TitleContent控件。
	 */
	protected _movable : boolean;
	public set movable(value:boolean) {
		this._movable = value;
	}
	public get movable():boolean {
		return this._movable;
	}

	/**
	 * 折叠或展开控件。
	 * @param duration 动画时间(可选)。
	 * @param onStep 动画执行期间单步的回调函数(可选)。
	 * @returns 返回控件本身。
	 */
	public triggerCollapsed(duration?:number, onStep?:Function) : Widget {
		var value = !this._collapsed;
		if(this._inited) {
			if(duration > 0) {
				var minH = this.topPadding + this.bottomPadding + this.titleH;
				var maxH = minH + this.contentH;
				var h = value ? minH : maxH;
				
				this._collapsed = false;
				this.relayoutChildren();
				this._animating = true;	
				this.h = value ? maxH : minH;
				this.resizeTo(this.w, h, duration).onComplete(evt=> {
					this.collapsed = value;
					this._animating = false;	
				}).onUpdate(function() {
					if(onStep) {
						onStep();
					}
				});
			}else{
				this.collapsed = value;
				this.relayoutChildren();
			}
		}else{
			this._collapsed = value;
		}

		return this;
	}

	/**
	 * collapsed 控件当前折叠或展开的状态。
	 */
	public set collapsed(value:boolean) {
		if(this._inited) {
			if(this._collapsed !== value) {
				this._collapsed = value;

				if(value) {
					this.dispatchEvent(Events.createAnyEvent(Events.COLLAPSE));
				}else{
					this.dispatchEvent(Events.createAnyEvent(Events.EXPAND));
				}
			}
		}else{
			this._collapsed = value;
		}
		
		this.reComputeH();
	}

	public get collapsed():boolean {
		return this._collapsed;
	}

	/**
	 * 标题控件。
	 */
	public get titleWidget() : Widget {
		return this._titleWidget;
	}
	public set titleWidget(value:Widget) {
		if(this._titleWidget) {
			this.removeChild(this._titleWidget);
		}
		if(value) {
			this.addChild(value);
			if(!this.titleH) {
				this.titleH = value.h;
			}
		}
		this._titleWidget = value;
	}

	/**
	 * 内容控件。
	 */
	public get contentWidget() : Widget {
		return this._contentWidget;
	}
	public set contentWidget(value:Widget) {
		if(this._contentWidget) {
			this.removeChild(this._contentWidget);
		}
		if(value) {
			this.addChild(value);
			if(!this.contentH) {
				this.contentH = value.h;
			}
		}
		this._contentWidget = value;
	}

	protected drawChildren(ctx:any) : Widget {
		ctx.save();
		ctx.beginPath();
		ctx.rect(0, 0, this.w, this.h);
		ctx.clip();
		super.drawChildren(ctx);
		ctx.restore();

		return this;
	}

	public onInit() {
		super.onInit();

		if(this._movable) {
			this._titleWidget.useBehavior("movable", {moveParent:true});
		}
	}

	protected reComputeH() {
		var contentH = (!this._collapsed ? this.contentH : 0);
		this.h = contentH + this.titleH + this.topPadding + this.bottomPadding;
	}

	public relayoutChildren() : Rect {
		this.requestRedraw();
		if(this._animating) {
			return this.getLayoutRect();
		}

		if(this.contentH < 1) {
			this.contentH = this.h - this.topPadding - this.bottomPadding - this.titleH;
		}

		this.reComputeH();
		var r = this.getLayoutRect();
		var titleWidget = this._titleWidget;
		var contentWidget = this._contentWidget;

		if(titleWidget) {
			titleWidget.moveResizeTo(r.x, r.y, r.w, this.titleH);
			titleWidget.relayoutChildren();
		}

		if(contentWidget) {
			if(this._collapsed) {
				contentWidget.visible = false;
			}else{
				var y = r.y + this.titleH;
				contentWidget.visible = true;
				contentWidget.moveResizeTo(r.x, y, r.w, this.contentH);
				contentWidget.relayoutChildren();
			}
		}

		return r;
	}
	
	protected onReset() {
		super.onReset();
		this._movable = false;
		this._collapsed = false;
		this._titleWidget = null;
		this._contentWidget = null;
	}


	constructor() {
		super(TitleContent.TYPE);
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_movable:false, _th:30, _ch:0});

	protected getDefProps() : any {
		return TitleContent.defProps;
	}

	public static TYPE = "title-content";
	private static rBin = WidgetRecyclableCreator.create(TitleContent);
	public static create(options?:any) : TitleContent {
		return <TitleContent>TitleContent.rBin.create(options);
	}
};

WidgetFactory.register(TitleContent.TYPE, TitleContent.create);

