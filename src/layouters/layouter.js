"use strict";
/**
 * 子控件布局算法。
 */
var Layouter = (function () {
    function Layouter() {
    }
    Object.defineProperty(Layouter.prototype, "type", {
        /**
         * 布局算法的名称。
         */
        get: function () {
            return "dummy";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 转换成JSON数据。
     */
    Layouter.prototype.toJson = function () {
        return { type: this.type };
    };
    /**
     * 从JSON数据创建。
     */
    Layouter.prototype.fromJson = function (json) {
        return;
    };
    /**
     * 设置参数。
     */
    Layouter.prototype.setOptions = function (options) {
        return this;
    };
    /**
     * 对子控件进行布局。
     * @param widget 父控件
     * @param children 只控件
     * @returns 全部子控件需要的区域。
     */
    Layouter.prototype.layoutChildren = function (widget, children, rect) {
        return null;
    };
    return Layouter;
}());
exports.Layouter = Layouter;
/**
 * Layouter的工厂。
 */
var LayouterFactory = (function () {
    function LayouterFactory() {
    }
    LayouterFactory.register = function (type, creator) {
        LayouterFactory.creators[type] = creator;
    };
    LayouterFactory.create = function (type, options) {
        var create = LayouterFactory.creators[type];
        if (create) {
            return create(options);
        }
        else {
            return null;
        }
    };
    LayouterFactory.createFromJson = function (json) {
        var layouter = LayouterFactory.create(json.type, null);
        layouter.fromJson(json);
        return layouter;
    };
    LayouterFactory.creators = {};
    return LayouterFactory;
}());
exports.LayouterFactory = LayouterFactory;
