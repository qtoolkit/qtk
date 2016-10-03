
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {Widget} from "./widget";
import Events = require("../events");
import {TitleContent} from "./title-content";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 可折叠的标题控件，点击折叠图片或双击时折叠或展开。
 * 只能用于TitleContent的titleWidget。
 *
 */
export class CollapsableTitle extends Widget {
	public onClickTrigger : Function;

	protected get collapsed() : boolean {
		var titleContent = <TitleContent>this.parent;
		return titleContent.collapsed;
	}
	
	protected set collapsed(value:boolean) {
		var titleContent = <TitleContent>this.parent;
		titleContent.collapsed = value;
	}
	
	protected trigger() {
		var titleContent = <TitleContent>this.parent;
		var collapsed = !titleContent.collapsed;

		if(this.onClickTrigger) {
			this.onClickTrigger(collapsed);
		}
	}

	protected getFgImageRect(style:Style) : Rect {
		var w = this.clientH;
		return Rect.rect.init(this.leftPadding, this.topPadding, w, w);
	}
	
	protected getTextRect(style:Style) : Rect {
		var w = this.clientH;
		return Rect.rect.init(this.leftPadding+w, this.topPadding, this.clientW-w, this.clientH);
	}

	protected getStyleType() : string {
		return this._styleType || this.collapsed ? "collapsable-title.collapsed":"collapsable-title.expanded";
	}

	protected dispatchDblClick(evt:any) {
		super.dispatchDblClick(evt);
		if(!this._enable || !this._sensitive) {
			return;
		}
		this.trigger();	
	}

	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);

		if(!this._enable || !this._sensitive) {
			return;
		}

		var p = this.toLocalPoint(Point.point.copy(evt));
		if(p.x < this.h) {
			this.trigger();	
		}
	}

	public dispose() {
		super.dispose();
		this.onClickTrigger = null;
	}

	constructor() {
		super(CollapsableTitle.TYPE);
	}

	public static TYPE = "collapsable-title";
	private static rBin = new RecyclableCreator<CollapsableTitle>(function() {return new CollapsableTitle()});
	public static create(options?:any) : CollapsableTitle {
		return <CollapsableTitle>CollapsableTitle.rBin.create().reset(CollapsableTitle.TYPE, options);
	}
};
