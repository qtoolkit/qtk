
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";
import {IViewModal, BindingMode,ICollectionViewModal, ICollectionItemViewModal} from "./iview-modal";

export class ViewModal extends Emitter implements IViewModal {
	private _data : any;
	private _commands : any;
	private _converters : any;
	private _validationRules : any;
	private _ePropChange : Events.PropChangeEvent;

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

	public getProp(path:string) : any {
		return this._data[path];
	}

	public delProp(path:string, trigger:any) : ViewModal {
		delete this._data[path];
		this.notifyChange(Events.PROP_DELETE, path, null, trigger);

		return this;
	}
	
	public setProp(path:string, value:any, trigger?:any) : ViewModal {
		this._data[path] = value;
		this.notifyChange(Events.PROP_CHANGE, path, value, trigger);

		return this;
	}

	public getCommand(name:string) : ICommand {
		return this._commands[name];
	}
	public registerCommand(name:string, cmd:ICommand) : ViewModal {
		this._commands[name] = cmd;

		return this;
	}
	public unregisterCommand(name:string, cmd:ICommand) : ViewModal {
		this._commands[name] = null;
	
		return this;
	}
	
	public getValueConverter(name:string) : IValueConverter {
		return this._converters[name];
	}
	public registerValueConverter(name:string, converter:IValueConverter) : ViewModal {
		this._converters[name] = converter;

		return this;
	}
	public unregisterValueConverter(name:string, converter:IValueConverter) : ViewModal {
		this._converters[name] = null;
	
		return this;
	}
	
	public getValidationRule(name:string) : IValidationRule {
		return this._validationRules[name];
	}
	public registerValidationRule(name:string, validationRule:IValidationRule) : ViewModal {
		this._validationRules[name] = validationRule;

		return this;
	}
	public unregisterValidationRule(name:string, validationRule:IValidationRule) : ViewModal {
		this._validationRules[name] = null;
	
		return this;
	}

	createCollectionViewModal(path:string) : ICollectionViewModal {
		return null;
	}

	public static create(data:any) {
		var viewModal = new ViewModal(data);

		return viewModal;
	}
};
