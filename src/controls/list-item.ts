
import {Style} from "../style";
import {Widget} from "./widget";
import {WidgetFactory} from "./widget-factory";
import {RoundType, Graphics} from "../graphics";
import {RecyclableCreator} from "../recyclable-creator";

export enum ListItemStyle {
	NORMAL,
	FIRST,
	LAST
};

export class ListItem extends Widget {
	public listItemStyle : ListItemStyle;

	constructor(type?:string) {
		super(type || ListItem.TYPE);
	}

	protected drawBackground(ctx:any, style:Style) : Widget {
		if(style.backGroundImage) {
			style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h); 
		}else if(style.backGroundColor || (style.lineColor && style.lineWidth)) {
			Graphics.drawRect(ctx, style.backGroundColor, null, 0, 0, 0, this.w, this.h);
			if(this.listItemStyle === ListItemStyle.FIRST) {
				Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, 0, this.w, 0);
			}
			Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, this.h, this.w, this.h);
		}

		return this;
	}

	public dispose() {
		super.dispose();
		ListItem.recyclbale.recycle(this);
	}

	public static TYPE = "list-item";
	private static recyclbale = new RecyclableCreator<ListItem>(function() {return new ListItem()});
	public static create() : Widget {
		return ListItem.recyclbale.create().reset(ListItem.TYPE);
	}
};

WidgetFactory.register(ListItem.TYPE, ListItem.create);

