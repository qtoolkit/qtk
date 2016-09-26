"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var page_1 = require("./page");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var TabPage = (function (_super) {
    __extends(TabPage, _super);
    function TabPage() {
        _super.call(this, TabPage.TYPE);
    }
    Object.defineProperty(TabPage.prototype, "tabButton", {
        get: function () {
            return this._tabButton;
        },
        set: function (value) {
            this._tabButton = value;
        },
        enumerable: true,
        configurable: true
    });
    TabPage.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._tabButton = null;
    };
    TabPage.create = function (options) {
        return TabPage.r.create().reset(TabPage.TYPE).set(options);
    };
    TabPage.TYPE = "page";
    TabPage.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabPage(); });
    return TabPage;
}(page_1.Page));
exports.TabPage = TabPage;
;
widget_factory_1.WidgetFactory.register(TabPage.TYPE, TabPage.create);
