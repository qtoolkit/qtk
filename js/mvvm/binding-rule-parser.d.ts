/**
 * 解析数据绑定规则的接口。
 */
export interface IBindingRuleParser {
    parse(rule: any): any;
}
/**
 * 一个简陋的解析数据绑定规则的实现。
 */
export declare class BindingRuleParser implements IBindingRuleParser {
    parse(rule: any): any;
    static defParser: BindingRuleParser;
    static parse(rule: any): any;
}
