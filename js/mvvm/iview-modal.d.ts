import { ICommand } from "./icommand";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule } from "./ivalidation-rule";
export interface IViewModal {
    getBindingMode(): BindingMode;
    getProp(path: string): any;
    delProp(path: string, trigger: any): IViewModal;
    setProp(path: string, value: any, trigger?: any): IViewModal;
    onChange(callback: Function): any;
    offChange(callback: Function): any;
    getCommand(name: string): ICommand;
    getValueConverter(name: string): IValueConverter;
    getValidationRule(name: string): IValidationRule;
    createCollectionViewModal(path: string): ICollectionViewModal;
}
export interface ICollectionViewModal extends IViewModal {
    createItemViewModal(index: number): ICollectionItemViewModal;
}
export interface ICollectionItemViewModal extends IViewModal {
    index: number;
    collectionViewModal: ICollectionViewModal;
    isCurrent(): boolean;
}
export declare enum BindingMode {
    TWO_WAY = 0,
    ONE_WAY = 1,
    ONE_TIME = 2,
    ONE_WAY_TO_SOURCE = 3,
}
export declare enum UpdateSourceTrigger {
    DEFAULT = 0,
    EXPLICIT = 1,
    LOSTFOCUS = 2,
    PROPERTYCHANGED = 3,
}
