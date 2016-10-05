import { JsonSerializer } from "../json-serializer";
import { BindingMode } from "../mvvm/iview-modal";
/**
 * 绑定源。
 */
export interface IBindingSource {
    type: string;
    toJson(): any;
    fromJson(json: any): any;
}
/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModal中获取数据。
 */
export declare class BindingDataSource extends JsonSerializer implements IBindingSource {
    value: any;
    path: string;
    type: string;
    mode: BindingMode;
    validationRule: string;
    converters: Array<string>;
    constructor(path?: string, value?: any, mode?: BindingMode, validationRule?: string, converters?: Array<string>);
    static TYPE: string;
    static create(path?: string, value?: any, mode?: BindingMode, validationRule?: string, converters?: Array<string>): BindingDataSource;
}
/**
 * 命令源。
 */
export declare class BindingCommandSource extends JsonSerializer implements IBindingSource {
    type: string;
    command: string;
    commandArgs: any;
    eventHandler: Function;
    constructor(command: string, commandArgs?: any);
    static TYPE: string;
    static create(command: string, commandArgs?: any): BindingCommandSource;
}
/**
 * 单项数据绑定规则。
 */
export declare class BindingRuleItem {
    prop: string;
    source: IBindingSource;
    toJson(): any;
    fromJson(json: any): BindingRuleItem;
    constructor(prop: string, source: IBindingSource);
    static create(prop: string, source: IBindingSource): BindingRuleItem;
}
/**
 * 数据绑定规则。
 */
export declare class BindingRule {
    protected _items: any;
    getSource(prop: string): BindingRuleItem;
    forEach(func: (prop: string, item: BindingRuleItem) => void): void;
    constructor(json: any);
    fromJson(json: any): BindingRule;
    toJson(): any;
    static parse(rule: any): any;
    static create(rule: any): BindingRule;
}
