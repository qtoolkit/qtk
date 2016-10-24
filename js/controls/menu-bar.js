"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var menu_1 = require("./menu");
var point_1 = require("../point");
var Events = require("../events");
var widget_1 = require("./widget");
var widget_factory_1 = require("./widget-factory");
var image_tile_1 = require("../image-tile");
var widget_recyclable_creator_1 = require("./widget-recyclable-creator");
var linear_layouter_1 = require("../layouters/linear-layouter");
var MenuBar = (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar() {
        _super.call(this, MenuBar.TYPE);
    }
    Object.defineProperty(MenuBar.prototype, "openedMenu", {
        get: function () {
            return this._openedMenu;
        },
        set: function (value) {
            var _this = this;
            this._openedMenu = value;
            if (value) {
                value.on(Events.CLOSE, function (evt) {
                    _this._openedMenu = null;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBar.prototype, "itemWidth", {
        get: function () {
            return this._itemWidth;
        },
        set: function (value) {
            this._itemWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    MenuBar.prototype.onItemEnter = function (child) {
        var openedMenu = this._openedMenu;
        if (openedMenu) {
            if (openedMenu.trigger !== child) {
                if (child.onInitSubMenu) {
                    child.reopenMenu(openedMenu);
                }
                else {
                    openedMenu.close();
                }
            }
        }
    };
    MenuBar.prototype.addChild = function (child, fastMode) {
        var _this = this;
        child.on(Events.POINTER_ENTER, function (evt) {
            _this.onItemEnter(child);
        });
        return _super.prototype.addChild.call(this, child, fastMode);
    };
    MenuBar.prototype.addSpace = function (width, position) {
        var item = MenuBarItem.create();
        item.styleType = "widget.transparent";
        item.layoutParam = this.createChildLayoutParam({ w: width || this.itemWidth, h: "100%", position: position || 1 });
        this.addChild(item);
        return item;
    };
    MenuBar.prototype.addLogo = function (iconURL, width) {
        var item = MenuBarItem.create();
        var w = width || this.h || (this.itemWidth >> 1);
        item.styleType = "widget.transparent";
        item.setIcons(iconURL, iconURL);
        item.layoutParam = this.createChildLayoutParam({ w: w, h: "100%", position: 0.1 });
        this.addChild(item);
        return item;
    };
    MenuBar.prototype.addItem = function (text, onInitSubMenu, width, position) {
        var item = MenuBarItem.create();
        item.set({ text: text, onInitSubMenu: onInitSubMenu });
        item.layoutParam = this.createChildLayoutParam({ w: width || this.itemWidth, h: "100%", position: position || 1 });
        this.addChild(item);
        return item;
    };
    MenuBar.prototype.addTextButton = function (text, onClick, width, position) {
        var item = MenuBarItem.create();
        item.set({ text: text });
        if (onClick) {
            item.on(Events.CLICK, onClick);
        }
        item.layoutParam = this.createChildLayoutParam({ w: width || this.itemWidth, h: "100%", position: position || 1 });
        this.addChild(item);
        return item;
    };
    MenuBar.prototype.addImageButton = function (normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL, onClick, position) {
        var item = MenuBarItem.create();
        if (onClick) {
            item.on(Events.CLICK, onClick);
        }
        item.styleType = "widget.transparent";
        item.setIcons(normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL);
        item.layoutParam = this.createChildLayoutParam({ w: this.h, h: "100%", position: position || 1 });
        this.addChild(item);
        return item;
    };
    MenuBar.prototype.onReset = function () {
        _super.prototype.onReset.call(this);
        this.childrenLayouter = linear_layouter_1.LinearLayouter.createH({ spacing: 1 });
    };
    MenuBar.prototype.getDefProps = function () {
        return MenuBar.defProps;
    };
    MenuBar.create = function (options) {
        return MenuBar.recycleBin.create(options);
    };
    MenuBar.defProps = Object.assign({}, widget_1.Widget.defProps, { _itemWidth: 40 });
    MenuBar.TYPE = "menu-bar";
    MenuBar.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(MenuBar);
    return MenuBar;
}(widget_1.Widget));
exports.MenuBar = MenuBar;
;
var MenuBarItem = (function (_super) {
    __extends(MenuBarItem, _super);
    function MenuBarItem() {
        _super.call(this, MenuBarItem.TYPE);
    }
    MenuBarItem.prototype.setIcons = function (normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL) {
        var redraw = this.requestRedraw.bind(this);
        this._normalIcon = normalIconURL ? image_tile_1.ImageTile.create(normalIconURL, redraw) : null;
        this._overIcon = overIconURL ? image_tile_1.ImageTile.create(overIconURL, redraw) : null;
        this._activeIcon = activeIconURL ? image_tile_1.ImageTile.create(activeIconURL, redraw) : null;
        this._disableIcon = disableIconURL ? image_tile_1.ImageTile.create(disableIconURL, redraw) : null;
        this._checkedIcon = checkedIconURL ? image_tile_1.ImageTile.create(checkedIconURL, redraw) : null;
        this._normalIconURL = normalIconURL ? normalIconURL : null;
        this._overIconURL = overIconURL ? overIconURL : null;
        this._activeIconURL = activeIconURL ? activeIconURL : null;
        this._disableIconURL = disableIconURL ? disableIconURL : null;
        this._checkedIconURL = checkedIconURL ? checkedIconURL : null;
    };
    MenuBarItem.prototype.drawImage = function (ctx, style) {
        var icon = null;
        if (!this._enable) {
            icon = this._disableIcon;
        }
        else {
            if (this._value) {
                icon = this._checkedIcon;
            }
            else {
                if (this.state === widget_1.WidgetState.OVER) {
                    icon = this._overIcon;
                }
                else if (this.state === widget_1.WidgetState.ACTIVE) {
                    icon = this._activeIcon;
                }
            }
        }
        if (!icon) {
            icon = this._normalIcon;
        }
        if (icon) {
            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, 0, 0, this.w, this.h);
        }
        return this;
    };
    MenuBarItem.prototype.reopenMenu = function (menu) {
        menu.clearContent();
        this.onInitSubMenu(menu);
        menu.set({ trigger: this });
        var p = this.toViewPoint(point_1.Point.point.init(0, this.h));
        menu.moveTo(p.x - menu.leftPadding, p.y);
        menu.resizeToContent();
    };
    MenuBarItem.prototype.openMenu = function () {
        var menuBar = this.parent;
        var menu = menu_1.Menu.create();
        menu.set({ trigger: this, owner: menuBar });
        this.onInitSubMenu(menu);
        if (menu.hasItems()) {
            var p = this.toViewPoint(point_1.Point.point.init(0, this.h));
            menu.moveTo(p.x - menu.leftPadding, p.y);
            menuBar.openedMenu = menu;
            menu.open();
        }
        else {
            menu.dispose();
        }
    };
    MenuBarItem.prototype.dispatchClick = function (evt) {
        _super.prototype.dispatchClick.call(this, evt);
        if (this.onInitSubMenu) {
            this.openMenu();
        }
    };
    MenuBarItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    MenuBarItem.prototype.getDefProps = function () {
        return MenuBarItem.defProps;
    };
    MenuBarItem.create = function (options) {
        return MenuBarItem.recycleBin.create(options);
    };
    MenuBarItem.defProps = Object.assign({}, widget_1.Widget.defProps, {
        _normalIconURL: null, _overIconURL: null, _activeIconURL: null, _disableIconURL: null, _checkedIconURL: null
    });
    MenuBarItem.TYPE = "menu-bar-item";
    MenuBarItem.recycleBin = widget_recyclable_creator_1.WidgetRecyclableCreator.create(MenuBarItem);
    return MenuBarItem;
}(widget_1.Widget));
exports.MenuBarItem = MenuBarItem;
;
widget_factory_1.WidgetFactory.register(MenuBar.TYPE, MenuBar.create);
widget_factory_1.WidgetFactory.register(MenuBarItem.TYPE, MenuBarItem.create);
