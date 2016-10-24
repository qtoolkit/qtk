
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {ColorLine} from "../controls/color-tile";
import {AlignH, AlignV, Orientation} from "../consts";
import {WidgetFactory} from "../controls/widget-factory";
import {WidgetRecyclableCreator} from "../controls/widget-recyclable-creator";

export class TitleLine extends TitleValue {
	constructor(type?:string) {
		super(type || TitleLine.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return ColorLine.create({styleType:"title.line"});
	}

	public static TYPE = "title-line";
	private static recycleBin = WidgetRecyclableCreator.create(TitleLine);
	public static create(options?:any) : TitleLine {
		return <TitleLine>TitleLine.recycleBin.create(options);
	}
};

WidgetFactory.register(TitleLine.TYPE, TitleLine.create);
