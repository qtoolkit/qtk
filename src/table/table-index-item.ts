
import {Rect} from "../base/rect";
import {Style} from "../base/style";
import Events = require("../base/events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格左边的行序数项。
 */
export class TableIndexItem extends Widget {
	constructor() {
		super(TableIndexItem.TYPE);
	}

	public static TYPE = "table-index-item";
	private static recycleBin = WidgetRecyclableCreator.create(TableIndexItem);
	public static create(options?:any) : TableIndexItem {
		return <TableIndexItem>TableIndexItem.recycleBin.create(options);
	}
};

WidgetFactory.register(TableIndexItem.TYPE, TableIndexItem.create);

