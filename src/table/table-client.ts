
import {Rect} from "../rect";
import {Point} from "../point";
import {Range} from "../range";
import {Style} from "../style";
import Events = require("../events");
import {MatrixStack} from "../matrix-stack";
import {ListView} from "../controls/list-view";
import {Widget, WidgetState} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 表格内容区域
 */
export class TableClient extends ListView {
	protected _colsWidth : Array<number>;
	protected _selectedCols : Range;
	protected _selectedRows : Range;

	public set colsWidth(value:Array<number>) {
		this._colsWidth = value;
	}

	public get colsWidth() : Array<number> {
		return this._colsWidth;
	}
	
	public set selectedRows(value:Range) {
		this._selectedRows.first = value.first;
		this._selectedRows.second = value.second;
	}

	public get selectedRows() : Range {
		return this._selectedRows;
	}
	
	public set selectedCols(value:Range) {
		this._selectedCols.first = value.first;
		this._selectedCols.second = value.second;
	}

	public get selectedCols() : Range {
		return this._selectedCols;
	}

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
	
	protected yToRow(y:number) : number {
		return Math.floor(y/this.itemH);
	}

	protected calcSelectRect() : Rect {
		var selectedCols = this._selectedCols;
		var selectedRows = this._selectedRows;

		var left = 0;
		var right = 0;
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
	
		if((x + w) >= this.contentW) {
			w = this.contentW - x - 1;
		}
		if((y + h) >= this.contentH) {
			h = this.contentH - y - 1;
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
	
	protected dispatchPointerUp(evt:Events.PointerEvent) {
		super.dispatchPointerUp(evt);

		if(!this._pointerInBar) {
			this.updateSelection(evt.x, evt.y, false, true);
		}
	}
	
	protected drawGrid(ctx:any, style:Style) {
		var itemH = this.itemH;
		var ox = this.offsetX;
		var oy = this.offsetY;
		var w = this.clientW;
		var h = this.clientH;
		var b = this.topPadding + h;
		var r = this.leftPadding + w;

		var itemW = this.colsWidth[0];
		var y = this.topPadding;
		var x = this.leftPadding;

		ctx.beginPath();
		this.colsWidth.forEach((width:number, index:number) => {
			ctx.moveTo(x, y);
			ctx.lineTo(x, b);
			x += width;
		});

		x = this.leftPadding;
		y = this.topPadding + (itemH - oy%itemH);
		while(y < b) {
			ctx.moveTo(x, y);
			ctx.lineTo(r, y);
		
			y += itemH;
		}

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

		var style = this.getStyleOfState(WidgetState.NORMAL);
		this.drawGrid(ctx, style);
		
		style = this.getStyleOfState(WidgetState.ACTIVE);
		this.drawSelection(ctx, style);
	}

	constructor() {
		super(TableClient.TYPE);
	}

	protected onReset() {
		super.onReset();
		this.dragToScroll = true;
		this._selectedCols = Range.create(0, 0);
		this._selectedRows = Range.create(0, 0);
	}

	public static TYPE = "table-client";
	private static rBin = new RecyclableCreator<TableClient>(function() {return new TableClient()});
	public static create(options?:any) : TableClient {
		return <TableClient>TableClient.rBin.create().reset(TableClient.TYPE, options);
	}
};

WidgetFactory.register(TableClient.TYPE, TableClient.create);

