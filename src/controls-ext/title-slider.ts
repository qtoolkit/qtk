
import {Slider} from "../controls/slider";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleSlider extends TitleValue {
	constructor(type?:string) {
		super(type || TitleSlider.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return Slider.create(options);
	}

	public static TYPE = "title-slider";
	private static recycleBin = new RecyclableCreator<TitleSlider>(function() {return new TitleSlider()});
	public static create(options?:any) : TitleSlider {
		return <TitleSlider>TitleSlider.recycleBin.create().reset(TitleSlider.TYPE, options);
	}
};

WidgetFactory.register(TitleSlider.TYPE, TitleSlider.create);
