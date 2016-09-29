"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rect_1 = require("../rect");
var point_1 = require("../point");
var edit_1 = require("./edit");
var button_1 = require("./button");
var widget_1 = require("./widget");
var dialog_1 = require("./dialog");
var graphics_1 = require("../graphics");
var Events = require("../events");
var list_view_1 = require("./list-view");
var list_item_1 = require("./list-item");
var widget_factory_1 = require("./widget-factory");
var recyclable_creator_1 = require("../recyclable-creator");
var image_tile_1 = require("../image-tile");
var simple_layouter_1 = require("../layouters/simple-layouter");
var ComboBoxOption = (function () {
    function ComboBoxOption(text, value, imageURL, color) {
        this.text = text;
        this.color = color;
        this.isDefault = false;
        this.value = value === undefined ? text : value;
        this.image = imageURL ? image_tile_1.ImageTile.create(imageURL, function () { }) : null;
    }
    return ComboBoxOption;
}());
exports.ComboBoxOption = ComboBoxOption;
;
var ComboBoxItem = (function (_super) {
    __extends(ComboBoxItem, _super);
    function ComboBoxItem() {
        _super.call(this, ComboBoxItem.TYPE);
    }
    ComboBoxItem.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.padding = 2;
    };
    Object.defineProperty(ComboBoxItem.prototype, "text", {
        get: function () {
            return this.data.text;
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxItem.prototype.getStyleType = function () {
        if (this._styleType) {
            return this._styleType;
        }
        if (this.data.isDefault) {
            return "combo-box-item.current";
        }
        else {
            return "combo-box-item";
        }
    };
    ComboBoxItem.prototype.drawText = function (ctx, style) {
        var data = this.data;
        var x = this.leftPadding;
        ;
        var y = this.topPadding;
        var w = this.w - x - this.rightPadding;
        var h = this.h - y - this.bottomPadding;
        if (style.foreGroundImage) {
            style.foreGroundImage.draw(ctx, image_tile_1.ImageDrawType.AUTO, x, y, h, h);
        }
        x += h + this.leftPadding;
        if (data.image) {
            data.image.draw(ctx, image_tile_1.ImageDrawType.AUTO, x, y, h, h);
            x += h + this.leftPadding;
        }
        else if (data.color) {
            ctx.fillStyle = data.color;
            ctx.fillRect(x, y, h, h);
            x += h + this.leftPadding;
        }
        var text = this.getLocaleText();
        if (text && style.textColor) {
            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
        }
        return this;
    };
    ComboBoxItem.create = function (options) {
        return ComboBoxItem.r.create().reset(ComboBoxItem.TYPE, options);
    };
    ComboBoxItem.TYPE = "combo-box-item";
    ComboBoxItem.r = new recyclable_creator_1.RecyclableCreator(function () { return new ComboBoxItem(); });
    return ComboBoxItem;
}(list_item_1.ListItem));
exports.ComboBoxItem = ComboBoxItem;
;
var ComboBoxBase = (function (_super) {
    __extends(ComboBoxBase, _super);
    function ComboBoxBase(type) {
        _super.call(this, type);
    }
    Object.defineProperty(ComboBoxBase.prototype, "itemHeight", {
        get: function () {
            return this._itemHeight || 25;
        },
        set: function (value) {
            this._itemHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComboBoxBase.prototype, "value", {
        get: function () {
            return this._current ? this._current.value : null;
        },
        set: function (value) {
            var arr = this._options;
            this._current = null;
            this._value = value;
            if (arr) {
                var n = arr.length;
                for (var i = 0; i < n; i++) {
                    var iter = arr[i];
                    if (iter.value === value) {
                        this._current = iter;
                        break;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxBase.prototype.resetOptions = function () {
        this._options = [];
        return this;
    };
    Object.defineProperty(ComboBoxBase.prototype, "optionsCount", {
        get: function () {
            return this._options.length;
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxBase.prototype.addOption = function (text, value, imageURL, color) {
        var item = new ComboBoxOption(text, value, imageURL, color);
        this._options.push(item);
        if (value === this._value || (value === undefined && text === this._value)) {
            this._current = item;
        }
        return this;
    };
    ComboBoxBase.prototype.onItemSelected = function (data) {
        if (data) {
            this.requestRedraw();
            this._current = data;
            this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, { oldValue: null, newValue: data.value }));
        }
    };
    ComboBoxBase.prototype.showPopup = function () {
        var _this = this;
        var vp = this.app.getViewPort();
        var p = this.toViewPoint(point_1.Point.point.init(0, 0));
        var x = p.x;
        var w = this.w;
        var y = p.y + this.h;
        var padding = 4;
        var scrollable = false;
        var itemHeight = this.itemHeight;
        var options = this._options;
        var dialog = dialog_1.Dialog.create();
        var n = this._options.length || 1;
        var h = n * itemHeight + padding + padding;
        var halfH = vp.h >> 1;
        if ((y + h) > vp.h) {
            if (h < halfH) {
                y = p.y - h;
            }
            else {
                h = halfH;
                if ((y + h) > vp.h) {
                    y = p.y - h;
                }
                scrollable = true;
            }
        }
        dialog.set({ x: x, y: y, w: w, h: h, hasOwnCanvas: true, app: this.app });
        dialog.styleType = "widget.transparent";
        dialog.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
        var listView = list_view_1.ListView.create();
        listView.padding = padding;
        listView.itemHeight = itemHeight;
        listView.styleType = "combo-box-popup";
        listView.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "0", y: "0px", w: "100%", h: "100%" });
        listView.dragToScroll = scrollable;
        dialog.addChild(listView);
        dialog.target = listView;
        for (var i = 0; i < n; i++) {
            var iter = options[i];
            var item = ComboBoxItem.create();
            iter.isDefault = this._current === iter;
            item.set({ data: iter });
            listView.addChild(item, true);
        }
        listView.relayoutChildren();
        listView.relayoutChildren();
        dialog.open();
        dialog.grab();
        this._isPopupOpened = true;
        dialog.on(Events.CLICK, function (evt) {
            var item = listView.target;
            if (item || !dialog.hitTestResult) {
                if (item) {
                    var data = item.data;
                    _this.onItemSelected(data);
                }
                _this._isPopupOpened = false;
                dialog.close();
            }
        });
    };
    ComboBoxBase.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.padding = 2;
        this._options = [];
        this.itemHeight = 25;
        this._current = null;
    };
    return ComboBoxBase;
}(widget_1.Widget));
exports.ComboBoxBase = ComboBoxBase;
;
var ComboBox = (function (_super) {
    __extends(ComboBox, _super);
    function ComboBox() {
        _super.call(this, ComboBox.TYPE);
    }
    Object.defineProperty(ComboBox.prototype, "text", {
        get: function () {
            return this._current ? this._current.text : "";
        },
        enumerable: true,
        configurable: true
    });
    ComboBox.prototype.getFgImageRect = function (style) {
        var h = this.clientH;
        return rect_1.Rect.rect.init(this.w - this.h, this.topPadding, h, h);
    };
    ComboBox.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (!this._isPopupOpened) {
            this.showPopup();
        }
    };
    ComboBox.create = function (options) {
        return ComboBox.recycleBin.create().reset(ComboBox.TYPE, options);
    };
    ComboBox.TYPE = "combo-box";
    ComboBox.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ComboBox(); });
    return ComboBox;
}(ComboBoxBase));
exports.ComboBox = ComboBox;
;
widget_factory_1.WidgetFactory.register(ComboBox.TYPE, ComboBox.create);
var ComboBoxEditable = (function (_super) {
    __extends(ComboBoxEditable, _super);
    function ComboBoxEditable() {
        _super.call(this, ComboBoxEditable.TYPE);
    }
    Object.defineProperty(ComboBoxEditable.prototype, "value", {
        get: function () {
            return this._edit ? this._edit.text : this._value;
        },
        set: function (value) {
            this._value = value;
            if (this._edit) {
                this._edit.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ComboBoxEditable.prototype.onItemSelected = function (data) {
        if (data) {
            _super.prototype.onItemSelected.call(this, data);
            if (this._edit) {
                this._edit.text = data.text || data.value;
            }
        }
    };
    ComboBoxEditable.prototype.relayoutChildren = function () {
        this.requestRedraw();
        if (this._edit && this._button) {
            var x = this.leftPadding;
            var y = this.topPadding;
            var w = this.clientW - this.h;
            var h = this.clientH;
            this._edit.moveResizeTo(x, y, w, h, 0);
            x = this.w - this.h;
            w = this.h - this.rightPadding;
            this._button.moveResizeTo(x, y, w, h, 0);
        }
        return this.getLayoutRect();
    };
    ComboBoxEditable.prototype.dispose = function () {
        this._edit = null;
        this._button = null;
        _super.prototype.dispose.call(this);
    };
    ComboBoxEditable.prototype.onReset = function () {
        var _this = this;
        _super.prototype.onReset.call(this);
        this.padding = 0;
        this._edit = edit_1.Edit.create();
        this.addChild(this._edit);
        this._button = button_1.Button.create({ styleType: "combo-box.button" });
        this.addChild(this._button);
        this._button.on(Events.CLICK, function (evt) {
            if (!_this._isPopupOpened) {
                _this.showPopup();
            }
        });
    };
    ComboBoxEditable.create = function (options) {
        return ComboBoxEditable.recycleBin.create().reset(ComboBoxEditable.TYPE, options);
    };
    ComboBoxEditable.TYPE = "combo-box.editable";
    ComboBoxEditable.recycleBin = new recyclable_creator_1.RecyclableCreator(function () {
        return new ComboBoxEditable();
    });
    return ComboBoxEditable;
}(ComboBoxBase));
exports.ComboBoxEditable = ComboBoxEditable;
;
widget_factory_1.WidgetFactory.register(ComboBoxEditable.TYPE, ComboBoxEditable.create);
