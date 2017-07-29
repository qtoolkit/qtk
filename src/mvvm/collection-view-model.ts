
import {Emitter} from "../base/emitter";
import Events = require("../base/events");
import {ICommand} from "./icommand";
import {IFilter} from "./ifilter";
import {IComparator} from "./icomparator";
import {DelegateCommand} from "./delegate-command";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule, ValidationResult} from "./ivalidation-rule";
import {IViewModel, BindingMode, ICollectionViewModel} from "./iview-model";
import {ViewModelDefault} from "./view-model-default"

/**
 * 集合ViewModel。delProp/getProp/setProp操作当前的项。 
 */
export class CollectionViewModel extends ViewModelDefault implements ICollectionViewModel {
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
		var viewModelItems = this.viewModelItems;
		this._current = Math.min(viewModelItems.length-1, Math.max(0, value));
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
		return this.viewModelItems.length;
	}

	/**
	 * 子项目的ViewModel
	 */
	protected get viewModelItems() : Array<ItemViewModel>{
		if(this.needUpdateViewModelItems) {
			this.updateViewModelItems();
		}

		return this._viewModelItems;
	}
	protected _viewModelItems : Array<ItemViewModel>;

	/*
	 * 对于属性操作，都是针对当前项的ViewModel的操作。
	 */
	public getProp(path:string, converterName?:string) : any {
		var vm = this.currentViewModel;

		return vm ? vm.getProp(path, converterName) : null;
	}
	public delProp(path:string) : IViewModel {
		var vm = this.currentViewModel;
		return vm ? vm.delProp(path) : this;
	}
	public setProp(path:string, value:any, converterName?:string, validationRule?:string) : ValidationResult {
		var vm = this.currentViewModel;
		return vm ? vm.setProp(path, value, converterName, validationRule) : ValidationResult.invalidResult;
	}
	/**
	 * 当前项的ViewModel
	 */
	public get currentViewModel() : IViewModel {
		return this.viewModelItems[this._current];
	}

	/**
	 * 注册子项的增加删除的变化事件。
	 */
	public onItemsChange(callback:Function) : ICollectionViewModel {
		this.on(Events.ITEMS_CHANGE, callback);

		return this;
	}
	/**
	 * 注销子项的增加删除的变化事件。
	 */
	public offItemsChange(callback:Function) : ICollectionViewModel {
		this.off(Events.ITEMS_CHANGE, callback);

		return this;
	}

	/**
	 * 增加一个数据项。
	 */
	public addItem(data:any, index?:number) : ICollectionViewModel {
		var n = this._collection.length;
		var index = index < n ? index : n;
		this._collection.splice(index, 0, data);
		this.updateViewModelItems(true);
		
		return this;
	}

	/**
	 * 删除一个数据项。
	 */
	public removeItem(index:number) : ICollectionViewModel {
		this._collection.splice(index, 1);
		this.updateViewModelItems(true);
		
		return this;
	}
	
	/**
	 * 删除指定规则的数据项。
	 */
	public removeItems(func:Function) : ICollectionViewModel {
		var collection = this._collection.filter(function(item, index, arr) {
			return !func(item, index, arr);
		});
		
		this._collection.length = 0;
		collection.forEach((item) => {
			this._collection.push(item);
		});
		this.updateViewModelItems(true);

		return this;
	}

	/**
	 * 是否存在指定条件的项。
	 */
	public hasItems(func:Function, filtered?:boolean) : boolean {
		var arr = filtered ? this._filteredSortedCollection : this._collection;

		return arr.some(<any>func);
	}

	/**
	 * 获取指定序号的子ViewModel
	 */
	public getItemViewModel(index:number) : IViewModel {
		var i = (index >= 0 && index < this.total) ? index : this._current;
		return this.viewModelItems[i];
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
	 * 创建一个子ViewModel。
	 */
	protected createItemViewModel(index:number, data:any) : ItemViewModel{
		return ItemViewModel.create(this, index, data);
	}

	/*
	 * 重新创建ViewModelItems。
	 */
	public updateViewModelItems(force?:boolean) {
		if(force || this.needUpdateViewModelItems) {
			this.needUpdateViewModelItems = false;
			
			console.time("filter and sort");
			var collection = this.getFilteredSortedCollection();
			
			var n = collection.length;
			if(this.current >= n) {
				this._current = n-1;
			}

			if(this._viewModelItems) {
				this._viewModelItems.forEach((item:ItemViewModel) => {
					item.dispose();
				});
			}

			this._viewModelItems = <any>collection.map((data:any, i:number) => {
				return this.createItemViewModel(i, data);
			})
			console.timeEnd("filter and sort");

			console.time("notify ITEMS_CHANGE");
			this.notifyChange(Events.PROP_CHANGE, "/", null);
			this.notifyChange(Events.ITEMS_CHANGE, "/", null);
			console.timeEnd("notify ITEMS_CHANGE");
		}
	}
	protected needUpdateViewModelItems : boolean;

	/**
	 * 注册过滤器。
	 */
	public registerFilter(name:string, filter:IFilter) : CollectionViewModel {
		this.filters[name] = filter;
		return this;
	}
	/**
	 * 注销过滤器。
	 */
	public unregisterFilter(name:string) : CollectionViewModel {
		delete this.filters[name];
		return this;
	}
	protected filters:any = {}; 
	
	/**
	 * 当前的过滤器器。
	 */
	public set filter(name:string) {
		this._filter = name;
		this.needUpdateViewModelItems = true;
		this.updateViewModelItems();
	}
	public get filter() : string {
		return this._filter;
	}
	protected _filter : string; 

	/**
	 * 注册排序用的比较器。 
	 */
	public registerComparator(name:string, comparator:IComparator) : CollectionViewModel {
		this.comparators[name] = comparator;
		return this;
	}
	/**
	 * 注销排序用的比较器。 
	 */
	public unregisterComparator(name:string) : CollectionViewModel {
		delete this.comparators[name];
		return this;
	}
	protected comparators:any = {};
	
	/**
	 * 设置当前的比较器。
	 */
	public set comparator(name:string) {
		this._comparator = name;
		this.needUpdateViewModelItems = true;
		this.updateViewModelItems();
	}
	public get comparator() : string {
		return this._comparator;
	}
	protected _comparator : string;

	constructor(data:Array<any>) {
		super(data);
		this._current = 0;
		this._collection = data;
		this.needUpdateViewModelItems = true;
	}

	public static create(data:Array<any>) : IViewModel {
		var viewModel = new CollectionViewModel(data);

		return viewModel;
	}
};

