
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";
import {IViewModal, BindingMode, ICollectionViewModal} from "./iview-modal";
import {ViewModalDefault} from "./view-modal-default"

/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。 
 */
export class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
	protected _current : number;
	protected _collection : Array<any>;
	protected _viewModalItems : Array<IViewModal>;
	
	public isCollectionViewModal = true;
	public getProp(path:string) : any {
		return this.currentViewModal.getProp(path);
	}

	public delProp(path:string, trigger:any) : IViewModal {
		return this.currentViewModal.delProp(path, trigger);
	}

	public setProp(path:string, value:any, trigger?:any) : IViewModal {
		this.currentViewModal.setProp(path, value, trigger);
		return this;
	}
	
	public addItem(data:any, index?:number) : ICollectionViewModal {
		var n = this._collection.length;
		var index = index < n ? index : n;
		
		this._collection.splice(index, 0, data);
		this._viewModalItems.splice(index, 0, this.createItemViewModal(index));

		this.notifyChange(Events.ITEM_ADD, "/", index, this);
		
		return this;
	}

	public removeItem(index:number) : ICollectionViewModal {
		this._collection.splice(index, 1);
		this._viewModalItems.splice(index, 1);
		this.notifyChange(Events.ITEM_DELETE, "/", index, this);

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
		this._current = Math.min(this._viewModalItems.length, Math.max(0, value));
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

export class ItemViewModal extends ViewModalDefault implements IViewModal {
	public index : number;
	public isCollectionViewModal = false;
	public collectionViewModal : CollectionViewModal;

	public getCommand(name:string) : ICommand {
		return this.collectionViewModal.getCommand(name);
	}

	public execCommand(name:string, args:any) : boolean{
		if(args) {
			args.$index = this.index;
		}else {
			args = {$index:this.index};
		}

		return this.collectionViewModal.execCommand(name, args);
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
	
	public notifyChange(type:string, path:string, value:any, trigger?:any) {
		if(this.isCurrent) {
			this.collectionViewModal.notifyChange(type, path, value, trigger);
		}

		super.notifyChange(type, path, value, trigger);
	}

	public constructor(collectionViewModal:CollectionViewModal, index:number) {
		super(collectionViewModal.collection[index]);

		this.index = index;
		this.collectionViewModal = collectionViewModal;
	}

	public static create(collectionViewModal:CollectionViewModal, index:number) { 
		return new ItemViewModal(collectionViewModal, index);
	}
}
