"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var list_view_1 = require("../controls/list-view");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
/**
 * 表格
 */
var TableClient = (function (_super) {
    __extends(TableClient, _super);
    function TableClient() {
        _super.call(this, TableClient.TYPE);
    }
    Object.defineProperty(TableClient.prototype, "colsWidth", {
        get: function () {
            return this._colsWidth;
        },
        set: function (value) {
            this._colsWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    TableClient.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.dragToScroll = true;
    };
    TableClient.create = function (options) {
        return TableClient.rBin.create().reset(TableClient.TYPE, options);
    };
    TableClient.TYPE = "table-client";
    TableClient.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new TableClient(); });
    return TableClient;
}(list_view_1.ListView));
exports.TableClient = TableClient;
;
widget_factory_1.WidgetFactory.register(TableClient.TYPE, TableClient.create);
