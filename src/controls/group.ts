
import {Style} from "../style";
import {WidgetState, Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Group extends Widget {
	constructor() {
		super(Group.TYPE);
	}

	public static TYPE = "group";
	private static recycleBin = new RecyclableCreator<Group>(function() {return new Group()});
	public static create(options?:any) : Group {
		return <Group>Group.recycleBin.create().reset(Group.TYPE, options);
	}
};

WidgetFactory.register(Group.TYPE, Group.create);

