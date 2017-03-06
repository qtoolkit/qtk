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
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
/**
 * @class Page
 * 页面管理器中的页面。
 */
var Page = (function (_super) {
    __extends(Page, _super);
    function Page(type) {
        return _super.call(this, type || Page.TYPE) || this;
    }
    Page.create = function (options) {
        return Page.recycleBin.create(options);
    };
    return Page;
}(widget_1.Widget));
Page.TYPE = "page";
Page.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Page);
exports.Page = Page;
;
widget_factory_1.WidgetFactory.register(Page.TYPE, Page.create);
