import { ICommand } from "./icommand";
export interface IViewModal {
    getProp(name: string): any;
    delProp(name: string, trigger: any): IViewModal;
    setProp(name: string, value: any, trigger?: any): IViewModal;
    onChange(callback: Function): any;
    offChange(callback: Function): any;
    getCommand(name: string): ICommand;
}
