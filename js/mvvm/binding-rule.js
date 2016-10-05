"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var json_serializer_1 = require("../json-serializer");
var iview_modal_1 = require("../mvvm/iview-modal");
;
/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModal中获取数据。
 */
var BindingDataSource = (function (_super) {
    __extends(BindingDataSource, _super);
    function BindingDataSource(path, value, mode, validationRule, converters) {
        _super.call(this);
        this.converters = converters;
        this.type = BindingDataSource.TYPE;
        this.validationRule = validationRule;
        this.mode = mode || iview_modal_1.BindingMode.TWO_WAY;
        if (path !== undefined) {
            this.path = path;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
    BindingDataSource.create = function (path, value, mode, validationRule, converters) {
        return new BindingDataSource(path, value, mode, validationRule, converters);
    };
    BindingDataSource.TYPE = "data";
    return BindingDataSource;
}(json_serializer_1.JsonSerializer));
exports.BindingDataSource = BindingDataSource;
;
/**
 * 命令源。
 */
var BindingCommandSource = (function (_super) {
    __extends(BindingCommandSource, _super);
    function BindingCommandSource(command, commandArgs) {
        _super.call(this);
        this.command = command;
        this.eventHandler = null;
        this.commandArgs = commandArgs;
        this.type = BindingCommandSource.TYPE;
    }
    BindingCommandSource.create = function (command, commandArgs) {
        return new BindingCommandSource(command, commandArgs);
    };
    BindingCommandSource.TYPE = "command";
    return BindingCommandSource;
}(json_serializer_1.JsonSerializer));
exports.BindingCommandSource = BindingCommandSource;
/**
 * 单项数据绑定规则。
 */
var BindingRuleItem = (function () {
    function BindingRuleItem(prop, source) {
        this.prop = prop;
        this.source = source;
    }
    BindingRuleItem.prototype.toJson = function () {
        return { prop: this.prop, source: this.source.toJson() };
    };
    BindingRuleItem.prototype.fromJson = function (json) {
        this.prop = json.prop;
        var source = json.source;
        if (source.command) {
            this.source = BindingCommandSource.create(source.command, source.commandArgs);
        }
        else {
            this.source = BindingDataSource.create(source.path, source.value, source.mode, source.validationRule, source.converters);
        }
        return this;
    };
    BindingRuleItem.create = function (prop, source) {
        return new BindingRuleItem(prop, source);
    };
    return BindingRuleItem;
}());
exports.BindingRuleItem = BindingRuleItem;
;
/**
 * 数据绑定规则。
 */
var BindingRule = (function () {
    function BindingRule(json) {
        this.fromJson(json);
    }
    BindingRule.prototype.getSource = function (prop) {
        return this._items[prop];
    };
    BindingRule.prototype.forEach = function (func) {
        var items = this._items;
        for (var prop in items) {
            var item = items[prop];
            func(prop, item);
        }
    };
    BindingRule.prototype.fromJson = function (json) {
        this._items = {};
        for (var prop in json) {
            var source = null;
            var sJson = json[prop];
            if (sJson.command) {
                source = BindingCommandSource.create(sJson.command, sJson.commandArgs);
            }
            else {
                source = BindingDataSource.create(sJson.path, sJson.value, sJson.mode, sJson.validationRule, sJson.converters);
            }
            this._items[prop] = BindingRuleItem.create(prop, source);
        }
        return this;
    };
    BindingRule.prototype.toJson = function () {
        var json = {};
        var items = this._items;
        for (var prop in items) {
            var item = items[prop];
            json[prop] = item.toJson();
        }
        return json;
    };
    BindingRule.parse = function (rule) {
        if (typeof rule === "string") {
            rule = { value: { path: rule } };
        }
        for (var key in rule) {
            var dataSource = rule[key];
            if (typeof dataSource === "string") {
                rule[key] = { path: dataSource };
                dataSource = rule[key];
            }
            var path = dataSource.path;
            if (path && path.charAt(0) !== '/') {
                dataSource.path = '/' + dataSource.path;
            }
        }
        return rule;
    };
    BindingRule.create = function (rule) {
        var json = BindingRule.parse(rule);
        return new BindingRule(json);
    };
    return BindingRule;
}());
exports.BindingRule = BindingRule;
