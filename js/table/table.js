"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = require("../events");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
var table_row_1 = require("./table-row");
var table_index_1 = require("./table-index");
var table_client_1 = require("./table-client");
var table_header_1 = require("./table-header");
var table_index_item_1 = require("./table-index-item");
var table_header_item_1 = require("./table-header-item");
/**
 * 描述表格中某列的信息。
 */
var TableColInfo = (function () {
    function TableColInfo(title, widgetType, w, options, sortKey) {
        this.w = w;
        this.title = title;
        this.sortKey = sortKey;
        this.options = options || {};
        this.widgetType = widgetType || "label";
    }
    TableColInfo.create = function (title, widgetType, w, options, sortKey) {
        return new TableColInfo(title, widgetType, w, options, sortKey);
    };
    return TableColInfo;
}());
exports.TableColInfo = TableColInfo;
;
/**
 * 表格。表格由三部分组成：
 * 1.表头(TableHeader):  在最上方，显示每一列的标题，可以点击触发按该列进行排序。
 * 2.行序号(TableIndex): 在左边，显示每一行的序号。
 * 3.客户区(TableClient):占据表的主体部分，显示表格的内容。
 */
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        _super.call(this, Table.TYPE);
    }
    Object.defineProperty(Table.prototype, "headerBar", {
        /**
         * 表头
         */
        get: function () {
            return this._headerBar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "indexBar", {
        /**
         * 行序号
         */
        get: function () {
            return this._indexBar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "client", {
        /**
         * 客户区
         */
        get: function () {
            return this._client;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "rowH", {
        get: function () {
            return this._rowH;
        },
        /**
         * 每行的高度(在绑定数据之前设置才有效)。
         */
        set: function (value) {
            this._rowH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "indexBarW", {
        get: function () {
            return this._ibW;
        },
        /**
         * 行序号的宽度(在绑定数据之前设置才有效)。
         */
        set: function (value) {
            this._ibW = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "headerBarH", {
        get: function () {
            return this._hbH;
        },
        /**
         * 表头的高度(在绑定数据之前设置才有效)。
         */
        set: function (value) {
            this._hbH = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "showIndexBar", {
        get: function () {
            return this._siB;
        },
        /**
         * 是否显示行序号(在绑定数据之前设置才有效)。
         */
        set: function (value) {
            this._siB = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 清除所有列。
     */
    Table.prototype.resetColumns = function () {
        this._colsInfo = [];
        return this;
    };
    /**
     * 增加一列。
     */
    Table.prototype.addColumn = function (colInfo) {
        this._colsInfo.push(colInfo);
        return this;
    };
    /**
     * 获取所有列。
     */
    Table.prototype.getColumns = function () {
        return this._colsInfo;
    };
    Table.prototype.getTemplateRow = function () {
        if (!this._templateRow) {
            var row = table_row_1.TableRow.create({ w: this.w, h: this.rowH, app: this.app });
            this._colsInfo.forEach(function (item) {
                var widget = widget_factory_1.WidgetFactory.create(item.widgetType, item.options);
                widget.styleType = widget.type + ".table";
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
            client.removeAllChildren();
            client.bindData(viewModal);
        }
        var itemH = this.rowH;
        var indexBar = this._indexBar;
        if (indexBar) {
            indexBar.removeAllChildren();
            client.children.forEach(function (item, index) {
                indexBar.addChild(table_index_item_1.TableIndexItem.create({ text: index, h: itemH }), true);
            });
            indexBar.relayoutChildren();
        }
        return this;
    };
    Table.prototype.onHeaderItemResized = function () {
        var client = this.client;
        var colsWidth = this.headerBar.children.map(function (item) {
            return item.w;
        });
        client.colsWidth = colsWidth;
        client.relayoutChildren();
        this.headerBar.relayoutChildren();
    };
    Table.prototype.onHeaderItemResizing = function () {
        this.headerBar.relayoutChildren();
    };
    Table.prototype.prepareUI = function () {
        var _this = this;
        var itemH = this.rowH;
        this.removeAllChildren();
        var showIndexBar = this.showIndexBar;
        this._headerBar = table_header_1.TableHeader.create({ h: this.headerBarH, w: this.w });
        this._client = table_client_1.TableClient.create({ itemH: itemH, w: this.w - this.indexBarW, h: this.h - this.headerBarH });
        this.addChild(this._client, false);
        this.addChild(this._headerBar, false);
        if (showIndexBar) {
            this._indexBar = table_index_1.TableIndex.create({ w: this.indexBarW, h: this.h });
            this.addChild(this._indexBar, false);
        }
        var headerBar = this._headerBar;
        this._colsInfo.forEach(function (item) {
            var headerItem = table_header_item_1.TableHeaderItem.create({ w: item.w, text: item.title, sortKey: item.sortKey });
            headerBar.addChild(headerItem);
            headerItem.on(Events.RESIZE_END, function (evt) {
                _this.onHeaderItemResized();
            });
            headerItem.on(Events.RESIZE_CANCEL, function (evt) {
                _this.onHeaderItemResized();
            });
            headerItem.on(Events.RESIZING, function (evt) {
                _this.onHeaderItemResizing();
            });
            headerItem.on(Events.SORT, function (evt) {
                _this.dispatchEvent(evt);
            });
        });
        var client = this._client;
        var indexBar = this._indexBar;
        var headerBar = this._headerBar;
        client.on(Events.SCROLL, function (evt) {
            if (indexBar) {
                indexBar.offsetY = evt.offsetY;
            }
            headerBar.offsetX = evt.offsetX;
            _this.requestRedraw();
        });
        this.relayoutChildren();
    };
    Table.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
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
        var indexBarW = this.indexBarW;
        var headerBarH = this.headerBarH;
        var yy = y + headerBarH;
        var xx = this.showIndexBar ? x + indexBarW : x;
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
    Table.prototype.dispatchWheel = function (evt) {
        if (this.client) {
            this.client.dispatchWheel(evt);
        }
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
        this.resetColumns();
    };
    Table.prototype.getDefProps = function () {
        return Table.defProps;
    };
    Table.create = function (options) {
        return Table.recycleBin.create(options);
    };
    Table.defProps = Object.assign({}, widget_1.Widget.defProps, { _rowH: 30, _ibW: 30, _hbH: 30, _siB: true });
    Table.TYPE = "table";
    Table.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(Table);
    return Table;
}(widget_1.Widget));
exports.Table = Table;
;
widget_factory_1.WidgetFactory.register(Table.TYPE, Table.create);
