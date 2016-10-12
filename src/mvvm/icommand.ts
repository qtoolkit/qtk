/**
 * ViewModal的命令。
 */
export interface  ICommand {
	/**
	 * 是否可以执行。
	 */
	canExecute() : boolean;

	/**
	 * 执行命令。
	 */
	execute(args:any) : boolean;
};

/**
 * 可以通过undo撤销的命令。
 */
export interface  IUndoCommand extends ICommand {
	/**
	 * 撤销命令。
	 */
	undo() : boolean;
};

