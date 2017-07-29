
import {Style} from "../base/style";
import {WidgetState, Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {WidgetRecyclableCreator} from "./widget-recyclable-creator";

export class Group extends Widget {
	constructor() {
		super(Group.TYPE);
	}

	public static TYPE = "group";
	private static recycleBin = WidgetRecyclableCreator.create(Group);
	public static create(options?:any) : Group {
		return <Group>Group.recycleBin.create(options);
	}
};

WidgetFactory.register(Group.TYPE, Group.create);

