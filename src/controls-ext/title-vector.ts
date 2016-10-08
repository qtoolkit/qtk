
import {VectorEdit}  from "./vector-edit";
import {Widget} from "../controls/widget";
import {TitleValue} from "./title-value";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

export class TitleVector extends TitleValue {
	protected _d : number;
	/**
	 * dimension
	 */
	public get d() : number {
		return this._d;
	}
	
	public set d(value:number){
		this._d = value;;
	}

	constructor(type?:string) {
		super(type || TitleVector.TYPE);
	}

	protected createValueWidget(options?:any) : Widget {
		return VectorEdit.create({d:this.d || 2});
	}
	
	public static TYPE = "title-vector";
	private static recycleBin = new RecyclableCreator<TitleVector>(function() {return new TitleVector()});
	public static create(options?:any) : TitleVector {
		var widget : TitleVector = TitleVector.recycleBin.create();
		widget.d = options ? (options.d || 2) : 2;
		widget.reset(TitleVector.TYPE, options);

		return widget;
	}
};

WidgetFactory.register(TitleVector.TYPE, TitleVector.create);
