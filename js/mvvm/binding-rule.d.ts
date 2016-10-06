import { JsonSerializer } from "../json-serializer";
import { UpdateTiming, BindingMode } from "../mvvm/iview-modal";
export declare type DataSourceType = "data" | "command";
/**
 * 绑定源。
 */
export interface IBindingSource {
    /**
     * 类型。命令或数据。
     */
    type: DataSourceType;
    toJson(): any;
    fromJson(json: any): any;
}
/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModal中获取数据。
 */
export declare class BindingDataSource extends JsonSerializer implements IBindingSource {
    /**
     * 常量数据。如果存在则优先使用此值，否则通过path从ViewModal中获取。
     */
    value: any;
    /**
     * 路径。通过path从ViewModal中获取数据。
     */
    path: string;
    type: DataSourceType;
    /**
     * 绑定模式。
     */
    mode: BindingMode;
    /**
     * 转换器。
     */
    converter: string;
    /**
     * 验证器。
     */
    validationRule: string;
    /**
     * 更新ViewModal的时机。
     */
    updateTiming: UpdateTiming;
    constructor(path?: string, value?: any, mode?: BindingMode, updateTiming?: UpdateTiming, validationRule?: string, converter?: string);
    static TYPE: string;
    static create(path?: string, value?: any, mode?: BindingMode, updateTiming?: UpdateTiming, validationRule?: string, converter?: string): BindingDataSource;
}
/**
 * 命令源。
 */
export declare class BindingCommandSource extends JsonSerializer implements IBindingSource {
    type: DataSourceType;
    /**
     * 命令的名称。
     */
    command: string;
    /**
     * 命令的参数。
     */
    commandArgs: any;
    /**
     * 命令的处理函数。
     */
    eventHandler: Function;
    constructor(command: string, commandArgs?: any);
    static TYPE: string;
    static create(command: string, commandArgs?: any): BindingCommandSource;
}
/**
 * 单项数据绑定规则。
 */
export declare class BindingRuleItem {
    /**
     * 属性名。
     */
    prop: string;
    /**
     * 数据源。
     */
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
