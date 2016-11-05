import { ICommand } from "./icommand";
import { IFilter } from "./ifilter";
import { IComparator } from "./icomparator";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule, ValidationResult } from "./ivalidation-rule";
import { IViewModel, ICollectionViewModel } from "./iview-model";
import { ViewModelDefault } from "./view-model-default";
/**
 * 集合ViewModel。delProp/getProp/setProp操作当前的项。
 */
export declare class CollectionViewModel extends ViewModelDefault implements ICollectionViewModel {
    isCollection: boolean;
    /**
     * 原始的数据。
     */
    readonly collection: Array<any>;
    protected _collection: Array<any>;
    /**
     * 当前数据项的序号。
     */
    current: number;
    protected _current: number;
    /**
     * 过滤之后总的项数。
     */
    total: number;
    /**
     * 子项目的ViewModel
     */
    protected readonly viewModelItems: Array<ItemViewModel>;
    protected _viewModelItems: Array<ItemViewModel>;
    getProp(path: string, converterName?: string): any;
    delProp(path: string): IViewModel;
    setProp(path: string, value: any, converterName?: string, validationRule?: string): ValidationResult;
    /**
     * 当前项的ViewModel
     */
    readonly currentViewModel: IViewModel;
    /**
     * 注册子项的增加删除的变化事件。
     */
    onItemsChange(callback: Function): ICollectionViewModel;
    /**
     * 注销子项的增加删除的变化事件。
     */
    offItemsChange(callback: Function): ICollectionViewModel;
    /**
     * 增加一个数据项。
     */
    addItem(data: any, index?: number): ICollectionViewModel;
    /**
     * 删除一个数据项。
     */
    removeItem(index: number): ICollectionViewModel;
    /**
     * 删除指定规则的数据项。
     */
    removeItems(func: Function): ICollectionViewModel;
    /**
     * 是否存在指定条件的项。
     */
    hasItems(func: Function, filtered?: boolean): boolean;
    /**
     * 获取指定序号的子ViewModel
     */
    getItemViewModel(index: number): IViewModel;
    getItemData(index: number): any;
    protected getFilteredSortedCollection(): Array<any>;
    protected _filteredSortedCollection: Array<any>;
    /**
     * 获取排序过滤集合中的序数对应于原始集合中的序数。
     */
    getRawIndexOf(index: number): number;
    protected createItemViewModel(index: number, data: any): ItemViewModel;
    updateViewModelItems(force?: boolean): void;
    protected needUpdateViewModelItems: boolean;
    /**
     * 注册过滤器。
     */
    registerFilter(name: string, filter: IFilter): CollectionViewModel;
    /**
     * 注销过滤器。
     */
    unregisterFilter(name: string): CollectionViewModel;
    protected filters: any;
    /**
     * 当前的过滤器器。
     */
    filter: string;
    protected _filter: string;
    /**
     * 注册排序用的比较器。
     */
    registerComparator(name: string, comparator: IComparator): CollectionViewModel;
    /**
     * 注销排序用的比较器。
     */
    unregisterComparator(name: string): CollectionViewModel;
    protected comparators: any;
    /**
     * 设置当前的比较器。
     */
    comparator: string;
    protected _comparator: string;
    constructor(data: Array<any>);
    static create(data: Array<any>): IViewModel;
}
/**
 * 表示集合ViewModel中的单项ViewModel。
 *
 */
export declare class ItemViewModel extends ViewModelDefault implements IViewModel {
    index: number;
    isCollection: boolean;
    collectionViewModel: CollectionViewModel;
    getCommand(name: string): ICommand;
    canExecute(name: string): boolean;
    execCommand(name: string, args: any): boolean;
    convert(converterName: string, value: any): any;
    convertBack(converterName: string, value: any): any;
    isValueValid(ruleName: string, value: any): ValidationResult;
    getValueConverter(name: string): IValueConverter;
    getValidationRule(name: string): IValidationRule;
    isCurrent(): boolean;
    notifyChange(type: string, path: string, value: any): void;
    protected initCommands(): void;
    constructor();
    init(collectionViewModel: CollectionViewModel, index: number, data: any): ItemViewModel;
    dispose(): void;
    static cache: Array<ItemViewModel>;
    static create(collectionViewModel: CollectionViewModel, index: number, data: any): ItemViewModel;
}
