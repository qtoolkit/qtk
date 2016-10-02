
import {ICommand} from "./icommand";
import {IValueConverter} from "./ivalue-converter";
import {IValidationRule} from "./ivalidation-rule";

export interface IViewModal {
	getBindingMode() : BindingMode;

	getProp(path:string) : any;
	delProp(path:string, trigger:any) : IViewModal;
	setProp(path:string, value:any, trigger?:any) : IViewModal;
	
	onChange(callback:Function);
	offChange(callback:Function);

	getCommand(name:string) : ICommand;
	getValueConverter(name:string) : IValueConverter;
	getValidationRule(name:string) : IValidationRule;

	createCollectionViewModal(path:string) : ICollectionViewModal;
};

export interface ICollectionViewModal extends IViewModal {
	createItemViewModal(index:number) : ICollectionItemViewModal;
};

export interface ICollectionItemViewModal extends IViewModal {
	index : number;
	collectionViewModal : ICollectionViewModal;

	isCurrent() : boolean;
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

