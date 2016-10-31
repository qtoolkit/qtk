import { ICommand } from "./icommand";
import { IFilter } from "./ifilter";
import { IComparator } from "./icomparator";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule, ValidationResult } from "./ivalidation-rule";
import { IViewModal, ICollectionViewModal } from "./iview-modal";
import { ViewModalDefault } from "./view-modal-default";
/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。
 */
export declare class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
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
     * 子项目的ViewModal
     */
    protected readonly viewModalItems: Array<ItemViewModal>;
    protected _viewModalItems: Array<ItemViewModal>;
    getProp(path: string, converterName?: string): any;
    delProp(path: string): IViewModal;
    setProp(path: string, value: any, converterName?: string, validationRule?: string): ValidationResult;
    /**
     * 当前项的ViewModal
     */
    readonly currentViewModal: IViewModal;
    /**
     * 注册子项的增加删除的变化事件。
     */
    onItemsChange(callback: Function): ICollectionViewModal;
    /**
     * 注销子项的增加删除的变化事件。
     */
    offItemsChange(callback: Function): ICollectionViewModal;
    /**
     * 增加一个数据项。
     */
    addItem(data: any, index?: number): ICollectionViewModal;
    /**
     * 删除一个数据项。
     */
    removeItem(index: number): ICollectionViewModal;
    /**
     * 删除指定规则的数据项。
     */
    removeItems(func: Function): ICollectionViewModal;
    /**
     * 是否存在指定条件的项。
     */
    hasItems(func: Function, filtered?: boolean): boolean;
    /**
     * 获取指定序号的子ViewModal
     */
    getItemViewModal(index: number): IViewModal;
    getItemData(index: number): any;
    protected getFilteredSortedCollection(): Array<any>;
    protected _filteredSortedCollection: Array<any>;
    /**
     * 获取排序过滤集合中的序数对应于原始集合中的序数。
     */
    getRawIndexOf(index: number): number;
    protected createItemViewModal(index: number, data: any): ItemViewModal;
    updateViewModalItems(force?: boolean): void;
    protected needUpdateViewModalItems: boolean;
    /**
     * 注册过滤器。
     */
    registerFilter(name: string, filter: IFilter): CollectionViewModal;
    /**
     * 注销过滤器。
     */
    unregisterFilter(name: string): CollectionViewModal;
    protected filters: any;
    /**
     * 当前的过滤器器。
     */
    filter: string;
    protected _filter: string;
    /**
     * 注册排序用的比较器。
     */
    registerComparator(name: string, comparator: IComparator): CollectionViewModal;
    /**
     * 注销排序用的比较器。
     */
    unregisterComparator(name: string): CollectionViewModal;
    protected comparators: any;
    /**
     * 设置当前的比较器。
     */
    comparator: string;
    protected _comparator: string;
    constructor(data: Array<any>);
    static create(data: Array<any>): IViewModal;
}
/**
 * 表示集合ViewModal中的单项ViewModal。
 *
 */
export declare class ItemViewModal extends ViewModalDefault implements IViewModal {
    index: number;
    isCollection: boolean;
    collectionViewModal: CollectionViewModal;
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
    init(collectionViewModal: CollectionViewModal, index: number, data: any): ItemViewModal;
    dispose(): void;
    static cache: Array<ItemViewModal>;
    static create(collectionViewModal: CollectionViewModal, index: number, data: any): ItemViewModal;
}
