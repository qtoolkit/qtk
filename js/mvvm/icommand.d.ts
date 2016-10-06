/**
 * ViewModal的命令。
 */
export interface ICommand {
    /**
     * 是否可以执行。
     */
    canExecute(): boolean;
    /**
     * 执行命令。
     */
    execute(args: any): boolean;
}
