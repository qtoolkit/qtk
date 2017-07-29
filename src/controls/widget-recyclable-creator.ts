import {Widget} from "./widget"
import {RecyclableCreator} from "../base/recyclable-creator"

/**
 * 可循环的创建器。
 */
export class WidgetRecyclableCreator extends RecyclableCreator<Widget> {
	protected _type : string;

	constructor(ctor:any) {
		super(function() {
			return new ctor;
		});
		this._type = ctor.TYPE;
	}

	public create(options:any) : Widget {
		var obj = super.create();
		obj.reset(this._type, options);

		return obj;
	}

	public static create(ctor:any) {
		return new WidgetRecyclableCreator(ctor);
	}
};
