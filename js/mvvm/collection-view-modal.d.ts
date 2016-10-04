import { ICommand } from "./icommand";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule } from "./ivalidation-rule";
import { IViewModal, ICollectionViewModal } from "./iview-modal";
import { ViewModalDefault } from "./view-modal-default";
export declare class ItemViewModal extends ViewModalDefault implements IViewModal {
    index: number;
    isCollectionViewModal: boolean;
    collectionViewModal: CollectionViewModal;
    getCommand(name: string): ICommand;
    execCommand(name: string, args: any): boolean;
    getValueConverter(name: string): IValueConverter;
    getValidationRule(name: string): IValidationRule;
    isCurrent(): boolean;
    constructor(collectionViewModal: CollectionViewModal, index: number);
    static create(collectionViewModal: CollectionViewModal, index: number): ItemViewModal;
}
export declare class CollectionViewModal extends ViewModalDefault implements ICollectionViewModal {
    protected _current: number;
    protected _collection: Array<any>;
    protected _viewModalItems: Array<IViewModal>;
    isCollectionViewModal: boolean;
    getProp(path: string): any;
    delProp(path: string, trigger: any): IViewModal;
    setProp(path: string, value: any, trigger?: any): IViewModal;
    addItem(data: any): ICollectionViewModal;
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
