"use strict";
/**
 * 一个简陋的解析数据绑定规则的实现。
 */
var BindingRuleParser = (function () {
    function BindingRuleParser() {
    }
    BindingRuleParser.prototype.parse = function (rule) {
        if (typeof rule === "string") {
            rule = { value: { path: rule } };
        }
        for (var key in rule) {
            var dataSource = rule[key];
            if (typeof dataSource === "string") {
                rule[key] = { path: dataSource };
            }
            var path = dataSource.path;
            if (path && path.charAt(0) !== '/') {
                dataSource.path = '/' + dataSource.path;
            }
        }
        return rule;
    };
    BindingRuleParser.parse = function (rule) {
        if (!rule) {
            return null;
        }
        return BindingRuleParser.defParser.parse(rule);
    };
    BindingRuleParser.defParser = new BindingRuleParser();
    return BindingRuleParser;
}());
exports.BindingRuleParser = BindingRuleParser;
