"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var json_serializer_1 = require("../json-serializer");
var iview_model_1 = require("../mvvm/iview-model");
var iview_model_2 = require("../mvvm/iview-model");
;
/**
 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModel中获取数据。
 */
var BindingDataSource = (function (_super) {
    __extends(BindingDataSource, _super);
    function BindingDataSource(path, value, mode, updateTiming, validationRule, converter) {
        var _this = _super.call(this) || this;
        _this.converter = converter;
        _this.type = BindingDataSource.TYPE;
        _this.validationRule = validationRule;
        _this.mode = mode || iview_model_2.BindingMode.TWO_WAY;
        _this.updateTiming = updateTiming !== undefined ? updateTiming : iview_model_2.UpdateTiming.CHANGING;
        if (path !== undefined) {
            _this.path = path;
        }
        if (value !== undefined) {
            _this.value = value;
        }
        return _this;
    }
    BindingDataSource.create = function (path, value, mode, updateTiming, validationRule, converter) {
        return new BindingDataSource(path, value, mode, updateTiming, validationRule, converter);
    };
    return BindingDataSource;
}(json_serializer_1.JsonSerializer));
BindingDataSource.TYPE = "data";
exports.BindingDataSource = BindingDataSource;
;
/**
 * 命令源。
 */
var BindingCommandSource = (function (_super) {
    __extends(BindingCommandSource, _super);
    function BindingCommandSource(command, commandArgs) {
        var _this = _super.call(this) || this;
        _this.command = command;
        _this.eventHandler = null;
        _this.commandArgs = commandArgs;
        _this.type = BindingCommandSource.TYPE;
        return _this;
    }
    BindingCommandSource.create = function (command, commandArgs) {
        return new BindingCommandSource(command, commandArgs);
    };
    return BindingCommandSource;
}(json_serializer_1.JsonSerializer));
BindingCommandSource.TYPE = "command";
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
            this.source = BindingDataSource.create(source.path, source.value, source.mode, source.updateTiming, source.validationRule, source.converter);
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
    function BindingRule() {
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
    BindingRule.prototype.fromData = function (json) {
        this._items = {};
        for (var prop in json) {
            var source = null;
            var sJson = json[prop];
            if (sJson.command) {
                source = BindingCommandSource.create(sJson.command, sJson.commandArgs);
            }
            else {
                source = BindingDataSource.create(sJson.path, sJson.value, sJson.mode, sJson.updateTiming, sJson.validationRule, sJson.converter);
            }
            this._items[prop] = BindingRuleItem.create(prop, source);
        }
        return this;
    };
    BindingRule.prototype.fromJson = function (json) {
        this._items = {};
        for (var prop in json) {
            var source = null;
            var propJson = json[prop];
            var sourceJson = propJson.source;
            if (sourceJson.command) {
                source = BindingCommandSource.create(sourceJson.command, sourceJson.commandArgs);
            }
            else {
                source = BindingDataSource.create(sourceJson.path, sourceJson.value, sourceJson.mode, sourceJson.updateTiming, sourceJson.validationRule, sourceJson.converter);
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
            var mode = dataSource.mode;
            if (mode && typeof mode === "string") {
                dataSource.mode = iview_model_1.toBindingMode(mode);
            }
            var updateTiming = dataSource.updateTiming;
            if (updateTiming && typeof updateTiming === "string") {
                dataSource.updateTiming = iview_model_1.toUpdateTiming(updateTiming);
            }
        }
        return rule;
    };
    BindingRule.create = function (data) {
        var rule = new BindingRule();
        return rule.fromData(BindingRule.parse(data));
    };
    BindingRule.createFromJson = function (json) {
        var rule = new BindingRule();
        return rule.fromJson(json);
    };
    return BindingRule;
}());
exports.BindingRule = BindingRule;
