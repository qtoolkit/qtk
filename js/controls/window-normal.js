"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var window_1 = require("./window");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var WindowNormal = (function (_super) {
    __extends(WindowNormal, _super);
    function WindowNormal() {
        _super.call(this, WindowNormal.TYPE);
    }
    WindowNormal.create = function (options) {
        return WindowNormal.recycleBin.create(options);
    };
    WindowNormal.TYPE = "window-normal";
    WindowNormal.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(WindowNormal);
    return WindowNormal;
}(window_1.Window));
exports.WindowNormal = WindowNormal;
;
widget_factory_1.WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);
