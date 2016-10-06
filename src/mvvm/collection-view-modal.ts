
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {DelegateCommand} from "./delegate-command";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule, ValidationResult} from "./ivalidation-rule";
import {IViewModal, BindingMode, ICollectionViewModal} from "./iview-modal";
import {ViewModalDefault} from "./view-modal-default"

/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。 
 */
export class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
	protected _current : number;
	protected _collection : Array<any>;
	protected _viewModalItems : Array<IViewModal>;
	
	public isCollection = true;
	public getProp(path:string, converterName?:string) : any {
		var vm = this.currentViewModal;

		return vm ? vm.getProp(path, converterName) : null;
	}

	public delProp(path:string) : IViewModal {
		var vm = this.currentViewModal;
		return vm ? vm.delProp(path) : this;
	}

	public setProp(path:string, value:any, converterName?:string, validationRule?:string) : ValidationResult {
		var vm = this.currentViewModal;
		return vm ? vm.setProp(path, value, converterName, validationRule) : ValidationResult.invalidResult;
	}

	public onItemsChange(callback:Function) : ICollectionViewModal {
		this.on(Events.ITEM_ADD, callback);
		this.on(Events.ITEM_DELETE, callback);

		return this;
	}

	public offItemsChange(callback:Function) : ICollectionViewModal {
		this.off(Events.ITEM_ADD, callback);
		this.off(Events.ITEM_DELETE, callback);

		return this;
	}

	protected fixState() {
		var n = this._collection.length;
		if(this.current >= n) {
			this.current = n-1;
		}
		this._viewModalItems.forEach((item:ItemViewModal, index:number) => {
			item.index = index;
		});
	}

	public addItem(data:any, index?:number) : ICollectionViewModal {
		var n = this._collection.length;
		var index = index < n ? index : n;
		
		this._collection.splice(index, 0, data);
		this._viewModalItems.splice(index, 0, this.createItemViewModal(index));

		this.fixState();
		this.notifyChange(Events.ITEM_ADD, "/", index);
		
		return this;
	}

	public removeItem(index:number) : ICollectionViewModal {
		this._collection.splice(index, 1);
		this._viewModalItems.splice(index, 1);
		
		this.fixState();
		this.notifyChange(Events.ITEM_DELETE, "/", index);
		
		return this;
	}

	public get collection() : Array<any> {
		return this._collection;
	}
	public get currentViewModal() : IViewModal {
		return this._viewModalItems[this._current];
	}

	public set total(value:number) {
	}
	public get total() : number {
		return this._viewModalItems.length;
	}

	public set current(value:number) {
		this._current = Math.min(this._viewModalItems.length-1, Math.max(0, value));
		this.notifyChange(Events.PROP_CHANGE, "/", value);
	}

	public get current() : number {
		return this._current;
	}

	public getItemViewModal(index:number) : IViewModal {
		var i = (index >= 0 && index < this._viewModalItems.length) ? index : this._current;
		return this._viewModalItems[i];
	}

	constructor(data:Array<any>) {
		super(data);
		this._collection = data;

		var n = data.length;
		var viewModalItems = [];
		for(var i = 0; i < n; i++) {
			viewModalItems.push(this.createItemViewModal(i));
		}

		this._current = 0;
		this._viewModalItems = viewModalItems;
	}

	protected createItemViewModal(index:number) : IViewModal {
		return ItemViewModal.create(this, index);
	}

	public static create(data:Array<any>) : IViewModal {
		var viewModal = new CollectionViewModal(data);

		return viewModal;
	}
};

/**
 * 表示集合ViewModal中的单项ViewModal。
 * 
 */
export class ItemViewModal extends ViewModalDefault implements IViewModal {
	public index : number;
	public isCollection = false;
	public collectionViewModal : CollectionViewModal;

	public getCommand(name:string) : ICommand {
		var cmd = super.getCommand(name);
		if(!cmd) {
			cmd = this.collectionViewModal.getCommand(name);
		}

		return cmd;
	}

	public canExecute(name:string) : boolean {
		if(super.canExecute(name)) {
			return true;
		}else{
			return this.collectionViewModal.canExecute(name);
		}
	}

	public execCommand(name:string, args:any) : boolean{
		var cmd = super.getCommand(name);
		if(cmd) {
			return super.execCommand(name, args);
		}else{
			if(args) {
				args.$index = this.index;
			}else {
				args = {$index:this.index};
			}

			return this.collectionViewModal.execCommand(name, args);
		}
	}

	public convert(converterName:string, value:any) : any {
		return this.collectionViewModal.convert(converterName, value);	
	}

	public convertBack(converterName:string, value:any) : any {
		return this.collectionViewModal.convertBack(converterName, value);
	}

	public isValueValid(ruleName:string, value:any) : ValidationResult {
		return this.collectionViewModal.isValueValid(ruleName, value);
	}

	public getValueConverter(name:string) : IValueConverter {
		return this.collectionViewModal.getValueConverter(name);
	}

	public getValidationRule(name:string) : IValidationRule {
		return this.collectionViewModal.getValidationRule(name);
	}

	public isCurrent() : boolean {
		return this.collectionViewModal.current === this.index; 
	}
	
	public notifyChange(type:string, path:string, value:any) {
		if(this.isCurrent) {
			this.collectionViewModal.notifyChange(type, path, value);
		}

		super.notifyChange(type, path, value);
	}

	protected initCommands() {
		var collectionViewModal = this.collectionViewModal;
		this.registerCommand("activate", DelegateCommand.create(args => {
			collectionViewModal.current = this.index;
		}));

		this.registerCommand("remove", DelegateCommand.create(args => {
			collectionViewModal.removeItem(collectionViewModal.current);
		}));
	}

	public constructor(collectionViewModal:CollectionViewModal, index:number) {
		super(collectionViewModal.collection[index]);

		this.index = index;
		this.collectionViewModal = collectionViewModal;
		
		this.initCommands();
	}

	public static create(collectionViewModal:CollectionViewModal, index:number) { 
		return new ItemViewModal(collectionViewModal, index);
	}
}
