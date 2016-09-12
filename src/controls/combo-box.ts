
import {Widget} from "./widget";
import {Window} from "./window";
import {WidgetFactory} from "./widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class ComboBoxOption {
	imageURL : string;
	color : string;
	text : string;
	value : any;
};

export class ComboBox extends Widget {
	protected _isPopupOpened : boolean;
	protected _options : Array<ComboBoxOption>;
	protected _current : number;


	public addOption(text:string, value:any, imageURL:string, color:string) {
	}

	protected dispatchClick(evt:any) {
		super.dispatchClick(evt);
		if(!this._isPopupOpened) {
			this._isPopupOpened = true;
		}
	}

	protected showPopup() {

	}

	constructor() {
		super(ComboBox.TYPE);
	}

	public dispose() {
		super.dispose();
		ComboBox.recyclbale.recycle(this);
	}

	public static TYPE = "combo-box";
	private static recyclbale = new RecyclableCreator<ComboBox>(function() {return new ComboBox()});
	public static create() : Widget {
		return ComboBox.recyclbale.create().reset(ComboBox.TYPE);
	}
};

WidgetFactory.register(ComboBox.TYPE, ComboBox.create);

