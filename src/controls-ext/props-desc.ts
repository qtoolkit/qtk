
import Events = require("../events");
import {Emitter} from "../emitter";

/**
 * @class PropDesc
 * 属性描述的基类。
 */
export class PropDesc {
	/**
	 * @property {string} type
	 * 属性的类型。
	 */
	public type : string;
	
	/**
	 * @property {string} name
	 * 属性的名称。
	 */
	public name : string;
	
	/**
	 * @property {string} desc 
	 * 属性的描述。
	 */
	public desc : string;
	
	/**
	 * @property {string} value 
	 * 属性的值。
	 */
	public value : any;
	
	/**
	 * @property {string} titleW 
	 * 标题的宽度。
	 */
	public titleW : string;

	/**
	 * @property {string} valueW 
	 * 值的宽度。
	 */
	public valueW : string;
	
	/**
	 * @property {string} updateTiming
	 * 更新时机。可选择值："changing", "changed", "explicit"
	 */
	public updateTiming : string;

	public static keys = ["type", "name", "desc", "value", "path", "titleW", "valueW", "converter", "validationRule"];
	
	public toJson() : any {
		var json : any = {};

		PropDesc.keys.forEach((key:string) => {
			var value = this[key];
			if(value !== undefined) {
				json[key] = value;
			}
		});

		return json;
	}
	
	public fromJson(json:any) {
		PropDesc.keys.forEach((key:string) => {
			var value = this[key];
			if(value !== undefined) {
				this[key] = value;
			}
		});
	}

	constructor(type:string) {
		this.type = type;
	}

	public setBasic(name:string, value:any, desc?:string, titleW?:string, valueW?:string) {
		this.name = name;
		this.desc = desc;
		this.value = value;
		this.titleW = titleW;
		this.valueW = valueW;
	}

	/**
	 * @property {string} path
	 * 数据绑定的path。
	 */
	public path : string;

	/**
	 * @property {string} converter
	 * 数据绑定的数据转换器的名称。
	 */
	public converter : string;
	
	/**
	 * @property {string} validationRule
	 * 数据绑定的数据有效性验证规则的名称。
	 */
	public validationRule : string;

	public setDataBindingRule(path:string, updateTiming?:string, 
							  converter?:string, validationRule?:string) : PropDesc {
		this.path = path;
		this.converter = converter;
		this.validationRule = validationRule;
		this.updateTiming = updateTiming || "changed";

		return this;
	}
};

/**
 * @class NumberPropDesc
 * @extends PropDesc
 * 数值类属性描述。
 */
export class NumberPropDesc extends PropDesc {
	public max : number;
	public min : number;

	public toJson() : any {
		var json = super.toJson();
		json.min = this.min;
		json.max = this.max;

		return json;
	}
	
	public fromJson(json:any) {
		super.fromJson(json);
		this.min = json.min;
		this.max = json.max;
	}

	constructor(min:number, max:number) {
		super(NumberPropDesc.TYPE);
		this.min = min;
		this.max = max;
	}

	public static TYPE = "number";
	public static create(min:number, max:number) {
		return new NumberPropDesc(min, max);
	}
};

/**
 * @class TextPropDesc
 * @extends PropDesc
 * 文本类属性描述。
 */
export class TextPropDesc extends PropDesc {
	constructor() {
		super(TextPropDesc.TYPE);
	}
	
	public static TYPE = "text";
	public static create() {
		return new TextPropDesc();
	}
}

/**
 * @class ColorPropDesc
 * @extends PropDesc
 * 颜色类属性描述。
 */
export class ColorPropDesc extends PropDesc {
	constructor() {
		super(ColorPropDesc.TYPE);
	}
	
	public static TYPE = "color";
	public static create() {
		return new ColorPropDesc();
	}
}

/**
 * @class LinkPropDesc
 * @extends PropDesc
 * 超链接类属性描述。
 */
export class LinkPropDesc extends PropDesc {
	constructor() {
		super(LinkPropDesc.TYPE);
	}

	public static TYPE = "link";
	public static create() {
		return new LinkPropDesc();
	}
}

/**
 * @class ReadonlyTextPropDesc
 * @extends PropDesc
 * 只读文本类属性描述。
 */
export class ReadonlyTextPropDesc extends PropDesc {
	constructor() {
		super(ReadonlyTextPropDesc.TYPE);
	}

