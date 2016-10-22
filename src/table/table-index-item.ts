
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

/**
 * 表格左边的序数项。
 */
export class TableIndexItem extends Widget {
	protected onReset() {
		super.onReset();
	}

	constructor() {
		super(TableIndexItem.TYPE);
	}

	public static TYPE = "table-index-item";
	private static recycleBin = new RecyclableCreator<TableIndexItem>(function() {return new TableIndexItem()});
	public static create(options?:any) : TableIndexItem {
		return <TableIndexItem>TableIndexItem.recycleBin.create().reset(TableIndexItem.TYPE, options);
	}
};

WidgetFactory.register(TableIndexItem.TYPE, TableIndexItem.create);

