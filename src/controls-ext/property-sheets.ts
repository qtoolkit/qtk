
import {Rect} from "../rect";
import {Widget} from "../controls/widget";
import {ScrollView} from "../controls/scroll-view";
import {WidgetFactory} from "../controls/widget-factory";
import {TitleContent} from "../controls/title-content";
import {RecyclableCreator} from "../recyclable-creator";
import {CollapsableTitle} from "../controls/collapsable-title";
import {Layouter, LayouterFactory} from '../layouters/layouter';

/**
 * 管理多个页面，每个页面可以展开或折叠。
 */
export class PropertySheets extends ScrollView{
	protected _titleHeight : number;
	
	/**
	 * titleH 标题控件的高度。
	 */
	public set titleH(value:number) {
		this._titleHeight = value;
	}
	public get titleH() : number {
		return this._titleHeight;
	}

	public set childrenLayouter(layouter:Layouter) {
		console.log("set childrenLayouter not work for me.");
	}
	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}

	/**
	 * 增加一个页面。
	 * @param title 标题文本。
	 * @param contentH 内容控件。
	 * @returns 返回新增加的TitleContent。
	 */
	public addPage(title:string, contentWidget:Widget) : TitleContent {
		var me = this;
		var titleWidget = CollapsableTitle.create({text:title});
		
		var titleContent = TitleContent.create({
			collapsed : true,
			titleWidget : titleWidget,
			contentWidget : contentWidget,
			titleH : this.titleH
		});	

		titleWidget.onClickTrigger = function(collapsed) {
			titleContent.collapsed = !titleContent.collapsed;
			me.relayoutChildren();
		}
		this.addChild(titleContent);

		return titleContent;
	}

	private computeDesireContentHeight() : number {
		var h = 0;
		this.children.forEach((child:TitleContent) => {
			if(child.visible) {
				h += child.h;
			}
		});

		return h;
	}

	public relayoutChildren() : Rect {
		this.contentH = this.computeDesireContentHeight();
		var r = this.getLayoutRect();
		var w = r.w;
		var x = r.x;
		var y = r.y;

		this.children.forEach((child:TitleContent) => {
			child.moveResizeTo(x, y, w, 0, 0); 
			child.relayoutChildren();
			y += child.h;
		});

		this.contentWidth = r.w + this.leftPadding + this.rightPadding;
		this.contentH = y  + this.bottomPadding + 10;
		
		return r;
	}
	
	protected onReset() {
		super.onReset();
		this._titleHeight = 30;
		this.dragToScroll = true;
		this.slideToScroll = true;
		this.scrollerOptions.scrollingX = false;
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

