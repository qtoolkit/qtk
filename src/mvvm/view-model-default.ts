
var pointer = require('json-pointer');
import {Emitter} from "../base/emitter";
import Events = require("../base/events");
import {BindingDataSource} from "./binding-rule";
import {IViewModel, BindingMode,ICollectionViewModel} from "./iview-model";

export class ViewModelDefault extends Emitter implements IViewModel {
	private _model      : any;
	private _commands   : any;
	private _converters : any;
	private _validators : any;
	private _ePropChange : Events.PropChangeEvent;

	public isCollection : boolean;

	public get model() : any {
		return this._model;
	}

	public set model(value:any) {
		this.setModel(value, true);
	}

	public setModel(value:any, notify:boolean) : IViewModel {
		this._model = value;
		if(notify) {
			this.notifyChange(Events.PROP_CHANGE, "/", null);
		}

		return this;
	}

	constructor(data:any) {
		super();

		this._commands = {};
		this._converters = {};
		this._model = data || {};
		this._validators = {};
		this.isCollection = false;
		this._ePropChange = Events.PropChangeEvent.create();
	}
	
	public onChange(callback:Function) : IViewModel {
		this.on(Events.PROP_DELETE, callback);
		this.on(Events.PROP_CHANGE, callback);

		return this;
	}

	public offChange(callback:Function) : IViewModel {
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

	public getProp(path:string) : any {
		return pointer.get(this._model, this.fixPath(path));
	}

	public setProp(path:string, value:any) : boolean {
		pointer.set(this._model, path, value);
		this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value);

		return true;
	}

	public canExecute(name:string, args:any) : boolean {
		var ret = false;
		var model:any = this.model;
		var func = "can" + name[0].toUpperCase() + name.substr(1);
		if(model[func]) {
			ret = model[func]();
		}else{
			ret = true;
		}

		return ret;
	}

	public execCommand(name:string, args:any) : boolean{
		var ret = false;
		var model:any = this.model;
		var func = name[0].toLowerCase() + name.substr(1);
		if(model[func]) {
			ret = model[func](args);
		}

		return ret;
	}

	public convert(name:string, value:any) : any {
		var model:any = this.model;
		if(model['convert']) {
			return model['convert'](name, value);
		}

		return value;
	}

	public convertBack(name:string, value:any) : any {
		var model:any = this.model;
		if(model['convertBack']) {
			return model['convertBack'](name, value);
		}

		return value;
	}

	public isValueValid(name:string, value:any, msg:any) : boolean {
		var model:any = this.model;
		if(model['isValid']) {
			return model['isValid'](name, value, msg);
		}

		return true;
	}
};
