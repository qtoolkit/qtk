
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格头的一项。
 */
export class TableHeaderItem extends Widget {
	/**
	 * 是否点击时按该列排序。
	 */
	public set sortKey(value:string) {
		this._sortKey = value;
	}
	public get sortKey() : string{
		return this._sortKey;
	}
	protected _sortKey : string;

	/**
	 * 当前的排序状态。
	 */
	public get sortStatus() : string {
		return this._sortStatus;
	}
	protected _sortStatus : string;
	
	public static SORT_INC = "inc";
	public static SORT_DEC = "dec";
	
	constructor() {
		super(TableHeaderItem.TYPE);
	}

	protected getFgImageRect(style:Style) : Rect {
		var x = this.w - this.h;
		var y = this.topPadding;
		var w = this.clientH;
		var h = this.clientH;

		return Rect.rect.init(x, y, w, h);
	}
	
	protected getStyleType() : string {
		var styleType = this._styleType || this.type;
		if(!this._sortKey || !this._sortStatus) {
			return styleType;
		}

		return styleType +"."+this._sortStatus;
	}

	protected onReset() {
		super.onReset();
		this._sortStatus = null;
		this.on(Events.CLICK, this.triggerSortStatus.bind(this));
	}

	protected onInit() {
		super.onInit();
		this.useBehavior("resizable", {east:true, animateDuration:0});
	}

	private _sortEvent = Events.SortEvent.create(null, false);
	protected triggerSortStatus() {
		var isDec = false;
		if(this._sortKey) {
			if(this._sortStatus === TableHeaderItem.SORT_INC) {
				isDec = true;
				this._sortStatus = TableHeaderItem.SORT_DEC;
			}else{
				this._sortStatus = TableHeaderItem.SORT_INC;
			}
			this.dispatchEvent(this._sortEvent.init(this._sortKey, isDec));

			this.parent.children.forEach((child:TableHeaderItem) => {
				if(child !== this && child.type === this.type) {
					child._sortStatus = null;
				}
			});
		}
	}

	public static TYPE = "table-header-item";
	private static recycleBin = WidgetRecyclableCreator.create(TableHeaderItem);
	public static create(options?:any) : TableHeaderItem {
		return <TableHeaderItem>TableHeaderItem.recycleBin.create(options);
	}
};

WidgetFactory.register(TableHeaderItem.TYPE, TableHeaderItem.create);

