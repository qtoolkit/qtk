
import {Rect} from "../rect";
import {Point} from "../point";
import {Range} from "../range";
import {Style} from "../style";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {ListView} from "../controls/list-view";
import {Widget, WidgetState} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格内容区域
 */
export class TableClient extends ListView {
	/**
	 * 记录每一列的宽度，从TableHeader获取。
	 */
	public set colsWidth(value:Array<number>) {
		this._colsWidth = value;
	}
	public get colsWidth() : Array<number> {
		return this._colsWidth;
	}
	protected _colsWidth : Array<number>;

	/**
	 * 当前选择的行的范围。
	 */
	public set selectedRows(value:Range) {
		this._selectedRows.first = value.first;
		this._selectedRows.second = value.second;
	}
	public get selectedRows() : Range {
		return this._selectedRows;
	}
	protected _selectedCols : Range;
	
	/**
	 * 当前选择的列的范围。
	 */
	public set selectedCols(value:Range) {
		this._selectedCols.first = value.first;
		this._selectedCols.second = value.second;
	}
	public get selectedCols() : Range {
		return this._selectedCols;
	}
	protected _selectedRows : Range;


	constructor() {
		super(TableClient.TYPE);
	}
	/*
	 * 把X坐标转换成对应的列数。
	 */
	protected xToCol(x:number) : number {
		var xx = x;
		var col = -1;
		this.colsWidth.some(function(w:number, index:number) {
			xx -= w;
			col = index;
			return xx <= 0;
		});

		return col;
	}
	
	/*
	 * 把Y坐标转换成对应的行数。
	 */
	protected yToRow(y:number) : number {
		return Math.floor(y/this.itemH);
	}

	/**
	 * 计算选中的行列数对应的像素范围。
	 */
	protected calcSelectRect() : Rect {
		var left = 0;
		var right = 0;
		var selectedCols = this._selectedCols;
		var selectedRows = this._selectedRows;

		this.colsWidth.some(function(width:number, index:number) {
			if(index < selectedCols.first) {
				left += width;
			}
			if(index <= selectedCols.second) {
				right += width;
				return false;
			}else{
				return true;
			}
		});
		
		var x = left - this.offsetX;
		var w = right - left;
		var y = selectedRows.first * this.itemH - this.offsetY;
		var h = (selectedRows.second-selectedRows.first+1) * this.itemH;

		var maxW = Math.min(this.getViewWidth(), this.contentW);
		var maxH = Math.min(this.getViewHeight(), this.contentH);

		if(x < 0) {
			w += x;
			x = 0;
		}
		if((x + w) >= maxW) {
			w = maxW - x - 1;
		}
		if(y < 0) {
			h += y;
			y = 0;
		}
		if((y + h) >= this.contentH) {
			h = maxH - y - 1;
		}

		return Rect.rect.init(x, y, w, h);
	}

	protected setSelectedRows(first:number, second:number) : TableClient {
		this._selectedRows.first = Math.min(first, second);
		this._selectedRows.second = Math.max(first, second);

		return this;
	}
	
	protected setSelectedCols(first:number, second:number) : TableClient {
		this._selectedCols.first = Math.min(first, second);
		this._selectedCols.second = Math.max(first, second);

		return this;
	}
	
	protected updateSelection(x:number, y:number, updateFirst:boolean, updateSecond:boolean) {
		var p = this.toLocalPoint(Point.point.init(this.offsetX + x, this.offsetY + y));

		var col = this.xToCol(p.x);
		var row = this.yToRow(p.y);
		var firstCol = col;
		var secondCol = col;
		var firstRow = row;
		var secondRow = row;

		if(!updateFirst) {
			firstCol = this._selectedCols.first;
			firstRow = this._selectedRows.first;
		}
		
		if(!updateSecond) {
			secondCol = this._selectedCols.second;
			secondRow = this._selectedRows.second;
		}

		this.setSelectedCols(firstCol, secondCol);
		this.setSelectedRows(firstRow, secondRow);
	}

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		super.dispatchPointerDown(evt, ctx);

		if(!this._pointerInBar) {
			this.updateSelection(evt.x, evt.y, true, true);
		}
	}
	
	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		super.dispatchPointerMove(evt, ctx);

		if(!this._pointerInBar && evt.pointerDown) {
			this.updateSelection(evt.x, evt.y, false, true);
		}
	}
	
	protected drawVLine(ctx:any, x:number, yStart:number, yEnd:number) {
		if(x >= this.w) {
			return;
		}
		ctx.moveTo(x, yStart);
		ctx.lineTo(x, yEnd);
	}

	protected drawVLines(ctx:any) {
		var startCol = 0;
		var ox = this.offsetX;
		this.colsWidth.some((width:number, index:number) => {
			if(ox > width) {
				ox -= width;
				return false;
			}else{
				startCol = index;
				ox = width - ox;
				return true;
			}
		});

		var y = this.topPadding;
		var x = this.leftPadding + ox;
		var b = this.topPadding + this.clientH;
		this.drawVLine(ctx, x, y, b);
		this.colsWidth.forEach((width:number, index:number) => {
			if(index <= startCol) {
				return;
			}
			x += width;
			this.drawVLine(ctx, x, y, b);
		});
	}

	protected drawHLines(ctx:any) {
		var oy = this.offsetY;
		var itemH = this.itemH;
		var x = this.leftPadding;
		var b = this.topPadding + this.clientH;
		var r = this.leftPadding + this.clientW;
		var y = this.topPadding + (itemH - oy%itemH);
		
		while(y < b) {
			ctx.moveTo(x, y);
			ctx.lineTo(r, y);
		
			y += itemH;
		}
	}

	protected drawGrid(ctx:any, style:Style) {
		ctx.beginPath();
		this.drawVLines(ctx);
		this.drawHLines(ctx);

		ctx.lineWidth = 1;
		ctx.strokeStyle = style.lineColor;
		ctx.stroke();
	}

	protected drawSelection(ctx:any, style:Style) {
		var r = this.calcSelectRect();

		if(r.w > 0 && r.h > 0) {
			ctx.beginPath();
			ctx.rect(r.x, r.y, r.w, r.h);	
			ctx.lineWidth = 2;
			ctx.strokeStyle = style.lineColor;
			ctx.stroke();
		}
	}

	protected afterDrawChildren(ctx:any) {
		super.afterDrawChildren(ctx);
		this.drawGrid(ctx, this.getStyleOfState(WidgetState.NORMAL));
		this.drawSelection(ctx, this.getStyleOfState(WidgetState.ACTIVE));
	}
	
	protected getLayoutWidth() : number {
		var w = 0;
		
		this.colsWidth.forEach((width:number) => {
			w += width;
		});

		return Math.max(w, this.clientW);
	}

	protected onReset() {
		super.onReset();
		this.dragToScroll = true;
		this.scrollerOptions.scrollingX = true;
		this._selectedCols = Range.create(0, 0);
		this._selectedRows = Range.create(0, 0);
	}

	public static TYPE = "table-client";
	private static rBin = WidgetRecyclableCreator.create(TableClient);
	public static create(options?:any) : TableClient {
		return <TableClient>TableClient.rBin.create(options);
	}
};

WidgetFactory.register(TableClient.TYPE, TableClient.create);

