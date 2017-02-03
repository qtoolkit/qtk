
import {Rect} from "../rect";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {WidgetFactory} from "../controls/widget-factory";
import {PassiveScrollableGroup} from "./passive-scrollable-group";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

/**
 * 表格头
 */
export class TableHeader extends PassiveScrollableGroup {
	constructor() {
		super(TableHeader.TYPE);
	}

	public static TYPE = "table-header";
	private static recycleBin = WidgetRecyclableCreator.create(TableHeader);
	public static create(options?:any) : TableHeader {
		return <TableHeader>TableHeader.recycleBin.create(options);
	}
};

WidgetFactory.register(TableHeader.TYPE, TableHeader.create);

