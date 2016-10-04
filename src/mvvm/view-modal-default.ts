
var pointer = require('json-pointer');
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";
import {IViewModal, BindingMode,ICollectionViewModal} from "./iview-modal";

export class ViewModalDefault extends Emitter implements IViewModal {
	private _data : any;
	private _commands : any;
	private _converters : any;
	private _validationRules : any;
	private _ePropChange : Events.PropChangeEvent;
	
	public isCollectionViewModal = false;

	constructor(data:any) {
		super();

		this._commands = {};
		this._converters = {};
		this._data = data || {};
		this._validationRules = {};
		this._ePropChange = Events.PropChangeEvent.create();
	}
	
	public getBindingMode() : BindingMode {
		return BindingMode.TWO_WAY;
	}

	public onChange(callback:Function) {
		this.on(Events.PROP_DELETE, callback);
		this.on(Events.PROP_CHANGE, callback);
	}

	public offChange(callback:Function) {
		this.off(Events.PROP_DELETE, callback);
		this.off(Events.PROP_CHANGE, callback);
	}

	protected notifyChange(type:string, path:string, value:any, trigger?:any) {
		this.dispatchEvent(this._ePropChange.init(type, {prop:path, value:value, trigger:trigger}));
	}

	protected fixPath(path:string) : string {
		if(path && path.charAt(0) !== '/') {
			return '/' + path;
		}else{
			return path;
		}
	}

	public getProp(path:string) : any {
		return pointer.get(this._data, this.fixPath(path));
	}

	public delProp(path:string, trigger:any) : IViewModal {
		pointer.remove(this._data, path);
		this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null, trigger);

		return this;
	}
	
	public setProp(path:string, value:any, trigger?:any) : IViewModal {
		pointer.set(this._data, path, value);
		this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value, trigger);

		return this;
	}

	public getCommand(name:string) : ICommand {
		return this._commands[name];
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
	public unregisterCommand(name:string, cmd:ICommand) : IViewModal {
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
	public unregisterValueConverter(name:string, converter:IValueConverter) : IViewModal {
		this._converters[name] = null;
	
		return this;
	}
	
	public getValidationRule(name:string) : IValidationRule {
		return this._validationRules[name];
	}
	public registerValidationRule(name:string, validationRule:IValidationRule) : IViewModal {
		this._validationRules[name] = validationRule;

		return this;
	}
	public unregisterValidationRule(name:string, validationRule:IValidationRule) : IViewModal {
		this._validationRules[name] = null;
	
		return this;
	}
};
