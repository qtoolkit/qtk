import { ICommand } from "./icommand";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule, ValidationResult } from "./ivalidation-rule";
import { IViewModal, ICollectionViewModal } from "./iview-modal";
import { ViewModalDefault } from "./view-modal-default";
/**
 * 集合ViewModal。delProp/getProp/setProp操作当前的项。
 */
export declare class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
    protected _current: number;
    protected _collection: Array<any>;
    protected _viewModalItems: Array<IViewModal>;
    isCollection: boolean;
    getProp(path: string, converterName?: string): any;
    delProp(path: string): IViewModal;
    setProp(path: string, value: any, converterName?: string, validationRule?: string): ValidationResult;
    onItemsChange(callback: Function): ICollectionViewModal;
    offItemsChange(callback: Function): ICollectionViewModal;
    protected fixState(): void;
    addItem(data: any, index?: number): ICollectionViewModal;
    removeItem(index: number): ICollectionViewModal;
    readonly collection: Array<any>;
    readonly currentViewModal: IViewModal;
    total: number;
    current: number;
    getItemViewModal(index: number): IViewModal;
    constructor(data: Array<any>);
    protected createItemViewModal(index: number): IViewModal;
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
    constructor(collectionViewModal: CollectionViewModal, index: number);
    static create(collectionViewModal: CollectionViewModal, index: number): ItemViewModal;
}
