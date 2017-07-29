import {Rect} from "../base/rect";
import {Factory} from "../base/factory";
import {Widget} from "../controls/widget";

/**
 * 子控件布局算法。
 */
export class Layouter {
	/**
	 * 布局算法的名称。
	 */
	public get type() : string {
		return "dummy";
	}
	
	/**
	 * 设置参数。
	 */
	public setOptions(options:any) : any {
		return this;
	}

	/**
	 * 对子控件进行布局。
	 * @param widget 父控件
	 * @param children 只控件
	 * @returns 全部子控件需要的区域。
	 */
	public layoutChildren(widget:Widget, children:Array<Widget>, rect:Rect) : Rect {
		return null;
	}

	public createParam(options?:any) : any {
		return null;
	}
	/**
	 * 从JSON数据创建。
	 */
	public fromJson(json:any) : Layouter {
		for(var key in json) {
			var value = json[key];
			var type = typeof value;
			if(type === "number" || type === "string") {
				this[key] = value;
			}
		}

		return this;
	}

	/**
	 * 转换成JSON数据。
	 */
	public toJson() : any {
		var json:any = {};
		for(var key in this) {
			var value = this[key];
			var type = typeof value;
			if(type === "number" || type === "string") {
				json[key] = value;
			}
		}

		return json;
	}

	public static evalValue(value:string, total:number) {
		var v = parseFloat(value);
		if(typeof value === "number") {
			return v;
		}

		if(value.indexOf("%") > 0) {
			v = total*v/100;
		}

		if(v < 0) {
			v = total + v;
		}

		return v;
	}

}

/**
 * Layouter的工厂。
 */
export class LayouterFactory extends Factory<Layouter> {
	private static factory : Factory<Layouter> = new Factory<Layouter>();

	public static register(type:string, creator:Function) {
		return LayouterFactory.factory.register(type, creator);
	}

	public static create(type:string, options?:any) : Layouter {
		return LayouterFactory.factory.create(type, options);
	}

	public static createWithJson(json:any) {
		var layouter = <Layouter>LayouterFactory.create(json.type, null);

		layouter.fromJson(json);

		return layouter;
	}
}

/**
 * 布局参数。
 * 如果父控件有指定childrenLayouter，那么其中的子控件需要有与之对应的LayouterParam。
 */
export class LayouterParam {
	public type : string;

	/**
	 * 与之关联的Widget。
	 */
	public set widget(value:Widget) {
		this._widget = value;
	}
	public get widget() : Widget {
		return this._widget;
	}
	protected _widget : Widget;

	public constructor(type:string) {
		this.type = type;
	}

	/**
	 * 从JSON数据创建。
	 */
	public fromJson(json:any) : LayouterParam {
		for(var key in json) {
			var value = json[key];
			var type = typeof value;
			if(type === "number" || type === "string") {
				this[key] = value;
			}
		}

		return this;
	}

	/**
	 * 转换成JSON数据。
	 */
	public toJson() : any {
		var json:any = {};
		for(var key in this) {
			var value = this[key];
			var type = typeof value;
			if(type === "number" || type === "string") {
				json[key] = value;
			}
		}

		return json;
	}
};

/**
 * LayouterParam的工厂。
 */
export class LayouterParamFactory extends Factory<LayouterParam> {
	private static factory : Factory<LayouterParam> = new Factory<LayouterParam>();

	public static register(type:string, creator:Function) {
		return LayouterParamFactory.factory.register(type, creator);
	}

	public static create(type:string, options?:any) : LayouterParam {
		return LayouterParamFactory.factory.create(type, options);
	}

	public static createWithJson(json:any) {
		var layouter = <LayouterParam>LayouterParamFactory.create(json.type, null);

		layouter.fromJson(json);

		return layouter;
	}
}

