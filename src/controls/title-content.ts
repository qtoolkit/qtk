
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {Widget} from "./widget";
import Events = require("../events");
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
 */
export class TitleContent extends Widget {
	protected _animating : boolean;
	protected _titleHeight : number;
	protected _contentHeight : number;
	
	protected _movable : boolean;
	protected _collapsed : boolean;
	protected _titleWidget : Widget;
	protected _contentWidget : Widget;

	/**
	 * titleHeight 标题控件的高度。
	 */
	public set titleHeight(value:number) {
		this._titleHeight = value;
	}
	public get titleHeight() : number {
		return this._titleHeight;
	}
	
	/**
	 * titleHeight 内容控件的高度。
	 */
	public set contentHeight(value:number) {
		this._contentHeight = value;
	}
	public get contentHeight() : number {
		return this._contentHeight;
	}

	/**
	 * movable 决定是否能通过拖动标题控件来拖动整个TitleContent控件。
	 */
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
				var minH = this.topPadding + this.bottomPadding + this.titleHeight;
				var maxH = minH + this.contentHeight;
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
				this.relayoutChildren();

				if(value) {
					this.dispatchEvent(Events.createAnyEvent(Events.COLLAPSE));
				}else{
					this.dispatchEvent(Events.createAnyEvent(Events.EXPAND));
				}
			}
		}else{
			this._collapsed = value;
		}
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
			if(!this._titleHeight) {
				this._titleHeight = value.h;
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
			if(!this._contentHeight) {
				this._contentHeight = value.h;
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

	protected onReset() {
		super.onReset();
		this._movable = false;
		this._titleHeight = 30;
		this._collapsed = false;
		this._titleWidget = null;
		this._contentWidget = null;
		this._contentHeight = 0;
	}

	public onInit() {
		super.onInit();

		if(this._movable) {
			this._titleWidget.useBehavior("movable", {moveParent:true});
		}
	}

	public relayoutChildren() : Rect {
		this.requestRedraw();
		if(this._animating) {
			return this.getLayoutRect();
		}

		if(this._contentHeight < 1) {
			this._contentHeight = this.h - this.topPadding - this.bottomPadding - this.titleHeight;
		}

		var h = this.titleHeight + this.topPadding + this.bottomPadding;
		if(!this._collapsed) {
			h += this.contentHeight;
		}
		
		this.h = h;
		var r = this.getLayoutRect();
		var titleWidget = this._titleWidget;
		var contentWidget = this._contentWidget;

		if(titleWidget) {
			titleWidget.moveResizeTo(r.x, r.y, r.w, this.titleHeight);
			titleWidget.relayoutChildren();
		}

		if(contentWidget) {
			if(this._collapsed) {
				contentWidget.visible = false;
			}else{
				var y = r.y + this.titleHeight;
				contentWidget.visible = true;
				contentWidget.moveResizeTo(r.x, y, r.w, this.contentHeight);
				contentWidget.relayoutChildren();
			}
		}

		return r;
	}

	constructor() {
		super(TitleContent.TYPE);
	}

	public static TYPE = "title-content";
	private static rBin = new RecyclableCreator<TitleContent>(function() {return new TitleContent()});
	public static create(options?:any) : TitleContent {
		return <TitleContent>TitleContent.rBin.create().reset(TitleContent.TYPE, options);
	}
};

WidgetFactory.register(TitleContent.TYPE, TitleContent.create);

