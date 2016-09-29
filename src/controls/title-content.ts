
import {Rect} from "../rect";
import {Widget} from "./widget";
import Events = require("../events");
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleContent extends Widget {
	protected _saveH : number;
	protected _movable : boolean;
	protected _collapsed : boolean;
	protected _titleHeight : number;
	protected _titleWidget : Widget;
	protected _contentWidget : Widget;

	public set titleHeight(value:number) {
		this._titleHeight = value;
	}
	public get titleHeight() : number {
		return this._titleHeight;
	}

	public set movable(value:boolean) {
		this._movable = value;
	}
	public get movable():boolean {
		return this._movable;
	}
	
	public set collapsed(value:boolean) {
		if(this._inited) {
			if(!this._collapsed) {
				this._saveH = this.h;
			}
			this._collapsed = value;
			this.relayoutChildren();
		}else{
			this._collapsed = value;
		}
	}
	public get collapsed():boolean {
		return this._collapsed;
	}

	public get titleWidget() : Widget {
		return this._titleWidget;
	}
	public set titleWidget(value:Widget) {
		if(this._titleWidget) {
			this.removeChild(this._titleWidget);
		}
		if(value) {
			this.addChild(value);
		}
		this._titleWidget = value;
	}

	public get contentWidget() : Widget {
		return this._contentWidget;
	}
	public set contentWidget(value:Widget) {
		if(this._contentWidget) {
			this.removeChild(this._contentWidget);
		}
		if(value) {
			this.addChild(value);
		}
		this._contentWidget = value;
	}

	protected onReset() {
		super.onReset();
		this._saveH = 0;
		this._movable = false;
		this._titleHeight = 30;
		this._collapsed = false;
		this._titleWidget = null;
		this._contentWidget = null;
	}

	public onInit() {
		super.onInit();
		this._saveH = this.h;

		if(this._movable) {
			this._titleWidget.useBehavior("movable", {moveParent:true});
		}
	}

	public relayoutChildren() : Rect {
		if(!this._saveH) {
			this._saveH = this.h; 
		}

		this.h = this._collapsed ? (this.titleHeight + this.topPadding + this.bottomPadding) : this._saveH;

		this.requestRedraw();
		var r = this.getLayoutRect();
		var titleWidget = this._titleWidget;
		var contentWidget = this._contentWidget;

		var h = this.titleHeight;
		if(titleWidget) {
			titleWidget.moveResizeTo(r.x, r.y, r.w, h);
			titleWidget.relayoutChildren();
		}

		if(contentWidget) {
			if(this._collapsed) {
				contentWidget.visible = false;
			}else{
				var y = r.y + h;
				h = r.h - h;
				contentWidget.visible = true;
				contentWidget.moveResizeTo(r.x, y, r.w, h);
				contentWidget.relayoutChildren();
			}
		}

		return r;
	}

	constructor() {
		super(TitleContent.TYPE);
	}

	public static TYPE = "title-content";
	private static recycleBin = new RecyclableCreator<TitleContent>(function() {return new TitleContent()});
	public static create(options?:any) : TitleContent {
		return <TitleContent>TitleContent.recycleBin.create().reset(TitleContent.TYPE, options);
	}
};

WidgetFactory.register(TitleContent.TYPE, TitleContent.create);

