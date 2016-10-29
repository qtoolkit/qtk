
var pointer = require('json-pointer');
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {BindingDataSource} from "./binding-rule";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule, ValidationResult} from "./ivalidation-rule";
import {IViewModal, BindingMode,ICollectionViewModal} from "./iview-modal";

export class ViewModalDefault extends Emitter implements IViewModal {
	private _data : any;
	private _commands : any;
	private _converters : any;
	private _validationRules : any;
	private _ePropChange : Events.PropChangeEvent;
	
	public isCollection : boolean;

	public get data() : any {
		return this._data;
	}

	public set data(value:any) {
		this._data = value;
		this.notifyChange(Events.PROP_CHANGE, "/", null);
	}

	constructor(data:any) {
		super();

		this._commands = {};
		this._converters = {};
		this._data = data || {};
		this._validationRules = {};
		this.isCollection = false;
		this._ePropChange = Events.PropChangeEvent.create();
	}
	
	public getBindingMode() : BindingMode {
		return BindingMode.TWO_WAY;
	}

	public onChange(callback:Function) : IViewModal {
		this.on(Events.PROP_DELETE, callback);
		this.on(Events.PROP_CHANGE, callback);

		return this;
	}

	public offChange(callback:Function) : IViewModal {
		this.off(Events.PROP_DELETE, callback);
		this.off(Events.PROP_CHANGE, callback);

		return this;
	}

	public notifyChange(type:string, path:string, value:any) {
		this.dispatchEvent(this._ePropChange.init(type, {prop:path, value:value}));
	}

	protected fixPath(path:string) : string {
		if(path && path.charAt(0) !== '/') {
			return '/' + path;
		}else{
			return path;
		}
	}

	public getProp(path:string, converterName?:string) : any {
		var value = pointer.get(this._data, this.fixPath(path));

		return this.convert(converterName, value);
	}

	public delProp(path:string) : IViewModal {
		pointer.remove(this._data, path);
		this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null);

		return this;
	}
	
	public setPropEx(source:BindingDataSource, value: any, oldValue?:any) : ValidationResult {
		var path = source.path;
		var converterName = source.converter;
		var validationRule = source.validationRule;

		return this.setProp(path, value, converterName, validationRule);
	}

	public setProp(path:string, v:any, converterName?:string, validationRule?:string) : ValidationResult {
		
		var value = this.convertBack(converterName, v);
		var validateResult = this.isValueValid(validationRule, value);
		if(!validateResult.code) {
			pointer.set(this._data, path, value);
			this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value);
		}else{
			console.log("invalid value");
		}

		return validateResult;;
	}

	public getCommand(name:string) : ICommand {
		return this._commands[name];
	}
	
	public canExecute(name:string) : boolean {
		var ret = false;
		var cmd = this.getCommand(name);

		if(cmd && cmd.canExecute()) {
			ret = true;
		}

		return ret;
	}

	public execCommand(name:string, args:any) : boolean{
		var ret = false;
		var cmd = this.getCommand(name);

		if(cmd && cmd.canExecute()) {
			ret = cmd.execute(args);
		}

		return ret;
	}

	public registerCommand(name:string, cmd:ICommand) : IViewModal {
		this._commands[name] = cmd;

		return this;
	}
	public unregisterCommand(name:string) : IViewModal {
		this._commands[name] = null;
	
		return this;
	}
	
	public getValueConverter(name:string) : IValueConverter {
		return this._converters[name];
	}
	public registerValueConverter(name:string, converter:IValueConverter) : IViewModal {
		this._converters[name] = converter;

		return this;
	}
	public unregisterValueConverter(name:string) : IViewModal {
		this._converters[name] = null;
	
		return this;
	}
	
	public convert(converterName:string, value:any) : any {
		var converter = converterName ? this.getValueConverter(converterName) : null;
		return converter ? converter.convert(value) : value;
	}
	
	public convertBack(converterName:string, value:any) : any {
		var converter = converterName ? this.getValueConverter(converterName) : null;
		return converter ? converter.convertBack(value) : value;
	}

	public getValidationRule(name:string) : IValidationRule {
		return this._validationRules[name];
	}
	public registerValidationRule(name:string, validationRule:IValidationRule) : IViewModal {
		this._validationRules[name] = validationRule;

		return this;
	}
	public unregisterValidationRule(name:string) : IViewModal {
		this._validationRules[name] = null;
	
		return this;
	}

	public isValueValid(ruleName:string, value:any) : ValidationResult {
		var validationRule = ruleName ? this.getValidationRule(ruleName) : null;

		return validationRule ? validationRule.validate(value) : ValidationResult.validResult;
	}

};
