/**
 * 可循环的创建器。
 */
export declare class RecyclableCreator<T> {
    private cache;
    private ctor;
    constructor(ctor: Function);
    /**
     * 回收对象。
     */
    recycle(obj: T): void;
    /**
     * 创建对象。优先从缓存中取对象，如果缓存中没有对象，则创建新对象。
     */
    create(options?: any): T;
}
