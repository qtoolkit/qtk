
import Events = require("../events");
import {Emitter} from "../emitter";

export class PropDesc {
	public type : string;
	public name : string;
	public desc : string;
	public value : any;

	constructor(type:string) {
		this.type = type;
	}

	public setBasic(name:string, value:any, desc?:string) {
		this.name = name;
		this.desc = desc;
		this.value = value;
	}

	/**
	 * DataBinding
	 */
	public path : string;
	public converter : string;
	public validationRule : string;
	public setDataBindingRule(path:string, converter?:string, validationRule?:string) : PropDesc {
		this.path = path;
		this.converter = converter;
		this.validationRule = validationRule;

		return this;
	}
};

export class NumberPropDesc extends PropDesc {
	public max : number;
	public min : number;

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

export class TextPropDesc extends PropDesc {
	constructor() {
		super(TextPropDesc.TYPE);
	}
	
	public static TYPE = "text";
	public static create() {
		return new TextPropDesc();
	}
}

export class LinkPropDesc extends PropDesc {
	constructor() {
		super(LinkPropDesc.TYPE);
	}

	public static TYPE = "link";
	public static create() {
		return new LinkPropDesc();
	}
}

export class ReadonlyTextPropDesc extends PropDesc {
	constructor() {
		super(ReadonlyTextPropDesc.TYPE);
	}

	public static TYPE = "text-readonly";
	public static create() {
		return new ReadonlyTextPropDesc();
	}
}

export class SliderPropDesc extends PropDesc {
	constructor() {
		super(SliderPropDesc.TYPE);
	}
	
	public static TYPE = "slider";
	public static create() {
		return new SliderPropDesc();
	}
}

export class RangePropDesc extends PropDesc {
	constructor() {
		super(RangePropDesc.TYPE);
	}
	
	public static TYPE = "range";
	public static create() {
		return new RangePropDesc();
	}
}

export class Vector2PropDesc extends PropDesc {
	constructor() {
		super(Vector2PropDesc.TYPE);
	}
	
	public static TYPE = "vector2";
	public static create() {
		return new Vector2PropDesc();
	}
}

export class Vector3PropDesc extends PropDesc {
	constructor() {
		super(Vector3PropDesc.TYPE);
	}
	
	public static TYPE = "vector3";
	public static create() {
		return new Vector3PropDesc();
	}
}

export class LinePropDesc extends PropDesc {
	constructor() {
		super(LinePropDesc.TYPE);
	}
	
	public static TYPE = "line";
	public static create() {
		return new LinePropDesc();
	}
}
export class OptionsPropDesc extends PropDesc {
	public options:any;

	constructor(options:any) {
		super(OptionsPropDesc.TYPE);
		this.options = options;
	}
	
	public static TYPE = "options";
	public static create(options:any) {
		return new OptionsPropDesc(options);
	}
}

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
			}else if(type === LinkPropDesc.TYPE) {
				desc = LinkPropDesc.create();
			}else if(type === ReadonlyTextPropDesc.TYPE) {
				desc = ReadonlyTextPropDesc.create();
			}else if(type === RangePropDesc.TYPE) {
				desc = RangePropDesc.create();
			}else if(type === Vector2PropDesc.TYPE) {
				desc = Vector2PropDesc.create();
			}else if(type === Vector3PropDesc.TYPE) {
				desc = Vector3PropDesc.create();
			}else if(type === OptionsPropDesc.TYPE) {
				desc = OptionsPropDesc.create(data.options);
			}else if(type === LinePropDesc.TYPE) {
				desc = LinePropDesc.create();
			}else{
				console.log("not supported:" + type);
				return;
			}
			
			items.push(desc);
			desc.setBasic(data.name, data.value, data.desc);
			desc.setDataBindingRule(data.path, data.converter, data.validationRule);
		});
	
		this._items = items;

		return this;
	}

	public static create(json:any) : PropsDesc {
		var propsDesc = new PropsDesc();

		return propsDesc.parse(json);
	}
};

export class PagePropsDesc {
	public title:string;
	public propsDesc:PropsDesc;

	constructor(title:string, propsDesc:PropsDesc) {
		this.title = title;
		this.propsDesc = propsDesc;
	}

	public static create(title:string, json:any) : PagePropsDesc {
		var propsDesc = PropsDesc.create(json);
		var pagePropsDesc = new PagePropsDesc(title, propsDesc);

		return pagePropsDesc;
	}
};

