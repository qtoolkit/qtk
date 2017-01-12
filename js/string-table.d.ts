export declare class StringTable {
    private static table;
    static set(strTable: any, lang: string): void;
    static add(strTable: any, lang: string): void;
    static get(lang: string): any;
    static tr(str: string): any;
}