/**
 * 表示集合ViewModel中的单项ViewModel。
 * 
 */
export class ItemViewModel extends ViewModelDefault implements IViewModel {
	public index : number;
	public isCollection = false;
	public collectionViewModel : CollectionViewModel;

	public getCommand(name:string) : ICommand {
		var cmd = super.getCommand(name);
		if(!cmd) {
			cmd = this.collectionViewModel.getCommand(name);
		}

		return cmd;
	}

	public canExecute(name:string) : boolean {
		if(super.canExecute(name)) {
			return true;
		}else{
			return this.collectionViewModel.canExecute(name);
		}
	}

	public execCommand(name:string, args:any) : boolean{
		var cmd = super.getCommand(name);
		if(cmd) {
			return super.execCommand(name, args);
		}else{
			if(args == undefined) {
				args = this.index;
			}
			return this.collectionViewModel.execCommand(name, args);
		}
	}

	public convert(converterName:string, value:any) : any {
		return this.collectionViewModel.convert(converterName, value);	
	}

	public convertBack(converterName:string, value:any) : any {
		return this.collectionViewModel.convertBack(converterName, value);
	}

	public isValueValid(ruleName:string, value:any) : ValidationResult {
		return this.collectionViewModel.isValueValid(ruleName, value);
	}

	public getValueConverter(name:string) : IValueConverter {
		return this.collectionViewModel.getValueConverter(name);
	}

	public getValidationRule(name:string) : IValidationRule {
		return this.collectionViewModel.getValidationRule(name);
	}

	public isCurrent() : boolean {
		return this.collectionViewModel.current === this.index; 
	}
	
	public notifyChange(type:string, path:string, value:any) {
		var collectionViewModel = this.collectionViewModel;
		if(collectionViewModel.bindingMode === BindingMode.ONE_WAY) {
			return;
		}

		if(collectionViewModel.comparator || collectionViewModel.filter) {
			collectionViewModel.updateViewModelItems(true);
		}else{
			if(this.isCurrent) {
				collectionViewModel.notifyChange(type, path, value);
			}
			super.notifyChange(type, path, value);
		}
	}

	protected initCommands() {
		this.registerCommand("activate", DelegateCommand.create(args => {
			this.collectionViewModel.current = this.index;
		}));

		this.registerCommand("remove", DelegateCommand.create(args => {
			this.collectionViewModel.removeItem(this.collectionViewModel.getRawIndexOf(this.index));
		}));
	}
	
	public constructor() {
		super(null);
		this.initCommands();
	}
	
	public init(collectionViewModel:CollectionViewModel, index:number, data:any) : ItemViewModel {
		this.collectionViewModel = collectionViewModel;
		this.index = index;
		this.setData(data, false);
		this.bindingMode = collectionViewModel.bindingMode;

		return this;
	}

	public dispose() {
		this.index = -1;
		this.removeAllListeners();
		this.collectionViewModel = null;
		ItemViewModel.cache.push(this);
	}
	
	public static cache : Array<ItemViewModel> = [];
	public static create(collectionViewModel:CollectionViewModel, index:number, data:any) { 
		var vm = ItemViewModel.cache.length > 0 ? ItemViewModel.cache.pop() : (new ItemViewModel());
		return vm.init(collectionViewModel, index, data);
	}
}
