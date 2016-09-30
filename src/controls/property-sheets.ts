
import {Rect} from "../rect";
import {Widget} from "./widget";
import {ScrollView} from "./scroll-view";
import {WidgetFactory} from "./widget-factory";
import {TitleContent} from "./title-content";
import {CollapsableTitle} from "./collapsable-title";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 管理多个页面，每个页面可以展开或折叠。
 */
export class PropertySheets extends ScrollView{
	protected _titleHeight : number;
	
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
	 * 增加一个页面。
	 * @param title 标题文本。
	 * @param contentHeight 内容控件。
	 * @returns 返回新增加的TitleContent。
	 */
	public addPage(title:string, contentWidget:Widget) : TitleContent {
		var me = this;
		var titleWidget = CollapsableTitle.create({text:title});
		
		var titleContent = TitleContent.create({
			collapsed : true,
			titleWidget : titleWidget,
			contentWidget : contentWidget,
			titleHeight : this.titleHeight
		});	

		titleWidget.onClickTrigger = function(collapsed) {
			titleContent.triggerCollapsed();
			me.relayoutChildren();
		}
		this.addChild(titleContent);

		return titleContent;
	}

	public relayoutChildren() : Rect {
		var r = this.getLayoutRect();
		var x = this.leftPadding;
		var y = this.topPadding;
		var w = this.clientW;

		this.children.forEach((child:TitleContent) => {
			child.moveResizeTo(x, y, w, 0, 0); 
			child.relayoutChildren();
			y += child.h;
		});

		this.contentWidth = r.w + this.leftPadding + this.rightPadding;
		this.contentHeight = y  + this.bottomPadding + 10;
		
		return r;
	}
	
	protected onReset() {
		super.onReset();
		this._titleHeight = 30;
		this.dragToScroll = true;
		this.slideToScroll = true;
	}

	constructor() {
		super(PropertySheets.TYPE);
	}


	public static TYPE = "property-sheets";
	private static rBin = new RecyclableCreator<PropertySheets>(function() {return new PropertySheets()});
	public static create(options?:any) : PropertySheets {
		return <PropertySheets>PropertySheets.rBin.create().reset(PropertySheets.TYPE, options);
	}
};

WidgetFactory.register(PropertySheets.TYPE, PropertySheets.create);

