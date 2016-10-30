
import {Emitter} from "../emitter";
import Events = require("../events");
import {ICommand} from "./icommand";
import {IFilter} from "./ifilter";
import {IComparator} from "./icomparator";
import {DelegateCommand} from "./delegate-command";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule, ValidationResult} from "./ivalidation-rule";
import {IViewModal, BindingMode, ICollectionViewModal} from "./iview-modal";
import {ViewModalDefault} from "./view-modal-default"

/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。 
 */
export class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
	public isCollection = true;

	/**
	 * 原始的数据。
	 */
	public get collection() : Array<any> {
		return this._collection;
	}
	protected _collection : Array<any>;

	/**
	 * 当前数据项的序号。
	 */
	public set current(value:number) {
		var viewModalItems = this.viewModalItems;
		this._current = Math.min(viewModalItems.length-1, Math.max(0, value));
		this.notifyChange(Events.PROP_CHANGE, "/", value);
	}
	public get current() : number {
		return this._current;
	}
	protected _current : number;

	/**
	 * 过滤之后总的项数。
	 */
	public set total(value:number) {
	}
	public get total() : number {
		return this.viewModalItems.length;
	}

	/**
	 * 子项目的ViewModal
	 */
	protected get viewModalItems() : Array<ItemViewModal>{
		if(this.needUpdateViewModalItems) {
			this.updateViewModalItems();
		}

		return this._viewModalItems;
	}
	protected _viewModalItems : Array<ItemViewModal>;

	/*
	 * 对于属性操作，都是针对当前项的ViewModal的操作。
	 */
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
	/**
	 * 当前项的ViewModal
	 */
	public get currentViewModal() : IViewModal {
		return this.viewModalItems[this._current];
	}

	/**
	 * 注册子项的增加删除的变化事件。
	 */
	public onItemsChange(callback:Function) : ICollectionViewModal {
		this.on(Events.ITEMS_CHANGE, callback);

		return this;
	}
	/**
	 * 注销子项的增加删除的变化事件。
	 */
	public offItemsChange(callback:Function) : ICollectionViewModal {
		this.off(Events.ITEMS_CHANGE, callback);

		return this;
	}

	/**
	 * 增加一个数据项。
	 */
	public addItem(data:any, index?:number) : ICollectionViewModal {
		var n = this._collection.length;
		var index = index < n ? index : n;
		this._collection.splice(index, 0, data);
		this.updateViewModalItems(true);
		
		return this;
	}

	/**
	 * 删除一个数据项。
	 */
	public removeItem(index:number) : ICollectionViewModal {
		this._collection.splice(index, 1);
		this.updateViewModalItems(true);
		
		return this;
	}

	/**
	 * 获取指定序号的子ViewModal
	 */
	public getItemViewModal(index:number) : IViewModal {
		var i = (index >= 0 && index < this.total) ? index : this._current;
		return this.viewModalItems[i];
	}
	
	public getItemData(index:number) : any{
		var i = (index >= 0 && index < this.total) ? index : this._current;
		return this._filteredSortedCollection[i];
	}

	/*
	 * 获取过滤并排序之后的集合。
	 */
	protected getFilteredSortedCollection() : Array<any> {
		var collection = this._collection;
		var filteredSortedCollection = null;
		var filter = this.filters && this.filter ? this.filters[this.filter] : null;
		
		if(filter) {
			filteredSortedCollection = collection.filter((item) => {
				return filter.check(item);
			});
		}else{
			filteredSortedCollection = collection.slice();
		}

		var comparator = this.comparators && this.comparator ? this.comparators[this.comparator] : null;
		if(comparator) {
			filteredSortedCollection.sort(function(a, b) {
				return comparator.compare(a, b);
			});
		}
		this._filteredSortedCollection = filteredSortedCollection;

		return filteredSortedCollection;
	}
	protected _filteredSortedCollection:Array<any>;

	/**
	 * 获取排序过滤集合中的序数对应于原始集合中的序数。
	 */
	public getRawIndexOf(index:number) : number {
		if((this.comparators && this.comparator) || (this.filters && this.filter)) {
			var obj = this._filteredSortedCollection[index];

			return this.collection.indexOf(obj);
		}else{
			return index;
		}
	}

	/*
	 * 创建一个子ViewModal。
	 */
	protected createItemViewModal(index:number, data:any) : ItemViewModal{
		return ItemViewModal.create(this, index, data);
	}

	/*
	 * 重新创建ViewModalItems。
	 */
	protected updateViewModalItems(force?:boolean) {
		if(force || this.needUpdateViewModalItems) {
			this.needUpdateViewModalItems = false;
			
			console.time("filter and sort");
			var collection = this.getFilteredSortedCollection();
			
			var n = collection.length;
			if(this.current >= n) {
				this.current = n-1;
			}

			if(this._viewModalItems) {
				this._viewModalItems.forEach((item:ItemViewModal) => {
					item.dispose();
				});
			}

			this._viewModalItems = <any>collection.map((data:any, i:number) => {
				return this.createItemViewModal(i, data);
			})
			console.timeEnd("filter and sort");

			setTimeout(evt => {
				console.time("notify ITEMS_CHANGE");
				this.notifyChange(Events.ITEMS_CHANGE, "/", null);
				console.timeEnd("notify ITEMS_CHANGE");
			}, 0);
		}
	}
	protected needUpdateViewModalItems : boolean;

	/**
	 * 注册过滤器。
	 */
	public registerFilter(name:string, filter:IFilter) : CollectionViewModal {
		this.filters[name] = filter;
		return this;
	}
	/**
	 * 注销过滤器。
	 */
	public unregisterFilter(name:string) : CollectionViewModal {
		delete this.filters[name];
		return this;
	}
	protected filters:any = {}; 
	
	/**
	 * 当前的过滤器器。
	 */
	public set filter(name:string) {
		this._filter = name;
		this.needUpdateViewModalItems = true;
		this.updateViewModalItems();
	}
	public get filter() : string {
		return this._filter;
	}
	protected _filter : string; 

	/**
	 * 注册排序用的比较器。 
	 */
	public registerComparator(name:string, comparator:IComparator) : CollectionViewModal {
		this.comparators[name] = comparator;
		return this;
	}
	/**
	 * 注销排序用的比较器。 
	 */
	public unregisterComparator(name:string) : CollectionViewModal {
		delete this.comparators[name];
		return this;
	}
	protected comparators:any = {};
	
	/**
	 * 设置当前的比较器。
	 */
	public set comparator(name:string) {
		this._comparator = name;
		this.needUpdateViewModalItems = true;
		this.updateViewModalItems();
	}
	public get comparator() : string {
		return this._comparator;
	}
	protected _comparator : string;

	constructor(data:Array<any>) {
		super(data);
		this._current = 0;
		this._collection = data;
		this.needUpdateViewModalItems = true;
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
		this.registerCommand("activate", DelegateCommand.create(args => {
			this.collectionViewModal.current = this.index;
		}));

		this.registerCommand("remove", DelegateCommand.create(args => {
			this.collectionViewModal.removeItem(this.collectionViewModal.getRawIndexOf(this.index));
		}));
	}
	
	public constructor() {
		super(null);
		this.initCommands();
	}
	
	public init(collectionViewModal:CollectionViewModal, index:number, data:any) : ItemViewModal {
		this.collectionViewModal = collectionViewModal;
		this.index = index;
		this.data = data;

		return this;
	}

	public dispose() {
		this.index = -1;
		this.removeAllListeners();
		this.collectionViewModal = null;
		ItemViewModal.cache.push(this);
	}
	
	public static cache : Array<ItemViewModal> = [];
	public static create(collectionViewModal:CollectionViewModal, index:number, data:any) { 
		var vm = ItemViewModal.cache.length > 0 ? ItemViewModal.cache.pop() : (new ItemViewModal());
		return vm.init(collectionViewModal, index, data);
	}
}
