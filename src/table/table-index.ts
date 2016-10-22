
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {MatrixStack} from "../matrix-stack";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";
import {PassiveScrollableGroup} from "./passive-scrollable-group";

/**
 * 表格左边的索引序数。
 */
export class TableIndex extends PassiveScrollableGroup {
	constructor() {
		super(TableIndex.TYPE);
	}

	public static TYPE = "table-index";
	private static recycleBin = new RecyclableCreator<TableIndex>(function() {return new TableIndex()});
	public static create(options?:any) : TableIndex {
		return <TableIndex>TableIndex.recycleBin.create().reset(TableIndex.TYPE, options);
	}
};

WidgetFactory.register(TableIndex.TYPE, TableIndex.create);

