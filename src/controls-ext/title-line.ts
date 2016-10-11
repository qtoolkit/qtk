
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {ColorLine} from "../controls/color-tile";
import {AlignH, AlignV, Orientation} from "../consts";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleLine extends TitleValue {
	constructor(type?:string) {
		super(type || TitleLine.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return ColorLine.create({styleType:"title.line"});
	}

	public static TYPE = "title-line";
	private static recycleBin = new RecyclableCreator<TitleLine>(function() {return new TitleLine()});
	public static create(options?:any) : TitleLine {
		return <TitleLine>TitleLine.recycleBin.create().reset(TitleLine.TYPE, options);
	}
};

WidgetFactory.register(TitleLine.TYPE, TitleLine.create);
