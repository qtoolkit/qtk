
import {Style} from "../style";
import {WidgetState, Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class Group extends Widget {
	private _style : Style;
	
	constructor() {
		super(Group.TYPE);
	}

	public reset(type:string) : Widget {
		super.reset(type);
		this._style = Style.create();

		return this;
	}

	public getStyle() : Style {
		return this._style;
	}
	
	public setStyle(state:WidgetState, style:Style):Widget{
		this._style = style;

		return this;
	}
	
	public dispose() {
		super.dispose();
		Group.recyclbale.recycle(this);
	}

	public static TYPE = "group";
	private static recyclbale = new RecyclableCreator<Group>(function() {return new Group()});
	public static create() : Widget {
		return Group.recyclbale.create().reset(Group.TYPE);
	}
};

WidgetFactory.register(Group.TYPE, Group.create);

