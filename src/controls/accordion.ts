
import {Rect} from "../base/rect";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {TitleContent} from "./title-content";
import {CollapsableTitle} from "./collapsable-title";

/**
 * 手风琴控件。它有多个页面，在每一时刻只展开一个。
 */
export class Accordion extends Widget {
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
			me.setActivePage(titleContent, collapsed, 300); 
		}
		this.addChild(titleContent);

		return titleContent;
	}

	/**
	 * 展开或折叠指定的页面。
	 * @param titleContent 要展开或折叠的页面。
	 * @param collapsed 展开或折叠。
	 * @param duration 动画的时间。
	 * @returns 返回当前控件。
	 */
	public setActivePage(titleContent:TitleContent, collapsed:boolean, duration?:number) : Widget {
		this.children.forEach((child:TitleContent) => {
			if(titleContent === child) {
				child.triggerCollapsed(duration, evt=> {
					this.relayoutChildren();
				});
			}else{
				if(!child.collapsed) {
					child.triggerCollapsed(duration, evt=> {
						this.relayoutChildren();
					});
				}
			}
		});
		this.relayoutChildren();

		return this;
	}

	constructor() {
		super(Accordion.TYPE);
	}

	public relayoutChildren() : Rect {
		var r = this.getLayoutRect();
		var x = this.leftPadding;
		var y = this.topPadding;
		var w = this.clientW;
		var n = this.children.length;
		var titleH = this.titleH;
		var contentH = this.clientH - n * this.titleH;

		this.children.forEach((child:TitleContent) => {
			child.titleH = titleH;
			child.contentH = contentH;
			child.moveResizeTo(x, y, w, child.h, 0); 
			child.relayoutChildren();
			y += child.h;
		});

		return r;
	}

	protected static defProps = Object.assign({}, Widget.defProps, {_titleHeight:30});
	protected getDefProps() : any {
		return Accordion.defProps;
	}

	public static TYPE = "accordion";
	private static recycleBin = WidgetRecyclableCreator.create(Accordion);
	public static create(options?:any) : Accordion {
		return <Accordion>Accordion.recycleBin.create(options);
	}
};

WidgetFactory.register(Accordion.TYPE, Accordion.create);

