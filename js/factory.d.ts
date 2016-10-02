/**
 * 一个通用的工厂类。
 */
export declare class Factory<T> {
    private creators;
    register(type: string, creator: Function): void;
    create(type: string, options?: any): T;
}