	public static TYPE = "text-readonly";
	public static create() {
		return new ReadonlyTextPropDesc();
	}
}

/**
 * @class SliderPropDesc
 * @extends PropDesc
 * Slider类属性描述。
 */
export class SliderPropDesc extends PropDesc {
	constructor() {
		super(SliderPropDesc.TYPE);
	}
	
	public static TYPE = "slider";
	public static create() {
		return new SliderPropDesc();
	}
}

/**
 * @class RangePropDesc
 * @extends PropDesc
 * 范围类属性描述。
 */
export class RangePropDesc extends PropDesc {
	constructor() {
		super(RangePropDesc.TYPE);
	}
	
	public static TYPE = "range";
	public static create() {
		return new RangePropDesc();
	}
}

/**
 * @class Vector2PropDesc
 * @extends PropDesc
 * 2维向量类属性描述。
 */
export class Vector2PropDesc extends PropDesc {
	public xTitle : string;
	public yTitle : string;

	public toJson() : any {
		var json = super.toJson();
		json.xTitle = this.xTitle;
		json.yTitle = this.yTitle;

		return json;
	}
	
	public fromJson(json:any) {
		super.fromJson(json);
		this.xTitle = json.xTitle;
		this.yTitle = json.yTitle;
	}

	constructor(xTitle:string, yTitle:string) {
		super(Vector2PropDesc.TYPE);
		this.xTitle = xTitle;
		this.yTitle = yTitle;
	}
	
	public static TYPE = "vector2";
	public static create(xTitle:string, yTitle:string) {
		return new Vector2PropDesc(xTitle, yTitle);
	}
}

/**
 * @class Vector3PropDesc
 * @extends PropDesc
 * 3维向量类属性描述。
 */
export class Vector3PropDesc extends PropDesc {
	public xTitle : string;
	public yTitle : string;
	public zTitle : string;

	public toJson() : any {
		var json = super.toJson();
		json.xTitle = this.xTitle;
		json.yTitle = this.yTitle;
		json.zTitle = this.zTitle;

		return json;
	}
	
	public fromJson(json:any) {
		super.fromJson(json);
		this.xTitle = json.xTitle;
		this.yTitle = json.yTitle;
		this.zTitle = json.zTitle;
	}

	constructor(xTitle:string, yTitle:string, zTitle:string) {
		super(Vector3PropDesc.TYPE);
		this.xTitle = xTitle;
		this.yTitle = yTitle;
		this.zTitle = zTitle;
	}
	
	public static TYPE = "vector3";
	public static create(xTitle:string, yTitle:string, zTitle:string) {
		return new Vector3PropDesc(xTitle, yTitle, zTitle);
	}
}

/**
 * @class Vector4PropDesc
 * @extends PropDesc
 * 4维向量类属性描述。
 */
export class Vector4PropDesc extends PropDesc {
	public xTitle : string;
	public yTitle : string;
	public zTitle : string;
	public wTitle : string;

	public toJson() : any {
		var json = super.toJson();
		json.xTitle = this.xTitle;
		json.yTitle = this.yTitle;
		json.zTitle = this.zTitle;
		json.wTitle = this.wTitle;

		return json;
	}
	
	public fromJson(json:any) {
		super.fromJson(json);
		this.xTitle = json.xTitle;
		this.yTitle = json.yTitle;
		this.zTitle = json.zTitle;
		this.wTitle = json.wTitle;
	}

	constructor(xTitle:string, yTitle:string, zTitle:string, wTitle:string) {
		super(Vector4PropDesc.TYPE);
		this.xTitle = xTitle;
		this.yTitle = yTitle;
		this.zTitle = zTitle;
		this.wTitle = wTitle;
	}
	
	public static TYPE = "vector4";
	public static create(xTitle:string, yTitle:string, zTitle:string, wTitle:string) {
		return new Vector4PropDesc(xTitle, yTitle, zTitle, wTitle);
	}
}

/**
 * @class LinePropDesc
 * @extends PropDesc
 * 分组类属性描述。
 */
export class LinePropDesc extends PropDesc {
	constructor() {
		super(LinePropDesc.TYPE);
	}
	
	public static TYPE = "line";
	public static create() {
		return new LinePropDesc();
	}
}

/**
 * @class BoolPropDesc
 * @extends PropDesc
 * 布尔类属性描述。
 */
