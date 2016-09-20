
import {Rect} from "../rect";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {Layouter} from "../layouters/layouter";
import {RecyclableCreator} from "../recyclable-creator";
import {GridLayouter} from "../layouters/grid-layouter";
import {ScrollView, ScrollerBarVisibility} from "./scroll-view";

export class GridView extends ScrollView {
	public set cols(value:number) {
		this._cols = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.cols = value;
	}
	public get cols() : number {
		return this._cols;
	}
	
	public set colWidth(value:number) {
		this._colWidth = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.colWidth = value;
	}
	public get colWidth() : number {
		return this._colWidth;
	}
	
	public set rows(value:number) {
		this._rows = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.rows = value;
	}
	public get rows() : number {
		return this._rows;
	}
	
	public set rowHeight(value:number) {
		this._rowHeight = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.rowHeight = value;
	}
	public get rowHeight() : number {
		return this._rowHeight;
	}

	public setItemMargins(margins:any) : Widget{
		var layouter = <GridLayouter>this._childrenLayouter;

		layouter.leftMargin = margins.left || margins.all || 0;
		layouter.rightMargin = margins.right || margins.all || 0;
		layouter.topMargin = margins.top || margins.all || 0;
		layouter.bottomMargin = margins.bottom || margins.all || 0;

		return this;
	}

	public get childrenLayouter() : Layouter{
		return this._childrenLayouter;
	}
	public set childrenLayouter(layouter:Layouter) {
	}
	
	protected doDrawChildren(ctx:any) : Widget {
		var top = this.offsetY;
		var bottom = top + this.h;

		this._children.forEach(function(child) {
			var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
			if(visible) {
				child.draw(ctx);
			}
		});

		return this;
	}

	public relayoutChildren() : Rect {
		this.ensureOptions();
		var r = super.relayoutChildren();
		this.contentWidth = r.w + this.leftPadding + this.rightPadding;
		this.contentHeight = r.h + this.topPadding + this.bottomPadding;
		
		return r;
	}

	protected ensureOptions() {
		if(this.rows > 0 && this.cols > 0) {
			this.scrollerOptions.scrollingX = false;
			this.scrollerOptions.scrollingY = false;
			this.scrollBarStyle.vBarVisibility = ScrollerBarVisibility.INVISIBLE;
			this.scrollBarStyle.hBarVisibility = ScrollerBarVisibility.INVISIBLE;
		}else if(this.cols > 0) {
			this.scrollerOptions.scrollingX = false;
			this.scrollerOptions.scrollingY = true;
			this.scrollBarStyle.vBarVisibility = ScrollerBarVisibility.AUTO;
			this.scrollBarStyle.hBarVisibility = ScrollerBarVisibility.INVISIBLE;
		}else if(this.rows > 0) {
			this.scrollerOptions.scrollingX = true;
			this.scrollerOptions.scrollingY = false;
			this.scrollBarStyle.hBarVisibility = ScrollerBarVisibility.AUTO;
			this.scrollBarStyle.vBarVisibility = ScrollerBarVisibility.INVISIBLE;
		}else {
			this.scrollerOptions.scrollingX = false;
			this.scrollerOptions.scrollingY = true;
			this.scrollBarStyle.vBarVisibility = ScrollerBarVisibility.AUTO;
			this.scrollBarStyle.hBarVisibility = ScrollerBarVisibility.INVISIBLE;
		}
	}

	protected onInit() {
		super.onInit();
		this.relayoutChildren();
	}

	protected _rows : number;
	protected _cols : number;
	protected _colWidth : number;
	protected _rowHeight : number;

	constructor() {
		super(GridView.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._cols = 3;
		this._rows = 3;
		this._childrenLayouter = GridLayouter.create({cols:this.cols, rows:this.rows});
		
		return this;
	}

	public static TYPE = "grid-view";
	private static recycleBinGridView = new RecyclableCreator<GridView>(function() {return new GridView()});
	public static create(options?:any) : GridView {
		return <GridView>GridView.recycleBinGridView.create().reset(GridView.TYPE).set(options);
	}
};

WidgetFactory.register(GridView.TYPE, GridView.create);

