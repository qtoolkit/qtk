export interface ICommand {
    canExecute(): boolean;
    execute(args: any): boolean;
}
