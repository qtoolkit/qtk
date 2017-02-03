
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {PassiveScrollableGroup} from "./passive-scrollable-group";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格左边的行序数。
 */
export class TableIndex extends PassiveScrollableGroup {
	constructor() {
		super(TableIndex.TYPE);
	}

	public static TYPE = "table-index";
	private static recycleBin = WidgetRecyclableCreator.create(TableIndex);
	public static create(options?:any) : TableIndex {
		return <TableIndex>TableIndex.recycleBin.create(options);
	}
};

WidgetFactory.register(TableIndex.TYPE, TableIndex.create);

