/**
 * 管理各种服务。
 */
export declare class ServiceLocator {
    private services;
    constructor();
    register(name: string, service: any): ServiceLocator;
    get(name: string): any;
}
