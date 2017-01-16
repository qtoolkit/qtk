import {JsonSerializer} from "../json-serializer"
import {toUpdateTiming, toBindingMode} from "../mvvm/iview-model";
import {IViewModel, ICollectionViewModel, UpdateTiming, BindingMode} from "../mvvm/iview-model";

export type DataSourceType = "data" | "command";

/**
 * 绑定源。
 */
export interface IBindingSource {
	/**
	 * 类型。命令或数据。
	 */
	type : DataSourceType;

	toJson() : any;
	fromJson(json:any);
};

/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModel中获取数据。
 */
export class BindingDataSource extends JsonSerializer implements IBindingSource{
	/**
	 * 常量数据。如果存在则优先使用此值，否则通过path从ViewModel中获取。
	 */
	public value : any;
	
	/**
	 * 路径。通过path从ViewModel中获取数据。
	 */
	public path : string;
	
	public type : DataSourceType;
	/**
	 * 绑定模式。
	 */
	public mode : BindingMode;
	/**
	 * 转换器。
	 */
	public converter : string;
	/**
	 * 验证器。
	 */
	public validationRule : string;
	/**
	 * 更新ViewModel的时机。
	 */
	public updateTiming : UpdateTiming;

	constructor(path?:string, value?:any, mode?:BindingMode, updateTiming?:UpdateTiming, 
				validationRule?:string, converter?:string){
		super();

		this.converter = converter;
		this.type = <DataSourceType>BindingDataSource.TYPE;
		this.validationRule = validationRule;
		this.mode = mode || BindingMode.TWO_WAY;
		this.updateTiming = updateTiming !== undefined ? updateTiming :  UpdateTiming.CHANGING;

		if(path !== undefined) {
			this.path = path;
		}
		if(value !== undefined) {
			this.value = value;
		}
	}

	public static TYPE = "data";
	public static create(path?:string, value?:any, mode?:BindingMode, updateTiming?:UpdateTiming, 
						 validationRule?:string, converter?:string) {
		return new BindingDataSource(path, value, mode, updateTiming, validationRule, converter);
	}
};

/**
 * 命令源。 
 */
export class BindingCommandSource extends JsonSerializer implements IBindingSource{
	public type : DataSourceType;
	/**
	 * 命令的名称。
	 */
	public command : string;
	/**
	 * 命令的参数。
	 */
	public commandArgs : any;
	/**
	 * 命令的处理函数。
	 */
	public eventHandler : Function;

	constructor(command:string, commandArgs?:any) {
		super();
		this.command = command;
		this.eventHandler = null;
		this.commandArgs = commandArgs;
		this.type = <DataSourceType>BindingCommandSource.TYPE;
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
	/**
	 * 属性名。
	 */
	public prop : string;
	/**
	 * 数据源。
	 */
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
			this.source = BindingDataSource.create(source.path, source.value, source.mode, source.updateTiming,
							source.validationRule, source.converter);
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

	constructor() {
	}

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

	public fromData(json:any) : BindingRule {
		this._items = {};
		for(var prop in json) {
			var source = null;
			var sJson = json[prop];
			
			if(sJson.command) {
				source = BindingCommandSource.create(sJson.command, sJson.commandArgs) 
			}else{
				source = BindingDataSource.create(sJson.path, sJson.value, sJson.mode, sJson.updateTiming, 
												  sJson.validationRule, sJson.converter); 
			}
			this._items[prop] = BindingRuleItem.create(prop, source);
		}

		return this;
	}
	
	public fromJson(json:any) : BindingRule {
		this._items = {};
		for(var prop in json) {
			var source = null;
			var propJson = json[prop];
			var sourceJson = propJson.source;
			
			if(sourceJson.command) {
				source = BindingCommandSource.create(sourceJson.command, sourceJson.commandArgs) 
			}else{
				source = BindingDataSource.create(sourceJson.path, sourceJson.value, sourceJson.mode, 
								sourceJson.updateTiming, sourceJson.validationRule, sourceJson.converter); 
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
			var mode = dataSource.mode;
			if(mode && typeof mode === "string") {
				dataSource.mode = toBindingMode(mode);
			}

			var updateTiming = dataSource.updateTiming;
			if(updateTiming && typeof updateTiming === "string") {
				dataSource.updateTiming = toUpdateTiming(updateTiming);
			}
		}

		return rule;
	}

	public static create(data:any) : BindingRule {
		var rule = new BindingRule();
		
		return rule.fromData(BindingRule.parse(data));
	}
	
	public static createFromJson(json:any) : BindingRule {
		var rule = new BindingRule();
		
		return rule.fromJson(json);
	}
}

