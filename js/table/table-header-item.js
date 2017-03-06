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
var rect_1 = require("../rect");
var Events = require("../events");
var widget_1 = require("../controls/widget");
var widget_factory_1 = require("../controls/widget-factory");
var widget_recyclable_creator_1 = require("../controls/widget-recyclable-creator");
/**
 * 表格头的一项。
 */
var TableHeaderItem = (function (_super) {
    __extends(TableHeaderItem, _super);
    function TableHeaderItem() {
        var _this = _super.call(this, TableHeaderItem.TYPE) || this;
        _this._sortEvent = Events.SortEvent.create(null, false);
        return _this;
    }
    Object.defineProperty(TableHeaderItem.prototype, "sortKey", {
        get: function () {
            return this._sortKey;
        },
        /**
         * 是否点击时按该列排序。
         */
        set: function (value) {
            this._sortKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeaderItem.prototype, "sortStatus", {
        /**
         * 当前的排序状态。
         */
        get: function () {
            return this._sortStatus;
        },
        enumerable: true,
        configurable: true
    });
    TableHeaderItem.prototype.getFgImageRect = function (style) {
        var x = this.w - this.h;
        var y = this.topPadding;
        var w = this.clientH;
        var h = this.clientH;
        return rect_1.Rect.rect.init(x, y, w, h);
    };
    TableHeaderItem.prototype.getStyleType = function () {
        var styleType = this._styleType || this.type;
        if (!this._sortKey || !this._sortStatus) {
            return styleType;
        }
        return styleType + "." + this._sortStatus;
    };
    TableHeaderItem.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this._sortStatus = null;
        this.on(Events.CLICK, this.triggerSortStatus.bind(this));
    };
    TableHeaderItem.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.useBehavior("resizable", { east: true, animateDuration: 0 });
    };
    TableHeaderItem.prototype.triggerSortStatus = function () {
        var _this = this;
        var isDec = false;
        if (this._sortKey) {
            if (this._sortStatus === TableHeaderItem.SORT_INC) {
                isDec = true;
                this._sortStatus = TableHeaderItem.SORT_DEC;
            }
            else {
                this._sortStatus = TableHeaderItem.SORT_INC;
            }
            this.dispatchEvent(this._sortEvent.init(this._sortKey, isDec));
            this.parent.children.forEach(function (child) {
                if (child !== _this && child.type === _this.type) {
                    child._sortStatus = null;
                }
            });
        }
    };
    TableHeaderItem.create = function (options) {
        return TableHeaderItem.recycleBin.create(options);
    };
    return TableHeaderItem;
}(widget_1.Widget));
TableHeaderItem.SORT_INC = "inc";
TableHeaderItem.SORT_DEC = "dec";
TableHeaderItem.TYPE = "table-header-item";
TableHeaderItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(TableHeaderItem);
exports.TableHeaderItem = TableHeaderItem;
;
widget_factory_1.WidgetFactory.register(TableHeaderItem.TYPE, TableHeaderItem.create);
