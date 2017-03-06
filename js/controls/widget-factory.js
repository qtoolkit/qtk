"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("../factory");
/**
 * Widget工厂，注册控件的创建函数和根据控件的类型创建控件。
 * 主要用于根据UI编辑器生成的UI数据创建UI，每个控件都要向WidgetFactory注册。
 *
 * 示例：
 * ```
 * WidgetFactory.register(Button.TYPE, Button.create);
 * ```
 *
 */
var WidgetFactory = (function () {
    function WidgetFactory() {
    }
    WidgetFactory.register = function (type, creator) {
        return WidgetFactory.factory.register(type, creator);
    };
    WidgetFactory.create = function (type, options) {
        return WidgetFactory.factory.create(type, options);
    };
    WidgetFactory.createWithJson = function (json) {
        var widget = WidgetFactory.create(json.type);
        widget.fromJson(json);
        return widget;
    };
    return WidgetFactory;
}());
WidgetFactory.factory = new factory_1.Factory();
exports.WidgetFactory = WidgetFactory;
