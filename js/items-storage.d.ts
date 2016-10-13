export declare class ItemsStorage {
    private _prefix;
    private getKey(name);
    set(name: string, data: string): void;
    remove(name: string): boolean;
    get(name: string): string;
    getItems(): Array<string>;
    constructor(prefix: string);
    static create(prefix: string): ItemsStorage;
}
