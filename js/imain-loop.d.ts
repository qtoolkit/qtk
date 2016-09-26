/**
 * 主循环
 */
export interface IMainLoop {
    requestRedraw(): any;
    on(type: string, callback: Function): any;
    off(type: string, callback: Function): any;
}
