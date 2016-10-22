"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var table_row_1 = require("./table-row");
var table_index_1 = require("./table-index");
var table_client_1 = require("./table-client");
var table_header_1 = require("./table-header");
var table_index_item_1 = require("./table-index-item");
var table_header_item_1 = require("./table-header-item");
var TableColInfo = (function () {
    function TableColInfo(title, widgetType, w, options, sortable) {
        this.w = w;
        this.title = title;
        this.sortable = sortable;
        this.widgetType = widgetType;
        this.options = options || {};
    }
    TableColInfo.create = function (title, widgetType, w, options, sortable) {
        return new TableColInfo(title, widgetType, w, options, sortable);
    };
    return TableColInfo;
}());
exports.TableColInfo = TableColInfo;
;
/**
 * 表格
 */
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        _super.call(this, Table.TYPE);
    }
    Object.defineProperty(Table.prototype, "itemH", {
        get: function () {
            return this._itemH;
        },
        set: function (value) {
            this._itemH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "indexBarW", {
        get: function () {
            return this._indexBarW;
        },
        set: function (value) {
            this._indexBarW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "headerBarH", {
        get: function () {
            return this._headerBarH;
        },
        set: function (value) {
            this._headerBarH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "showIndexBar", {
        get: function () {
            return this._showIndexBar;
        },
        set: function (value) {
            this._showIndexBar = value;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.resetColumns = function () {
        this._colsInfo = [];
        return this;
    };
    Table.prototype.addColumn = function (colInfo) {
        this._colsInfo.push(colInfo);
        return this;
    };
    Table.prototype.getColumns = function () {
        return this._colsInfo;
    };
    Table.prototype.getTemplateRow = function () {
        if (!this._templateRow) {
            var row = table_row_1.TableRow.create({ w: this.w, h: this.itemH, app: this.app });
            this._colsInfo.forEach(function (item) {
                var widget = widget_factory_1.WidgetFactory.create(item.widgetType, item.options);
                row.addChild(widget, true);
            });
            this._templateRow = row;
        }
        return this._templateRow;
    };
    Table.prototype.bindData = function (viewModal) {
        this.prepareUI();
        var client = this._client;
        if (client) {
            client.templateItem = this.getTemplateRow();
            client.bindData(viewModal);
        }
        var indexBar = this._indexBar;
        if (indexBar) {
            var itemH = this.itemH;
            indexBar.removeAllChildren();
            client.children.forEach(function (item, index) {
                indexBar.addChild(table_index_item_1.TableIndexItem.create({ text: index, h: itemH }), true);
            });
            indexBar.relayoutChildren();
        }
        return this;
    };
    Table.prototype.prepareUI = function () {
        var _this = this;
        var itemH = this.itemH;
        this.removeAllChildren();
        var showIndexBar = this.showIndexBar;
        this._headerBar = table_header_1.TableHeader.create({ h: this.headerBarH, w: this.w });
        this._indexBar = table_index_1.TableIndex.create({ w: this.indexBarW, h: this.h });
        this._client = table_client_1.TableClient.create({ itemH: itemH, w: this.w - this.indexBarW, h: this.h - this.headerBarH });
        this.addChild(this._client, false);
        this.addChild(this._headerBar, false);
        this.addChild(this._indexBar, false);
        var headerBar = this._headerBar;
        this._colsInfo.forEach(function (item) {
            var headerItem = table_header_item_1.TableHeaderItem.create({ w: item.w, text: item.title, sortable: item.sortable });
            headerBar.addChild(headerItem);
        });
        var client = this._client;
        var indexBar = this._indexBar;
        var headerBar = this._headerBar;
        client.on(Events.SCROLL, function (evt) {
            indexBar.offsetY = evt.offsetY;
            headerBar.offsetX = evt.offsetX;
            _this.requestRedraw();
        });
        this.relayoutChildren();
    };
    Table.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        if (!this._headerBar) {
            this.prepareUI();
        }
    };
    Table.prototype.relayoutChildren = function () {
        if (!this.w || !this.h) {
            return null;
        }
        var w = 0;
        var h = 0;
        var x = this.leftPadding;
        var y = this.topPadding;
        var client = this._client;
        var indexBar = this._indexBar;
        var headerBar = this._headerBar;
        var indexBarW = this._indexBarW;
        var headerBarH = this._headerBarH;
        var yy = y + headerBarH;
        var xx = this.showIndexBar ? x + this._indexBarW : x;
        w = this.w - xx - this.rightPadding;
        h = this.h - yy - this.bottomPadding;
        var colsWidth = null;
        if (headerBar) {
            headerBar.moveResizeTo(xx, y, w, headerBarH);
            headerBar.relayoutChildren();
            colsWidth = headerBar.children.map(function (item) {
                return item.w;
            });
        }
        if (indexBar) {
            indexBar.moveResizeTo(x, yy, indexBarW, h);
            indexBar.relayoutChildren();
        }
        if (client) {
            client.colsWidth = colsWidth;
            client.moveResizeTo(xx, yy, w, h);
            client.relayoutChildren();
        }
        return this.getLayoutRect();
    };
    Table.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._templateRow = null;
        this._headerBar = null;
        this._indexBar = null;
        this._client = null;
        this.resetColumns();
    };
    Table.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._itemH = 30;
        this.resetColumns();
        this._indexBarW = 30;
        this._headerBarH = 30;
        this._showIndexBar = true;
    };
    Table.create = function (options) {
        return Table.recycleBin.create().reset(Table.TYPE, options);
    };
    Table.TYPE = "table";
    Table.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Table(); });
    return Table;
}(widget_1.Widget));
exports.Table = Table;
;
widget_factory_1.WidgetFactory.register(Table.TYPE, Table.create);
