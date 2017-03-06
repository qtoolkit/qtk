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
var factory_1 = require("../factory");
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
    Layouter.prototype.createParam = function (options) {
        return null;
    };
    /**
     * 从JSON数据创建。
     */
    Layouter.prototype.fromJson = function (json) {
        for (var key in json) {
            var value = json[key];
            var type = typeof value;
            if (type === "number" || type === "string") {
                this[key] = value;
            }
        }
        return this;
    };
    /**
     * 转换成JSON数据。
     */
    Layouter.prototype.toJson = function () {
        var json = {};
        for (var key in this) {
            var value = this[key];
            var type = typeof value;
            if (type === "number" || type === "string") {
                json[key] = value;
            }
        }
        return json;
    };
    Layouter.evalValue = function (value, total) {
        var v = parseFloat(value);
        if (typeof value === "number") {
            return v;
        }
        if (value.indexOf("%") > 0) {
            v = total * v / 100;
        }
        if (v < 0) {
            v = total + v;
        }
        return v;
    };
    return Layouter;
}());
exports.Layouter = Layouter;
/**
 * Layouter的工厂。
 */
var LayouterFactory = (function (_super) {
    __extends(LayouterFactory, _super);
    function LayouterFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayouterFactory.register = function (type, creator) {
        return LayouterFactory.factory.register(type, creator);
    };
    LayouterFactory.create = function (type, options) {
        return LayouterFactory.factory.create(type, options);
    };
    LayouterFactory.createWithJson = function (json) {
        var layouter = LayouterFactory.create(json.type, null);
        layouter.fromJson(json);
        return layouter;
    };
    return LayouterFactory;
}(factory_1.Factory));
LayouterFactory.factory = new factory_1.Factory();
exports.LayouterFactory = LayouterFactory;
/**
 * 布局参数。
 * 如果父控件有指定childrenLayouter，那么其中的子控件需要有与之对应的LayouterParam。
 */
var LayouterParam = (function () {
    function LayouterParam(type) {
        this.type = type;
    }
    Object.defineProperty(LayouterParam.prototype, "widget", {
        get: function () {
            return this._widget;
        },
        /**
         * 与之关联的Widget。
         */
        set: function (value) {
            this._widget = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 从JSON数据创建。
     */
    LayouterParam.prototype.fromJson = function (json) {
        for (var key in json) {
            var value = json[key];
            var type = typeof value;
            if (type === "number" || type === "string") {
                this[key] = value;
            }
        }
        return this;
    };
    /**
     * 转换成JSON数据。
     */
    LayouterParam.prototype.toJson = function () {
        var json = {};
        for (var key in this) {
            var value = this[key];
            var type = typeof value;
            if (type === "number" || type === "string") {
                json[key] = value;
            }
        }
        return json;
    };
    return LayouterParam;
}());
exports.LayouterParam = LayouterParam;
;
/**
 * LayouterParam的工厂。
 */
var LayouterParamFactory = (function (_super) {
    __extends(LayouterParamFactory, _super);
    function LayouterParamFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayouterParamFactory.register = function (type, creator) {
        return LayouterParamFactory.factory.register(type, creator);
    };
    LayouterParamFactory.create = function (type, options) {
        return LayouterParamFactory.factory.create(type, options);
    };
    LayouterParamFactory.createWithJson = function (json) {
        var layouter = LayouterParamFactory.create(json.type, null);
        layouter.fromJson(json);
        return layouter;
    };
    return LayouterParamFactory;
}(factory_1.Factory));
LayouterParamFactory.factory = new factory_1.Factory();
exports.LayouterParamFactory = LayouterParamFactory;