export class BoolPropDesc extends PropDesc {
	constructor() {
		super(BoolPropDesc.TYPE);
	}
	
	public static TYPE = "bool";
	public static create() {
		return new BoolPropDesc();
	}
}

/**
 * @class OptionsPropDesc
 * @extends PropDesc
 * 下拉框类属性描述。
 */
export class OptionsPropDesc extends PropDesc {
	public options:any;

	public toJson() : any {
		var json = super.toJson();
		json.options = this.options;

		return json;
	}

	public fromJson(json:any) {
		super.fromJson(json);
		this.options = json.options;
	}

	constructor(options:any) {
		super(OptionsPropDesc.TYPE);
		this.options = options;
	}
	
	public static TYPE = "options";
	public static create(options:any) {
		return new OptionsPropDesc(options);
	}
}

/**
 * @class PropsDesc
 * @extends Emitter
 * 属性组。
 */
export class PropsDesc extends Emitter {
	public _items : Array<PropDesc>;

	public notifyChange() : PropsDesc {
		var e = Events.ChangeEvent.create().init(Events.CHANGE, {value:null});
		this.dispatchEvent(e);
		e.dispose();

		return this;
	}

	public forEach(func:Function) {
		var items = this._items;
		items.forEach((item:PropDesc) => {
			func(item);
		});
	}

	public toJson() : any {
		var json:any = {};
		json.items = this._items.map((item:PropDesc) => {
			return item.toJson();
		});

		return json;
	};

	public fromJson(json:any) {
		this.parse(json.items);
	}

	public parse(json:Array<any>) : PropsDesc {
		var items : any = [];
		
		json.forEach(data => {
			var desc:PropDesc = null;
			var type = data.type;

			if(type === NumberPropDesc.TYPE) {
				desc = NumberPropDesc.create(data.min, data.max);
			}else if(type === SliderPropDesc.TYPE) {
				desc = SliderPropDesc.create();
			}else if(type === TextPropDesc.TYPE) {
				desc = TextPropDesc.create();
			}else if(type === ColorPropDesc.TYPE) {
				desc = ColorPropDesc.create();
			}else if(type === LinkPropDesc.TYPE) {
				desc = LinkPropDesc.create();
			}else if(type === ReadonlyTextPropDesc.TYPE) {
				desc = ReadonlyTextPropDesc.create();
			}else if(type === RangePropDesc.TYPE) {
				desc = RangePropDesc.create();
			}else if(type === Vector2PropDesc.TYPE) {
				desc = Vector2PropDesc.create(data.xTitle, data.yTitle);
			}else if(type === Vector3PropDesc.TYPE) {
				desc = Vector3PropDesc.create(data.xTitle, data.yTitle, data.zTitle);
			}else if(type === Vector4PropDesc.TYPE) {
				desc = Vector4PropDesc.create(data.xTitle, data.yTitle, data.zTitle, data.wTitle);
			}else if(type === OptionsPropDesc.TYPE) {
				desc = OptionsPropDesc.create(data.options);
			}else if(type === LinePropDesc.TYPE) {
				desc = LinePropDesc.create();
			}else if(type === BoolPropDesc.TYPE) {
				desc = BoolPropDesc.create();
			}else{
				console.log("not supported:" + type);
				return;
			}
			
			items.push(desc);
			desc.setBasic(data.name, data.value, data.desc, data.titleW, data.valueW);
			desc.setDataBindingRule(data.path, data.updateTiming, data.converter, data.validationRule);
		});
	
		this._items = items;

		return this;
	}

	public static create(json:any) : PropsDesc {
		var propsDesc = new PropsDesc();
		if(json) {
			propsDesc.parse(json);
		}

		return propsDesc;
	}
};

export class PagePropsDesc {
	public title:string;
	public propsDesc:PropsDesc;

	public toJson() : any {
		return {title:this.title, propsDesc:this.propsDesc.toJson()};
	}

	public fromJson(json:any) {
		this.title = json.title;
		this.propsDesc = PropsDesc.create(json.propsDesc.items);
	}

	public constructor(title:string, propsDesc:PropsDesc) {
		this.title = title;
		this.propsDesc = propsDesc;
	}

	public static create(title:string, json:any) : PagePropsDesc {
		var propsDesc = PropsDesc.create(json);
		var pagePropsDesc = new PagePropsDesc(title, propsDesc);

		return pagePropsDesc;
	}
};

