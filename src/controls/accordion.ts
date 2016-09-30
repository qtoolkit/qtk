
import {Rect} from "../rect";
import {Point} from "../point";
import {Style} from "../style";
import {Widget} from "./widget";
import {TitleContent} from "./title-content";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class AccordionTitle extends Widget {
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
		titleContent.collapsed = !titleContent.collapsed;

		if(this.onClickTrigger) {
			this.onClickTrigger(titleContent.collapsed);
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
		return this._styleType || this.collapsed ? "accordion-title.collapsed":"accordion-title.expanded";
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
		super(AccordionTitle.TYPE);
	}

	public static TYPE = "accordion-title";
	private static recycleBin = new RecyclableCreator<AccordionTitle>(function() {return new AccordionTitle()});
	public static create(options?:any) : AccordionTitle {
		return <AccordionTitle>AccordionTitle.recycleBin.create().reset(AccordionTitle.TYPE, options);
	}
};

export class Accordion extends Widget {
	protected _titleHeight : number;
	
	public set titleHeight(value:number) {
		this._titleHeight = value;
	}
	public get titleHeight() : number {
		return this._titleHeight;
	}

	protected onReset() {
		super.onReset();
		this._titleHeight = 30;
	}

	constructor() {
		super(Accordion.TYPE);
	}

	protected setActivePanel(titleContent:TitleContent, collapsed:boolean) {
		this.children.forEach((child:TitleContent) => {
			child.collapsed = titleContent === child ? collapsed : true;
		});
		this.relayoutChildren();
	}

	public relayoutChildren() : Rect {
		var r = this.getLayoutRect();
		var x = this.leftPadding;
		var y = this.topPadding;
		var w = this.clientW;
		var n = this.children.length;
		var collapseH = this.titleHeight;
		var expandH = this.titleHeight + this.clientH - n * this.titleHeight;

		this.children.forEach((child:TitleContent) => {
			var h = child.collapsed ? collapseH : expandH;
			child.moveResizeTo(x, y, w, h, 0); 
			child.relayoutChildren();
			y += h;
		});

		return r;
	}

	public addPanel(title:string, contentWidget:Widget) : TitleContent {
		var me = this;
		var titleWidget = AccordionTitle.create({text:title});
		
		var titleContent = TitleContent.create({
			collapsed : true,
			titleWidget : titleWidget,
			contentWidget : contentWidget,
			titleHeight : this.titleHeight
		});	

		titleWidget.onClickTrigger = function(collapsed) {
			me.setActivePanel(titleContent, collapsed); 
		}
		this.addChild(titleContent);

		return titleContent;
	}

	public static TYPE = "accordion";
	private static recycleBin = new RecyclableCreator<Accordion>(function() {return new Accordion()});
	public static create(options?:any) : Accordion {
		return <Accordion>Accordion.recycleBin.create().reset(Accordion.TYPE, options);
	}
};

WidgetFactory.register(Accordion.TYPE, Accordion.create);

