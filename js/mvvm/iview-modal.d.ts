import { ICommand } from "./icommand";
import { IValueConverter } from "./ivalue-converter";
import { IValidationRule } from "./ivalidation-rule";
export interface IViewModal {
    isCollectionViewModal: boolean;
    getBindingMode(): BindingMode;
    getProp(path: string): any;
    delProp(path: string, trigger: any): IViewModal;
    setProp(path: string, value: any, trigger?: any): IViewModal;
    onChange(callback: Function): any;
    offChange(callback: Function): any;
    getCommand(name: string): ICommand;
    execCommand(name: string, args: any): boolean;
    getValueConverter(name: string): IValueConverter;
    getValidationRule(name: string): IValidationRule;
}
export interface ICollectionViewModal extends IViewModal {
    total: number;
    current: number;
    getItemViewModal(index: number): IViewModal;
    removeItem(index: number): ICollectionViewModal;
    addItem(data: any, index?: number): ICollectionViewModal;
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
