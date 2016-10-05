import {JsonSerializer} from "../json-serializer"
import {IViewModal, ICollectionViewModal, BindingMode} from "../mvvm/iview-modal";

/**
 * 绑定源。
 */
export interface IBindingSource {
	type : string;

	toJson() : any;
	fromJson(json:any);
};

/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModal中获取数据。
 */
export class BindingDataSource extends JsonSerializer implements IBindingSource{
	public value : any;
	public path : string;
	public type : string;
	public mode : BindingMode;
	public validationRule : string;
	public converters : Array<string>;

	constructor(path?:string, value?:any, mode?:BindingMode, validationRule?:string, converters?:Array<string>) {
		super();

		this.converters = converters;
		this.type = BindingDataSource.TYPE;
		this.validationRule = validationRule;
		this.mode = mode || BindingMode.TWO_WAY;
		
		if(path !== undefined) {
			this.path = path;
		}
		if(value !== undefined) {
			this.value = value;
		}
	}

	public static TYPE = "data";
	public static create(path?:string, value?:any, mode?:BindingMode, 
						 validationRule?:string, converters?:Array<string>) {
		return new BindingDataSource(path, value, mode, validationRule, converters);
	}
};

/**
 * 命令源。 
 */
export class BindingCommandSource extends JsonSerializer implements IBindingSource{
	public type : string;
	public command : string;
	public commandArgs : any;
	public eventHandler : Function;

	constructor(command:string, commandArgs?:any) {
		super();
		this.command = command;
		this.eventHandler = null;
		this.commandArgs = commandArgs;
		this.type = BindingCommandSource.TYPE;
	}

	public static TYPE = "command";
	public static create(command:string, commandArgs?:any) { 
		return new BindingCommandSource(command, commandArgs);
	}
}

/**
 * 单项数据绑定规则。
 */
export class BindingRuleItem {
	public prop : string;
	public source : IBindingSource;

	public toJson() : any {
		return {prop:this.prop, source:this.source.toJson()};
	}

	public fromJson(json:any) : BindingRuleItem {
		this.prop = json.prop;
		var source = json.source;
		if(source.command) {
			this.source = BindingCommandSource.create(source.command, source.commandArgs); 
		}else{
			this.source = BindingDataSource.create(source.path, source.value, source.mode,
							source.validationRule, source.converters);
		}

		return this;
	}

	constructor(prop:string, source:IBindingSource) {
		this.prop = prop;
		this.source = source;
	}

	public static create(prop:string, source:IBindingSource) {
		return new BindingRuleItem(prop, source);
	}
};

/**
 * 数据绑定规则。
 */
export class BindingRule {
	protected _items : any;

	public getSource(prop:string) : BindingRuleItem {
		return this._items[prop];
	}

	public forEach(func:(prop:string, item:BindingRuleItem) => void) {
		var items = this._items;
		for(var prop in items) {
			var item : BindingRuleItem = items[prop];
			func(prop, item);
		}
	}

	constructor(json:any) {
		this.fromJson(json);
	}

	public fromJson (json:any) : BindingRule {
		this._items = {};
		for(var prop in json) {
			var source = null;
			var sJson = json[prop];
			
			if(sJson.command) {
				source = BindingCommandSource.create(sJson.command, sJson.commandArgs) 
			}else{
				source = BindingDataSource.create(sJson.path, sJson.value, sJson.mode, 
												  sJson.validationRule, sJson.converters); 
			}
			this._items[prop] = BindingRuleItem.create(prop, source);
		}

		return this;
	}

	public toJson() : any {
		var json = {};
		var items = this._items;

		for(var prop in items) {
			var item = items[prop];
			json[prop] = item.toJson();
		}

		return json;
	}

	public static parse(rule:any) : any {
		if(typeof rule === "string") {
			rule = {value: {path : rule}};
		}
		
		for(var key in rule) {
			var dataSource = rule[key];

			if(typeof dataSource === "string") {
				rule[key] = {path:dataSource};
				dataSource = rule[key];
			}

			var path = dataSource.path;
			if(path && path.charAt(0) !== '/') {
				dataSource.path = '/' + dataSource.path;
			}
		}

		return rule;
	}

	public static create(rule:any) : BindingRule {
		var json = BindingRule.parse(rule);

		return new BindingRule(json);
	}
}

