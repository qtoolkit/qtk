import {Rect} from '../rect';
import {Widget} from '../controls/widget';
import {Layouter, LayouterFactory} from './layouter';

const TYPE = "grid";

/**
 * 网格布局器。
 */
export class GridLayouter extends Layouter {
	public get type() : string {
		return TYPE;
	}

	constructor() {
		super();
		this.rect = Rect.create(0, 0, 0, 0);
	}

	/**
	 * 设置参数。
	 */
	public setOptions(options:any) : any {
		this.cols = options.cols || 0;
		this.rows = options.rows || 0;
		this.colWidth  = options.colWidth || 0;
		this.rowHeight = options.rowHeight || 0;
		this.leftMargin   = options.leftMargin || options.margin || 0;
		this.rightMargin  = options.rightMargin || options.margin || 0;
		this.topMargin    = options.topMargin || options.margin || 0;
		this.bottomMargin = options.bottomMargin || options.margin || 0;

		if(!this.cols && !this.colWidth) {
			this.cols = 3;
		}
		if(!this.rows && !this.rowHeight) {
			this.rows = 3;
		}

		return this;
	}

	public layoutChildren(widget:Widget, children:Array<Widget>, r:Rect) : Rect {
		var leftMargin   = this.leftMargin;
		var rightMargin  = this.rightMargin;
		var topMargin    = this.topMargin;
		var bottomMargin = this.bottomMargin;
		var defParam = new GridLayouterParam(-1, 1, -1, 1); 

		var row = 0;
		var col = 0;
		var spanCols = 0;
		var spanRows = 0;
		var arr = widget.children;
		var n = widget.children.length;
		
		var cols = this.cols;
		var rows = this.rows;
		if(!cols && !rows) {
			cols = Math.floor(r.w/this.colWidth);
		}

		var iw = cols > 0 ? r.w/cols : this.colWidth;
		var ih = rows > 0 ? r.h/rows : this.rowHeight;

		var ret = this.rect.copy(r);
		for(var i = 0; i < n; i++) {
			var child = arr[i];
			var param = <GridLayouterParam>child.layoutParam || defParam;
			
			if(!child.visible) {
				continue;
			}
			
			if(cols > 0) {
				col = i%cols;
				row = Math.floor(i/cols);
			}else if(rows > 0) {
				row = i%rows;
				col = Math.floor(i/rows);
			}

			if(param.col >= 0) {
				col = param.col;
			}

			if(param.row >= 0) {
				row = param.row;
			}
			spanRows = Math.max(param.spanRows, 1);
			spanCols = Math.max(param.spanCols, 1);

			var x = col * iw + leftMargin + r.x;
			var y = row * ih + topMargin + r.y;
			var w = iw*spanCols - leftMargin - rightMargin;
			var h = ih*spanRows - topMargin - bottomMargin;

			child.moveResizeTo(x, y, w, h);
			child.relayoutChildren();

			ret.w = Math.max(x + w - r.x, r.w);
			ret.h = Math.max(y + h - r.y, r.h);
		}

		return ret;
	}
	
	public createParam(options?:any) { 
		return GridLayouterParam.create(options);
	}

	
	/**
	 * 网格项的左边的空白。
	 */
	public leftMargin : number;

	/**
	 * 网格项的右边的空白。
	 */
	public rightMargin : number;

	/**
	 * 网格项的顶部的空白。
	 */
	public topMargin : number;

	/**
	 * 网格项的底部的空白。
	 */
	public bottomMargin : number;
	
	/**
	 * 网格的列数。
	 */
	public cols : number;
	
	/**
	 * 网格的行数。
	 */
	public rows : number;
	
	/**
	 * 网格项的宽度。
	 */
	public colWidth : number;
	
	/**
	 * 网格项的高度。
	 */
	public rowHeight : number;
	
	private rect : Rect;

	static create(options:any) : GridLayouter {
		var layouter = new GridLayouter();

		return layouter.setOptions(options);
	}
};

LayouterFactory.register(TYPE, GridLayouter.create);

/**
 * 网格布局器的参数。
 * 
 * 如果父控件使用GridLayouter布局器，则子控件需要把layoutParam设置为GridLayouterParam。
 * 
 */
export class GridLayouterParam {
	public type : string;
	
	/**
	 * 列序数。
	 */
	public col : number;

	/**
	 * 跨越列数。
	 */
	public spanCols : number;

	/**
	 * 行序数。
	 */
	public row : number;

	/**
	 * 跨越行数。
	 */
	public spanRows : number;

	constructor(row?:number, spanRows?:number, col?:number, spanCols?:number) {
		this.type = TYPE;
		this.row = row >= 0 ? row : -1;
		this.col = col >= 0 ? col : -1;
		this.spanRows = spanRows || 1;
		this.spanCols = spanCols || 1;
	}

	static create(opts:any) {
		var options = opts || {};
		return new GridLayouterParam(options.row, options.spanRows, options.col, options.spanCols);
	}
};

