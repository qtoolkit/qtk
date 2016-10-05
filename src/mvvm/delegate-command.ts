import {ICommand} from "./icommand";

export class DelegateCommand implements  ICommand {
	protected _canExecute : Function;
	protected _execute : Function;

	public canExecute() : boolean {
		return this._canExecute ? this._canExecute() : true;
	}

	public execute(args:any) : boolean {
		return this._execute(args);
	}

	private constructor(execute:Function, canExecute?:Function) {
		this._execute = execute;
		this._canExecute = canExecute;
	}

	public static create(execute:Function, canExecute?:Function) {
		return new DelegateCommand(execute, canExecute);
	}
};
