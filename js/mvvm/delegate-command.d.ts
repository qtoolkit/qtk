import { ICommand } from "./icommand";
export declare class DelegateCommand implements ICommand {
    protected _canExecute: Function;
    protected _execute: Function;
    canExecute(): boolean;
    execute(args: any): boolean;
    private constructor(execute, canExecute?);
    static create(execute: Function, canExecute?: Function): DelegateCommand;
}
