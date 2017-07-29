
import {Rect} from "../base/rect";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {Layouter} from "../layouters/layouter";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";
import {GridLayouter} from "../layouters/grid-layouter";
import {ScrollView, ScrollerBarVisibility} from "./scroll-view";

/**
 * 网格视图。
 */
export class GridView extends ScrollView {
	/**
	 * 列数。列数和列宽设置其中之一即可。
	 */
	public set cols(value:number) {
		this._cols = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.cols = value;
	}
	public get cols() : number {
		return this._cols;
	}
	
	/**
	 * 列宽。列数和列宽设置其中之一即可。
	 */
	public set colWidth(value:number) {
		this._colWidth = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.colWidth = value;
	}
	public get colWidth() : number {
		return this._colWidth;
	}
	
	/**
	 * 行数。行数和行高设置其中之一即可。
	 */
	public set rows(value:number) {
		this._rows = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.rows = value;
	}
	public get rows() : number {
		return this._rows;
	}
	
	/**
	 * 行高。行数和行高设置其中之一即可。
	 */
	public set rowHeight(value:number) {
		this._rowHeight = value;
		var layouter = <GridLayouter>this._childrenLayouter;
		layouter.rowHeight = value;
	}
	public get rowHeight() : number {
		return this._rowHeight;
	}

	/**
	 * 每一网格周围的空白。
	 */
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
		this.contentW = r.w + this.leftPadding + this.rightPadding;
		this.contentH = r.h + this.topPadding + this.bottomPadding;
		
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

	protected onToJson(json:any) {
		delete json.childrenLayouter;
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

	protected onReset() {
		super.onReset();
		this._childrenLayouter = GridLayouter.createWithOptions({cols:this.cols, rows:this.rows});
	}
	
	protected static defProps = Object.assign({}, ScrollView.defProps, 
											  {_cols:3, _rows:3, _rowHeight:0, _colWidth:0});
	protected getDefProps() : any {
		return GridView.defProps;
	}

	public static TYPE = "grid-view";
	private static recycleBinGridView = WidgetRecyclableCreator.create(GridView);
	public static create(options?:any) : GridView {
		return <GridView>GridView.recycleBinGridView.create(options);
	}
};

WidgetFactory.register(GridView.TYPE, GridView.create);

