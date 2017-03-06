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
var window_1 = require("./window");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var WindowNormal = (function (_super) {
    __extends(WindowNormal, _super);
    function WindowNormal() {
        var _this = _super.call(this, WindowNormal.TYPE) || this;
        _this._windowType = window_1.WindowType.NORMAL;
        return _this;
    }
    WindowNormal.create = function (options) {
        return WindowNormal.recycleBin.create(options);
    };
    return WindowNormal;
}(window_1.Window));
WindowNormal.TYPE = "window-normal";
WindowNormal.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(WindowNormal);
exports.WindowNormal = WindowNormal;
;
widget_factory_1.WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
