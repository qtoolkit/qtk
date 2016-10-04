
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";

export interface IViewModal {
	isCollectionViewModal : boolean;

	getBindingMode() : BindingMode;

	getProp(path:string) : any;
	delProp(path:string, trigger:any) : IViewModal;
	setProp(path:string, value:any, trigger?:any) : IViewModal;
	
	onChange(callback:Function);
	offChange(callback:Function);

	getCommand(name:string) : ICommand;
	execCommand(name:string, args:any) : boolean;
	getValueConverter(name:string) : IValueConverter;
	getValidationRule(name:string) : IValidationRule;
};

export interface ICollectionViewModal extends IViewModal {
	total : number;
	current : number;
	getItemViewModal(index:number) : IViewModal;
	
	addItem(data:any) : ICollectionViewModal;
	removeItem(index:number) : ICollectionViewModal;
};

export enum BindingMode {
	TWO_WAY = 0,
	ONE_WAY,
	ONE_TIME,
	ONE_WAY_TO_SOURCE
};

export enum UpdateSourceTrigger {
	DEFAULT = 0,
	EXPLICIT,
	LOSTFOCUS,
	PROPERTYCHANGED
};

