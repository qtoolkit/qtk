export declare const THEME_MANAGER: string;
/**
 * 管理各种服务。
 */
export declare class Manager {
    private services;
    constructor();
    register(name: string, service: any): Manager;
    get(name: string): any;
}
