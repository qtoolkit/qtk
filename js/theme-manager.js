"use strict";
var style_1 = require("./style");
var utils_1 = require("./utils");
/**
 * 主题用来统一控制Widget的外观风格。
 */
var ThemeManager = (function () {
    function ThemeManager() {
        this.data = {};
    }
    /**
     * 设置指定名称和状态下控件的风格。
     */
    ThemeManager.prototype.set = function (name, state, style) {
        if (!this.data[name]) {
            this.data[name] = {};
        }
        this.data[name][state] = style;
        return this;
    };
    /**
     * 获取指定名称和状态下控件的风格。
     */
    ThemeManager.prototype.get = function (name, state) {
        var styles = this.data[name];
        return styles ? styles[state] : null;
    };
    /**
     * 初始化。
     */
    ThemeManager.prototype.load = function (data, baseURL) {
        var json = this.expand(data);
        for (var itemName in json) {
            var itemInfo = json[itemName];
            for (var stateName in itemInfo) {
                var styleInfo = itemInfo[stateName];
                this.set(itemName, stateName, style_1.Style.create(styleInfo, baseURL));
            }
        }
        return this;
    };
    ThemeManager.prototype.expandCommon = function (itemInfo, common) {
        for (var key in itemInfo) {
            var value = itemInfo[key];
            itemInfo[key] = utils_1.assign(value, common);
        }
        return itemInfo;
    };
    ThemeManager.prototype.expandExtends = function (extInfo, baseInfo) {
        var ret = {};
        for (var key in baseInfo) {
            ret[key] = utils_1.assign({}, baseInfo[key]);
        }
        for (var key in extInfo) {
            ret[key] = utils_1.assign(ret[key] || {}, extInfo[key]);
        }
        return ret;
    };
    ThemeManager.prototype.expand = function (json) {
        var ret = {};
        for (var itemName in json) {
            var itemInfo = json[itemName];
            var common = itemInfo["common"];
            var ext = itemInfo["extends"];
            delete itemInfo["common"];
            delete itemInfo["extends"];
            if (ext) {
                var baseInfo = JSON.parse(JSON.stringify(ret[ext]));
                if (common) {
                    this.expandCommon(baseInfo, common);
                }
                itemInfo = this.expandExtends(itemInfo, baseInfo);
            }
            else {
                if (common) {
                    this.expandCommon(itemInfo, common);
                }
            }
            ret[itemName] = itemInfo;
        }
        return ret;
    };
    return ThemeManager;
}());
exports.ThemeManager = ThemeManager;
