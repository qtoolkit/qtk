var qtk =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rect_1 = __webpack_require__(1);
	exports.Rect = rect_1.Rect;
	var point_1 = __webpack_require__(2);
	exports.Point = point_1.Point;
	var style_1 = __webpack_require__(3);
	exports.Style = style_1.Style;
	var matrix_1 = __webpack_require__(12);
	exports.Matrix = matrix_1.Matrix;
	var canvas_1 = __webpack_require__(13);
	exports.Canvas = canvas_1.Canvas;
	var edit_1 = __webpack_require__(17);
	exports.Edit = edit_1.Edit;
	var label_1 = __webpack_require__(18);
	exports.Label = label_1.Label;
	var emitter_1 = __webpack_require__(4);
	exports.Emitter = emitter_1.Emitter;
	var page_1 = __webpack_require__(85);
	exports.Page = page_1.Page;
	var key_event_1 = __webpack_require__(16);
	exports.KeyEvent = key_event_1.KeyEvent;
	var view_port_1 = __webpack_require__(86);
	exports.ViewPort = view_port_1.ViewPort;
	var pages_1 = __webpack_require__(87);
	exports.Pages = pages_1.Pages;
	var main_loop_1 = __webpack_require__(88);
	exports.MainLoop = main_loop_1.MainLoop;
	var image_1 = __webpack_require__(89);
	exports.Image = image_1.Image;
	var group_1 = __webpack_require__(90);
	exports.Group = group_1.Group;
	var dialog_1 = __webpack_require__(91);
	exports.Dialog = dialog_1.Dialog;
	var button_1 = __webpack_require__(93);
	exports.Button = button_1.Button;
	var slider_1 = __webpack_require__(94);
	exports.Slider = slider_1.Slider;
	var switch_1 = __webpack_require__(96);
	exports.Switch = switch_1.Switch;
	var matrix_stack_1 = __webpack_require__(22);
	exports.MatrixStack = matrix_stack_1.MatrixStack;
	var tab_page_1 = __webpack_require__(97);
	exports.TabPage = tab_page_1.TabPage;
	var rich_text_1 = __webpack_require__(98);
	exports.RichText = rich_text_1.RichText;
	var tab_button_1 = __webpack_require__(103);
	exports.TabButton = tab_button_1.TabButton;
	var tab_control_1 = __webpack_require__(107);
	exports.TabControl = tab_control_1.TabControl;
	var image_tile_1 = __webpack_require__(7);
	exports.ImageDrawType = image_tile_1.ImageDrawType;
	exports.ImageTile = image_tile_1.ImageTile;
	var rich_text_edit_1 = __webpack_require__(109);
	exports.RichTextEdit = rich_text_edit_1.RichTextEdit;
	var tab_button_group_1 = __webpack_require__(108);
	exports.TabButtonGroup = tab_button_group_1.TabButtonGroup;
	var combo_box_1 = __webpack_require__(110);
	exports.ComboBox = combo_box_1.ComboBox;
	exports.ComboBoxEditable = combo_box_1.ComboBoxEditable;
	var grid_view_1 = __webpack_require__(115);
	exports.GridView = grid_view_1.GridView;
	var list_view_1 = __webpack_require__(111);
	exports.ListView = list_view_1.ListView;
	var tree_item_1 = __webpack_require__(117);
	exports.TreeItem = tree_item_1.TreeItem;
	var tree_view_1 = __webpack_require__(118);
	exports.TreeView = tree_view_1.TreeView;
	var application_1 = __webpack_require__(120);
	exports.Application = application_1.Application;
	var movable_1 = __webpack_require__(124);
	exports.Movable = movable_1.Movable;
	var theme_manager_1 = __webpack_require__(121);
	exports.ThemeManager = theme_manager_1.ThemeManager;
	var draggable_1 = __webpack_require__(125);
	exports.Draggable = draggable_1.Draggable;
	var droppable_1 = __webpack_require__(126);
	exports.Droppable = droppable_1.Droppable;
	var resizable_1 = __webpack_require__(127);
	exports.Resizable = resizable_1.Resizable;
	var menu_1 = __webpack_require__(128);
	exports.Menu = menu_1.Menu;
	exports.MenuItem = menu_1.MenuItem;
	var radio_button_1 = __webpack_require__(105);
	exports.RadioButton = radio_button_1.RadioButton;
	var tree_item_data_1 = __webpack_require__(119);
	exports.TreeItemData = tree_item_data_1.TreeItemData;
	var check_button_1 = __webpack_require__(106);
	exports.CheckButton = check_button_1.CheckButton;
	var window_normal_1 = __webpack_require__(129);
	exports.WindowNormal = window_normal_1.WindowNormal;
	var widget_factory_1 = __webpack_require__(23);
	exports.WidgetFactory = widget_factory_1.WidgetFactory;
	var menu_bar_1 = __webpack_require__(130);
	exports.MenuBar = menu_bar_1.MenuBar;
	exports.MenuBarItem = menu_bar_1.MenuBarItem;
	var color_tile_1 = __webpack_require__(132);
	exports.ColorTile = color_tile_1.ColorTile;
	exports.ColorLine = color_tile_1.ColorLine;
	var list_item_1 = __webpack_require__(113);
	exports.ListItem = list_item_1.ListItem;
	exports.ListItemStyle = list_item_1.ListItemStyle;
	var graphics_1 = __webpack_require__(25);
	exports.RoundType = graphics_1.RoundType;
	exports.Graphics = graphics_1.Graphics;
	var accordion_1 = __webpack_require__(133);
	exports.Accordion = accordion_1.Accordion;
	var service_locator_1 = __webpack_require__(123);
	exports.ServiceLocator = service_locator_1.ServiceLocator;
	var ruler_1 = __webpack_require__(136);
	exports.VRuler = ruler_1.VRuler;
	exports.HRuler = ruler_1.HRuler;
	var title_content_1 = __webpack_require__(134);
	exports.TitleContent = title_content_1.TitleContent;
	var title_label_1 = __webpack_require__(137);
	exports.TitleLabel = title_label_1.TitleLabel;
	var title_edit_1 = __webpack_require__(139);
	exports.TitleEdit = title_edit_1.TitleEdit;
	var title_slider_1 = __webpack_require__(140);
	exports.TitleSlider = title_slider_1.TitleSlider;
	var property_page_1 = __webpack_require__(141);
	exports.PropertyPage = property_page_1.PropertyPage;
	var choosable_edit_1 = __webpack_require__(145);
	exports.ChoosableEdit = choosable_edit_1.ChoosableEdit;
	var title_text_area_1 = __webpack_require__(142);
	exports.TitleTextArea = title_text_area_1.TitleTextArea;
	var property_sheets_1 = __webpack_require__(146);
	exports.PropertySheets = property_sheets_1.PropertySheets;
	var progress_bar_1 = __webpack_require__(95);
	exports.ProgressBarType = progress_bar_1.ProgressBarType;
	exports.ProgressBar = progress_bar_1.ProgressBar;
	var title_choosable_edit_1 = __webpack_require__(144);
	exports.TitleChoosableEdit = title_choosable_edit_1.TitleChoosableEdit;
	var dock_layouter_1 = __webpack_require__(147);
	exports.DockLayouter = dock_layouter_1.DockLayouter;
	exports.DockLayouterParam = dock_layouter_1.DockLayouterParam;
	var grid_layouter_1 = __webpack_require__(116);
	exports.GridLayouter = grid_layouter_1.GridLayouter;
	exports.GridLayouterParam = grid_layouter_1.GridLayouterParam;
	var list_layouter_1 = __webpack_require__(112);
	exports.ListLayouter = list_layouter_1.ListLayouter;
	exports.ListLayouterParam = list_layouter_1.ListLayouterParam;
	var simple_layouter_1 = __webpack_require__(114);
	exports.SimpleLayouter = simple_layouter_1.SimpleLayouter;
	exports.SimpleLayouterParam = simple_layouter_1.SimpleLayouterParam;
	var linear_layouter_1 = __webpack_require__(131);
	exports.LinearLayouter = linear_layouter_1.LinearLayouter;
	exports.LinearLayouterParam = linear_layouter_1.LinearLayouterParam;
	var widget_1 = __webpack_require__(19);
	exports.Widget = widget_1.Widget;
	exports.WidgetState = widget_1.WidgetState;
	exports.WidgetMode = widget_1.WidgetMode;
	exports.HitTestResult = widget_1.HitTestResult;
	var consts_1 = __webpack_require__(104);
	exports.Direction = consts_1.Direction;
	exports.Align = consts_1.Align;
	exports.AlignH = consts_1.AlignH;
	exports.AlignV = consts_1.AlignV;
	exports.Orientation = consts_1.Orientation;
	exports.Services = consts_1.Services;
	var title_combo_box_1 = __webpack_require__(143);
	exports.TitleComboBox = title_combo_box_1.TitleComboBox;
	exports.TitleComboBoxEditable = title_combo_box_1.TitleComboBoxEditable;
	var message_box_1 = __webpack_require__(148);
	exports.ButtonOption = message_box_1.ButtonOption;
	exports.ButtonsOptions = message_box_1.ButtonsOptions;
	exports.TitleOptions = message_box_1.TitleOptions;
	exports.MessageBox = message_box_1.MessageBox;
	var scroll_view_1 = __webpack_require__(99);
	exports.ScrollerBarVisibility = scroll_view_1.ScrollerBarVisibility;
	exports.ScrollBarStyle = scroll_view_1.ScrollBarStyle;
	exports.ScrollView = scroll_view_1.ScrollView;
	var device_info_1 = __webpack_require__(122);
	exports.DeviceInfo = device_info_1.DeviceInfo;
	var view_modal_1 = __webpack_require__(149);
	exports.ViewModal = view_modal_1.ViewModal;
	var recyclable_creator_1 = __webpack_require__(82);
	exports.RecyclableCreator = recyclable_creator_1.RecyclableCreator;
	var delegate_command_1 = __webpack_require__(154);
	exports.DelegateCommand = delegate_command_1.DelegateCommand;
	var collection_view_modal_1 = __webpack_require__(155);
	exports.CollectionViewModal = collection_view_modal_1.CollectionViewModal;
	var delegate_value_converter_1 = __webpack_require__(156);
	exports.DelegateValueConverter = delegate_value_converter_1.DelegateValueConverter;
	var ivalidation_rule_1 = __webpack_require__(153);
	exports.ValidationResult = ivalidation_rule_1.ValidationResult;
	var delegate_validation_rule_1 = __webpack_require__(157);
	exports.DelegateValidationRule = delegate_validation_rule_1.DelegateValidationRule;
	var binding_rule_1 = __webpack_require__(79);
	exports.BindingRule = binding_rule_1.BindingRule;
	exports.BindingDataSource = binding_rule_1.BindingDataSource;
	exports.BindingCommandSource = binding_rule_1.BindingCommandSource;
	exports.BindingRuleItem = binding_rule_1.BindingRuleItem;
	/// <reference path="../typings/globals/tween.js/index.d.ts"/>
	var TWEEN = __webpack_require__(20);
	exports.TWEEN = TWEEN;
	var Events = __webpack_require__(6);
	exports.Events = Events;
	var Assets = __webpack_require__(11);
	exports.Assets = Assets;
	var inputEventAdapter = __webpack_require__(15);
	exports.inputEventAdapter = inputEventAdapter;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Rect = (function () {
	    function Rect(x, y, w, h) {
	        this.init(x, y, w, h);
	    }
	    Rect.prototype.init = function (x, y, w, h) {
	        this.x = x;
	        this.y = y;
	        this.w = w;
	        this.h = h;
	        return this;
	    };
	    Rect.prototype.dispose = function () {
	    };
	    Rect.prototype.clone = function () {
	        return Rect.create(this.x, this.y, this.w, this.h);
	    };
	    Rect.prototype.equal = function (other) {
	        return this.x === other.x && this.y === other.y && this.w === other.w && this.h === other.h;
	    };
	    Rect.prototype.copy = function (other) {
	        return this.init(other.x, other.y, other.w, other.h);
	    };
	    Rect.prototype.merge = function (other) {
	        var x = Math.min(this.x, other.x);
	        var y = Math.min(this.y, other.y);
	        this.w = Math.max(this.x + this.w, other.x + other.w) - x;
	        this.h = Math.max(this.y + this.h, other.y + other.h) - y;
	        this.x = x;
	        this.y = y;
	        return this;
	    };
	    Rect.create = function (x, y, w, h) {
	        var r = new Rect(x || 0, y || 0, w || 0, h || 0);
	        return r;
	    };
	    Rect.rect = Rect.create(0, 0, 0, 0);
	    return Rect;
	}());
	exports.Rect = Rect;
	;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Point = (function () {
	    function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	    Point.prototype.dispose = function () {
	    };
	    Point.prototype.init = function (x, y) {
	        this.x = x;
	        this.y = y;
	        return this;
	    };
	    Point.prototype.copy = function (p) {
	        this.x = p.x;
	        this.y = p.y;
	        return this;
	    };
	    Point.prototype.isInRect = function (r) {
	        return this.isIn(r.x, r.y, r.w, r.h);
	    };
	    Point.prototype.isIn = function (x, y, w, h) {
	        var xx = this.x;
	        var yy = this.y;
	        return xx >= x && xx <= (x + w) && yy >= y && yy <= (y + h);
	    };
	    Point.create = function (x, y) {
	        return new Point(x, y);
	    };
	    Point.point = Point.create(0, 0);
	    return Point;
	}());
	exports.Point = Point;
	;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var emitter_1 = __webpack_require__(4);
	var Events = __webpack_require__(6);
	var image_tile_1 = __webpack_require__(7);
	/**
	 * Style用来控制Widget的外观效果，如背景和字体等等。
	 */
	var Style = (function (_super) {
	    __extends(Style, _super);
	    function Style() {
	        _super.call(this);
	    }
	    Style.prototype.notifyChanged = function () {
	        this.dispatchEvent({ type: Events.CHANGE });
	    };
	    Object.defineProperty(Style.prototype, "textLineHeight", {
	        get: function () {
	            return Math.round(this.fontSize * 1.2);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Style.prototype.clone = function () {
	        var other = new Style();
	        if (this._backGroundColor) {
	            other._backGroundColor = this._backGroundColor;
	        }
	        if (this._foreGroundColor) {
	            other._foreGroundColor = this._foreGroundColor;
	        }
	        if (this._backGroundImage) {
	            other._backGroundImage = this._backGroundImage;
	        }
	        if (this._backGroundImageDrawType) {
	            other._backGroundImageDrawType = this._backGroundImageDrawType;
	        }
	        if (this._foreGroundImage) {
	            other._foreGroundImage = this._foreGroundImage;
	        }
	        if (this._foreGroundImageDrawType) {
	            other._foreGroundImageDrawType = this._foreGroundImageDrawType;
	        }
	        if (this._fontFamily) {
	            other._fontFamily = this._fontFamily;
	        }
	        if (this._fontSize) {
	            other._fontSize = this._fontSize;
	        }
	        if (this._textColor) {
	            other._textColor = this._textColor;
	        }
	        if (this._fontBold) {
	            other._fontBold = this._fontBold;
	        }
	        if (this._fontItalic) {
	            other._fontItalic = this._fontItalic;
	        }
	        if (this._fontUnderline) {
	            other._fontUnderline = this._fontUnderline;
	        }
	        if (this._lineColor) {
	            other._lineColor = this._lineColor;
	        }
	        if (this._lineWidth) {
	            other._lineWidth = this._lineWidth;
	        }
	        if (this._lineJoin) {
	            other._lineJoin = this._lineJoin;
	        }
	        if (this._lineCap) {
	            other._lineCap = this._lineCap;
	        }
	        if (this._dashLine) {
	            other._dashLine = this._dashLine;
	        }
	        if (this._roundRadius) {
	            other._roundRadius = this._roundRadius;
	        }
	        if (this._roundType) {
	            other._roundType = this._roundType;
	        }
	        return other;
	    };
	    Style.prototype.toJson = function () {
	        var json = {};
	        if (this._backGroundColor) {
	            json.backGroundColor = this._backGroundColor;
	        }
	        if (this._foreGroundColor) {
	            json.foreGroundColor = this._foreGroundColor;
	        }
	        if (this._backGroundImage) {
	            json.backGroundImage = this._backGroundImage.toJson();
	        }
	        if (this._backGroundImageDrawType) {
	            json.backGroundImageDrawType = image_tile_1.ImageDrawType[this._backGroundImageDrawType];
	        }
	        if (this._foreGroundImage) {
	            json.foreGroundImage = this._foreGroundImage.toJson();
	        }
	        if (this._foreGroundImageDrawType) {
	            json.foreGroundImageDrawType = image_tile_1.ImageDrawType[this._foreGroundImageDrawType];
	        }
	        if (this._fontFamily) {
	            json.fontFamily = this._fontFamily;
	        }
	        if (this._fontSize) {
	            json.fontSize = this._fontSize;
	        }
	        if (this._textColor) {
	            json.textColor = this._textColor;
	        }
	        if (this._fontBold) {
	            json.fontBold = this._fontBold;
	        }
	        if (this._fontItalic) {
	            json.fontItalic = this._fontItalic;
	        }
	        if (this._fontUnderline) {
	            json.fontUnderline = this._fontUnderline;
	        }
	        if (this._textBaseline) {
	            json.textBaseline = this._textBaseline;
	        }
	        if (this._textAlign) {
	            json.textAlign = this._textAlign;
	        }
	        if (this._lineWidth) {
	            json.lineWidth = this._lineWidth;
	        }
	        if (this._lineJoin) {
	            json.lineJoin = this._lineJoin;
	        }
	        if (this._lineCap) {
	            json.lineCap = this._lineCap;
	        }
	        if (this._dashLine) {
	            json.dashLine = this._dashLine;
	        }
	        if (this._lineColor) {
	            json.lineColor = this._lineColor;
	        }
	        if (this._roundRadius) {
	            json.roundRadius = this._roundRadius;
	        }
	        if (this._roundType) {
	            json.roundType = this._roundType;
	        }
	        return json;
	    };
	    Style.prototype.fromJson = function (json, baseURL) {
	        var _this = this;
	        if (json.backGroundColor) {
	            this._backGroundColor = json.backGroundColor;
	        }
	        if (json.foreGroundColor) {
	            this._foreGroundColor = json.foreGroundColor;
	        }
	        if (json.backGroundImage) {
	            var url = baseURL ? baseURL + "/" + json.backGroundImage : json.backGroundImage;
	            this._backGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
	                _this.notifyChanged();
	            });
	        }
	        if (json.foreGroundImage) {
	            var url = baseURL ? baseURL + "/" + json.foreGroundImage : json.foreGroundImage;
	            this._foreGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
	                _this.notifyChanged();
	            });
	        }
	        if (json.backGroundImageDrawType) {
	            this._backGroundImageDrawType = parseInt(image_tile_1.ImageDrawType[json.backGroundImageDrawType]);
	        }
	        if (json.foreGroundImageDrawType) {
	            this._foreGroundImageDrawType = parseInt(image_tile_1.ImageDrawType[json.foreGroundImageDrawType]);
	        }
	        if (json.fontFamily) {
	            this._fontFamily = json.fontFamily;
	        }
	        if (json.fontSize) {
	            this._fontSize = json.fontSize;
	        }
	        if (json.textColor) {
	            this._textColor = json.textColor;
	        }
	        if (json.fontBold) {
	            this._fontBold = json.fontBold;
	        }
	        if (json.fontItalic) {
	            this._fontItalic = json.fontItalic;
	        }
	        if (json.fontUnderline) {
	            this._fontUnderline = json.fontUnderline;
	        }
	        if (json.textBaseline) {
	            this._textBaseline = json.textBaseline;
	        }
	        if (json.textAlign) {
	            this._textAlign = json.textAlign;
	        }
	        if (json.lineWidth) {
	            this._lineWidth = json.lineWidth;
	        }
	        if (json.lineJoin) {
	            this._lineJoin = json.lineJoin;
	        }
	        if (json.lineCap) {
	            this._lineCap = json.lineCap;
	        }
	        if (json.dashLine) {
	            this._dashLine = json.dashLine;
	        }
	        if (json.lineColor) {
	            this._lineColor = json.lineColor;
	        }
	        if (json.roundRadius) {
	            this._roundRadius = json.roundRadius;
	        }
	        if (json.roundType) {
	            this._roundType = json.roundType;
	        }
	        this.notifyChanged();
	    };
	    Object.defineProperty(Style.prototype, "backGroundColor", {
	        get: function () {
	            return this._backGroundColor;
	        },
	        set: function (value) {
	            this._backGroundColor = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "foreGroundColor", {
	        get: function () {
	            return this._foreGroundColor;
	        },
	        set: function (value) {
	            this._foreGroundColor = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "backGroundImage", {
	        get: function () {
	            return this._backGroundImage;
	        },
	        set: function (value) {
	            this._backGroundImage = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "backGroundImageDrawType", {
	        get: function () {
	            return this._backGroundImageDrawType;
	        },
	        set: function (value) {
	            this._backGroundImageDrawType = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "foreGroundImage", {
	        get: function () {
	            return this._foreGroundImage;
	        },
	        set: function (value) {
	            this._foreGroundImage = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "foreGroundImageDrawType", {
	        get: function () {
	            return this._foreGroundImageDrawType;
	        },
	        set: function (value) {
	            this._foreGroundImageDrawType = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "font", {
	        get: function () {
	            return this._fontSize + "px " + (this._fontFamily || "Sans");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "fontFamily", {
	        get: function () {
	            return this._fontFamily || "Sans";
	        },
	        set: function (value) {
	            this._fontFamily = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "fontSize", {
	        get: function () {
	            return this._fontSize;
	        },
	        set: function (value) {
	            this._fontSize = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "textColor", {
	        get: function () {
	            return this._textColor;
	        },
	        set: function (value) {
	            this._textColor = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "fontBold", {
	        get: function () {
	            return this._fontBold;
	        },
	        set: function (value) {
	            this._fontBold = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "fontItalic", {
	        get: function () {
	            return this._fontItalic;
	        },
	        set: function (value) {
	            this._fontItalic = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "fontUnderline", {
	        get: function () {
	            return this._fontUnderline;
	        },
	        set: function (value) {
	            this._fontUnderline = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "textAlign", {
	        get: function () {
	            return this._textAlign || "center";
	        },
	        set: function (value) {
	            this._textAlign = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "textBaseline", {
	        get: function () {
	            return this._textBaseline || "middle";
	        },
	        set: function (value) {
	            this._textBaseline = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "lineWidth", {
	        get: function () {
	            return this._lineWidth;
	        },
	        set: function (value) {
	            this._lineWidth = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "lineJoin", {
	        get: function () {
	            return this._lineJoin;
	        },
	        set: function (value) {
	            this._lineJoin = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "lineCap", {
	        get: function () {
	            return this._lineCap;
	        },
	        set: function (value) {
	            this._lineCap = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "dashLine", {
	        get: function () {
	            return this._dashLine;
	        },
	        set: function (value) {
	            this._dashLine = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "lineColor", {
	        get: function () {
	            return this._lineColor;
	        },
	        set: function (value) {
	            this._lineColor = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "roundRadius", {
	        get: function () {
	            return this._roundRadius;
	        },
	        set: function (value) {
	            this._roundRadius = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Style.prototype, "roundType", {
	        get: function () {
	            return this._roundType;
	        },
	        set: function (value) {
	            this._roundType = value;
	            this.notifyChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Style.create = function (json, baseURL) {
	        var style = new Style();
	        if (json) {
	            style.fromJson(json, baseURL);
	        }
	        return style;
	    };
	    Style.fill = function (ctx, fillStyle, h) {
	        if (!fillStyle || typeof fillStyle === "string") {
	            ctx.fillStyle = fillStyle;
	        }
	        else {
	            var key = fillStyle + "." + h;
	            var value = Style.fillStyles[key];
	            if (!value) {
	                var data = fillStyle;
	                var n = data.length;
	                var delta = 1 / n;
	                var value = ctx.createLinearGradient(0, 0, 0, h);
	                for (var i = 0; i < n; i++) {
	                    var color = data[i];
	                    value.addColorStop(i * delta, color);
	                }
	                Style.fillStyles[key] = value;
	            }
	            ctx.fillStyle = value;
	        }
	        ctx.fill();
	        return;
	    };
	    Style.fillStyles = {};
	    return Style;
	}(emitter_1.Emitter));
	exports.Style = Style;
	;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventEmitter = __webpack_require__(5);
	var EmitterImpl = (function (_super) {
	    __extends(EmitterImpl, _super);
	    function EmitterImpl() {
	        _super.call(this);
	    }
	    return EmitterImpl;
	}(EventEmitter));
	function toCaptureEventName(name) {
	    return name + ".capture";
	}
	/**
	 * 事件分发器。
	 */
	var Emitter = (function () {
	    function Emitter() {
	        this.emitter = new EmitterImpl();
	    }
	    /***
	     * 注册事件处理函数。
	     * @param type 事件的名称。
	     * @param callback 回调函数。
	     * @param useCapture 是否注册为capture阶段的处理函数。
	     */
	    Emitter.prototype.on = function (type, callback, useCapture) {
	        this.addEventListener(type, callback, useCapture);
	    };
	    /***
	     * 注册事件处理函数(只执行一次)。
	     * @param type 事件的名称。
	     * @param callback 回调函数。
	     * @param useCapture 是否注册为capture阶段的处理函数。
	     */
	    Emitter.prototype.once = function (type, callback) {
	        this.emitter.once(type, callback, this);
	    };
	    /***
	     * 注消事件处理函数。
	     * @param type 事件的名称。
	     * @param callback 回调函数。
	     * @param useCapture 是否注消capture阶段的处理函数。
	     */
	    Emitter.prototype.off = function (type, callback, useCapture) {
	        this.removeEventListener(type, callback, useCapture);
	    };
	    /***
	     * 注册事件处理函数。
	     * @param type 事件的名称。
	     * @param callback 回调函数。
	     * @param useCapture 是否注册为capture阶段的处理函数。
	     */
	    Emitter.prototype.addEventListener = function (type, callback, useCapture) {
	        if (useCapture) {
	            this.emitter.addListener(toCaptureEventName(type), callback, this);
	        }
	        else {
	            this.emitter.addListener(type, callback, this);
	        }
	    };
	    /***
	     * 注消事件处理函数。
	     * @param type 事件的名称。
	     * @param callback 回调函数。
	     * @param useCapture 是否注消capture阶段的处理函数。
	     */
	    Emitter.prototype.removeEventListener = function (type, callback, useCapture) {
	        if (useCapture) {
	            this.emitter.removeListener(toCaptureEventName(type), callback, this);
	        }
	        else {
	            this.emitter.removeListener(type, callback, this);
	        }
	    };
	    /***
	     * 分发异步事件。
	     * @param evt 事件。
	     * @param useCapture 是否触发capture阶段的处理函数。
	     */
	    Emitter.prototype.dispatchEventAsync = function (evt, useCapture) {
	        var _this = this;
	        setTimeout(function (e) {
	            _this.dispatchEvent(evt, useCapture);
	        }, 0);
	    };
	    /***
	     * 分发事件。
	     * @param evt 事件。
	     * @param useCapture 是否触发capture阶段的处理函数。
	     */
	    Emitter.prototype.dispatchEvent = function (evt, useCapture) {
	        if (evt.propagationStopped) {
	            console.log("evt.propagationStopped = true;");
	            return;
	        }
	        var emitter = this.emitter;
	        if (useCapture) {
	            emitter.emit(toCaptureEventName(evt.type), evt);
	        }
	        else {
	            emitter.emit(evt.type, evt);
	        }
	    };
	    Emitter.prototype.removeAllListeners = function (event) {
	        this.emitter.removeAllListeners(event);
	    };
	    return Emitter;
	}());
	exports.Emitter = Emitter;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * 常见事件名称的定义。
	 */
	exports.WHEEL = "qtk-wheel";
	exports.KEYUP = "qtk-keyup";
	exports.KEYDOWN = "qtk-keydown";
	exports.CONTEXT_MENU = "qtk-context-menu";
	exports.POINTER_DOWN = "qtk-pointer-down";
	exports.POINTER_MOVE = "qtk-pointer-move";
	exports.POINTER_UP = "qtk-pointer-up";
	exports.POINTER_OUT = "qtk-pointer-out";
	exports.POINTER_OVER = "qtk-pointer-over";
	exports.POINTER_ENTER = "qtk-pointer-enter";
	exports.POINTER_LEAVE = "qtk-pointer-leave";
	exports.CLICK = "qtk-click";
	exports.DBLCLICK = "qtk-dblclick";
	exports.CHANGE = "change";
	exports.PROGRESS = "progress";
	exports.CHANGING = "changing";
	exports.PROP_CHANGE = "prop-change";
	exports.PROP_DELETE = "prop-delete";
	exports.ITEM_ADD = "item-add";
	exports.ITEM_DELETE = "item-delete";
	exports.DISPOSE = "dispose";
	exports.RUN = "run";
	exports.QUIT = "quit";
	exports.SHOW = "show";
	exports.HIDE = "hide";
	exports.MOVE = "move";
	exports.MOVING = "moving";
	exports.CHOOSE = "choose";
	exports.OPEN = "open";
	exports.INIT = "init";
	exports.FOCUS = "focus";
	exports.BLUR = "blur";
	exports.DEINIT = "deinit";
	exports.CLOSE = "close";
	exports.RESIZE = "resize";
	exports.READY = "ready";
	exports.TICK = "tick";
	exports.PRETICK = "pretick";
	exports.POSTTICK = "posttick";
	exports.LOAD = "load";
	exports.EXPAND = "expand";
	exports.COLLAPSE = "collapse";
	exports.BEFORE_DRAW = "before-draw";
	exports.AFTER_DRAW = "after-draw";
	exports.BEFORE_APPLY_TRANSFORM = "before-apply-transform";
	exports.AFTER_APPLY_TRANSFORM = "after-apply-transform";
	exports.SCROLL = "scroll";
	exports.SCROLL_DONE = "scroll-done";
	exports.DRAG = "drag";
	exports.DROP = "drop";
	exports.DRAGEND = "dragend";
	exports.DRAGENTER = "dragenter";
	exports.DRAGEXIT = "dragexit";
	exports.DRAGLEAVE = "dragleave";
	exports.DRAGOVER = "dragover";
	exports.DRAGSTART = "dragstart";
	var Event = (function () {
	    function Event() {
	    }
	    Event.prototype.init = function (type, detail) {
	        this._type = type;
	        this._target = null;
	        this._propagationStopped = false;
	        return this;
	    };
	    Object.defineProperty(Event.prototype, "propagationStopped", {
	        get: function () {
	            return this._propagationStopped;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Event.prototype.stopPropagation = function () {
	        this._propagationStopped = true;
	    };
	    Object.defineProperty(Event.prototype, "type", {
	        get: function () {
	            return this._type;
	        },
	        set: function (value) {
	            this._type = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Event.prototype, "target", {
	        get: function () {
	            return this._target;
	        },
	        set: function (value) {
	            this._target = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Event.prototype.dispose = function () {
	    };
	    return Event;
	}());
	exports.Event = Event;
	;
	var AnyEvent = (function (_super) {
	    __extends(AnyEvent, _super);
	    function AnyEvent() {
	        _super.apply(this, arguments);
	    }
	    AnyEvent.prototype.init = function (type, payload) {
	        _super.prototype.init.call(this, type);
	        this.payload = payload;
	        return this;
	    };
	    AnyEvent.create = function (type, payload) {
	        var e = new AnyEvent();
	        return e.init(type, payload);
	    };
	    return AnyEvent;
	}(Event));
	exports.AnyEvent = AnyEvent;
	;
	var InputEvent = (function (_super) {
	    __extends(InputEvent, _super);
	    function InputEvent() {
	        _super.apply(this, arguments);
	    }
	    InputEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type);
	        this.altKey = detail.altKey;
	        this.ctrlKey = detail.ctrlKey;
	        this.shiftKey = detail.shiftKey;
	        this.commandKey = detail.commandKey;
	        return this;
	    };
	    return InputEvent;
	}(Event));
	exports.InputEvent = InputEvent;
	;
	var PointerEvent = (function (_super) {
	    __extends(PointerEvent, _super);
	    function PointerEvent() {
	        _super.apply(this, arguments);
	    }
	    PointerEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type, detail);
	        this.id = detail.id;
	        this.x = detail.x;
	        this.y = detail.y;
	        this.timeStamp = detail.timeStamp;
	        this.pointerDown = detail.pointerDown;
	        this.pointerDownX = detail.pointerDownX;
	        this.pointerDownY = detail.pointerDownY;
	        this.pointerDownTime = detail.pointerDownTime;
	        return this;
	    };
	    PointerEvent.create = function (type, detail) {
	        var e = new PointerEvent();
	        return e.init(type, detail);
	    };
	    return PointerEvent;
	}(InputEvent));
	exports.PointerEvent = PointerEvent;
	var WheelEvent = (function (_super) {
	    __extends(WheelEvent, _super);
	    function WheelEvent() {
	        _super.apply(this, arguments);
	    }
	    WheelEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type, detail);
	        this.delta = detail.delta;
	        this.timeStamp = detail.timeStamp;
	        return this;
	    };
	    WheelEvent.create = function (detail) {
	        var e = new WheelEvent();
	        return e.init(exports.WHEEL, detail);
	    };
	    return WheelEvent;
	}(InputEvent));
	exports.WheelEvent = WheelEvent;
	var KeyEvent = (function (_super) {
	    __extends(KeyEvent, _super);
	    function KeyEvent() {
	        _super.apply(this, arguments);
	    }
	    KeyEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type, detail);
	        this.keyCode = detail.keyCode;
	        this.timeStamp = detail.timeStamp;
	        return this;
	    };
	    KeyEvent.create = function (type, detail) {
	        var e = new KeyEvent();
	        return e.init(type, detail);
	    };
	    return KeyEvent;
	}(InputEvent));
	exports.KeyEvent = KeyEvent;
	var TickEvent = (function (_super) {
	    __extends(TickEvent, _super);
	    function TickEvent() {
	        _super.apply(this, arguments);
	    }
	    TickEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type);
	        this.fps = detail.fps;
	        this.time = detail.time;
	        this.deltaTime = detail.deltaTime;
	        return this;
	    };
	    TickEvent.create = function (type) {
	        var e = new TickEvent();
	        return e.init(type, {});
	    };
	    return TickEvent;
	}(Event));
	exports.TickEvent = TickEvent;
	;
	var ChangeEvent = (function (_super) {
	    __extends(ChangeEvent, _super);
	    function ChangeEvent() {
	        _super.apply(this, arguments);
	    }
	    ChangeEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type);
	        this.value = detail.newValue || detail.value;
	        this.oldValue = detail.oldValue;
	        this.newValue = detail.newValue;
	        return this;
	    };
	    ChangeEvent.create = function () {
	        var e = new ChangeEvent();
	        return e;
	    };
	    return ChangeEvent;
	}(Event));
	exports.ChangeEvent = ChangeEvent;
	;
	var PropChangeEvent = (function (_super) {
	    __extends(PropChangeEvent, _super);
	    function PropChangeEvent() {
	        _super.apply(this, arguments);
	    }
	    PropChangeEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type, detail);
	        this.prop = detail.prop;
	        this.trigger = detail.trigger;
	        return this;
	    };
	    PropChangeEvent.create = function () {
	        var e = new PropChangeEvent();
	        return e;
	    };
	    return PropChangeEvent;
	}(ChangeEvent));
	exports.PropChangeEvent = PropChangeEvent;
	;
	var DataTransfer = (function () {
	    function DataTransfer() {
	        this.data = {};
	        this.dragImage = null;
	        this.dropEffect = "move";
	    }
	    DataTransfer.prototype.clearData = function (format) {
	        if (format) {
	            delete this.data[format];
	        }
	        else {
	            this.data = {};
	        }
	    };
	    DataTransfer.prototype.getData = function (format) {
	        return this.data[format];
	    };
	    DataTransfer.prototype.setData = function (format, data) {
	        this.data[format] = data;
	    };
	    DataTransfer.prototype.setDragImage = function (dragImage) {
	        this.dragImage = dragImage;
	    };
	    return DataTransfer;
	}());
	exports.DataTransfer = DataTransfer;
	;
	var DragEvent = (function (_super) {
	    __extends(DragEvent, _super);
	    function DragEvent() {
	        _super.call(this);
	        this.dataTransfer = new DataTransfer();
	    }
	    DragEvent.prototype.init = function (type, detail) {
	        _super.prototype.init.call(this, type, detail);
	        return this;
	    };
	    Object.defineProperty(DragEvent, "isDragging", {
	        get: function () {
	            return DragEvent._isDragging;
	        },
	        set: function (isDragging) {
	            DragEvent._isDragging = isDragging;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DragEvent.get = function (type) {
	        var e = DragEvent.event;
	        return e.init(type);
	    };
	    DragEvent._isDragging = false;
	    DragEvent.event = new DragEvent();
	    return DragEvent;
	}(Event));
	exports.DragEvent = DragEvent;
	;
	var DrawEvent = (function (_super) {
	    __extends(DrawEvent, _super);
	    function DrawEvent() {
	        _super.apply(this, arguments);
	    }
	    DrawEvent.prototype.reset = function (type, ctx, widget) {
	        _super.prototype.init.call(this, type);
	        this.ctx = ctx;
	        this.widget = widget;
	        return this;
	    };
	    DrawEvent.get = function () {
	        return DrawEvent.event;
	    };
	    DrawEvent.event = new DrawEvent();
	    return DrawEvent;
	}(Event));
	exports.DrawEvent = DrawEvent;
	;
	var ApplyTransformEvent = (function (_super) {
	    __extends(ApplyTransformEvent, _super);
	    function ApplyTransformEvent() {
	        _super.apply(this, arguments);
	    }
	    ApplyTransformEvent.prototype.reset = function (type, ctx, widget) {
	        _super.prototype.init.call(this, type);
	        this.ctx = ctx;
	        this.widget = widget;
	        return this;
	    };
	    ApplyTransformEvent.get = function () {
	        return ApplyTransformEvent.event;
	    };
	    ApplyTransformEvent.event = new ApplyTransformEvent();
	    return ApplyTransformEvent;
	}(Event));
	exports.ApplyTransformEvent = ApplyTransformEvent;
	;
	var ScrollEvent = (function (_super) {
	    __extends(ScrollEvent, _super);
	    function ScrollEvent() {
	        _super.apply(this, arguments);
	    }
	    ScrollEvent.prototype.reset = function (type, widget, offsetX, offsetY) {
	        _super.prototype.init.call(this, type);
	        this.widget = widget;
	        this.offsetX = offsetX;
	        this.offsetY = offsetY;
	        return this;
	    };
	    ScrollEvent.create = function () {
	        return new ScrollEvent();
	    };
	    return ScrollEvent;
	}(Event));
	exports.ScrollEvent = ScrollEvent;
	;
	function createAnyEvent(type, payload) {
	    return AnyEvent.create(type, payload);
	}
	exports.createAnyEvent = createAnyEvent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/globals/node/index.d.ts"/>
	/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(8);
	var path = __webpack_require__(9);
	var emitter_1 = __webpack_require__(4);
	var Assets = __webpack_require__(11);
	var Events = __webpack_require__(6);
	(function (ImageDrawType) {
	    /**
	     * 画在填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["DEFAULT"] = 1] = "DEFAULT";
	    /**
	     * 按1比1大小画在指定的矩形区域的中间。
	     */
	    ImageDrawType[ImageDrawType["CENTER"] = 2] = "CENTER";
	    /**
	     * 把图分成3行3列等大小的区域，按9宫格的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["PATCH9"] = 3] = "PATCH9";
	    /**
	     * 把图分成3行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["PATCH3_V"] = 4] = "PATCH3_V";
	    /**
	     * 把图分成1行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["PATCH3_H"] = 5] = "PATCH3_H";
	    /**
	     * 按平铺的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["TILE"] = 6] = "TILE";
	    /**
	     * 按垂直平铺的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["TILE_V"] = 7] = "TILE_V";
	    /**
	     * 按水平平铺的方式填满指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["TILE_H"] = 8] = "TILE_H";
	    /**
	     * 保持比例缩放到指定的矩形区域。
	     */
	    ImageDrawType[ImageDrawType["AUTO"] = 9] = "AUTO";
	    /**
	     * ICON
	     */
	    ImageDrawType[ImageDrawType["ICON"] = 10] = "ICON";
	})(exports.ImageDrawType || (exports.ImageDrawType = {}));
	var ImageDrawType = exports.ImageDrawType;
	/**
	 * 把多个小的图片合并成一张大图，不但可以减少网路请求和GPU的调用次数，还可以提高内存的利用率。
	 * ImageTile用来表示大图中的一张小图，QTK中支持下面几种方式：
	 *
	 * 0.普通图片。如果URL中没有#，则表示一张普通图片，它的位置为(0,0)，大小为图片的整个大小。
	 *
	 * 1.指定子图的位置和大小，#之前的部分是大图的URL，后面是子图的位置和大小信息。
	 *  字母x后紧跟x坐标，字母y后紧跟y坐标，字母w后紧跟宽度，字母h后紧跟高度。
	 *  下面的URL表示图片demo.png中位置为(100,200)，大小为(300,400)的子图。
	 *
	 * ```
	 * https://qtoolkit.github.io/demo.png#x100y200w300h400
	 * ```
	 *
	 * 2.指定图片的行列数以及小图的序数，#之前的部分是大图的URL，后面是行数、列数和序数。
	 *  字母r紧跟行数，字母c后紧跟列数，字母i后紧跟序数。
	 *
	 *  下面的URL表示图片demo.png分成3行3列，序数为0的子图。
	 *
	 * ```
	 * https://qtoolkit.github.io/demo.png#r3c3i0
	 * ```
	 *
	 * 3.用TexturePacker打包的JSON Hash格式。#之前部分是JSON的URL，后面是子图的名称。如：
	 *
	 * ```
	 * https://qtoolkit.github.io/demo.json#demo.png
	 * ```
	 *
	 *
	 */
	var ImageTile = (function (_super) {
	    __extends(ImageTile, _super);
	    function ImageTile(src) {
	        _super.call(this);
	        this.x = 0;
	        this.y = 0;
	        this.w = 0;
	        this.h = 0;
	        this._id = 0;
	        this.img = null;
	        this.src = src;
	        if (src) {
	            this.create(src);
	        }
	    }
	    ImageTile.prototype.toJson = function () {
	        return this.src;
	    };
	    ImageTile.prototype.create = function (src) {
	        var index = src.indexOf('#');
	        if (index < 0) {
	            this.createNormal(src);
	        }
	        else {
	            var base = src.substr(0, index);
	            var ext = src.substr(index + 1);
	            if (ext[0] === 'x') {
	                this.createXYWH(base, ext);
	            }
	            else if (ext[0] === 'r') {
	                this.createRowColIndex(base, ext);
	            }
	            else {
	                this.createTexturePacker(base, ext);
	            }
	        }
	    };
	    ImageTile.prototype.init = function (img, x, y, w, h) {
	        this.x = x;
	        this.y = y;
	        this.w = w;
	        this.h = h;
	        this.img = img;
	        if (ImageTile.onImageLoaded) {
	            ImageTile.onImageLoaded(this);
	        }
	        this.dispatchEventAsync({ type: Events.LOAD, detail: this });
	    };
	    Object.defineProperty(ImageTile.prototype, "complete", {
	        get: function () {
	            return this.img && this.img.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ImageTile.prototype, "id", {
	        get: function () {
	            return this._id;
	        },
	        set: function (id) {
	            this._id = id;
	            if (this.img) {
	                this.img.imgID = id;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ImageTile.prototype.createNormal = function (src) {
	        var _this = this;
	        Assets.loadImage(src).then(function (img) {
	            _this.init(img, 0, 0, img.width, img.height);
	        }).catch(function (err) {
	            _this.init(null, 0, 0, 0, 0);
	        });
	    };
	    ImageTile.prototype.createXYWH = function (base, meta) {
	        var _this = this;
	        var xywh = meta.match(/x([0-9]+)y([0-9]+)w([0-9]+)h([0-9]+)/i);
	        var x = parseInt(xywh[1]);
	        var y = parseInt(xywh[2]);
	        var w = parseInt(xywh[3]);
	        var h = parseInt(xywh[4]);
	        Assets.loadImage(base).then(function (img) {
	            _this.init(img, x, y, w, h);
	        }).catch(function (err) {
	            _this.init(null, 0, 0, 0, 0);
	        });
	    };
	    ImageTile.prototype.createRowColIndex = function (base, meta) {
	        var _this = this;
	        var rowcolIndex = meta.match(/r([0-9]+)c([0-9]+)i([0-9]+)/i);
	        var rows = parseInt(rowcolIndex[1]);
	        var cols = parseInt(rowcolIndex[2]);
	        var index = parseInt(rowcolIndex[3]);
	        Assets.loadImage(base).then(function (img) {
	            var w = img.width / cols;
	            var h = img.height / rows;
	            var r = (index / cols) >> 0;
	            var c = index % cols;
	            var x = c * w;
	            var y = r * h;
	            _this.init(img, x, y, w, h);
	        }).catch(function (err) {
	            _this.init(null, 0, 0, 0, 0);
	        });
	    };
	    ImageTile.prototype.createTexturePacker = function (jsonURL, name) {
	        var _this = this;
	        Assets.loadJSON(jsonURL).then(function (json) {
	            var info = json.frames[name];
	            var imgSRC = path.dirname(jsonURL) + "/" + (json.file || json.meta.image);
	            Assets.loadImage(imgSRC).then(function (img) {
	                var rect = info.frame || info;
	                var x = rect.x;
	                var y = rect.y;
	                var w = rect.w;
	                var h = rect.h;
	                if (!info.trimmed && !info.rotate) {
	                    _this.init(img, x, y, w, h);
	                }
	                else {
	                    console.log("Not support trimmed mode or rotated mode");
	                    _this.init(null, 0, 0, 0, 0);
	                }
	            }).catch(function (err) {
	                _this.init(null, 0, 0, 0, 0);
	            });
	        }).catch(function (err) {
	            _this.init(null, 0, 0, 0, 0);
	        });
	    };
	    ImageTile.prototype.drawDefault = function (ctx, dx, dy, dw, dh) {
	        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, dx, dy, dw, dh);
	    };
	    ImageTile.prototype.drawIcon = function (ctx, dx, dy, dw, dh) {
	        var cx = dx + (dw >> 1);
	        var cy = dy + (dh >> 1);
	        var x = dx + ((dw - this.w) >> 1);
	        var y = dy + ((dh - this.h) >> 1);
	        ctx.save();
	        ctx.translate(cx, cy);
	        ctx.scale(ImageTile.scale, ImageTile.scale);
	        ctx.translate(-cx, -cy);
	        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);
	        ctx.restore();
	    };
	    ImageTile.prototype.drawCenter = function (ctx, dx, dy, dw, dh) {
	        var x = dx + ((dw - this.w) >> 1);
	        var y = dy + ((dh - this.h) >> 1);
	        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);
	    };
	    ImageTile.prototype.drawAuto = function (ctx, dx, dy, dw, dh) {
	        var x = dx;
	        var y = dy;
	        var w = 0;
	        var h = 0;
	        var scaleX = dw / this.w;
	        var scaleY = dh / this.h;
	        if (scaleX >= scaleY) {
	            h = dh;
	            w = scaleY * this.w;
	            x += ((dw - w) >> 1);
	        }
	        else {
	            w = dw;
	            h = scaleX * this.h;
	            y += ((dh - h) >> 1);
	        }
	        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, w, h);
	    };
	    ImageTile.prototype.draw3PatchH = function (ctx, dx, dy, dw, dh) {
	        var w = Math.min(dw >> 1, (this.w / 3) >> 0);
	        ctx.drawImage(this.img, this.x, this.y, w, this.h, dx, dy, w, dh);
	        ctx.drawImage(this.img, this.x + this.w - w, this.y, w, this.h, dx + dw - w, dy, w, dh);
	        var cw = dw - w - w;
	        if (cw > 0) {
	            ctx.drawImage(this.img, this.x + w, this.y, w, this.h, dx + w, dy, cw, dh);
	        }
	    };
	    ImageTile.prototype.draw9Patch = function (ctx, dx, dy, dw, dh) {
	        var w = Math.min(dw >> 1, (this.w / 3) >> 0);
	        var h = Math.min(dh >> 1, (this.h / 3) >> 0);
	        var cw = dw - w - w;
	        var ch = dh - h - h;
	        var rightSX = this.x + this.w - w;
	        var rightDX = dx + dw - w;
	        var bottomSY = this.y + this.h - h;
	        var bottomDY = dy + dh - h;
	        ctx.drawImage(this.img, this.x, this.y, w, h, dx, dy, w, h);
	        ctx.drawImage(this.img, rightSX, this.y, w, h, rightDX, dy, w, h);
	        if (cw > 0) {
	            ctx.drawImage(this.img, this.x + w, this.y, w, h, dx + w, dy, cw, h);
	        }
	        ctx.drawImage(this.img, this.x, this.y + h, w, h, dx, dy + h, w, ch);
	        ctx.drawImage(this.img, rightSX, this.y + h, w, h, rightDX, dy + h, w, ch);
	        if (cw > 0 && ch > 0) {
	            ctx.drawImage(this.img, this.x + w, this.y + h, w, h, dx + w, dy + h, cw, ch);
	        }
	        ctx.drawImage(this.img, this.x, bottomSY, w, h, dx, bottomDY, w, h);
	        ctx.drawImage(this.img, rightSX, bottomSY, w, h, rightDX, bottomDY, w, h);
	        if (cw > 0) {
	            ctx.drawImage(this.img, this.x + w, bottomSY, w, h, dx + w, bottomDY, cw, h);
	        }
	    };
	    ImageTile.prototype.draw3PatchV = function (ctx, dx, dy, dw, dh) {
	        var h = Math.min(dh >> 1, (this.h / 3) >> 0);
	        ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, dy, dw, h);
	        ctx.drawImage(this.img, this.x, this.y + this.h - h, this.w, h, dx, dy + dh - h, dw, h);
	        var ch = dh - h - h;
	        if (ch > 0) {
	            ctx.drawImage(this.img, this.x, this.y + h, this.w, h, dx, dy + h, dw, ch);
	        }
	    };
	    ImageTile.prototype.drawTileH = function (ctx, dx, dy, dw, dh) {
	        var x = dx;
	        var w = 0;
	        var remainW = dw;
	        while (remainW > 0) {
	            w = Math.min(this.w, remainW);
	            ctx.drawImage(this.img, this.x, this.y, w, this.h, x, dy, w, dh);
	            x += w;
	            remainW -= w;
	        }
	    };
	    ImageTile.prototype.drawTileV = function (ctx, dx, dy, dw, dh) {
	        var y = dy;
	        var h = 0;
	        var remainH = dh;
	        while (remainH > 0) {
	            h = Math.min(this.h, remainH);
	            ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, y, dw, h);
	            y += h;
	            remainH -= h;
	        }
	    };
	    ImageTile.prototype.drawTile = function (ctx, dx, dy, dw, dh) {
	        var x = dx;
	        var y = dy;
	        var w = 0;
	        var h = 0;
	        var remainW = dw;
	        var remainH = dh;
	        while (remainH > 0) {
	            h = Math.min(this.h, remainH);
	            while (remainW > 0) {
	                w = Math.min(this.w, remainW);
	                ctx.drawImage(this.img, this.x, this.y, w, h, x, y, w, h);
	                x += w;
	                remainW -= w;
	            }
	            x = 0;
	            remainW = dw;
	            y += h;
	            remainH -= h;
	        }
	    };
	    ImageTile.prototype.draw = function (ctx, type, dx, dy, dw, dh) {
	        if (ctx && this.complete) {
	            if (type === ImageDrawType.CENTER) {
	                this.drawCenter(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.AUTO) {
	                this.drawAuto(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.PATCH3_H) {
	                this.draw3PatchH(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.PATCH3_V) {
	                this.draw3PatchV(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.PATCH9) {
	                this.draw9Patch(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.TILE_H) {
	                this.drawTileH(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.TILE_V) {
	                this.drawTileV(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.TILE) {
	                this.drawTile(ctx, dx, dy, dw, dh);
	            }
	            else if (type === ImageDrawType.ICON) {
	                this.drawIcon(ctx, dx, dy, dw, dh);
	            }
	            else {
	                this.drawDefault(ctx, dx, dy, dw, dh);
	            }
	        }
	    };
	    ImageTile.init = function (density, scale, onImageLoaded) {
	        ImageTile.scale = scale;
	        ImageTile.density = density;
	        ImageTile.onImageLoaded = onImageLoaded;
	    };
	    ImageTile.fixURL = function (src) {
	        var ret = src.replace("@density", "x" + ImageTile.density);
	        return ret;
	    };
	    ImageTile.create = function (_src, onDone) {
	        var src = ImageTile.fixURL(_src);
	        var it = ImageTile.cache[src];
	        if (!it) {
	            it = new ImageTile(src);
	            ImageTile.cache[src] = it;
	        }
	        if (onDone) {
	            if (it.complete) {
	                setTimeout(onDone, 0);
	            }
	            else {
	                it.once(Events.LOAD, onDone);
	            }
	        }
	        return it;
	    };
	    ImageTile.scale = 1;
	    ImageTile.density = 1;
	    ImageTile.cache = {};
	    return ImageTile;
	}(emitter_1.Emitter));
	exports.ImageTile = ImageTile;
	;


/***/ },
/* 8 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/globals/node/index.d.ts"/>
	/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
	/// <reference path="../typings/globals/whatwg-fetch/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(8);
	var path = __webpack_require__(9);
	var Events = __webpack_require__(6);
	var emitter_1 = __webpack_require__(4);
	exports.AUDIO = "audio";
	exports.IMAGE = "image";
	exports.BLOB = "blob";
	exports.JSON = "json";
	exports.TEXT = "text";
	;
	var assetsCache = {};
	function load(url, type) {
	    var item = assetsCache[url];
	    if (!item) {
	        item = fetch(url).then(function ok(response) {
	            if (response.status !== 200) {
	                return Promise.reject(null);
	            }
	            if (type === exports.JSON) {
	                return response.json();
	            }
	            else if (type === exports.BLOB) {
	                return response.blob();
	            }
	            else {
	                return response.text();
	            }
	        }, function fail(err) {
	            return null;
	        });
	        assetsCache[url] = item;
	    }
	    return item;
	}
	/**
	 * Load JSON Data and Cache It.
	 * @param url URL Of JSON.
	 * @returns Promise
	 */
	function loadJSON(url) {
	    return load(url, exports.JSON);
	}
	exports.loadJSON = loadJSON;
	/**
	 * Load Text Data and Cache It.
	 * @param url URL Of Text.
	 * @returns Promise
	 */
	function loadText(url) {
	    return load(url, exports.TEXT);
	}
	exports.loadText = loadText;
	/**
	 * Load Blob Data and Cache It.
	 * @param url URL Of Blob.
	 * @returns Promise
	 */
	function loadBlob(url) {
	    return load(url, exports.BLOB);
	}
	exports.loadBlob = loadBlob;
	/**
	 * Load Image and Cache It.
	 * @param url URL Of Image.
	 * @returns Promise
	 */
	function loadImage(url) {
	    var item = assetsCache[url];
	    if (!item) {
	        item = new Promise(function (resolve, reject) {
	            var image = new Image();
	            image.onload = function () {
	                resolve(image);
	            };
	            image.onerror = function (err) {
	                reject(err);
	            };
	            image.src = url;
	        });
	    }
	    assetsCache[url] = item;
	    return item;
	}
	exports.loadImage = loadImage;
	/**
	 * Load Script
	 * @param url URL Of Script.
	 * @returns Promise
	 */
	function loadScript(url) {
	    var item = new Promise(function (resolve, reject) {
	        var node = document.head ? document.head : document.body;
	        var script = document.createElement("script");
	        script.onload = function () {
	            resolve(script);
	        };
	        script.onerror = function (err) {
	            reject(err);
	        };
	        script.src = url;
	        node.appendChild(script);
	    });
	    return item;
	}
	exports.loadScript = loadScript;
	/**
	 * Load Audio and Cache It.
	 * @param url URL Of Audio.
	 * @returns Promise
	 */
	function loadAudio(url) {
	    var item = assetsCache[url];
	    if (!item) {
	        item = new Promise(function (resolve, reject) {
	            var audio = new Audio();
	            audio.onload = function () {
	                resolve(audio);
	            };
	            audio.onerror = function (err) {
	                reject(err);
	            };
	            audio.src = url;
	        });
	    }
	    assetsCache[url] = item;
	    return item;
	}
	exports.loadAudio = loadAudio;
	/**
	 * Clear asset cache
	 * @param url URL Of asset.
	 */
	function clear(url) {
	    delete assetsCache[url];
	}
	exports.clear = clear;
	/**
	 * Present one asset.
	 */
	var Item = (function () {
	    function Item() {
	    }
	    return Item;
	}());
	exports.Item = Item;
	;
	/**
	 * Assets group to preload
	 * Example:
	 * ```
	 *  var items = [
	 *    {type:qtk.Assets.TEXT, src:"http://localhost:9876/base/www/test.txt"},
	 *    {type:qtk.Assets.JSON, src:"http://localhost:9876/base/www/test.json"},
	 *    {type:qtk.Assets.IMAGE, src:"http://localhost:9876/base/www/test.jpg"},
	 *    {type:qtk.Assets.BLOB, src:"http://localhost:9876/base/www/test.blob"}
	 * ];
	 * var assets = new qtk.Assets.Group(items);
	 * assets.onProgress(function(info) {
	 *   console.log(info.loaded + "/" + info.total);
	 * });
	 * ```
	 */
	var Group = (function (_super) {
	    __extends(Group, _super);
	    function Group(items) {
	        _super.call(this);
	        this.event = {
	            total: 0,
	            loaded: 0,
	            type: Events.PROGRESS
	        };
	        var i = 0;
	        var n = items.length;
	        this.loaded = 0;
	        this.total = items.length;
	        this.event.total = this.total;
	        items.forEach(this.loadOne.bind(this));
	    }
	    /**
	     * Register of a progress callback function
	     */
	    Group.prototype.onProgress = function (callback) {
	        this.on(Events.PROGRESS, callback);
	    };
	    Group.prototype.addLoaded = function () {
	        this.loaded++;
	        this.event.loaded = this.loaded;
	        this.dispatchEvent(this.event);
	    };
	    Group.prototype.loadOne = function (item) {
	        var src = item.src;
	        var type = item.type;
	        var addLoaded = this.addLoaded.bind(this);
	        var name = path.extname(src).toLowerCase();
	        if (type === exports.JSON || (!type && name === 'json')) {
	            loadJSON(src).then(addLoaded, addLoaded);
	        }
	        else if (type === exports.IMAGE || (!type && (name === "jpg" || name === "png" || name === "svg"))) {
	            loadImage(src).then(addLoaded, addLoaded);
	        }
	        else if (type === exports.BLOB) {
	            loadBlob(src).then(addLoaded, addLoaded);
	        }
	        else {
	            loadText(src).then(addLoaded, addLoaded);
	        }
	    };
	    return Group;
	}(emitter_1.Emitter));
	exports.Group = Group;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var point_1 = __webpack_require__(2);
	/**
	 * 2维矩阵变换
	 */
	var Matrix = (function () {
	    function Matrix() {
	        this.data = new Float32Array(6);
	        this.identity();
	    }
	    Matrix.prototype.identity = function () {
	        var data = this.data;
	        data[0] = 1;
	        data[1] = 0;
	        data[2] = 0;
	        data[3] = 1;
	        data[4] = 0;
	        data[5] = 0;
	        return this;
	    };
	    Matrix.prototype.clone = function () {
	        var other = new Matrix();
	        var data = other.data;
	        var src = this.data;
	        data[0] = src[0];
	        data[1] = src[1];
	        data[2] = src[2];
	        data[3] = src[3];
	        data[4] = src[4];
	        data[5] = src[5];
	        return other;
	    };
	    Matrix.prototype.set = function (a, b, c, d, tx, ty) {
	        var data = this.data;
	        data[0] = a;
	        data[1] = b;
	        data[2] = c;
	        data[3] = d;
	        data[4] = tx;
	        data[5] = ty;
	        return this;
	    };
	    Matrix.prototype.rotate = function (rad) {
	        var a = this.data;
	        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], s = Math.sin(rad), c = Math.cos(rad);
	        a[0] = a0 * c + a2 * s;
	        a[1] = a1 * c + a3 * s;
	        a[2] = a0 * -s + a2 * c;
	        a[3] = a1 * -s + a3 * c;
	        return this;
	    };
	    Matrix.prototype.scale = function (sx, sy) {
	        var a = this.data;
	        a[0] *= sx;
	        a[1] *= sx;
	        a[2] *= sy;
	        a[3] *= sy;
	        return this;
	    };
	    Matrix.prototype.translate = function (dx, dy) {
	        var a = this.data;
	        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	        a[4] = a0 * dx + a2 * dy + a4;
	        a[5] = a1 * dx + a3 * dy + a5;
	        return this;
	    };
	    ;
	    Matrix.prototype.transformPoint = function (x, y, out) {
	        var p = out || point_1.Point.create();
	        var a = this.data;
	        p.x = a[0] * x + a[2] * y + a[4];
	        p.y = a[1] * x + a[3] * y + a[5];
	        return p;
	    };
	    ;
	    Matrix.prototype.equal = function (other) {
	        var a = this.data;
	        var b = other.data;
	        return a[0] === b[0]
	            && a[1] === b[1]
	            && a[2] === b[2]
	            && a[3] === b[3]
	            && a[4] === b[4]
	            && a[5] === b[5];
	    };
	    Matrix.prototype.invert = function () {
	        var a = this.data;
	        var aa = a[0], ab = a[1], ac = a[2], ad = a[3], atx = a[4], aty = a[5];
	        var det = aa * ad - ab * ac;
	        if (!det) {
	            return null;
	        }
	        det = 1.0 / det;
	        var newMatrix = Matrix.create();
	        var out = newMatrix.data;
	        out[0] = ad * det;
	        out[1] = -ab * det;
	        out[2] = -ac * det;
	        out[3] = aa * det;
	        out[4] = (ac * aty - ad * atx) * det;
	        out[5] = (ab * atx - aa * aty) * det;
	        return newMatrix;
	    };
	    ;
	    Matrix.prototype.toString = function () {
	        var ret = Array.prototype.map.call(this.data, function (iter) {
	            return iter.toFixed(2);
	        });
	        return JSON.stringify(ret);
	    };
	    Matrix.prototype.dispose = function () {
	        this.identity();
	        Matrix.cache.push(this);
	    };
	    Matrix.create = function () {
	        if (Matrix.cache.length) {
	            return Matrix.cache.pop();
	        }
	        return new Matrix();
	    };
	    Matrix.cache = [];
	    return Matrix;
	}());
	exports.Matrix = Matrix;
	;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var emitter_1 = __webpack_require__(4);
	var Events = __webpack_require__(6);
	var event_detail_1 = __webpack_require__(14);
	var inputEventAdapter = __webpack_require__(15);
	/**
	 * Canvas是对HTMLCanvasElement的包装，主要解决两个问题：
	 *
	 * 1.对指针事件坐标的转换，让绝对坐标变成相对与Canvas左上角的坐标。
	 *
	 * 2.支持高清屏。为了避免在高清屏上图片模糊，让Canvas的宽高乘以devicePixelRatio, Canvas的style.width/style.height仍然用实际的宽高，getContext时预先将矩阵乘以devicePixelRatio，从而让使用者无需关心当前屏幕的类型。
	 *
	 */
	var Canvas = (function (_super) {
	    __extends(Canvas, _super);
	    function Canvas(x, y, w, h, devicePixelRatio, offline) {
	        _super.call(this);
	        this._id = "canvas";
	        this._x = x || 0;
	        this._y = y || 0;
	        this._w = w || 0;
	        this._h = h || 0;
	        this._offline = offline || false;
	        this._devicePixelRatio = devicePixelRatio || 1;
	        var me = this;
	        this.onPointerEvent = function (evt) {
	            me.transformXY(evt.detail);
	            var e = Events.PointerEvent.create(evt.type, evt.detail);
	            me.dispatchEvent(e);
	            e.dispose();
	        };
	        this.onKeyEvent = function (evt) {
	            var e = Events.KeyEvent.create(evt.type, evt.detail);
	            me.dispatchEvent(e);
	            e.dispose();
	        };
	        this.onWheelEvent = function (evt) {
	            var e = Events.WheelEvent.create(evt.detail);
	            me.dispatchEvent(e);
	            e.dispose();
	        };
	    }
	    Canvas.prototype.transformXY = function (detail) {
	        detail.x -= this.x;
	        detail.y -= this.y;
	        detail.pointerDownX -= this.x;
	        detail.pointerDownY -= this.y;
	    };
	    Object.defineProperty(Canvas.prototype, "id", {
	        get: function () {
	            return this._id;
	        },
	        set: function (value) {
	            this._id = value;
	            if (this.canvas) {
	                this.canvas.id = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "x", {
	        get: function () {
	            return this._x;
	        },
	        set: function (value) {
	            this._x = value;
	            this.moveCanvas(this.canvas);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "y", {
	        get: function () {
	            return this._y;
	        },
	        set: function (value) {
	            this._y = value;
	            this.moveCanvas(this.canvas);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "w", {
	        get: function () {
	            return this._w;
	        },
	        set: function (value) {
	            this._w = value;
	            this.resizeCanvas(this.canvas);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "h", {
	        get: function () {
	            return this._h;
	        },
	        set: function (value) {
	            this._h = value;
	            this.resizeCanvas(this.canvas);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "width", {
	        get: function () {
	            return this._w;
	        },
	        set: function (value) {
	            this.w = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "height", {
	        get: function () {
	            return this._h;
	        },
	        set: function (value) {
	            this.h = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Canvas.prototype.grabKey = function () {
	        inputEventAdapter.grabKey(this.canvas);
	    };
	    Canvas.prototype.ungrabKey = function () {
	        inputEventAdapter.ungrabKey(this.canvas);
	    };
	    Canvas.prototype.grab = function () {
	        inputEventAdapter.grab(this.canvas);
	    };
	    Canvas.prototype.ungrab = function () {
	        inputEventAdapter.ungrab(this.canvas);
	    };
	    Canvas.prototype.moveCanvas = function (canvas) {
	        if (canvas) {
	            var x = this._x;
	            var y = this._y;
	            canvas.style.position = "absolute";
	            canvas.style.left = x + "px";
	            canvas.style.top = y + "px";
	        }
	    };
	    Canvas.prototype.resizeCanvas = function (canvas) {
	        if (canvas) {
	            var w = this._w;
	            var h = this._h;
	            canvas.width = w * this._devicePixelRatio;
	            canvas.style.width = w + "px";
	            canvas.height = h * this._devicePixelRatio;
	            canvas.style.height = h + "px";
	        }
	    };
	    Object.defineProperty(Canvas.prototype, "z", {
	        set: function (value) {
	            this._z = value;
	            this.canvas.style.zIndex = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Canvas.prototype.dispose = function () {
	        var canvas = this.canvas;
	        if (!this._offline) {
	            document.body.removeChild(canvas);
	        }
	        canvas.removeEventListener(Events.POINTER_DOWN, this.onPointerEvent);
	        canvas.removeEventListener(Events.POINTER_MOVE, this.onPointerEvent);
	        canvas.removeEventListener(Events.POINTER_UP, this.onPointerEvent);
	        canvas.removeEventListener(Events.CLICK, this.onPointerEvent);
	        canvas.removeEventListener(Events.WHEEL, this.onWheelEvent);
	        canvas.removeEventListener(Events.KEYDOWN, this.onKeyEvent);
	        canvas.removeEventListener(Events.KEYUP, this.onKeyEvent);
	    };
	    Canvas.prototype.createCanvas = function () {
	        var canvas = document.createElement("canvas");
	        canvas.id = this._id;
	        this.moveCanvas(canvas);
	        this.resizeCanvas(canvas);
	        if (!this._offline) {
	            document.body.appendChild(canvas);
	        }
	        var me = this;
	        canvas.addEventListener(Events.POINTER_DOWN, this.onPointerEvent);
	        canvas.addEventListener(Events.POINTER_MOVE, this.onPointerEvent);
	        canvas.addEventListener(Events.POINTER_UP, this.onPointerEvent);
	        canvas.addEventListener(Events.CLICK, this.onPointerEvent);
	        canvas.addEventListener(Events.DBLCLICK, this.onPointerEvent);
	        canvas.addEventListener(Events.WHEEL, this.onWheelEvent);
	        canvas.addEventListener(Events.KEYDOWN, this.onKeyEvent);
	        canvas.addEventListener(Events.KEYUP, this.onKeyEvent);
	        canvas.oncontextmenu = function (evt) {
	            evt.preventDefault();
	            var detail = event_detail_1.PointerEventDetail.create(evt.which, evt.pageX, evt.pageY, evt.altKey, evt.ctrlKey, evt.shiftKey, false);
	            me.onPointerEvent({ type: Events.CONTEXT_MENU, detail: detail });
	            detail.dispose();
	        };
	        return canvas;
	    };
	    Canvas.prototype.ensureCanvas = function () {
	        if (!this.canvas) {
	            this.canvas = this.createCanvas();
	        }
	    };
	    Canvas.prototype.getContext = function (type) {
	        if (!this.canvas) {
	            this.canvas = this.createCanvas();
	        }
	        var ctx = this.canvas.getContext("2d");
	        ctx.setTransform(1, 0, 0, 1, 0, 0);
	        ctx.scale(this._devicePixelRatio, this._devicePixelRatio);
	        return ctx;
	    };
	    Canvas.create = function (x, y, w, h, devicePixelRatio, offline) {
	        return new Canvas(x, y, w, h, devicePixelRatio, offline);
	    };
	    return Canvas;
	}(emitter_1.Emitter));
	exports.Canvas = Canvas;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * 输入事件的详细信息。
	 */
	var InputEventDetail = (function () {
	    function InputEventDetail(altKey, ctrlKey, shiftKey, commandKey) {
	        this.altKey = altKey;
	        this.ctrlKey = ctrlKey;
	        this.shiftKey = shiftKey;
	        this.commandKey = commandKey;
	    }
	    return InputEventDetail;
	}());
	exports.InputEventDetail = InputEventDetail;
	;
	/**
	 * 指针事件的详细信息。
	 */
	var PointerEventDetail = (function (_super) {
	    __extends(PointerEventDetail, _super);
	    function PointerEventDetail(id, x, y, altKey, ctrlKey, shiftKey, commandKey) {
	        _super.call(this, altKey, ctrlKey, shiftKey, commandKey);
	        this.id = id;
	        this.x = x;
	        this.y = y;
	        this.pointerDown = false;
	        this.pointerDownX = 0;
	        this.pointerDownY = 0;
	        this.pointerDownTime = 0;
	    }
	    /**
	     * 设置指针按下的状态。
	     */
	    PointerEventDetail.prototype.setPointerDown = function (pointerDown, x, y, t) {
	        this.pointerDownX = x;
	        this.pointerDownY = y;
	        this.pointerDownTime = t;
	        this.pointerDown = pointerDown;
	    };
	    PointerEventDetail.prototype.dispose = function () {
	    };
	    PointerEventDetail.create = function (id, x, y, altKey, ctrlKey, shiftKey, commandKey) {
	        var detail = new PointerEventDetail(id, x, y, altKey, ctrlKey, shiftKey, commandKey);
	        return detail;
	    };
	    return PointerEventDetail;
	}(InputEventDetail));
	exports.PointerEventDetail = PointerEventDetail;
	;
	/**
	 * 按键事件的详细信息。
	 */
	var KeyEventDetail = (function (_super) {
	    __extends(KeyEventDetail, _super);
	    function KeyEventDetail(keyCode, altKey, ctrlKey, shiftKey, commandKey) {
	        _super.call(this, altKey, ctrlKey, shiftKey, commandKey);
	        this.keyCode = keyCode;
	    }
	    KeyEventDetail.prototype.dispose = function () {
	    };
	    KeyEventDetail.create = function (keyCode, altKey, ctrlKey, shiftKey, commandKey) {
	        var detail = new KeyEventDetail(keyCode, altKey, ctrlKey, shiftKey, commandKey);
	        return detail;
	    };
	    return KeyEventDetail;
	}(InputEventDetail));
	exports.KeyEventDetail = KeyEventDetail;
	;
	/**
	 * 滚轮事件的详细信息。
	 */
	var WheelEventDetail = (function (_super) {
	    __extends(WheelEventDetail, _super);
	    function WheelEventDetail(delta, altKey, ctrlKey, shiftKey, commandKey) {
	        _super.call(this, altKey, ctrlKey, shiftKey, commandKey);
	        this.delta = delta;
	    }
	    WheelEventDetail.prototype.dispose = function () {
	    };
	    WheelEventDetail.create = function (delta, altKey, ctrlKey, shiftKey, commandKey) {
	        var detail = new WheelEventDetail(delta, altKey, ctrlKey, shiftKey, commandKey);
	        return detail;
	    };
	    return WheelEventDetail;
	}(InputEventDetail));
	exports.WheelEventDetail = WheelEventDetail;
	;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Events = __webpack_require__(6);
	var key_event_1 = __webpack_require__(16);
	var emitter_1 = __webpack_require__(4);
	var event_detail_1 = __webpack_require__(14);
	var grabs = [];
	var keyGrabs = [];
	var lastDetail;
	var ctrlKey = false;
	var altKey = false;
	var shiftKey = false;
	var commandKey = false;
	var pointerDeviceType;
	var pointerDown = false;
	var pointerDownX = 0;
	var pointerDownY = 0;
	var pointerDownTime = 0;
	var globalInputEmitter = new emitter_1.Emitter();
	function dispatchEvent(target, type, detail) {
	    var realTarget = target;
	    if (grabs.length) {
	        realTarget = grabs[grabs.length - 1];
	    }
	    else if (keyGrabs.length) {
	        if ((type === Events.KEYDOWN || type === Events.KEYUP) && target.tagName === "BODY") {
	            realTarget = keyGrabs[keyGrabs.length - 1];
	        }
	    }
	    var event = new CustomEvent(type, { detail: detail });
	    globalInputEmitter.dispatchEvent(event);
	    realTarget.dispatchEvent(event);
	}
	function getPointerDetail(e) {
	    if (e) {
	        var id = e.identifier || 0;
	        var x = Math.max(e.pageX || 0, e.x || e.clientX);
	        var y = Math.max(e.pageY || 0, e.y || e.clientY);
	        lastDetail = event_detail_1.PointerEventDetail.create(id, x, y, altKey, ctrlKey, shiftKey, commandKey);
	        lastDetail.timeStamp = e.timeStamp;
	    }
	    return lastDetail;
	}
	function dispatchPointerEvent(type, target, detail) {
	    if (type === Events.POINTER_DOWN) {
	        pointerDown = true;
	        pointerDownX = detail.x;
	        pointerDownY = detail.y;
	        pointerDownTime = Date.now();
	    }
	    else if (type === Events.POINTER_UP) {
	        detail.setPointerDown(pointerDown, pointerDownX, pointerDownY, pointerDownTime);
	        var dx = Math.abs(detail.x - pointerDownX);
	        var dy = Math.abs(detail.y - pointerDownY);
	        var isClick = dx < 5 && dy < 5;
	        pointerDown = false;
	        if (isClick) {
	            dispatchEvent(target, Events.CLICK, detail);
	        }
	    }
	    else {
	        detail.setPointerDown(pointerDown, pointerDownX, pointerDownY, pointerDownTime);
	    }
	    dispatchEvent(target, type, detail);
	    detail.dispose();
	}
	function onMouseDown(evt) {
	    dispatchPointerEvent(Events.POINTER_DOWN, evt.target, getPointerDetail(evt));
	}
	function onMouseMove(evt) {
	    dispatchPointerEvent(Events.POINTER_MOVE, evt.target, getPointerDetail(evt));
	}
	function onMouseUp(evt) {
	    dispatchPointerEvent(Events.POINTER_UP, evt.target, getPointerDetail(evt));
	}
	function onDblClick(evt) {
	    dispatchPointerEvent(Events.DBLCLICK, evt.target, getPointerDetail(evt));
	}
	function onMouseOut(evt) {
	    dispatchPointerEvent(Events.POINTER_OUT, evt.target, getPointerDetail(evt));
	}
	function onMouseOver(evt) {
	    dispatchPointerEvent(Events.POINTER_OVER, evt.target, getPointerDetail(evt));
	}
	function getTouchPoints(evt) {
	    var touches = evt.touches || evt.changedTouches || evt.touchList;
	    var ret = touches.map(function (touch) {
	        return getPointerDetail(touch);
	    });
	    if (ret.length < 1) {
	        ret.push(getPointerDetail(null));
	    }
	    return ret;
	}
	function onTouchStart(evt) {
	    var detail = getPointerDetail(getTouchPoints(evt)[0]);
	    dispatchPointerEvent(Events.POINTER_DOWN, evt.target, detail);
	}
	function onTouchMove(evt) {
	    var detail = getPointerDetail(getTouchPoints(evt)[0]);
	    dispatchPointerEvent(Events.POINTER_MOVE, evt.target, detail);
	}
	function onTouchEnd(evt) {
	    var detail = getPointerDetail(getTouchPoints(evt)[0]);
	    dispatchPointerEvent(Events.POINTER_UP, evt.target, detail);
	}
	function onPointerDown(evt) {
	    dispatchPointerEvent(Events.POINTER_DOWN, evt.target, getPointerDetail(evt));
	}
	function onPointerMove(evt) {
	    dispatchPointerEvent(Events.POINTER_MOVE, evt.target, getPointerDetail(evt));
	}
	function onPointerUp(evt) {
	    dispatchPointerEvent(Events.POINTER_UP, evt.target, getPointerDetail(evt));
	}
	function onWheel(evt) {
	    var delta = evt.wheelDelta || evt.detail * -8;
	    var detail = event_detail_1.WheelEventDetail.create(delta, altKey, ctrlKey, shiftKey, commandKey);
	    detail.timeStamp = evt.timeStamp;
	    dispatchEvent(evt.target, Events.WHEEL, detail);
	    detail.dispose();
	}
	function updateKeysStatus(keyCode, value) {
	    switch (keyCode) {
	        case key_event_1.KeyEvent.VK_CONTROL: {
	            ctrlKey = value;
	            break;
	        }
	        case key_event_1.KeyEvent.VK_ALT: {
	            altKey = value;
	            break;
	        }
	        case key_event_1.KeyEvent.VK_SHIFT: {
	            shiftKey = value;
	            break;
	        }
	        case key_event_1.KeyEvent.VK_META: {
	            commandKey = value;
	            break;
	        }
	    }
	}
	function onKeyDown(evt) {
	    updateKeysStatus(evt.keyCode, true);
	    var detail = event_detail_1.KeyEventDetail.create(evt.keyCode, altKey, ctrlKey, shiftKey, commandKey);
	    detail.timeStamp = evt.timeStamp;
	    dispatchEvent(evt.target, Events.KEYDOWN, detail);
	    detail.dispose();
	}
	function onKeyUp(evt) {
	    updateKeysStatus(evt.keyCode, false);
	    var detail = event_detail_1.KeyEventDetail.create(evt.keyCode, altKey, ctrlKey, shiftKey, commandKey);
	    detail.timeStamp = evt.timeStamp;
	    dispatchEvent(evt.target, Events.KEYUP, detail);
	    detail.dispose();
	}
	function dispatchKeyEvent(target, keyCode) {
	    var detail = event_detail_1.KeyEventDetail.create(keyCode, altKey, ctrlKey, shiftKey, commandKey);
	    dispatchEvent(target, Events.KEYDOWN, detail);
	    dispatchEvent(target, Events.KEYUP, detail);
	    detail.dispose();
	}
	/**
	 * 初始化。
	 *
	 * InputEventAdapter如其名所示，是对输入事件的适配，为上层提供统一的接口。主要功能有：
	 *
	 * 1.把鼠标事件、触屏事件和指针事件统一成qtk-pointer事件。
	 *
	 * 2.把DOMMouseScroll和mousewheel事件统一成qtk-wheel事件。
	 *
	 * 3.把keydown/keyup事件转换成qtk-keydown/qtk-keyup事件。
	 *
	 * 4.把tizen和phonegap的按键事件转换成标准的key事件。
	 *
	 * 5.实现grab/ungrab功能。事件优先发给最后grab的target。
	 *
	 * @param doc document对象。
	 * @param win window对象。
	 * @param pointerSupported 当前系统是否支持pointer事件。
	 * @param msPointerSupported 当前系统是否支持ms pointer事件。
	 * @param touchSupported 当前系统是否支持触屏事件。
	 *
	 */
	function init(doc, win, pointerSupported, msPointerSupported, touchSupported) {
	    doc.addEventListener('tizenhwkey', function (evt) {
	        dispatchKeyEvent(evt.target, key_event_1.KeyEvent.VK_TIZEN_HW);
	    });
	    doc.addEventListener("backbutton", function (evt) {
	        dispatchKeyEvent(evt.target, key_event_1.KeyEvent.VK_BACK);
	    });
	    doc.addEventListener("menubutton", function (evt) {
	        dispatchKeyEvent(evt.target, key_event_1.KeyEvent.VK_MENU);
	    });
	    doc.addEventListener("searchbutton", function (evt) {
	        dispatchKeyEvent(evt.target, key_event_1.KeyEvent.VK_SEARCH);
	    });
	    if (pointerSupported) {
	        pointerDeviceType = "pointer";
	        doc.addEventListener('pointerdown', onPointerDown);
	        doc.addEventListener('pointermove', onPointerMove);
	        doc.addEventListener('pointerup', onPointerUp);
	        doc.addEventListener('mousewheel', onWheel);
	    }
	    else if (msPointerSupported) {
	        pointerDeviceType = "pointer";
	        doc.addEventListener('MSPointerDown', onPointerDown);
	        doc.addEventListener('MSPointerMove', onPointerMove);
	        doc.addEventListener('MSPointerUp', onPointerUp);
	        doc.addEventListener('mousewheel', onWheel);
	    }
	    else if (touchSupported) {
	        pointerDeviceType = "touch";
	        doc.addEventListener('touchstart', onTouchStart);
	        doc.addEventListener('touchmove', onTouchMove);
	        doc.addEventListener('touchend', onTouchEnd);
	    }
	    else {
	        pointerDeviceType = "mouse";
	        doc.addEventListener('mousedown', onMouseDown);
	        doc.addEventListener('mousemove', onMouseMove);
	        doc.addEventListener('mouseup', onMouseUp);
	        doc.addEventListener('mouseout', onMouseOut);
	        doc.addEventListener('mouseover', onMouseOver);
	        doc.addEventListener('dblclick', onDblClick);
	    }
	    doc.addEventListener('mousewheel', onWheel);
	    doc.addEventListener('DOMMouseScroll', onWheel);
	    doc.addEventListener('keyup', onKeyUp);
	    doc.addEventListener('keydown', onKeyDown);
	}
	exports.init = init;
	/**
	 * grab输入事件。输入事件后发送给最后grab的target。
	 */
	function grab(target) {
	    grabs.push(target);
	}
	exports.grab = grab;
	/**
	 * ungrab移出最后grab的target。
	 */
	function ungrab(target) {
	    return grabs.pop();
	}
	exports.ungrab = ungrab;
	/**
	 * grab输入事件。输入事件后发送给最后grab的target。
	 */
	function grabKey(target) {
	    keyGrabs.push(target);
	}
	exports.grabKey = grabKey;
	/**
	 * ungrab移出最后grab的target。
	 */
	function ungrabKey(target) {
	    return keyGrabs.pop();
	}
	exports.ungrabKey = ungrabKey;
	/**
	 * 注册全局的Input事件。
	 */
	function on(type, callback) {
	    globalInputEmitter.on(type, callback);
	}
	exports.on = on;
	/**
	 * 注销全局的Input事件。
	 */
	function off(type, callback) {
	    globalInputEmitter.off(type, callback);
	}
	exports.off = off;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.KeyEvent = {
	    VK_CANCEL: 3,
	    VK_HELP: 6,
	    VK_BACK_SPACE: 8,
	    VK_TAB: 9,
	    VK_CLEAR: 12,
	    VK_RETURN: 13,
	    VK_ENTER: 14,
	    VK_SHIFT: 16,
	    VK_CONTROL: 17,
	    VK_ALT: 18,
	    VK_PAUSE: 19,
	    VK_CAPS_LOCK: 20,
	    VK_ESCAPE: 27,
	    VK_SPACE: 32,
	    VK_PAGE_UP: 33,
	    VK_PAGE_DOWN: 34,
	    VK_END: 35,
	    VK_HOME: 36,
	    VK_LEFT: 37,
	    VK_UP: 38,
	    VK_RIGHT: 39,
	    VK_DOWN: 40,
	    VK_PRINTSCREEN: 44,
	    VK_INSERT: 45,
	    VK_DELETE: 46,
	    VK_0: 48,
	    VK_1: 49,
	    VK_2: 50,
	    VK_3: 51,
	    VK_4: 52,
	    VK_5: 53,
	    VK_6: 54,
	    VK_7: 55,
	    VK_8: 56,
	    VK_9: 57,
	    VK_SEMICOLON: 59,
	    VK_EQUALS: 61,
	    VK_A: 65,
	    VK_B: 66,
	    VK_C: 67,
	    VK_D: 68,
	    VK_E: 69,
	    VK_F: 70,
	    VK_G: 71,
	    VK_H: 72,
	    VK_I: 73,
	    VK_J: 74,
	    VK_K: 75,
	    VK_L: 76,
	    VK_M: 77,
	    VK_N: 78,
	    VK_O: 79,
	    VK_P: 80,
	    VK_Q: 81,
	    VK_R: 82,
	    VK_S: 83,
	    VK_T: 84,
	    VK_U: 85,
	    VK_V: 86,
	    VK_W: 87,
	    VK_X: 88,
	    VK_Y: 89,
	    VK_Z: 90,
	    VK_CONTEXT_MENU: 93,
	    VK_NUMPAD0: 96,
	    VK_NUMPAD1: 97,
	    VK_NUMPAD2: 98,
	    VK_NUMPAD3: 99,
	    VK_NUMPAD4: 100,
	    VK_NUMPAD5: 101,
	    VK_NUMPAD6: 102,
	    VK_NUMPAD7: 103,
	    VK_NUMPAD8: 104,
	    VK_NUMPAD9: 105,
	    VK_MULTIPLY: 106,
	    VK_ADD: 107,
	    VK_SEPARATOR: 108,
	    VK_SUBTRACT: 109,
	    VK_DECIMAL: 110,
	    VK_DIVIDE: 111,
	    VK_F1: 112,
	    VK_F2: 113,
	    VK_F3: 114,
	    VK_F4: 115,
	    VK_F5: 116,
	    VK_F6: 117,
	    VK_F7: 118,
	    VK_F8: 119,
	    VK_F9: 120,
	    VK_F10: 121,
	    VK_F11: 122,
	    VK_F12: 123,
	    VK_F13: 124,
	    VK_F14: 125,
	    VK_F15: 126,
	    VK_F16: 127,
	    VK_F17: 128,
	    VK_F18: 129,
	    VK_F19: 130,
	    VK_F20: 131,
	    VK_F21: 132,
	    VK_F22: 133,
	    VK_F23: 134,
	    VK_F24: 135,
	    VK_BACK: 136,
	    VK_MENU: 137,
	    VK_SEARCH: 138,
	    VK_TIZEN_HW: 139,
	    VK_NUM_LOCK: 144,
	    VK_SCROLL_LOCK: 145,
	    VK_COMMA: 188,
	    VK_PERIOD: 190,
	    VK_SLASH: 191,
	    VK_BACK_QUOTE: 192,
	    VK_OPEN_BRACKET: 219,
	    VK_BACK_SLASH: 220,
	    VK_CLOSE_BRACKET: 221,
	    VK_QUOTE: 222,
	    VK_META: 224
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var label_1 = __webpack_require__(18);
	var Events = __webpack_require__(6);
	var html_edit_1 = __webpack_require__(83);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var graphics_1 = __webpack_require__(25);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 编辑器。multiLineMode决定是多行编辑器还是单行编辑器。
	 */
	var Edit = (function (_super) {
	    __extends(Edit, _super);
	    function Edit() {
	        _super.call(this, Edit.TYPE);
	        this.drawInvalidInputTips = function (evt) {
	            var win = this.win;
	            var tm = this._themeManager;
	            var text = this._validationTips;
	            var style = tm.get("edit.invalid.tips", this.stateToString(widget_1.WidgetState.NORMAL));
	            if (!this._isEditing || !text || !style) {
	                return;
	            }
	            var maxH = win.h;
	            var maxW = win.w;
	            var ctx = evt.ctx;
	            var p = this.toGlobalPoint(point_1.Point.point.init(0, 0));
	            var width = graphics_1.Graphics.measureText(text, style.font) + 20;
	            var x = p.x - win.x;
	            var y = p.y - win.y + 5;
	            if ((x + width) >= maxW) {
	                x = maxW - width;
	            }
	            var r = null;
	            if ((y + this.h) < maxH) {
	                r = rect_1.Rect.rect.init(x, y + this.h, width, 30);
	            }
	            else {
	                r = rect_1.Rect.rect.init(x, y, width, 30);
	            }
	            graphics_1.Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth, r.x, r.y, r.w, r.h, style.roundRadius);
	            graphics_1.Graphics.drawTextSL(ctx, text, style, r);
	        }.bind(this);
	    }
	    Object.defineProperty(Edit.prototype, "inputable", {
	        get: function () {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Edit.prototype, "inputFilter", {
	        /**
	         * 输入过滤器，对输入的文本进行转换。
	         */
	        set: function (value) {
	            this._inputFilter = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Edit.prototype, "inputTips", {
	        get: function () {
	            return this._it;
	        },
	        /**
	         * 输入提示。
	         */
	        set: function (value) {
	            this._it = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Edit.prototype, "inputType", {
	        get: function () {
	            return this._itp;
	        },
	        /**
	         * 输入类型。
	         */
	        set: function (value) {
	            this._itp = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Edit.prototype.draw = function (ctx) {
	        if (!this._isEditing) {
	            _super.prototype.draw.call(this, ctx);
	        }
	    };
	    Edit.prototype.relayoutText = function () {
	        if (!this._isEditing) {
	            _super.prototype.relayoutText.call(this);
	        }
	        return this;
	    };
	    Edit.prototype.drawText = function (ctx, style) {
	        if (this._textLines && this._textLines.length) {
	            _super.prototype.drawText.call(this, ctx, style);
	        }
	        else if (this._it) {
	            this.drawTextSL(ctx, this._it, style);
	        }
	        return this;
	    };
	    Edit.prototype.getStyleType = function () {
	        if (this._styleType) {
	            return this._styleType;
	        }
	        else {
	            if (this._text || this._isEditing) {
	                return this.multiLineMode ? "edit.ml" : "edit.sl";
	            }
	            else {
	                return this.multiLineMode ? "edit.ml.tips" : "edit.sl.tips";
	            }
	        }
	    };
	    Edit.prototype.filterText = function (value) {
	        return this._inputFilter ? this._inputFilter(value) : value;
	    };
	    Edit.prototype.showEditor = function () {
	        var _this = this;
	        var style = this.getStyle();
	        this._input = this.multiLineMode ? html_edit_1.HtmlEdit.textArea : html_edit_1.HtmlEdit.input;
	        var input = this._input;
	        var p = this.toViewPoint(point_1.Point.point.init(0, 0));
	        input.move(p.x, p.y);
	        input.text = this.text || "";
	        input.resize(this.w, this.h);
	        input.fontSize = style.fontSize;
	        input.inputType = this.inputType;
	        input.textColor = style.textColor;
	        input.fontFamily = style.fontFamily;
	        input.show();
	        input.z = this.win.z + 1;
	        this.dispatchEvent({ type: Events.FOCUS });
	        input.on(Events.HIDE, function (evt) {
	            _this._isEditing = false;
	            _this.relayoutText();
	            _this._input = null;
	            _this.dispatchEvent({ type: Events.BLUR });
	        });
	        input.on(Events.CHANGING, function (evt) {
	            var e = _this.eChangeEvent;
	            _this.text = _this.filterText(evt.value);
	            e.init(Events.CHANGING, { value: _this.text });
	            ;
	            _this.dispatchEvent(e);
	        });
	        input.on(Events.CHANGE, function (evt) {
	            var e = _this.eChangeEvent;
	            _this.text = _this.filterText(evt.value);
	            e.init(Events.CHANGE, { value: _this.text });
	            ;
	            _this.dispatchEvent(e);
	        });
	    };
	    Object.defineProperty(Edit.prototype, "validationTips", {
	        set: function (value) {
	            this._validationTips = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Edit.prototype.onInvalidInput = function (message) {
	        var win = this.win;
	        if (this._validationTips === message) {
	            return;
	        }
	        this._validationTips = message;
	        win.off(Events.AFTER_DRAW, this.drawInvalidInputTips);
	        if (message) {
	            win.on(Events.AFTER_DRAW, this.drawInvalidInputTips);
	        }
	        win.requestRedraw();
	    };
	    Edit.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._input = null;
	        this._inputFilter = null;
	    };
	    Edit.prototype.dispatchClick = function (evt) {
	        _super.prototype.dispatchClick.call(this, evt);
	        if (!this._isEditing) {
	            this._isEditing = true;
	            this.showEditor();
	        }
	    };
	    Edit.prototype.getDefProps = function () {
	        return Edit.defProps;
	    };
	    Edit.create = function (options) {
	        return Edit.r.create().reset(Edit.TYPE, options);
	    };
	    Edit.defProps = Object.assign({}, label_1.Label.defProps, { _mlm: false, _it: null, _itp: null });
	    Edit.TYPE = "edit";
	    Edit.r = new recyclable_creator_1.RecyclableCreator(function () { return new Edit(); });
	    return Edit;
	}(label_1.Label));
	exports.Edit = Edit;
	;
	widget_factory_1.WidgetFactory.register(Edit.TYPE, Edit.create);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var graphics_1 = __webpack_require__(25);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 文本控件。
	 */
	var Label = (function (_super) {
	    __extends(Label, _super);
	    function Label(type) {
	        _super.call(this, type || Label.TYPE);
	    }
	    /**
	     * 对文本进行重新排版。
	     */
	    Label.prototype.relayoutText = function () {
	        if (this._inited) {
	            var style = this.getStyle();
	            var text = this.getLocaleText();
	            this._textLines = graphics_1.Graphics.layoutText(text, this.w, style.font);
	        }
	        return this;
	    };
	    ;
	    Object.defineProperty(Label.prototype, "multiLineMode", {
	        /**
	         * 是否启用多行模式。
	         */
	        get: function () {
	            return this._mlm;
	        },
	        set: function (value) {
	            this.setProp("mlm", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Label.prototype, "value", {
	        /**
	         * Label的值即它的文本。
	         */
	        get: function () {
	            return this.text;
	        },
	        set: function (value) {
	            this.text = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Label.prototype.setStyle = function (state, style) {
	        _super.prototype.setStyle.call(this, state, style);
	        this.relayoutText();
	        return this;
	    };
	    Label.prototype.drawTextSL = function (ctx, text, style) {
	        if (text && style.textColor) {
	            graphics_1.Graphics.drawTextSL(ctx, text, style, this.getTextRect(style));
	        }
	        return this;
	    };
	    Label.prototype.drawTextML = function (ctx, style) {
	        if (style.textColor) {
	            graphics_1.Graphics.drawTextML(ctx, this._textLines, style, this.getTextRect(style));
	        }
	        return this;
	    };
	    Label.prototype.drawText = function (ctx, style) {
	        if (this._textLines && this._textLines.length) {
	            if (this._mlm) {
	                this.drawTextML(ctx, style);
	            }
	            else {
	                var text = this._textLines[0].text;
	                this.drawTextSL(ctx, text, style);
	            }
	        }
	        return this;
	    };
	    Label.prototype.setProp = function (prop, newValue, notify) {
	        _super.prototype.setProp.call(this, prop, newValue, notify);
	        if (prop === "w" || prop === "h" || prop === "value" || prop === "text") {
	            this.relayoutText();
	        }
	        return this;
	    };
	    Label.prototype.onInit = function () {
	        _super.prototype.onInit.call(this);
	        this.relayoutText();
	    };
	    Label.prototype.getDefProps = function () {
	        return Label.defProps;
	    };
	    Label.create = function (options) {
	        return Label.recycleBin.create().reset(Label.TYPE, options);
	    };
	    Label.defProps = Object.assign({}, widget_1.Widget.defProps, { _mlm: true, _lp: 5, _tp: 5, _rp: 5, _bp: 5 });
	    Label.TYPE = "label";
	    Label.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Label(); });
	    return Label;
	}(widget_1.Widget));
	exports.Label = Label;
	;
	widget_factory_1.WidgetFactory.register(Label.TYPE, Label.create);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
	/// <reference path="../../typings/globals/eventemitter3/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var style_1 = __webpack_require__(3);
	var canvas_1 = __webpack_require__(13);
	var TWEEN = __webpack_require__(20);
	var emitter_1 = __webpack_require__(4);
	var utils_1 = __webpack_require__(21);
	var Events = __webpack_require__(6);
	var matrix_stack_1 = __webpack_require__(22);
	var widget_factory_1 = __webpack_require__(23);
	var graphics_1 = __webpack_require__(25);
	var dirty_rect_context_1 = __webpack_require__(76);
	var image_tile_1 = __webpack_require__(7);
	var behavior_1 = __webpack_require__(77);
	var layouter_1 = __webpack_require__(78);
	var binding_rule_1 = __webpack_require__(79);
	var iview_modal_1 = __webpack_require__(81);
	(function (WidgetMode) {
	    WidgetMode[WidgetMode["RUNTIME"] = 0] = "RUNTIME";
	    WidgetMode[WidgetMode["DESIGN"] = 1] = "DESIGN";
	})(exports.WidgetMode || (exports.WidgetMode = {}));
	var WidgetMode = exports.WidgetMode;
	;
	(function (WidgetState) {
	    WidgetState[WidgetState["NORMAL"] = 0] = "NORMAL";
	    WidgetState[WidgetState["OVER"] = 1] = "OVER";
	    WidgetState[WidgetState["ACTIVE"] = 2] = "ACTIVE";
	    WidgetState[WidgetState["DISABLE"] = 3] = "DISABLE";
	    WidgetState[WidgetState["SELECTED"] = 4] = "SELECTED";
	})(exports.WidgetState || (exports.WidgetState = {}));
	var WidgetState = exports.WidgetState;
	;
	(function (HitTestResult) {
	    HitTestResult[HitTestResult["NONE"] = 0] = "NONE";
	    HitTestResult[HitTestResult["TL"] = 1] = "TL";
	    HitTestResult[HitTestResult["TM"] = 2] = "TM";
	    HitTestResult[HitTestResult["TR"] = 3] = "TR";
	    HitTestResult[HitTestResult["ML"] = 4] = "ML";
	    HitTestResult[HitTestResult["MM"] = 5] = "MM";
	    HitTestResult[HitTestResult["MR"] = 6] = "MR";
	    HitTestResult[HitTestResult["RL"] = 7] = "RL";
	    HitTestResult[HitTestResult["RM"] = 8] = "RM";
	    HitTestResult[HitTestResult["RR"] = 9] = "RR";
	})(exports.HitTestResult || (exports.HitTestResult = {}));
	var HitTestResult = exports.HitTestResult;
	;
	var states = ["normal", "over", "active", "disable", "selected"];
	/**
	 * Widget是所有控件的基类。
	 */
	var Widget = (function (_super) {
	    __extends(Widget, _super);
	    function Widget(type) {
	        _super.call(this);
	        ///////////////////////////////////////////
	        this.layoutRect = rect_1.Rect.create(0, 0, 0, 0);
	        this.eChangeEvent = Events.ChangeEvent.create();
	        this.ePropChangeEvent = Events.PropChangeEvent.create();
	        this.type = type;
	    }
	    /**
	     * 同时设置多个属性。
	     */
	    Widget.prototype.set = function (props) {
	        if (props) {
	            for (var key in props) {
	                this[key] = props[key];
	            }
	        }
	        return this;
	    };
	    /**
	     * 同时获取多个属性。
	     */
	    Widget.prototype.get = function (props) {
	        if (props) {
	            for (var key in props) {
	                props[key] = this[key];
	            }
	        }
	        return props;
	    };
	    /**
	     * 把全局的坐标转换成相对于当前控件左上角的坐标。
	     * @param p 全局坐标。
	     * @returns 相对于当前控件左上角的坐标。
	     */
	    Widget.prototype.toLocalPoint = function (p) {
	        p.x -= this.x;
	        p.y -= this.y;
	        var iter = this.parent;
	        while (iter) {
	            p.x -= iter.x;
	            p.y -= iter.y;
	            iter = iter.parent;
	        }
	        return p;
	    };
	    /**
	     * 把Pointer事件的坐标转换成相对于当前控件左上角的坐标。
	     * @param p Pointer事件的坐标。
	     * @returns 相对于当前控件左上角的坐标。
	     */
	    Widget.prototype.eventPointToLocal = function (p) {
	        if (this._canvas) {
	            return p;
	        }
	        p.x -= this.x;
	        p.y -= this.y;
	        var iter = this.parent;
	        while (iter) {
	            if (iter._canvas) {
	                break;
	            }
	            p.x -= iter.x;
	            p.y -= iter.y;
	            iter = iter.parent;
	        }
	        return p;
	    };
	    /**
	     * 把相对于当前控件左上角的坐标转换成全局坐标。
	     * @param p 相对于当前控件左上角的坐标。
	     * @returns 全局坐标。
	     */
	    Widget.prototype.toGlobalPoint = function (p) {
	        p.x += this.x;
	        p.y += this.y;
	        var iter = this.parent;
	        while (iter) {
	            p.x += iter.x;
	            p.y += iter.y;
	            iter = iter.parent;
	        }
	        return p;
	    };
	    /**
	     * 把相对于当前控件左上角的坐标转换成屏幕上的坐标。
	     * @param p 相对于当前控件左上角的坐标。
	     * @returns 屏幕上的坐标。
	     */
	    Widget.prototype.toViewPoint = function (p) {
	        p.x += this.x;
	        p.y += this.y;
	        var iter = this.parent;
	        while (iter) {
	            p.x += iter.x;
	            p.y += iter.y;
	            if (iter.offsetX) {
	                p.x -= iter.offsetX;
	            }
	            if (iter.offsetY) {
	                p.y -= iter.offsetY;
	            }
	            iter = iter.parent;
	        }
	        return p;
	    };
	    Widget.prototype.onInit = function () {
	        this._inited = true;
	        if (!this.app && this.parent) {
	            this.app = this.parent.app;
	        }
	    };
	    /**
	     * 初始化。在窗口打开后，对窗口上所有控件调用，或者在窗口打开后，对新创建的控件调用。
	     */
	    Widget.prototype.init = function () {
	        this.onInit();
	        this.children.forEach(function (child) {
	            child.init();
	        });
	        return this;
	    };
	    Widget.prototype.onDeinit = function () {
	        this._inited = false;
	    };
	    /**
	     * ~初始化。在窗口关闭后，对窗口上所有控件调用，或者对被移出的控件调用。
	     */
	    Widget.prototype.deinit = function () {
	        this.children.forEach(function (child) {
	            child.deinit();
	        });
	        this.onDeinit();
	    };
	    /**
	     * 分发一个事件到当前控件及其子控件。
	     */
	    Widget.prototype.dispatchEventToAll = function (evt) {
	        this.dispatchEvent(evt);
	        this.children.forEach(function (child) {
	            child.dispatchEvent(evt);
	        });
	    };
	    /**
	     * 测试点是否落在当前控件中。
	     * @param x X坐标，相对于全局原点的坐标。
	     * @param y Y坐标，相对于全局原点的坐标。
	     * @param ctx 矩阵变换上下文。ctx包含了从顶级父控件到当前控件的变化。
	     * @returns 测试结果HitTestResult。
	     */
	    Widget.prototype.hitTest = function (x, y, ctx) {
	        return this.doHitTest(x, y, rect_1.Rect.rect.init(0, 0, this.w, this.h), ctx);
	    };
	    Widget.prototype.doHitTest = function (x, y, r, ctx) {
	        var m = ctx.invert();
	        if (m) {
	            var p = m.transformPoint(x, y);
	            if (p.x >= r.x && p.x <= (r.x + r.w) && p.y >= r.y && p.y <= (r.y + r.h)) {
	                return HitTestResult.MM;
	            }
	        }
	        return HitTestResult.NONE;
	    };
	    Widget.prototype.selfHitTest = function (x, y, ctx) {
	        return this.hitTest(x, y, ctx);
	    };
	    Widget.prototype.dispatchPointerDown = function (evt, ctx) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        ctx.save();
	        this.applyTransform(ctx);
	        var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
	        if (hitTestResult) {
	            this.dispatchEvent(evt, true);
	            this.target = this.findEventTargetChild(evt.x, evt.y, ctx);
	            if (this.target) {
	                this.target.dispatchPointerDown(evt, ctx);
	            }
	            if (this.onpointerdown) {
	                this.onpointerdown(evt);
	            }
	            this.dispatchEvent(evt, false);
	            this.state = WidgetState.ACTIVE;
	        }
	        else {
	            if (this.onpointerdown) {
	                this.onpointerdown(evt);
	            }
	            this.state = WidgetState.NORMAL;
	        }
	        ctx.restore();
	        this.hitTestResult = hitTestResult;
	    };
	    Widget.prototype.dispatchPointerMoveToTarget = function (evt, ctx) {
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchPointerMove(evt, ctx);
	        }
	        if (this.onpointermove) {
	            this.onpointermove(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchPointerMoveToUnder = function (evt, ctx) {
	        ctx.save();
	        this.applyTransform(ctx);
	        var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
	        if (hitTestResult) {
	            this.dispatchEvent(evt, true);
	            var _lastOverWidget = this._lastOverWidget;
	            var overWidget = this.findEventTargetChild(evt.x, evt.y, ctx);
	            if (_lastOverWidget !== overWidget) {
	                var e = null;
	                if (_lastOverWidget) {
	                    _lastOverWidget.dispatchPointerMove(evt, ctx);
	                    e = Events.PointerEvent.create(Events.POINTER_LEAVE, evt);
	                    _lastOverWidget.dispatchEvent(e, false);
	                    e.dispose();
	                    _lastOverWidget.state = WidgetState.NORMAL;
	                }
	                if (overWidget) {
	                    e = Events.PointerEvent.create(Events.POINTER_ENTER, evt);
	                    overWidget.dispatchEvent(e, false);
	                    e.dispose();
	                }
	                this._lastOverWidget = overWidget;
	            }
	            if (overWidget) {
	                overWidget.dispatchPointerMove(evt, ctx);
	            }
	            if (this.onpointermove) {
	                this.onpointermove(evt);
	            }
	            this.dispatchEvent(evt, false);
	            if (evt.pointerDown) {
	                this.state = WidgetState.ACTIVE;
	            }
	            else {
	                this.state = WidgetState.OVER;
	            }
	        }
	        else {
	            this.dispatchEvent(evt, true);
	            if (this.onpointermove) {
	                this.onpointermove(evt);
	            }
	            this.dispatchEvent(evt, false);
	            this.state = WidgetState.NORMAL;
	        }
	        ctx.restore();
	    };
	    Widget.prototype.dispatchPointerMove = function (evt, ctx) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        if (evt.pointerDown) {
	            this.dispatchPointerMoveToTarget(evt, ctx);
	        }
	        this.dispatchPointerMoveToUnder(evt, ctx);
	    };
	    Widget.prototype.dispatchPointerUp = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this._lastOverWidget && this.target !== this._lastOverWidget) {
	            this._lastOverWidget.dispatchPointerUp(evt);
	        }
	        if (this.target) {
	            this.target.dispatchPointerUp(evt);
	        }
	        if (this.onpointerup) {
	            this.onpointerup(evt);
	        }
	        this.dispatchEvent(evt, false);
	        this.state = WidgetState.NORMAL;
	    };
	    Widget.prototype.dispatchClick = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchClick(evt);
	        }
	        if (this.onclick) {
	            this.onclick(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchContextMenu = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchContextMenu(evt);
	        }
	        if (this.oncontextmenu) {
	            this.oncontextmenu(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchDblClick = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchDblClick(evt);
	        }
	        if (this.ondblclick) {
	            this.ondblclick(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchKeyDown = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchKeyDown(evt);
	        }
	        if (this.onkeydown) {
	            this.onkeydown(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchKeyUp = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchKeyUp(evt);
	        }
	        if (this.onkeyup) {
	            this.onkeyup(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.dispatchWheel = function (evt) {
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.dispatchEvent(evt, true);
	        if (this.target) {
	            this.target.dispatchWheel(evt);
	        }
	        if (this.onwheel) {
	            this.onwheel(evt);
	        }
	        this.dispatchEvent(evt, false);
	    };
	    Widget.prototype.applyTransform = function (ctx) {
	        var e = Events.ApplyTransformEvent.get();
	        this.dispatchEvent(e.reset(Events.BEFORE_APPLY_TRANSFORM, ctx, this));
	        if (!this._canvas) {
	            ctx.translate(this._x, this._y);
	        }
	        var px = this._pivotX * this._w;
	        var py = this._pivotY * this._h;
	        if (this._rotation || this._scaleX !== 1 || this._scaleY !== 1) {
	            ctx.translate(px, py);
	            ctx.rotate(this._rotation);
	            ctx.scale(this._scaleX, this._scaleY);
	            ctx.translate(-px, -py);
	        }
	        this.dispatchEvent(e.reset(Events.AFTER_APPLY_TRANSFORM, ctx, this));
	        return this;
	    };
	    Widget.prototype.findEventTargetChild = function (x, y, ctx) {
	        var arr = this._children;
	        var n = arr.length;
	        for (var i = n - 1; i >= 0; i--) {
	            var iter = arr[i];
	            if (iter._enable && iter._sensitive) {
	                ctx.save();
	                iter.applyTransform(ctx);
	                var hitTestResult = iter.hitTest(x, y, ctx);
	                if (hitTestResult) {
	                    ctx.restore();
	                    return iter;
	                }
	                ctx.restore();
	            }
	        }
	        return null;
	    };
	    ///////////////////////////////////////////
	    Widget.prototype.animate = function () {
	        var tween = new TWEEN.Tween(this);
	        this.requestRedraw();
	        return tween;
	    };
	    Widget.prototype.scaleTo = function (sx, sy, duration) {
	        this.requestRedraw();
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ scaleX: sx, scaleY: sy }, duration).start();
	            return tween;
	        }
	        else {
	            this.scaleX = sx;
	            this.scaleY = sy;
	            return null;
	        }
	    };
	    Widget.prototype.opacityTo = function (opacity, duration) {
	        this.requestRedraw();
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ opacity: opacity }, duration).start();
	            return tween;
	        }
	        else {
	            this.opacity = opacity;
	            ;
	            return null;
	        }
	    };
	    Widget.prototype.rotateTo = function (rotation, duration) {
	        this.requestRedraw();
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ rotation: rotation }, duration).start();
	            return tween;
	        }
	        else {
	            this.rotation = rotation;
	            return null;
	        }
	    };
	    Widget.prototype.moveTo = function (x, y, duration) {
	        this.requestRedraw();
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ x: x, y: y }, duration).start();
	            return tween;
	        }
	        else {
	            this.x = x;
	            this.y = y;
	            return null;
	        }
	    };
	    Widget.prototype.moveResizeTo = function (x, y, w, h, duration) {
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ x: x, y: y, w: w, h: h }, duration).start();
	            return tween;
	        }
	        else {
	            this.x = x;
	            this.y = y;
	            this.w = w;
	            this.h = h;
	            return null;
	        }
	    };
	    Widget.prototype.resizeTo = function (w, h, duration) {
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ w: w, h: h }, duration).start();
	            return tween;
	        }
	        else {
	            this.w = w;
	            this.h = h;
	            return null;
	        }
	    };
	    Widget.prototype.getLayoutRect = function () {
	        return this.layoutRect.init(this.leftPadding, this.topPadding, this.w - this.leftPadding - this.rightPadding, this.h - this.topPadding - this.bottomPadding);
	    };
	    /**
	     * 根据当前的childrenLayouter重新布局子控件。
	     */
	    Widget.prototype.relayoutChildren = function () {
	        this.requestRedraw();
	        if (this.childrenLayouter && ((this.w > 0 && this.h > 0) || this._inited)) {
	            var ret = this.childrenLayouter.layoutChildren(this, this.children, this.getLayoutRect());
	            return this.layoutRect.copy(ret);
	        }
	        return this.getLayoutRect();
	    };
	    /**
	     * 请求重新布局当前控件。
	     */
	    Widget.prototype.requestRelayout = function () {
	        if (this.parent) {
	            this.parent.relayoutChildren();
	        }
	        return this;
	    };
	    /**
	     * 根据当前的childrenLayouter创建子控件的布局参数。
	     */
	    Widget.prototype.createChildLayoutParam = function (options) {
	        var layouter = this.childrenLayouter;
	        return layouter ? layouter.createParam(options) : null;
	    };
	    /**
	     * 启用指定的childrenLayouter。
	     */
	    Widget.prototype.useChildrenLayouter = function (type, options) {
	        this.childrenLayouter = layouter_1.LayouterFactory.create(type, options);
	        return this;
	    };
	    Object.defineProperty(Widget.prototype, "childrenLayouter", {
	        get: function () {
	            return this._childrenLayouter;
	        },
	        /**
	         * 设置childrenLayouter。
	         */
	        set: function (layouter) {
	            if (typeof layouter === "string") {
	                this._childrenLayouter = layouter_1.LayouterFactory.create(layouter, null);
	            }
	            else {
	                this._childrenLayouter = layouter;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "layoutParam", {
	        get: function () {
	            return this._layoutParam;
	        },
	        /**
	         * 布局参数是父控件在布局当前控件时使用的。
	         */
	        set: function (param) {
	            this._layoutParam = param;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ///////////////////////////////////////////
	    Widget.prototype.indexOfChild = function (child) {
	        return this.children.indexOf(child);
	    };
	    Widget.prototype.findChild = function (func) {
	        var i = 0;
	        var arr = this._children;
	        var n = arr.length;
	        for (var i = 0; i < n; i++) {
	            var iter = arr[i];
	            if (func(iter)) {
	                return iter;
	            }
	        }
	        return null;
	    };
	    Widget.prototype.findChildByName = function (name) {
	        var ret = this.findChild(function (child) {
	            return child.name === name;
	        });
	        return ret;
	    };
	    Widget.prototype.findChildByID = function (id) {
	        var ret = this.findChild(function (child) {
	            return child.id === id;
	        });
	        return ret;
	    };
	    Widget.prototype.find = function (path) {
	        var items = path.split("/");
	        var n = items.length;
	        var ret = this;
	        for (var i = 0; i < n; i++) {
	            var name = items[i];
	            ret = ret.findChildByName(name);
	        }
	        return ret;
	    };
	    Widget.prototype.drawColorBackground = function (ctx, style) {
	        var roundType = 0;
	        var roundTypeName = style.roundType;
	        if (roundTypeName) {
	            if (roundTypeName === "top") {
	                roundType = graphics_1.RoundType.TL | graphics_1.RoundType.TR;
	            }
	            else if (roundTypeName === "bottom") {
	                roundType = graphics_1.RoundType.BL | graphics_1.RoundType.BR;
	            }
	            else if (roundTypeName === "left") {
	                roundType = graphics_1.RoundType.BL | graphics_1.RoundType.TL;
	            }
	            else if (roundTypeName === "right") {
	                roundType = graphics_1.RoundType.TR | graphics_1.RoundType.BR;
	            }
	        }
	        graphics_1.Graphics.drawRoundRect(ctx, style.backGroundColor, style.lineColor, style.lineWidth, 0, 0, this.w, this.h, style.roundRadius, roundType);
	        return this;
	    };
	    Widget.prototype.drawBackground = function (ctx, style) {
	        if (style.backGroundImage) {
	            style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h);
	        }
	        else if (style.backGroundColor || (style.lineColor && style.lineWidth)) {
	            this.drawColorBackground(ctx, style);
	        }
	        return this;
	    };
	    /**
	     * 获取本地化后的文本。
	     */
	    Widget.prototype.getLocaleText = function () {
	        return this.text;
	    };
	    /**
	     * 获取前景图片区域。
	     */
	    Widget.prototype.getFgImageRect = function (style) {
	        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
	    };
	    /**
	     * 绘制前景图片，子控件根据需要重载。
	     */
	    Widget.prototype.drawImage = function (ctx, style) {
	        if (style.foreGroundImage) {
	            var r = this.getFgImageRect(style);
	            style.foreGroundImage.draw(ctx, image_tile_1.ImageDrawType.ICON, r.x, r.y, r.w, r.h);
	        }
	        return this;
	    };
	    /**
	     * 获取文本显示区域。
	     */
	    Widget.prototype.getTextRect = function (style) {
	        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, this.clientW, this.clientH);
	    };
	    Widget.prototype.drawText = function (ctx, style) {
	        var text = this.getLocaleText();
	        if (text && style.textColor) {
	            graphics_1.Graphics.drawTextSL(ctx, text, style, this.getTextRect(style));
	        }
	        return this;
	    };
	    Widget.prototype.drawChildren = function (ctx) {
	        this._children.forEach(function (child) {
	            if (child.visible) {
	                child.draw(ctx);
	            }
	        });
	        return this;
	    };
	    Widget.prototype.drawTips = function (ctx, style) {
	        return this;
	    };
	    Widget.prototype.computeDirtyRectSelf = function (ctx) {
	        if (this._dirty) {
	            ctx.addRect(-5, -5, this.w + 10, this.h + 10);
	        }
	    };
	    /**
	     * 计算脏矩形。
	     */
	    Widget.prototype.computeDirtyRect = function (ctx) {
	        ctx.save();
	        this.applyTransform(ctx);
	        this.computeDirtyRectSelf(ctx);
	        this.children.forEach(function (child) {
	            child.computeDirtyRect(ctx);
	        });
	        ctx.restore();
	    };
	    Widget.prototype.draw = function (ctx) {
	        this._dirty = false;
	        var style = this.getStyle();
	        ctx.save();
	        var opacity = this._opacity;
	        if (opacity !== 1) {
	            ctx.globalAlpha *= opacity;
	        }
	        this.applyTransform(ctx);
	        var drawEvent = Events.DrawEvent.get();
	        this.dispatchEvent(drawEvent.reset(Events.BEFORE_DRAW, ctx, this));
	        if (style) {
	            this.drawBackground(ctx, style)
	                .drawImage(ctx, style)
	                .drawChildren(ctx)
	                .drawText(ctx, style)
	                .drawTips(ctx, style);
	        }
	        else {
	            this.drawChildren(ctx);
	        }
	        this.dispatchEvent(drawEvent.reset(Events.AFTER_DRAW, ctx, this));
	        ctx.restore();
	        return;
	    };
	    Widget.prototype.stateToString = function (state) {
	        return states[state];
	    };
	    ;
	    Object.defineProperty(Widget.prototype, "styleType", {
	        set: function (styleType) {
	            this._styleType = styleType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Widget.prototype.setStyle = function (state, style) {
	        if (!this._styles) {
	            this._styles = {};
	        }
	        var stateName = this.stateToString(state);
	        this._styles[stateName] = style;
	        return this;
	    };
	    Widget.prototype.getStyleType = function () {
	        return this._styleType || this.type;
	    };
	    Widget.prototype.getStyleOfState = function (state) {
	        var style = null;
	        var tm = this._themeManager;
	        var stateName = this.stateToString(state);
	        if (this._styles) {
	            style = this._styles[stateName];
	        }
	        else if (tm) {
	            var styleType = this.getStyleType();
	            style = tm.get(styleType, stateName);
	        }
	        return style;
	    };
	    Widget.prototype.getStateForStyle = function () {
	        return this.enable ? this._state : WidgetState.DISABLE;
	    };
	    Widget.prototype.getStyle = function () {
	        var state = this.getStateForStyle();
	        var style = this.getStyleOfState(state);
	        if (!style) {
	            style = this.getStyleOfState(WidgetState.NORMAL);
	        }
	        return style;
	    };
	    Widget.prototype.sortChildren = function () {
	        var arr = this._children;
	        utils_1.stableSort(arr, function (a, b) {
	            return a.z - b.z;
	        });
	        return this;
	    };
	    Widget.prototype.removeAllChildren = function () {
	        this.children.forEach(function (child) {
	            child.deinit();
	            child.dispose();
	        });
	        this.target = null;
	        this.children.length = 0;
	        this._lastOverWidget = null;
	        return this;
	    };
	    Widget.prototype.removeChild = function (child, fastMode, destroy) {
	        var arr = this._children;
	        var index = arr.indexOf(child);
	        if (index >= 0) {
	            arr.splice(index, 1);
	            if (!fastMode) {
	                this.relayoutChildren();
	            }
	        }
	        if (destroy) {
	            child.deinit();
	            child.dispose();
	        }
	        return this;
	    };
	    Widget.prototype.addChild = function (child, fastMode) {
	        var arr = this._children;
	        arr.push(child);
	        child.parent = this;
	        child.app = this.app;
	        if (this._inited) {
	            child.init();
	        }
	        if (!fastMode) {
	            this.sortChildren();
	            this.relayoutChildren();
	        }
	        return this;
	    };
	    Widget.prototype.dispose = function () {
	        this.dispatchEvent({ type: Events.DISPOSE });
	        if (this._canvas) {
	            this._canvas.dispose();
	            this._canvas = null;
	        }
	        this.removeAllListeners();
	        this._children.forEach(function (child) {
	            child.dispose();
	        });
	        this._app = null;
	        this._parent = null;
	        this._children = [];
	        this._layoutParam = null;
	        this._childrenLayouter = null;
	        if (this.recycle) {
	            this.recycle();
	        }
	    };
	    Widget.prototype.requestRedraw = function () {
	        var app = this._app;
	        this._dirty = true;
	        if (app) {
	            app.getMainLoop().requestRedraw();
	        }
	        return this;
	    };
	    //////////////////////////////////////////////////
	    Widget.prototype.createCanvas = function () {
	        var _this = this;
	        var app = this.app;
	        var density = app.getViewPort().density;
	        var canvas = canvas_1.Canvas.create(this.x, this.y, this.w, this.h, density);
	        var matrixStack = matrix_stack_1.MatrixStack.create();
	        canvas.ensureCanvas();
	        canvas.on(Events.POINTER_DOWN, function (evt) {
	            matrixStack.identity();
	            _this.dispatchPointerDown(evt, matrixStack);
	        });
	        canvas.on(Events.POINTER_MOVE, function (evt) {
	            matrixStack.identity();
	            _this.dispatchPointerMove(evt, matrixStack);
	        });
	        canvas.on(Events.POINTER_UP, function (evt) {
	            _this.dispatchPointerUp(evt);
	        });
	        canvas.on(Events.CLICK, function (evt) {
	            _this.dispatchClick(evt);
	        });
	        canvas.on(Events.DBLCLICK, function (evt) {
	            _this.dispatchDblClick(evt);
	        });
	        canvas.on(Events.CONTEXT_MENU, function (evt) {
	            _this.dispatchContextMenu(evt);
	        });
	        canvas.on(Events.WHEEL, function (evt) {
	            _this.dispatchWheel(evt);
	        });
	        canvas.on(Events.KEYDOWN, function (evt) {
	            _this.dispatchKeyDown(evt);
	        });
	        canvas.on(Events.KEYUP, function (evt) {
	            _this.dispatchKeyUp(evt);
	        });
	        this._canvas = canvas;
	        var mainLoop = this.app.getMainLoop();
	        var dirtyRectContext = dirty_rect_context_1.DirtyRectContext.create();
	        var lastDirtyRect = rect_1.Rect.create(0, 0, this.w, this.h);
	        var debugDirtyRect = app.options.debugDirtyRect;
	        function drawWithDirtyRect(evt) {
	            var ctx = canvas.getContext("2d");
	            dirtyRectContext.reset();
	            this.computeDirtyRect(dirtyRectContext);
	            var dirtyRect = dirtyRectContext.getRect();
	            var r = lastDirtyRect.merge(dirtyRect);
	            if (r.w > 0 && r.h > 0) {
	                ctx.save();
	                ctx.beginPath();
	                ctx.clearRect(r.x, r.y, r.w, r.h);
	                ctx.rect(r.x, r.y, r.w, r.h);
	                ctx.clip();
	                ctx.globalAlpha = 1;
	                this.draw(ctx);
	                if (debugDirtyRect) {
	                    ctx.lineWidth = 1;
	                    ctx.strokeStyle = "gold";
	                    ctx.strokeRect(dirtyRect.x + 1, dirtyRect.y + 1, dirtyRect.w - 2, dirtyRect.h - 2);
	                }
	                ctx.restore();
	            }
	            lastDirtyRect.copy(dirtyRect);
	        }
	        function drawWithoutDirtyRect(evt) {
	            var ctx = canvas.getContext("2d");
	            ctx.globalAlpha = 1;
	            this.draw(ctx);
	        }
	        var withoutDirtyRect = app.options.withoutDirtyRect;
	        var draw = withoutDirtyRect ? drawWithoutDirtyRect.bind(this) : drawWithDirtyRect.bind(this);
	        mainLoop.on(Events.TICK, draw);
	        this.on(Events.DISPOSE, function (evt) {
	            mainLoop.off(Events.TICK, draw);
	        });
	        this.on(Events.PROP_CHANGE, function (evt) {
	            var prop = evt.prop;
	            var value = evt.newValue;
	            switch (prop) {
	                case "x": {
	                    canvas.x = value;
	                    break;
	                }
	                case "y": {
	                    canvas.y = value;
	                    break;
	                }
	                case "w": {
	                    canvas.w = value;
	                    break;
	                }
	                case "h": {
	                    canvas.h = value;
	                    break;
	                }
	                case "z": {
	                    canvas.z = value;
	                    break;
	                }
	            }
	        });
	        return this;
	    };
	    Object.defineProperty(Widget.prototype, "dirty", {
	        //////////////////////////////////////////////////
	        get: function () {
	            return this._dirty;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "x", {
	        get: function () {
	            return this._x;
	        },
	        set: function (value) {
	            this.setProp("x", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "y", {
	        get: function () {
	            return this._y;
	        },
	        set: function (value) {
	            this.setProp("y", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "z", {
	        get: function () {
	            return this._z;
	        },
	        set: function (value) {
	            this.setProp("z", value, true);
	            if (this._parent) {
	                this._parent.sortChildren();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "desireWidth", {
	        get: function () {
	            return this._w;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "w", {
	        get: function () {
	            return this._w;
	        },
	        set: function (value) {
	            this.setProp("w", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "width", {
	        get: function () {
	            return this._w;
	        },
	        set: function (value) {
	            this.setProp("w", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "clientW", {
	        get: function () {
	            return this._w - this.leftPadding - this.rightPadding;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "clientH", {
	        get: function () {
	            return this._h - this.topPadding - this.bottomPadding;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "height", {
	        get: function () {
	            return this._h;
	        },
	        set: function (value) {
	            this.setProp("h", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "h", {
	        get: function () {
	            return this._h;
	        },
	        set: function (value) {
	            this.setProp("h", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "state", {
	        get: function () {
	            return this._state;
	        },
	        set: function (value) {
	            if (this._state !== value) {
	                this.setProp("state", value, true);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            this.setValue(value, true, false);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "selected", {
	        get: function () {
	            return this._selected;
	        },
	        set: function (value) {
	            this.setProp("selected", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "enable", {
	        get: function () {
	            return this._enable;
	        },
	        set: function (value) {
	            this.setProp("enable", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "visible", {
	        get: function () {
	            return this._visible;
	        },
	        set: function (value) {
	            var oldValue = this._visible;
	            if (this.value !== oldValue) {
	                this.setVisible(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "inputable", {
	        /**
	         * 用户是否可以通过本控件输入/选择数据。
	         */
	        get: function () {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Widget.prototype.setVisible = function (value) {
	        this.setProp("visible", value, true);
	        this.dispatchEvent({ type: value ? Events.SHOW : Events.HIDE });
	        this.requestRedraw();
	    };
	    Object.defineProperty(Widget.prototype, "opacity", {
	        get: function () {
	            return this._opacity;
	        },
	        set: function (value) {
	            this.setProp("opacity", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "scaleX", {
	        get: function () {
	            return this._scaleX;
	        },
	        set: function (value) {
	            this.setProp("scaleX", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "scaleY", {
	        get: function () {
	            return this._scaleY;
	        },
	        set: function (value) {
	            this.setProp("scaleY", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "rotation", {
	        get: function () {
	            return this._rotation;
	        },
	        set: function (value) {
	            this.setProp("rotation", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "focusable", {
	        get: function () {
	            return this._focusable;
	        },
	        set: function (value) {
	            this.setProp("focusable", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "sensitive", {
	        get: function () {
	            return this._sensitive;
	        },
	        set: function (value) {
	            this.setProp("sensitive", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "pivotX", {
	        get: function () {
	            return this._pivotX;
	        },
	        set: function (value) {
	            this.setProp("pivotX", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "pivotY", {
	        get: function () {
	            return this._pivotY;
	        },
	        set: function (value) {
	            this.setProp("pivotY", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "tips", {
	        get: function () {
	            return this._tips;
	        },
	        set: function (value) {
	            this.setProp("tips", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "text", {
	        get: function () {
	            return this._text;
	        },
	        set: function (value) {
	            this.setProp("text", (value || value === 0) ? value.toString() : "", true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "name", {
	        get: function () {
	            return this._name;
	        },
	        set: function (value) {
	            this.setProp("name", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "type", {
	        get: function () {
	            return this._type;
	        },
	        set: function (value) {
	            this.setProp("type", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "id", {
	        get: function () {
	            return this._id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "tag", {
	        get: function () {
	            return this._tag;
	        },
	        set: function (value) {
	            this.setProp("tag", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "userData", {
	        get: function () {
	            return this._userData;
	        },
	        set: function (value) {
	            this._userData = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "target", {
	        get: function () {
	            return this._target;
	        },
	        set: function (value) {
	            this._target = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "hitTestResult", {
	        get: function () {
	            return this._hitTestResult;
	        },
	        set: function (value) {
	            this._hitTestResult = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "parent", {
	        get: function () {
	            return this._parent;
	        },
	        set: function (value) {
	            this._parent = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "app", {
	        get: function () {
	            return this._app;
	        },
	        set: function (app) {
	            this._app = app;
	            if (app) {
	                this._mainLoop = app.getMainLoop();
	                this._themeManager = app.getThemeManager();
	            }
	            this.children.forEach(function (child) {
	                child.app = app;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "win", {
	        get: function () {
	            for (var iter = this; iter !== null; iter = iter._parent) {
	                if (iter._isWindow) {
	                    return iter;
	                }
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "children", {
	        get: function () {
	            return this._children;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "canvas", {
	        get: function () {
	            return this._canvas;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Widget.prototype.isWindow = function () {
	        return this._isWindow;
	    };
	    Object.defineProperty(Widget.prototype, "leftPadding", {
	        get: function () {
	            return this._lp;
	        },
	        set: function (value) {
	            this.setProp("leftPadding", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "rightPadding", {
	        get: function () {
	            return this._rp;
	        },
	        set: function (value) {
	            this.setProp("rightPadding", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "topPadding", {
	        get: function () {
	            return this._tp;
	        },
	        set: function (value) {
	            this.setProp("topPadding", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "bottomPadding", {
	        get: function () {
	            return this._bp;
	        },
	        set: function (value) {
	            this.setProp("bottomPadding", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Widget.prototype, "padding", {
	        get: function () {
	            return this._tp;
	        },
	        set: function (value) {
	            this.setProp("lp", value, true);
	            this.setProp("tp", value, true);
	            this.setProp("rp", value, true);
	            this.setProp("bp", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Widget.prototype.setProp = function (prop, newValue, notify) {
	        var propName = "_" + prop;
	        var oldValue = this[propName];
	        if (oldValue !== newValue) {
	            this[propName] = newValue;
	            this.requestRedraw();
	            if (notify) {
	                var evt = this.ePropChangeEvent;
	                evt.init(Events.PROP_CHANGE, { prop: prop, oldValue: oldValue, newValue: newValue });
	                this.dispatchEvent(evt);
	            }
	        }
	        return this;
	    };
	    Widget.prototype.setText = function (text, notify) {
	        return this.setProp("text", text, notify);
	    };
	    Widget.prototype.useBehavior = function (type, options) {
	        var behavior;
	        if (!this._behaviors[type]) {
	            behavior = behavior_1.BehaviorFactory.create(type, this, options);
	            this._behaviors[type] = behavior;
	        }
	        else {
	            behavior = this._behaviors[type];
	            behavior.setOptions(options);
	        }
	        return behavior;
	    };
	    Widget.prototype.notifyChange = function () {
	        this.dispatchEvent(this.eChangeEvent.init(Events.CHANGE, { newValue: this.value, oldValue: !this.value }));
	    };
	    Widget.prototype.setValue = function (value, notify, exclude) {
	        var _this = this;
	        if (exclude) {
	            var type = this.type;
	            if (this.parent && value) {
	                var arr = this.parent.children;
	                arr.forEach(function (child) {
	                    if (child !== _this && child.type === type) {
	                        if (child.value) {
	                            child.setProp("value", false, true);
	                        }
	                    }
	                });
	            }
	            this.setProp("value", true, notify);
	        }
	        else {
	            this.setProp("value", value, notify);
	        }
	        if (notify) {
	            this.notifyChange();
	        }
	    };
	    Widget.prototype.onReset = function () {
	    };
	    Widget.prototype.onCreated = function () {
	    };
	    Widget.prototype.getDefProps = function () {
	        return Widget.defProps;
	    };
	    Widget.prototype.reset = function (type, options) {
	        var defProps = this.getDefProps();
	        for (var key in defProps) {
	            this[key] = defProps[key];
	        }
	        this._dirty = true;
	        this._type = type;
	        this._app = null;
	        this._children = [];
	        this._parent = null;
	        this._canvas = null;
	        this._styles = null;
	        this._target = null;
	        this._mainLoop = null;
	        this._userData = null;
	        this._themeManager = null;
	        this._lastOverWidget = null;
	        this._id = Date.now() + "." + Widget.ID++;
	        ;
	        this.onclick = null;
	        this.oncontextmenu = null;
	        this.onpointerdown = null;
	        this.onpointermove = null;
	        this.onpointerup = null;
	        this.onwheel = null;
	        this.onkeydown = null;
	        this.onkeyup = null;
	        this._behaviors = {};
	        this._viewModal = null;
	        this._dataBindingRule = null;
	        this.onReset();
	        this.set(options);
	        this.onCreated();
	        return this;
	    };
	    Widget.prototype.onFromJson = function (json) {
	    };
	    Widget.prototype.fromJson = function (json) {
	        var _this = this;
	        var defProps = this.getDefProps();
	        for (var key in defProps) {
	            var value = json[key];
	            if (value === undefined) {
	                value = defProps[key];
	            }
	            this[key] = value;
	        }
	        var styles = json.styles;
	        if (styles) {
	            this._styles = {};
	            for (var key in styles) {
	                var style = styles[key];
	                json._styles[key] = style_1.Style.create(style);
	            }
	        }
	        var childrenLayouter = json.childrenLayouter;
	        if (childrenLayouter) {
	            this.childrenLayouter = layouter_1.LayouterFactory.create(childrenLayouter.type, childrenLayouter);
	        }
	        var layoutParam = json.layoutParam;
	        if (layoutParam) {
	            this.layoutParam = layouter_1.LayouterParamFactory.create(layoutParam.type, layoutParam);
	        }
	        this._children.length = 0;
	        if (json.children) {
	            json.children.forEach(function (childJson) {
	                var child = widget_factory_1.WidgetFactory.create(childJson.type);
	                child.fromJson(childJson);
	                _this._children.push(child);
	            });
	        }
	        if (json._dataBindingRule) {
	            this._dataBindingRule = json._dataBindingRule;
	        }
	        this.onFromJson(json);
	        return this;
	    };
	    Widget.prototype.clone = function () {
	        var json = this.toJson();
	        var widget = widget_factory_1.WidgetFactory.createWithJson(json);
	        return widget;
	    };
	    Widget.prototype.onToJson = function (json) {
	    };
	    Widget.prototype.toJson = function () {
	        var json = {};
	        json.type = this._type;
	        var defProps = this.getDefProps();
	        for (var key in defProps) {
	            var value = this[key];
	            if (value !== defProps[key]) {
	                json[key] = value;
	            }
	        }
	        var styles = this._styles;
	        if (styles) {
	            json.styles = {};
	            for (var key in styles) {
	                var style = styles[key];
	                json.styles[key] = style.toJson();
	            }
	        }
	        if (this.childrenLayouter) {
	            json.childrenLayouter = this.childrenLayouter.toJson();
	        }
	        if (this.layoutParam) {
	            json.layoutParam = this.layoutParam.toJson();
	        }
	        if (this.children.length) {
	            json.children = [];
	            this.children.forEach(function (child) {
	                json.children.push(child.toJson());
	            });
	        }
	        if (this._dataBindingRule) {
	            json._dataBindingRule = this._dataBindingRule;
	        }
	        this.onToJson(json);
	        return json;
	    };
	    Object.defineProperty(Widget.prototype, "templateItem", {
	        get: function () {
	            return this._templateItem;
	        },
	        set: function (value) {
	            this._templateItem = value;
	            this._templateItemJson = value ? value.toJson() : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Widget.prototype.addChildWithTemplate = function (fastMode) {
	        var child = null;
	        var json = this._templateItemJson;
	        if (json) {
	            child = widget_factory_1.WidgetFactory.createWithJson(json);
	            this.addChild(child, fastMode);
	        }
	        return child;
	    };
	    ////////////////////////////////////////////	
	    //绑定单个属性，子控件可以重载本函数去支持其它属性。
	    Widget.prototype.onBindProp = function (prop, value) {
	        if (prop === "text") {
	            this.text = value;
	        }
	        else if (prop === "value") {
	            this.value = value;
	        }
	    };
	    Object.defineProperty(Widget.prototype, "dataBindingRule", {
	        get: function () {
	            return this._dataBindingRule;
	        },
	        /**
	         * 数据绑定规则。
	         */
	        set: function (dataBindingRule) {
	            this._dataBindingRule = binding_rule_1.BindingRule.create(dataBindingRule);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 显式的更新ViewModal。
	     */
	    Widget.prototype.updateExplicit = function () {
	        if (this._dataBindingRule) {
	            this.onUpdateToDataSource();
	        }
	        this.children.forEach(function (child) {
	            child.updateExplicit();
	        });
	    };
	    /**
	     * 绑定数据。
	     */
	    Widget.prototype.bindData = function (viewModal) {
	        var _this = this;
	        var dataBindingRule = this._dataBindingRule;
	        if (dataBindingRule && viewModal) {
	            this._viewModal = viewModal;
	            var bindingMode = viewModal.getBindingMode();
	            if (bindingMode !== iview_modal_1.BindingMode.ONE_WAY_TO_SOURCE) {
	                this.onBindData(viewModal, dataBindingRule);
	            }
	            if (bindingMode === iview_modal_1.BindingMode.TWO_WAY || bindingMode === iview_modal_1.BindingMode.ONE_WAY_TO_SOURCE) {
	                this.watchTargetChange(dataBindingRule);
	            }
	            if (bindingMode !== iview_modal_1.BindingMode.ONE_TIME && bindingMode !== iview_modal_1.BindingMode.ONE_WAY_TO_SOURCE) {
	                viewModal.onChange(function (evt) {
	                    _this.onBindData(viewModal, dataBindingRule);
	                });
	            }
	        }
	        this.bindChildren(viewModal);
	        if (viewModal.isCollection && this._templateItemJson) {
	            var collectionViewModal = viewModal;
	            collectionViewModal.onItemsChange(function (evt) {
	                _this.bindChildren(viewModal);
	            });
	        }
	        return this;
	    };
	    Widget.prototype.bindChildren = function (viewModal) {
	        if (viewModal.isCollection) {
	            if (this._templateItemJson) {
	                //对于集合viewModal，如果有模板项存在，则动态生成子控件。
	                var json = this._templateItemJson;
	                var collectionViewModal = viewModal;
	                var n = collectionViewModal.total;
	                this.removeAllChildren();
	                for (var i = 0; i < n; i++) {
	                    var itemViewModal = collectionViewModal.getItemViewModal(i);
	                    var child = this.addChildWithTemplate(true);
	                    child.bindData(itemViewModal);
	                }
	                this.relayoutChildren();
	            }
	            else {
	                //对于集合viewModal，如果没有模板项存在，则绑定集合viewModal当前项到子控件。
	                this._children.forEach(function (child) {
	                    child.bindData(viewModal);
	                });
	            }
	        }
	        else {
	            //对于非集合viewModal，按正常绑定子控件。
	            this._children.forEach(function (child) {
	                child.bindData(viewModal);
	            });
	        }
	    };
	    Widget.prototype.onBindCommand = function (viewModal, prop, commandSource) {
	        if (prop === "click") {
	            if (commandSource.eventHandler) {
	                this.off(Events.CLICK, commandSource.eventHandler);
	            }
	            commandSource.eventHandler = function (evt) {
	                viewModal.execCommand(commandSource.command, commandSource.commandArgs);
	            };
	            this.on(Events.CLICK, commandSource.eventHandler);
	        }
	    };
	    /*
	     * 把数据显示到界面上。
	     */
	    Widget.prototype.onBindData = function (viewModal, dataBindingRule) {
	        var _this = this;
	        dataBindingRule.forEach(function (prop, item) {
	            var source = item.source;
	            if (source.type === binding_rule_1.BindingCommandSource.TYPE) {
	                var commandSource = source;
	                _this.onBindCommand(viewModal, prop, commandSource);
	            }
	            else {
	                var dataSource = source;
	                var value = dataSource.value;
	                var bindingMode = dataSource.mode || iview_modal_1.BindingMode.TWO_WAY;
	                if (value === undefined && dataSource.path) {
	                    value = viewModal.getProp(dataSource.path, dataSource.converter);
	                }
	                if (bindingMode !== iview_modal_1.BindingMode.ONE_WAY_TO_SOURCE) {
	                    _this.onBindProp(prop, value);
	                }
	            }
	        });
	    };
	    Widget.prototype.getPropDefaultBindMode = function (prop) {
	        return (prop === "value" && this.inputable) ? iview_modal_1.BindingMode.TWO_WAY : iview_modal_1.BindingMode.ONE_WAY;
	    };
	    /*
	     * 子控件重载此函数向用户提示数据无效。
	     */
	    Widget.prototype.onInvalidInput = function (message) {
	        console.log("invalid value:" + message);
	    };
	    Widget.prototype.onUpdateToDataSource = function () {
	        var _this = this;
	        var dataBindingRule = this._dataBindingRule;
	        dataBindingRule.forEach(function (prop, item) {
	            if (item.source.type === binding_rule_1.BindingDataSource.TYPE) {
	                var dataSource = item.source;
	                if (dataSource.updateTiming === iview_modal_1.UpdateTiming.EXPLICIT) {
	                    _this.updateValueToSource(_this.value, dataSource);
	                }
	            }
	        });
	    };
	    Widget.prototype.updateValueToSource = function (value, dataSource) {
	        var path = dataSource.path;
	        var converter = dataSource.converter;
	        var validationRule = dataSource.validationRule;
	        var result = this._viewModal.setProp(path, value, converter, validationRule);
	        if (result.code) {
	            this.onInvalidInput(result.message);
	        }
	        else {
	            this.onInvalidInput(null);
	        }
	    };
	    /*
	     * 监控控件单个属性的变化。
	     */
	    Widget.prototype.watchTargetValueChange = function (dataSource) {
	        var _this = this;
	        var updateTiming = dataSource.updateTiming;
	        var bindingMode = dataSource.mode || iview_modal_1.BindingMode.TWO_WAY;
	        if (updateTiming === iview_modal_1.UpdateTiming.EXPLICIT) {
	            return;
	        }
	        if (bindingMode === iview_modal_1.BindingMode.TWO_WAY || bindingMode === iview_modal_1.BindingMode.ONE_WAY_TO_SOURCE) {
	            var eventName = updateTiming === iview_modal_1.UpdateTiming.CHANGED ? Events.CHANGE : Events.CHANGING;
	            this.on(eventName, function (evt) {
	                _this.updateValueToSource(evt.value, dataSource);
	            });
	        }
	    };
	    /*
	     * 监控控件属性的变化。
	     */
	    Widget.prototype.watchTargetChange = function (dataBindingRule) {
	        var _this = this;
	        dataBindingRule.forEach(function (prop, item) {
	            var source = item.source;
	            if (source.type === binding_rule_1.BindingDataSource.TYPE) {
	                var dataSource = source;
	                var bindingMode = _this.getPropDefaultBindMode(prop);
	                if (bindingMode === iview_modal_1.BindingMode.TWO_WAY) {
	                    _this.watchTargetValueChange(dataSource);
	                }
	            }
	        });
	    };
	    Widget.defProps = {
	        _x: 0,
	        _y: 0,
	        _z: 0,
	        _w: 0,
	        _h: 0,
	        _state: 0,
	        _value: 0,
	        _enable: true,
	        _visible: true,
	        _selected: false,
	        _opacity: 1,
	        _scaleX: 1,
	        _scaleY: 1,
	        _pivotX: 0.5,
	        _pivotY: 0.5,
	        _rotation: 0,
	        _focusable: false,
	        _sensitive: true,
	        _tips: null,
	        _text: null,
	        _name: null,
	        _tag: null,
	        _hitTestResult: 0,
	        _isWindow: false,
	        _mode: 0,
	        _styleType: null,
	        _lp: 0,
	        _tp: 0,
	        _rp: 0,
	        _bp: 0
	    };
	    Widget.ID = 10000;
	    return Widget;
	}(emitter_1.Emitter));
	exports.Widget = Widget;
	;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */

	var TWEEN = TWEEN || (function () {

		var _tweens = [];

		return {

			getAll: function () {

				return _tweens;

			},

			removeAll: function () {

				_tweens = [];

			},

			add: function (tween) {

				_tweens.push(tween);

			},

			remove: function (tween) {

				var i = _tweens.indexOf(tween);

				if (i !== -1) {
					_tweens.splice(i, 1);
				}

			},

			update: function (time, preserve) {

				if (_tweens.length === 0) {
					return false;
				}

				var i = 0;

				time = time !== undefined ? time : TWEEN.now();

				while (i < _tweens.length) {

					if (_tweens[i].update(time) || preserve) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}

				}

				return true;

			}
		};

	})();


	// Include a performance.now polyfill
	(function () {
		// In node.js, use process.hrtime.
		if (this.window === undefined && this.process !== undefined) {
			TWEEN.now = function () {
				var time = process.hrtime();

				// Convert [seconds, microseconds] to milliseconds.
				return time[0] * 1000 + time[1] / 1000;
			};
		}
		// In a browser, use window.performance.now if it is available.
		else if (this.window !== undefined &&
		         window.performance !== undefined &&
			 window.performance.now !== undefined) {

			// This must be bound, because directly assigning this function
			// leads to an invocation exception in Chrome.
			TWEEN.now = window.performance.now.bind(window.performance);
		}
		// Use Date.now if it is available.
		else if (Date.now !== undefined) {
			TWEEN.now = Date.now;
		}
		// Otherwise, use 'new Date().getTime()'.
		else {
			TWEEN.now = function () {
				return new Date().getTime();
			};
		}
	})();


	TWEEN.Tween = function (object) {

		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;

		// Set all starting values present on the target object
		for (var field in object) {
			_valuesStart[field] = parseFloat(object[field], 10);
		}

		this.to = function (properties, duration) {

			if (duration !== undefined) {
				_duration = duration;
			}

			_valuesEnd = properties;

			return this;

		};

		this.start = function (time) {

			TWEEN.add(this);

			_isPlaying = true;

			_onStartCallbackFired = false;

			_startTime = time !== undefined ? time : TWEEN.now();
			_startTime += _delayTime;

			for (var property in _valuesEnd) {

				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {

					if (_valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_valuesStart[property] === undefined) {
					continue;
				}

				_valuesStart[property] = _object[property];

				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				_valuesStartRepeat[property] = _valuesStart[property] || 0;

			}

			return this;

		};

		this.stop = function () {

			if (!_isPlaying) {
				return this;
			}

			TWEEN.remove(this);
			_isPlaying = false;

			if (_onStopCallback !== null) {
				_onStopCallback.call(_object);
			}

			this.stopChainedTweens();
			return this;

		};

		this.stopChainedTweens = function () {

			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}

		};

		this.delay = function (amount) {

			_delayTime = amount;
			return this;

		};

		this.repeat = function (times) {

			_repeat = times;
			return this;

		};

		this.yoyo = function (yoyo) {

			_yoyo = yoyo;
			return this;

		};


		this.easing = function (easing) {

			_easingFunction = easing;
			return this;

		};

		this.interpolation = function (interpolation) {

			_interpolationFunction = interpolation;
			return this;

		};

		this.chain = function () {

			_chainedTweens = arguments;
			return this;

		};

		this.onStart = function (callback) {

			_onStartCallback = callback;
			return this;

		};

		this.onUpdate = function (callback) {

			_onUpdateCallback = callback;
			return this;

		};

		this.onComplete = function (callback) {

			_onCompleteCallback = callback;
			return this;

		};

		this.onStop = function (callback) {

			_onStopCallback = callback;
			return this;

		};

		this.update = function (time) {

			var property;
			var elapsed;
			var value;

			if (time < _startTime) {
				return true;
			}

			if (_onStartCallbackFired === false) {

				if (_onStartCallback !== null) {
					_onStartCallback.call(_object);
				}

				_onStartCallbackFired = true;

			}

			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;

			value = _easingFunction(elapsed);

			for (property in _valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}

				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];

				if (end instanceof Array) {

					_object[property] = _interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end, 10);
						} else {
							end = parseFloat(end, 10);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						_object[property] = start + (end - start) * value;
					}

				}

			}

			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}

			if (elapsed === 1) {

				if (_repeat > 0) {

					if (isFinite(_repeat)) {
						_repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {

						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
						}

						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];

							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}

						_valuesStart[property] = _valuesStartRepeat[property];

					}

					if (_yoyo) {
						_reversed = !_reversed;
					}

					_startTime = time + _delayTime;

					return true;

				} else {

					if (_onCompleteCallback !== null) {
						_onCompleteCallback.call(_object);
					}

					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}

					return false;

				}

			}

			return true;

		};

	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		if (true) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

		} else if (typeof module !== 'undefined' && typeof exports === 'object') {

			// Node.js
			module.exports = TWEEN;

		} else if (root !== undefined) {

			// Global variable
			root.TWEEN = TWEEN;

		}

	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	//! stable.js 0.1.5, https://github.com/Two-Screen/stable
	//! © 2014 Angry Bytes and contributors. MIT licensed.
	"use strict";
	// A stable array sort, because `Array#sort()` is not guaranteed stable.
	// This is an implementation of merge sort, without recursion.
	function stableSort(arr, comp) {
	    var result = exec(arr, comp);
	    // This simply copies back if the result isn't in the original array,
	    // which happens on an odd number of passes.
	    if (result !== arr) {
	        pass(result, null, arr.length, arr);
	    }
	    return arr;
	}
	exports.stableSort = stableSort;
	;
	// Execute the sort using the input array and a second buffer as work space.
	// Returns one of those two, containing the final result.
	function exec(arr, comp) {
	    if (typeof (comp) !== 'function') {
	        comp = function (a, b) {
	            return String(a).localeCompare(b);
	        };
	    }
	    // Short-circuit when there's nothing to sort.
	    var len = arr.length;
	    if (len <= 1) {
	        return arr;
	    }
	    // Rather than dividing input, simply iterate chunks of 1, 2, 4, 8, etc.
	    // Chunks are the size of the left or right hand in merge sort.
	    // Stop when the left-hand covers all of the array.
	    var buffer = new Array(len);
	    for (var chk = 1; chk < len; chk *= 2) {
	        pass(arr, comp, chk, buffer);
	        var tmp = arr;
	        arr = buffer;
	        buffer = tmp;
	    }
	    return arr;
	}
	// Run a single pass with the given chunk size.
	var pass = function (arr, comp, chk, result) {
	    var len = arr.length;
	    var i = 0;
	    // Step size / double chunk size.
	    var dbl = chk * 2;
	    // Bounds of the left and right chunks.
	    var l, r, e;
	    // Iterators over the left and right chunk.
	    var li, ri;
	    // Iterate over pairs of chunks.
	    for (l = 0; l < len; l += dbl) {
	        r = l + chk;
	        e = r + chk;
	        if (r > len)
	            r = len;
	        if (e > len)
	            e = len;
	        // Iterate both chunks in parallel.
	        li = l;
	        ri = r;
	        while (true) {
	            // Compare the chunks.
	            if (li < r && ri < e) {
	                // This works for a regular `sort()` compatible comparator,
	                // but also for a simple comparator like: `a > b`
	                if (comp(arr[li], arr[ri]) <= 0) {
	                    result[i++] = arr[li++];
	                }
	                else {
	                    result[i++] = arr[ri++];
	                }
	            }
	            else if (li < r) {
	                result[i++] = arr[li++];
	            }
	            else if (ri < e) {
	                result[i++] = arr[ri++];
	            }
	            else {
	                break;
	            }
	        }
	    }
	};
	function assign(target, other) {
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	    }
	    var to = Object(target);
	    for (var i = 1; i < arguments.length; i++) {
	        var nextSource = arguments[i];
	        if (nextSource === undefined || nextSource === null) {
	            continue;
	        }
	        nextSource = Object(nextSource);
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	                to[nextKey] = nextSource[nextKey];
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	function aRemove(arr, obj) {
	    var i = arr.indexOf(obj);
	    if (i >= 0) {
	        arr.splice(i, 1);
	        return true;
	    }
	    return false;
	}
	exports.aRemove = aRemove;
	Array.prototype.forEachR = function (func) {
	    var n = this.length - 1;
	    for (var i = this.length - 1; i >= 0; i--) {
	        var iter = this[i];
	        func(this[i], i);
	    }
	};
	Array.prototype.stableSort = function (comp) {
	    stableSort(this, comp);
	};
	Array.prototype.remove = function (obj) {
	    return aRemove(this, obj);
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var matrix_1 = __webpack_require__(12);
	var MatrixStack = (function () {
	    function MatrixStack() {
	        this.stack = [];
	        this.matrix = new matrix_1.Matrix();
	    }
	    MatrixStack.prototype.save = function () {
	        this.stack.push(this.matrix.clone());
	        return this;
	    };
	    MatrixStack.prototype.restore = function () {
	        if (this.stack.length) {
	            this.matrix = this.stack.pop();
	        }
	        return this;
	    };
	    MatrixStack.prototype.identity = function () {
	        this.matrix.identity();
	        return this;
	    };
	    MatrixStack.prototype.set = function (a, b, c, d, tx, ty) {
	        this.matrix.set(a, b, c, d, tx, ty);
	        return this;
	    };
	    MatrixStack.prototype.rotate = function (rad) {
	        this.matrix.rotate(rad);
	        return this;
	    };
	    MatrixStack.prototype.scale = function (sx, sy) {
	        this.matrix.scale(sx, sy);
	        return this;
	    };
	    MatrixStack.prototype.translate = function (dx, dy) {
	        this.matrix.translate(dx, dy);
	    };
	    MatrixStack.prototype.transformPoint = function (x, y, out) {
	        return this.matrix.transformPoint(x, y, out);
	    };
	    MatrixStack.prototype.invert = function () {
	        return this.matrix.invert();
	    };
	    MatrixStack.prototype.matrixToString = function () {
	        return this.matrix.toString();
	    };
	    MatrixStack.create = function () {
	        return new MatrixStack();
	    };
	    return MatrixStack;
	}());
	exports.MatrixStack = MatrixStack;
	;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var factory_1 = __webpack_require__(24);
	/**
	 * Widget工厂，注册控件的创建函数和根据控件的类型创建控件。
	 * 主要用于根据UI编辑器生成的UI数据创建UI，每个控件都要向WidgetFactory注册。
	 *
	 * 示例：
	 * ```
	 * WidgetFactory.register(Button.TYPE, Button.create);
	 * ```
	 *
	 */
	var WidgetFactory = (function () {
	    function WidgetFactory() {
	    }
	    WidgetFactory.register = function (type, creator) {
	        return WidgetFactory.factory.register(type, creator);
	    };
	    WidgetFactory.create = function (type, options) {
	        return WidgetFactory.factory.create(type, options);
	    };
	    WidgetFactory.createWithJson = function (json) {
	        var widget = WidgetFactory.create(json.type);
	        widget.fromJson(json);
	        return widget;
	    };
	    WidgetFactory.factory = new factory_1.Factory();
	    return WidgetFactory;
	}());
	exports.WidgetFactory = WidgetFactory;


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * 一个通用的工厂类。
	 */
	var Factory = (function () {
	    function Factory() {
	        this.creators = {};
	    }
	    Factory.prototype.register = function (type, creator) {
	        this.creators[type] = creator;
	    };
	    Factory.prototype.create = function (type, options) {
	        var obj = null;
	        var creator = this.creators[type];
	        if (creator) {
	            obj = creator(options);
	        }
	        return obj;
	    };
	    return Factory;
	}());
	exports.Factory = Factory;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var style_1 = __webpack_require__(3);
	var carota = __webpack_require__(26);
	var ut = __webpack_require__(47);
	var tokenizer = ut.createTokenizerStream();
	var Token = ut.Token;
	var Break = ut.Break;
	(function (RoundType) {
	    RoundType[RoundType["TL"] = 1] = "TL";
	    RoundType[RoundType["TR"] = 2] = "TR";
	    RoundType[RoundType["BL"] = 4] = "BL";
	    RoundType[RoundType["BR"] = 8] = "BR";
	})(exports.RoundType || (exports.RoundType = {}));
	var RoundType = exports.RoundType;
	;
	var TextLine = (function () {
	    function TextLine() {
	        this.text = "";
	        this.width = 0;
	    }
	    return TextLine;
	}());
	exports.TextLine = TextLine;
	;
	var Graphics = (function () {
	    function Graphics() {
	    }
	    Graphics.measureText = function (text, font) {
	        var ctx = Graphics.canvas.getContext("2d");
	        ctx.font = font;
	        var width = ctx.measureText(text).width;
	        return width;
	    };
	    Graphics.layoutText = function (text, maxWidth, font, _ctx) {
	        var ret = [];
	        if (!text || maxWidth < 5) {
	            return ret;
	        }
	        var line = new TextLine();
	        var tokenizer = ut.createTokenizerStream();
	        var ctx = _ctx ? _ctx : Graphics.canvas.getContext("2d");
	        ctx.font = font;
	        tokenizer.on('token', function (token, type, action) {
	            var width = ctx.measureText(token).width;
	            switch (type) {
	                case Token.LF:
	                case Token.CR: {
	                    ret.push(line);
	                    line = new TextLine();
	                    line.text = "\n";
	                    ret.push(line);
	                    line = new TextLine();
	                    return;
	                }
	                case Token.CL:
	                case Token.EX: {
	                    line.text += token;
	                    line.width += width;
	                    return;
	                }
	                default: break;
	            }
	            if (line.width >= maxWidth) {
	                ret.push(line);
	                line = new TextLine();
	            }
	            var n = token.length;
	            if ((line.width + width) <= maxWidth || n < 2) {
	                line.text += token;
	                line.width += width;
	            }
	            else if (type === Token.AL && action === Break.PROHIBITED && width < maxWidth) {
	                ret.push(line);
	                line = new TextLine();
	                line.text = token;
	                line.width = width;
	            }
	            else {
	                for (var i = 0; i < n; i++) {
	                    var c = token[i];
	                    width = ctx.measureText(c).width;
	                    if (line.width >= maxWidth) {
	                        ret.push(line);
	                        line = new TextLine();
	                    }
	                    line.text += c;
	                    line.width += width;
	                }
	            }
	        });
	        tokenizer.write(text);
	        tokenizer.end();
	        ret.push(line);
	        return ret;
	    };
	    Graphics.drawTextML = function (ctx, lines, style, r) {
	        var x = 0;
	        var y = 0;
	        var n = lines.length;
	        var lineHeight = style.textLineHeight;
	        var height = n * lineHeight;
	        switch (style.textAlign) {
	            case "right": {
	                x = r.x + r.w;
	                break;
	            }
	            case "center": {
	                x = r.x + (r.w >> 1);
	                break;
	            }
	            default: {
	                x = r.x;
	                break;
	            }
	        }
	        switch (style.textBaseline) {
	            case "top": {
	                y = r.y;
	                break;
	            }
	            case "bottom": {
	                y = r.y + r.h - height;
	                break;
	            }
	            default: {
	                y = r.y + ((r.h - height) >> 1);
	                break;
	            }
	        }
	        y = Math.max(y, 0);
	        x = Math.max(x, 0);
	        var maxY = r.y + r.h;
	        ctx.font = style.font;
	        ctx.fillStyle = style.textColor;
	        ctx.textAlign = style.textAlign;
	        ctx.textBaseline = "top";
	        for (var i = 0; i < n; i++) {
	            var text = lines[i].text;
	            ctx.fillText(text, x, y, r.w);
	            y += lineHeight;
	            if ((y + lineHeight) > maxY) {
	                break;
	            }
	        }
	        return;
	    };
	    Graphics.drawTextSL = function (ctx, text, style, r) {
	        var x = 0;
	        var y = 0;
	        switch (style.textAlign) {
	            case "right": {
	                x = r.x + r.w;
	                break;
	            }
	            case "center": {
	                x = r.x + (r.w >> 1);
	                break;
	            }
	            default: {
	                x = r.x;
	                break;
	            }
	        }
	        switch (style.textBaseline) {
	            case "top": {
	                y = r.y;
	                break;
	            }
	            case "bottom": {
	                y = r.y + r.h;
	                break;
	            }
	            default: {
	                y = r.y + (r.h >> 1);
	                break;
	            }
	        }
	        if (text && style.textColor) {
	            ctx.font = style.font;
	            ctx.fillStyle = style.textColor;
	            ctx.textAlign = style.textAlign;
	            ctx.textBaseline = style.textBaseline;
	            ctx.fillText(text, x, y);
	        }
	    };
	    Graphics.drawLine = function (ctx, strokeStyle, lineWidth, x1, y1, x2, y2) {
	        if (strokeStyle && lineWidth > 0) {
	            ctx.beginPath();
	            ctx.lineWidth = lineWidth;
	            ctx.strokeStyle = strokeStyle;
	            ctx.moveTo(x1, y1);
	            ctx.lineTo(x2, y2);
	            ctx.stroke();
	        }
	    };
	    Graphics.drawCircle = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, r) {
	        if (fillStyle || (strokeStyle && lineWidth > 0)) {
	            ctx.beginPath();
	            ctx.arc(x, y, r, 0, Math.PI * 2);
	            if (fillStyle) {
	                ctx.fillStyle = fillStyle;
	                ctx.fill();
	            }
	            if (strokeStyle && lineWidth > 0) {
	                ctx.strokeStyle = strokeStyle;
	                ctx.lineWidth = 1;
	                ctx.stroke();
	            }
	        }
	    };
	    Graphics.drawRect = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, w, h) {
	        if (fillStyle || (strokeStyle && lineWidth > 0)) {
	            ctx.beginPath();
	            ctx.rect(x, y, w, h);
	            if (fillStyle) {
	                style_1.Style.fill(ctx, fillStyle, h);
	            }
	            if (strokeStyle && lineWidth > 0) {
	                ctx.lineWidth = lineWidth;
	                ctx.strokeStyle = strokeStyle;
	                ctx.stroke();
	            }
	        }
	    };
	    Graphics.drawRoundRect = function (ctx, fillStyle, strokeStyle, lineWidth, x, y, w, h, r, type) {
	        if (fillStyle || (strokeStyle && lineWidth > 0)) {
	            Graphics.roundRect(ctx, x, y, w, h, r, type);
	            if (fillStyle) {
	                style_1.Style.fill(ctx, fillStyle, h);
	            }
	            if (strokeStyle && lineWidth > 0) {
	                ctx.lineWidth = lineWidth;
	                ctx.strokeStyle = strokeStyle;
	                ctx.stroke();
	            }
	        }
	    };
	    Graphics.roundRect = function (ctx, x, y, w, h, r, type) {
	        if (!type) {
	            type = RoundType.TL | RoundType.TR | RoundType.BL | RoundType.BR;
	        }
	        var d = r << 1;
	        ctx.beginPath();
	        if (d > w || d > h) {
	            var cx = x + (w >> 1);
	            var cy = y + (h >> 1);
	            r = Math.min(w >> 1, h >> 1);
	            ctx.arc(cx, cy, r, 0, Math.PI * 2);
	            return;
	        }
	        if (!r) {
	            ctx.rect(x, y, w, h);
	            return;
	        }
	        ctx.translate(x, y);
	        if (type & RoundType.TL) {
	            ctx.moveTo(0, r);
	            ctx.quadraticCurveTo(0, 0, r, 0);
	        }
	        else {
	            ctx.moveTo(0, 0);
	        }
	        if (type & RoundType.TR) {
	            ctx.lineTo(w - r, 0);
	            ctx.quadraticCurveTo(w, 0, w, r);
	        }
	        else {
	            ctx.lineTo(w, 0);
	        }
	        if (type & RoundType.BR) {
	            ctx.lineTo(w, h - r);
	            ctx.quadraticCurveTo(w, h, w - r, h);
	        }
	        else {
	            ctx.lineTo(w, h);
	        }
	        if (type & RoundType.BL) {
	            ctx.lineTo(r, h);
	            ctx.quadraticCurveTo(0, h, 0, h - r);
	        }
	        else {
	            ctx.lineTo(0, h);
	        }
	        ctx.closePath();
	        ctx.translate(-x, -y);
	    };
	    Graphics.canvas = document.createElement("canvas");
	    return Graphics;
	}());
	exports.Graphics = Graphics;
	;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var node = __webpack_require__(27);
	var editor = __webpack_require__(32);
	var doc = __webpack_require__(33);
	var dom = __webpack_require__(45);
	var runs = __webpack_require__(29);
	var html = __webpack_require__(46);
	var frame = __webpack_require__(40);
	var text = __webpack_require__(38);
	var rect = __webpack_require__(30);

	var bundle = {
	    node: node,
	    editor: editor,
	    document: doc,
	    dom: dom,
	    runs: runs,
	    html: html,
	    frame: frame,
	    text: text,
	    rect: rect
	};

	module.exports = bundle;

	if (typeof window !== 'undefined' && window.document) {
	    if (window.carota) {
	        throw new Error('Something else is called carota!');
	    }
	    window.carota = bundle;
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var per = __webpack_require__(28);
	var runs = __webpack_require__(29);
	var rect = __webpack_require__(30);
	var util = __webpack_require__(31);

	exports.prototype = {
	    children: function() {
	        return [];
	    },
	    parent: function() {
	        return null;
	    },
	    first: function() {
	        return this.children()[0];
	    },
	    last: function() {
	        return this.children()[this.children().length - 1];
	    },
	    next: function() {
	        var self = this;
	        for (;;) {
	            var parent = self.parent();
	            if (!parent) {
	                return null;
	            }
	            var siblings = parent.children();
	            var next = siblings[siblings.indexOf(self) + 1];
	            if (next) {
	                for (;;)  {
	                    var first = next.first();
	                    if (!first) {
	                        break;
	                    }
	                    next = first;
	                }
	                return next;
	            }
	            self = parent;
	        }
	    },
	    previous: function() {
	        var parent = this.parent();
	        if (!parent) {
	            return null;
	        }
	        var siblings = parent.children();
	        var prev = siblings[siblings.indexOf(this) - 1];
	        if (prev) {
	            return prev;
	        }
	        var prevParent = parent.previous();
	        return !prevParent ? null : prevParent.last();
	    },
	    byOrdinal: function(index) {
	        var found = null;
	        if (this.children().some(function(child) {
	            if (index >= child.ordinal && index < child.ordinal + child.length) {
	                found = child.byOrdinal(index);
	                if (found) {
	                    return true;
	                }
	            }
	        })) {
	            return found;
	        }
	        return this;
	    },
	    byCoordinate: function(x, y) {
	        var found;
	        this.children().some(function(child) {
	            var b = child.bounds();
	            if (b.contains(x, y)) {
	                found = child.byCoordinate(x, y);
	                if (found) {
	                    return true;
	                }
	            }
	        });
	        if (!found) {
	            found = this.last();
	            while (found) {
	                var next = found.last();
	                if (!next) {
	                    break;
	                }
	                found = next;
	            }
	            var foundNext = found.next();
	            if (foundNext && foundNext.block) {
	                found = foundNext;
	            }
	        }
	        return found;
	    },
	    draw: function(ctx, viewPort) {
	        this.children().forEach(function(child) {
	            child.draw(ctx, viewPort);
	        });
	    },
	    parentOfType: function(type) {
	        var p = this.parent();
	        return p && (p.type === type ? p : p.parentOfType(type));
	    },
	    bounds: function() {
	        var l = this._left, t = this._top, r = 0, b = 0;
	        this.children().forEach(function(child) {
	            var cb = child.bounds();
	            l = Math.min(l, cb.l);
	            t = Math.min(t, cb.t);
	            r = Math.max(r, cb.l + cb.w);
	            b = Math.max(b, cb.t + cb.h);
	        });
	        return rect(l, t, r - l, b - t);
	    }
	};

	exports.derive = function(methods) {
	    return util.derive(exports.prototype, methods);
	};

	var generic = exports.derive({
	    children: function() {
	        return this._children;
	    },
	    parent: function() {
	        return this._parent;
	    },
	    finalize: function(startDecrement, lengthIncrement) {
	        var start = Number.MAX_VALUE, end = 0;
	        this._children.forEach(function(child) {
	            start = Math.min(start, child.ordinal);
	            end = Math.max(end, child.ordinal + child.length);
	        });
	        Object.defineProperty(this, 'ordinal', { value: start - (startDecrement || 0) });
	        Object.defineProperty(this, 'length', { value: (lengthIncrement || 0) + end - start });
	    }
	});

	exports.generic = function(type, parent, left, top) {
	    return Object.create(generic, {
	        type: { value: type },
	        _children: { value: [] },
	        _parent: { value: parent },
	        _left: { value: typeof left === 'number' ? left : Number.MAX_VALUE },
	        _top: { value: typeof top === 'number' ? top : Number.MAX_VALUE }
	    });
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	(function(exportFunction) {

	    function toFunc(valOrFunc, bindThis) {
	        if (typeof valOrFunc !== 'function') {
	            return Array.isArray(valOrFunc)
	                ? function(emit) {
	                    return valOrFunc.some(emit);
	                } : function(emit) {
	                    return emit(valOrFunc);
	                };
	        }
	        if (bindThis) {
	            return function(emit, value) {
	                valOrFunc.call(bindThis, emit, value);
	            }
	        }
	        return valOrFunc;
	    }

	    function Per(valOrFunc, bindThis) {
	        this.forEach = toFunc(valOrFunc, bindThis);
	    }

	    function blank(emit, value) {
	        emit(value);
	    }

	    function create(valOrFunc, bindThis) {
	        if (arguments.length === 0) {
	            return new Per(blank);
	        }
	        if (valOrFunc && valOrFunc instanceof Per) {
	            return valOrFunc;
	        }
	        return new Per(valOrFunc, bindThis)
	    }

	    Per.prototype.per = function(valOrFunc, bindThis) {
	        var first = this.forEach;
	        var second = toFunc(valOrFunc && valOrFunc.forEach || valOrFunc, bindThis);
	        return create(function(emit, value) {
	            return first(function(firstVal) {
	                return second(emit, firstVal);
	            }, value);
	        });
	    };

	    function lambda(expression) {
	        return typeof expression === 'string'
	            ? new Function('x', 'return ' + expression)
	            : expression;
	    }

	    Per.prototype.map = function(mapFunc) {
	        mapFunc = lambda(mapFunc);
	        return this.per(function(emit, value) {
	            return emit(mapFunc(value));
	        });
	    };

	    Per.prototype.filter = function(predicate) {
	        predicate = lambda(predicate);
	        return this.per(function(emit, value) {
	            if (predicate(value)) {
	                return emit(value);
	            }
	        });
	    };

	    Per.prototype.concat = function(second, secondThis) {        
	        if (second instanceof Per) {
	            second = second.forEach;
	        } else {
	            second = toFunc(second, secondThis);
	        }
	        var first = this.forEach;
	        return create(function(emit, value) {
	            first(emit, value);
	            second(emit, value);			
	        });
	    };

	    Per.prototype.skip = function(count) {
	        return this.per(function(emit, value) {
	            if (count > 0) {
	                count--;
	                return false;
	            }
	            return emit(value);
	        });
	    };

	    Per.prototype.take = function(count) {
	        return this.per(function(emit, value) {
	            if (count <= 0) {
	                return true;
	            }
	            count--;
	            return emit(value);
	        });
	    };

	    Per.prototype.listen = function(untilFunc) {
	        return this.per(function(emit, value) {
	            if (untilFunc(value)) {
	                return true;
	            }
	            return emit(value);
	        });
	    };

	    Per.prototype.flatten = function() {
	        return this.per(function(emit, array) {
	            return !Array.isArray(array)
	                ? emit(array)
	                : array.some(function(value) {
	                    return emit(value);
	                });
	        });
	    };

	    Per.prototype.reduce = function(reducer, seed) {
	        var result = seed, started = arguments.length == 2;
	        return this.per(function(emit, value) {
	            result = started ? reducer(result, value) : value;
	            emit(result);
	            started = true;
	        });
	    };

	    Per.prototype.multicast = function(destinations) {
	        if (arguments.length !== 1) {
	            destinations = Array.prototype.slice.call(arguments, 0);
	        }
	        destinations = destinations.map(function(destination) {
	            return typeof destination === 'function' ? destination :
	                   destination instanceof Per ? destination.forEach :
	                   ignore;
	        });
	        return this.listen(function(value) {
	            var quit = true;
	            destinations.forEach(function(destination) {
	                if (!destination(ignore, value)) {
	                    quit = false;
	                }
	            });
	            return quit;
	        });
	    };

	    function optionalLimit(limit) {
	        return typeof limit != 'number' ? Number.MAX_VALUE : limit;
	    }

	    /*  A passive observer - gathers results into the specified array, but
	        otherwise has no effect on the stream of values
	     */
	    Per.prototype.into = function(ar, limit) {
	        if (!Array.isArray(ar)) {
	            throw new Error("into expects an array");
	        }
	        limit = optionalLimit(limit);
	        return this.listen(function(value) {
	            if (limit <= 0) {
	                return true;
	            }
	            ar.push(value);
	            limit--;
	        });
	    };

	    function setOrCall(obj, name) {
	        var prop = obj[name];
	        if (typeof prop === 'function') {
	            return prop;
	        }
	        return function(val) {
	            obj[name] = val;
	        }
	    }

	    /*  Tracks first, last and count for the values as they go past,
	        up to an optional limit (see 'first' and 'last' methods).
	     */
	    Per.prototype.monitor = function(data) {
	        var n = 0;
	        var count = setOrCall(data, 'count'),
	            first = setOrCall(data, 'first'),
	            last = setOrCall(data, 'last'),
	            limit = data.limit;
	        if (typeof limit != 'number') {
	            limit = Number.MAX_VALUE;
	        }
	        if (limit < 1) {
	            return this;
	        }
	        return this.listen(function(value) {
	            if (n === 0) {
	                first(value);
	            }
	            n++;
	            count(n);
	            last(value);
	            if (n >= limit) {
	                return true;
	            }
	        });
	    };

	    /*  Send a value into the pipeline without caring what emerges
	        (only useful if you set up monitors and/or intos, or
	        similar stateful observers).
	     */
	    function ignore() { }
	    Per.prototype.submit = function(value) {
	        return this.forEach(ignore, value);
	    };

	    Per.prototype.all = function() {
	        var results = [];
	        this.into(results).submit();
	        return results;
	    };

	    Per.prototype.first = function() {
	        var results = { limit: 1 };
	        this.monitor(results).submit();
	        return results.count > 0 ? results.first : (void 0);
	    };

	    Per.prototype.last = function() {
	        var results = {};
	        this.monitor(results).submit();
	        return results.count > 0 ? results.last : (void 0);
	    };

	    function truthy(value) { return !!value; }
	    Per.prototype.truthy = function() { return this.filter(truthy); };

	    function min(l, r) { return Math.min(l, r); }
	    Per.prototype.min = function() { return this.reduce(min, Number.MAX_VALUE); };

	    function max(l, r) { return Math.max(l, r); }
	    Per.prototype.max = function() { return this.reduce(max, Number.MIN_VALUE); };

	    function sum(l, r) { return l + r }
	    Per.prototype.sum = function() { return this.reduce(sum, 0); };

	    function and(l, r) { return !!(l && r) }
	    Per.prototype.and = function() { return this.reduce(and, true); };

	    function or(l, r) { return !!(l || r) }
	    Per.prototype.or = function() { return this.reduce(or, false); };

	    function not(v) { return !v }
	    Per.prototype.not = function() { return this.map(not); };

	    create.pulse = function(ms) {
	        var counter = 0;
	        return create(function(emit) {
	            function step() {
	                if (emit(counter++) !== true) {
	                    setTimeout(step, ms);
	                }
	            }
	            step();
	        });
	    };

	    exportFunction(create);

	})(function(per) {
	    if (false) {
	        this['per'] = per;
	    } else {
	        module.exports = per;
	    }
	});


/***/ },
/* 29 */
/***/ function(module, exports) {

	exports.formattingKeys = [ 'bold', 'italic', 'underline', 'strikeout', 'color', 'font', 'size', 'align', 'script' ];

	exports.defaultFormatting = {
	    size: 10,
	    font: 'sans-serif',
	    color: 'black',
	    bold: false,
	    italic: false,
	    underline: false,
	    strikeout: false,
	    align: 'left',
	    script: 'normal'
	};

	exports.sameFormatting = function(run1, run2) {
	    return exports.formattingKeys.every(function(key) {
	        return run1[key] === run2[key];
	    })
	};

	exports.clone = function(run) {
	    var result = { text: run.text };
	    exports.formattingKeys.forEach(function(key) {
	        var val = run[key];
	        if (val && val != exports.defaultFormatting[key]) {
	            result[key] = val;
	        }
	    });
	    return result;
	};

	exports.multipleValues = {};

	exports.merge = function(run1, run2) {
	    if (arguments.length === 1) {
	        return Array.isArray(run1) ? run1.reduce(exports.merge) : run1;
	    }
	    if (arguments.length > 2) {
	        return exports.merge(Array.prototype.slice.call(arguments, 0));
	    }
	    var merged = {};
	    exports.formattingKeys.forEach(function(key) {
	        if (key in run1 || key in run2) {
	            if (run1[key] === run2[key]) {
	                merged[key] = run1[key];
	            } else {
	                merged[key] = exports.multipleValues;
	            }
	        }
	    });
	    return merged;
	};

	exports.format = function(run, template) {
	    if (Array.isArray(run)) {
	        run.forEach(function(r) {
	            exports.format(r, template);
	        });
	    } else {
	        Object.keys(template).forEach(function(key) {
	            if (template[key] !== exports.multipleValues) {
	                run[key] = template[key];
	            }
	        });
	    }
	};

	exports.consolidate = function() {
	    var current;
	    return function (emit, run) {
	        if (!current || !exports.sameFormatting(current, run) ||
	            (typeof current.text != 'string') ||
	            (typeof run.text != 'string')) {
	            current = exports.clone(run);
	            emit(current);
	        } else {
	            current.text += run.text;
	        }
	    };
	};

	exports.getPlainText = function(run) {
	    if (typeof run.text === 'string') {
	        return run.text;
	    }
	    if (Array.isArray(run.text)) {
	        var str = [];
	        run.text.forEach(function(piece) {
	            str.push(exports.getPiecePlainText(piece));
	        });
	        return str.join('');
	    }
	    return '_';
	};

	/*  The text property of a run can be an ordinary string, or a "character object",
	 or it can be an array containing strings and "character objects".

	 A character object is not a string, but is treated as a single character.

	 We abstract over this to provide the same string-like operations regardless.
	 */
	exports.getPieceLength = function(piece) {
	    return piece.length || 1; // either a string or something like a character
	};

	exports.getPiecePlainText = function(piece) {
	    return piece.length ? piece : '_';
	};

	exports.getTextLength = function(text) {
	    if (typeof text === 'string') {
	        return text.length;
	    }
	    if (Array.isArray(text)) {
	        var length = 0;
	        text.forEach(function(piece) {
	            length += exports.getPieceLength(piece);
	        });
	        return length;
	    }
	    return 1;
	};

	exports.getSubText = function(emit, text, start, count) {
	    if (count === 0) {
	        return;
	    }
	    if (typeof text === 'string') {
	        emit(text.substr(start, count));
	        return;
	    }
	    if (Array.isArray(text)) {
	        var pos = 0;
	        text.some(function(piece) {
	            if (count <= 0) {
	                return true;
	            }
	            var pieceLength = exports.getPieceLength(piece);
	            if (pos + pieceLength > start) {
	                if (pieceLength === 1) {
	                    emit(piece);
	                    count -= 1;
	                } else {
	                    var str = piece.substr(Math.max(0, start - pos), count);
	                    emit(str);
	                    count -= str.length;
	                }
	            }
	            pos += pieceLength;
	        });
	        return;
	    }
	    emit(text);
	};

	exports.getTextChar = function(text, offset) {
	    var result;
	    exports.getSubText(function(c) { result = c }, text, offset, 1);
	    return result;
	};

	exports.pieceCharacters = function(each, piece) {
	    if (typeof piece === 'string') {
	        for (var c = 0; c < piece.length; c++) {
	            each(piece[c]);
	        }
	    } else {
	        each(piece);
	    }
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	
	var prototype = {
	    contains: function(x, y) {
	        return x >= this.l && x < (this.l + this.w) &&
	            y >= this.t && y < (this.t + this.h);

	    },
	    stroke: function(ctx) {
	        ctx.strokeRect(this.l, this.t, this.w, this.h);
	    },
	    fill: function(ctx) {
	        ctx.fillRect(this.l, this.t, this.w, this.h);
	    },
	    offset: function(x, y) {
	        return rect(this.l + x, this.t + y, this.w, this.h);
	    },
	    equals: function(other) {
	        return this.l === other.l && this.t === other.t &&
	               this.w === other.w && this.h === other.h;
	    },
	    center: function() {
	        return { x: this.l + this.w/2, y: this.t + this.h/2 };
	    }
	};

	var rect = module.exports = function(l, t, w, h) {
	    return Object.create(prototype, {
	        l: { value: l },
	        t: { value: t },
	        w: { value: w },
	        h: { value: h },
	        r: { value: l + w },
	        b: { value: t + h }
	    });
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	exports.event = function() {
	    var handlers = [];

	    var subscribe = function(handler) {
	        handlers.push(handler);
	    };

	    subscribe.fire = function() {
	        var args = Array.prototype.slice.call(arguments, 0);
	        handlers.forEach(function(handler) {
	            handler.apply(null, args);
	        });
	    };

	    return subscribe;
	};

	exports.derive = function(prototype, methods) {
	    var properties = {};
	    Object.keys(methods).forEach(function(name) {
	        properties[name] = { value: methods[name] };
	    });
	    return Object.create(prototype, properties);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var per = __webpack_require__(28);
	var carotaDoc = __webpack_require__(33);
	var dom = __webpack_require__(45);
	var rect = __webpack_require__(30);

	setInterval(function() {
	    var editors = document.querySelectorAll('.carotaEditorCanvas');

	    var ev = document.createEvent('Event');
	    ev.initEvent('carotaEditorSharedTimer', true, true);

	    // not in IE, apparently:
	    // var ev = new CustomEvent('carotaEditorSharedTimer');

	    for (var n = 0; n < editors.length; n++) {
	        editors[n].dispatchEvent(ev);
	    }
	}, 200);

	exports.create = function(element) {

	    // We need the host element to be a container:
	    if (dom.effectiveStyle(element, 'position') !== 'absolute') {
	        element.style.position = 'relative';
	    }

	    element.innerHTML =
	        '<div class="carotaSpacer">' +
	            '<canvas width="100" height="100" class="carotaEditorCanvas" style="position: absolute;"></canvas>' +
	        '</div>' +
	        '<div class="carotaTextArea" style="overflow: hidden; position: absolute; height: 0;">' +
	            '<textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" ' +
	            'style="position: absolute; padding: 0px; width: 1000px; height: 1em; ' +
	            'outline: none; font-size: 4px;"></textarea>'
	        '</div>';

	    var canvas = element.querySelector('canvas'),
	        spacer = element.querySelector('.carotaSpacer'),
	        textAreaDiv = element.querySelector('.carotaTextArea'),
	        textArea = element.querySelector('textarea'),
	        doc = carotaDoc(),
	        keyboardSelect = 0,
	        keyboardX = null, nextKeyboardX = null,
	        selectDragStart = null,
	        focusChar = null,
	        textAreaContent = '',
	        richClipboard = null,
	        plainClipboard = null;
	    
	    var toggles = {
	        66: 'bold',
	        73: 'italic',
	        85: 'underline',
	        83: 'strikeout'
	    };

	    var exhausted = function(ordinal, direction) {
	        return direction < 0 ? ordinal <= 0 : ordinal >= doc.frame.length - 1;
	    };

	    var differentLine = function(caret1, caret2) {
	        return (caret1.b <= caret2.t) ||
	               (caret2.b <= caret1.t);
	    };

	    var changeLine = function(ordinal, direction) {

	        var originalCaret = doc.getCaretCoords(ordinal), newCaret;
	        nextKeyboardX = (keyboardX !== null) ? keyboardX : originalCaret.l;

	        while (!exhausted(ordinal, direction)) {
	            ordinal += direction;
	            newCaret = doc.getCaretCoords(ordinal);
	            if (differentLine(newCaret, originalCaret)) {
	                break;
	            }
	        }

	        originalCaret = newCaret;
	        while (!exhausted(ordinal, direction)) {
	            if ((direction > 0 && newCaret.l >= nextKeyboardX) ||
	                (direction < 0 && newCaret.l <= nextKeyboardX)) {
	                break;
	            }

	            ordinal += direction;
	            newCaret = doc.getCaretCoords(ordinal);
	            if (differentLine(newCaret, originalCaret)) {
	                ordinal -= direction;
	                break;
	            }
	        }

	        return ordinal;
	    };

	    var endOfline = function(ordinal, direction) {
	        var originalCaret = doc.getCaretCoords(ordinal), newCaret;
	        while (!exhausted(ordinal, direction)) {
	            ordinal += direction;
	            newCaret = doc.getCaretCoords(ordinal);
	            if (differentLine(newCaret, originalCaret)) {
	                ordinal -= direction;
	                break;
	            }
	        }
	        return ordinal;
	    };

	    var handleKey = function(key, selecting, ctrlKey) {
	        var start = doc.selection.start,
	            end = doc.selection.end,
	            length = doc.frame.length - 1,
	            handled = false;

	        nextKeyboardX = null;

	        if (!selecting) {
	            keyboardSelect = 0;
	        } else if (!keyboardSelect) {
	            switch (key) {
	                case 37: // left arrow
	                case 38: // up - find character above
	                case 36: // start of line
	                case 33: // page up
	                    keyboardSelect = -1;
	                    break;
	                case 39: // right arrow
	                case 40: // down arrow - find character below
	                case 35: // end of line
	                case 34: // page down
	                    keyboardSelect = 1;
	                    break;
	            }
	        }

	        var ordinal = keyboardSelect === 1 ? end : start;

	        var changingCaret = false;
	        switch (key) {
	            case 37: // left arrow
	                if (!selecting && start != end) {
	                    ordinal = start;
	                } else {
	                    if (ordinal > 0) {
	                        if (ctrlKey) {
	                            var wordInfo = doc.wordContainingOrdinal(ordinal);
	                            if (wordInfo.ordinal === ordinal) {
	                                ordinal = wordInfo.index > 0 ? doc.wordOrdinal(wordInfo.index - 1) : 0;
	                            } else {
	                                ordinal = wordInfo.ordinal;
	                            }
	                        } else {
	                            ordinal--;
	                        }
	                    }
	                }
	                changingCaret = true;
	                break;
	            case 39: // right arrow
	                if (!selecting && start != end) {
	                    ordinal = end;
	                } else {
	                    if (ordinal < length) {
	                        if (ctrlKey) {
	                            var wordInfo = doc.wordContainingOrdinal(ordinal);
	                            ordinal = wordInfo.ordinal + wordInfo.word.length;
	                        } else {
	                            ordinal++;
	                        }
	                    }
	                }
	                changingCaret = true;
	                break;
	            case 40: // down arrow - find character below
	                ordinal = changeLine(ordinal, 1);
	                changingCaret = true;
	                break;
	            case 38: // up - find character above
	                ordinal = changeLine(ordinal, -1);
	                changingCaret = true;
	                break;
	            case 36: // start of line
	                ordinal = endOfline(ordinal, -1);
	                changingCaret = true;
	                break;
	            case 35: // end of line
	                ordinal = endOfline(ordinal, 1);
	                changingCaret = true;
	                break;
	            case 33: // page up
	                ordinal = 0;
	                changingCaret = true;
	                break;
	            case 34: // page down
	                ordinal = length;
	                changingCaret = true;
	                break;
	            case 8: // backspace
	                if (start === end && start > 0) {
	                    doc.range(start - 1, start).clear();
	                    focusChar = start - 1;
	                    doc.select(focusChar, focusChar);
	                    handled = true;
	                }
	                break;
	            case 46: // del
	                if (start === end && start < length) {
	                    doc.range(start, start + 1).clear();
	                    handled = true;
	                }
	                break;
	            case 90: // Z undo
	                if (ctrlKey) {
	                    handled = true;
	                    doc.performUndo();
	                }
	                break;
	            case 89: // Y undo
	                if (ctrlKey) {
	                    handled = true;
	                    doc.performUndo(true);
	                }
	                break;
	            case 65: // A select all
	                if (ctrlKey) {
	                    handled = true;
	                    doc.select(0, length);
	                }
	                break;
	            case 67: // C - copy to clipboard
	            case 88: // X - cut to clipboard
	                if (ctrlKey) {
	                    // Allow standard handling to take place as well
	                    richClipboard = doc.selectedRange().save();
	                    plainClipboard = doc.selectedRange().plainText();
	                }
	                break;
	        }

	        var toggle = toggles[key];
	        if (ctrlKey && toggle) {
	            var selRange = doc.selectedRange();
	            selRange.setFormatting(toggle, selRange.getFormatting()[toggle] !== true);
	            paint();
	            handled = true;
	        }

	        if (changingCaret) {
	            switch (keyboardSelect) {
	                case 0:
	                    start = end = ordinal;
	                    break;
	                case -1:
	                    start = ordinal;
	                    break;
	                case 1:
	                    end = ordinal;
	                    break;
	            }

	            if (start === end) {
	                keyboardSelect = 0;
	            } else {
	                if (start > end) {
	                    keyboardSelect = -keyboardSelect;
	                    var t = end;
	                    end = start;
	                    start = t;
	                }
	            }
	            focusChar = ordinal;
	            doc.select(start, end);
	            handled = true;
	        }

	        keyboardX = nextKeyboardX;
	        return handled;
	    };

	    dom.handleEvent(textArea, 'keydown', function(ev) {
	        if (handleKey(ev.keyCode, ev.shiftKey, ev.ctrlKey)) {
	            return false;
	        }
	        console.log(ev.which);
	    });

	    var verticalAlignment = 'top';
	    
	    doc.setVerticalAlignment = function(va) {
	        verticalAlignment = va;
	        paint();
	    }

	    function getVerticalOffset() {
	        var docHeight = doc.frame.bounds().h;
	        if (docHeight < element.clientHeight) { 
	            switch (verticalAlignment) {
	                case 'middle':
	                    return (element.clientHeight - docHeight) / 2;
	                case 'bottom':
	                    return element.clientHeight - docHeight;
	            }
	        }
	        return 0;
	    }

	    var paint = function() {

	        var availableWidth = element.clientWidth * 1; // adjust to 0.5 to see if we draw in the wrong places!
	        if (doc.width() !== availableWidth) {
	            doc.width(availableWidth);
	        }

	        var docHeight = doc.frame.bounds().h;

	        var dpr = Math.max(1, window.devicePixelRatio || 1);
	        
	        var logicalWidth = Math.max(doc.frame.actualWidth(), element.clientWidth),
	            logicalHeight = element.clientHeight;
	        
	        canvas.width = dpr * logicalWidth;
	        canvas.height = dpr * logicalHeight;
	        canvas.style.width = logicalWidth + 'px';
	        canvas.style.height = logicalHeight + 'px';
	        
	        canvas.style.top = element.scrollTop + 'px';
	        spacer.style.width = logicalWidth + 'px';
	        spacer.style.height = Math.max(docHeight, element.clientHeight) + 'px';

	        if (docHeight < (element.clientHeight - 50) &&
	            doc.frame.actualWidth() <= availableWidth) {
	            element.style.overflow = 'hidden';
	        } else {
	            element.style.overflow = 'auto';
	        }

	        var ctx = canvas.getContext('2d');
	        ctx.scale(dpr, dpr);

	        ctx.clearRect(0, 0, logicalWidth, logicalHeight);
	        ctx.translate(0, getVerticalOffset() - element.scrollTop);
	        
	        doc.draw(ctx, rect(0, element.scrollTop, logicalWidth, logicalHeight));
	        doc.drawSelection(ctx, selectDragStart || (document.activeElement === textArea));
	    };

	    dom.handleEvent(element, 'scroll', paint);

	    dom.handleEvent(textArea, 'input', function() {
	        var newText = textArea.value;
	        if (textAreaContent != newText) {
	            textAreaContent = '';
	            textArea.value = '';
	            if (newText === plainClipboard) {
	                newText = richClipboard;
	            }
	            doc.insert(newText);
	        }
	    });

	    var updateTextArea = function() {
	        focusChar = focusChar === null ? doc.selection.end : focusChar;
	        var endChar = doc.byOrdinal(focusChar);
	        focusChar = null;
	        if (endChar) {
	            var bounds = endChar.bounds();
	            textAreaDiv.style.left = bounds.l + 'px';
	            textAreaDiv.style.top = bounds.t + 'px';
	            textArea.focus();
	            var scrollDownBy = Math.max(0, bounds.t + bounds.h -
	                    (element.scrollTop + element.clientHeight));
	            if (scrollDownBy) {
	                element.scrollTop += scrollDownBy;
	            }
	            var scrollUpBy = Math.max(0, element.scrollTop - bounds.t);
	            if (scrollUpBy) {
	                element.scrollTop -= scrollUpBy;
	            }
	            var scrollRightBy = Math.max(0, bounds.l -
	                (element.scrollLeft + element.clientWidth));
	            if (scrollRightBy) {
	                element.scrollLeft += scrollRightBy;
	            }
	            var scrollLeftBy = Math.max(0, element.scrollLeft - bounds.l);
	            if (scrollLeftBy) {
	                element.scrollLeft -= scrollLeftBy;
	            }
	        }
	        textAreaContent = doc.selectedRange().plainText();
	        textArea.value = textAreaContent;
	        textArea.select();

	        setTimeout(function() {
	            textArea.focus();
	        }, 10);
	    };

	    doc.selectionChanged(function(getformatting, takeFocus) {
	        paint();
	        if (!selectDragStart) {
	            if (takeFocus !== false) {
	                updateTextArea();
	            }
	        }
	    });

	    function registerMouseEvent(name, handler) {
	        dom.handleMouseEvent(spacer, name, function(ev, x, y) {
	            handler(doc.byCoordinate(x, y - getVerticalOffset()));
	        });
	    }

	    registerMouseEvent('mousedown', function(node) {
	        selectDragStart = node.ordinal;
	        doc.select(node.ordinal, node.ordinal);
	        keyboardX = null;
	    });

	    registerMouseEvent('dblclick', function(node) {
	        node = node.parent();
	        if (node) {
	            doc.select(node.ordinal, node.ordinal +
	                (node.word ? node.word.text.length : node.length));
	        }
	    });

	    registerMouseEvent('mousemove', function(node) {
	        if (selectDragStart !== null) {
	            if (node) {
	                focusChar = node.ordinal;
	                if (selectDragStart > node.ordinal) {
	                    doc.select(node.ordinal, selectDragStart);
	                } else {
	                    doc.select(selectDragStart, node.ordinal);
	                }
	            }
	        }
	    });

	    registerMouseEvent('mouseup', function(node) {
	        selectDragStart = null;
	        keyboardX = null;
	        updateTextArea();
	        textArea.focus();
	    });

	    var nextCaretToggle = new Date().getTime(),
	        focused = false,
	        cachedWidth = element.clientWidth,
	        cachedHeight = element.clientHeight;

	    var update = function() {
	        var requirePaint = false;
	        var newFocused = document.activeElement === textArea;
	        if (focused !== newFocused) {
	            focused = newFocused;
	            requirePaint = true;
	        }

	        var now = new Date().getTime();
	        if (now > nextCaretToggle) {
	            nextCaretToggle = now + 500;
	            if (doc.toggleCaret()) {
	                requirePaint = true;
	            }
	        }

	        if (element.clientWidth !== cachedWidth ||
	            element.clientHeight !== cachedHeight) {
	            requirePaint = true;
	            cachedWidth =element.clientWidth;
	            cachedHeight = element.clientHeight;
	        }

	        if (requirePaint) {
	            paint();
	        }
	    };

	    dom.handleEvent(canvas, 'carotaEditorSharedTimer', update);
	    update();

	    doc.sendKey = handleKey;
	    return doc;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var per = __webpack_require__(28);
	var characters = __webpack_require__(34);
	var split = __webpack_require__(35);
	var word = __webpack_require__(36);
	var node = __webpack_require__(27);
	var runs = __webpack_require__(29);
	var range = __webpack_require__(39);
	var util = __webpack_require__(31);
	var frame = __webpack_require__(40);
	var codes = __webpack_require__(44);
	var rect = __webpack_require__(30);

	var makeEditCommand = function(doc, start, count, words) {
	    var selStart = doc.selection.start, selEnd = doc.selection.end;
	    return function(log) {
	        doc._wordOrdinals = [];
	        var oldWords = Array.prototype.splice.apply(doc.words, [start, count].concat(words));
	        log(makeEditCommand(doc, start, words.length, oldWords));
	        doc._nextSelection = { start: selStart, end: selEnd };
	    };
	};

	var makeTransaction = function(perform) {
	    var commands = [];
	    var log = function(command) {
	        commands.push(command);
	        log.length = commands.length;
	    };
	    perform(log);

	    return function(outerLog) {
	        outerLog(makeTransaction(function(innerLog) {
	            while (commands.length) {
	                commands.pop()(innerLog);
	            }
	        }));
	    };
	};

	var isBreaker = function(word) {
	    if (word.isNewLine()) {
	        return true;
	    }
	    var code = word.code();
	    return !!(code && (code.block || code.eof));
	};

	var prototype = node.derive({
	    load: function(runs, takeFocus) {
	        var self = this;
	        this.undo = [];
	        this.redo = [];
	        this._wordOrdinals = [];
	        this.words = per(characters(runs)).per(split(self.codes)).map(function(w) {
	            return word(w, self.codes);
	        }).all();
	        this.layout();
	        this.contentChanged.fire();
	        this.select(0, 0, takeFocus);
	    },
	    layout: function() {
	        this.frame = null;
	        try {
	            this.frame = per(this.words).per(frame(0, 0, this._width, 0, this)).first();
	        } catch (x) {
	            console.error(x);
	        }
	        if (!this.frame) {
	            console.error('A bug somewhere has produced an invalid state - rolling back');
	            this.performUndo();
	        } else if (this._nextSelection) {
	            var next = this._nextSelection;
	            delete this._nextSelection;
	            this.select(next.start, next.end);
	        }
	    },
	    range: function(start, end) {
	        return range(this, start, end);
	    },
	    documentRange: function() {
	        return this.range(0, this.frame.length - 1);
	    },
	    selectedRange: function() {
	        return this.range(this.selection.start, this.selection.end);
	    },
	    save: function() {
	        return this.documentRange().save();
	    },
	    paragraphRange: function(start, end) {
	        var i;

	        // find the character after the nearest breaker before start
	        var startInfo = this.wordContainingOrdinal(start);
	        start = 0;
	        if (startInfo && !isBreaker(startInfo.word)) {
	            for (i = startInfo.index; i > 0; i--) {
	                if (isBreaker(this.words[i - 1])) {
	                    start = this.wordOrdinal(i);
	                    break;
	                }
	            }
	        }

	        // find the nearest breaker after end
	        var endInfo = this.wordContainingOrdinal(end);
	        end = this.frame.length - 1;
	        if (endInfo && !isBreaker(endInfo.word)) {
	            for (i = endInfo.index; i < this.words.length; i++) {
	                if (isBreaker(this.words[i])) {
	                    end = this.wordOrdinal(i);
	                    break;
	                }
	            }
	        }

	        return this.range(start, end);
	    },
	    insert: function(text, takeFocus) {
	        this.select(this.selection.end + this.selectedRange().setText(text), null, takeFocus);
	    },
	    modifyInsertFormatting: function(attribute, value) {
	        this.nextInsertFormatting[attribute] = value;
	        this.notifySelectionChanged();
	    },
	    applyInsertFormatting: function(text) {
	        var formatting = this.nextInsertFormatting;
	        var insertFormattingProperties = Object.keys(formatting);
	        if (insertFormattingProperties.length) {
	            text.forEach(function(run) {
	                insertFormattingProperties.forEach(function(property) {
	                    run[property] = formatting[property];
	                });
	            });
	        }
	    },
	    wordOrdinal: function(index) {
	        if (index < this.words.length) {
	            var cached = this._wordOrdinals.length;
	            if (cached < (index + 1)) {
	                var o = cached > 0 ? this._wordOrdinals[cached - 1] : 0;
	                for (var n = cached; n <= index; n++) {
	                    this._wordOrdinals[n] = o;
	                    o += this.words[n].length;
	                }
	            }
	            return this._wordOrdinals[index];
	        }
	    },
	    wordContainingOrdinal: function(ordinal) {
	        // could rewrite to be faster using binary search over this.wordOrdinal
	        var result;
	        var pos = 0;
	        this.words.some(function(word, i) {
	            if (ordinal >= pos && ordinal < (pos + word.length)) {
	                result = {
	                    word: word,
	                    ordinal: pos,
	                    index: i,
	                    offset: ordinal - pos
	                };
	                return true;
	            }
	            pos += word.length;
	        });
	        return result;
	    },
	    runs: function(emit, range) {
	        var startDetails = this.wordContainingOrdinal(Math.max(0, range.start)),
	            endDetails = this.wordContainingOrdinal(Math.min(range.end, this.frame.length - 1));
	        if (startDetails.index === endDetails.index) {
	            startDetails.word.runs(emit, {
	                start: startDetails.offset,
	                end: endDetails.offset
	            });
	        } else {
	            startDetails.word.runs(emit, { start: startDetails.offset });
	            for (var n = startDetails.index + 1; n < endDetails.index; n++) {
	                this.words[n].runs(emit);
	            }
	            endDetails.word.runs(emit, { end: endDetails.offset });
	        }
	    },
	    spliceWordsWithRuns: function(wordIndex, count, runs) {
	        var self = this;

	        var newWords = per(characters(runs))
	            .per(split(self.codes))
	            .truthy()
	            .map(function(w) {
	                return word(w, self.codes);
	            })
	            .all();

	        // Check if old or new content contains any fancy control codes:
	        var runFilters = false;

	        if ('_filtersRunning' in self) {
	            self._filtersRunning++;
	        } else {
	            for (var n = 0; n < count; n++) {
	                if (this.words[wordIndex + n].code()) {
	                    runFilters = true;
	                }
	            }
	            if (!runFilters) {
	                runFilters = newWords.some(function(word) {
	                    return !!word.code();
	                });
	            }
	        }

	        this.transaction(function(log) {
	            makeEditCommand(self, wordIndex, count, newWords)(log);
	            if (runFilters) {
	                self._filtersRunning = 0;
	                try {
	                    for (;;) {
	                        var spliceCount = self._filtersRunning;
	                        if (!self.editFilters.some(function(filter) {
	                            filter(self);
	                            return spliceCount !== self._filtersRunning;
	                        })) {
	                            break; // No further changes were made
	                        }
	                    }
	                } finally {
	                    delete self._filtersRunning;
	                }
	            }
	        });
	    },
	    splice: function(start, end, text) {
	        if (typeof text === 'string') {
	            var sample = Math.max(0, start - 1);
	            var sampleRun = per({ start: sample, end: sample + 1 })
	                .per(this.runs, this)
	                .first();
	            text = [
	                sampleRun ? Object.create(sampleRun, { text: { value: text } }) : { text: text }
	            ];
	        } else if (!Array.isArray(text)) {
	            text = [{ text: text }];
	        }

	        this.applyInsertFormatting(text);

	        var startWord = this.wordContainingOrdinal(start),
	            endWord = this.wordContainingOrdinal(end);

	        var prefix;
	        if (start === startWord.ordinal) {
	            if (startWord.index > 0 && !isBreaker(this.words[startWord.index - 1])) {
	                startWord.index--;
	                var previousWord = this.words[startWord.index];
	                prefix = per({}).per(previousWord.runs, previousWord).all();
	            } else {
	                prefix = [];
	            }
	        } else {
	            prefix = per({ end: startWord.offset })
	                    .per(startWord.word.runs, startWord.word)
	                    .all();
	        }

	        var suffix;
	        if (end === endWord.ordinal) {
	            if ((end === this.frame.length - 1) || isBreaker(endWord.word)) {
	                suffix = [];
	                endWord.index--;
	            } else {
	                suffix = per({}).per(endWord.word.runs, endWord.word).all();
	            }
	        } else {
	            suffix = per({ start: endWord.offset })
	                    .per(endWord.word.runs, endWord.word)
	                    .all();
	        }

	        var oldLength = this.frame.length;

	        this.spliceWordsWithRuns(startWord.index, (endWord.index - startWord.index) + 1,
	            per(prefix).concat(text).concat(suffix).per(runs.consolidate()).all());

	        return this.frame ? (this.frame.length - oldLength) : 0;
	    },
	    registerEditFilter: function(filter) {
	        this.editFilters.push(filter);
	    },
	    width: function(width) {
	        if (arguments.length === 0) {
	            return this._width;
	        }
	        this._width = width;
	        this.layout();
	    },
	    children: function() {
	        return [this.frame];
	    },
	    toggleCaret: function() {
	        var old = this.caretVisible;
	        if (this.selection.start === this.selection.end) {
	            if (this.selectionJustChanged) {
	                this.selectionJustChanged = false;
	            } else {
	                this.caretVisible = !this.caretVisible;
	            }
	        }
	        return this.caretVisible !== old;
	    },
	    getCaretCoords: function(ordinal) {
	        var node = this.byOrdinal(ordinal), b;
	        if (node) {
	            if (node.block && ordinal > 0) {
	                var nodeBefore = this.byOrdinal(ordinal - 1);
	                if (nodeBefore.newLine) {
	                    var newLineBounds = nodeBefore.bounds();
	                    var lineBounds = nodeBefore.parent().parent().bounds();
	                    b = rect(lineBounds.l, lineBounds.b, 1, newLineBounds.h);
	                } else {
	                    b = nodeBefore.bounds();
	                    b = rect(b.r, b.t, 1, b.h);
	                }
	            } else {
	                b = node.bounds();
	                if (b.h) {
	                    b = rect(b.l, b.t, 1, b.h);
	                } else {
	                    b = rect(b.l, b.t, b.w, 1);
	                }
	            }
	            return b;
	        }
	    },
	    byCoordinate: function(x, y) {
	        var ordinal = this.frame.byCoordinate(x, y).ordinal;
	        var caret = this.getCaretCoords(ordinal);
	        while (caret.b <= y && ordinal < (this.frame.length - 1)) {
	            ordinal++;
	            caret = this.getCaretCoords(ordinal);
	        }
	        while (caret.t >= y && ordinal > 0) {
	            ordinal--;
	            caret = this.getCaretCoords(ordinal);
	        }
	        return this.byOrdinal(ordinal);
	    },
	    drawSelection: function(ctx, hasFocus) {
	        if (this.selection.end === this.selection.start) {
	            if (this.selectionJustChanged || hasFocus && this.caretVisible) {
	                var caret = this.getCaretCoords(this.selection.start);
	                if (caret) {
	                    ctx.save();
	                    ctx.fillStyle = 'black';
	                    caret.fill(ctx);
	                    ctx.restore();
	                }
	            }
	        } else {
	            ctx.save();
	            ctx.fillStyle = hasFocus ? 'rgba(0, 100, 200, 0.3)' : 'rgba(160, 160, 160, 0.3)';
	            this.selectedRange().parts(function(part) {
	                part.bounds(true).fill(ctx);
	            });
	            ctx.restore();
	        }
	    },
	    notifySelectionChanged: function(takeFocus) {
	        // When firing selectionChanged, we pass a function can be used
	        // to obtain the formatting, as this highly likely to be needed
	        var cachedFormatting = null;
	        var self = this;
	        var getFormatting = function() {
	            if (!cachedFormatting) {
	                cachedFormatting = self.selectedRange().getFormatting();
	            }
	            return cachedFormatting;
	        };
	        this.selectionChanged.fire(getFormatting, takeFocus);
	    },
	    select: function(ordinal, ordinalEnd, takeFocus) {
	        if (!this.frame) {
	            // Something has gone terribly wrong - doc.transaction will rollback soon
	            return;
	        }
	        this.selection.start = Math.max(0, ordinal);
	        this.selection.end = Math.min(
	            typeof ordinalEnd === 'number' ? ordinalEnd : this.selection.start,
	            this.frame.length - 1
	        );
	        this.selectionJustChanged = true;
	        this.caretVisible = true;
	        this.nextInsertFormatting = {};

	        /*  NB. always fire this even if the positions stayed the same. The
	            event means that the formatting of the selection has changed
	            (which can happen either by moving the selection range or by
	            altering the formatting)
	        */
	        this.notifySelectionChanged(takeFocus);
	    },
	    performUndo: function(redo) {
	        var fromStack = redo ? this.redo : this.undo,
	            toStack = redo ? this.undo : this.redo,
	            oldCommand = fromStack.pop();

	        if (oldCommand) {
	            oldCommand(function(newCommand) {
	                toStack.push(newCommand);
	            });
	            this.layout();
	            this.contentChanged.fire();
	        }
	    },
	    canUndo: function(redo) {
	        return redo ? !!this.redo.length : !!this.undo.length;
	    },
	    transaction: function(perform) {
	        if (this._currentTransaction) {
	            perform(this._currentTransaction);
	        } else {
	            var self = this;
	            while (this.undo.length > 50) {
	                self.undo.shift();
	            }
	            this.redo.length = 0;
	            var changed = false;
	            this.undo.push(makeTransaction(function(log) {
	                self._currentTransaction = log;
	                try {
	                    perform(log);
	                } finally {
	                    changed = log.length > 0;
	                    self._currentTransaction = null;
	                }
	            }));
	            if (changed) {
	                self.layout();
	                self.contentChanged.fire();
	            }
	        }
	    },
	    type: 'document'
	});

	exports = module.exports = function() {
	    var doc = Object.create(prototype);
	    doc._width = 0;
	    doc.selection = { start: 0, end: 0 };
	    doc.caretVisible = true;
	    doc.customCodes = function(code, data, allCodes) {};
	    doc.codes = function(code, data) {
	        var instance = codes(code, data, doc.codes);
	        return instance || doc.customCodes(code, data, doc.codes);
	    };
	    doc.selectionChanged = util.event();
	    doc.contentChanged = util.event();
	    doc.editFilters = [codes.editFilter];
	    doc.load([]);
	    return doc;
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var runs = __webpack_require__(29);

	var compatible = function(a, b) {
	    if (a._runs !== b._runs) {
	        throw new Error('Characters for different documents');
	    }
	};

	var prototype = {
	    equals: function(other) {
	        compatible(this, other);
	        return this._run === other._run && this._offset === other._offset;
	    },
	    cut: function(upTo) {
	        compatible(this, upTo);
	        var self = this;
	        return function(eachRun) {
	            for (var runIndex = self._run; runIndex <= upTo._run; runIndex++) {
	                var run = self._runs[runIndex];
	                if (run) {
	                    var start = (runIndex === self._run) ? self._offset : 0;
	                    var stop = (runIndex === upTo._run) ? upTo._offset : runs.getTextLength(run.text);
	                    if (start < stop) {
	                        runs.getSubText(function(piece) {
	                            var pieceRun = Object.create(run);
	                            pieceRun.text = piece;
	                            eachRun(pieceRun);
	                        }, run.text, start, stop - start);
	                    }
	                }
	            }
	        };
	    }
	};

	function character(runArray, run, offset) {
	    return Object.create(prototype, {
	        _runs: { value: runArray },
	        _run: { value: run },
	        _offset: { value: offset },
	        char: {
	            value: run >= runArray.length ? null :
	                runs.getTextChar(runArray[run].text, offset)
	        }
	    });
	}

	function firstNonEmpty(runArray, n) {
	    for (; n < runArray.length; n++) {
	        if (runs.getTextLength(runArray[n].text) != 0) {
	            return character(runArray, n, 0);
	        }
	    }
	    return character(runArray, runArray.length, 0);
	}

	module.exports = function(runArray) {
	    return function(emit) {
	        var c = firstNonEmpty(runArray, 0);
	        while (!emit(c) && (c.char !== null)) {
	            c = (c._offset + 1 < runs.getTextLength(runArray[c._run].text))
	                ? character(runArray, c._run, c._offset + 1)
	                : firstNonEmpty(runArray, c._run + 1);
	        }
	    };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	/*  Creates a stateful transformer function that consumes Characters and produces "word coordinate"
	    objects, which are triplets of Characters representing the first characters of:

	         start   - the word itself
	         end     - any trailing whitespace
	         next    - the subsequent word, or end of document.

	     Newline characters are NOT whitespace. They are always emitted as separate single-character
	     words.

	    If start.equals(end) then the "word" only contains whitespace and so must represent spaces
	    at the start of a line. So even in this case, whitespace is always treated as "trailing
	    after" a word - even if that word happens to be zero characters long!
	 */

	module.exports = function(codes) {

	    var word = null, trailingSpaces = null, newLine = true;

	    return function(emit, inputChar) {

	        var endOfWord;
	        if (inputChar.char === null) {
	            endOfWord = true;
	        } else {
	            if (newLine) {
	                endOfWord = true;
	                newLine = false;
	            }
	            if (typeof inputChar.char === 'string') {
		            switch (inputChar.char) {
		                case ' ':
		                    if (!trailingSpaces) {
		                        trailingSpaces = inputChar;
		                    }
		                    break;
		                case '\n':
		                    endOfWord = true;
		                    newLine = true;
		                    break;
		                default:
		                    if (trailingSpaces) {
		                        endOfWord = true;
		                    }
	                }
	            } else {
	                var code = codes(inputChar.char);
	                if (code.block || code.eof) {
	                    endOfWord = true;
	                    newLine = true;
	                } 
	            }
	        }
	        if (endOfWord) {
	            if (word && !word.equals(inputChar)) {
	                if (emit({
	                    text: word,
	                    spaces: trailingSpaces || inputChar,
	                    end: inputChar
	                }) === false) {
	                    return false;
	                }
	                trailingSpaces = null;
	            }
	            if (inputChar.char === null) {
	                emit(null); // Indicate end of stream
	            }

	            word = inputChar;
	        }
	    };
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var per = __webpack_require__(28);
	var part = __webpack_require__(37);
	var runs = __webpack_require__(29);

	/*  A Word has the following properties:

	        text      - Section (see below) for non-space portion of word.
	        space     - Section for trailing space portion of word.
	        ascent    - Ascent (distance from baseline to top) for whole word
	        descent   - Descent (distance from baseline to bottom) for whole word
	        width     - Width of the whole word (including trailing space)

	    It has methods:

	        isNewLine()
	                  - Returns true if the Word represents a newline. Newlines are
	                    always represented by separate words.

	        draw(ctx, x, y)
	                  - Draws the Word at x, y on the canvas context ctx.

	    Note: a section (i.e. text and space) is an object containing:

	        parts     - array of Parts
	        ascent    - Ascent (distance from baseline to top) for whole section
	        descent   - Descent (distance from baseline to bottom) for whole section
	        width     - Width of the whole section
	 */

	var prototype = {
	    isNewLine: function() {
	        return this.text.parts.length == 1 && this.text.parts[0].isNewLine;
	    },
	    code: function() {
	        return this.text.parts.length == 1 && this.text.parts[0].code;
	    },
	    codeFormatting: function() {
	        return this.text.parts.length == 1 && this.text.parts[0].run;
	    },
	    draw: function(ctx, x, y) {
	        per(this.text.parts).concat(this.space.parts).forEach(function(part) {
	            part.draw(ctx, x, y);
	            x += part.width;
	        });
	    },
	    plainText: function() {
	        return this.text.plainText + this.space.plainText;
	    },
	    align: function() {
	        var first = this.text.parts[0];
	        return first ? first.run.align : 'left';
	    },
	    runs: function(emit, range) {
	        var start = range && range.start || 0,
	            end = range && range.end;
	        if (typeof end !== 'number') {
	            end = Number.MAX_VALUE;
	        }
	        [this.text, this.space].forEach(function(section) {
	            section.parts.some(function(part) {
	                if (start >= end || end <= 0) {
	                    return true;
	                }
	                var run = part.run, text = run.text;
	                if (typeof text === 'string') {
	                    if (start <= 0 && end >= text.length) {
	                        emit(run);
	                    } else if (start < text.length) {
	                        var pieceRun = Object.create(run);
	                        var firstChar = Math.max(0, start);
	                        pieceRun.text = text.substr(
	                            firstChar,
	                            Math.min(text.length, end - firstChar)
	                        );
	                        emit(pieceRun);
	                    }
	                    start -= text.length;
	                    end -= text.length;
	                } else {
	                    if (start <= 0 && end >= 1) {
	                        emit(run);
	                    }
	                    start--;
	                    end--;
	                }
	            });
	        });
	    }
	};

	var section = function(runEmitter, codes) {
	    var s = {
	        parts: per(runEmitter).map(function(p) {
	            return part(p, codes);
	        }).all(),
	        ascent: 0,
	        descent: 0,
	        width: 0,
	        length: 0,
	        plainText: ''
	    };
	    s.parts.forEach(function(p) {
	        s.ascent = Math.max(s.ascent, p.ascent);
	        s.descent = Math.max(s.descent, p.descent);
	        s.width += p.width;
	        s.length += runs.getPieceLength(p.run.text);
	        s.plainText += runs.getPiecePlainText(p.run.text);
	    });
	    return s;
	};

	module.exports = function(coords, codes) {
	    var text, space;
	    if (!coords) {
	        // special end-of-document marker, mostly like a newline with no formatting
	        text = [{ text: '\n' }];
	        space = [];
	    } else {
	        text = coords.text.cut(coords.spaces);
	        space = coords.spaces.cut(coords.end);
	    }
	    text = section(text, codes);
	    space = section(space, codes);
	    var word = Object.create(prototype, {
	        text: { value: text },
	        space: { value: space },
	        ascent: { value: Math.max(text.ascent, space.ascent) },
	        descent: { value: Math.max(text.descent, space.descent) },
	        width: { value: text.width + space.width, configurable: true },
	        length: { value: text.length + space.length }
	    });
	    if (!coords) {
	        Object.defineProperty(word, 'eof', { value: true });
	    }
	    return word;
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var text = __webpack_require__(38);

	var defaultInline = {
	    measure: function(formatting) {
	        var text = text.measure('?', formatting);
	        return {
	            width: text.width + 4,
	            ascent: text.width + 2,
	            descent: text.width + 2
	        };
	    },
	    draw: function(ctx, x, y, width, ascent, descent) {
	        ctx.fillStyle = 'silver';
	        ctx.fillRect(x, y - ascent, width, ascent + descent);
	        ctx.strokeRect(x, y - ascent, width, ascent + descent);
	        ctx.fillStyle = 'black';
	        ctx.fillText('?', x + 2, y);
	    }
	};

	/*  A Part is a section of a word with its own run, because a Word can span the
	    boundaries between runs, so it may have several parts in its text or space
	    arrays.

	        run           - Run being measured.
	        isNewLine     - True if this part only contain a newline (\n). This will be
	                        the only Part in the Word, and this is the only way newlines
	                        ever occur.
	        width         - Width of the run
	        ascent        - Distance from baseline to top
	        descent       - Distance from baseline to bottom

	    And methods:

	        draw(ctx, x, y)
	                      - Draws the Word at x, y on the canvas context ctx. The y
	                        coordinate is assumed to be the baseline. The call
	                        prepareContext(ctx) will set the canvas up appropriately.
	 */
	var prototype = {
	    draw: function(ctx, x, y) {
	        if (typeof this.run.text === 'string') {
	            text.draw(ctx, this.run.text, this.run, x, y, this.width, this.ascent, this.descent);
	        } else if (this.code && this.code.draw) {
	            ctx.save();
	            this.code.draw(ctx, x, y, this.width, this.ascent, this.descent, this.run);
	            ctx.restore();
	        }
	    }
	};

	module.exports = function(run, codes) {

	    var m, isNewLine, code;
	    if (typeof run.text === 'string') {
	        isNewLine = (run.text.length === 1) && (run.text[0] === '\n');
	        m = text.measure(isNewLine ? text.nbsp : run.text, run);
	    } else {
	        code = codes(run.text) || defaultInline;
	        m = code.measure ? code.measure(run) : {
	            width: 0, ascent: 0, descent: 0
	        };
	    }

	    var part = Object.create(prototype, {
	        run: { value: run },
	        isNewLine: { value: isNewLine },
	        width: { value: isNewLine ? 0 : m.width },
	        ascent: { value: m.ascent },
	        descent: { value: m.descent }
	    });
	    if (code) {
	        Object.defineProperty(part, 'code', { value: code });
	    }
	    return part;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var runs = __webpack_require__(29);

	/*  Returns a font CSS/Canvas string based on the settings in a run
	 */
	var getFontString = exports.getFontString = function(run) {

	    var size = (run && run.size) || runs.defaultFormatting.size;

	    if (run) {
	        switch (run.script) {
	            case 'super':
	            case 'sub':
	                size *= 0.8;
	                break;
	        }
	    }

	    return (run && run.italic ? 'italic ' : '') +
	           (run && run.bold ? 'bold ' : '') + ' ' +
	            size + 'pt ' +
	          ((run && run.font) || runs.defaultFormatting.font);
	};

	/*  Applies the style of a run to the canvas context
	 */
	exports.applyRunStyle = function(ctx, run) {
	    ctx.fillStyle = (run && run.color) || runs.defaultFormatting.color;
	    ctx.font = getFontString(run);
	};

	exports.prepareContext = function(ctx) {
	    ctx.textAlign = 'left';
	    ctx.textBaseline = 'alphabetic';
	};

	/* Generates the value for a CSS style attribute
	 */
	exports.getRunStyle = function(run) {
	    var parts = [
	        'font: ', getFontString(run),
	      '; color: ', ((run && run.color) || runs.defaultFormatting.color)
	    ];

	    if (run) {
	        switch (run.script) {
	            case 'super':
	                parts.push('; vertical-align: super');
	                break;
	            case 'sub':
	                parts.push('; vertical-align: sub');
	                break;
	        }
	    }

	    return parts.join('');
	};

	var nbsp = exports.nbsp = String.fromCharCode(160);
	var enter = exports.enter = nbsp; // String.fromCharCode(9166);

	/*  Returns width, height, ascent, descent in pixels for the specified text and font.
	    The ascent and descent are measured from the baseline. Note that we add/remove
	    all the DOM elements used for a measurement each time - this is not a significant
	    part of the cost, and if we left the hidden measuring node in the DOM then it
	    would affect the dimensions of the whole page.
	 */
	var measureText = exports.measureText = function(text, style) {
	    var span, block, div;

	    span = document.createElement('span');
	    block = document.createElement('div');
	    div = document.createElement('div');

	    block.style.display = 'inline-block';
	    block.style.width = '1px';
	    block.style.height = '0';

	    div.style.visibility = 'hidden';
	    div.style.position = 'absolute';
	    div.style.top = '0';
	    div.style.left = '0';
	    div.style.width = '500px';
	    div.style.height = '200px';

	    div.appendChild(span);
	    div.appendChild(block);
	    document.body.appendChild(div);
	    try {
	        span.setAttribute('style', style);

	        span.innerHTML = '';
	        span.appendChild(document.createTextNode(text.replace(/\s/g, nbsp)));

	        var result = {};
	        block.style.verticalAlign = 'baseline';
	        result.ascent = (block.offsetTop - span.offsetTop);
	        block.style.verticalAlign = 'bottom';
	        result.height = (block.offsetTop - span.offsetTop);
	        result.descent = result.height - result.ascent;
	        result.width = span.offsetWidth;
	    } finally {
	        div.parentNode.removeChild(div);
	        div = null;
	    }
	    return result;
	};

	/*  Create a function that works like measureText except it caches every result for every
	    unique combination of (text, style) - that is, it memoizes measureText.

	    So for example:

	        var measure = cachedMeasureText();

	    Then you can repeatedly do lots of separate calls to measure, e.g.:

	        var m = measure('Hello, world', 'font: 12pt Arial');
	        console.log(m.ascent, m.descent, m.width);

	    A cache may grow without limit if the text varies a lot. However, during normal interactive
	    editing the growth rate will be slow. If memory consumption becomes a problem, the cache
	    can be occasionally discarded, although of course this will cause a slow down as the cache
	    has to build up again (text measuring is by far the most costly operation we have to do).
	*/
	var createCachedMeasureText = exports.createCachedMeasureText = function() {
	    var cache = {};
	    return function(text, style) {
	        var key = style + '<>!&%' + text;
	        var result = cache[key];
	        if (!result) {
	            cache[key] = result = measureText(text, style);
	        }
	        return result;
	    };
	};

	exports.cachedMeasureText = createCachedMeasureText();

	exports.measure = function(str, formatting) {
	    return exports.cachedMeasureText(str, exports.getRunStyle(formatting));
	};

	exports.draw = function(ctx, str, formatting, left, baseline, width, ascent, descent) {
	    exports.prepareContext(ctx);
	    exports.applyRunStyle(ctx, formatting);
	    switch (formatting.script) {
	        case 'super':
	            baseline -= (ascent * (1/3));
	            break;
	        case 'sub':
	            baseline += (descent / 2);
	            break;
	    }
	    ctx.fillText(str === '\n' ? exports.enter : str, left, baseline);
	    if (formatting.underline) {
	        ctx.fillRect(left, 1 + baseline, width, 1);
	    }
	    if (formatting.strikeout) {
	        ctx.fillRect(left, 1 + baseline - (ascent/2), width, 1);
	    }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var per = __webpack_require__(28);
	var runs = __webpack_require__(29);

	function Range(doc, start, end) {
	    this.doc = doc;
	    this.start = start;
	    this.end = end;
	    if (start > end) {
	        this.start = end;
	        this.end = start;
	    }
	}

	Range.prototype.parts = function(emit, list) {
	    list = list || this.doc.children();
	    var self = this;

	    list.some(function(item) {
	        if (item.ordinal + item.length <= self.start) {
	            return false;
	        }
	        if (item.ordinal >= self.end) {
	            return true;
	        }
	        if (item.ordinal >= self.start &&
	            item.ordinal + item.length <= self.end) {
	            emit(item);
	        } else {
	            self.parts(emit, item.children());
	        }
	    });
	};

	Range.prototype.clear = function() {
	    return this.setText([]);
	};

	Range.prototype.setText = function(text) {
	    return this.doc.splice(this.start, this.end, text);
	};

	Range.prototype.runs = function(emit) {
	    this.doc.runs(emit, this);
	};

	Range.prototype.plainText = function() {
	    return per(this.runs, this).map(runs.getPlainText).all().join('');
	};

	Range.prototype.save = function() {
	    return per(this.runs, this).per(runs.consolidate()).all();
	};

	Range.prototype.getFormatting = function() {
	    var range = this;
	    if (range.start === range.end) {
	        var pos = range.start;
	        // take formatting of character before, if any, because that's
	        // where plain text picks up formatting when inserted
	        if (pos > 0) {
	            pos--;
	        }
	        range.start = pos;
	        range.end = pos + 1;
	    }
	    return per(range.runs, range).reduce(runs.merge).last() || runs.defaultFormatting;
	};

	Range.prototype.setFormatting = function(attribute, value) {
	    var range = this;
	    if (attribute === 'align') {
	        // Special case: expand selection to surrounding paragraphs
	        range = range.doc.paragraphRange(range.start, range.end);
	    }
	    if (range.start === range.end) {
	        range.doc.modifyInsertFormatting(attribute, value);
	    } else {
	        var saved = range.save();
	        var template = {};
	        template[attribute] = value;
	        runs.format(saved, template);
	        range.setText(saved);
	    }
	};

	module.exports = function(doc, start, end) {
	    return new Range(doc, start, end);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var node = __webpack_require__(27);
	var wrap = __webpack_require__(41);
	var rect = __webpack_require__(30);

	var prototype = node.derive({
	    bounds: function() {
	        if (!this._bounds) {
	            var left = 0, top = 0, right = 0, bottom = 0;
	            if (this.lines.length) {
	                var first = this.lines[0].bounds();
	                left = first.l;
	                top = first.t;
	                this.lines.forEach(function(line) {
	                    var b = line.bounds();
	                    right = Math.max(right, b.l + b.w);
	                    bottom = Math.max(bottom, b.t + b.h);
	                });
	            }
	            this._bounds = rect(left, top, right - left, this.height || bottom - top);
	        }
	        return this._bounds;
	    },
	    actualWidth: function() {
	        if (!this._actualWidth) {
	            var result = 0;
	            this.lines.forEach(function(line) {
	                if (typeof line.actualWidth === 'number') {
	                    result = Math.max(result, line.actualWidth);
	                }
	            });
	            this._actualWidth = result;
	        }
	        return this._actualWidth;
	    },
	    children: function() {
	        return this.lines;
	    },
	    parent: function() {
	        return this._parent;
	    },
	    draw: function(ctx, viewPort) {
	        var top = viewPort ? viewPort.t : 0;
	        var bottom = viewPort ? (viewPort.t + viewPort.h) : Number.MAX_VALUE;
	        this.lines.some(function(line) {
	            var b = line.bounds();
	            if (b.t + b.h < top) {
	                return false;
	            }
	            if (b.t > bottom) {
	                return true;
	            }
	            line.draw(ctx, viewPort);
	        });
	    },
	    type: 'frame'
	});

	exports = module.exports = function(left, top, width, ordinal, parent,
	                                    includeTerminator, initialAscent, initialDescent) {
	    var lines = [];
	    var frame = Object.create(prototype, {
	        lines: { value: lines },
	        _parent: { value: parent },
	        ordinal: { value: ordinal }
	    });
	    var wrapper = wrap(left, top, width, ordinal, frame, includeTerminator, initialAscent, initialDescent);
	    var length = 0, height = 0;
	    return function(emit, word) {
	        if (wrapper(function(line) {
	            if (typeof line === 'number') {
	                height = line;
	            } else {
	                length = (line.ordinal + line.length) - ordinal;
	                lines.push(line);
	            }
	        }, word)) {
	            Object.defineProperty(frame, 'length', { value: length });
	            Object.defineProperty(frame, 'height', { value: height });
	            emit(frame);
	            return true;
	        }
	    };
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var line = __webpack_require__(42);

	/*  A stateful transformer function that accepts words and emits lines. If the first word
	    is too wide, it will overhang; if width is zero or negative, there will be one word on
	    each line.

	    The y-coordinate is the top of the first line, not the baseline.

	    Returns a stream of line objects, each containing an array of positionedWord objects.
	 */

	module.exports = function(left, top, width, ordinal, parent,
	                          includeTerminator, initialAscent, initialDescent) {

	    var lineBuffer = [],
	        lineWidth = 0,
	        maxAscent = initialAscent || 0,
	        maxDescent = initialDescent || 0,
	        quit,
	        lastNewLineHeight = 0,
	        y = top;

	    var store = function(word, emit) {
	        lineBuffer.push(word);
	        lineWidth += word.width;
	        maxAscent = Math.max(maxAscent, word.ascent);
	        maxDescent = Math.max(maxDescent, word.descent);
	        if (word.isNewLine()) {
	            send(emit);
	            lastNewLineHeight = word.ascent + word.descent;
	        }
	    };

	    var send = function(emit) {
	        if (quit || lineBuffer.length === 0) {
	            return;
	        }
	        var l = line(parent, left, width, y + maxAscent, maxAscent, maxDescent, lineBuffer, ordinal);
	        ordinal += l.length;
	        quit = emit(l);
	        y += (maxAscent + maxDescent);
	        lineBuffer.length = 0;
	        lineWidth = maxAscent = maxDescent = 0;
	    };

	    var consumer = null;

	    return function(emit, inputWord) {
	        if (consumer) {
	            lastNewLineHeight = 0;
	            var node = consumer(inputWord);
	            if (node) {
	                consumer = null;
	                ordinal += node.length;
	                y += node.bounds().h;
	                Object.defineProperty(node, 'block', { value: true });
	                emit(node);
	            }
	        } else {
	            var code = inputWord.code();
	            if (code && code.block) {
	                if (lineBuffer.length) {
	                    send(emit);
	                } else {
	                    y += lastNewLineHeight;
	                }
	                consumer = code.block(left, y, width, ordinal, parent, inputWord.codeFormatting());
	                lastNewLineHeight = 0;
	            }
	            else if (code && code.eof || inputWord.eof) {
	                if (!code || (includeTerminator && includeTerminator(code))) {
	                    store(inputWord, emit);
	                }
	                if (!lineBuffer.length) {
	                    emit(y + lastNewLineHeight - top);
	                } else {
	                    send(emit);
	                    emit(y - top);
	                }
	                quit = true;
	            } else {
	                lastNewLineHeight = 0;
	                if (!lineBuffer.length) {
	                    store(inputWord, emit);
	                } else {
	                    if (lineWidth + inputWord.text.width > width) {
	                        send(emit);
	                    }
	                    store(inputWord, emit);
	                }
	            }
	        }
	        return quit;
	    };
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var positionedWord = __webpack_require__(43);
	var rect = __webpack_require__(30);
	var node = __webpack_require__(27);
	var runs = __webpack_require__(29);

	/*  A Line is returned by the wrap function. It contains an array of PositionedWord objects that are
	    all on the same physical line in the wrapped text.

	     It has a width (which is actually the same for all lines returned by the same wrap). It also has
	     coordinates for baseline, ascent and descent. The ascent and descent have the maximum values of
	     the individual words' ascent and descent coordinates.

	    It has methods:

	        draw(ctx, x, y)
	                  - Draw all the words in the line applying the specified (x, y) offset.
	        bounds()
	                  - Returns a Rect for the bounding box.
	 */

	var prototype = node.derive({
	    bounds: function(minimal) {
	        if (minimal) {
	            var firstWord = this.first().bounds(),
	                lastWord = this.last().bounds();
	            return rect(
	                firstWord.l,
	                this.baseline - this.ascent,
	                (lastWord.l + lastWord.w) - firstWord.l,
	                this.ascent + this.descent);
	        }
	        return rect(this.left, this.baseline - this.ascent,
	            this.width, this.ascent + this.descent);
	    },
	    parent: function() {
	        return this.doc;
	    },
	    children: function() {
	        return this.positionedWords;
	    },
	    type: 'line'
	});

	module.exports = function(doc, left, width, baseline, ascent, descent, words, ordinal) {

	    var align = words[0].align();

	    var line = Object.create(prototype, {
	        doc: { value: doc }, // should be called frame, or else switch to using parent on all nodes
	        left: { value: left },
	        width: { value: width },
	        baseline: { value: baseline },
	        ascent: { value: ascent },
	        descent: { value: descent },
	        ordinal: { value: ordinal },
	        align: { value: align }
	    });

	    var actualWidth = 0;
	    words.forEach(function(word) {
	        actualWidth += word.width;
	    });
	    actualWidth -= words[words.length - 1].space.width;

	    var x = 0, spacing = 0;
	    if (actualWidth < width) {
	        switch (align) {
	            case 'right':
	                x = width - actualWidth;
	                break;
	            case 'center':
	                x = (width - actualWidth) / 2;
	                break;
	            case 'justify':
	                if (words.length > 1 && !words[words.length - 1].isNewLine()) {
	                    spacing = (width - actualWidth) / (words.length - 1);
	                }
	                break;
	        }
	    }

	    Object.defineProperty(line, 'positionedWords', {
	        value: words.map(function(word) {
	            var wordLeft = x;
	            x += (word.width + spacing);
	            var wordOrdinal = ordinal;
	            ordinal += (word.text.length + word.space.length);
	            return positionedWord(word, line, wordLeft, wordOrdinal, word.width + spacing);
	        })
	    });

	    Object.defineProperty(line, 'actualWidth', { value: actualWidth });
	    Object.defineProperty(line, 'length', { value: ordinal - line.ordinal });
	    return line;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var rect = __webpack_require__(30);
	var part = __webpack_require__(37);
	var text = __webpack_require__(38);
	var node = __webpack_require__(27);
	var word = __webpack_require__(36);
	var runs = __webpack_require__(29);

	var newLineWidth = function(run) {
	    return text.measure(text.enter, run).width;
	};

	var positionedChar = node.derive({
	    bounds: function() {
	        var wb = this.word.bounds();
	        var width = this.word.word.isNewLine()
	            ? newLineWidth(this.word.word.run)
	            : this.width || this.part.width;
	        return rect(wb.l + this.left, wb.t, width, wb.h);
	    },
	    parent: function() {
	        return this.word;
	    },
	    byOrdinal: function() {
	        return this;
	    },
	    byCoordinate: function(x, y) {
	        if (x <= this.bounds().center().x) {
	            return this;
	        }
	        return this.next();
	    },
	    type: 'character'
	});

	/*  A positionedWord is just a realised Word plus a reference back to the containing Line and
	    the left coordinate (x coordinate of the left edge of the word).

	    It has methods:

	        draw(ctx, x, y)
	                  - Draw the word within its containing line, applying the specified (x, y)
	                    offset.
	        bounds()
	                  - Returns a rect for the bounding box.
	 */
	var prototype = node.derive({
	    draw: function(ctx) {
	        this.word.draw(ctx, this.line.left + this.left, this.line.baseline);

	        // Handy for showing how word boundaries work
	        // var b = this.bounds();
	        // ctx.strokeRect(b.l, b.t, b.w, b.h);
	    },
	    bounds: function() {
	        return rect(
	            this.line.left + this.left,
	            this.line.baseline - this.line.ascent,
	            this.word.isNewLine() ? newLineWidth(this.word.run) : this.width,
	            this.line.ascent + this.line.descent);
	    },
	    parts: function(eachPart) {
	        this.word.text.parts.some(eachPart) ||
	        this.word.space.parts.some(eachPart);
	    },
	    realiseCharacters: function() {
	        if (!this._characters) {
	            var cache = [];
	            var x = 0, self = this, ordinal = this.ordinal,
	                codes = this.parentOfType('document').codes;
	            this.parts(function(wordPart) {
	                runs.pieceCharacters(function(char) {
	                    var charRun = Object.create(wordPart.run);
	                    charRun.text = char;
	                    var p = part(charRun, codes);
	                    cache.push(Object.create(positionedChar, {
	                        left: { value: x },
	                        part: { value: p },
	                        word: { value: self },
	                        ordinal: { value: ordinal },
	                        length: { value: 1 }
	                    }));
	                    x += p.width;
	                    ordinal++;
	                }, wordPart.run.text);
	            });
	            // Last character is artificially widened to match the length of the
	            // word taking into account (align === 'justify')
	            var lastChar = cache[cache.length - 1];
	            if (lastChar) {
	                Object.defineProperty(lastChar, 'width',
	                    { value: this.width - lastChar.left });
	                if (this.word.isNewLine() || (this.word.code() && this.word.code().eof)) {
	                    Object.defineProperty(lastChar, 'newLine', { value: true });
	                }
	            }
	            this._characters = cache;
	        }
	    },
	    children: function() {
	        this.realiseCharacters();
	        return this._characters;
	    },
	    parent: function() {
	        return this.line;
	    },
	    type: 'word'
	});

	module.exports = function(word, line, left, ordinal, width) {
	    var pword = Object.create(prototype, {
	        word: { value: word },
	        line: { value: line },
	        left: { value: left },
	        width: { value: width }, // can be different to word.width if (align == 'justify')
	        ordinal: { value: ordinal },
	        length: { value: word.text.length + word.space.length }
	    });
	    return pword;
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var text = __webpack_require__(38);
	var frame = __webpack_require__(40);
	var node = __webpack_require__(27);
	var rect = __webpack_require__(30);
	var util = __webpack_require__(31);

	var inlineNodePrototype = node.derive({
	    parent: function() {
	        return this._parent;
	    },
	    draw: function(ctx) {
	        this.inline.draw(ctx,
	            this.left,
	            this.baseline,
	            this.measured.width,
	            this.measured.ascent,
	            this.measured.descent,
	            this.formatting);
	    },
	    position: function(left, baseline, bounds) {
	        this.left = left;
	        this.baseline = baseline;
	        if (bounds) {
	            this._bounds = bounds;
	        }
	    },
	    bounds: function() {
	        return this._bounds || rect(this.left, this.baseline - this.measured.ascent,
	            this.measured.width, this.measured.ascent + this.measured.descent);
	    },
	    byCoordinate: function(x, y) {
	        if (x <= this.bounds().center().x) {
	            return this;
	        }
	        return this.next();
	    }
	});

	var inlineNode = function(inline, parent, ordinal, length, formatting) {
	    if (!inline.draw || !inline.measure) {
	        throw new Error();
	    }
	    return Object.create(inlineNodePrototype, {
	        inline: { value: inline },
	        _parent: { value: parent },
	        ordinal: { value: ordinal },
	        length: { value: length },
	        formatting: { value: formatting },
	        measured: {
	            value: inline.measure(formatting)
	        }
	    });
	};

	var codes = {};

	codes.number = function(obj, number) {
	    var formattedNumber = (number + 1) + '.';
	    return {
	        measure: function(formatting) {
	            return text.measure(formattedNumber, formatting);
	        },
	        draw: function(ctx, x, y, width, ascent, descent, formatting) {
	            text.draw(ctx, formattedNumber, formatting, x, y, width, ascent, descent);
	        }
	    };
	};

	var listTerminator = function(obj) {
	    return util.derive(obj, {
	        eof: true,
	        measure: function(formatting) {
	            return { width: 18, ascent: 0, descent: 0 }; // text.measure(text.enter, formatting);
	        },
	        draw: function(ctx, x, y) {
	            // ctx.fillText(text.enter, x, y);
	        }
	    });
	};

	codes.listNext = codes.listEnd = listTerminator;

	codes.listStart = function(obj, data, allCodes) {
	    return util.derive(obj, {
	        block: function(left, top, width, ordinal, parent, formatting) {
	            var list = node.generic('list', parent, left, top),
	                itemNode,
	                itemFrame,
	                itemMarker;

	            var indent = 50, spacing = 10;

	            var startItem = function(code, formatting) {
	                itemNode = node.generic('item', list);
	                var marker = allCodes(code.marker || { $: 'number' }, list.children().length);
	                itemMarker = inlineNode(marker, itemNode, ordinal, 1, formatting);
	                itemMarker.block = true;
	                itemFrame = frame(
	                    left + indent, top, width - indent, ordinal + 1, itemNode,
	                    function(terminatorCode) {
	                        return terminatorCode.$ === 'listEnd';
	                    },
	                    itemMarker.measured.ascent
	                );
	            };

	            startItem(obj, formatting);

	            return function(inputWord) {
	                if (itemFrame) {
	                    itemFrame(function(finishedFrame) {
	                        ordinal = finishedFrame.ordinal + finishedFrame.length;
	                        var frameBounds = finishedFrame.bounds();

	                        // get first line and position marker
	                        var firstLine = finishedFrame.first();
	                        var markerLeft = left + indent - spacing - itemMarker.measured.width;
	                        var markerBounds = rect(left, top, indent, frameBounds.h);
	                        if ('baseline' in firstLine) {
	                            itemMarker.position(markerLeft, firstLine.baseline, markerBounds);
	                        } else {
	                            itemMarker.position(markerLeft, top + itemMarker.measured.ascent, markerBounds);
	                        }

	                        top = frameBounds.t + frameBounds.h;

	                        itemNode.children().push(itemMarker);
	                        itemNode.children().push(finishedFrame);
	                        itemNode.finalize();

	                        list.children().push(itemNode);
	                        itemNode = itemFrame = itemMarker = null;
	                    }, inputWord);
	                } else {
	                    ordinal++;
	                }

	                if (!itemFrame) {
	                    var i = inputWord.code();
	                    if (i) {
	                        if (i.$ == 'listEnd') {
	                            list.finalize();
	                            return list;
	                        }
	                        if (i.$ == 'listNext') {
	                            startItem(i, inputWord.codeFormatting());
	                        }
	                    }
	                }
	            };
	        }
	    });
	};

	module.exports = exports = function(obj, number, allCodes) {
	    var impl = codes[obj.$];
	    return impl && impl(obj, number, allCodes);
	};

	exports.editFilter = function(doc) {
	    var balance = 0;

	    if (!doc.words.some(function(word, i) {
	        var code = word.code();
	        if (code) {
	            switch (code.$) {
	                case 'listStart':
	                    balance++;
	                    break;
	                case 'listNext':
	                    if (balance === 0) {
	                        doc.spliceWordsWithRuns(i, 1, [util.derive(word.codeFormatting(), {
	                            text: {
	                                $: 'listStart',
	                                marker: code.marker
	                            }
	                        })]);
	                        return true;
	                    }
	                    break;
	                case 'listEnd':
	                    if (balance === 0) {
	                        doc.spliceWordsWithRuns(i, 1, []);
	                    }
	                    balance--;
	                    break;
	            }
	        }
	    })) {
	        if (balance > 0) {
	            var ending = [];
	            while (balance > 0) {
	                balance--;
	                ending.push({
	                    text: { $: 'listEnd' }
	                });
	            }
	            doc.spliceWordsWithRuns(doc.words.length - 1, 0, ending);
	        }
	    }
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	
	exports.isAttached = function(element) {
	    var ancestor = element;
	    while(ancestor.parentNode) {
	        ancestor = ancestor.parentNode;
	    }
	    return !!ancestor.body;
	};

	exports.clear = function(element) {
	    while (element.firstChild) {
	        element.removeChild(element.firstChild);
	    }
	};

	exports.setText = function(element, text) {
	    exports.clear(element);
	    element.appendChild(document.createTextNode(text));
	};

	exports.handleEvent = function(element, name, handler) {
	    element.addEventListener(name, function(ev) {
	        if (handler(ev) === false) {
	            ev.preventDefault();
	        }
	    });
	};

	exports.handleMouseEvent = function(element, name, handler) {
	    exports.handleEvent(element, name, function(ev) {
	        var rect = element.getBoundingClientRect();
	        return handler(ev, ev.clientX - rect.left, ev.clientY - rect.top);
	    });
	};

	exports.effectiveStyle = function(element, name) {
	    return document.defaultView.getComputedStyle(element).getPropertyValue(name);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var runs = __webpack_require__(29);
	var per = __webpack_require__(28);

	var tag = function(name, formattingProperty) {
	    return function(node, formatting) {
	        if (node.nodeName === name) {
	            formatting[formattingProperty] = true;
	        }
	    };
	};

	var value = function(type, styleProperty, formattingProperty, transformValue) {
	    return function(node, formatting) {
	        var val = node[type] && node[type][styleProperty];
	        if (val) {
	            if (transformValue) {
	                val = transformValue(val);
	            }
	            formatting[formattingProperty] = val;
	        }
	    };
	};

	var attrValue = function(styleProperty, formattingProperty, transformValue) {
	    return value('attributes', styleProperty, formattingProperty, transformValue);
	};

	var styleValue = function(styleProperty, formattingProperty, transformValue) {
	    return value('style', styleProperty, formattingProperty, transformValue);
	};

	var styleFlag = function(styleProperty, styleValue, formattingProperty) {
	    return function(node, formatting) {
	        if (node.style && node.style[styleProperty] === styleValue) {
	            formatting[formattingProperty] = true;
	        }
	    };
	};

	var obsoleteFontSizes = [ 6, 7, 9, 10, 12, 16, 20, 30 ];

	var aligns = { left: true, center: true, right: true, justify: true };

	var checkAlign = function(value) {
	    return aligns[value] ? value : 'left';
	};

	var fontName = function(name) {
	    var s = name.split(/\s*,\s*/g);
	    if (s.length == 0) {
	        return name;
	    }
	    name = s[0]
	    var raw = name.match(/^"(.*)"$/);
	    if (raw) {
	        return raw[1].trim();
	    }
	    raw = name.match(/^'(.*)'$/);
	    if (raw) {
	        return raw[1].trim();
	    }
	    return name;
	};

	var headings = {
	    H1: 30,
	    H2: 20,
	    H3: 16,
	    H4: 14,
	    H5: 12
	};

	var handlers = [
	    tag('B', 'bold'),
	    tag('STRONG', 'bold'),
	    tag('I', 'italic'),
	    tag('EM', 'italic'),
	    tag('U', 'underline'),
	    tag('S', 'strikeout'),
	    tag('STRIKE', 'strikeout'),
	    tag('DEL', 'strikeout'),
	    styleFlag('fontWeight', 'bold', 'bold'),
	    styleFlag('fontStyle', 'italic', 'italic'),
	    styleFlag('textDecoration', 'underline', 'underline'),
	    styleFlag('textDecoration', 'line-through', 'strikeout'),
	    styleValue('color', 'color'),
	    styleValue('fontFamily', 'font', fontName),
	    styleValue('fontSize', 'size', function(size) {
	        var m = size.match(/^([\d\.]+)pt$/);
	        return m ? parseFloat(m[1]) : 10
	    }),
	    styleValue('textAlign', 'align', checkAlign),
	    function(node, formatting) {
	        if (node.nodeName === 'SUB') {
	            formatting.script = 'sub';
	        }
	    },
	    function(node, formatting) {
	        if (node.nodeName === 'SUPER') {
	            formatting.script = 'super';
	        }
	    },
	    function(node, formatting) {
	        if (node.nodeName === 'CODE') {
	            formatting.font = 'monospace';
	        }
	    },
	    function(node, formatting) {
	        var size = headings[node.nodeName];
	        if (size) {
	            formatting.size = size;
	        }
	    },
	    attrValue('color', 'color'),
	    attrValue('face', 'font', fontName),
	    attrValue('align', 'align', checkAlign),
	    attrValue('size', 'size', function(size) {
	        return obsoleteFontSizes[size] || 10;
	    })
	];

	var newLines = [ 'BR', 'P', 'H1', 'H2', 'H3', 'H4', 'H5' ];
	var isNewLine = {};
	newLines.forEach(function(name) {
	    isNewLine[name] = true;
	});

	exports.parse = function(html, classes) {
	    var root = html;
	    if (typeof root === 'string') {
	        root = document.createElement('div');
	        root.innerHTML = html;
	    }

	    var result = [], inSpace = true;
	    var cons = per(runs.consolidate()).into(result);
	    var emit = function(text, formatting) {
	        cons.submit(Object.create(formatting, {
	            text: { value: text }
	        }));
	    };
	    var dealWithSpaces = function(text, formatting) {
	        text = text.replace(/\n+\s*/g, ' ');
	        var fullLength = text.length;
	        text = text.replace(/^\s+/, '');
	        if (inSpace) {
	            inSpace = false;
	        } else if (fullLength !== text.length) {
	            text = ' ' + text;
	        }
	        fullLength = text.length;
	        text = text.replace(/\s+$/, '');
	        if (fullLength !== text.length) {
	            inSpace = true;
	            text += ' ';
	        }
	        emit(text, formatting);
	    };

	    function recurse(node, formatting) {
	        if (node.nodeType == 3) {
	            dealWithSpaces(node.nodeValue, formatting);
	        } else {
	            formatting = Object.create(formatting);

	            var classNames = node.attributes['class'];
	            if (classNames) {
	                classNames.value.split(' ').forEach(function(cls) {
	                    cls = classes[cls];
	                    if (cls) {
	                        Object.keys(cls).forEach(function(key) {
	                            formatting[key] = cls[key];
	                        });
	                    }
	                })
	            }

	            handlers.forEach(function(handler) {
	                handler(node, formatting);
	            });
	            if (node.childNodes) {
	                for (var n = 0; n < node.childNodes.length; n++) {
	                    recurse(node.childNodes[n], formatting);
	                }
	            }
	            if (isNewLine[node.nodeName]) {
	                emit('\n', formatting);
	                inSpace = true;
	            }
	        }
	    }
	    recurse(root, {});
	    return result;
	};



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(48).Stream,
	    util = __webpack_require__(69),
	    TokenType = __webpack_require__(71),
	    BreakType = __webpack_require__(72),
	    tokenizer = __webpack_require__(73),
	    LineBreak = __webpack_require__(75);

	function TokenizerStream() {
	    Stream.call(this);

	    var that = this;

	    this.readable = true;
	    this.writable = true;

	    this.tokenizer = tokenizer.createTokenizer();
	    this.linebreak = new LineBreak();

	    this.tokenizer.on('token', function(token, type) {
	        that.linebreak.process(token, type);
	    });

	    this.linebreak.on('action', function(token, type, action) {
	        that.emit('data', token);
	        that.emit('token', token, type, action);
	    });

	    this.tokenizer.on('end', function() {
	        that.linebreak.end();
	    });
	}

	util.inherits(TokenizerStream, Stream);

	TokenizerStream.prototype.write = function(chunk) {
	    this.tokenizer.write(chunk);
	};

	TokenizerStream.prototype.end = function(data) {
	    if (data) {
	        this.write(data);
	    }
	    this.tokenizer.end();
	    this.emit('end');
	};

	module.exports = {
	    Break: BreakType,
	    Token: TokenType,

	    Tokenizer: tokenizer.Tokenizer,
	    tokenize: tokenizer.tokenize,
	    tokenizeSync: tokenizer.tokenizeSync,

	    createTokenizerStream: function() {
	        return new TokenizerStream();
	    }
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(49).EventEmitter;
	var inherits = __webpack_require__(50);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(51);
	Stream.Writable = __webpack_require__(65);
	Stream.Duplex = __webpack_require__(66);
	Stream.Transform = __webpack_require__(67);
	Stream.PassThrough = __webpack_require__(68);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 50 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = __webpack_require__(52);
	exports.Stream = __webpack_require__(48);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(61);
	exports.Duplex = __webpack_require__(60);
	exports.Transform = __webpack_require__(63);
	exports.PassThrough = __webpack_require__(64);
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = __webpack_require__(48);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(53);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(54).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(49).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(48);

	/*<replacement>*/
	var util = __webpack_require__(58);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(59);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(60);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(62).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(60);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(62).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(55)
	var ieee754 = __webpack_require__(56)
	var isArray = __webpack_require__(57)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54).Buffer, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 56 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 57 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54).Buffer))

/***/ },
/* 59 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(58);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	var Readable = __webpack_require__(52);
	var Writable = __webpack_require__(61);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(54).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(58);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	var Stream = __webpack_require__(48);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(60);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(60);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(54).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(60);

	/*<replacement>*/
	var util = __webpack_require__(58);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(63);

	/*<replacement>*/
	var util = __webpack_require__(58);
	util.inherits = __webpack_require__(50);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61)


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60)


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63)


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64)


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(70);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(50);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(10)))

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	    OP: 0,
	    CL: 1,
	    CP: 2,
	    QU: 3,
	    GL: 4,
	    NS: 5,
	    EX: 6,
	    SY: 7,
	    IS: 8,
	    PR: 9,
	    PO: 10,
	    NU: 11,
	    AL: 12,
	    HL: 13,
	    ID: 14,
	    IN: 15,
	    HY: 16,
	    BA: 17,
	    BB: 18,
	    B2: 19,
	    ZW: 20,
	    CM: 21,
	    WJ: 22,
	    H2: 23,
	    H3: 24,
	    JL: 25,
	    JV: 26,
	    JT: 27,

	    // Non-standard
	    SP: 28,
	    LF: 29,
	    NL: 30,
	    BK: 31,
	    CR: 32,
	    XX: 33
	};



/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {
	   // A line break opportunity exists between two adjacent
	   // characters of the given line breaking classes.
	   // Example: break before an em-dash
	   DIRECT: 0,

	   // A line break opportunity exists between two characters
	   // of the given line breaking classes only if they are
	   // separated by one or more spaces.
	   // Example: two words separated by a space
	   INDIRECT: 1,

	   COMBINING_INDIRECT: 2,

	   COMBINING_PROHIBITED: 3,

	   // No line break opportunity exists between two characters
	   // of the given line breaking classes, even if they are
	   // separated by one or more space characters.
	   // Example: non-breaking space
	   PROHIBITED: 4,

	   // A line must break following a character that has the
	   // mandatory break property.
	   EXPLICIT: 5
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(69),
	    Stream = __webpack_require__(48).Stream,
	    types = __webpack_require__(71),
	    tokens = __webpack_require__(74),
	    tokenClasses = Object.keys(tokens),
	    tokenRegExp = {};

	tokenClasses.forEach(function(tokenClass) {
	     tokenRegExp[tokenClass] = new RegExp('^(' + tokens[tokenClass] + ')+');
	});

	function tokenizeSync(str) {
	    var result = [];

	    while (str) {
	        var found = false;

	        for (var i = 0; i < tokenClasses.length; i += 1) {
	            var type = tokenClasses[i],
	                m = tokenRegExp[type].exec(str);

	            if (m) {
	                var token = m[0];
	                result.push({
	                    token: token,
	                    type: types[type]
	                });
	                str = str.substring(token.length);
	                found = true;
	            }
	        }

	        if (!found) {
	            result.push({
	                token: str,
	                type: types.XX
	            });
	            break;
	        }
	    }
	    return result;
	};

	function tokenize(str, callback) {
	    var result = [];

	    while (str) {
	        var found = false;

	        for (var i = 0; i < tokenClasses.length; i += 1) {
	            var type = tokenClasses[i],
	                m = tokenRegExp[type].exec(str);

	            if (m) {
	                var token = m[0];
	                callback(token, types[type]);
	                str = str.substring(token.length);
	                found = true;
	            }
	        }

	        if (!found) {
	            callback(str, types['XX']);
	            break;
	        }
	    }
	}

	function Tokenizer() {
	    Stream.call(this);
	    this.readable = true;
	    this.writable = true;
	}

	util.inherits(Tokenizer, Stream);

	Tokenizer.prototype.write = function(chunk) {
	    var that = this;

	    tokenize(chunk.toString('utf8'), function(token, type) {
	        that.emit('data', token);
	        that.emit('token', token, type);
	    });
	};

	Tokenizer.prototype.end = function(data) {
	    if (data) {
	        this.write(data);
	    }
	    this.emit('end');
	};

	module.exports = {
	    Tokenizer: Tokenizer,
	    createTokenizer: function() {
	        return new Tokenizer();
	    },
	    tokenize: tokenize,
	    tokenizeSync: tokenizeSync
	};


/***/ },
/* 74 */
/***/ function(module, exports) {

	// This file is auto-generated. Do not modify.
	module.exports = {
	  "CM": "[\\u0000-\\u0008\\u000E-\\u001F\\u007F-\\u0084\\u0086-\\u009F\\u0300-\\u034E\\u0350-\\u035B\\u0363-\\u036F\\u0483-\\u0489\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0859-\\u085B\\u08E4-\\u08FE\\u0900-\\u0903\\u093A-\\u093C\\u093E-\\u094F\\u0951-\\u0957\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u0A01-\\u0A03\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AE2\\u0AE3\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B62\\u0B63\\u0B82\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C01-\\u0C03\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0C82\\u0C83\\u0CBC\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CE2\\u0CE3\\u0D02\\u0D03\\u0D3E-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0D62\\u0D63\\u0D82\\u0D83\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u135D-\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u180B-\\u180D\\u18A9\\u1920-\\u192B\\u1930-\\u193B\\u1A17-\\u1A1B\\u1A7F\\u1B00-\\u1B04\\u1B34-\\u1B44\\u1B6B-\\u1B73\\u1B80-\\u1B82\\u1BA1-\\u1BAD\\u1BE6-\\u1BF3\\u1C24-\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE8\\u1CED\\u1CF2-\\u1CF4\\u1DC0-\\u1DE6\\u1DFC-\\u1DFF\\u200C-\\u200F\\u202A-\\u202E\\u206A-\\u206F\\u20D0-\\u20F0\\u2CEF-\\u2CF1\\u2D7F\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F-\\uA672\\uA674-\\uA67D\\uA69F\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA823-\\uA827\\uA880\\uA881\\uA8B4-\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA953\\uA980-\\uA983\\uA9B3-\\uA9C0\\uAA29-\\uAA36\\uAA43\\uAA4C\\uAA4D\\uAAEB-\\uAAEF\\uAAF5\\uAAF6\\uABE3-\\uABEA\\uABEC\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26\\uFFF9-\\uFFFB]|[\\u5536][\\uDDFD]|[\\u5536][\\uDE01-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE0F\\uDE38-\\uDE3A\\uDE3F]|[\\u5536][\\uDC00-\\uDC02\\uDC38-\\uDC46\\uDC80-\\uDC82\\uDCB0-\\uDCBA\\uDD00-\\uDD02\\uDD27-\\uDD34\\uDD80-\\uDD82\\uDDB3-\\uDDC0]|[\\u5536][\\uDEAB-\\uDEB7]|[\\u5536][\\uDF51-\\uDF7E\\uDF8F-\\uDF92]|[\\u5536][\\uDD65-\\uDD69\\uDD6D-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|[\\u5536][\\uDC01\\uDC20-\\uDC7F\\uDD00-\\uDDEF]",
	  "BA": "[\\u0009\\u007C\\u00AD\\u058A\\u05BE\\u0964\\u0965\\u0E5A\\u0E5B\\u0F0B\\u0F34\\u0F7F\\u0F85\\u0FBE\\u0FBF\\u0FD2\\u104A\\u104B\\u1361\\u1400\\u1680\\u16EB-\\u16ED\\u1735\\u1736\\u17D4\\u17D5\\u17D8\\u17DA\\u1804\\u1805\\u1B5A\\u1B5B\\u1B5D-\\u1B60\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u2000-\\u2006\\u2008-\\u200A\\u2010\\u2012\\u2013\\u2027\\u2056\\u2058-\\u205B\\u205D-\\u205F\\u2CFA-\\u2CFC\\u2CFF\\u2D70\\u2E0E-\\u2E15\\u2E17\\u2E19\\u2E2A-\\u2E2D\\u2E30\\u2E31\\u2E33\\u2E34\\uA4FE\\uA4FF\\uA60D\\uA60F\\uA6F3-\\uA6F7\\uA8CE\\uA8CF\\uA92E\\uA92F\\uA9C7-\\uA9C9\\uAA5D-\\uAA5F\\uAAF0\\uAAF1\\uABEB]|[\\u5536][\\uDD00-\\uDD02\\uDF9F\\uDFD0]|[\\u5536][\\uDC57\\uDD1F\\uDE50-\\uDE57\\uDF39-\\uDF3F]|[\\u5536][\\uDC47\\uDC48\\uDCBE-\\uDCC1\\uDD40-\\uDD43\\uDDC5\\uDDC6\\uDDC8]|[\\u5536][\\uDC70-\\uDC73]",
	  "LF": "[\\u000A]",
	  "BK": "[\\u000B\\u000C\\u2028\\u2029]",
	  "CR": "[\\u000D]",
	  "SP": "[\\u0020]",
	  "EX": "[\\u0021\\u003F\\u05C6\\u061B\\u061E\\u061F\\u06D4\\u07F9\\u0F0D-\\u0F11\\u0F14\\u1802\\u1803\\u1808\\u1809\\u1944\\u1945\\u2762\\u2763\\u2CF9\\u2CFE\\u2E2E\\uA60E\\uA876\\uA877\\uFE15\\uFE16\\uFE56\\uFE57\\uFF01\\uFF1F]",
	  "QU": "[\\u0022\\u0027\\u00AB\\u00BB\\u2018\\u2019\\u201B-\\u201D\\u201F\\u2039\\u203A\\u275B-\\u275E\\u2E00-\\u2E0D\\u2E1C\\u2E1D\\u2E20\\u2E21]",
	  "AL": "[\\u0023\\u0026\\u002A\\u003C-\\u003E\\u0040-Z\\u005E-z\\u007E\\u00A6\\u00A9\\u00AC\\u00AE\\u00AF\\u00B5\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C6\\u02CE\\u02CF\\u02D1-\\u02D7\\u02DC\\u02DE\\u02E0-\\u02FF\\u0370-\\u0377\\u037A-\\u037D\\u0384-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u0482\\u048A-\\u0527\\u0531-\\u0556\\u0559-\\u055F\\u0561-\\u0587\\u05C0\\u05C3\\u05F3\\u05F4\\u0600-\\u0604\\u0606-\\u0608\\u060E\\u060F\\u0620-\\u064A\\u066D-\\u066F\\u0671-\\u06D3\\u06D5\\u06DD\\u06DE\\u06E5\\u06E6\\u06E9\\u06EE\\u06EF\\u06FA-\\u070D\\u070F\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4-\\u07F7\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0830-\\u083E\\u0840-\\u0858\\u085E\\u08A0\\u08A2-\\u08AC\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0970-\\u0977\\u0979-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09F4-\\u09F8\\u09FA\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF0\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B70-\\u0B77\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0BF0-\\u0BF8\\u0BFA\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C78-\\u0C7F\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D70-\\u0D75\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DF4\\u0E4F\\u0F00\\u0F05\\u0F13\\u0F15-\\u0F17\\u0F1A-\\u0F1F\\u0F2A-\\u0F33\\u0F36\\u0F38\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u0FC0-\\u0FC5\\u0FC7-\\u0FCC\\u0FCE\\u0FCF\\u0FD4-\\u0FD8\\u104C-\\u104F\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FF\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1360\\u1362-\\u137C\\u1380-\\u1399\\u13A0-\\u13F4\\u1401-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F0\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u17D9\\u17F0-\\u17F9\\u1800\\u1801\\u1807\\u180A\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191C\\u1940\\u19E0-\\u1A16\\u1A1E\\u1A1F\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B5C\\u1B61-\\u1B6A\\u1B74-\\u1B7C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1BFC-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CC0-\\u1CC7\\u1CD3\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FC4\\u1FC6-\\u1FD3\\u1FD6-\\u1FDB\\u1FDD-\\u1FEF\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u1FFE\\u2017\\u2022\\u2023\\u2038\\u203E-\\u2043\\u204A-\\u2055\\u2057\\u205C\\u2061-\\u2064\\u2070\\u2071\\u2075-\\u207C\\u2080\\u2085-\\u208C\\u2090-\\u209C\\u2100-\\u2102\\u2104\\u2106-\\u2108\\u210A-\\u2112\\u2114\\u2115\\u2117-\\u2120\\u2123-\\u212A\\u212C-\\u2153\\u2156-\\u215A\\u215C\\u215D\\u215F\\u216C-\\u216F\\u217A-\\u2188\\u219A-\\u21D1\\u21D3\\u21D5-\\u21FF\\u2201\\u2204-\\u2206\\u2209\\u220A\\u220C-\\u220E\\u2210\\u2214\\u2216-\\u2219\\u221B\\u221C\\u2221\\u2222\\u2224\\u2226\\u222D\\u222F-\\u2233\\u2238-\\u223B\\u223E-\\u2247\\u2249-\\u224B\\u224D-\\u2251\\u2253-\\u225F\\u2262\\u2263\\u2268\\u2269\\u226C\\u226D\\u2270-\\u2281\\u2284\\u2285\\u2288-\\u2294\\u2296-\\u2298\\u229A-\\u22A4\\u22A6-\\u22BE\\u22C0-\\u2311\\u2313-\\u2328\\u232B-\\u23F3\\u2400-\\u2426\\u2440-\\u244A\\u24FF\\u254C-\\u254F\\u2575-\\u257F\\u2590\\u2591\\u2596-\\u259F\\u25A2\\u25AA-\\u25B1\\u25B4\\u25B5\\u25B8-\\u25BB\\u25BE\\u25BF\\u25C2-\\u25C5\\u25C9\\u25CA\\u25CC\\u25CD\\u25D2-\\u25E1\\u25E6-\\u25EE\\u25F0-\\u2604\\u2607\\u2608\\u260A-\\u260D\\u2610-\\u2613\\u2618-\\u261B\\u261D\\u261F-\\u263F\\u2641\\u2643-\\u265F\\u2662\\u2666\\u266B\\u266E\\u2670-\\u269D\\u26A0-\\u26BD\\u26C0-\\u26C3\\u26CE\\u26E2\\u26E4-\\u26E7\\u2701-\\u2756\\u2758-\\u275A\\u275F-\\u2761\\u2764-\\u2767\\u2794-\\u27C4\\u27C7-\\u27E5\\u27F0-\\u2982\\u2999-\\u29D7\\u29DC-\\u29FB\\u29FE-\\u2B4C\\u2B50-\\u2B54\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CEE\\u2CF2\\u2CF3\\u2CFD\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E16\\u2E1A\\u2E1B\\u2E1E\\u2E1F\\u2E2F\\u2E32\\u2E35-\\u2E39\\u4DC0-\\u4DFF\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA673\\uA67E-\\uA697\\uA6A0-\\uA6EF\\uA6F2\\uA700-\\uA78E\\uA790-\\uA793\\uA7A0-\\uA7AA\\uA7F8-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA828-\\uA82B\\uA830-\\uA837\\uA839\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA95F\\uA984-\\uA9B2\\uA9C1-\\uA9C6\\uA9CA-\\uA9CD\\uA9CF\\uA9DE\\uA9DF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA5C\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB29\\uFB50-\\uFBC1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFDFD\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF66\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\uFFE8-\\uFFEE]|[\\u5536][\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD07-\\uDD33\\uDD37-\\uDD8A\\uDD90-\\uDD9B\\uDDD0-\\uDDFC\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1E\\uDF20-\\uDF23\\uDF30-\\uDF4A\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|[\\u5536][\\uDC00-\\uDC9D]|[\\u5536][\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC58-\\uDC5F\\uDD00-\\uDD1B\\uDD20-\\uDD39\\uDD3F\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE40-\\uDE47\\uDE58\\uDE60-\\uDE7F\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF58-\\uDF72\\uDF78-\\uDF7F]|[\\u5536][\\uDC00-\\uDC48\\uDE60-\\uDE7E]|[\\u5536][\\uDC03-\\uDC37\\uDC49-\\uDC4D\\uDC52-\\uDC65\\uDC83-\\uDCAF\\uDCBB-\\uDCBD\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDC7]|[\\u5536][\\uDE80-\\uDEAA]|[\\u5536][\\uDC00-\\uDF6E]|[\\u5536][\\uDC00-\\uDC62]|[\\u5536][\\uDC00-\\uDE57\\uDE5E-\\uDE81\\uDE83-\\uDE85\\uDE8A-\\uDF78\\uDF7C-\\uDFFF]|[\\u5536][\\uDC00-\\uDC2E]|[\\u5536][\\uDC00-\\uDE38]|[\\u5536][\\uDF00-\\uDF44\\uDF50\\uDF93-\\uDF9F]|[\\u5536][\\uDC00-\\uDCF5\\uDD00-\\uDD26\\uDD29-\\uDD64\\uDD6A-\\uDD6C\\uDD83\\uDD84\\uDD8C-\\uDDA9\\uDDAE-\\uDDDD\\uDE00-\\uDE41\\uDE45\\uDF00-\\uDF56\\uDF60-\\uDF71]|[\\u5536][\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDFCB]|[\\u5536][\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB\\uDEF0\\uDEF1]|[\\u5536][\\uDC00-\\uDC2B\\uDC30-\\uDC93\\uDCA0-\\uDCAE\\uDCB1-\\uDCBE\\uDCC1-\\uDCCF\\uDCD1-\\uDCDF\\uDD2E\\uDD6A\\uDD6B\\uDDE6-\\uDDFF\\uDF00-\\uDF20\\uDF30-\\uDF35\\uDF37-\\uDF7C\\uDF80-\\uDF93\\uDFA0-\\uDFC4\\uDFC6-\\uDFCA\\uDFE0-\\uDFF0]|[\\u5536][\\uDC00-\\uDC3E\\uDC40\\uDC42-\\uDCF7\\uDCF9-\\uDCFC\\uDD00-\\uDD3D\\uDD40-\\uDD43\\uDD50-\\uDD67\\uDDFB-\\uDE40\\uDE45-\\uDE4F\\uDE80-\\uDEC5\\uDF00-\\uDF73]",
	  "PR": "[\\u0024\\u002B\\u005C\\u00A3-\\u00A5\\u00B1\\u058F\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u20A0-\\u20A6\\u20A8-\\u20B5\\u20B7-\\u20B9\\u2116\\u2212\\u2213\\uFE69\\uFF04\\uFFE1\\uFFE5\\uFFE6]",
	  "PO": "[\\u0025\\u00A2\\u00B0\\u0609-\\u060B\\u066A\\u09F2\\u09F3\\u09F9\\u0D79\\u2030-\\u2037\\u20A7\\u20B6\\u2103\\u2109\\uA838\\uFDFC\\uFE6A\\uFF05\\uFFE0]",
	  "OP": "[\\u0028\\u005B\\u007B\\u00A1\\u00BF\\u0F3A\\u0F3C\\u169B\\u201A\\u201E\\u2045\\u207D\\u208D\\u2329\\u2768\\u276A\\u276C\\u276E\\u2770\\u2772\\u2774\\u27C5\\u27E6\\u27E8\\u27EA\\u27EC\\u27EE\\u2983\\u2985\\u2987\\u2989\\u298B\\u298D\\u298F\\u2991\\u2993\\u2995\\u2997\\u29D8\\u29DA\\u29FC\\u2E18\\u2E22\\u2E24\\u2E26\\u2E28\\u3008\\u300A\\u300C\\u300E\\u3010\\u3014\\u3016\\u3018\\u301A\\u301D\\uFD3E\\uFE17\\uFE35\\uFE37\\uFE39\\uFE3B\\uFE3D\\uFE3F\\uFE41\\uFE43\\uFE47\\uFE59\\uFE5B\\uFE5D\\uFF08\\uFF3B\\uFF5B\\uFF5F\\uFF62]|[\\u5536][\\uDE58-\\uDE5A\\uDE86\\uDE88\\uDF79]",
	  "CP": "[\\u0029\\u005D]",
	  "IS": "[\\u002C\\u002E\\u003A\\u003B\\u037E\\u0589\\u060C\\u060D\\u07F8\\u2044\\uFE10\\uFE13\\uFE14]",
	  "HY": "[\\u002D]",
	  "SY": "[\\u002F]",
	  "NU": "[0-9\\u0660-\\u0669\\u066B\\u066C\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uAA50-\\uAA59\\uABF0-\\uABF9]|[\\u5536][\\uDCA0-\\uDCA9]|[\\u5536][\\uDC66-\\uDC6F\\uDCF0-\\uDCF9\\uDD36-\\uDD3F\\uDDD0-\\uDDD9]|[\\u5536][\\uDEC0-\\uDEC9]|[\\u5536][\\uDFCE-\\uDFFF]",
	  "CL": "[\\u007D\\u0F3B\\u0F3D\\u169C\\u2046\\u207E\\u208E\\u232A\\u2769\\u276B\\u276D\\u276F\\u2771\\u2773\\u2775\\u27C6\\u27E7\\u27E9\\u27EB\\u27ED\\u27EF\\u2984\\u2986\\u2988\\u298A\\u298C\\u298E\\u2990\\u2992\\u2994\\u2996\\u2998\\u29D9\\u29DB\\u29FD\\u2E23\\u2E25\\u2E27\\u2E29\\u3001\\u3002\\u3009\\u300B\\u300D\\u300F\\u3011\\u3015\\u3017\\u3019\\u301B\\u301E\\u301F\\uFD3F\\uFE11\\uFE12\\uFE18\\uFE36\\uFE38\\uFE3A\\uFE3C\\uFE3E\\uFE40\\uFE42\\uFE44\\uFE48\\uFE50\\uFE52\\uFE5A\\uFE5C\\uFE5E\\uFF09\\uFF0C\\uFF0E\\uFF3D\\uFF5D\\uFF60\\uFF61\\uFF63\\uFF64]|[\\u5536][\\uDE5B-\\uDE5D\\uDE82\\uDE87\\uDE89\\uDF7A\\uDF7B]",
	  "NL": "[\\u0085]",
	  "GL": "[\\u00A0\\u034F\\u035C-\\u0362\\u0F08\\u0F0C\\u0F12\\u0FD9\\u0FDA\\u180E\\u2007\\u2011\\u202F]",
	  "AI": "[\\u00A7\\u00A8\\u00AA\\u00B2\\u00B3\\u00B6-\\u00BA\\u00BC-\\u00BE\\u00D7\\u00F7\\u02C7\\u02C9-\\u02CB\\u02CD\\u02D0\\u02D8-\\u02DB\\u02DD\\u2015\\u2016\\u2020\\u2021\\u203B\\u2074\\u207F\\u2081-\\u2084\\u2105\\u2113\\u2121\\u2122\\u212B\\u2154\\u2155\\u215B\\u215E\\u2160-\\u216B\\u2170-\\u2179\\u2189\\u2190-\\u2199\\u21D2\\u21D4\\u2200\\u2202\\u2203\\u2207\\u2208\\u220B\\u220F\\u2211\\u2215\\u221A\\u221D-\\u2220\\u2223\\u2225\\u2227-\\u222C\\u222E\\u2234-\\u2237\\u223C\\u223D\\u2248\\u224C\\u2252\\u2260\\u2261\\u2264-\\u2267\\u226A\\u226B\\u226E\\u226F\\u2282\\u2283\\u2286\\u2287\\u2295\\u2299\\u22A5\\u22BF\\u2312\\u2460-\\u24FE\\u2500-\\u254B\\u2550-\\u2574\\u2580-\\u258F\\u2592-\\u2595\\u25A0\\u25A1\\u25A3-\\u25A9\\u25B2\\u25B3\\u25B6\\u25B7\\u25BC\\u25BD\\u25C0\\u25C1\\u25C6-\\u25C8\\u25CB\\u25CE-\\u25D1\\u25E2-\\u25E5\\u25EF\\u2605\\u2606\\u2609\\u260E\\u260F\\u2614-\\u2617\\u261C\\u261E\\u2640\\u2642\\u2660\\u2661\\u2663-\\u2665\\u2667-\\u266A\\u266C\\u266D\\u266F\\u269E\\u269F\\u26BE\\u26BF\\u26C4-\\u26CD\\u26CF-\\u26E1\\u26E3\\u26E8-\\u26FF\\u2757\\u2776-\\u2793\\u2B55-\\u2B59\\u3248-\\u324F\\uFFFD]|[\\u5536][\\uDD00-\\uDD0A\\uDD10-\\uDD2D\\uDD30-\\uDD69\\uDD70-\\uDD9A]",
	  "BB": "[\\u00B4\\u02C8\\u02CC\\u02DF\\u0F01-\\u0F04\\u0F06\\u0F07\\u0F09\\u0F0A\\u0FD0\\u0FD1\\u0FD3\\u1806\\u1FFD\\uA874\\uA875]",
	  "HL": "[\\u05D0-\\u05EA\\u05F0-\\u05F2\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFB4F]",
	  "SA": "[\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0EDC-\\u0EDF\\u1000-\\u103F\\u1050-\\u108F\\u109A-\\u109F\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19DA\\u19DE\\u19DF\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1AA0-\\u1AAD\\uAA60-\\uAA7B\\uAA80-\\uAAC2\\uAADB-\\uAADF]",
	  "JL": "[\\u1100-\\u115F\\uA960-\\uA97C]",
	  "JV": "[\\u1160-\\u11A7\\uD7B0-\\uD7C6]",
	  "JT": "[\\u11A8-\\u11FF\\uD7CB-\\uD7FB]",
	  "NS": "[\\u17D6\\u203C\\u203D\\u2047-\\u2049\\u3005\\u301C\\u303B\\u303C\\u309B-\\u309E\\u30A0\\u30FB\\u30FD\\u30FE\\uA015\\uFE54\\uFE55\\uFF1A\\uFF1B\\uFF65\\uFF9E\\uFF9F]",
	  "ZW": "[\\u200B]",
	  "B2": "[\\u2014\\u2E3A\\u2E3B]",
	  "IN": "[\\u2024-\\u2026\\uFE19]",
	  "WJ": "[\\u2060\\uFEFF]",
	  "ID": "[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u2FF0-\\u2FFB\\u3000\\u3003\\u3004\\u3006\\u3007\\u3012\\u3013\\u3020-\\u3029\\u3030-\\u303A\\u303D-\\u303F\\u3042\\u3044\\u3046\\u3048\\u304A-\\u3062\\u3064-\\u3082\\u3084\\u3086\\u3088-\\u308D\\u308F-\\u3094\\u309F\\u30A2\\u30A4\\u30A6\\u30A8\\u30AA-\\u30C2\\u30C4-\\u30E2\\u30E4\\u30E6\\u30E8-\\u30ED\\u30EF-\\u30F4\\u30F7-\\u30FA\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u3190-\\u31BA\\u31C0-\\u31E3\\u3200-\\u321E\\u3220-\\u3247\\u3250-\\u32FE\\u3300-\\u4DBF\\u4E00-\\uA014\\uA016-\\uA48C\\uA490-\\uA4C6\\uF900-\\uFAFF\\uFE30-\\uFE34\\uFE45\\uFE46\\uFE49-\\uFE4F\\uFE51\\uFE58\\uFE5F-\\uFE66\\uFE68\\uFE6B\\uFF02\\uFF03\\uFF06\\uFF07\\uFF0A\\uFF0B\\uFF0D\\uFF0F-\\uFF19\\uFF1C-\\uFF1E\\uFF20-\\uFF3A\\uFF3C\\uFF3E-\\uFF5A\\uFF5C\\uFF5E\\uFFE2-\\uFFE4]|[\\u5536][\\uDC00\\uDC01]|[\\u5536][\\uDE00-\\uDE02\\uDE10-\\uDE3A\\uDE40-\\uDE48\\uDE50\\uDE51]|[\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536\\u5536][\\uDC00-\\uDFFF]|[\\u5536\\u5536][\\uDC00-\\uDFFD]",
	  "CJ": "[\\u3041\\u3043\\u3045\\u3047\\u3049\\u3063\\u3083\\u3085\\u3087\\u308E\\u3095\\u3096\\u30A1\\u30A3\\u30A5\\u30A7\\u30A9\\u30C3\\u30E3\\u30E5\\u30E7\\u30EE\\u30F5\\u30F6\\u30FC\\u31F0-\\u31FF\\uFF67-\\uFF70]",
	  "H2": "[\\uAC00\\uAC1C\\uAC38\\uAC54\\uAC70\\uAC8C\\uACA8\\uACC4\\uACE0\\uACFC\\uAD18\\uAD34\\uAD50\\uAD6C\\uAD88\\uADA4\\uADC0\\uADDC\\uADF8\\uAE14\\uAE30\\uAE4C\\uAE68\\uAE84\\uAEA0\\uAEBC\\uAED8\\uAEF4\\uAF10\\uAF2C\\uAF48\\uAF64\\uAF80\\uAF9C\\uAFB8\\uAFD4\\uAFF0\\uB00C\\uB028\\uB044\\uB060\\uB07C\\uB098\\uB0B4\\uB0D0\\uB0EC\\uB108\\uB124\\uB140\\uB15C\\uB178\\uB194\\uB1B0\\uB1CC\\uB1E8\\uB204\\uB220\\uB23C\\uB258\\uB274\\uB290\\uB2AC\\uB2C8\\uB2E4\\uB300\\uB31C\\uB338\\uB354\\uB370\\uB38C\\uB3A8\\uB3C4\\uB3E0\\uB3FC\\uB418\\uB434\\uB450\\uB46C\\uB488\\uB4A4\\uB4C0\\uB4DC\\uB4F8\\uB514\\uB530\\uB54C\\uB568\\uB584\\uB5A0\\uB5BC\\uB5D8\\uB5F4\\uB610\\uB62C\\uB648\\uB664\\uB680\\uB69C\\uB6B8\\uB6D4\\uB6F0\\uB70C\\uB728\\uB744\\uB760\\uB77C\\uB798\\uB7B4\\uB7D0\\uB7EC\\uB808\\uB824\\uB840\\uB85C\\uB878\\uB894\\uB8B0\\uB8CC\\uB8E8\\uB904\\uB920\\uB93C\\uB958\\uB974\\uB990\\uB9AC\\uB9C8\\uB9E4\\uBA00\\uBA1C\\uBA38\\uBA54\\uBA70\\uBA8C\\uBAA8\\uBAC4\\uBAE0\\uBAFC\\uBB18\\uBB34\\uBB50\\uBB6C\\uBB88\\uBBA4\\uBBC0\\uBBDC\\uBBF8\\uBC14\\uBC30\\uBC4C\\uBC68\\uBC84\\uBCA0\\uBCBC\\uBCD8\\uBCF4\\uBD10\\uBD2C\\uBD48\\uBD64\\uBD80\\uBD9C\\uBDB8\\uBDD4\\uBDF0\\uBE0C\\uBE28\\uBE44\\uBE60\\uBE7C\\uBE98\\uBEB4\\uBED0\\uBEEC\\uBF08\\uBF24\\uBF40\\uBF5C\\uBF78\\uBF94\\uBFB0\\uBFCC\\uBFE8\\uC004\\uC020\\uC03C\\uC058\\uC074\\uC090\\uC0AC\\uC0C8\\uC0E4\\uC100\\uC11C\\uC138\\uC154\\uC170\\uC18C\\uC1A8\\uC1C4\\uC1E0\\uC1FC\\uC218\\uC234\\uC250\\uC26C\\uC288\\uC2A4\\uC2C0\\uC2DC\\uC2F8\\uC314\\uC330\\uC34C\\uC368\\uC384\\uC3A0\\uC3BC\\uC3D8\\uC3F4\\uC410\\uC42C\\uC448\\uC464\\uC480\\uC49C\\uC4B8\\uC4D4\\uC4F0\\uC50C\\uC528\\uC544\\uC560\\uC57C\\uC598\\uC5B4\\uC5D0\\uC5EC\\uC608\\uC624\\uC640\\uC65C\\uC678\\uC694\\uC6B0\\uC6CC\\uC6E8\\uC704\\uC720\\uC73C\\uC758\\uC774\\uC790\\uC7AC\\uC7C8\\uC7E4\\uC800\\uC81C\\uC838\\uC854\\uC870\\uC88C\\uC8A8\\uC8C4\\uC8E0\\uC8FC\\uC918\\uC934\\uC950\\uC96C\\uC988\\uC9A4\\uC9C0\\uC9DC\\uC9F8\\uCA14\\uCA30\\uCA4C\\uCA68\\uCA84\\uCAA0\\uCABC\\uCAD8\\uCAF4\\uCB10\\uCB2C\\uCB48\\uCB64\\uCB80\\uCB9C\\uCBB8\\uCBD4\\uCBF0\\uCC0C\\uCC28\\uCC44\\uCC60\\uCC7C\\uCC98\\uCCB4\\uCCD0\\uCCEC\\uCD08\\uCD24\\uCD40\\uCD5C\\uCD78\\uCD94\\uCDB0\\uCDCC\\uCDE8\\uCE04\\uCE20\\uCE3C\\uCE58\\uCE74\\uCE90\\uCEAC\\uCEC8\\uCEE4\\uCF00\\uCF1C\\uCF38\\uCF54\\uCF70\\uCF8C\\uCFA8\\uCFC4\\uCFE0\\uCFFC\\uD018\\uD034\\uD050\\uD06C\\uD088\\uD0A4\\uD0C0\\uD0DC\\uD0F8\\uD114\\uD130\\uD14C\\uD168\\uD184\\uD1A0\\uD1BC\\uD1D8\\uD1F4\\uD210\\uD22C\\uD248\\uD264\\uD280\\uD29C\\uD2B8\\uD2D4\\uD2F0\\uD30C\\uD328\\uD344\\uD360\\uD37C\\uD398\\uD3B4\\uD3D0\\uD3EC\\uD408\\uD424\\uD440\\uD45C\\uD478\\uD494\\uD4B0\\uD4CC\\uD4E8\\uD504\\uD520\\uD53C\\uD558\\uD574\\uD590\\uD5AC\\uD5C8\\uD5E4\\uD600\\uD61C\\uD638\\uD654\\uD670\\uD68C\\uD6A8\\uD6C4\\uD6E0\\uD6FC\\uD718\\uD734\\uD750\\uD76C\\uD788]",
	  "H3": "[\\uAC01-\\uAC1B\\uAC1D-\\uAC37\\uAC39-\\uAC53\\uAC55-\\uAC6F\\uAC71-\\uAC8B\\uAC8D-\\uACA7\\uACA9-\\uACC3\\uACC5-\\uACDF\\uACE1-\\uACFB\\uACFD-\\uAD17\\uAD19-\\uAD33\\uAD35-\\uAD4F\\uAD51-\\uAD6B\\uAD6D-\\uAD87\\uAD89-\\uADA3\\uADA5-\\uADBF\\uADC1-\\uADDB\\uADDD-\\uADF7\\uADF9-\\uAE13\\uAE15-\\uAE2F\\uAE31-\\uAE4B\\uAE4D-\\uAE67\\uAE69-\\uAE83\\uAE85-\\uAE9F\\uAEA1-\\uAEBB\\uAEBD-\\uAED7\\uAED9-\\uAEF3\\uAEF5-\\uAF0F\\uAF11-\\uAF2B\\uAF2D-\\uAF47\\uAF49-\\uAF63\\uAF65-\\uAF7F\\uAF81-\\uAF9B\\uAF9D-\\uAFB7\\uAFB9-\\uAFD3\\uAFD5-\\uAFEF\\uAFF1-\\uB00B\\uB00D-\\uB027\\uB029-\\uB043\\uB045-\\uB05F\\uB061-\\uB07B\\uB07D-\\uB097\\uB099-\\uB0B3\\uB0B5-\\uB0CF\\uB0D1-\\uB0EB\\uB0ED-\\uB107\\uB109-\\uB123\\uB125-\\uB13F\\uB141-\\uB15B\\uB15D-\\uB177\\uB179-\\uB193\\uB195-\\uB1AF\\uB1B1-\\uB1CB\\uB1CD-\\uB1E7\\uB1E9-\\uB203\\uB205-\\uB21F\\uB221-\\uB23B\\uB23D-\\uB257\\uB259-\\uB273\\uB275-\\uB28F\\uB291-\\uB2AB\\uB2AD-\\uB2C7\\uB2C9-\\uB2E3\\uB2E5-\\uB2FF\\uB301-\\uB31B\\uB31D-\\uB337\\uB339-\\uB353\\uB355-\\uB36F\\uB371-\\uB38B\\uB38D-\\uB3A7\\uB3A9-\\uB3C3\\uB3C5-\\uB3DF\\uB3E1-\\uB3FB\\uB3FD-\\uB417\\uB419-\\uB433\\uB435-\\uB44F\\uB451-\\uB46B\\uB46D-\\uB487\\uB489-\\uB4A3\\uB4A5-\\uB4BF\\uB4C1-\\uB4DB\\uB4DD-\\uB4F7\\uB4F9-\\uB513\\uB515-\\uB52F\\uB531-\\uB54B\\uB54D-\\uB567\\uB569-\\uB583\\uB585-\\uB59F\\uB5A1-\\uB5BB\\uB5BD-\\uB5D7\\uB5D9-\\uB5F3\\uB5F5-\\uB60F\\uB611-\\uB62B\\uB62D-\\uB647\\uB649-\\uB663\\uB665-\\uB67F\\uB681-\\uB69B\\uB69D-\\uB6B7\\uB6B9-\\uB6D3\\uB6D5-\\uB6EF\\uB6F1-\\uB70B\\uB70D-\\uB727\\uB729-\\uB743\\uB745-\\uB75F\\uB761-\\uB77B\\uB77D-\\uB797\\uB799-\\uB7B3\\uB7B5-\\uB7CF\\uB7D1-\\uB7EB\\uB7ED-\\uB807\\uB809-\\uB823\\uB825-\\uB83F\\uB841-\\uB85B\\uB85D-\\uB877\\uB879-\\uB893\\uB895-\\uB8AF\\uB8B1-\\uB8CB\\uB8CD-\\uB8E7\\uB8E9-\\uB903\\uB905-\\uB91F\\uB921-\\uB93B\\uB93D-\\uB957\\uB959-\\uB973\\uB975-\\uB98F\\uB991-\\uB9AB\\uB9AD-\\uB9C7\\uB9C9-\\uB9E3\\uB9E5-\\uB9FF\\uBA01-\\uBA1B\\uBA1D-\\uBA37\\uBA39-\\uBA53\\uBA55-\\uBA6F\\uBA71-\\uBA8B\\uBA8D-\\uBAA7\\uBAA9-\\uBAC3\\uBAC5-\\uBADF\\uBAE1-\\uBAFB\\uBAFD-\\uBB17\\uBB19-\\uBB33\\uBB35-\\uBB4F\\uBB51-\\uBB6B\\uBB6D-\\uBB87\\uBB89-\\uBBA3\\uBBA5-\\uBBBF\\uBBC1-\\uBBDB\\uBBDD-\\uBBF7\\uBBF9-\\uBC13\\uBC15-\\uBC2F\\uBC31-\\uBC4B\\uBC4D-\\uBC67\\uBC69-\\uBC83\\uBC85-\\uBC9F\\uBCA1-\\uBCBB\\uBCBD-\\uBCD7\\uBCD9-\\uBCF3\\uBCF5-\\uBD0F\\uBD11-\\uBD2B\\uBD2D-\\uBD47\\uBD49-\\uBD63\\uBD65-\\uBD7F\\uBD81-\\uBD9B\\uBD9D-\\uBDB7\\uBDB9-\\uBDD3\\uBDD5-\\uBDEF\\uBDF1-\\uBE0B\\uBE0D-\\uBE27\\uBE29-\\uBE43\\uBE45-\\uBE5F\\uBE61-\\uBE7B\\uBE7D-\\uBE97\\uBE99-\\uBEB3\\uBEB5-\\uBECF\\uBED1-\\uBEEB\\uBEED-\\uBF07\\uBF09-\\uBF23\\uBF25-\\uBF3F\\uBF41-\\uBF5B\\uBF5D-\\uBF77\\uBF79-\\uBF93\\uBF95-\\uBFAF\\uBFB1-\\uBFCB\\uBFCD-\\uBFE7\\uBFE9-\\uC003\\uC005-\\uC01F\\uC021-\\uC03B\\uC03D-\\uC057\\uC059-\\uC073\\uC075-\\uC08F\\uC091-\\uC0AB\\uC0AD-\\uC0C7\\uC0C9-\\uC0E3\\uC0E5-\\uC0FF\\uC101-\\uC11B\\uC11D-\\uC137\\uC139-\\uC153\\uC155-\\uC16F\\uC171-\\uC18B\\uC18D-\\uC1A7\\uC1A9-\\uC1C3\\uC1C5-\\uC1DF\\uC1E1-\\uC1FB\\uC1FD-\\uC217\\uC219-\\uC233\\uC235-\\uC24F\\uC251-\\uC26B\\uC26D-\\uC287\\uC289-\\uC2A3\\uC2A5-\\uC2BF\\uC2C1-\\uC2DB\\uC2DD-\\uC2F7\\uC2F9-\\uC313\\uC315-\\uC32F\\uC331-\\uC34B\\uC34D-\\uC367\\uC369-\\uC383\\uC385-\\uC39F\\uC3A1-\\uC3BB\\uC3BD-\\uC3D7\\uC3D9-\\uC3F3\\uC3F5-\\uC40F\\uC411-\\uC42B\\uC42D-\\uC447\\uC449-\\uC463\\uC465-\\uC47F\\uC481-\\uC49B\\uC49D-\\uC4B7\\uC4B9-\\uC4D3\\uC4D5-\\uC4EF\\uC4F1-\\uC50B\\uC50D-\\uC527\\uC529-\\uC543\\uC545-\\uC55F\\uC561-\\uC57B\\uC57D-\\uC597\\uC599-\\uC5B3\\uC5B5-\\uC5CF\\uC5D1-\\uC5EB\\uC5ED-\\uC607\\uC609-\\uC623\\uC625-\\uC63F\\uC641-\\uC65B\\uC65D-\\uC677\\uC679-\\uC693\\uC695-\\uC6AF\\uC6B1-\\uC6CB\\uC6CD-\\uC6E7\\uC6E9-\\uC703\\uC705-\\uC71F\\uC721-\\uC73B\\uC73D-\\uC757\\uC759-\\uC773\\uC775-\\uC78F\\uC791-\\uC7AB\\uC7AD-\\uC7C7\\uC7C9-\\uC7E3\\uC7E5-\\uC7FF\\uC801-\\uC81B\\uC81D-\\uC837\\uC839-\\uC853\\uC855-\\uC86F\\uC871-\\uC88B\\uC88D-\\uC8A7\\uC8A9-\\uC8C3\\uC8C5-\\uC8DF\\uC8E1-\\uC8FB\\uC8FD-\\uC917\\uC919-\\uC933\\uC935-\\uC94F\\uC951-\\uC96B\\uC96D-\\uC987\\uC989-\\uC9A3\\uC9A5-\\uC9BF\\uC9C1-\\uC9DB\\uC9DD-\\uC9F7\\uC9F9-\\uCA13\\uCA15-\\uCA2F\\uCA31-\\uCA4B\\uCA4D-\\uCA67\\uCA69-\\uCA83\\uCA85-\\uCA9F\\uCAA1-\\uCABB\\uCABD-\\uCAD7\\uCAD9-\\uCAF3\\uCAF5-\\uCB0F\\uCB11-\\uCB2B\\uCB2D-\\uCB47\\uCB49-\\uCB63\\uCB65-\\uCB7F\\uCB81-\\uCB9B\\uCB9D-\\uCBB7\\uCBB9-\\uCBD3\\uCBD5-\\uCBEF\\uCBF1-\\uCC0B\\uCC0D-\\uCC27\\uCC29-\\uCC43\\uCC45-\\uCC5F\\uCC61-\\uCC7B\\uCC7D-\\uCC97\\uCC99-\\uCCB3\\uCCB5-\\uCCCF\\uCCD1-\\uCCEB\\uCCED-\\uCD07\\uCD09-\\uCD23\\uCD25-\\uCD3F\\uCD41-\\uCD5B\\uCD5D-\\uCD77\\uCD79-\\uCD93\\uCD95-\\uCDAF\\uCDB1-\\uCDCB\\uCDCD-\\uCDE7\\uCDE9-\\uCE03\\uCE05-\\uCE1F\\uCE21-\\uCE3B\\uCE3D-\\uCE57\\uCE59-\\uCE73\\uCE75-\\uCE8F\\uCE91-\\uCEAB\\uCEAD-\\uCEC7\\uCEC9-\\uCEE3\\uCEE5-\\uCEFF\\uCF01-\\uCF1B\\uCF1D-\\uCF37\\uCF39-\\uCF53\\uCF55-\\uCF6F\\uCF71-\\uCF8B\\uCF8D-\\uCFA7\\uCFA9-\\uCFC3\\uCFC5-\\uCFDF\\uCFE1-\\uCFFB\\uCFFD-\\uD017\\uD019-\\uD033\\uD035-\\uD04F\\uD051-\\uD06B\\uD06D-\\uD087\\uD089-\\uD0A3\\uD0A5-\\uD0BF\\uD0C1-\\uD0DB\\uD0DD-\\uD0F7\\uD0F9-\\uD113\\uD115-\\uD12F\\uD131-\\uD14B\\uD14D-\\uD167\\uD169-\\uD183\\uD185-\\uD19F\\uD1A1-\\uD1BB\\uD1BD-\\uD1D7\\uD1D9-\\uD1F3\\uD1F5-\\uD20F\\uD211-\\uD22B\\uD22D-\\uD247\\uD249-\\uD263\\uD265-\\uD27F\\uD281-\\uD29B\\uD29D-\\uD2B7\\uD2B9-\\uD2D3\\uD2D5-\\uD2EF\\uD2F1-\\uD30B\\uD30D-\\uD327\\uD329-\\uD343\\uD345-\\uD35F\\uD361-\\uD37B\\uD37D-\\uD397\\uD399-\\uD3B3\\uD3B5-\\uD3CF\\uD3D1-\\uD3EB\\uD3ED-\\uD407\\uD409-\\uD423\\uD425-\\uD43F\\uD441-\\uD45B\\uD45D-\\uD477\\uD479-\\uD493\\uD495-\\uD4AF\\uD4B1-\\uD4CB\\uD4CD-\\uD4E7\\uD4E9-\\uD503\\uD505-\\uD51F\\uD521-\\uD53B\\uD53D-\\uD557\\uD559-\\uD573\\uD575-\\uD58F\\uD591-\\uD5AB\\uD5AD-\\uD5C7\\uD5C9-\\uD5E3\\uD5E5-\\uD5FF\\uD601-\\uD61B\\uD61D-\\uD637\\uD639-\\uD653\\uD655-\\uD66F\\uD671-\\uD68B\\uD68D-\\uD6A7\\uD6A9-\\uD6C3\\uD6C5-\\uD6DF\\uD6E1-\\uD6FB\\uD6FD-\\uD717\\uD719-\\uD733\\uD735-\\uD74F\\uD751-\\uD76B\\uD76D-\\uD787\\uD789-\\uD7A3]",
	  "SG": "[\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF]",
	  "CB": "[\\uFFFC]"
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(49).EventEmitter,
	    TokenType = __webpack_require__(71),
	    BreakType = __webpack_require__(72),
	    util = __webpack_require__(69);

	function LineBreak() {
	    EventEmitter.call(this);
	    this.tokenClass = null;
	    this.previousToken = null;
	    this.previousTokenClass = null;
	}

	util.inherits(LineBreak, EventEmitter);

	var DI = BreakType.DIRECT,
	    IN = BreakType.INDIRECT,
	    CI = BreakType.COMBINING_INDIRECT,
	    CP = BreakType.COMBINING_PROHIBITED,
	    PR = BreakType.PROHIBITED,
	    EX = BreakType.EXPLICIT,
	    pairTable = [
	        [PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, PR, CP, PR, PR, PR, PR, PR, PR],
	        [DI, PR, PR, IN, IN, PR, PR, PR, PR, IN, IN, DI, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, PR, PR, PR, PR, IN, IN, IN, IN, IN, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [PR, PR, PR, IN, IN, IN, PR, PR, PR, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, PR, CI, PR, IN, IN, IN, IN, IN],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, PR, CI, PR, IN, IN, IN, IN, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, DI, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, DI, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, IN, DI, IN, IN, DI, DI, PR, CI, PR, IN, IN, IN, IN, IN],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, IN, IN, IN, IN, IN, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, DI, IN, PR, PR, PR, DI, DI, IN, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, PR, PR, IN, DI, IN, PR, PR, PR, DI, DI, DI, DI, DI, DI, DI, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, PR, CI, PR, IN, IN, IN, IN, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, DI, DI, DI, DI, DI, IN, IN, DI, PR, PR, CI, PR, DI, DI, DI, DI, DI],
	        [DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, DI, PR, DI, DI, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, DI, DI, IN, IN, IN, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, DI],
	        [IN, PR, PR, IN, IN, IN, PR, PR, PR, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, IN, PR, CI, PR, IN, IN, IN, IN, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, IN, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, IN, IN, IN, IN, DI],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, IN, IN],
	        [DI, PR, PR, IN, IN, IN, PR, PR, PR, DI, IN, DI, DI, DI, DI, IN, IN, IN, DI, DI, PR, CI, PR, DI, DI, DI, DI, IN]
	    ];

	LineBreak.prototype.end = function() {
	    if (this.previousToken) {
	        this.emit('action', this.previousToken, this.previousTokenClass, BreakType.EXPLICIT);
	    }
	    this.emit('end');
	};

	LineBreak.prototype.process = function(token, tokenClass) {
	    var breakAction = null;

	    if (this.tokenClass !== null) {
	        if (this.tokenClass !== TokenType.BK && (this.tokenClass !== TokenType.CR || tokenClass === TokenType.LF)) {
	            if (tokenClass === TokenType.SP) {
	                breakAction = BreakType.PROHIBITED;
	            } else if (tokenClass === TokenType.BK ||
	                       tokenClass === TokenType.NL ||
	                       tokenClass === TokenType.LF) {
	                breakAction = BreakType.PROHIBITED;
	                this.tokenClass = TokenType.BK;
	            } else if (tokenClass === TokenType.CR) {
	                breakAction = BreakType.PROHIBITED;
	                this.tokenClass = TokenType.BK;
	            } else {
	                breakAction = pairTable[this.tokenClass][tokenClass];

	                if (breakAction === BreakType.INDIRECT) {
	                    if (this.previousTokenClass === TokenType.SP) {
	                        breakAction = BreakType.INDIRECT;
	                    } else {
	                        breakAction = BreakType.PROHIBITED;
	                    }
	                    this.tokenClass = tokenClass;
	                } else if (breakAction === BreakType.COMBINING_PROHIBITED) {
	                    breakAction = BreakType.COMBINING_PROHIBITED;
	                    if (this.previousTokenClass === TokenType.SP) {
	                        this.tokenClass = tokenClass;
	                    }
	                } else if (breakAction === BreakType.COMBINING_INDIRECT) {
	                    breakAction = BreakType.PROHIBITED;
	                    if (this.previousTokenClass === TokenType.SP) {
	                        breakAction = BreakType.COMBINING_INDIRECT;
	                        this.tokenClass = tokenClass;
	                    }
	                } else {
	                    this.tokenClass = tokenClass;
	                }
	            }
	            this.emit('action', this.previousToken, this.previousTokenClass, breakAction);
	        } else {
	            this.emit('action', this.previousToken, this.previousTokenClass, BreakType.EXPLICIT);
	            if (tokenClass === TokenType.SP) {
	                this.tokenClass = TokenType.WJ;
	            } else if (tokenClass === TokenType.LF || tokenClass === TokenType.NL) {
	                this.tokenClass = TokenType.BK;
	            } else {
	                this.tokenClass = tokenClass;
	            }
	        }
	    } else {
	        if (tokenClass === TokenType.SP) {
	            this.tokenClass = TokenType.WJ;
	        } else if (tokenClass === TokenType.LF || tokenClass === TokenType.NL) {
	            this.tokenClass = TokenType.BK;
	        } else {
	            this.tokenClass = tokenClass;
	        }
	    }
	    this.previousToken = token;
	    this.previousTokenClass = tokenClass;
	};

	module.exports = LineBreak;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var matrix_stack_1 = __webpack_require__(22);
	var DirtyRectContext = (function (_super) {
	    __extends(DirtyRectContext, _super);
	    function DirtyRectContext() {
	        _super.call(this);
	        this._rect = rect_1.Rect.create(0, 0, 0, 0);
	        this.reset();
	    }
	    DirtyRectContext.prototype.addRect = function (x, y, w, h) {
	        var p = point_1.Point.point;
	        this.addPoint(this.transformPoint(x, y, p));
	        this.addPoint(this.transformPoint(x + w, y, p));
	        this.addPoint(this.transformPoint(x + w, y + h, p));
	        this.addPoint(this.transformPoint(x, y + h, p));
	    };
	    DirtyRectContext.prototype.addPoint = function (p) {
	        var x = p.x;
	        var y = p.y;
	        if (!this._pointsNr) {
	            this._minX = this._maxX = x;
	            this._minY = this._maxY = y;
	        }
	        else {
	            if (this._minX > x) {
	                this._minX = x;
	            }
	            if (this._maxX < x) {
	                this._maxX = x;
	            }
	            if (this._minY > y) {
	                this._minY = y;
	            }
	            if (this._maxY < y) {
	                this._maxY = y;
	            }
	        }
	        this._pointsNr++;
	    };
	    DirtyRectContext.prototype.getRect = function () {
	        var r = this._rect;
	        r.x = this._minX;
	        r.y = this._minY;
	        r.w = this._maxX - this._minX;
	        r.h = this._maxY - this._minY;
	        return r;
	    };
	    DirtyRectContext.prototype.reset = function () {
	        this._pointsNr = 0;
	        this.identity();
	        this._minX = -1;
	        this._minY = -1;
	        this._maxX = -1;
	        this._maxY = -1;
	    };
	    DirtyRectContext.create = function () {
	        return new DirtyRectContext();
	    };
	    return DirtyRectContext;
	}(matrix_stack_1.MatrixStack));
	exports.DirtyRectContext = DirtyRectContext;
	;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Events = __webpack_require__(6);
	var inputEventAdapter = __webpack_require__(15);
	/**
	 * Behavior代表控件的一种行为特性，比如Resizable/Movable/Draggable/Droppable等。
	 * 把这些行为特性抽象出来单独实现，一方面可以避免让Widget变得太复杂，另一方面可以最大限度的重用这些行为特性。
	 *
	 * 任何一个Widget，都可以使用useBehavior来启用某种Behavior。比如下面的代码让image具有Resizable的特性:
	 *
	 * ```
	 * image.useBehavior("resizable", {all:true});
	 * ```
	 */
	var Behavior = (function () {
	    /**
	     * 构造函数。主要是注册一些事件，把这些事件映射在成员函数上，子类只需要重载这些成员函数即可。
	     * @param type 类型名。
	     * @param widget Behavior作用的Widget。
	     * @param options 初始化参数，与具体的Behavior有关。
	     */
	    function Behavior(type, widget, options) {
	        this.type = type;
	        this.widget = widget;
	        this.keyDownGlobalFunc = this.onKeyDownGlobal.bind(this);
	        this.keyUpGlobalFunc = this.onKeyUpGlobal.bind(this);
	        this.pointerEnterFunc = this.onPointerEnter.bind(this);
	        this.pointerLeaveFunc = this.onPointerLeave.bind(this);
	        this.pointerDownFunc = this.onPointerDown.bind(this);
	        this.pointerMoveFunc = this.onPointerMove.bind(this);
	        this.pointerUpFunc = this.onPointerUp.bind(this);
	        this.keyDownFunc = this.onKeyDown.bind(this);
	        this.keyUpFunc = this.onKeyUp.bind(this);
	        inputEventAdapter.on(Events.KEYDOWN, this.keyDownGlobalFunc);
	        inputEventAdapter.on(Events.KEYUP, this.keyUpGlobalFunc);
	        widget.on(Events.POINTER_ENTER, this.pointerEnterFunc);
	        widget.on(Events.POINTER_LEAVE, this.pointerLeaveFunc);
	        widget.on(Events.POINTER_DOWN, this.pointerDownFunc);
	        widget.on(Events.POINTER_MOVE, this.pointerMoveFunc);
	        widget.on(Events.DISPOSE, this.dispose.bind(this));
	        widget.on(Events.POINTER_UP, this.pointerUpFunc);
	        widget.on(Events.KEYDOWN, this.keyDownFunc);
	        widget.on(Events.KEYUP, this.keyUpFunc);
	        this.init(options || {});
	    }
	    /**
	     * 初始化。在具体的Behavior的实现中，可以重载此函数做些初始化的工作。
	     * @param options 初始化参数，与具体的Behavior有关。
	     */
	    Behavior.prototype.init = function (options) {
	        return this;
	    };
	    Behavior.prototype.setOptions = function (options) {
	        this.init(options);
	    };
	    /**
	     * 析构函数。 主要是注销事件的处理函数。
	     */
	    Behavior.prototype.dispose = function () {
	        var widget = this.widget;
	        inputEventAdapter.off(Events.KEYDOWN, this.keyDownGlobalFunc);
	        inputEventAdapter.off(Events.KEYUP, this.keyUpGlobalFunc);
	        widget.off(Events.POINTER_ENTER, this.pointerEnterFunc);
	        widget.off(Events.POINTER_LEAVE, this.pointerLeaveFunc);
	        widget.off(Events.POINTER_DOWN, this.pointerDownFunc);
	        widget.off(Events.POINTER_MOVE, this.pointerMoveFunc);
	        widget.off(Events.POINTER_UP, this.pointerUpFunc);
	        widget.off(Events.KEYDOWN, this.keyDownFunc);
	        widget.off(Events.KEYUP, this.keyUpFunc);
	        this.widget = null;
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的按键按下事件。
	     */
	    Behavior.prototype.onKeyDown = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的按键抬起事件。
	     */
	    Behavior.prototype.onKeyUp = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理全局的按键按下事件。
	     */
	    Behavior.prototype.onKeyDownGlobal = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理全局的按键抬起事件。
	     */
	    Behavior.prototype.onKeyUpGlobal = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的PointerEnter事件。
	     */
	    Behavior.prototype.onPointerEnter = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的PointerLeave事件。
	     */
	    Behavior.prototype.onPointerLeave = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的PointerDown事件。
	     */
	    Behavior.prototype.onPointerDown = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的PointerMove事件。
	     */
	    Behavior.prototype.onPointerMove = function (evt) {
	    };
	    /**
	     * 子类重载此函数，可以处理Widget的PointerUp事件。
	     */
	    Behavior.prototype.onPointerUp = function (evt) {
	    };
	    return Behavior;
	}());
	exports.Behavior = Behavior;
	/**
	 * Behavior工厂类。
	 *
	 * 具体的Behavior需要调用BehaviorFactory.register注册自己，useBehavior才能找到对应的Behavior。
	 */
	var BehaviorFactory = (function () {
	    function BehaviorFactory() {
	    }
	    /**
	     * 注册Behavior
	     * @param type Behavior的类型名。
	     * @param creator Behavior创建函数。
	     */
	    BehaviorFactory.register = function (type, creator) {
	        BehaviorFactory.creators[type] = creator;
	    };
	    /**
	     * 创建Behavior。目前只在useBehavior中会用到。
	     * @param type Behavior的类型名。
	     * @param widget Behavior作用的Widget。
	     * @param options Behavior的初始化参数。
	     */
	    BehaviorFactory.create = function (type, widget, options) {
	        var create = BehaviorFactory.creators[type];
	        return create ? create(widget, options) : null;
	    };
	    BehaviorFactory.creators = {};
	    return BehaviorFactory;
	}());
	exports.BehaviorFactory = BehaviorFactory;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var factory_1 = __webpack_require__(24);
	/**
	 * 子控件布局算法。
	 */
	var Layouter = (function () {
	    function Layouter() {
	    }
	    Object.defineProperty(Layouter.prototype, "type", {
	        /**
	         * 布局算法的名称。
	         */
	        get: function () {
	            return "dummy";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 设置参数。
	     */
	    Layouter.prototype.setOptions = function (options) {
	        return this;
	    };
	    /**
	     * 对子控件进行布局。
	     * @param widget 父控件
	     * @param children 只控件
	     * @returns 全部子控件需要的区域。
	     */
	    Layouter.prototype.layoutChildren = function (widget, children, rect) {
	        return null;
	    };
	    Layouter.prototype.createParam = function (options) {
	        return null;
	    };
	    /**
	     * 从JSON数据创建。
	     */
	    Layouter.prototype.fromJson = function (json) {
	        for (var key in json) {
	            var value = json[key];
	            var type = typeof value;
	            if (type === "number" || type === "string") {
	                this[key] = value;
	            }
	        }
	        return this;
	    };
	    /**
	     * 转换成JSON数据。
	     */
	    Layouter.prototype.toJson = function () {
	        var json = {};
	        for (var key in this) {
	            var value = this[key];
	            var type = typeof value;
	            if (type === "number" || type === "string") {
	                json[key] = value;
	            }
	        }
	        return json;
	    };
	    Layouter.evalValue = function (value, total) {
	        var v = parseFloat(value);
	        if (typeof value === "number") {
	            return v;
	        }
	        if (value.indexOf("%") > 0) {
	            v = total * v / 100;
	        }
	        if (v < 0) {
	            v = total + v;
	        }
	        return v;
	    };
	    return Layouter;
	}());
	exports.Layouter = Layouter;
	/**
	 * Layouter的工厂。
	 */
	var LayouterFactory = (function (_super) {
	    __extends(LayouterFactory, _super);
	    function LayouterFactory() {
	        _super.apply(this, arguments);
	    }
	    LayouterFactory.register = function (type, creator) {
	        return LayouterFactory.factory.register(type, creator);
	    };
	    LayouterFactory.create = function (type, options) {
	        return LayouterFactory.factory.create(type, options);
	    };
	    LayouterFactory.createWithJson = function (json) {
	        var layouter = LayouterFactory.create(json.type, null);
	        layouter.fromJson(json);
	        return layouter;
	    };
	    LayouterFactory.factory = new factory_1.Factory();
	    return LayouterFactory;
	}(factory_1.Factory));
	exports.LayouterFactory = LayouterFactory;
	var LayouterParam = (function () {
	    function LayouterParam(type) {
	        this.type = type;
	    }
	    /**
	     * 从JSON数据创建。
	     */
	    LayouterParam.prototype.fromJson = function (json) {
	        for (var key in json) {
	            var value = json[key];
	            var type = typeof value;
	            if (type === "number" || type === "string") {
	                this[key] = value;
	            }
	        }
	        return this;
	    };
	    /**
	     * 转换成JSON数据。
	     */
	    LayouterParam.prototype.toJson = function () {
	        var json = {};
	        for (var key in this) {
	            var value = this[key];
	            var type = typeof value;
	            if (type === "number" || type === "string") {
	                json[key] = value;
	            }
	        }
	        return json;
	    };
	    return LayouterParam;
	}());
	exports.LayouterParam = LayouterParam;
	;
	/**
	 * LayouterParam的工厂。
	 */
	var LayouterParamFactory = (function (_super) {
	    __extends(LayouterParamFactory, _super);
	    function LayouterParamFactory() {
	        _super.apply(this, arguments);
	    }
	    LayouterParamFactory.register = function (type, creator) {
	        return LayouterParamFactory.factory.register(type, creator);
	    };
	    LayouterParamFactory.create = function (type, options) {
	        return LayouterParamFactory.factory.create(type, options);
	    };
	    LayouterParamFactory.createWithJson = function (json) {
	        var layouter = LayouterParamFactory.create(json.type, null);
	        layouter.fromJson(json);
	        return layouter;
	    };
	    LayouterParamFactory.factory = new factory_1.Factory();
	    return LayouterParamFactory;
	}(factory_1.Factory));
	exports.LayouterParamFactory = LayouterParamFactory;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var json_serializer_1 = __webpack_require__(80);
	var iview_modal_1 = __webpack_require__(81);
	var iview_modal_2 = __webpack_require__(81);
	;
	/**
	 * 数据源。如果指定了value，直接从value获取数据。否则通过path从ViewModal中获取数据。
	 */
	var BindingDataSource = (function (_super) {
	    __extends(BindingDataSource, _super);
	    function BindingDataSource(path, value, mode, updateTiming, validationRule, converter) {
	        _super.call(this);
	        this.converter = converter;
	        this.type = BindingDataSource.TYPE;
	        this.validationRule = validationRule;
	        this.mode = mode || iview_modal_2.BindingMode.TWO_WAY;
	        this.updateTiming = updateTiming !== undefined ? updateTiming : iview_modal_2.UpdateTiming.CHANGED;
	        if (path !== undefined) {
	            this.path = path;
	        }
	        if (value !== undefined) {
	            this.value = value;
	        }
	    }
	    BindingDataSource.create = function (path, value, mode, updateTiming, validationRule, converter) {
	        return new BindingDataSource(path, value, mode, updateTiming, validationRule, converter);
	    };
	    BindingDataSource.TYPE = "data";
	    return BindingDataSource;
	}(json_serializer_1.JsonSerializer));
	exports.BindingDataSource = BindingDataSource;
	;
	/**
	 * 命令源。
	 */
	var BindingCommandSource = (function (_super) {
	    __extends(BindingCommandSource, _super);
	    function BindingCommandSource(command, commandArgs) {
	        _super.call(this);
	        this.command = command;
	        this.eventHandler = null;
	        this.commandArgs = commandArgs;
	        this.type = BindingCommandSource.TYPE;
	    }
	    BindingCommandSource.create = function (command, commandArgs) {
	        return new BindingCommandSource(command, commandArgs);
	    };
	    BindingCommandSource.TYPE = "command";
	    return BindingCommandSource;
	}(json_serializer_1.JsonSerializer));
	exports.BindingCommandSource = BindingCommandSource;
	/**
	 * 单项数据绑定规则。
	 */
	var BindingRuleItem = (function () {
	    function BindingRuleItem(prop, source) {
	        this.prop = prop;
	        this.source = source;
	    }
	    BindingRuleItem.prototype.toJson = function () {
	        return { prop: this.prop, source: this.source.toJson() };
	    };
	    BindingRuleItem.prototype.fromJson = function (json) {
	        this.prop = json.prop;
	        var source = json.source;
	        if (source.command) {
	            this.source = BindingCommandSource.create(source.command, source.commandArgs);
	        }
	        else {
	            this.source = BindingDataSource.create(source.path, source.value, source.mode, source.updateTiming, source.validationRule, source.converter);
	        }
	        return this;
	    };
	    BindingRuleItem.create = function (prop, source) {
	        return new BindingRuleItem(prop, source);
	    };
	    return BindingRuleItem;
	}());
	exports.BindingRuleItem = BindingRuleItem;
	;
	/**
	 * 数据绑定规则。
	 */
	var BindingRule = (function () {
	    function BindingRule(json) {
	        this.fromJson(json);
	    }
	    BindingRule.prototype.getSource = function (prop) {
	        return this._items[prop];
	    };
	    BindingRule.prototype.forEach = function (func) {
	        var items = this._items;
	        for (var prop in items) {
	            var item = items[prop];
	            func(prop, item);
	        }
	    };
	    BindingRule.prototype.fromJson = function (json) {
	        this._items = {};
	        for (var prop in json) {
	            var source = null;
	            var sJson = json[prop];
	            if (sJson.command) {
	                source = BindingCommandSource.create(sJson.command, sJson.commandArgs);
	            }
	            else {
	                source = BindingDataSource.create(sJson.path, sJson.value, sJson.mode, sJson.updateTiming, sJson.validationRule, sJson.converter);
	            }
	            this._items[prop] = BindingRuleItem.create(prop, source);
	        }
	        return this;
	    };
	    BindingRule.prototype.toJson = function () {
	        var json = {};
	        var items = this._items;
	        for (var prop in items) {
	            var item = items[prop];
	            json[prop] = item.toJson();
	        }
	        return json;
	    };
	    BindingRule.parse = function (rule) {
	        if (typeof rule === "string") {
	            rule = { value: { path: rule } };
	        }
	        for (var key in rule) {
	            var dataSource = rule[key];
	            if (typeof dataSource === "string") {
	                rule[key] = { path: dataSource };
	                dataSource = rule[key];
	            }
	            var path = dataSource.path;
	            if (path && path.charAt(0) !== '/') {
	                dataSource.path = '/' + dataSource.path;
	            }
	            var mode = dataSource.mode;
	            if (mode && typeof mode === "string") {
	                dataSource.mode = iview_modal_1.toBindingMode(mode);
	            }
	            var updateTiming = dataSource.updateTiming;
	            if (updateTiming && typeof updateTiming === "string") {
	                dataSource.updateTiming = iview_modal_1.toUpdateTiming(updateTiming);
	            }
	        }
	        return rule;
	    };
	    BindingRule.create = function (rule) {
	        var json = BindingRule.parse(rule);
	        return new BindingRule(json);
	    };
	    return BindingRule;
	}());
	exports.BindingRule = BindingRule;


/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * 把当前对象转换成JSON对象或从JSON对象来初始化当前对象。
	 */
	var JsonSerializer = (function () {
	    function JsonSerializer() {
	    }
	    JsonSerializer.prototype.toJson = function () {
	        var json = {};
	        for (var key in this) {
	            var value = this[key];
	            if (this.hasOwnProperty(key) && typeof value !== "function") {
	                json[key] = value;
	            }
	        }
	        return json;
	    };
	    JsonSerializer.prototype.fromJson = function (json) {
	        for (var key in json) {
	            this[key] = json[key];
	        }
	    };
	    return JsonSerializer;
	}());
	exports.JsonSerializer = JsonSerializer;


/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	;
	;
	/**
	 * 数据绑定模式。
	 */
	(function (BindingMode) {
	    /**
	     * 双向数据绑定。
	     * 界面数据变化时自动更新ViewModal，ViewModal数据有变化时自动更新界面。
	     */
	    BindingMode[BindingMode["TWO_WAY"] = 0] = "TWO_WAY";
	    /**
	     * 单向数据绑定。
	     * 界面数据变化时不更新ViewModal，ViewModal数据有变化时自动更新界面。
	     */
	    BindingMode[BindingMode["ONE_WAY"] = 1] = "ONE_WAY";
	    /**
	     * 只在初始化时绑定。
	     * 界面数据变化时不更新ViewModal，ViewModal数据有变化时不更新界面。
	     */
	    BindingMode[BindingMode["ONE_TIME"] = 2] = "ONE_TIME";
	    /**
	     * 单向数据绑定。
	     * 界面数据变化时自动更新ViewModal，ViewModal数据有变化时不更新界面。
	     */
	    BindingMode[BindingMode["ONE_WAY_TO_SOURCE"] = 3] = "ONE_WAY_TO_SOURCE";
	})(exports.BindingMode || (exports.BindingMode = {}));
	var BindingMode = exports.BindingMode;
	;
	var BindingModeNames = ["two-way", "one-way", "one-time", "one-way-to-source"];
	function toBindingMode(name) {
	    return Math.max(0, BindingModeNames.indexOf(name));
	}
	exports.toBindingMode = toBindingMode;
	/**
	 * 更新ViewModal的时机。
	 */
	(function (UpdateTiming) {
	    /**
	     * 有变化时立即更新(如编辑器正在输入)。
	     */
	    UpdateTiming[UpdateTiming["CHANGING"] = 0] = "CHANGING";
	    /**
	     * 变化完成时才更新(如编辑器失去焦点时)。
	     */
	    UpdateTiming[UpdateTiming["CHANGED"] = 1] = "CHANGED";
	    /**
	     * 手动更新。
	     */
	    UpdateTiming[UpdateTiming["EXPLICIT"] = 2] = "EXPLICIT";
	})(exports.UpdateTiming || (exports.UpdateTiming = {}));
	var UpdateTiming = exports.UpdateTiming;
	;
	var UpdateTimingNames = ["changing", "changed", "explicit"];
	function toUpdateTiming(name) {
	    return Math.max(0, UpdateTimingNames.indexOf(name));
	}
	exports.toUpdateTiming = toUpdateTiming;


/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * 可循环的创建器。
	 */
	var RecyclableCreator = (function () {
	    function RecyclableCreator(ctor) {
	        this.cache = [];
	        this.ctor = ctor;
	    }
	    /**
	     * 回收对象。
	     */
	    RecyclableCreator.prototype.recycle = function (obj) {
	        if (obj) {
	            this.cache.push(obj);
	        }
	    };
	    /**
	     * 创建对象。优先从缓存中取对象，如果缓存中没有对象，则创建新对象。
	     */
	    RecyclableCreator.prototype.create = function () {
	        var me = this;
	        if (this.cache.length) {
	            return this.cache.pop();
	        }
	        else {
	            var obj = (this.ctor());
	            obj.recycle = function () {
	                me.recycle(this);
	            };
	            return obj;
	        }
	    };
	    return RecyclableCreator;
	}());
	exports.RecyclableCreator = RecyclableCreator;
	;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var html_element_1 = __webpack_require__(84);
	var HtmlEdit = (function (_super) {
	    __extends(HtmlEdit, _super);
	    function HtmlEdit() {
	        _super.apply(this, arguments);
	        this.e = Events.ChangeEvent.create();
	    }
	    Object.defineProperty(HtmlEdit.prototype, "inputType", {
	        set: function (value) {
	            if (this.tag === "input") {
	                this.element.type = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlEdit.prototype, "text", {
	        get: function () {
	            return this.element.value;
	        },
	        set: function (value) {
	            this.element.value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    HtmlEdit.prototype.show = function () {
	        _super.prototype.show.call(this);
	        this.element.focus();
	        this._visible = true;
	        this.dispatchEvent({ type: Events.SHOW });
	        return this;
	    };
	    HtmlEdit.prototype.hide = function () {
	        if (this._visible) {
	            this._visible = false;
	            this.element.blur();
	            this.dispatchEvent({ type: Events.HIDE });
	        }
	        this.removeAllListeners();
	        return _super.prototype.hide.call(this);
	    };
	    HtmlEdit.prototype.create = function (tag) {
	        _super.prototype.create.call(this, tag);
	        var me = this;
	        var element = this.element;
	        element.onkeyup = function (e) {
	            var detail = { oldValue: this.value, newValue: this.value };
	            if (e.keyCode === 13 && tag === "input") {
	                this.blur();
	                me.e.init(Events.CHANGE, detail);
	            }
	            else {
	                me.e.init(Events.CHANGING, detail);
	            }
	            me.dispatchEvent(me.e);
	        };
	        element.oninput = function (evt) {
	            var detail = { oldValue: this.value, newValue: this.value };
	            me.e.init(Events.CHANGING, detail);
	            me.dispatchEvent(me.e);
	        };
	        element.onchange = function (evt) {
	            var detail = { oldValue: this.value, newValue: this.value };
	            me.e.init(Events.CHANGE, detail);
	            me.dispatchEvent(me.e);
	        };
	        element.onblur = function (evt) {
	            me.hide();
	        };
	        return this;
	    };
	    Object.defineProperty(HtmlEdit, "input", {
	        get: function () {
	            if (!HtmlEdit._input) {
	                HtmlEdit._input = new HtmlEdit();
	                HtmlEdit._input.create("input");
	                HtmlEdit._input.element.type = "text";
	            }
	            return HtmlEdit._input;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlEdit, "textArea", {
	        get: function () {
	            if (!HtmlEdit._textArea) {
	                HtmlEdit._textArea = new HtmlEdit();
	                HtmlEdit._textArea.create("textarea");
	            }
	            return HtmlEdit._textArea;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return HtmlEdit;
	}(html_element_1.HtmlElement));
	exports.HtmlEdit = HtmlEdit;
	;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var emitter_1 = __webpack_require__(4);
	var HtmlElement = (function (_super) {
	    __extends(HtmlElement, _super);
	    function HtmlElement() {
	        _super.call(this);
	    }
	    Object.defineProperty(HtmlElement.prototype, "tag", {
	        get: function () {
	            return this._tag;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlElement.prototype, "z", {
	        set: function (value) {
	            this.element.style.zIndex = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlElement.prototype, "textColor", {
	        set: function (color) {
	            this.element.style.color = color;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlElement.prototype, "backgroundColor", {
	        set: function (color) {
	            this.element.style.background = color;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlElement.prototype, "fontSize", {
	        set: function (fontSize) {
	            this.element.style.fontSize = fontSize + "px";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(HtmlElement.prototype, "fontFamily", {
	        set: function (fontFamily) {
	            this.element.style.fontFamily = fontFamily;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    HtmlElement.prototype.show = function () {
	        this.element.style.visibility = 'visible';
	        this.element.style.opacity = 1;
	        this.element.style.display = 'block';
	        return this;
	    };
	    HtmlElement.prototype.hide = function () {
	        this.element.style.opacity = 0;
	        this.element.style.zIndex = -1;
	        this.element.style.visibility = 'hidden';
	        this.element.style.display = 'none';
	        return this;
	    };
	    HtmlElement.prototype.move = function (x, y) {
	        this.element.style.position = "absolute";
	        this.element.style.left = x + "px";
	        this.element.style.top = y + "px";
	        return this;
	    };
	    HtmlElement.prototype.resize = function (w, h) {
	        this.element.style.width = w + "px";
	        this.element.style.height = (h - 4) + "px";
	        return this;
	    };
	    HtmlElement.prototype.destroy = function () {
	        if (this.element) {
	            document.body.removeChild(this.element);
	            this.element = null;
	        }
	    };
	    HtmlElement.prototype.create = function (tag) {
	        this.element = document.createElement(tag);
	        document.body.appendChild(this.element);
	        this._tag = tag;
	        return this;
	    };
	    return HtmlElement;
	}(emitter_1.Emitter));
	exports.HtmlElement = HtmlElement;
	;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var Page = (function (_super) {
	    __extends(Page, _super);
	    function Page(type) {
	        _super.call(this, type || Page.TYPE);
	    }
	    Page.create = function (options) {
	        return Page.recycleBin.create().reset(Page.TYPE, options);
	    };
	    Page.TYPE = "page";
	    Page.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Page(); });
	    return Page;
	}(widget_1.Widget));
	exports.Page = Page;
	;
	widget_factory_1.WidgetFactory.register(Page.TYPE, Page.create);


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var emitter_1 = __webpack_require__(4);
	var Events = __webpack_require__(6);
	/**
	 * 表示屏幕大小和密度。
	 */
	var ViewPort = (function (_super) {
	    __extends(ViewPort, _super);
	    function ViewPort() {
	        _super.call(this);
	    }
	    ViewPort.prototype.getScaleValues = function () {
	        var scale = (1 / (this.density)).toString();
	        var str = "initial-scale=SS, minimum-scale=SS, maximum-scale=SS, user-scalable=0";
	        return "target-densitydpi=device-dpi, width=device-width, " + str.replace(/SS/g, scale);
	    };
	    ViewPort.prototype.updateHeadViewportMeta = function (value) {
	        var meta = null;
	        var head = document.getElementsByTagName('head')[0];
	        var arr = document.getElementsByTagName('meta');
	        for (var i = 0; i < arr.length; i++) {
	            var iter = arr[i];
	            if (iter.name === "viewport") {
	                meta = iter;
	                break;
	            }
	        }
	        if (!meta) {
	            meta = document.createElement('meta');
	            head.appendChild(meta);
	        }
	        meta.name = 'viewport';
	        meta.content = value;
	    };
	    ViewPort.prototype.init = function (width, height, density) {
	        var _this = this;
	        this._density = density || window.devicePixelRatio;
	        this.updateHeadViewportMeta(this.getScaleValues());
	        this._width = width || window.innerWidth;
	        this._height = height || window.innerHeight;
	        window.addEventListener(Events.RESIZE, function (evt) {
	            _this._width = window.innerWidth;
	            _this._height = window.innerHeight;
	            _this.dispatchEvent({ type: "resize" });
	        });
	    };
	    Object.defineProperty(ViewPort.prototype, "width", {
	        get: function () {
	            return this._width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewPort.prototype, "height", {
	        get: function () {
	            return this._height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewPort.prototype, "w", {
	        get: function () {
	            return this._width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewPort.prototype, "h", {
	        get: function () {
	            return this._height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ViewPort.prototype, "density", {
	        get: function () {
	            return this._density;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ViewPort.create = function (width, height, density) {
	        var vp = new ViewPort();
	        vp.init(width, height, density);
	        return vp;
	    };
	    return ViewPort;
	}(emitter_1.Emitter));
	exports.ViewPort = ViewPort;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 页面管理器。管理多个页面，只有一个页面处于活跃状态，仅该页面可见，可以处理事件。
	 * value表示该活跃页面的索引。
	 */
	var Pages = (function (_super) {
	    __extends(Pages, _super);
	    function Pages() {
	        _super.call(this, Pages.TYPE);
	    }
	    Object.defineProperty(Pages.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            var n = this.children.length - 1;
	            this._value = Math.max(0, Math.min(value, n));
	            this.requestRedraw();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pages.prototype.setValueByPage = function (page) {
	        this.value = this.indexOfChild(page);
	        return this;
	    };
	    Object.defineProperty(Pages.prototype, "target", {
	        get: function () {
	            if (this.children.length) {
	                return this.children[this.value];
	            }
	            else {
	                return null;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pages.prototype.relayoutChildren = function () {
	        var r = this.getLayoutRect();
	        this.children.forEach(function (child) {
	            child.moveResizeTo(r.x, r.y, r.w, r.h);
	        });
	        return r;
	    };
	    Pages.prototype.drawChildren = function (ctx) {
	        var target = this.target;
	        if (target) {
	            target.draw(ctx);
	        }
	        return this;
	    };
	    Pages.prototype.findEventTargetChild = function (x, y, ctx) {
	        return this.target;
	    };
	    Pages.prototype.onReset = function () {
	        this.value = 0;
	    };
	    Pages.create = function (options) {
	        return Pages.recycleBin.create().reset(Pages.TYPE, options);
	    };
	    Pages.TYPE = "pages";
	    Pages.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Pages(); });
	    return Pages;
	}(widget_1.Widget));
	exports.Pages = Pages;
	;
	widget_factory_1.WidgetFactory.register(Pages.TYPE, Pages.create);


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var emitter_1 = __webpack_require__(4);
	/**
	 * 负责渲染UI的主循环。为了省电，只有在调用requestRedraw之后，才会触发下一次渲染循环。
	 * 每个渲染循环分为三个阶段：
	 *
	 * *.predraw 绘制前做一些工作，通常用于动画改变对象的属性。
	 *
	 * *.draw 绘制阶段。
	 *
	 * *.postdraw 绘制后一些收尾工作，如果绘制阶段只是生成命令队列，可以在此阶段提交。
	 *
	 */
	var MainLoop = (function (_super) {
	    __extends(MainLoop, _super);
	    function MainLoop() {
	        _super.call(this);
	        this.pendingRedraw = 0;
	        this.predrawEvent = Events.TickEvent.create(Events.PRETICK);
	        this.drawEvent = Events.TickEvent.create(Events.TICK);
	        this.postdrawEvent = Events.TickEvent.create(Events.POSTTICK);
	    }
	    MainLoop.prototype.requestRedraw = function () {
	        var _this = this;
	        if (!this.pendingRedraw++) {
	            requestAnimationFrame(function (evt) {
	                _this.exec();
	            });
	        }
	    };
	    MainLoop.prototype.exec = function () {
	        var fps = 0;
	        var time = Date.now();
	        var deltaTime = performance.now();
	        var detail = { fps: fps, time: time, deltaTime: deltaTime };
	        this.drawEvent.init(Events.PRETICK, detail);
	        this.predrawEvent.init(Events.TICK, detail);
	        this.postdrawEvent.init(Events.POSTTICK, detail);
	        this.pendingRedraw = 0;
	        this.dispatchEvent(this.predrawEvent);
	        this.dispatchEvent(this.drawEvent);
	        this.dispatchEvent(this.postdrawEvent);
	    };
	    MainLoop.create = function () {
	        return new MainLoop();
	    };
	    return MainLoop;
	}(emitter_1.Emitter));
	exports.MainLoop = MainLoop;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var style_1 = __webpack_require__(3);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 图片控件。
	 */
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image() {
	        _super.call(this, Image.TYPE);
	    }
	    Object.defineProperty(Image.prototype, "image", {
	        get: function () {
	            return this._style.backGroundImage;
	        },
	        set: function (image) {
	            this._style.backGroundImage = image;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Image.prototype, "drawType", {
	        get: function () {
	            return this._style.backGroundImageDrawType;
	        },
	        set: function (drawType) {
	            this._style.backGroundImageDrawType = drawType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Image.prototype, "value", {
	        get: function () {
	            var image = this._style.backGroundImage;
	            return image ? image.src : null;
	        },
	        set: function (url) {
	            var _this = this;
	            this._style.backGroundImage = image_tile_1.ImageTile.create(url, function (evt) {
	                _this.requestRedraw();
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Image.prototype.onToJson = function (json) {
	        if (this._style) {
	            json.style = this._style.toJson();
	        }
	    };
	    Image.prototype.onFromJson = function (json) {
	        if (json.style) {
	            this._style = style_1.Style.create(json.style);
	        }
	    };
	    Image.prototype.setStyle = function (state, style) {
	        this._style = style;
	        return this;
	    };
	    Image.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        var style = style_1.Style.create();
	        style.fontSize = 12;
	        style.textColor = "Black";
	        style.backGroundImageDrawType = image_tile_1.ImageDrawType.DEFAULT;
	        this._style = style;
	    };
	    Image.prototype.getStyle = function () {
	        return this._style;
	    };
	    Image.create = function (options) {
	        return Image.recycleBin.create().reset(Image.TYPE, options);
	    };
	    Image.TYPE = "image";
	    Image.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Image(); });
	    return Image;
	}(widget_1.Widget));
	exports.Image = Image;
	;
	widget_factory_1.WidgetFactory.register(Image.TYPE, Image.create);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var Group = (function (_super) {
	    __extends(Group, _super);
	    function Group() {
	        _super.call(this, Group.TYPE);
	    }
	    Group.create = function (options) {
	        return Group.recycleBin.create().reset(Group.TYPE, options);
	    };
	    Group.TYPE = "group";
	    Group.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Group(); });
	    return Group;
	}(widget_1.Widget));
	exports.Group = Group;
	;
	widget_factory_1.WidgetFactory.register(Group.TYPE, Group.create);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var window_1 = __webpack_require__(92);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 对话框。
	 */
	var Dialog = (function (_super) {
	    __extends(Dialog, _super);
	    function Dialog(type) {
	        _super.call(this, type || Dialog.TYPE);
	    }
	    /**
	     * 将对话框移动到屏幕中间。
	     */
	    Dialog.prototype.moveToCenter = function () {
	        if (this.app) {
	            var vp = this.app.getViewPort();
	            this.x = (vp.w - this.w) >> 1;
	            this.y = (vp.h - this.h) >> 1;
	        }
	        return this;
	    };
	    Dialog.create = function (options) {
	        return Dialog.recycleBin.create().reset(Dialog.TYPE, options);
	    };
	    Dialog.TYPE = "dialog";
	    Dialog.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Dialog(); });
	    return Dialog;
	}(window_1.Window));
	exports.Dialog = Dialog;
	;
	widget_factory_1.WidgetFactory.register(Dialog.TYPE, Dialog.create);


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var point_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(19);
	var Events = __webpack_require__(6);
	(function (WindowType) {
	    WindowType[WindowType["NORMAL"] = 0] = "NORMAL";
	    WindowType[WindowType["POPUP"] = 1] = "POPUP";
	})(exports.WindowType || (exports.WindowType = {}));
	var WindowType = exports.WindowType;
	;
	var Window = (function (_super) {
	    __extends(Window, _super);
	    function Window(type) {
	        _super.call(this, type);
	    }
	    Object.defineProperty(Window.prototype, "hasOwnCanvas", {
	        get: function () {
	            return this._hasOwnCanvas;
	        },
	        set: function (value) {
	            this._hasOwnCanvas = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Window.prototype.onReset = function () {
	        this._isWindow = true;
	        this._grabbed = false;
	        this.hasOwnCanvas = true;
	        this._pointerPosition = point_1.Point.create(0, 0);
	    };
	    Object.defineProperty(Window.prototype, "pointerPosition", {
	        get: function () {
	            return this._pointerPosition;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Window.prototype.dispatchPointerDown = function (evt, ctx) {
	        this._pointerPosition.init(evt.x, evt.y);
	        _super.prototype.dispatchPointerDown.call(this, evt, ctx);
	    };
	    Window.prototype.dispatchPointerMove = function (evt, ctx) {
	        this._pointerPosition.init(evt.x, evt.y);
	        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
	    };
	    Object.defineProperty(Window.prototype, "grabbed", {
	        get: function () {
	            return this._grabbed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Window.prototype.grab = function () {
	        if (!this._grabbed && this.canvas) {
	            this._grabbed = true;
	            var canvas = this.canvas;
	            setTimeout(function (evt) {
	                canvas.grab();
	            }, 0);
	        }
	        return this;
	    };
	    Window.prototype.ungrab = function () {
	        if (this._grabbed && this.canvas) {
	            this._grabbed = false;
	            this.canvas.ungrab();
	        }
	        return this;
	    };
	    Window.prototype.setVisible = function (value) {
	        _super.prototype.setVisible.call(this, value);
	        if (!value) {
	            if (this._grabbed) {
	                this.ungrab();
	                this._shouldGrabWhenVisible = true;
	            }
	        }
	        else {
	            if (this._shouldGrabWhenVisible) {
	                this.grab();
	            }
	        }
	    };
	    Window.prototype.open = function () {
	        if (this._hasOwnCanvas) {
	            this.createCanvas();
	            this._canvas.grabKey();
	        }
	        this.init();
	        this.dispatchEvent({ type: Events.OPEN });
	        this.relayoutChildren();
	        return this;
	    };
	    Window.prototype.close = function () {
	        if (this._hasOwnCanvas) {
	            this._canvas.ungrabKey();
	        }
	        this.dispatchEvent({ type: Events.CLOSE });
	        this.deinit();
	        this.dispose();
	    };
	    Window.prototype.dispose = function () {
	        this.ungrab();
	        _super.prototype.dispose.call(this);
	    };
	    return Window;
	}(widget_1.Widget));
	exports.Window = Window;
	;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button() {
	        _super.call(this, Button.TYPE);
	    }
	    Button.create = function (options) {
	        return Button.recycleBin.create().reset(Button.TYPE, options);
	    };
	    Button.TYPE = "button";
	    Button.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Button(); });
	    return Button;
	}(widget_1.Widget));
	exports.Button = Button;
	;
	widget_factory_1.WidgetFactory.register(Button.TYPE, Button.create);


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var button_1 = __webpack_require__(93);
	var graphics_1 = __webpack_require__(25);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var progress_bar_1 = __webpack_require__(95);
	/**
	 * 滑块控件。拖动滑块可以改变它的值。
	 */
	var Slider = (function (_super) {
	    __extends(Slider, _super);
	    function Slider(type) {
	        _super.call(this, type || Slider.TYPE);
	    }
	    Slider.prototype.onDraggerMoved = function (dragEnd) {
	        var oldValue = this.value;
	        if (this.barType === progress_bar_1.ProgressBarType.V) {
	            var h = this.dragger.h;
	            var y = this.h - this.dragger.y;
	            if (y < 2 * h) {
	                y -= h;
	            }
	            else if (y < (this.h - h)) {
	                y -= h >> 1;
	            }
	            else {
	            }
	            this._value = y / this.h;
	        }
	        else {
	            var w = this.dragger.w;
	            var x = this.dragger.x;
	            if (x < w) {
	            }
	            else if (x < (this.w - 2 * w)) {
	                x += w >> 1;
	            }
	            else {
	                x += w;
	            }
	            this._value = x / this.w;
	        }
	        if (dragEnd) {
	            this.eChangeEvent.init(Events.CHANGE, { newValue: this.value, oldValue: oldValue });
	        }
	        else {
	            this.eChangeEvent.init(Events.CHANGING, { newValue: this.value, oldValue: oldValue });
	        }
	        this.dispatchEvent(this.eChangeEvent);
	        this.requestRedraw();
	    };
	    Slider.prototype.relayoutChildren = function () {
	        var dragger = this.dragger;
	        if (dragger) {
	            if (this.barType === progress_bar_1.ProgressBarType.V) {
	                dragger.w = this.w;
	                dragger.h = this.w;
	                dragger.x = 0;
	                dragger.y = (1 - this.value) * this.h;
	                dragger.useBehavior("movable", { xMovable: false, yLimit: true, yMin: 0, yMax: this.h - this.w });
	            }
	            else {
	                dragger.w = this.h;
	                dragger.h = this.h;
	                dragger.y = 0;
	                dragger.x = this.value * this.w;
	                dragger.useBehavior("movable", { yMovable: false, xLimit: true, xMin: 0, xMax: this.w - this.h });
	            }
	        }
	        return null;
	    };
	    Slider.prototype.onInit = function () {
	        var _this = this;
	        _super.prototype.onInit.call(this);
	        this.dragger = button_1.Button.create();
	        this.addChild(this.dragger);
	        this.dragger.styleType = "slider-dragger";
	        this.dragger.on(Events.MOVING, function (evt) {
	            _this.onDraggerMoved(false);
	        });
	        this.dragger.on(Events.MOVE, function (evt) {
	            _this.onDraggerMoved(true);
	        });
	    };
	    Slider.prototype.setProp = function (prop, newValue, notify) {
	        _super.prototype.setProp.call(this, prop, newValue, notify);
	        if (prop === "w" || prop === "h" || prop === "value") {
	            this.relayoutChildren();
	        }
	        return this;
	    };
	    Slider.prototype.drawColorBackground = function (ctx, style) {
	        var x1 = 0;
	        var y1 = 0;
	        var x2 = 0;
	        var y2 = 0;
	        if (this.barType === progress_bar_1.ProgressBarType.V) {
	            x1 = x2 = this.w >> 1;
	            y1 = 0;
	            y2 = this.h;
	        }
	        else {
	            y1 = y2 = this.h >> 1;
	            x1 = 0;
	            x2 = this.w;
	        }
	        graphics_1.Graphics.drawLine(ctx, style.backGroundColor, style.lineWidth, x1, y1, x2, y2);
	        return this;
	    };
	    Slider.prototype.drawColorForeGround = function (ctx, style) {
	        var x1 = 0;
	        var y1 = 0;
	        var x2 = 0;
	        var y2 = 0;
	        if (this.barType === progress_bar_1.ProgressBarType.V) {
	            x1 = x2 = this.w >> 1;
	            y1 = this.h;
	            y2 = this.h * (1 - this.value);
	        }
	        else {
	            y1 = y2 = this.h >> 1;
	            x1 = 0;
	            x2 = this.w * this.value;
	        }
	        graphics_1.Graphics.drawLine(ctx, style.foreGroundColor, style.lineWidth, x1, y1, x2, y2);
	        return this;
	    };
	    Slider.create = function (options) {
	        return Slider.r.create().reset(Slider.TYPE, options);
	    };
	    Slider.TYPE = "slider";
	    Slider.r = new recyclable_creator_1.RecyclableCreator(function () { return new Slider(); });
	    return Slider;
	}(progress_bar_1.ProgressBar));
	exports.Slider = Slider;
	;
	widget_factory_1.WidgetFactory.register(Slider.TYPE, Slider.create);


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var graphics_1 = __webpack_require__(25);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 进度条的类型有三种：水平，垂直和圆形。
	 */
	(function (ProgressBarType) {
	    ProgressBarType[ProgressBarType["H"] = 1] = "H";
	    ProgressBarType[ProgressBarType["HORIZONTAL"] = 1] = "HORIZONTAL";
	    ProgressBarType[ProgressBarType["V"] = 2] = "V";
	    ProgressBarType[ProgressBarType["VERTICAL"] = 2] = "VERTICAL";
	    ProgressBarType[ProgressBarType["C"] = 3] = "C";
	    ProgressBarType[ProgressBarType["CIRCLE"] = 3] = "CIRCLE";
	})(exports.ProgressBarType || (exports.ProgressBarType = {}));
	var ProgressBarType = exports.ProgressBarType;
	;
	/**
	 * 进度条。value表示进度，取值在0到1之间。
	 */
	var ProgressBar = (function (_super) {
	    __extends(ProgressBar, _super);
	    function ProgressBar(type) {
	        _super.call(this, type || ProgressBar.TYPE);
	        this.textFormater = function (value) {
	            return Math.round((value * 100)) + "%";
	        };
	        this.barType = ProgressBarType.H;
	    }
	    Object.defineProperty(ProgressBar.prototype, "text", {
	        get: function () {
	            return this.textFormater(this._value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ProgressBar.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            var v = Math.min(1, Math.max(0, value));
	            this.setProp("value", v, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ProgressBar.prototype.drawColorForeGround = function (ctx, style) {
	        graphics_1.Graphics.drawRoundRect(ctx, style.foreGroundColor, null, 0, 0, 0, this.w, this.h, style.roundRadius);
	        return this;
	    };
	    ProgressBar.prototype.drawImage = function (ctx, style) {
	        var img = style.foreGroundImage;
	        var value = this.value;
	        ctx.save();
	        ctx.beginPath();
	        switch (this.barType) {
	            case ProgressBarType.V: {
	                var h = this.h * value;
	                var y = this.h - h;
	                ctx.rect(0, y, this.w, h);
	                break;
	            }
	            case ProgressBarType.C: {
	                var cx = this.w >> 1;
	                var cy = this.h >> 1;
	                var angle = this.value * Math.PI * 2 - Math.PI / 2;
	                ctx.moveTo(cx, cy);
	                ctx.lineTo(cx, 0);
	                ctx.arc(cx, cy, cy, -Math.PI / 2, angle, false);
	                ctx.closePath();
	                break;
	            }
	            default: {
	                var w = this.w * value;
	                ctx.rect(0, 0, w, this.h);
	                break;
	            }
	        }
	        ctx.clip();
	        if (img) {
	            img.draw(ctx, style.foreGroundImageDrawType, 0, 0, this.w, this.h);
	        }
	        else if (style.foreGroundColor) {
	            this.drawColorForeGround(ctx, style);
	        }
	        ctx.restore();
	        return this;
	    };
	    ProgressBar.prototype.getDefProps = function () {
	        return ProgressBar.defProps;
	    };
	    ProgressBar.create = function (options) {
	        return ProgressBar.recycleBin.create().reset(ProgressBar.TYPE, options);
	    };
	    ProgressBar.defProps = Object.assign({}, widget_1.Widget.defProps, { barType: ProgressBarType.H });
	    ProgressBar.TYPE = "progress-bar";
	    ProgressBar.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ProgressBar(); });
	    return ProgressBar;
	}(widget_1.Widget));
	exports.ProgressBar = ProgressBar;
	;
	widget_factory_1.WidgetFactory.register(ProgressBar.TYPE, ProgressBar.create);


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var TWEEN = __webpack_require__(20);
	var graphics_1 = __webpack_require__(25);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 开关控件。
	 */
	var Switch = (function (_super) {
	    __extends(Switch, _super);
	    function Switch() {
	        _super.call(this, Switch.TYPE);
	    }
	    Object.defineProperty(Switch.prototype, "offset", {
	        get: function () {
	            if (this._switching) {
	                return this._offset;
	            }
	            return this.value ? this.maxOffset : this.minOffset;
	        },
	        set: function (value) {
	            this.requestRedraw();
	            this._offset = Math.min(this.maxOffset, Math.max(value, this.minOffset));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Switch.prototype, "minOffset", {
	        get: function () {
	            return this.h >> 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Switch.prototype, "maxOffset", {
	        get: function () {
	            return this.w - (this.h >> 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Switch.prototype.drawColorBackground = function (ctx, style) {
	        var w = this.w;
	        var h = this.h;
	        var r = h >> 1;
	        var offset = this.offset;
	        var fillColor = null;
	        var strokeColor = null;
	        if (!this._switching) {
	            fillColor = this.value ? style.backGroundColor : style.foreGroundColor;
	            strokeColor = style.lineColor;
	            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
	        }
	        else {
	            strokeColor = style.lineColor;
	            fillColor = style.backGroundColor;
	            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, 0, 0, w, h, r);
	            w = this.w - (offset - r);
	            fillColor = style.foreGroundColor;
	            graphics_1.Graphics.drawRoundRect(ctx, fillColor, strokeColor, 1, offset - r, 0, w, h, r);
	        }
	        var y = r;
	        var x = this.offset;
	        graphics_1.Graphics.drawCircle(ctx, style.foreGroundColor, style.lineColor, style.lineWidth, x, y, r);
	        return this;
	    };
	    Switch.prototype.dispatchPointerUp = function (evt) {
	        var _this = this;
	        var dx = evt.x - evt.pointerDownX;
	        if (dx > 5 && this.value || dx < -5 && !this.value) {
	            _super.prototype.dispatchPointerUp.call(this, evt);
	            return;
	        }
	        var duration = 200;
	        var tween = new TWEEN.Tween(this);
	        var offset = this.value ? this.minOffset : this.maxOffset;
	        this._switching = true;
	        this.offset = this.value ? this.maxOffset : this.minOffset;
	        tween.to({ offset: offset }, duration).start();
	        tween.onComplete(function (evt) {
	            _this.value = !_this.value;
	            _this._switching = false;
	        });
	        _super.prototype.dispatchPointerUp.call(this, evt);
	    };
	    Switch.create = function (options) {
	        return Switch.recycleBin.create().reset(Switch.TYPE, options);
	    };
	    Switch.TYPE = "switch";
	    Switch.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Switch(); });
	    return Switch;
	}(widget_1.Widget));
	exports.Switch = Switch;
	;
	widget_factory_1.WidgetFactory.register(Switch.TYPE, Switch.create);


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var page_1 = __webpack_require__(85);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
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
	        return TabPage.r.create().reset(TabPage.TYPE, options);
	    };
	    TabPage.TYPE = "page";
	    TabPage.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabPage(); });
	    return TabPage;
	}(page_1.Page));
	exports.TabPage = TabPage;
	;
	widget_factory_1.WidgetFactory.register(TabPage.TYPE, TabPage.create);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var scroll_view_1 = __webpack_require__(99);
	var carota = __webpack_require__(26);
	var rect = carota.rect;
	var createDoc = carota.document;
	/**
	 * 富文本显示控件。
	 */
	var RichText = (function (_super) {
	    __extends(RichText, _super);
	    function RichText(type) {
	        _super.call(this, type || RichText.TYPE);
	        this._verticalAlignment = 'top';
	    }
	    RichText.prototype.hasFocus = function () {
	        return false;
	    };
	    Object.defineProperty(RichText.prototype, "data", {
	        set: function (data) {
	            this._data = data;
	            if (this._doc) {
	                this._doc.load(data);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RichText.prototype.getVerticalOffset = function () {
	        var h = this.h;
	        var doc = this._doc;
	        var docHeight = doc.frame.bounds().h;
	        if (docHeight < h) {
	            switch (this._verticalAlignment) {
	                case 'middle':
	                    return (h - docHeight) / 2;
	                case 'bottom':
	                    return h - docHeight;
	            }
	        }
	        return 0;
	    };
	    RichText.prototype.doDrawChildren = function (ctx) {
	        var doc = this._doc;
	        var x = this.leftPadding;
	        var y = this.topPadding;
	        var w = this.w - this.leftPadding - this.rightPadding;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        if (this.isVScrollBarVisible()) {
	            w -= this.scrollBarStyle.size;
	        }
	        if (doc.width() !== w) {
	            doc.width(w);
	        }
	        ctx.save();
	        ctx.translate(x, y);
	        doc.draw(ctx, rect(0, this._oy, w, h));
	        doc.drawSelection(ctx, this.hasFocus());
	        ctx.restore();
	        return this;
	    };
	    ;
	    RichText.prototype.adjustSize = function () {
	        var doc = this._doc;
	        var w = this.w - this.leftPadding - this.rightPadding;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        doc.width(w);
	        var r = doc.frame.bounds();
	        if (r.h > h) {
	            w -= this.scrollBarStyle.size;
	            doc.width(w);
	        }
	        var r = doc.frame.bounds();
	        this.contentWidth = r.w;
	        this.contentH = r.h;
	    };
	    RichText.prototype.onInit = function () {
	        this.dragToScroll = true;
	        this.scrollerOptions.scrollingX = false;
	        _super.prototype.onInit.call(this);
	        var doc = createDoc();
	        doc.load(this._data);
	        doc.toggleCaret();
	        this._doc = doc;
	        this.adjustSize();
	    };
	    RichText.prototype.dispose = function () {
	        this._doc = null;
	        _super.prototype.dispose.call(this);
	    };
	    RichText.create = function (options) {
	        return RichText.reBin.create().reset(RichText.TYPE, options);
	    };
	    RichText.TYPE = "rich-text";
	    RichText.reBin = new recyclable_creator_1.RecyclableCreator(function () { return new RichText(); });
	    return RichText;
	}(scroll_view_1.ScrollView));
	exports.RichText = RichText;
	;
	widget_factory_1.WidgetFactory.register(RichText.TYPE, RichText.create);


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/globals/scroller/index.d.ts"/>
	/// <reference path="../../typings/globals/tween.js/index.d.ts"/>
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var scroller_1 = __webpack_require__(100);
	var TWEEN = __webpack_require__(20);
	var Events = __webpack_require__(6);
	var graphics_1 = __webpack_require__(25);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var widget_1 = __webpack_require__(19);
	/**
	 * 滚动视图，同时支持PC和Mobile风格，通过dragToScroll和slideToScroll参数控制。
	 */
	var ScrollView = (function (_super) {
	    __extends(ScrollView, _super);
	    function ScrollView(type) {
	        _super.call(this, type ? type : ScrollView.TYPE);
	        this.isScrollView = true;
	    }
	    Object.defineProperty(ScrollView.prototype, "scrollBarOpacity", {
	        get: function () {
	            return this._scrollBarOpacity;
	        },
	        /*
	         * 滚动条的透明度。Mobile风格的滚动条，滚动完成时，以动画方式隐藏。
	         */
	        set: function (value) {
	            this._scrollBarOpacity = value;
	            this.requestRedraw();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "dragToScroll", {
	        get: function () {
	            return this._dragToScroll;
	        },
	        /**
	         * 启用滚动条拖动来实现滚动。
	         */
	        set: function (value) {
	            this._dragToScroll = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "slideToScroll", {
	        get: function () {
	            return this._slideToScroll;
	        },
	        /**
	         * 启用手势滑动来实现滚动。
	         */
	        set: function (value) {
	            this._slideToScroll = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "scrollBarStyle", {
	        get: function () {
	            return this._scrollBarStyle;
	        },
	        /**
	         * 滚动条的样式。
	         */
	        set: function (value) {
	            this._scrollBarStyle = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 垂直滚动条是否可见。
	     */
	    ScrollView.prototype.isVScrollBarVisible = function () {
	        var visibility = this.scrollBarStyle.vBarVisibility;
	        switch (visibility) {
	            case ScrollerBarVisibility.INVISIBLE: {
	                return false;
	            }
	            case ScrollerBarVisibility.ALWAYS: {
	                return true;
	            }
	            default: {
	                return (this.h < this.contentH);
	            }
	        }
	    };
	    /**
	     * 水平滚动条是否可见。
	     */
	    ScrollView.prototype.isHScrollBarVisible = function () {
	        var visibility = this.scrollBarStyle.hBarVisibility;
	        switch (visibility) {
	            case ScrollerBarVisibility.INVISIBLE: {
	                return false;
	            }
	            case ScrollerBarVisibility.ALWAYS: {
	                return true;
	            }
	            default: {
	                return (this.w < this.contentWidth);
	            }
	        }
	    };
	    Object.defineProperty(ScrollView.prototype, "validOffsetX", {
	        /**
	         * 设置水平方向上的偏移，并确保其值的有些性。
	         */
	        set: function (value) {
	            this.setProp("ox", this.toValidOffsetX(value), true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "validOffsetY", {
	        /**
	         * 设置垂直方向上的偏移，并确保其值的有些性。
	         */
	        set: function (value) {
	            this.setProp("oy", this.toValidOffsetY(value), true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollView.prototype.toValidOffsetX = function (value) {
	        return Math.min(Math.max(0, value), Math.max(0, this._cw - this.w));
	    };
	    ScrollView.prototype.toValidOffsetY = function (value) {
	        return Math.min(Math.max(0, value), Math.max(0, this._ch - this.h));
	    };
	    Object.defineProperty(ScrollView.prototype, "offsetX", {
	        get: function () {
	            return this._ox;
	        },
	        /**
	         * 水平方向上的偏移。
	         */
	        set: function (value) {
	            this.setProp("ox", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "offsetY", {
	        get: function () {
	            return this._oy;
	        },
	        /**
	         * 垂直方向上的偏移。
	         */
	        set: function (value) {
	            this.setProp("oy", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "contentWidth", {
	        get: function () {
	            return this._cw;
	        },
	        /**
	         * 滚动视图所包含内容的宽度。
	         */
	        set: function (value) {
	            this.setProp("cw", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScrollView.prototype, "contentH", {
	        get: function () {
	            return this._ch;
	        },
	        /**
	         * 滚动视图所包含内容的高度。
	         */
	        set: function (value) {
	            this.setProp("ch", value, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollView.prototype.selfHitTest = function (x, y, ctx) {
	        return _super.prototype.selfHitTest.call(this, x - this._ox, y - this._oy, ctx);
	    };
	    /*
	     * 在处理指针事件前，先加上滚动的偏移。
	     */
	    ScrollView.prototype.offsetPointerEvent = function (evt) {
	        evt.x += this._ox;
	        evt.y += this._oy;
	    };
	    /*
	     * 在处理指针事件后，再减去滚动的偏移。
	     */
	    ScrollView.prototype.unOffsetPointerEvent = function (evt) {
	        evt.x -= this._ox;
	        evt.y -= this._oy;
	    };
	    /*
	     * 把指针事件转换成touch，以便Scroller可以处理。
	     */
	    ScrollView.prototype.pointerEventToTouches = function (evt) {
	        var touch = this._touches[0];
	        touch.id = evt.id;
	        touch.pageX = evt.x;
	        touch.pageY = evt.y;
	        return this._touches;
	    };
	    /*
	     * 先处理滚动条的事件，再处理Scroller事件，最后发给子控件。
	     */
	    ScrollView.prototype.dispatchPointerDown = function (evt, ctx) {
	        this._pointerInBar = false;
	        if (this.dragToScroll) {
	            this._saveOX = this._ox;
	            this._saveOY = this._oy;
	            var win = this.win;
	            var p = this.eventPointToLocal(point_1.Point.point.copy(win.pointerPosition));
	            if (p.isInRect(this._vScrollBarRect)) {
	                if (p.isInRect(this._vScrollDraggerRect)) {
	                    this._pointerInVScrollDraggerRect = true;
	                }
	                else {
	                    if (p.y < this._vScrollDraggerRect.y) {
	                        this._pointerInVScrollBarRectUp = true;
	                    }
	                    else {
	                        this._pointerInVScrollBarRectDown = true;
	                    }
	                }
	                this._pointerInBar = true;
	            }
	            if (p.isInRect(this._hScrollBarRect)) {
	                if (p.isInRect(this._hScrollDraggerRect)) {
	                    this._pointerInHScrollDraggerRect = true;
	                }
	                else {
	                    if (p.x < this._hScrollDraggerRect.x) {
	                        this._pointerInHScrollBarRectLeft = true;
	                    }
	                    else {
	                        this._pointerInHScrollBarRectRight = true;
	                    }
	                }
	                this._pointerInBar = true;
	            }
	        }
	        if (this.slideToScroll) {
	            if (!this._pointerInBar) {
	                this._scrollBarOpacity = 1;
	                this.scroller.doTouchStart(this.pointerEventToTouches(evt), evt.timeStamp);
	            }
	        }
	        if (!this._pointerInBar) {
	            this.offsetPointerEvent(evt);
	            _super.prototype.dispatchPointerDown.call(this, evt, ctx);
	            this.unOffsetPointerEvent(evt);
	        }
	    };
	    ScrollView.prototype.dispatchPointerMove = function (evt, ctx) {
	        if (evt.pointerDown) {
	            var offsetX = this.offsetX;
	            var offsetY = this.offsetY;
	            if (this.dragToScroll) {
	                if (this._pointerInVScrollDraggerRect) {
	                    var dy = evt.y - evt.pointerDownY;
	                    offsetY = this._saveOY + (dy / this.h) * this._ch;
	                }
	                if (this._pointerInHScrollDraggerRect) {
	                    var dx = evt.x - evt.pointerDownX;
	                    offsetX = this._saveOX + (dx / this.w) * this._cw;
	                }
	            }
	            if (this.slideToScroll) {
	                if (!this._pointerInBar) {
	                    this.scroller.doTouchMove(this.pointerEventToTouches(evt), evt.timeStamp);
	                }
	                else {
	                    this.scroller.scrollTo(this.toValidOffsetX(offsetX), this.toValidOffsetY(offsetY));
	                }
	            }
	            else {
	                this.validOffsetX = offsetX;
	                this.validOffsetY = offsetY;
	            }
	        }
	        if (!this._pointerInBar) {
	            this.offsetPointerEvent(evt);
	            _super.prototype.dispatchPointerMove.call(this, evt, ctx);
	            this.unOffsetPointerEvent(evt);
	        }
	        this.requestRedraw();
	    };
	    ScrollView.prototype.dispatchPointerUp = function (evt) {
	        if (this.dragToScroll) {
	            if (this._pointerInVScrollBarRectUp) {
	                this.validOffsetY = this.offsetY - this.h;
	            }
	            else if (this._pointerInVScrollBarRectDown) {
	                this.validOffsetY = this.offsetY + this.h;
	            }
	            else if (this._pointerInHScrollBarRectLeft) {
	                this.validOffsetX = this.offsetX - this.w;
	            }
	            else if (this._pointerInHScrollBarRectRight) {
	                this.validOffsetX = this.offsetX + this.w;
	            }
	            this._pointerInVScrollBarRectUp = false;
	            this._pointerInVScrollBarRectDown = false;
	            this._pointerInHScrollBarRectLeft = false;
	            this._pointerInHScrollBarRectRight = false;
	            this._pointerInVScrollDraggerRect = false;
	            this._pointerInHScrollDraggerRect = false;
	        }
	        if (this.slideToScroll) {
	            if (!this._pointerInBar) {
	                this.scroller.doTouchEnd(evt.timeStamp);
	            }
	            else {
	                this.scroller.scrollTo(this.offsetX, this.offsetY);
	                this.handleScrollDone();
	            }
	        }
	        if (!this._pointerInBar) {
	            this.offsetPointerEvent(evt);
	            _super.prototype.dispatchPointerUp.call(this, evt);
	            this.unOffsetPointerEvent(evt);
	        }
	        this._pointerInBar = false;
	    };
	    ScrollView.prototype.dispatchClick = function (evt) {
	        if (!this._pointerInBar) {
	            this.offsetPointerEvent(evt);
	            _super.prototype.dispatchClick.call(this, evt);
	            this.unOffsetPointerEvent(evt);
	        }
	    };
	    ScrollView.prototype.dispatchDblClick = function (evt) {
	        if (!this._pointerInBar) {
	            this.offsetPointerEvent(evt);
	            _super.prototype.dispatchDblClick.call(this, evt);
	            this.unOffsetPointerEvent(evt);
	        }
	    };
	    /*
	     * 更新Scroller的参数。
	     */
	    ScrollView.prototype.updateScrollerDimensions = function (w, h, contentWidth, contentH) {
	        if (this._slideToScroll) {
	            this.scroller.setDimensions(w, h, contentWidth, contentH);
	        }
	    };
	    Object.defineProperty(ScrollView.prototype, "scroller", {
	        get: function () {
	            return this._scroller;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollView.prototype.hideScrollBar = function () {
	        if (!this.dragToScroll) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ scrollBarOpacity: 0 }, 300).start();
	            tween.onComplete(function () {
	                this.scrollBarOpacity = 0;
	            });
	            this.requestRedraw();
	        }
	    };
	    ScrollView.prototype.handleScrolling = function (left, top) {
	        this.offsetX = left;
	        this.offsetY = top;
	        this.dispatchEvent(this._scrollEvent.reset(Events.SCROLL, this, left, top));
	    };
	    ScrollView.prototype.handleScrollDone = function () {
	        this.hideScrollBar();
	        this.dispatchEvent(this._scrollEvent.reset(Events.SCROLL_DONE, this, this.offsetX, this.offsetY));
	    };
	    ScrollView.prototype.initScroller = function (options) {
	        var _this = this;
	        var me = this;
	        options.scrollingComplete = function () {
	            me.handleScrollDone();
	        };
	        this._scroller = new scroller_1.Scroller(function (left, top) {
	            me.handleScrolling(left, top);
	        }, options);
	        this.on(Events.PROP_CHANGE, function (evt) {
	            var prop = evt.prop;
	            var value = evt.newValue;
	            if (prop === "w" || prop === "h" || prop === "cw" || prop === "ch") {
	                _this.updateScrollerDimensions(_this.w, _this.h, _this.contentWidth, _this.contentH);
	            }
	        });
	        this.updateScrollerDimensions(this.w, this.h, this.contentWidth, this.contentH);
	    };
	    /*
	     * 绘制垂直滚动条。
	     */
	    ScrollView.prototype.drawScrollBarV = function (ctx, hBarVisible) {
	        var w = this.w;
	        var h = this.h;
	        var options = this.scrollBarStyle;
	        var barY = 0;
	        var barH = h;
	        var barW = options.size;
	        var barX = w - barW;
	        var barColor = options.backGroundColor;
	        var r = options.roundRadius;
	        var draggerW = options.draggerSize;
	        var draggerH = Math.max(draggerW, Math.min(h, h * h / this.contentH));
	        var draggerX = barX + ((barW - draggerW) >> 1);
	        var draggerY = Math.min(h - draggerH, (this.offsetY / this.contentH) * h);
	        var draggerColor = options.foreGroundColor;
	        if (hBarVisible) {
	            draggerY = Math.min(draggerY, h - barW - draggerH);
	        }
	        var win = this.win;
	        if (this._pointerInVScrollDraggerRect) {
	            draggerColor = options.foreGroundOverColor;
	        }
	        this._vScrollBarRect.init(barX, barY, barW, barH);
	        this._vScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);
	        graphics_1.Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
	        graphics_1.Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);
	        var lineColor = options.lineColor;
	        var lineWidth = options.lineWidth;
	        graphics_1.Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, barX, hBarVisible ? barH - barW : barH);
	    };
	    /*
	     * 绘制水平滚动条。
	     */
	    ScrollView.prototype.drawScrollBarH = function (ctx, vBarVisible) {
	        var w = this.w;
	        var h = this.h;
	        var options = this.scrollBarStyle;
	        var barX = 0;
	        var barW = w;
	        var barH = options.size;
	        var barY = h - barH;
	        var barColor = options.backGroundColor;
	        var r = options.roundRadius;
	        var draggerH = options.draggerSize;
	        var draggerW = Math.max(draggerH, Math.min(w, w * w / this.contentWidth));
	        var draggerY = barY + ((barH - draggerH) >> 1);
	        var draggerX = Math.min(w - draggerW, (this.offsetX / this.contentWidth) * w);
	        var draggerColor = options.foreGroundColor;
	        if (vBarVisible) {
	            draggerX = Math.min(draggerX, w - barH - draggerW);
	        }
	        var win = this.win;
	        if (this._pointerInHScrollDraggerRect) {
	            draggerColor = options.foreGroundOverColor;
	        }
	        this._hScrollBarRect.init(barX, barY, barW, barH);
	        this._hScrollDraggerRect.init(draggerX, draggerY, draggerW, draggerH);
	        graphics_1.Graphics.drawRect(ctx, barColor, null, 0, barX, barY, barW, barH);
	        graphics_1.Graphics.drawRoundRect(ctx, draggerColor, null, 0, draggerX, draggerY, draggerW, draggerH, r);
	        var lineColor = options.lineColor;
	        var lineWidth = options.lineWidth;
	        graphics_1.Graphics.drawLine(ctx, lineColor, lineWidth, barX, barY, vBarVisible ? barW - barH : barW, barY);
	    };
	    /*
	     * 绘制滚动条。
	     */
	    ScrollView.prototype.drawScrollBar = function (ctx) {
	        var hBarVisible = this.isHScrollBarVisible();
	        var vBarVisible = this.isVScrollBarVisible();
	        if (this._scrollBarOpacity > 0) {
	            var opacity = ctx.globalAlpha;
	            ctx.globalAlpha = this._scrollBarOpacity;
	            if (vBarVisible) {
	                this.drawScrollBarV(ctx, hBarVisible);
	            }
	            if (hBarVisible) {
	                this.drawScrollBarH(ctx, vBarVisible);
	            }
	            ctx.globalAlpha = opacity;
	        }
	    };
	    /*
	     * 绘制子控件。
	     */
	    ScrollView.prototype.doDrawChildren = function (ctx) {
	        _super.prototype.drawChildren.call(this, ctx);
	    };
	    ScrollView.prototype.drawChildren = function (ctx) {
	        var ox = this._ox;
	        var oy = this._oy;
	        var x = this.leftPadding;
	        var y = this.topPadding;
	        var w = this.w - x - this.rightPadding;
	        var h = this.h - y - this.bottomPadding;
	        ctx.save();
	        ctx.beginPath();
	        ctx.rect(x, y, w, h);
	        ctx.clip();
	        ctx.translate(-ox, -oy);
	        this.doDrawChildren(ctx);
	        ctx.restore();
	        this.drawScrollBar(ctx);
	        return this;
	    };
	    /**
	     * 滚动到指定的位置。
	     */
	    ScrollView.prototype.scrollTo = function (offsetX, offsetY, duration) {
	        if (duration > 0) {
	            var tween = new TWEEN.Tween(this);
	            tween.to({ offsetX: offsetX, offsetY: offsetY }, duration).start();
	            return tween;
	        }
	        else {
	            this.offsetX = offsetX;
	            this.offsetY = offsetY;
	            return null;
	        }
	    };
	    ScrollView.prototype.onWheel = function (evt) {
	        this.validOffsetY = this.offsetY - evt.delta / 10;
	        if (this.slideToScroll) {
	            this.scroller.scrollTo(this.offsetX, this.offsetY);
	            this.handleScrollDone();
	        }
	    };
	    Object.defineProperty(ScrollView.prototype, "scrollerOptions", {
	        get: function () {
	            return this._scrollerOptions;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScrollView.prototype.getLayoutWidth = function () {
	        return this.w - this.leftPadding - this.rightPadding;
	    };
	    ScrollView.prototype.getLayoutHeight = function () {
	        return this.h - this.topPadding - this.bottomPadding;
	    };
	    ScrollView.prototype.getLayoutRect = function () {
	        var w = this.getLayoutWidth();
	        var h = this.getLayoutHeight();
	        if (this.dragToScroll) {
	            if (this.isVScrollBarVisible()) {
	                w -= this._scrollBarStyle.size;
	            }
	            if (this.isHScrollBarVisible()) {
	                h -= this._scrollBarStyle.size;
	            }
	        }
	        return this.layoutRect.init(this.leftPadding, this.topPadding, w, h);
	    };
	    ScrollView.prototype.onInit = function () {
	        _super.prototype.onInit.call(this);
	        this.initScroller(this._scrollerOptions);
	        this._scrollBarOpacity = this.dragToScroll ? 1 : 0;
	    };
	    ScrollView.prototype.onReset = function () {
	        var _this = this;
	        _super.prototype.onReset.call(this);
	        this._ox = 0;
	        this._oy = 0;
	        this._cw = 0;
	        this._ch = 0;
	        this._scrollerOptions = {
	            scrollingX: true,
	            scrollingY: true,
	            decelerationRate: 0.95,
	            penetrationAcceleration: 0.08
	        };
	        this._scroller = null;
	        this._scrollBarStyle = new ScrollBarStyle();
	        this._touches = [{ pageX: 0, pageY: 0, id: 0 }];
	        this._hScrollBarRect = rect_1.Rect.create(0, 0, 0, 0);
	        this._vScrollBarRect = rect_1.Rect.create(0, 0, 0, 0);
	        this._hScrollDraggerRect = rect_1.Rect.create(0, 0, 0, 0);
	        this._vScrollDraggerRect = rect_1.Rect.create(0, 0, 0, 0);
	        this.on(Events.WHEEL, function (evt) {
	            _this.onWheel(evt);
	        });
	        this._scrollEvent = Events.ScrollEvent.create();
	    };
	    ScrollView.prototype.getDefProps = function () {
	        return ScrollView.defProps;
	    };
	    ScrollView.create = function (options) {
	        return ScrollView.recycleBin.create().reset(ScrollView.TYPE, options);
	    };
	    ScrollView.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2 });
	    ScrollView.TYPE = "scroll-view";
	    ScrollView.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ScrollView(); });
	    return ScrollView;
	}(widget_1.Widget));
	exports.ScrollView = ScrollView;
	;
	(function (ScrollerBarVisibility) {
	    ScrollerBarVisibility[ScrollerBarVisibility["INVISIBLE"] = 0] = "INVISIBLE";
	    ScrollerBarVisibility[ScrollerBarVisibility["AUTO"] = 1] = "AUTO";
	    ScrollerBarVisibility[ScrollerBarVisibility["ALWAYS"] = 2] = "ALWAYS";
	})(exports.ScrollerBarVisibility || (exports.ScrollerBarVisibility = {}));
	var ScrollerBarVisibility = exports.ScrollerBarVisibility;
	;
	var ScrollBarStyle = (function () {
	    function ScrollBarStyle() {
	        this.size = 12;
	        this.draggerSize = 8;
	        this.roundRadius = 4;
	        this.lineColor = "#E7E7E7";
	        this.lineColor = "#E0E0E0";
	        this.lineWidth = 0.5;
	        this.backGroundColor = "#FAFAFA";
	        this.foreGroundColor = "#c1c1c1";
	        this.foreGroundOverColor = "#818181";
	        this.hBarVisibility = ScrollerBarVisibility.AUTO;
	        this.vBarVisibility = ScrollerBarVisibility.AUTO;
	    }
	    return ScrollBarStyle;
	}());
	exports.ScrollBarStyle = ScrollBarStyle;
	;
	widget_factory_1.WidgetFactory.register(ScrollView.TYPE, ScrollView.create);


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(101), __webpack_require__(102)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // CommonJS
	        factory(exports, require('./lib/animate'), require('./lib/Scroller'));
	    }
	}(this, function (exports, animate, Scroller) {
	    exports.animate = animate;
	    exports.Scroller = Scroller;
	}));


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Scroller
	 * http://github.com/zynga/scroller
	 *
	 * Copyright 2011, Zynga Inc.
	 * Licensed under the MIT License.
	 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
	 *
	 * Based on the work of: Unify Project (unify-project.org)
	 * http://unify-project.org
	 * Copyright 2011, Deutsche Telekom AG
	 * License: MIT + Apache (V2)
	 */

	/**
	 * Generic animation class with support for dropped frames both optional easing and duration.
	 *
	 * Optional duration is useful when the lifetime is defined by another condition than time
	 * e.g. speed of an animating object, etc.
	 *
	 * Dropped frame logic allows to keep using the same updater logic independent from the actual
	 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
	 * based on the pure time difference.
	 */
	(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // CommonJS
	        factory(exports);
	    } else {
	        // Browser globals
	        factory((root.animate = {}));
	    }
	}(this, function (exports) {
	    var global = typeof window === 'undefined' ? this : window
	    var time = Date.now || function () {
	        return +new Date();
	    };
	    var desiredFrames = 60;
	    var millisecondsPerSecond = 1000;
	    var running = {};
	    var counter = 1;

	    /**
	     * A requestAnimationFrame wrapper / polyfill.
	     *
	     * @param callback {Function} The callback to be invoked before the next repaint.
	     * @param root {HTMLElement} The root element for the repaint
	     */
	    exports.requestAnimationFrame = (function () {
	        // Check for request animation Frame support
	        var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
	        var isNative = !!requestFrame;

	        if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
	            isNative = false;
	        }

	        if (isNative) {
	            return function (callback, root) {
	                requestFrame(callback, root);
	            };
	        }

	        var TARGET_FPS = 60;
	        var requests = {};
	        var requestCount = 0;
	        var rafHandle = 1;
	        var intervalHandle = null;
	        var lastActive = +new Date();

	        return function (callback, root) {
	            var callbackHandle = rafHandle++;

	            // Store callback
	            requests[callbackHandle] = callback;
	            requestCount++;

	            // Create timeout at first request
	            if (intervalHandle === null) {

	                intervalHandle = setInterval(function () {

	                    var time = +new Date();
	                    var currentRequests = requests;

	                    // Reset data structure before executing callbacks
	                    requests = {};
	                    requestCount = 0;

	                    for(var key in currentRequests) {
	                        if (currentRequests.hasOwnProperty(key)) {
	                            currentRequests[key](time);
	                            lastActive = time;
	                        }
	                    }

	                    // Disable the timeout when nothing happens for a certain
	                    // period of time
	                    if (time - lastActive > 2500) {
	                        clearInterval(intervalHandle);
	                        intervalHandle = null;
	                    }

	                }, 1000 / TARGET_FPS);
	            }

	            return callbackHandle;
	        };

	    })();

	    /**
	     * Stops the given animation.
	     *
	     * @param id {Integer} Unique animation ID
	     * @return {Boolean} Whether the animation was stopped (aka, was running before)
	     */
	    exports.stop = function (id) {
	        var cleared = (running[id] !== null);
	        if (cleared) {
	            running[id] = null;
	        }

	        return cleared;
	    };


	    /**
	     * Whether the given animation is still running.
	     *
	     * @param id {Integer} Unique animation ID
	     * @return {Boolean} Whether the animation is still running
	     */
	    exports.isRunning = function (id) {
	        return running[id] !== null;
	    };


	    /**
	     * Start the animation.
	     *
	     * @param stepCallback {Function} Pointer to function which is executed on every step.
	     *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
	     * @param verifyCallback {Function} Executed before every animation step.
	     *   Signature of the method should be `function() { return continueWithAnimation; }`
	     * @param completedCallback {Function}
	     *   Signature of the method should be `function(droppedFrames, finishedAnimation, optional wasFinished) {}`
	     * @param duration {Integer} Milliseconds to run the animation
	     * @param easingMethod {Function} Pointer to easing function
	     *   Signature of the method should be `function(percent) { return modifiedValue; }`
	     * @param root {Element} Render root. Used for internal usage of requestAnimationFrame.
	     * @return {Integer} Identifier of animation. Can be used to stop it any time.
	     */
	    exports.start = function (stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
	        var start = time();
	        var lastFrame = start;
	        var percent = 0;
	        var dropCounter = 0;
	        var id = counter++;

	        // Compacting running db automatically every few new animations
	        if (id % 20 === 0) {
	            var newRunning = {};
	            for (var usedId in running) {
	                newRunning[usedId] = true;
	            }
	            running = newRunning;
	        }

	        // This is the internal step method which is called every few milliseconds
	        var step = function (virtual) {

	            // Normalize virtual value
	            var render = virtual !== true;

	            // Get current time
	            var now = time();

	            // Verification is executed before next animation step
	            if (!running[id] || (verifyCallback && !verifyCallback(id))) {

	                running[id] = null;
	                completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);
	                return;

	            }

	            // For the current rendering to apply let's update omitted steps in memory.
	            // This is important to bring internal state variables up-to-date with progress in time.
	            if (render) {

	                var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
	                for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
	                    step(true);
	                    dropCounter++;
	                }

	            }

	            // Compute percent value
	            if (duration) {
	                percent = (now - start) / duration;
	                if (percent > 1) {
	                    percent = 1;
	                }
	            }

	            // Execute step callback, then...
	            var value = easingMethod ? easingMethod(percent) : percent;
	            if ((stepCallback(value, now, render) === false || percent === 1) && render) {
	                running[id] = null;
	                completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration === undefined);
	            } else if (render) {
	                lastFrame = now;
	                exports.requestAnimationFrame(step, root);
	            }
	        };

	        // Mark as running
	        running[id] = true;

	        // Init first step
	        exports.requestAnimationFrame(step, root);

	        // Return unique animation ID
	        return id;
	    };
	}));


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Scroller
	 * http://github.com/zynga/scroller
	 *
	 * Copyright 2011, Zynga Inc.
	 * Licensed under the MIT License.
	 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
	 *
	 * Based on the work of: Unify Project (unify-project.org)
	 * http://unify-project.org
	 * Copyright 2011, Deutsche Telekom AG
	 * License: MIT + Apache (V2)
	 */

	(function (root, factory) {
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(101)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object') {
	        // CommonJS
	        module.exports = factory(require('./animate'));
	    } else {
	        // Browser globals
	        root.Scroller = factory(root.animate);
	    }
	}(this, function (animate) {
	    var NOOP = function () {};

	    /**
	     * A pure logic 'component' for 'virtual' scrolling/zooming.
	     */
	    var Scroller = function (callback, options) {
	        this.__callback = callback;

	        this.options = {
	            /** Enable scrolling on x-axis */
	            scrollingX: true,

	            /** Enable scrolling on y-axis */
	            scrollingY: true,

	            /** Enable animations for deceleration, snap back, zooming and scrolling */
	            animating: true,

	            /** duration for animations triggered by scrollTo/zoomTo */
	            animationDuration: 250,

	            /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
	            bouncing: true,

	            /** Enable locking to the main axis if user moves only slightly on one of them at start */
	            locking: true,

	            /** Enable pagination mode (switching between full page content panes) */
	            paging: false,

	            /** Enable snapping of content to a configured pixel grid */
	            snapping: false,

	            /** Enable zooming of content via API, fingers and mouse wheel */
	            zooming: false,

	            /** Minimum zoom level */
	            minZoom: 0.5,

	            /** Maximum zoom level */
	            maxZoom: 3,

	            /** Multiply or decrease scrolling speed **/
	            speedMultiplier: 1,

	            /** Callback that is fired on the later of touch end or deceleration end,
	                provided that another scrolling action has not begun. Used to know
	                when to fade out a scrollbar. */
	            scrollingComplete: NOOP,

	            /** This configures the amount of change applied to deceleration when reaching boundaries  **/
	            penetrationDeceleration : 0.03,

	            /** This configures the amount of change applied to acceleration when reaching boundaries  **/
	            penetrationAcceleration : 0.08
	        };

	        for (var key in options) {
	            this.options[key] = options[key];
	        }
	    };


	    // Easing Equations (c) 2003 Robert Penner, all rights reserved.
	    // Open source under the BSD License.

	    /**
	     * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
	     **/
	    var easeOutCubic = function (pos) {
	        return (Math.pow((pos - 1), 3) + 1);
	    };

	    /**
	     * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
	     **/
	    var easeInOutCubic = function (pos) {
	        if ((pos /= 0.5) < 1) {
	            return 0.5 * Math.pow(pos, 3);
	        }

	        return 0.5 * (Math.pow((pos - 2), 3) + 2);
	    };


	    Scroller.prototype = {

	        /*
	          ---------------------------------------------------------------------------
	          INTERNAL FIELDS :: STATUS
	          ---------------------------------------------------------------------------
	        */

	        /** {Boolean} Whether only a single finger is used in touch handling */
	        __isSingleTouch: false,

	        /** {Boolean} Whether a touch event sequence is in progress */
	        __isTracking: false,

	        /** {Boolean} Whether a deceleration animation went to completion. */
	        __didDecelerationComplete: false,

	        /**
	         * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
	         * a gesturestart event happens. This has higher priority than dragging.
	         */
	        __isGesturing: false,

	        /**
	         * {Boolean} Whether the user has moved by such a distance that we have enabled
	         * dragging mode. Hint: It's only enabled after some pixels of movement to
	         * not interrupt with clicks etc.
	         */
	        __isDragging: false,

	        /**
	         * {Boolean} Not touching and dragging anymore, and smoothly animating the
	         * touch sequence using deceleration.
	         */
	        __isDecelerating: false,

	        /**
	         * {Boolean} Smoothly animating the currently configured change
	         */
	        __isAnimating: false,



	        /*
	          ---------------------------------------------------------------------------
	          INTERNAL FIELDS :: DIMENSIONS
	          ---------------------------------------------------------------------------
	        */

	        /** {Integer} Viewport left boundary */
	        __clientLeft: 0,

	        /** {Integer} Viewport right boundary */
	        __clientTop: 0,

	        /** {Integer} Viewport width */
	        __clientWidth: 0,

	        /** {Integer} Viewport height */
	        __clientHeight: 0,

	        /** {Integer} Full content's width */
	        __contentWidth: 0,

	        /** {Integer} Full content's height */
	        __contentHeight: 0,

	        /** {Integer} Snapping width for content */
	        __snapWidth: 100,

	        /** {Integer} Snapping height for content */
	        __snapHeight: 100,

	        /** {Number} Zoom level */
	        __zoomLevel: 1,

	        /** {Number} Scroll position on x-axis */
	        __scrollLeft: 0,

	        /** {Number} Scroll position on y-axis */
	        __scrollTop: 0,

	        /** {Integer} Maximum allowed scroll position on x-axis */
	        __maxScrollLeft: 0,

	        /** {Integer} Maximum allowed scroll position on y-axis */
	        __maxScrollTop: 0,

	        /* {Number} Scheduled left position (final position when animating) */
	        __scheduledLeft: 0,

	        /* {Number} Scheduled top position (final position when animating) */
	        __scheduledTop: 0,

	        /* {Number} Scheduled zoom level (final scale when animating) */
	        __scheduledZoom: 0,



	        /*
	          ---------------------------------------------------------------------------
	          INTERNAL FIELDS :: LAST POSITIONS
	          ---------------------------------------------------------------------------
	        */

	        /** {Number} Left position of finger at start */
	        __lastTouchLeft: null,

	        /** {Number} Top position of finger at start */
	        __lastTouchTop: null,

	        /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
	        __lastTouchMove: null,

	        /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
	        __positions: null,



	        /*
	          ---------------------------------------------------------------------------
	          INTERNAL FIELDS :: DECELERATION SUPPORT
	          ---------------------------------------------------------------------------
	        */

	        /** {Integer} Minimum left scroll position during deceleration */
	        __minDecelerationScrollLeft: null,

	        /** {Integer} Minimum top scroll position during deceleration */
	        __minDecelerationScrollTop: null,

	        /** {Integer} Maximum left scroll position during deceleration */
	        __maxDecelerationScrollLeft: null,

	        /** {Integer} Maximum top scroll position during deceleration */
	        __maxDecelerationScrollTop: null,

	        /** {Number} Current factor to modify horizontal scroll position with on every step */
	        __decelerationVelocityX: null,

	        /** {Number} Current factor to modify vertical scroll position with on every step */
	        __decelerationVelocityY: null,



	        /*
	          ---------------------------------------------------------------------------
	          PUBLIC API
	          ---------------------------------------------------------------------------
	        */

	        /**
	         * Configures the dimensions of the client (outer) and content (inner) elements.
	         * Requires the available space for the outer element and the outer size of the inner element.
	         * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
	         *
	         * @param clientWidth {Integer ? null} Inner width of outer element
	         * @param clientHeight {Integer ? null} Inner height of outer element
	         * @param contentWidth {Integer ? null} Outer width of inner element
	         * @param contentHeight {Integer ? null} Outer height of inner element
	         */
	        setDimensions : function (clientWidth, clientHeight, contentWidth, contentHeight) {
	            // Only update values which are defined
	            if (clientWidth !== null) {
	                this.__clientWidth = clientWidth;
	            }

	            if (clientHeight !== null) {
	                this.__clientHeight = clientHeight;
	            }

	            if (contentWidth !== null) {
	                this.__contentWidth = contentWidth;
	            }

	            if (contentHeight !== null) {
	                this.__contentHeight = contentHeight;
	            }

	            // Refresh maximums
	            this.__computeScrollMax();

	            // Refresh scroll position
	            this.scrollTo(this.__scrollLeft, this.__scrollTop, true);
	        },


	        /**
	         * Sets the client coordinates in relation to the document.
	         *
	         * @param left {Integer ? 0} Left position of outer element
	         * @param top {Integer ? 0} Top position of outer element
	         */
	        setPosition : function (left, top) {
	            this.__clientLeft = left || 0;
	            this.__clientTop = top || 0;
	        },


	        /**
	         * Configures the snapping (when snapping is active)
	         *
	         * @param width {Integer} Snapping width
	         * @param height {Integer} Snapping height
	         */
	        setSnapSize : function (width, height) {
	            this.__snapWidth = width;
	            this.__snapHeight = height;
	        },


	        /**
	         * Returns the scroll position and zooming values
	         *
	         * @return {Map} `left` and `top` scroll position and `zoom` level
	         */
	        getValues : function () {
	            return {
	                left: this.__scrollLeft,
	                top: this.__scrollTop,
	                right: this.__scrollLeft + this.__clientWidth/this.__zoomLevel,
	                bottom: this.__scrollTop + this.__clientHeight/this.__zoomLevel,
	                zoom: this.__zoomLevel
	            };
	        },


	        /**
	         * Get point in in content space from scroll coordinates.
	         */
	        getPoint : function (scrollLeft, scrollTop) {
	            var values = this.getValues();

	            return {
	                left : scrollLeft / values.zoom,
	                top : scrollTop / values.zoom
	            };
	        },


	        /**
	         * Returns the maximum scroll values
	         *
	         * @return {Map} `left` and `top` maximum scroll values
	         */
	        getScrollMax : function () {
	            return {
	                left: this.__maxScrollLeft,
	                top: this.__maxScrollTop
	            };
	        },


	        /**
	         * Zooms to the given level. Supports optional animation. Zooms
	         * the center when no coordinates are given.
	         *
	         * @param level {Number} Level to zoom to
	         * @param isAnimated {Boolean ? false} Whether to use animation
	         * @param fixedLeft {Number ? undefined} Stationary point's left coordinate (vector in client space)
	         * @param fixedTop {Number ? undefined} Stationary point's top coordinate (vector in client space)
	         * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
	         */
	        zoomTo : function (level, isAnimated, fixedLeft, fixedTop, callback) {
	            if (!this.options.zooming) {
	                throw new Error("Zooming is not enabled!");
	            }

	            // Add callback if exists
	            if(callback) {
	                this.__zoomComplete = callback;
	            }

	            // Stop deceleration
	            if (this.__isDecelerating) {
	                animate.stop(this.__isDecelerating);
	                this.__isDecelerating = false;
	            }

	            var oldLevel = this.__zoomLevel;

	            // Normalize fixed point to center of viewport if not defined
	            if (fixedLeft === undefined) {
	                fixedLeft = this.__clientWidth / 2;
	            }

	            if (fixedTop === undefined) {
	                fixedTop = this.__clientHeight / 2;
	            }

	            // Limit level according to configuration
	            level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

	            // Recompute maximum values while temporary tweaking maximum scroll ranges
	            this.__computeScrollMax(level);

	            // Recompute left and top scroll positions based on new zoom level.
	            // Choosing the new viewport so that the origin's position remains
	            // fixed, we have central dilation about the origin.
	            // * Fixed point, $F$, remains stationary in content space and in the
	            // viewport.
	            // * Initial scroll position, $S_i$, in content space.
	            // * Final scroll position, $S_f$, in content space.
	            // * Initial scaling factor, $k_i$.
	            // * Final scaling factor, $k_f$.
	            //
	            // * $S_i \mapsto S_f$.
	            // * $(S_i - F) k_i = (S_f - F) k_f$.
	            // * $(S_i - F) k_i/k_f = (S_f - F)$.
	            // * $S_f = F + (S_i - F) k_i/k_f$.
	            //
	            // Fixed point location, $\vector{f} = (F - S_i) k_i$.
	            // * $F = S_i + \vector{f}/k_i$.
	            // * $S_f = S_i + \vector{f}/k_i + (S_i - S_i - \vector{f}/k_i) k_i/k_f$.
	            // * $S_f = S_i + \vector{f}/k_i - \vector{f}/k_f$.
	            // * $S_f k_f = S_i k_f + (k_f/k_i - 1)\vector{f}$.
	            // * $S_f k_f = (k_f/k_i)(S_i k_i) + (k_f/k_i - 1) \vector{f}$.
	            var k = level / oldLevel;
	            var left = k*(this.__scrollLeft + fixedLeft) - fixedLeft;
	            var top = k*(this.__scrollTop + fixedTop) - fixedTop;

	            // Limit x-axis
	            if (left > this.__maxScrollLeft) {
	                left = this.__maxScrollLeft;
	            } else if (left < 0) {
	                left = 0;
	            }

	            // Limit y-axis
	            if (top > this.__maxScrollTop) {
	                top = this.__maxScrollTop;
	            } else if (top < 0) {
	                top = 0;
	            }

	            // Push values out
	            this.__publish(left, top, level, isAnimated);
	        },


	        /**
	         * Zooms the content by the given factor.
	         *
	         * @param factor {Number} Zoom by given factor
	         * @param isAnimated {Boolean ? false} Whether to use animation
	         * @param originLeft {Number ? 0} Zoom in at given left coordinate
	         * @param originTop {Number ? 0} Zoom in at given top coordinate
	         * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
	         */
	        zoomBy : function (factor, isAnimated, originLeft, originTop, callback) {
	            this.zoomTo(this.__zoomLevel * factor, isAnimated, originLeft, originTop, callback);
	        },


	        /**
	         * Scrolls to the given position. Respect limitations and snapping automatically.
	         *
	         * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
	         * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
	         * @param isAnimated {Boolean?false} Whether the scrolling should happen using an animation
	         * @param zoom {Number} [1.0] Zoom level to go to
	         */
	        scrollTo : function (left, top, isAnimated, zoom) {
	            // Stop deceleration
	            if (this.__isDecelerating) {
	                animate.stop(this.__isDecelerating);
	                this.__isDecelerating = false;
	            }

	            // Correct coordinates based on new zoom level
	            if (zoom !== undefined && zoom !== this.__zoomLevel) {
	                if (!this.options.zooming) {
	                    throw new Error("Zooming is not enabled!");
	                }

	                left *= zoom;
	                top *= zoom;

	                // Recompute maximum values while temporary tweaking maximum scroll ranges
	                this.__computeScrollMax(zoom);
	            } else {
	                // Keep zoom when not defined
	                zoom = this.__zoomLevel;
	            }

	            if (!this.options.scrollingX) {
	                left = this.__scrollLeft;
	            } else {
	                if (this.options.paging) {
	                    left = Math.round(left / this.__clientWidth) * this.__clientWidth;
	                } else if (this.options.snapping) {
	                    left = Math.round(left / this.__snapWidth) * this.__snapWidth;
	                }
	            }

	            if (!this.options.scrollingY) {
	                top = this.__scrollTop;
	            } else {
	                if (this.options.paging) {
	                    top = Math.round(top / this.__clientHeight) * this.__clientHeight;
	                } else if (this.options.snapping) {
	                    top = Math.round(top / this.__snapHeight) * this.__snapHeight;
	                }
	            }

	            // Limit for allowed ranges
	            left = Math.max(Math.min(this.__maxScrollLeft, left), 0);
	            top = Math.max(Math.min(this.__maxScrollTop, top), 0);

	            // Don't animate when no change detected, still call publish to make sure
	            // that rendered position is really in-sync with internal data
	            if (left === this.__scrollLeft && top === this.__scrollTop) {
	                isAnimated = false;
	            }

	            // Publish new values
	            this.__publish(left, top, zoom, isAnimated);
	        },


	        /**
	         * Scroll by the given offset
	         *
	         * @param left {Number ? 0} Scroll x-axis by given offset
	         * @param top {Number ? 0} Scroll x-axis by given offset
	         * @param isAnimated {Boolean ? false} Whether to animate the given change
	         */
	        scrollBy : function (left, top, isAnimated) {
	            var startLeft = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft;
	            var startTop = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;

	            this.scrollTo(startLeft + (left || 0), startTop + (top || 0), isAnimated);
	        },


	        /*
	          ---------------------------------------------------------------------------
	          EVENT CALLBACKS
	          ---------------------------------------------------------------------------
	        */

	        /**
	         * Mouse wheel handler for zooming support
	         */
	        doMouseZoom : function (wheelDelta, timeStamp, pageX, pageY) {
	            var change = wheelDelta > 0 ? 0.97 : 1.03;

	            return this.zoomTo(this.__zoomLevel * change, false, pageX - this.__clientLeft, pageY - this.__clientTop);
	        },


	        /**
	         * Touch start handler for scrolling support
	         */
	        doTouchStart : function (touches, timeStamp) {
	            // Array-like check is enough here
	            if (touches.length === undefined) {
	                throw new Error("Invalid touch list: " + touches);
	            }

	            if (timeStamp instanceof Date) {
	                timeStamp = timeStamp.valueOf();
	            }
	            if (typeof timeStamp !== "number") {
	                throw new Error("Invalid timestamp value: " + timeStamp);
	            }

	            // Reset interruptedAnimation flag
	            this.__interruptedAnimation = true;

	            // Stop deceleration
	            if (this.__isDecelerating) {
	                animate.stop(this.__isDecelerating);
	                this.__isDecelerating = false;
	                this.__interruptedAnimation = true;
	            }

	            // Stop animation
	            if (this.__isAnimating) {
	                animate.stop(this.__isAnimating);
	                this.__isAnimating = false;
	                this.__interruptedAnimation = true;
	            }

	            // Use center point when dealing with two fingers
	            var currentTouchLeft, currentTouchTop;
	            var isSingleTouch = touches.length === 1;
	            if (isSingleTouch) {
	                currentTouchLeft = touches[0].pageX;
	                currentTouchTop = touches[0].pageY;
	            } else {
	                currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
	                currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
	            }

	            // Store initial positions
	            this.__initialTouchLeft = currentTouchLeft;
	            this.__initialTouchTop = currentTouchTop;

	            // Store current zoom level
	            this.__zoomLevelStart = this.__zoomLevel;

	            // Store initial touch positions
	            this.__lastTouchLeft = currentTouchLeft;
	            this.__lastTouchTop = currentTouchTop;

	            // Store initial move time stamp
	            this.__lastTouchMove = timeStamp;

	            // Reset initial scale
	            this.__lastScale = 1;

	            // Reset locking flags
	            this.__enableScrollX = !isSingleTouch && this.options.scrollingX;
	            this.__enableScrollY = !isSingleTouch && this.options.scrollingY;

	            // Reset tracking flag
	            this.__isTracking = true;

	            // Reset deceleration complete flag
	            this.__didDecelerationComplete = false;

	            // Dragging starts directly with two fingers, otherwise lazy with an offset
	            this.__isDragging = !isSingleTouch;

	            // Some features are disabled in multi touch scenarios
	            this.__isSingleTouch = isSingleTouch;

	            // Clearing data structure
	            this.__positions = [];
	        },


	        /**
	         * Touch move handler for scrolling support
	         * @param {Number} [1.0] scale - ....
	         */
	        doTouchMove : function (touches, timeStamp, scale) {
	            // Array-like check is enough here
	            if (touches.length === undefined) {
	                throw new Error("Invalid touch list: " + touches);
	            }

	            if (timeStamp instanceof Date) {
	                timeStamp = timeStamp.valueOf();
	            }
	            if (typeof timeStamp !== "number") {
	                throw new Error("Invalid timestamp value: " + timeStamp);
	            }

	            // Ignore event when tracking is not enabled (event might be outside of element)
	            if (!this.__isTracking) {
	                return;
	            }

	            var currentTouchLeft, currentTouchTop;

	            // Compute move based around of center of fingers
	            if (touches.length === 2) {
	                currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
	                currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
	            } else {
	                currentTouchLeft = touches[0].pageX;
	                currentTouchTop = touches[0].pageY;
	            }

	            var positions = this.__positions;

	            // Are we already is dragging mode?
	            if (this.__isDragging) {
	                // Compute move distance
	                var moveX = currentTouchLeft - this.__lastTouchLeft;
	                var moveY = currentTouchTop - this.__lastTouchTop;

	                // Read previous scroll position and zooming
	                var scrollLeft = this.__scrollLeft;
	                var scrollTop = this.__scrollTop;
	                var level = this.__zoomLevel;

	                // Work with scaling
	                if (scale !== undefined && this.options.zooming) {
	                    var oldLevel = level;

	                    // Recompute level based on previous scale and new scale
	                    level = level / this.__lastScale * scale;

	                    // Limit level according to configuration
	                    level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);

	                    // Only do further compution when change happened
	                    if (oldLevel !== level) {
	                        // Compute relative event position to container
	                        var currentTouchLeftRel = currentTouchLeft - this.__clientLeft;
	                        var currentTouchTopRel = currentTouchTop - this.__clientTop;

	                        // Recompute left and top coordinates based on new zoom level
	                        scrollLeft = ((currentTouchLeftRel + scrollLeft) * level / oldLevel) - currentTouchLeftRel;
	                        scrollTop = ((currentTouchTopRel + scrollTop) * level / oldLevel) - currentTouchTopRel;

	                        // Recompute max scroll values
	                        this.__computeScrollMax(level);
	                    }
	                }

	                if (this.__enableScrollX) {
	                    scrollLeft -= moveX * this.options.speedMultiplier;
	                    var maxScrollLeft = this.__maxScrollLeft;

	                    if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
	                        // Slow down on the edges
	                        if (this.options.bouncing) {
	                            scrollLeft += (moveX / 2  * this.options.speedMultiplier);
	                        } else if (scrollLeft > maxScrollLeft) {
	                            scrollLeft = maxScrollLeft;
	                        } else {
	                            scrollLeft = 0;
	                        }
	                    }
	                }

	                // Compute new vertical scroll position
	                if (this.__enableScrollY) {
	                    scrollTop -= moveY * this.options.speedMultiplier;
	                    var maxScrollTop = this.__maxScrollTop;

	                    if (scrollTop > maxScrollTop || scrollTop < 0) {
	                        // Slow down on the edges
	                        if (this.options.bouncing) {
	                            scrollTop += (moveY / 2 * this.options.speedMultiplier);
	                        } else if (scrollTop > maxScrollTop) {
	                            scrollTop = maxScrollTop;
	                        } else {
	                            scrollTop = 0;
	                        }
	                    }
	                }

	                // Keep list from growing infinitely (holding min 10, max 20 measure points)
	                if (positions.length > 60) {
	                    positions.splice(0, 30);
	                }

	                // Track scroll movement for decleration
	                positions.push(scrollLeft, scrollTop, timeStamp);

	                // Sync scroll position
	                this.__publish(scrollLeft, scrollTop, level);

	                // Otherwise figure out whether we are switching into dragging mode now.
	            } else {
	                var minimumTrackingForScroll = this.options.locking ? 3 : 0;
	                var minimumTrackingForDrag = 5;

	                var distanceX = Math.abs(currentTouchLeft - this.__initialTouchLeft);
	                var distanceY = Math.abs(currentTouchTop - this.__initialTouchTop);

	                this.__enableScrollX = this.options.scrollingX && distanceX >= minimumTrackingForScroll;
	                this.__enableScrollY = this.options.scrollingY && distanceY >= minimumTrackingForScroll;

	                positions.push(this.__scrollLeft, this.__scrollTop, timeStamp);

	                this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
	                if (this.__isDragging) {
	                    this.__interruptedAnimation = false;
	                }
	            }

	            // Update last touch positions and time stamp for next event
	            this.__lastTouchLeft = currentTouchLeft;
	            this.__lastTouchTop = currentTouchTop;
	            this.__lastTouchMove = timeStamp;
	            this.__lastScale = scale;
	        },


	        /**
	         * Touch end handler for scrolling support
	         */
	        doTouchEnd : function (timeStamp) {
	            if (timeStamp instanceof Date) {
	                timeStamp = timeStamp.valueOf();
	            }
	            if (typeof timeStamp !== "number") {
	                throw new Error("Invalid timestamp value: " + timeStamp);
	            }

	            // Ignore event when tracking is not enabled (no touchstart event on element)
	            // This is required as this listener ('touchmove') sits on the document and not on the element itself.
	            if (!this.__isTracking) {
	                return;
	            }

	            // Not touching anymore (when two finger hit the screen there are two touch end events)
	            this.__isTracking = false;

	            // Be sure to reset the dragging flag now. Here we also detect whether
	            // the finger has moved fast enough to switch into a deceleration animation.
	            if (this.__isDragging) {
	                // Reset dragging flag
	                this.__isDragging = false;

	                // Start deceleration
	                // Verify that the last move detected was in some relevant time frame
	                if (this.__isSingleTouch && this.options.animating && (timeStamp - this.__lastTouchMove) <= 100) {
	                    // Then figure out what the scroll position was about 100ms ago
	                    var positions = this.__positions;
	                    var endPos = positions.length - 1;
	                    var startPos = endPos;

	                    // Move pointer to position measured 100ms ago
	                    for (var i = endPos; i > 0 && positions[i] > (this.__lastTouchMove - 100); i -= 3) {
	                        startPos = i;
	                    }

	                    // If start and stop position is identical in a 100ms timeframe,
	                    // we cannot compute any useful deceleration.
	                    if (startPos !== endPos) {
	                        // Compute relative movement between these two points
	                        var timeOffset = positions[endPos] - positions[startPos];
	                        var movedLeft = this.__scrollLeft - positions[startPos - 2];
	                        var movedTop = this.__scrollTop - positions[startPos - 1];

	                        // Based on 50ms compute the movement to apply for each render step
	                        this.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
	                        this.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

	                        // How much velocity is required to start the deceleration
	                        var minVelocityToStartDeceleration = this.options.paging || this.options.snapping ? 4 : 1;

	                        // Verify that we have enough velocity to start deceleration
	                        if (Math.abs(this.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(this.__decelerationVelocityY) > minVelocityToStartDeceleration) {
	                            this.__startDeceleration(timeStamp);
	                        }
	                    } else {
	                        this.options.scrollingComplete();
	                    }
	                } else if ((timeStamp - this.__lastTouchMove) > 100) {
	                    this.options.scrollingComplete();
	                }
	            }

	            // If this was a slower move it is per default non decelerated, but this
	            // still means that we want snap back to the bounds which is done here.
	            // This is placed outside the condition above to improve edge case stability
	            // e.g. touchend fired without enabled dragging. This should normally do not
	            // have modified the scroll positions or even showed the scrollbars though.
	            if (!this.__isDecelerating) {
	                if (this.__interruptedAnimation || this.__isDragging) {
	                    this.options.scrollingComplete();
	                }
	                this.scrollTo(this.__scrollLeft, this.__scrollTop, true, this.__zoomLevel);
	            }

	            // Fully cleanup list
	            this.__positions.length = 0;
	        },



	        /*
	          ---------------------------------------------------------------------------
	          PRIVATE API
	          ---------------------------------------------------------------------------
	        */

	        /**
	         * Applies the scroll position to the content element
	         *
	         * @param left {Number} Left scroll position
	         * @param top {Number} Top scroll position
	         * @param isAnimated {Boolean?false} Whether animation should be used to move to the new coordinates
	         */
	        __publish : function (left, top, zoom, isAnimated) {
	            // Remember whether we had an animation, then we try to continue
	            // based on the current "drive" of the animation.
	            var wasAnimating = this.__isAnimating;
	            if (wasAnimating) {
	                animate.stop(wasAnimating);
	                this.__isAnimating = false;
	            }

	            if (isAnimated && this.options.animating) {
	                // Keep scheduled positions for scrollBy/zoomBy functionality.
	                this.__scheduledLeft = left;
	                this.__scheduledTop = top;
	                this.__scheduledZoom = zoom;

	                var oldLeft = this.__scrollLeft;
	                var oldTop = this.__scrollTop;
	                var oldZoom = this.__zoomLevel;

	                var diffLeft = left - oldLeft;
	                var diffTop = top - oldTop;
	                var diffZoom = zoom - oldZoom;

	                var step = function (percent, now, render) {
	                    if (render) {
	                        this.__scrollLeft = oldLeft + (diffLeft * percent);
	                        this.__scrollTop = oldTop + (diffTop * percent);
	                        this.__zoomLevel = oldZoom + (diffZoom * percent);

	                        // Push values out
	                        if (this.__callback) {
	                            this.__callback(this.__scrollLeft, this.__scrollTop, this.__zoomLevel);
	                        }
	                    }
	                }.bind(this);

	                var verify = function (id) {
	                    return this.__isAnimating === id;
	                }.bind(this);

	                var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
	                    if (animationId === this.__isAnimating) {
	                        this.__isAnimating = false;
	                    }
	                    if (this.__didDecelerationComplete || wasFinished) {
	                        this.options.scrollingComplete();
	                    }

	                    if (this.options.zooming) {
	                        this.__computeScrollMax();
	                        if (this.__zoomComplete) {
	                            this.__zoomComplete();
	                            this.__zoomComplete = null;
	                        }
	                    }
	                }.bind(this);

	                // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
	                this.__isAnimating = animate.start(step, verify, completed, this.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);

	            } else {
	                this.__scheduledLeft = this.__scrollLeft = left;
	                this.__scheduledTop = this.__scrollTop = top;
	                this.__scheduledZoom = this.__zoomLevel = zoom;

	                // Push values out
	                if (this.__callback) {
	                    this.__callback(left, top, zoom);
	                }

	                // Fix max scroll ranges
	                if (this.options.zooming) {
	                    this.__computeScrollMax();
	                    if (this.__zoomComplete) {
	                        this.__zoomComplete();
	                        this.__zoomComplete = null;
	                    }
	                }
	            }
	        },


	        /**
	         * Recomputes scroll minimum values based on client dimensions and content dimensions.
	         */
	        __computeScrollMax : function (zoomLevel) {
	            if (zoomLevel === undefined) {
	                zoomLevel = this.__zoomLevel;
	            }

	            this.__maxScrollLeft = Math.max(this.__contentWidth*zoomLevel - this.__clientWidth, 0);
	            this.__maxScrollTop = Math.max(this.__contentHeight*zoomLevel - this.__clientHeight, 0);
	        },



	        /*
	          ---------------------------------------------------------------------------
	          ANIMATION (DECELERATION) SUPPORT
	          ---------------------------------------------------------------------------
	        */

	        /**
	         * Called when a touch sequence end and the speed of the finger was high enough
	         * to switch into deceleration mode.
	         */
	        __startDeceleration : function (timeStamp) {
	            if (this.options.paging) {
	                var scrollLeft = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0);
	                var scrollTop = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0);
	                var clientWidth = this.__clientWidth;
	                var clientHeight = this.__clientHeight;

	                // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
	                // Each page should have exactly the size of the client area.
	                this.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
	                this.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
	                this.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
	                this.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
	            } else {
	                this.__minDecelerationScrollLeft = 0;
	                this.__minDecelerationScrollTop = 0;
	                this.__maxDecelerationScrollLeft = this.__maxScrollLeft;
	                this.__maxDecelerationScrollTop = this.__maxScrollTop;
	            }

	            // Wrap class method
	            var step = function (percent, now, render) {
	                this.__stepThroughDeceleration(render);
	            }.bind(this);

	            // How much velocity is required to keep the deceleration running
	            var minVelocityToKeepDecelerating = this.options.snapping ? 4 : 0.1;

	            // Detect whether it's still worth to continue animating steps
	            // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
	            var verify = function () {
	                var shouldContinue = Math.abs(this.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(this.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
	                if (!shouldContinue) {
	                    this.__didDecelerationComplete = true;
	                }
	                return shouldContinue;
	            }.bind(this);

	            var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
	                this.__isDecelerating = false;
	                if (this.__didDecelerationComplete) {
	                    this.options.scrollingComplete();
	                }

	                // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
	                this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping);
	            }.bind(this);

	            // Start animation and switch on flag
	            this.__isDecelerating = animate.start(step, verify, completed);
	        },


	        /**
	         * Called on every step of the animation
	         *
	         * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
	         */
	        __stepThroughDeceleration : function (render) {

	            //
	            // COMPUTE NEXT SCROLL POSITION
	            //

	            // Add deceleration to scroll position
	            var scrollLeft = this.__scrollLeft + this.__decelerationVelocityX;
	            var scrollTop = this.__scrollTop + this.__decelerationVelocityY;


	            //
	            // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
	            //

	            if (!this.options.bouncing) {
	                var scrollLeftFixed = Math.max(Math.min(this.__maxDecelerationScrollLeft, scrollLeft), this.__minDecelerationScrollLeft);
	                if (scrollLeftFixed !== scrollLeft) {
	                    scrollLeft = scrollLeftFixed;
	                    this.__decelerationVelocityX = 0;
	                }

	                var scrollTopFixed = Math.max(Math.min(this.__maxDecelerationScrollTop, scrollTop), this.__minDecelerationScrollTop);
	                if (scrollTopFixed !== scrollTop) {
	                    scrollTop = scrollTopFixed;
	                    this.__decelerationVelocityY = 0;
	                }
	            }


	            //
	            // UPDATE SCROLL POSITION
	            //

	            if (render) {
	                this.__publish(scrollLeft, scrollTop, this.__zoomLevel);
	            } else {
	                this.__scrollLeft = scrollLeft;
	                this.__scrollTop = scrollTop;
	            }


	            //
	            // SLOW DOWN
	            //

	            // Slow down velocity on every iteration
	            if (!this.options.paging) {
	                // This is the factor applied to every iteration of the animation
	                // to slow down the process. This should emulate natural behavior where
	                // objects slow down when the initiator of the movement is removed
	                var frictionFactor = 0.95;

	                this.__decelerationVelocityX *= frictionFactor;
	                this.__decelerationVelocityY *= frictionFactor;
	            }


	            //
	            // BOUNCING SUPPORT
	            //

	            if (this.options.bouncing) {
	                var scrollOutsideX = 0;
	                var scrollOutsideY = 0;

	                // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
	                var penetrationDeceleration = this.options.penetrationDeceleration;
	                var penetrationAcceleration = this.options.penetrationAcceleration;

	                // Check limits
	                if (scrollLeft < this.__minDecelerationScrollLeft) {
	                    scrollOutsideX = this.__minDecelerationScrollLeft - scrollLeft;
	                } else if (scrollLeft > this.__maxDecelerationScrollLeft) {
	                    scrollOutsideX = this.__maxDecelerationScrollLeft - scrollLeft;
	                }

	                if (scrollTop < this.__minDecelerationScrollTop) {
	                    scrollOutsideY = this.__minDecelerationScrollTop - scrollTop;
	                } else if (scrollTop > this.__maxDecelerationScrollTop) {
	                    scrollOutsideY = this.__maxDecelerationScrollTop - scrollTop;
	                }

	                // Slow down until slow enough, then flip back to snap position
	                if (scrollOutsideX !== 0) {
	                    if (scrollOutsideX * this.__decelerationVelocityX <= 0) {
	                        this.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
	                    } else {
	                        this.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
	                    }
	                }

	                if (scrollOutsideY !== 0) {
	                    if (scrollOutsideY * this.__decelerationVelocityY <= 0) {
	                        this.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
	                    } else {
	                        this.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
	                    }
	                }
	            }
	        }
	    };

	    return Scroller;
	}));


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var widget_1 = __webpack_require__(19);
	var button_1 = __webpack_require__(93);
	var graphics_1 = __webpack_require__(25);
	var consts_1 = __webpack_require__(104);
	var radio_button_1 = __webpack_require__(105);
	var widget_factory_1 = __webpack_require__(23);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 标签控件上的标签按钮。
	 */
	var TabButton = (function (_super) {
	    __extends(TabButton, _super);
	    function TabButton() {
	        _super.call(this, TabButton.TYPE);
	    }
	    Object.defineProperty(TabButton.prototype, "closeButton", {
	        get: function () {
	            return this._closeButton;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabButton.prototype, "closeButtonAtLeft", {
	        get: function () {
	            return this._cbAtLeft;
	        },
	        set: function (value) {
	            this._cbAtLeft = value;
	            this.relayoutChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabButton.prototype, "orientation", {
	        get: function () {
	            return this._orn;
	        },
	        set: function (value) {
	            this._orn = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabButton.prototype.setIcons = function (normalIconURL, currentIconURL) {
	        var _this = this;
	        if (normalIconURL) {
	            this._normalIcon = image_tile_1.ImageTile.create(normalIconURL, function (evt) {
	                _this.requestRedraw();
	            });
	        }
	        else {
	            this._normalIcon = null;
	        }
	        this._normalIconURL = normalIconURL ? normalIconURL : null;
	        if (currentIconURL) {
	            this._currentIcon = image_tile_1.ImageTile.create(currentIconURL, function (evt) {
	                _this.requestRedraw();
	            });
	        }
	        else {
	            this._currentIcon = null;
	        }
	        this._currentIconURL = currentIconURL ? currentIconURL : null;
	    };
	    Object.defineProperty(TabButton.prototype, "closable", {
	        get: function () {
	            return !!this._closeButton;
	        },
	        set: function (value) {
	            if (value && this._closeButton || !value && !this._closeButton) {
	                return;
	            }
	            if (this._closeButton) {
	                this.removeChild(this._closeButton);
	                this._closeButton = null;
	            }
	            else {
	                var closeButton = button_1.Button.create();
	                closeButton.set({ styleType: "tab-button.close" });
	                this.addChild(closeButton);
	                this._closeButton = closeButton;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabButton.prototype.relayoutChildren = function () {
	        if (this._closeButton) {
	            var x = this.leftPadding;
	            var y = this.topPadding;
	            var h = this.h - this.topPadding - this.bottomPadding;
	            var w = h;
	            if (!this.closeButtonAtLeft) {
	                x = this.w - this.rightPadding - w;
	            }
	            this._closeButton.moveResizeTo(x, y, w, h);
	        }
	        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
	    };
	    Object.defineProperty(TabButton.prototype, "desireWidth", {
	        get: function () {
	            var w = this.leftPadding + this.rightPadding;
	            var text = this.text;
	            var style = this.getStyle();
	            if (this._currentIcon || this._normalIcon) {
	                w += this.h;
	            }
	            if (text && style) {
	                var font = style.font;
	                w += graphics_1.Graphics.measureText(text, font) + style.fontSize;
	            }
	            return w;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabButton.prototype, "tabPage", {
	        get: function () {
	            return this._tabPage;
	        },
	        set: function (value) {
	            this._tabPage = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabButton.prototype.getStyleType = function () {
	        var appendix = this.value ? "current" : "normal";
	        return (this._styleType || this.type) + "." + appendix;
	    };
	    TabButton.prototype.drawImage = function (ctx, style) {
	        var text = this.getLocaleText();
	        var icon = this.value ? this._currentIcon : this._normalIcon;
	        if (icon) {
	            var w = 0;
	            var h = 0;
	            var x = this.leftPadding;
	            var y = this.topPadding;
	            if (this._orn === consts_1.Orientation.V) {
	                w = this.w - this.leftPadding - this.rightPadding;
	                h = this.h - this.bottomPadding - this.topPadding;
	                if (text) {
	                    h -= style.fontSize;
	                }
	                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	                if (text) {
	                    y = this.h - this.bottomPadding - style.fontSize;
	                    graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(0, y, w, style.fontSize));
	                }
	            }
	            else {
	                h = this.h - this.topPadding - this.bottomPadding;
	                w = h;
	                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	                if (text) {
	                    x += w + this.leftPadding;
	                    w = this.w - x - this.rightPadding;
	                    graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
	                }
	            }
	        }
	        else {
	            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(0, 0, this.w, this.h));
	        }
	        return this;
	    };
	    TabButton.prototype.drawText = function (ctx, style) {
	        return this;
	    };
	    TabButton.prototype.onReset = function () {
	        this._tabPage = null;
	        this._closeButton = null;
	        this._normalIcon = null;
	        this._currentIcon = null;
	    };
	    TabButton.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._tabPage = null;
	        this._closeButton = null;
	        this._normalIcon = null;
	        this._currentIcon = null;
	    };
	    TabButton.prototype.getDefProps = function () {
	        return TabButton.defProps;
	    };
	    TabButton.create = function (options) {
	        return TabButton.re.create().reset(TabButton.TYPE, options);
	    };
	    TabButton.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2,
	        _normalIconURL: null, _currentIconURL: null, closable: false, _cbAtLeft: false, _orn: consts_1.Orientation.H });
	    TabButton.TYPE = "tab-button";
	    TabButton.re = new recyclable_creator_1.RecyclableCreator(function () { return new TabButton(); });
	    return TabButton;
	}(radio_button_1.RadioButton));
	exports.TabButton = TabButton;
	;
	widget_factory_1.WidgetFactory.register(TabButton.TYPE, TabButton.create);


/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	(function (Orientation) {
	    Orientation[Orientation["V"] = 1] = "V";
	    Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
	    Orientation[Orientation["H"] = 2] = "H";
	    Orientation[Orientation["HORIZONTAL"] = 2] = "HORIZONTAL";
	})(exports.Orientation || (exports.Orientation = {}));
	var Orientation = exports.Orientation;
	;
	(function (Direction) {
	    Direction[Direction["W"] = 1] = "W";
	    Direction[Direction["WEST"] = 1] = "WEST";
	    Direction[Direction["E"] = 2] = "E";
	    Direction[Direction["EAST"] = 2] = "EAST";
	    Direction[Direction["N"] = 3] = "N";
	    Direction[Direction["NORTH"] = 3] = "NORTH";
	    Direction[Direction["S"] = 4] = "S";
	    Direction[Direction["SOUTH"] = 4] = "SOUTH";
	    Direction[Direction["L"] = 1] = "L";
	    Direction[Direction["LEFT"] = 1] = "LEFT";
	    Direction[Direction["R"] = 2] = "R";
	    Direction[Direction["RIGHT"] = 2] = "RIGHT";
	    Direction[Direction["T"] = 3] = "T";
	    Direction[Direction["TOP"] = 3] = "TOP";
	    Direction[Direction["B"] = 4] = "B";
	    Direction[Direction["BOTTOM"] = 4] = "BOTTOM";
	})(exports.Direction || (exports.Direction = {}));
	var Direction = exports.Direction;
	;
	(function (AlignH) {
	    AlignH[AlignH["L"] = 1] = "L";
	    AlignH[AlignH["LEFT"] = 1] = "LEFT";
	    AlignH[AlignH["C"] = 2] = "C";
	    AlignH[AlignH["CENTER"] = 2] = "CENTER";
	    AlignH[AlignH["R"] = 3] = "R";
	    AlignH[AlignH["RIGHT"] = 3] = "RIGHT";
	})(exports.AlignH || (exports.AlignH = {}));
	var AlignH = exports.AlignH;
	;
	(function (AlignV) {
	    AlignV[AlignV["T"] = 1] = "T";
	    AlignV[AlignV["TOP"] = 1] = "TOP";
	    AlignV[AlignV["M"] = 2] = "M";
	    AlignV[AlignV["MIDDLE"] = 2] = "MIDDLE";
	    AlignV[AlignV["B"] = 3] = "B";
	    AlignV[AlignV["BOTTOM"] = 3] = "BOTTOM";
	})(exports.AlignV || (exports.AlignV = {}));
	var AlignV = exports.AlignV;
	;
	(function (Align) {
	    Align[Align["L"] = 1] = "L";
	    Align[Align["LEFT"] = 1] = "LEFT";
	    Align[Align["C"] = 2] = "C";
	    Align[Align["CENTER"] = 2] = "CENTER";
	    Align[Align["R"] = 3] = "R";
	    Align[Align["RIGHT"] = 3] = "RIGHT";
	    Align[Align["T"] = 1] = "T";
	    Align[Align["TOP"] = 1] = "TOP";
	    Align[Align["M"] = 2] = "M";
	    Align[Align["MIDDLE"] = 2] = "MIDDLE";
	    Align[Align["B"] = 3] = "B";
	    Align[Align["BOTTOM"] = 3] = "BOTTOM";
	})(exports.Align || (exports.Align = {}));
	var Align = exports.Align;
	;
	var Services = (function () {
	    function Services() {
	    }
	    Services.THEME_MANAGER = "qtk-theme-manager";
	    return Services;
	}());
	exports.Services = Services;
	;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var check_button_1 = __webpack_require__(106);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 单选按钮。同一个父控件中，只有一个单选按钮被勾选。被勾选时value为true，否则为false。
	 */
	var RadioButton = (function (_super) {
	    __extends(RadioButton, _super);
	    function RadioButton(type) {
	        _super.call(this, type || RadioButton.TYPE);
	    }
	    Object.defineProperty(RadioButton.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            this.setValue(value, true, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RadioButton.create = function (options) {
	        return RadioButton.r.create().reset(RadioButton.TYPE, options);
	    };
	    RadioButton.TYPE = "radio-button";
	    RadioButton.r = new recyclable_creator_1.RecyclableCreator(function () { return new RadioButton(); });
	    return RadioButton;
	}(check_button_1.CheckButton));
	exports.RadioButton = RadioButton;
	;
	widget_factory_1.WidgetFactory.register(RadioButton.TYPE, RadioButton.create);


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	var CheckButton = (function (_super) {
	    __extends(CheckButton, _super);
	    function CheckButton(type) {
	        _super.call(this, type || CheckButton.TYPE);
	    }
	    Object.defineProperty(CheckButton.prototype, "inputable", {
	        get: function () {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CheckButton.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            this.setProp("value", value, true);
	            this.notifyChange();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CheckButton.prototype.getStyleType = function () {
	        var appendix = this.value ? "checked" : "unchecked";
	        return (this._styleType || this.type) + "." + appendix;
	    };
	    CheckButton.prototype.drawText = function (ctx, style) {
	        var text = this.getLocaleText();
	        if (text && style.textColor) {
	            var x = this.w >> 1;
	            var y = this.h >> 1;
	            var img = style.foreGroundImage;
	            ctx.font = style.font;
	            ctx.textAlign = "center";
	            ctx.textBaseline = "middle";
	            ctx.fillStyle = style.textColor;
	            if (img) {
	                var textAlign = style.textAlign;
	                switch (textAlign) {
	                    case "right": {
	                        x = this.h;
	                        ctx.textAlign = "left";
	                        break;
	                    }
	                    case "left": {
	                        x = 0;
	                        ctx.textAlign = "left";
	                        break;
	                    }
	                    default: {
	                        break;
	                    }
	                }
	            }
	            ctx.fillText(text, x, y);
	        }
	        return this;
	    };
	    CheckButton.prototype.drawImage = function (ctx, style) {
	        var img = style.foreGroundImage;
	        var text = this.text;
	        if (img) {
	            var x = 0;
	            var y = 0;
	            var w = this.w;
	            var h = this.h;
	            if (text && style.textColor) {
	                var textAlign = style.textAlign;
	                switch (textAlign) {
	                    case "right": {
	                        w = h;
	                        break;
	                    }
	                    case "left": {
	                        w = h;
	                        x = this.w - w;
	                        break;
	                    }
	                    default: {
	                        break;
	                    }
	                }
	            }
	            img.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	        }
	        return this;
	    };
	    CheckButton.prototype.dispatchClick = function (evt) {
	        this.value = !this.value;
	        _super.prototype.dispatchClick.call(this, evt);
	    };
	    CheckButton.create = function (options) {
	        return CheckButton.recycleBin.create().reset(CheckButton.TYPE, options);
	    };
	    CheckButton.TYPE = "check-button";
	    CheckButton.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new CheckButton(); });
	    return CheckButton;
	}(widget_1.Widget));
	exports.CheckButton = CheckButton;
	;
	widget_factory_1.WidgetFactory.register(CheckButton.TYPE, CheckButton.create);


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var pages_1 = __webpack_require__(87);
	var widget_1 = __webpack_require__(19);
	var tab_page_1 = __webpack_require__(97);
	var Events = __webpack_require__(6);
	var tab_button_1 = __webpack_require__(103);
	var tab_button_group_1 = __webpack_require__(108);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TabControl = (function (_super) {
	    __extends(TabControl, _super);
	    function TabControl() {
	        _super.call(this, TabControl.TYPE);
	    }
	    Object.defineProperty(TabControl.prototype, "value", {
	        get: function () {
	            return this._pages.value;
	        },
	        set: function (value) {
	            this._pages.value = value;
	            this.buttonGroup.value = value;
	            this._value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabControl.prototype, "pages", {
	        get: function () {
	            return this._pages;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabControl.prototype, "buttonGroup", {
	        get: function () {
	            return this._buttonGroup;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabControl.prototype, "buttonGroupAtTop", {
	        get: function () {
	            return this._bgAtTop;
	        },
	        set: function (value) {
	            this._bgAtTop = value;
	            this.relayoutChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabControl.prototype, "buttonGroupHeight", {
	        get: function () {
	            return this._bgh;
	        },
	        set: function (value) {
	            this._bgh = value;
	            this.relayoutChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabControl.prototype.removePage = function (tabPage, destroy) {
	        if (tabPage) {
	            var tabButton = tabPage.tabButton;
	            this.pages.removeChild(tabPage, false, destroy);
	            this.buttonGroup.removeChild(tabButton, false, destroy);
	            this.value--;
	        }
	    };
	    TabControl.prototype.addPage = function (title, normalIconURL, currentIconURL, closable, closeButtonAtLeft) {
	        if (!this.pages.app) {
	            this.pages.app = this.app;
	        }
	        if (!this.buttonGroup.app) {
	            this.buttonGroup.app = this.app;
	        }
	        var tabButton = tab_button_1.TabButton.create();
	        tabButton.setIcons(normalIconURL, currentIconURL);
	        tabButton.set({ text: title, closable: closable, closeButtonAtLeft: closeButtonAtLeft });
	        var tabPage = tab_page_1.TabPage.create();
	        tabButton.tabPage = tabPage;
	        tabPage.tabButton = tabButton;
	        this.pages.addChild(tabPage);
	        this.buttonGroup.addChild(tabButton);
	        var tabControl = this;
	        tabButton.on(Events.CLICK, function (evt) {
	            tabControl.pages.setValueByPage(this.tabPage);
	            if (closable && this.target && this.target === this.closeButton) {
	                tabControl.removePage(this.tabPage);
	            }
	        });
	        this.value = this._value;
	        this.relayoutChildren();
	        return tabPage;
	    };
	    TabControl.prototype.relayoutChildren = function () {
	        var x = this.leftPadding;
	        var y = this.topPadding;
	        var buttonGroupHeight = this.buttonGroupHeight;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        var w = this.w - this.leftPadding - this.rightPadding;
	        var pages = this._pages;
	        var buttonGroup = this._buttonGroup;
	        if (this.buttonGroupAtTop) {
	            if (buttonGroup) {
	                buttonGroup.moveResizeTo(x, y, w, buttonGroupHeight);
	                buttonGroup.relayoutChildren();
	            }
	            y += buttonGroupHeight;
	            h -= buttonGroupHeight;
	        }
	        else {
	            if (buttonGroup) {
	                buttonGroup.moveResizeTo(x, this.h - buttonGroupHeight - this.bottomPadding, w, buttonGroupHeight);
	                buttonGroup.relayoutChildren();
	            }
	            h -= buttonGroupHeight;
	        }
	        if (pages) {
	            pages.moveResizeTo(x, y, w, h);
	            pages.relayoutChildren();
	        }
	        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
	    };
	    TabControl.prototype.onReset = function () {
	        this._value = 0;
	        this._pages = pages_1.Pages.create();
	        this.addChild(this._pages, true);
	        this._buttonGroup = tab_button_group_1.TabButtonGroup.create();
	        this.addChild(this._buttonGroup, true);
	    };
	    TabControl.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._pages = null;
	        this._buttonGroup = null;
	    };
	    TabControl.prototype.getDefProps = function () {
	        return TabControl.defProps;
	    };
	    TabControl.create = function (options) {
	        return TabControl.r.create().reset(TabControl.TYPE, options);
	    };
	    TabControl.defProps = Object.assign({}, widget_1.Widget.defProps, { _bgh: 30, _bgAtTop: false });
	    TabControl.TYPE = "tab-control";
	    TabControl.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabControl(); });
	    return TabControl;
	}(widget_1.Widget));
	exports.TabControl = TabControl;
	;
	widget_factory_1.WidgetFactory.register(TabControl.TYPE, TabControl.create);


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TabButtonGroup = (function (_super) {
	    __extends(TabButtonGroup, _super);
	    function TabButtonGroup() {
	        _super.call(this, TabButtonGroup.TYPE);
	    }
	    Object.defineProperty(TabButtonGroup.prototype, "value", {
	        get: function () {
	            var arr = this.children;
	            var n = arr.length;
	            for (var i = 0; i < n; i++) {
	                var iter = arr[i];
	                if (iter.value) {
	                    return i;
	                }
	            }
	            return 0;
	        },
	        set: function (value) {
	            var n = this.children.length;
	            var index = Math.max(0, Math.min(value, n - 1));
	            if (n > 0) {
	                this.children[index].value = true;
	            }
	            this.requestRedraw();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabButtonGroup.prototype, "autoExpand", {
	        get: function () {
	            return this._ae;
	        },
	        set: function (value) {
	            this._ae = value;
	            this.relayoutChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TabButtonGroup.prototype.relayoutChildren = function () {
	        var x = 0;
	        var y = 0;
	        var w = 0;
	        var h = this.h;
	        var n = this.children.length;
	        var autoExpand = this._ae;
	        if (n > 0) {
	            var itemW = this.w / n;
	            this.children.forEach(function (child) {
	                if (autoExpand) {
	                    w = itemW;
	                }
	                else {
	                    w = child.desireWidth;
	                }
	                child.moveResizeTo(x, y, w, h);
	                child.relayoutChildren();
	                x += w;
	            });
	        }
	        return rect_1.Rect.rect.init(0, 0, this.w, this.h);
	    };
	    TabButtonGroup.prototype.drawChildren = function (ctx) {
	        var current = null;
	        this._children.forEach(function (child) {
	            if (child.visible) {
	                if (child.value) {
	                    current = child;
	                }
	                else {
	                    child.draw(ctx);
	                }
	            }
	        });
	        if (current) {
	            current.draw(ctx);
	        }
	        return this;
	    };
	    TabButtonGroup.prototype.getDefProps = function () {
	        return TabButtonGroup.defProps;
	    };
	    TabButtonGroup.create = function (options) {
	        return TabButtonGroup.r.create().reset(TabButtonGroup.TYPE, options);
	    };
	    TabButtonGroup.defProps = Object.assign({}, widget_1.Widget.defProps, { _ae: true });
	    TabButtonGroup.TYPE = "tab-button-group";
	    TabButtonGroup.r = new recyclable_creator_1.RecyclableCreator(function () { return new TabButtonGroup(); });
	    return TabButtonGroup;
	}(widget_1.Widget));
	exports.TabButtonGroup = TabButtonGroup;
	;
	widget_factory_1.WidgetFactory.register(TabButtonGroup.TYPE, TabButtonGroup.create);


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rich_text_1 = __webpack_require__(98);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var carota = __webpack_require__(26);
	var createDoc = carota.document;
	var dom = carota.dom;
	var node = carota.node;
	var text = carota.text;
	var rect = carota.rect;
	var frame = carota.frame;
	var toggles = {
	    66: 'bold',
	    73: 'italic',
	    85: 'underline',
	    83: 'strikeout'
	};
	/**
	 * 富文本编辑器。
	 */
	var RichTextEdit = (function (_super) {
	    __extends(RichTextEdit, _super);
	    function RichTextEdit() {
	        _super.call(this, RichTextEdit.TYPE);
	        this._element = null;
	        this._textArea = null;
	        this._keyboardX = null;
	        this._focusChar = null;
	        this._textAreaDiv = null;
	        this._keyboardSelect = 0;
	        this._textAreaContent = '';
	        this._nextKeyboardX = null;
	        this._richClipboard = null;
	        this._plainClipboard = null;
	        this._selectDragStart = null;
	        this.focused = false;
	        this.cachedWidth = 0;
	        this.cachedHeight = 0;
	        this.nextCaretToggle = Date.now();
	    }
	    Object.defineProperty(RichTextEdit.prototype, "inputable", {
	        get: function () {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RichTextEdit.prototype.undo = function () {
	        this._doc.performUndo();
	    };
	    RichTextEdit.prototype.redo = function () {
	        this._doc.performUndo(true);
	    };
	    RichTextEdit.prototype.selectAll = function () {
	        var length = this._doc.frame.length - 1;
	        this._doc.select(0, length);
	    };
	    RichTextEdit.prototype.setSelectedFont = function (value) {
	        this.setSelectedFormatting("font", value);
	    };
	    RichTextEdit.prototype.getSelectedFont = function () {
	        return this.getSelectedFormatting("font");
	    };
	    RichTextEdit.prototype.setSelectedSize = function (value) {
	        this.setSelectedFormatting("size", value);
	    };
	    RichTextEdit.prototype.getSelectedSize = function () {
	        return this.getSelectedFormatting("size");
	    };
	    RichTextEdit.prototype.setSelectedBold = function (value) {
	        this.setSelectedFormatting("bold", value);
	    };
	    RichTextEdit.prototype.getSelectedBold = function () {
	        return this.getSelectedFormatting("bold");
	    };
	    RichTextEdit.prototype.setSelectedItalic = function (value) {
	        this.setSelectedFormatting("italic", value);
	    };
	    RichTextEdit.prototype.getSelectedItalic = function () {
	        return this.getSelectedFormatting("italic");
	    };
	    RichTextEdit.prototype.setSelectedUnderline = function (value) {
	        this.setSelectedFormatting("underline", value);
	    };
	    RichTextEdit.prototype.getSelectedUnderline = function () {
	        return this.getSelectedFormatting("underline");
	    };
	    RichTextEdit.prototype.setSelectedStrikeout = function (value) {
	        this.setSelectedFormatting("strikeout", value);
	    };
	    RichTextEdit.prototype.getSelectedStrikeout = function () {
	        return this.getSelectedFormatting("strikeout");
	    };
	    RichTextEdit.prototype.setSelectedAlign = function (value) {
	        this.setSelectedFormatting("align", value);
	    };
	    RichTextEdit.prototype.getSelectedAlign = function () {
	        return this.getSelectedFormatting("align");
	    };
	    RichTextEdit.prototype.setSelectedScript = function (value) {
	        this.setSelectedFormatting("script", value);
	    };
	    RichTextEdit.prototype.getSelectedScript = function () {
	        return this.getSelectedFormatting("script");
	    };
	    RichTextEdit.prototype.setSelectedColor = function (value) {
	        this.setSelectedFormatting("color", value);
	    };
	    RichTextEdit.prototype.getSelectedColor = function () {
	        return this.getSelectedFormatting("color");
	    };
	    RichTextEdit.prototype.setSelectedFormatting = function (id, value) {
	        var range = this._doc.selectedRange();
	        range.setFormatting(id, value);
	        return this;
	    };
	    RichTextEdit.prototype.getSelectedFormatting = function (id) {
	        return null;
	    };
	    RichTextEdit.prototype.exhausted = function (ordinal, direction) {
	        return direction < 0 ? ordinal <= 0 : ordinal >= this._doc.frame.length - 1;
	    };
	    ;
	    RichTextEdit.prototype.differentLine = function (caret1, caret2) {
	        return (caret1.b <= caret2.t) || (caret2.b <= caret1.t);
	    };
	    ;
	    RichTextEdit.prototype.changeLine = function (ordinal, direction) {
	        var originalCaret = this._doc.getCaretCoords(ordinal), newCaret;
	        this._nextKeyboardX = (this._keyboardX !== null) ? this._keyboardX : originalCaret.l;
	        while (!this.exhausted(ordinal, direction)) {
	            ordinal += direction;
	            newCaret = this._doc.getCaretCoords(ordinal);
	            if (this.differentLine(newCaret, originalCaret)) {
	                break;
	            }
	        }
	        originalCaret = newCaret;
	        while (!this.exhausted(ordinal, direction)) {
	            if ((direction > 0 && newCaret.l >= this._nextKeyboardX) ||
	                (direction < 0 && newCaret.l <= this._nextKeyboardX)) {
	                break;
	            }
	            ordinal += direction;
	            newCaret = this._doc.getCaretCoords(ordinal);
	            if (this.differentLine(newCaret, originalCaret)) {
	                ordinal -= direction;
	                break;
	            }
	        }
	        return ordinal;
	    };
	    ;
	    RichTextEdit.prototype.endOfline = function (ordinal, direction) {
	        var originalCaret = this._doc.getCaretCoords(ordinal), newCaret;
	        while (!this.exhausted(ordinal, direction)) {
	            ordinal += direction;
	            newCaret = this._doc.getCaretCoords(ordinal);
	            if (this.differentLine(newCaret, originalCaret)) {
	                ordinal -= direction;
	                break;
	            }
	        }
	        return ordinal;
	    };
	    ;
	    RichTextEdit.prototype.handleKey = function (key, selecting, ctrlKey) {
	        var doc = this._doc;
	        var start = doc.selection.start, end = doc.selection.end, length = doc.frame.length - 1, handled = false;
	        this._nextKeyboardX = null;
	        if (!selecting) {
	            this._keyboardSelect = 0;
	        }
	        else if (!this._keyboardSelect) {
	            switch (key) {
	                case 37: // left arrow
	                case 38: // up - find character above
	                case 36: // start of line
	                case 33:
	                    this._keyboardSelect = -1;
	                    break;
	                case 39: // right arrow
	                case 40: // down arrow - find character below
	                case 35: // end of line
	                case 34:
	                    this._keyboardSelect = 1;
	                    break;
	            }
	        }
	        var ordinal = this._keyboardSelect === 1 ? end : start;
	        var changingCaret = false;
	        switch (key) {
	            case 37:
	                if (!selecting && start != end) {
	                    ordinal = start;
	                }
	                else {
	                    if (ordinal > 0) {
	                        if (ctrlKey) {
	                            var wordInfo = doc.wordContainingOrdinal(ordinal);
	                            if (wordInfo.ordinal === ordinal) {
	                                ordinal = wordInfo.index > 0 ? doc.wordOrdinal(wordInfo.index - 1) : 0;
	                            }
	                            else {
	                                ordinal = wordInfo.ordinal;
	                            }
	                        }
	                        else {
	                            ordinal--;
	                        }
	                    }
	                }
	                changingCaret = true;
	                break;
	            case 39:
	                if (!selecting && start != end) {
	                    ordinal = end;
	                }
	                else {
	                    if (ordinal < length) {
	                        if (ctrlKey) {
	                            var wordInfo = doc.wordContainingOrdinal(ordinal);
	                            ordinal = wordInfo.ordinal + wordInfo.word.length;
	                        }
	                        else {
	                            ordinal++;
	                        }
	                    }
	                }
	                changingCaret = true;
	                break;
	            case 40:
	                ordinal = this.changeLine(ordinal, 1);
	                changingCaret = true;
	                break;
	            case 38:
	                ordinal = this.changeLine(ordinal, -1);
	                changingCaret = true;
	                break;
	            case 36:
	                ordinal = this.endOfline(ordinal, -1);
	                changingCaret = true;
	                break;
	            case 35:
	                ordinal = this.endOfline(ordinal, 1);
	                changingCaret = true;
	                break;
	            case 33:
	                ordinal = 0;
	                changingCaret = true;
	                break;
	            case 34:
	                ordinal = length;
	                changingCaret = true;
	                break;
	            case 8:
	                if (start === end && start > 0) {
	                    doc.range(start - 1, start).clear();
	                    this._focusChar = start - 1;
	                    doc.select(this._focusChar, this._focusChar);
	                    handled = true;
	                }
	                break;
	            case 46:
	                if (start === end && start < length) {
	                    doc.range(start, start + 1).clear();
	                    handled = true;
	                }
	                break;
	            case 90:
	                if (ctrlKey) {
	                    handled = true;
	                    doc.performUndo();
	                }
	                break;
	            case 89:
	                if (ctrlKey) {
	                    handled = true;
	                    doc.performUndo(true);
	                }
	                break;
	            case 65:
	                if (ctrlKey) {
	                    handled = true;
	                    doc.select(0, length);
	                }
	                break;
	            case 67: // C - copy to clipboard
	            case 88:
	                if (ctrlKey) {
	                    // Allow standard handling to take place as well
	                    this._richClipboard = doc.selectedRange().save();
	                    this._plainClipboard = doc.selectedRange().plainText();
	                }
	                break;
	        }
	        var toggle = toggles[key];
	        if (ctrlKey && toggle) {
	            var selRange = doc.selectedRange();
	            selRange.setFormatting(toggle, selRange.getFormatting()[toggle] !== true);
	            handled = true;
	            this.requestRedraw();
	        }
	        if (changingCaret) {
	            switch (this._keyboardSelect) {
	                case 0:
	                    start = end = ordinal;
	                    break;
	                case -1:
	                    start = ordinal;
	                    break;
	                case 1:
	                    end = ordinal;
	                    break;
	            }
	            if (start === end) {
	                this._keyboardSelect = 0;
	            }
	            else {
	                if (start > end) {
	                    this._keyboardSelect = -this._keyboardSelect;
	                    var t = end;
	                    end = start;
	                    start = t;
	                }
	            }
	            this._focusChar = ordinal;
	            doc.select(start, end);
	            handled = true;
	        }
	        this._keyboardX = this._nextKeyboardX;
	        return handled;
	    };
	    ;
	    RichTextEdit.prototype.findNodeByEvent = function (evt) {
	        var x = evt.x - this.x + this.offsetX;
	        var y = evt.y - this.y + this.offsetY;
	        var node = this._doc.byCoordinate(x, y - this.getVerticalOffset());
	        return node;
	    };
	    RichTextEdit.prototype.dispatchDblClick = function (evt) {
	        var node = this.findNodeByEvent(evt).parent();
	        if (node) {
	            this._doc.select(node.ordinal, node.ordinal +
	                (node.word ? node.word.text.length : node.length));
	        }
	    };
	    RichTextEdit.prototype.updateTextArea = function () {
	        var doc = this._doc;
	        var textArea = this._textArea;
	        var textAreaDiv = this._textAreaDiv;
	        var element = this._element;
	        this._focusChar = this._focusChar === null ? doc.selection.end : this._focusChar;
	        var endChar = doc.byOrdinal(this._focusChar);
	        this._focusChar = null;
	        if (endChar) {
	            var bounds = endChar.bounds();
	            textAreaDiv.style.left = bounds.l + 'px';
	            textAreaDiv.style.top = bounds.t + 'px';
	            textArea.focus();
	            var scrollDownBy = Math.max(0, bounds.t + bounds.h -
	                (element.scrollTop + element.clientHeight));
	            if (scrollDownBy) {
	                element.scrollTop += scrollDownBy;
	            }
	            var scrollUpBy = Math.max(0, element.scrollTop - bounds.t);
	            if (scrollUpBy) {
	                element.scrollTop -= scrollUpBy;
	            }
	            var scrollRightBy = Math.max(0, bounds.l -
	                (element.scrollLeft + element.clientWidth));
	            if (scrollRightBy) {
	                element.scrollLeft += scrollRightBy;
	            }
	            var scrollLeftBy = Math.max(0, element.scrollLeft - bounds.l);
	            if (scrollLeftBy) {
	                element.scrollLeft -= scrollLeftBy;
	            }
	        }
	        this._textAreaContent = doc.selectedRange().plainText();
	        textArea.value = this._textAreaContent;
	        textArea.select();
	        setTimeout(function () {
	            textArea.focus();
	        }, 10);
	        return;
	    };
	    ;
	    RichTextEdit.prototype.dispatchPointerDown = function (evt, ctx) {
	        var doc = this._doc;
	        var node = this.findNodeByEvent(evt);
	        this._selectDragStart = node.ordinal;
	        doc.select(node.ordinal, node.ordinal);
	        this._keyboardX = null;
	        this.requestRedraw();
	    };
	    RichTextEdit.prototype.dispatchPointerUp = function (evt) {
	        var node = this.findNodeByEvent(evt);
	        this._selectDragStart = null;
	        this._keyboardX = null;
	        this.updateTextArea();
	        this.requestRedraw();
	        this._textArea.focus();
	    };
	    RichTextEdit.prototype.dispatchPointerMove = function (evt, ctx) {
	        var doc = this._doc;
	        var node = this.findNodeByEvent(evt);
	        if (this._selectDragStart !== null) {
	            if (node) {
	                this._focusChar = node.ordinal;
	                if (this._selectDragStart > node.ordinal) {
	                    doc.select(node.ordinal, this._selectDragStart);
	                }
	                else {
	                    doc.select(this._selectDragStart, node.ordinal);
	                }
	            }
	        }
	        this.requestRedraw();
	    };
	    RichTextEdit.prototype.onInit = function () {
	        var _this = this;
	        _super.prototype.onInit.call(this);
	        var doc = this._doc;
	        var div = document.createElement("div");
	        div.innerHTML = '<div class="carotaTextArea" style="overflow: hidden; position: absolute; height: 0;">' +
	            '<textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" ' +
	            'style="position: absolute; padding: 0px; width: 1000px; height: 1em; ' +
	            'outline: none; font-size: 4px;"></textarea>';
	        '</div>';
	        document.body.appendChild(div);
	        this._element = div;
	        var textAreaDiv = div.querySelector('.carotaTextArea');
	        var textArea = div.querySelector('textarea');
	        this._textArea = textArea;
	        this._textAreaDiv = textAreaDiv;
	        dom.handleEvent(textArea, 'keydown', function (evt) {
	            _this.handleKey(evt.keyCode, evt.shiftKey, evt.ctrlKey);
	        });
	        dom.handleEvent(textArea, 'input', function (evt) {
	            var newText = textArea.value;
	            if (_this._textAreaContent != newText) {
	                _this._textAreaContent = '';
	                textArea.value = '';
	                if (newText === _this._plainClipboard) {
	                    newText = _this._richClipboard;
	                }
	                doc.insert(newText);
	            }
	            _this.requestRedraw();
	        });
	        var timer = setInterval(function (evt) {
	            if (_this.parent) {
	                _this.updateCaret();
	            }
	            else {
	                clearInterval(timer);
	            }
	        }, 200);
	        doc.selectionChanged(function (getformatting, takeFocus) {
	            _this.requestRedraw();
	            if (!_this._selectDragStart) {
	                if (takeFocus !== false) {
	                    _this.updateTextArea();
	                }
	            }
	        });
	    };
	    RichTextEdit.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        document.body.removeChild(this._textAreaDiv);
	        this._textArea = null;
	        this._textAreaDiv = null;
	    };
	    RichTextEdit.prototype.updateCaret = function () {
	        var doc = this._doc;
	        var requirePaint = false;
	        var textArea = this._textArea;
	        var newFocused = document.activeElement === textArea;
	        if (this.focused !== newFocused) {
	            this.focused = newFocused;
	            requirePaint = true;
	        }
	        var now = Date.now();
	        if (now > this.nextCaretToggle) {
	            this.nextCaretToggle = now + 500;
	            if (doc.toggleCaret()) {
	                requirePaint = true;
	            }
	        }
	        if (this.w !== this.cachedWidth ||
	            this.h !== this.cachedHeight) {
	            requirePaint = true;
	            this.cachedWidth = this.w;
	            this.cachedHeight = this.h;
	        }
	        if (requirePaint) {
	            this.requestRedraw();
	        }
	    };
	    ;
	    RichTextEdit.prototype.hasFocus = function () {
	        return this._selectDragStart || (document.activeElement === this._textArea);
	    };
	    RichTextEdit.create = function (options) {
	        return RichTextEdit.rBin.create().reset(RichTextEdit.TYPE, options);
	    };
	    RichTextEdit.TYPE = "rich-text-edit";
	    RichTextEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new RichTextEdit(); });
	    return RichTextEdit;
	}(rich_text_1.RichText));
	exports.RichTextEdit = RichTextEdit;
	;
	widget_factory_1.WidgetFactory.register(RichTextEdit.TYPE, RichTextEdit.create);


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var edit_1 = __webpack_require__(17);
	var button_1 = __webpack_require__(93);
	var widget_1 = __webpack_require__(19);
	var dialog_1 = __webpack_require__(91);
	var graphics_1 = __webpack_require__(25);
	var Events = __webpack_require__(6);
	var list_view_1 = __webpack_require__(111);
	var list_item_1 = __webpack_require__(113);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var image_tile_1 = __webpack_require__(7);
	var simple_layouter_1 = __webpack_require__(114);
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
	    Object.defineProperty(ComboBoxBase.prototype, "inputable", {
	        get: function () {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComboBoxBase.prototype, "itemH", {
	        get: function () {
	            return this._ih;
	        },
	        set: function (value) {
	            this._ih = value;
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
	        var itemH = this.itemH;
	        var options = this._options;
	        var dialog = dialog_1.Dialog.create();
	        var n = this._options.length || 1;
	        var h = n * itemH + padding + padding;
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
	        listView.itemH = itemH;
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
	    ComboBoxBase.prototype.onBindProp = function (prop, value) {
	        var _this = this;
	        if (prop === "options") {
	            this.resetOptions();
	            value.forEach(function (opt) {
	                _this.addOption(opt.text, opt.value, opt.imageURL, opt.color);
	            });
	        }
	        else {
	            return _super.prototype.onBindProp.call(this, prop, value);
	        }
	    };
	    ComboBoxBase.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._options = [];
	        this._current = null;
	    };
	    ComboBoxBase.prototype.onToJson = function (json) {
	        if (this._options) {
	            json.options = JSON.parse(JSON.stringify(this._options));
	        }
	    };
	    ComboBoxBase.prototype.onFromJson = function (json) {
	        if (json.options) {
	            this._options = JSON.parse(JSON.stringify(json.options));
	        }
	    };
	    ComboBoxBase.prototype.getDefProps = function () {
	        return ComboBoxBase.defProps;
	    };
	    ComboBoxBase.defProps = Object.assign({}, widget_1.Widget.defProps, { _ih: 25, _lp: 2, _rp: 2 });
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
	        this._edit = edit_1.Edit.create({ multiLineMode: false });
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


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var scroll_view_1 = __webpack_require__(99);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var list_layouter_1 = __webpack_require__(112);
	var ListView = (function (_super) {
	    __extends(ListView, _super);
	    function ListView() {
	        _super.call(this, ListView.TYPE);
	    }
	    Object.defineProperty(ListView.prototype, "itemSpacing", {
	        get: function () {
	            return this._is;
	        },
	        set: function (value) {
	            this._is = value;
	            var layouter = this._childrenLayouter;
	            layouter.spacing = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ListView.prototype, "itemH", {
	        get: function () {
	            return this._ih;
	        },
	        set: function (value) {
	            this._ih = value;
	            var layouter = this._childrenLayouter;
	            layouter.h = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ListView.prototype, "childrenLayouter", {
	        get: function () {
	            return this._childrenLayouter;
	        },
	        set: function (layouter) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ListView.prototype.doDrawChildren = function (ctx) {
	        var top = this.offsetY;
	        var bottom = top + this.h;
	        this._children.forEach(function (child) {
	            var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
	            if (visible) {
	                child.draw(ctx);
	            }
	        });
	        return this;
	    };
	    Object.defineProperty(ListView.prototype, "desireHeight", {
	        get: function () {
	            var itemH = this.itemH;
	            var h = this.topPadding + this.bottomPadding;
	            this.children.forEach(function (child) {
	                var param = child.layoutParam;
	                if (param) {
	                    h += param.h || itemH;
	                }
	                else {
	                    h += child.h || itemH;
	                }
	            });
	            return h;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ListView.prototype.relayoutChildren = function () {
	        var r = _super.prototype.relayoutChildren.call(this);
	        this.contentWidth = r.w + this.leftPadding + this.rightPadding;
	        this.contentH = r.h + this.topPadding + this.bottomPadding + 10;
	        return r;
	    };
	    ListView.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this.scrollerOptions.scrollingX = false;
	        this._childrenLayouter = list_layouter_1.ListLayouter.create({ height: this.itemH, spacing: 0 });
	    };
	    ListView.prototype.getDefProps = function () {
	        return ListView.defProps;
	    };
	    ListView.create = function (options) {
	        return ListView.recycleBinListView.create().reset(ListView.TYPE, options);
	    };
	    ListView.defProps = Object.assign({}, widget_1.Widget.defProps, { _ih: 30, _is: 0 });
	    ListView.TYPE = "list-view";
	    ListView.recycleBinListView = new recyclable_creator_1.RecyclableCreator(function () { return new ListView(); });
	    return ListView;
	}(scroll_view_1.ScrollView));
	exports.ListView = ListView;
	;
	widget_factory_1.WidgetFactory.register(ListView.TYPE, ListView.create);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var layouter_1 = __webpack_require__(78);
	var TYPE = "list";
	/**
	 * 列表布局器。
	 */
	var ListLayouter = (function (_super) {
	    __extends(ListLayouter, _super);
	    function ListLayouter() {
	        _super.call(this);
	        this.rect = rect_1.Rect.create(0, 0, 0, 0);
	    }
	    Object.defineProperty(ListLayouter.prototype, "type", {
	        get: function () {
	            return TYPE;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 设置参数。
	     */
	    ListLayouter.prototype.setOptions = function (options) {
	        this.h = options.h || 80;
	        this.spacing = options.spacing || 0;
	        return this;
	    };
	    ListLayouter.prototype.layoutChildren = function (widget, children, rect) {
	        var x = rect.x;
	        var y = rect.y;
	        var w = rect.w;
	        var h = this.h;
	        var spacing = this.spacing;
	        var arr = widget.children;
	        for (var i = 0, n = arr.length; i < n; i++) {
	            var child = arr[i];
	            var param = child.layoutParam;
	            if (!child.visible) {
	                continue;
	            }
	            if (param && param.type === TYPE) {
	                h = param.h || this.h;
	                spacing = param.spacing || this.spacing;
	            }
	            else {
	                h = this.h;
	                spacing = i ? this.spacing : 0;
	            }
	            y += spacing;
	            child.moveResizeTo(x, y, w, h);
	            child.relayoutChildren();
	            y += h;
	        }
	        this.rect.init(rect.x, rect.y, w, y);
	        return this.rect;
	    };
	    ListLayouter.prototype.createParam = function (options) {
	        return ListLayouterParam.create(options);
	    };
	    ListLayouter.create = function (options) {
	        var layouter = new ListLayouter();
	        return layouter.setOptions(options);
	    };
	    return ListLayouter;
	}(layouter_1.Layouter));
	exports.ListLayouter = ListLayouter;
	;
	layouter_1.LayouterFactory.register(TYPE, ListLayouter.create);
	/**
	 * 列表布局器的参数。
	 *
	 * 如果父控件使用ListLayouter布局器，则子控件需要把layoutParam设置为ListLayouterParam。
	 *
	 */
	var ListLayouterParam = (function (_super) {
	    __extends(ListLayouterParam, _super);
	    function ListLayouterParam(h, spacing) {
	        _super.call(this, TYPE);
	        this.h = h || 0;
	        this.spacing = spacing || 0;
	    }
	    ListLayouterParam.create = function (opt) {
	        var options = opt || {};
	        return new ListLayouterParam(options.h || options.height, options.spacing);
	    };
	    return ListLayouterParam;
	}(layouter_1.LayouterParam));
	exports.ListLayouterParam = ListLayouterParam;
	;
	layouter_1.LayouterParamFactory.register(TYPE, ListLayouterParam.create);


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var graphics_1 = __webpack_require__(25);
	var recyclable_creator_1 = __webpack_require__(82);
	var image_tile_1 = __webpack_require__(7);
	(function (ListItemStyle) {
	    ListItemStyle[ListItemStyle["NORMAL"] = 0] = "NORMAL";
	    ListItemStyle[ListItemStyle["FIRST"] = 1] = "FIRST";
	    ListItemStyle[ListItemStyle["LAST"] = 2] = "LAST";
	})(exports.ListItemStyle || (exports.ListItemStyle = {}));
	var ListItemStyle = exports.ListItemStyle;
	;
	var ListItem = (function (_super) {
	    __extends(ListItem, _super);
	    function ListItem(type) {
	        _super.call(this, type || ListItem.TYPE);
	    }
	    Object.defineProperty(ListItem.prototype, "iconURL", {
	        get: function () {
	            return this._iconURL;
	        },
	        set: function (value) {
	            var _this = this;
	            if (value) {
	                this._icon = image_tile_1.ImageTile.create(value, function (evt) {
	                    _this.requestRedraw();
	                });
	            }
	            else {
	                this._icon = null;
	            }
	            this._iconURL = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ListItem.prototype.drawBackground = function (ctx, style) {
	        if (style.backGroundImage) {
	            style.backGroundImage.draw(ctx, style.backGroundImageDrawType, 0, 0, this.w, this.h);
	        }
	        else if (style.backGroundColor || (style.lineColor && style.lineWidth)) {
	            graphics_1.Graphics.drawRect(ctx, style.backGroundColor, null, 0, 0, 0, this.w, this.h);
	            if (this.listItemStyle === ListItemStyle.FIRST) {
	                graphics_1.Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, 0, this.w, 0);
	            }
	            graphics_1.Graphics.drawLine(ctx, style.lineColor, style.lineWidth, 0, this.h, this.w, this.h);
	        }
	        return this;
	    };
	    ListItem.prototype.drawImage = function (ctx, style) {
	        var icon = this._icon;
	        var y = this.topPadding;
	        var x = this.leftPadding;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        var w = h;
	        if (icon) {
	            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	        }
	        return this;
	    };
	    ListItem.prototype.getTextRect = function (style) {
	        var x = this.leftPadding;
	        if (this._icon) {
	            x += this.h;
	        }
	        var y = this.topPadding;
	        var w = this.w - x - this.rightPadding;
	        var h = this.h - y - this.bottomPadding;
	        if (style.foreGroundImage) {
	            w -= this.h;
	        }
	        return rect_1.Rect.rect.init(x, y, w, h);
	    };
	    ListItem.prototype.getDefProps = function () {
	        return ListItem.defProps;
	    };
	    ListItem.create = function (options) {
	        return ListItem.recycleBin.create().reset(ListItem.TYPE, options);
	    };
	    ListItem.defProps = Object.assign({}, widget_1.Widget.defProps, { _iconURL: null });
	    ListItem.TYPE = "list-item";
	    ListItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ListItem(); });
	    return ListItem;
	}(widget_1.Widget));
	exports.ListItem = ListItem;
	;
	widget_factory_1.WidgetFactory.register(ListItem.TYPE, ListItem.create);
	var ListItemCheckable = (function (_super) {
	    __extends(ListItemCheckable, _super);
	    function ListItemCheckable(type) {
	        _super.call(this, type || ListItemCheckable.TYPE);
	    }
	    Object.defineProperty(ListItemCheckable.prototype, "multiCheckable", {
	        get: function () {
	            return this._multiCheckable;
	        },
	        set: function (value) {
	            this._multiCheckable = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ListItemCheckable.prototype.drawImage = function (ctx, style) {
	        if (this.value) {
	            var icon = style.foreGroundImage;
	            if (icon) {
	                var h = this.h - this.topPadding - this.bottomPadding;
	                var w = h;
	                var y = this.topPadding;
	                var x = this.w - this.rightPadding - w;
	                icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	            }
	        }
	        return _super.prototype.drawImage.call(this, ctx, style);
	    };
	    ListItemCheckable.prototype.dispatchClick = function (evt) {
	        this.value = !this.value;
	        _super.prototype.dispatchClick.call(this, evt);
	    };
	    Object.defineProperty(ListItemCheckable.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (value) {
	            this.setValue(value, true, !this.multiCheckable);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ListItemCheckable.create = function (options) {
	        return ListItemCheckable.rBin.create().reset(ListItemCheckable.TYPE, options);
	    };
	    ListItemCheckable.TYPE = "list-item.checkable";
	    ListItemCheckable.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new ListItemCheckable(); });
	    return ListItemCheckable;
	}(ListItem));
	exports.ListItemCheckable = ListItemCheckable;
	;
	widget_factory_1.WidgetFactory.register(ListItemCheckable.TYPE, ListItemCheckable.create);


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var layouter_1 = __webpack_require__(78);
	var TYPE = "simple";
	/**
	 * 简单的布局器。
	 */
	var SimpleLayouter = (function (_super) {
	    __extends(SimpleLayouter, _super);
	    function SimpleLayouter() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(SimpleLayouter.prototype, "type", {
	        get: function () {
	            return TYPE;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SimpleLayouter.prototype.layoutChildren = function (widget, children, rect) {
	        var arr = widget.children;
	        for (var i = 0, n = arr.length; i < n; i++) {
	            this.layoutChild(arr[i], rect);
	        }
	        return rect;
	    };
	    SimpleLayouter.prototype.layoutChild = function (child, r) {
	        var pw = r.w;
	        var ph = r.h;
	        var param = child.layoutParam;
	        if (param && param.type === TYPE && child.visible) {
	            var w = layouter_1.Layouter.evalValue(param.w, pw);
	            var h = layouter_1.Layouter.evalValue(param.h, ph);
	            if (param.minW >= 0) {
	                w = Math.max(w, param.minW);
	            }
	            if (param.minH >= 0) {
	                h = Math.max(h, param.minH);
	            }
	            if (param.maxW >= 0) {
	                w = Math.min(w, param.maxW);
	            }
	            if (param.maxH >= 0) {
	                h = Math.min(h, param.maxH);
	            }
	            var f = param.x[0];
	            var x = (f === "c" || f === "m") ? (pw - w) >> 1 : layouter_1.Layouter.evalValue(param.x, pw);
	            f = param.y[0];
	            var y = (f === "c" || f === "m") ? (ph - h) >> 1 : layouter_1.Layouter.evalValue(param.y, ph);
	            child.moveResizeTo(r.x + x, r.y + y, w, h);
	            child.relayoutChildren();
	        }
	    };
	    SimpleLayouter.prototype.createParam = function (options) {
	        return SimpleLayouterParam.create(options);
	    };
	    SimpleLayouter.create = function (options) {
	        var layouter = new SimpleLayouter();
	        return layouter.setOptions(options);
	    };
	    return SimpleLayouter;
	}(layouter_1.Layouter));
	exports.SimpleLayouter = SimpleLayouter;
	;
	layouter_1.LayouterFactory.register(TYPE, SimpleLayouter.create);
	/**
	 * 简单的布局器的参数。
	 *
	 * 如果父控件使用SimpleLayouter布局器，则子控件需要把layoutParam设置为SimpleLayouterParam。
	 *
	 * 对于x/y/w/h参数：
	 * *.如果以px结尾，则直接取它的值。
	 * *.如果以%结尾，则表示父控件的宽度/高度的百分比。
	 * *.如果以-开头，则表示父控件的宽度/高度的减去该值。
	 *
	 * x也可以为『center』，表示水平居中。
	 * y也可以为『middle』，表示垂直居中。
	 *
	 * 示例：
	 *
	 * 父控件的宽度为800，高度为600:
	 *
	 * param.x = "10px"  则 x = 10;
	 * param.x = "10%"   则 x = 80;
	 * param.x = "-10%"  则 x = 720;
	 * param.x = "-10px" 则 x = 790;
	 *
	 */
	var SimpleLayouterParam = (function (_super) {
	    __extends(SimpleLayouterParam, _super);
	    function SimpleLayouterParam(x, y, w, h) {
	        _super.call(this, TYPE);
	        this.x = x;
	        this.y = y;
	        this.w = w;
	        this.h = h;
	        this.minW = -1;
	        this.minH = -1;
	        this.maxW = -1;
	        this.maxH = -1;
	    }
	    SimpleLayouterParam.create = function (opts) {
	        var options = opts || {};
	        return new SimpleLayouterParam(options.x || '0px', options.y || 'center', options.w || '100%', options.h || '100%');
	    };
	    return SimpleLayouterParam;
	}(layouter_1.LayouterParam));
	exports.SimpleLayouterParam = SimpleLayouterParam;
	;
	layouter_1.LayouterParamFactory.register(TYPE, SimpleLayouterParam.create);


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var grid_layouter_1 = __webpack_require__(116);
	var scroll_view_1 = __webpack_require__(99);
	/**
	 * 网格视图。
	 */
	var GridView = (function (_super) {
	    __extends(GridView, _super);
	    function GridView() {
	        _super.call(this, GridView.TYPE);
	    }
	    Object.defineProperty(GridView.prototype, "cols", {
	        get: function () {
	            return this._cols;
	        },
	        /**
	         * 列数。列数和列宽设置其中之一即可。
	         */
	        set: function (value) {
	            this._cols = value;
	            var layouter = this._childrenLayouter;
	            layouter.cols = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GridView.prototype, "colWidth", {
	        get: function () {
	            return this._colWidth;
	        },
	        /**
	         * 列宽。列数和列宽设置其中之一即可。
	         */
	        set: function (value) {
	            this._colWidth = value;
	            var layouter = this._childrenLayouter;
	            layouter.colWidth = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GridView.prototype, "rows", {
	        get: function () {
	            return this._rows;
	        },
	        /**
	         * 行数。行数和行高设置其中之一即可。
	         */
	        set: function (value) {
	            this._rows = value;
	            var layouter = this._childrenLayouter;
	            layouter.rows = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GridView.prototype, "rowHeight", {
	        get: function () {
	            return this._rowHeight;
	        },
	        /**
	         * 行高。行数和行高设置其中之一即可。
	         */
	        set: function (value) {
	            this._rowHeight = value;
	            var layouter = this._childrenLayouter;
	            layouter.rowHeight = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 每一网格周围的空白。
	     */
	    GridView.prototype.setItemMargins = function (margins) {
	        var layouter = this._childrenLayouter;
	        layouter.leftMargin = margins.left || margins.all || 0;
	        layouter.rightMargin = margins.right || margins.all || 0;
	        layouter.topMargin = margins.top || margins.all || 0;
	        layouter.bottomMargin = margins.bottom || margins.all || 0;
	        return this;
	    };
	    Object.defineProperty(GridView.prototype, "childrenLayouter", {
	        get: function () {
	            return this._childrenLayouter;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GridView.prototype.doDrawChildren = function (ctx) {
	        var top = this.offsetY;
	        var bottom = top + this.h;
	        this._children.forEach(function (child) {
	            var visible = child.visible && child.y < bottom && (child.y + child.h) > top;
	            if (visible) {
	                child.draw(ctx);
	            }
	        });
	        return this;
	    };
	    GridView.prototype.relayoutChildren = function () {
	        this.ensureOptions();
	        var r = _super.prototype.relayoutChildren.call(this);
	        this.contentWidth = r.w + this.leftPadding + this.rightPadding;
	        this.contentH = r.h + this.topPadding + this.bottomPadding;
	        return r;
	    };
	    GridView.prototype.ensureOptions = function () {
	        if (this.rows > 0 && this.cols > 0) {
	            this.scrollerOptions.scrollingX = false;
	            this.scrollerOptions.scrollingY = false;
	            this.scrollBarStyle.vBarVisibility = scroll_view_1.ScrollerBarVisibility.INVISIBLE;
	            this.scrollBarStyle.hBarVisibility = scroll_view_1.ScrollerBarVisibility.INVISIBLE;
	        }
	        else if (this.cols > 0) {
	            this.scrollerOptions.scrollingX = false;
	            this.scrollerOptions.scrollingY = true;
	            this.scrollBarStyle.vBarVisibility = scroll_view_1.ScrollerBarVisibility.AUTO;
	            this.scrollBarStyle.hBarVisibility = scroll_view_1.ScrollerBarVisibility.INVISIBLE;
	        }
	        else if (this.rows > 0) {
	            this.scrollerOptions.scrollingX = true;
	            this.scrollerOptions.scrollingY = false;
	            this.scrollBarStyle.hBarVisibility = scroll_view_1.ScrollerBarVisibility.AUTO;
	            this.scrollBarStyle.vBarVisibility = scroll_view_1.ScrollerBarVisibility.INVISIBLE;
	        }
	        else {
	            this.scrollerOptions.scrollingX = false;
	            this.scrollerOptions.scrollingY = true;
	            this.scrollBarStyle.vBarVisibility = scroll_view_1.ScrollerBarVisibility.AUTO;
	            this.scrollBarStyle.hBarVisibility = scroll_view_1.ScrollerBarVisibility.INVISIBLE;
	        }
	    };
	    GridView.prototype.onToJson = function (json) {
	        delete json.childrenLayouter;
	    };
	    GridView.prototype.onInit = function () {
	        _super.prototype.onInit.call(this);
	        this.relayoutChildren();
	    };
	    GridView.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._childrenLayouter = grid_layouter_1.GridLayouter.create({ cols: this.cols, rows: this.rows });
	    };
	    GridView.prototype.getDefProps = function () {
	        return GridView.defProps;
	    };
	    GridView.create = function (options) {
	        return GridView.recycleBinGridView.create().reset(GridView.TYPE, options);
	    };
	    GridView.defProps = Object.assign({}, scroll_view_1.ScrollView.defProps, { _cols: 3, _rows: 3, _rowHeight: 0, _colWidth: 0 });
	    GridView.TYPE = "grid-view";
	    GridView.recycleBinGridView = new recyclable_creator_1.RecyclableCreator(function () { return new GridView(); });
	    return GridView;
	}(scroll_view_1.ScrollView));
	exports.GridView = GridView;
	;
	widget_factory_1.WidgetFactory.register(GridView.TYPE, GridView.create);


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var layouter_1 = __webpack_require__(78);
	var TYPE = "grid";
	/**
	 * 网格布局器。
	 */
	var GridLayouter = (function (_super) {
	    __extends(GridLayouter, _super);
	    function GridLayouter() {
	        _super.call(this);
	        this.rect = rect_1.Rect.create(0, 0, 0, 0);
	    }
	    Object.defineProperty(GridLayouter.prototype, "type", {
	        get: function () {
	            return TYPE;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 设置参数。
	     */
	    GridLayouter.prototype.setOptions = function (options) {
	        this.cols = options.cols || 0;
	        this.rows = options.rows || 0;
	        this.colWidth = options.colWidth || 0;
	        this.rowHeight = options.rowHeight || 0;
	        this.leftMargin = options.leftMargin || options.margin || 0;
	        this.rightMargin = options.rightMargin || options.margin || 0;
	        this.topMargin = options.topMargin || options.margin || 0;
	        this.bottomMargin = options.bottomMargin || options.margin || 0;
	        if (!this.cols && !this.colWidth) {
	            this.cols = 3;
	        }
	        if (!this.rows && !this.rowHeight) {
	            this.rows = 3;
	        }
	        return this;
	    };
	    GridLayouter.prototype.layoutChildren = function (widget, children, r) {
	        var leftMargin = this.leftMargin;
	        var rightMargin = this.rightMargin;
	        var topMargin = this.topMargin;
	        var bottomMargin = this.bottomMargin;
	        var defParam = new GridLayouterParam(-1, 1, -1, 1);
	        var row = 0;
	        var col = 0;
	        var spanCols = 0;
	        var spanRows = 0;
	        var arr = widget.children;
	        var n = widget.children.length;
	        var cols = this.cols;
	        var rows = this.rows;
	        if (!cols && !rows) {
	            cols = Math.floor(r.w / this.colWidth);
	        }
	        var iw = cols > 0 ? r.w / cols : this.colWidth;
	        var ih = rows > 0 ? r.h / rows : this.rowHeight;
	        var ret = this.rect.copy(r);
	        for (var i = 0; i < n; i++) {
	            var child = arr[i];
	            var param = child.layoutParam || defParam;
	            if (!child.visible) {
	                continue;
	            }
	            if (cols > 0) {
	                col = i % cols;
	                row = Math.floor(i / cols);
	            }
	            else if (rows > 0) {
	                row = i % rows;
	                col = Math.floor(i / rows);
	            }
	            if (param.col >= 0) {
	                col = param.col;
	            }
	            if (param.row >= 0) {
	                row = param.row;
	            }
	            spanRows = Math.max(param.spanRows, 1);
	            spanCols = Math.max(param.spanCols, 1);
	            var x = col * iw + leftMargin + r.x;
	            var y = row * ih + topMargin + r.y;
	            var w = iw * spanCols - leftMargin - rightMargin;
	            var h = ih * spanRows - topMargin - bottomMargin;
	            child.moveResizeTo(x, y, w, h);
	            child.relayoutChildren();
	            ret.w = Math.max(x + w - r.x, r.w);
	            ret.h = Math.max(y + h - r.y, r.h);
	        }
	        return ret;
	    };
	    GridLayouter.prototype.createParam = function (options) {
	        return GridLayouterParam.create(options);
	    };
	    GridLayouter.create = function (options) {
	        var layouter = new GridLayouter();
	        return layouter.setOptions(options);
	    };
	    return GridLayouter;
	}(layouter_1.Layouter));
	exports.GridLayouter = GridLayouter;
	;
	layouter_1.LayouterFactory.register(TYPE, GridLayouter.create);
	/**
	 * 网格布局器的参数。
	 *
	 * 如果父控件使用GridLayouter布局器，则子控件需要把layoutParam设置为GridLayouterParam。
	 *
	 */
	var GridLayouterParam = (function (_super) {
	    __extends(GridLayouterParam, _super);
	    function GridLayouterParam(row, spanRows, col, spanCols) {
	        _super.call(this, TYPE);
	        this.row = row >= 0 ? row : -1;
	        this.col = col >= 0 ? col : -1;
	        this.spanRows = spanRows || 1;
	        this.spanCols = spanCols || 1;
	    }
	    GridLayouterParam.create = function (opts) {
	        var options = opts || {};
	        return new GridLayouterParam(options.row, options.spanRows, options.col, options.spanCols);
	    };
	    return GridLayouterParam;
	}(layouter_1.LayouterParam));
	exports.GridLayouterParam = GridLayouterParam;
	;
	layouter_1.LayouterParamFactory.register(TYPE, GridLayouterParam.create);


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var widget_factory_1 = __webpack_require__(23);
	var graphics_1 = __webpack_require__(25);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	var widget_1 = __webpack_require__(19);
	/**
	 * 树形视图中，显示的一个子项。
	 */
	var TreeItem = (function (_super) {
	    __extends(TreeItem, _super);
	    function TreeItem() {
	        _super.call(this, TreeItem.TYPE);
	    }
	    Object.defineProperty(TreeItem.prototype, "text", {
	        /**
	         * 显示的文本，从data中获取。
	         */
	        get: function () {
	            return this._data.text;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "icon", {
	        /**
	         * 显示的图标，从data中获取。
	         */
	        get: function () {
	            return this._data.icon;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "userData", {
	        /**
	         * 显示的图标，从data中获取。
	         */
	        get: function () {
	            return this._data.userData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "desireWidth", {
	        get: function () {
	            var text = this.data.text;
	            var style = this.getStyle();
	            var w = this._level * this._indention + this.h;
	            if (text) {
	                w += graphics_1.Graphics.measureText(text, style.font);
	            }
	            return w;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "visible", {
	        /**
	         * 可见性判断：要求父控件没有折叠。
	         */
	        get: function () {
	            var item = this.parentItem;
	            while (item !== null) {
	                if (!item.expanded) {
	                    return false;
	                }
	                item = item.parentItem;
	            }
	            return this._visible;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "parentItem", {
	        get: function () {
	            return this._parentItem;
	        },
	        set: function (parentItem) {
	            this._parentItem = parentItem;
	            if (parentItem) {
	                parentItem._childrenItems.push(this);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "childrenItems", {
	        get: function () {
	            return this._childrenItems;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "level", {
	        get: function () {
	            return this._level;
	        },
	        set: function (value) {
	            this._level = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "selected", {
	        get: function () {
	            return this.data.selected;
	        },
	        set: function (value) {
	            this.data.selected = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "isLeaf", {
	        get: function () {
	            var data = this._data;
	            return !data.children || !data.children.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        set: function (value) {
	            this._data = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "indention", {
	        get: function () {
	            return this._indention;
	        },
	        set: function (value) {
	            this._indention = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeItem.prototype, "expanded", {
	        get: function () {
	            return this.data.expanded;
	        },
	        set: function (value) {
	            this.data.expanded = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TreeItem.prototype.getStateForStyle = function () {
	        return this.selected ? widget_1.WidgetState.SELECTED : this._state;
	    };
	    TreeItem.prototype.getStyleType = function () {
	        if (this._styleType) {
	            return this._styleType;
	        }
	        var appendix = this.isLeaf ? "leaf" : (this.expanded ? "expanded" : "collapsed");
	        return (this.type) + "." + appendix;
	    };
	    TreeItem.prototype.drawImage = function (ctx, style) {
	        var img = style.foreGroundImage;
	        if (img) {
	            var y = 0;
	            var w = this.h;
	            var h = this.h;
	            var x = this._level * this._indention;
	            img.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	        }
	        return this;
	    };
	    TreeItem.prototype.drawText = function (ctx, style) {
	        var text = this.data.text;
	        if (text && style.textColor) {
	            var y = 0;
	            var h = this.h;
	            var x = this._level * this._indention;
	            if (style.foreGroundImage) {
	                x += h;
	            }
	            var w = this.x + this.w - x;
	            graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
	        }
	        return this;
	    };
	    TreeItem.prototype.dispatchDblClick = function (evt) {
	        _super.prototype.dispatchDblClick.call(this, evt);
	        if (!this.isLeaf) {
	            this.expanded = !this.expanded;
	            this.parent.relayoutChildren();
	        }
	    };
	    TreeItem.prototype.dispatchClick = function (evt) {
	        if (!this.isLeaf) {
	            var p = this.toLocalPoint(point_1.Point.point.copy(evt));
	            var y = 0;
	            var w = this.h;
	            var h = this.h;
	            var x = this._level * this._indention;
	            if (p.isIn(x, y, w, h)) {
	                this.expanded = !this.expanded;
	                this.parent.relayoutChildren();
	            }
	        }
	        var parent = this.parent;
	        if (evt.ctrlKey && parent.multiSelectable) {
	            parent.setItemSelected(this, !this.selected, false);
	        }
	        else {
	            parent.setItemSelected(this, true, true);
	        }
	        _super.prototype.dispatchClick.call(this, evt);
	    };
	    TreeItem.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._data = null;
	        this.parentItem = null;
	        this._childrenItems = null;
	    };
	    TreeItem.prototype.onReset = function () {
	        this._level = 0;
	        this._data = null;
	        this._indention = 30;
	        this._parentItem = null;
	        this._childrenItems = [];
	    };
	    TreeItem.create = function (options) {
	        return TreeItem.recycleBin.create().reset(TreeItem.TYPE, options);
	    };
	    TreeItem.TYPE = "tree-item";
	    TreeItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TreeItem(); });
	    return TreeItem;
	}(widget_1.Widget));
	exports.TreeItem = TreeItem;
	;
	widget_factory_1.WidgetFactory.register(TreeItem.TYPE, TreeItem.create);


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tree_item_1 = __webpack_require__(117);
	var list_view_1 = __webpack_require__(111);
	var tree_item_data_1 = __webpack_require__(119);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 树形视图。
	 */
	var TreeView = (function (_super) {
	    __extends(TreeView, _super);
	    function TreeView() {
	        _super.call(this);
	        this.type = TreeView.TYPE;
	    }
	    Object.defineProperty(TreeView.prototype, "multiSelectable", {
	        get: function () {
	            return this._multiSelectable;
	        },
	        set: function (value) {
	            this._multiSelectable = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TreeView.prototype, "indention", {
	        /**
	         * 每一层缩减的距离。
	         */
	        get: function () {
	            return this._indention || 30;
	        },
	        set: function (value) {
	            this._indention = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 选中一个子项。
	     */
	    TreeView.prototype.setItemSelected = function (item, selected, exclude) {
	        if (!this.multiSelectable || exclude) {
	            this.children.forEach(function (child) {
	                if (child === item) {
	                    child.selected = selected;
	                }
	                else {
	                    if (child.selected) {
	                        child.selected = false;
	                    }
	                }
	            });
	        }
	        else {
	            item.selected = selected;
	        }
	        this.requestRedraw();
	        return this;
	    };
	    TreeView.prototype.addItem = function (parentData, text, data, image) {
	        parentData = parentData ? parentData : this._rootData;
	        var itemData = parentData.addChild(text, image, data);
	        this.reload();
	        return itemData;
	    };
	    TreeView.prototype.removeAllItems = function () {
	        this._rootData.children.length = 0;
	        this.reload();
	    };
	    TreeView.prototype.removeItem = function (item, destroy) {
	        var ret = item.parent.removeChild(item, destroy);
	        this.reload();
	        return ret;
	    };
	    TreeView.prototype.doLoad = function (data, parentItem, level) {
	        var _this = this;
	        var item = tree_item_1.TreeItem.create();
	        var isLeaf = !data.children || !data.children.length;
	        data.treeItem = item;
	        item.set({ level: level, indention: this.indention, data: data, parentItem: parentItem });
	        this.addChild(item, true);
	        if (!isLeaf) {
	            data.children.forEach(function (iter) {
	                _this.doLoad(iter, item, level + 1);
	            });
	        }
	    };
	    TreeView.prototype.reload = function () {
	        var _this = this;
	        this.resetChilren();
	        this._rootData.children.forEach(function (data) {
	            _this.doLoad(data, null, 0);
	        });
	        this.relayoutChildren();
	    };
	    TreeView.prototype.loadData = function (data) {
	        if (data.text === "%root%") {
	            this._rootData = data;
	        }
	        else {
	            this._rootData.children.length = 0;
	            this._rootData.children.push(data);
	        }
	        this.reload();
	        return this;
	    };
	    TreeView.prototype.getLayoutWidth = function () {
	        var w = 0;
	        this.children.forEach(function (child) {
	            var desireWidth = child.desireWidth;
	            if (desireWidth > w) {
	                w = desireWidth;
	            }
	        });
	        return Math.max(this.w, w + this.itemH * 2);
	    };
	    TreeView.prototype.resetChilren = function () {
	        this.children.forEach(function (child) {
	            child.deinit();
	            child.dispose();
	        });
	        this.children.length = 0;
	        return this;
	    };
	    TreeView.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._rootData = tree_item_data_1.TreeItemData.create("root", null, null);
	        this.scrollerOptions.scrollingX = true;
	    };
	    TreeView.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._rootData = null;
	    };
	    TreeView.create = function (options) {
	        return TreeView.recycleBinTreeView.create().reset(TreeView.TYPE, options);
	    };
	    TreeView.TYPE = "tree-view";
	    TreeView.recycleBinTreeView = new recyclable_creator_1.RecyclableCreator(function () { return new TreeView(); });
	    return TreeView;
	}(list_view_1.ListView));
	exports.TreeView = TreeView;
	;
	widget_factory_1.WidgetFactory.register(TreeView.TYPE, TreeView.create);


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var utils_1 = __webpack_require__(21);
	var emitter_1 = __webpack_require__(4);
	var image_tile_1 = __webpack_require__(7);
	/**
	 * TreeItem对应的数据信息。
	 */
	var TreeItemData = (function (_super) {
	    __extends(TreeItemData, _super);
	    function TreeItemData(text, iconURL, userData) {
	        _super.call(this);
	        this.userData = userData;
	        this.text = text;
	        if (iconURL) {
	            this.icon = image_tile_1.ImageTile.create(iconURL, function (evt) {
	            });
	        }
	        else {
	            this.icon = null;
	        }
	        this.children = [];
	        return;
	    }
	    /**
	     * 从子节点数组中删除指定的子节点。
	     * @param data 子节点。
	     * @param destroy 是否销毁该子节点。
	     * @returns 成功返回true失败返回false。
	     */
	    TreeItemData.prototype.removeChild = function (data, destroy) {
	        if (utils_1.aRemove(this.children, data)) {
	            data.parent = null;
	            if (destroy) {
	                data.dispose();
	            }
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    /**
	     * 增加一个子节点。
	     * @param text 文本
	     * @param icon 图标
	     * @param data 数据
	     * @returns 成功返回新增的子节点，失败返回null。
	     */
	    TreeItemData.prototype.addChild = function (text, icon, userData) {
	        var itemData = TreeItemData.create(text, icon, userData);
	        this.children.push(itemData);
	        itemData.parent = this;
	        return itemData;
	    };
	    TreeItemData.prototype.dispose = function () {
	        this.userData = null;
	        this.text = null;
	        this.icon = null;
	        this.parent = null;
	        this.children.forEach(function (child) {
	            child.dispose();
	        });
	        this.children = null;
	    };
	    TreeItemData.prototype.reset = function () {
	        this.userData = null;
	        this.text = null;
	        this.icon = null;
	        this.children = [];
	        this.parent = null;
	        return this;
	    };
	    TreeItemData.create = function (text, icon, userData) {
	        return new TreeItemData(text, icon, userData);
	    };
	    return TreeItemData;
	}(emitter_1.Emitter));
	exports.TreeItemData = TreeItemData;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var path = __webpack_require__(9);
	var TWEEN = __webpack_require__(20);
	var Assets = __webpack_require__(11);
	var Events = __webpack_require__(6);
	var consts_1 = __webpack_require__(104);
	var main_loop_1 = __webpack_require__(88);
	var emitter_1 = __webpack_require__(4);
	var view_port_1 = __webpack_require__(86);
	var image_tile_1 = __webpack_require__(7);
	var theme_manager_1 = __webpack_require__(121);
	var device_info_1 = __webpack_require__(122);
	var service_locator_1 = __webpack_require__(123);
	var inputEventAdapter = __webpack_require__(15);
	/**
	 * 代表整个应用程序，可以通过Application获取各种服务。
	 *
	 */
	var Application = (function (_super) {
	    __extends(Application, _super);
	    function Application(name) {
	        _super.call(this);
	        this.name = name;
	        this._options = {};
	        this.servicesManager = new service_locator_1.ServiceLocator();
	    }
	    Object.defineProperty(Application.prototype, "isReady", {
	        get: function () {
	            return this._isReady;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Application.prototype, "assets", {
	        get: function () {
	            return Assets;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Application.prototype, "mainLoop", {
	        get: function () {
	            return this._mainLoop;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Application.prototype.getMainLoop = function () {
	        return this._mainLoop;
	    };
	    Object.defineProperty(Application.prototype, "options", {
	        get: function () {
	            return this._options;
	        },
	        set: function (options) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Application.prototype.initOptions = function (args) {
	        var options = this._options;
	        for (var key in args) {
	            options[key] = args[key];
	        }
	        var str = window.location.search.substr(1);
	        var arr = str.split('&');
	        arr.forEach(function (iter) {
	            var keyValue = iter.split("=");
	            options[keyValue[0]] = keyValue[1];
	        });
	    };
	    Application.prototype.run = function () {
	        this.dispatchEvent({ type: Events.RUN });
	        this._mainLoop.requestRedraw();
	    };
	    /**
	     * 子类可以重载此函数，做App的初始化工作。
	     */
	    Application.prototype.start = function () {
	    };
	    Application.prototype.init = function (args) {
	        var _this = this;
	        this.initOptions(args);
	        var themeManager = new theme_manager_1.ThemeManager();
	        var sysThemeDataURL = this._options.sysThemeDataURL;
	        var appThemeDataURL = this._options.appThemeDataURL;
	        if (sysThemeDataURL) {
	            Assets.loadJSON(sysThemeDataURL).then(function (json) {
	                var baseURL = path.dirname(sysThemeDataURL);
	                themeManager.load(json, baseURL);
	                return appThemeDataURL;
	            }).then(function (url) {
	                if (url) {
	                    Assets.loadJSON(url).then(function (json) {
	                        var baseURL = path.dirname(url);
	                        themeManager.load(json, baseURL);
	                        _this.dispatchEventAsync({ type: Events.READY });
	                        _this._isReady = true;
	                        _this.start();
	                    });
	                }
	                else {
	                    _this.dispatchEventAsync({ type: Events.READY });
	                    _this._isReady = true;
	                    _this.start();
	                }
	            });
	        }
	        this.registerService(consts_1.Services.THEME_MANAGER, themeManager);
	        this._viewPort = view_port_1.ViewPort.create(0, 0, 0);
	        this._mainLoop = main_loop_1.MainLoop.create();
	        device_info_1.DeviceInfo.init(navigator.language, navigator.userAgent);
	        inputEventAdapter.init(document, window, device_info_1.DeviceInfo.isPointerSupported, device_info_1.DeviceInfo.isMSPointerSupported, device_info_1.DeviceInfo.isTouchSupported);
	        if (device_info_1.DeviceInfo.isMacOS) {
	            var density = this.viewPort.density;
	            image_tile_1.ImageTile.init(density, 1 / density, function (img) {
	                _this.mainLoop.requestRedraw();
	            });
	        }
	        this._mainLoop.on(Events.PRETICK, function (evt) {
	            var time = evt.deltaTime;
	            TWEEN.update(time);
	        });
	        return this;
	    };
	    Application.prototype.getService = function (name) {
	        return this.servicesManager.get(name);
	    };
	    Application.prototype.registerService = function (name, service) {
	        this.servicesManager.register(name, service);
	        return this;
	    };
	    Application.prototype.getThemeManager = function () {
	        return this.getService(consts_1.Services.THEME_MANAGER);
	    };
	    Object.defineProperty(Application.prototype, "viewPort", {
	        get: function () {
	            return this._viewPort;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Application.prototype.getViewPort = function () {
	        return this._viewPort;
	    };
	    Application.prototype.onReady = function (func) {
	        if (this._isReady) {
	            func.call(this);
	        }
	        else {
	            this.on(Events.READY, func);
	        }
	    };
	    Application.get = function () {
	        return Application.instance;
	    };
	    Application.create = function (name) {
	        var app = new Application(name);
	        if (!Application.instance) {
	            Application.instance = app;
	        }
	        return app;
	    };
	    return Application;
	}(emitter_1.Emitter));
	exports.Application = Application;
	;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var style_1 = __webpack_require__(3);
	var utils_1 = __webpack_require__(21);
	/**
	 * 主题用来统一控制Widget的外观风格。
	 */
	var ThemeManager = (function () {
	    function ThemeManager() {
	        this.data = {};
	    }
	    /**
	     * 设置指定名称和状态下控件的风格。
	     */
	    ThemeManager.prototype.set = function (name, state, style) {
	        if (!this.data[name]) {
	            this.data[name] = {};
	        }
	        this.data[name][state] = style;
	        return this;
	    };
	    /**
	     * 获取指定名称和状态下控件的风格。
	     */
	    ThemeManager.prototype.get = function (name, state) {
	        var styles = this.data[name];
	        return styles ? styles[state] : null;
	    };
	    /**
	     * 初始化。
	     */
	    ThemeManager.prototype.load = function (data, baseURL) {
	        var json = this.expand(data);
	        for (var itemName in json) {
	            var itemInfo = json[itemName];
	            for (var stateName in itemInfo) {
	                var styleInfo = itemInfo[stateName];
	                this.set(itemName, stateName, style_1.Style.create(styleInfo, baseURL));
	            }
	        }
	        return this;
	    };
	    ThemeManager.prototype.expandCommon = function (itemInfo, common) {
	        for (var key in itemInfo) {
	            var value = itemInfo[key];
	            itemInfo[key] = utils_1.assign(value, common);
	        }
	        return itemInfo;
	    };
	    ThemeManager.prototype.expandExtends = function (extInfo, baseInfo) {
	        var ret = {};
	        for (var key in baseInfo) {
	            ret[key] = utils_1.assign({}, baseInfo[key]);
	        }
	        for (var key in extInfo) {
	            ret[key] = utils_1.assign(ret[key] || {}, extInfo[key]);
	        }
	        return ret;
	    };
	    ThemeManager.prototype.expand = function (json) {
	        var ret = {};
	        for (var itemName in json) {
	            var itemInfo = json[itemName];
	            var common = itemInfo["common"];
	            var ext = itemInfo["extends"];
	            delete itemInfo["common"];
	            delete itemInfo["extends"];
	            if (ext) {
	                var baseInfo = JSON.parse(JSON.stringify(ret[ext]));
	                if (common) {
	                    this.expandCommon(baseInfo, common);
	                }
	                itemInfo = this.expandExtends(itemInfo, baseInfo);
	            }
	            else {
	                if (common) {
	                    this.expandCommon(itemInfo, common);
	                }
	            }
	            ret[itemName] = itemInfo;
	        }
	        return ret;
	    };
	    return ThemeManager;
	}());
	exports.ThemeManager = ThemeManager;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * 设备信息。可以获取语言，操作系统和浏览器等相关信息(单例对象，直接调用)。
	 */
	"use strict";
	var DeviceInfo = (function () {
	    function DeviceInfo() {
	    }
	    DeviceInfo.init = function (_locale, userAgent) {
	        DeviceInfo.locale = (_locale || navigator.language).toLowerCase();
	        DeviceInfo.language = DeviceInfo.locale.split("-")[0];
	        var ua = userAgent = userAgent || navigator.userAgent;
	        DeviceInfo.isWindowsPhone = ua.indexOf("Windows Phone") >= 0;
	        DeviceInfo.isAndroid = ua.indexOf("Android") >= 0;
	        DeviceInfo.isIPhone = ua.indexOf("iPhone;") >= 0;
	        DeviceInfo.isIPad = ua.indexOf("iPad;") >= 0;
	        DeviceInfo.isLinux = !DeviceInfo.isAndroid && ua.indexOf("Linux;") >= 0;
	        DeviceInfo.isMacOS = !DeviceInfo.isIPhone && !DeviceInfo.isIPad && ua.indexOf("Macintosh;") >= 0;
	        DeviceInfo.isWindows = !DeviceInfo.isWindowsPhone && ua.indexOf("Windows NT") >= 0;
	        DeviceInfo.isMobile = ua.indexOf("Mobile") >= 0;
	        DeviceInfo.isPointerSupported = window.navigator.pointerEnabled;
	        DeviceInfo.isMSPointerSupported = window.navigator.msPointerEnabled;
	        var msTouchEnabled = !!window.navigator.msMaxTouchPoints;
	        var generalTouchEnabled = "ontouchstart" in document.createElement("div");
	        DeviceInfo.isTouchSupported = !!msTouchEnabled || generalTouchEnabled;
	    };
	    return DeviceInfo;
	}());
	exports.DeviceInfo = DeviceInfo;


/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * 管理各种服务。
	 */
	var ServiceLocator = (function () {
	    function ServiceLocator() {
	        this.services = {};
	    }
	    ServiceLocator.prototype.register = function (name, service) {
	        this.services[name] = service;
	        return this;
	    };
	    ServiceLocator.prototype.get = function (name) {
	        return this.services[name];
	    };
	    return ServiceLocator;
	}());
	exports.ServiceLocator = ServiceLocator;
	;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var key_event_1 = __webpack_require__(16);
	var behavior_1 = __webpack_require__(77);
	/**
	 * Movable Behavior的初始化参数。
	 */
	var MovableOptions = (function () {
	    function MovableOptions(opts) {
	        var options = opts || {};
	        this.xMin = options.xMin || 0;
	        this.yMin = options.yMin || 0;
	        this.xMax = options.xMax || 0;
	        this.yMax = options.yMax || 0;
	        this.xLimit = options.xLimit || false;
	        this.yLimit = options.yLimit || false;
	        this.xMovable = options.xMovable !== undefined ? options.xMovable : true;
	        this.yMovable = options.yMovable !== undefined ? options.yMovable : true;
	        this.moveParent = options.moveParent || false;
	        this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
	    }
	    return MovableOptions;
	}());
	exports.MovableOptions = MovableOptions;
	;
	/**
	 * 让Widget具有可以Movable的特性，按住鼠标可以拖动控件。
	 *
	 * move的过程中，按下ESCAPE键，Widget将恢复原来的位置。
	 */
	var Movable = (function (_super) {
	    __extends(Movable, _super);
	    function Movable(widget, options) {
	        _super.call(this, Movable.TYPE, widget, options);
	        this.moveEvent = { type: Events.MOVE };
	        this.movingEvent = { type: Events.MOVING };
	    }
	    Movable.prototype.init = function (options) {
	        this.options = new MovableOptions(options);
	    };
	    Movable.prototype.moveWidget = function (x, y, animate, end) {
	        var options = this.options;
	        var moveParent = options.moveParent;
	        var duration = options.animateDuration;
	        var widget = moveParent ? this.widget.parent : this.widget;
	        if (!options.xMovable) {
	            x = widget.x;
	        }
	        if (!options.yMovable) {
	            y = widget.y;
	        }
	        if (options.xLimit) {
	            x = Math.min(options.xMax, Math.max(options.xMin, x));
	        }
	        if (options.yLimit) {
	            y = Math.min(options.yMax, Math.max(options.yMin, y));
	        }
	        widget.moveTo(x, y, animate ? 500 : 0);
	        if (end) {
	            widget.dispatchEvent(this.moveEvent);
	        }
	        else {
	            widget.dispatchEvent(this.movingEvent);
	        }
	    };
	    Movable.prototype.onCancelled = function () {
	        this.widget.requestRedraw();
	        this.moveWidget(this.x, this.y, true, true);
	        document.body.style.cursor = "default";
	    };
	    Movable.prototype.onKeyDownGlobal = function (evt) {
	        var keyCode = evt.detail.keyCode;
	        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.dragging) {
	            this.dragging = false;
	            this.onCancelled();
	        }
	    };
	    Movable.prototype.onPointerDown = function (evt) {
	        var moveParent = this.options.moveParent;
	        var widget = moveParent ? this.widget.parent : this.widget;
	        this.x = widget.x;
	        this.y = widget.y;
	        this.dragging = true;
	        document.body.style.cursor = "move";
	    };
	    Movable.prototype.onPointerUp = function (evt) {
	        document.body.style.cursor = "default";
	        if (this.dragging) {
	            this.dragging = false;
	            var dx = evt.x - evt.pointerDownX;
	            var dy = evt.y - evt.pointerDownY;
	            this.moveWidget(this.x + dx, this.y + dy, false, true);
	        }
	    };
	    Movable.prototype.onPointerMove = function (evt) {
	        if (this.dragging) {
	            var dx = evt.x - evt.pointerDownX;
	            var dy = evt.y - evt.pointerDownY;
	            this.moveWidget(this.x + dx, this.y + dy, false, false);
	        }
	    };
	    ;
	    Movable.TYPE = "movable";
	    return Movable;
	}(behavior_1.Behavior));
	exports.Movable = Movable;
	behavior_1.BehaviorFactory.register(Movable.TYPE, function (widget, options) {
	    return new Movable(widget, options);
	});


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var key_event_1 = __webpack_require__(16);
	var behavior_1 = __webpack_require__(77);
	/**
	 * 让Widget具有拖放功能的拖动功能。
	 *
	 */
	var Draggable = (function (_super) {
	    __extends(Draggable, _super);
	    function Draggable(widget, options) {
	        _super.call(this, Draggable.TYPE, widget, options);
	    }
	    Draggable.prototype.init = function (options) {
	        this.onDrawDragging = function (evt) {
	            var ctx = evt.ctx;
	            var win = evt.widget;
	            var p = win.pointerPosition;
	            var e = Events.DragEvent.get(Events.DRAGSTART);
	            var image = e.dataTransfer.dragImage;
	            if (image) {
	                if (image.draw) {
	                    image.draw(ctx, p.x, p.y);
	                }
	            }
	            else {
	                ctx.fillStyle = "green";
	                ctx.fillRect(p.x, p.y, 10, 10);
	            }
	        };
	    };
	    Draggable.prototype.onCancelled = function () {
	        var widget = this.widget;
	        widget.win.requestRedraw();
	        Events.DragEvent.isDragging = false;
	        widget.win.off(Events.AFTER_DRAW, this.onDrawDragging);
	        widget.dispatchEvent(Events.DragEvent.get(Events.DRAGEND));
	    };
	    Draggable.prototype.onKeyDownGlobal = function (evt) {
	        var keyCode = evt.detail.keyCode;
	        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.dragging) {
	            this.dragging = false;
	            this.onCancelled();
	        }
	    };
	    Draggable.prototype.onPointerDown = function (evt) {
	        this.widget.win.on(Events.AFTER_DRAW, this.onDrawDragging);
	    };
	    Draggable.prototype.onPointerUp = function (evt) {
	        if (this.dragging) {
	            this.dragging = false;
	            Events.DragEvent.isDragging = false;
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGEND));
	            this.widget.win.off(Events.AFTER_DRAW, this.onDrawDragging);
	        }
	    };
	    Draggable.prototype.onPointerMove = function (evt) {
	        if (evt.pointerDown && !this.dragging) {
	            this.dragging = true;
	            Events.DragEvent.isDragging = true;
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGSTART));
	        }
	        if (evt.pointerDown) {
	            this.widget.win.requestRedraw();
	        }
	    };
	    ;
	    Draggable.TYPE = "draggable";
	    return Draggable;
	}(behavior_1.Behavior));
	exports.Draggable = Draggable;
	behavior_1.BehaviorFactory.register(Draggable.TYPE, function (widget, options) {
	    return new Draggable(widget, options);
	});


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var behavior_1 = __webpack_require__(77);
	/**
	 * 让Widget可作为拖放功能的Drop目标。
	 *
	 */
	var Droppable = (function (_super) {
	    __extends(Droppable, _super);
	    function Droppable(widget, options) {
	        _super.call(this, Droppable.TYPE, widget, options);
	    }
	    Droppable.prototype.onPointerEnter = function (evt) {
	        if (Events.DragEvent.isDragging) {
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGENTER));
	        }
	    };
	    Droppable.prototype.onPointerLeave = function (evt) {
	        if (Events.DragEvent.isDragging) {
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGLEAVE));
	        }
	    };
	    Droppable.prototype.onPointerUp = function (evt) {
	        if (Events.DragEvent.isDragging) {
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DROP));
	        }
	    };
	    Droppable.prototype.onPointerMove = function (evt) {
	        if (Events.DragEvent.isDragging) {
	            this.widget.dispatchEvent(Events.DragEvent.get(Events.DRAGOVER));
	        }
	    };
	    ;
	    Droppable.TYPE = "droppable";
	    return Droppable;
	}(behavior_1.Behavior));
	exports.Droppable = Droppable;
	behavior_1.BehaviorFactory.register(Droppable.TYPE, function (widget, options) {
	    return new Droppable(widget, options);
	});


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var point_1 = __webpack_require__(2);
	var key_event_1 = __webpack_require__(16);
	var behavior_1 = __webpack_require__(77);
	/**
	 * Resizable Behavior的初始化参数。
	 */
	var ResizableOptions = (function () {
	    function ResizableOptions(options) {
	        this.north = options.north || options.all || false;
	        this.south = options.south || options.all || false;
	        this.west = options.west || options.all || false;
	        this.east = options.east || options.all || false;
	        this.northWest = options.northWest || options.all || false;
	        this.northEast = options.northEast || options.all || false;
	        this.southWest = options.southWest || options.all || false;
	        this.southEast = options.southEast || options.all || false;
	        this.animateDuration = options.animateDuration >= 0 ? options.animateDuration : 500;
	    }
	    return ResizableOptions;
	}());
	exports.ResizableOptions = ResizableOptions;
	;
	/**
	 * 让Widget具有可以Resizable的特性。
	 * 当鼠标移动到Widget对应的位置，如四角和四边时，鼠标的指针会提示在此处按下鼠标可以resize Widget。
	 *
	 * Resize的过程中，按下ESCAPE键，Widget将恢复原来的位置与大小。
	 */
	var Resizable = (function (_super) {
	    __extends(Resizable, _super);
	    function Resizable(widget, options) {
	        _super.call(this, Resizable.TYPE, widget, options);
	    }
	    Resizable.prototype.init = function (options) {
	        this.options = new ResizableOptions(options);
	    };
	    Resizable.prototype.onCancelled = function () {
	        this.widget.requestRedraw();
	        document.body.style.cursor = "default";
	        this.widget.moveResizeTo(this.x, this.y, this.w, this.h, this.options.animateDuration);
	    };
	    Resizable.prototype.onKeyDownGlobal = function (evt) {
	        var keyCode = evt.detail.keyCode;
	        if (keyCode === key_event_1.KeyEvent.VK_ESCAPE && this.resizing) {
	            this.resizing = false;
	            this.onCancelled();
	        }
	    };
	    Resizable.prototype.onPointerDown = function (evt) {
	        var result = this.testPointerPosition(evt);
	        if (result) {
	            this.x = this.widget.x;
	            this.y = this.widget.y;
	            this.w = this.widget.w;
	            this.h = this.widget.h;
	            this.resizing = true;
	            this.pointerDownArea = result;
	            document.body.style.cursor = result + "-resize";
	        }
	        else {
	            document.body.style.cursor = "default";
	        }
	    };
	    Resizable.prototype.onPointerUp = function (evt) {
	        this.resizing = false;
	        document.body.style.cursor = "default";
	    };
	    Resizable.prototype.testPointerPosition = function (evt) {
	        var delta = 3;
	        var w = this.widget.w;
	        var h = this.widget.h;
	        var p = this.widget.toLocalPoint(point_1.Point.point.init(evt.x, evt.y));
	        var right = w - delta;
	        var bottom = h - delta;
	        var options = this.options;
	        if (p.y >= 0 && p.y <= delta) {
	            if (p.x >= 0 && p.x <= delta && options.northWest) {
	                return "nw";
	            }
	            else if (p.x > delta && p.x < right && options.north) {
	                return "n";
	            }
	            else if (p.x >= right && p.x <= w && options.northEast) {
	                return "ne";
	            }
	        }
	        else if (p.y > delta && p.y < bottom) {
	            if (p.x >= 0 && p.x <= delta && options.west) {
	                return "w";
	            }
	            else if (p.x >= right && p.x <= w && options.east) {
	                return "e";
	            }
	        }
	        else if (p.y >= bottom && p.y <= h && options.southWest) {
	            if (p.x >= 0 && p.x <= delta) {
	                return "sw";
	            }
	            else if (p.x > delta && p.x < right && options.south) {
	                return "s";
	            }
	            else if (p.x >= right && p.x <= w && options.southEast) {
	                return "se";
	            }
	        }
	        return null;
	    };
	    Resizable.prototype.onPointerMove = function (evt) {
	        if (this.resizing) {
	            var widget = this.widget;
	            var dx = evt.x - evt.pointerDownX;
	            var dy = evt.y - evt.pointerDownY;
	            switch (this.pointerDownArea) {
	                case "n": {
	                    widget.moveResizeTo(this.x, this.y + dy, this.w, this.h - dy);
	                    break;
	                }
	                case "ne": {
	                    widget.moveResizeTo(this.x, this.y + dy, this.w + dx, this.h - dy);
	                    break;
	                }
	                case "nw": {
	                    widget.moveResizeTo(this.x + dx, this.y + dy, this.w - dx, this.h - dy);
	                    break;
	                }
	                case "w": {
	                    widget.moveResizeTo(this.x + dx, this.y, this.w - dx, this.h);
	                    break;
	                }
	                case "e": {
	                    widget.moveResizeTo(this.x, this.y, this.w + dx, this.h);
	                    break;
	                }
	                case "s": {
	                    widget.moveResizeTo(this.x, this.y, this.w, this.h + dy);
	                    break;
	                }
	                case "se": {
	                    widget.moveResizeTo(this.x, this.y, this.w + dx, this.h + dy);
	                    break;
	                }
	                case "sw": {
	                    widget.moveResizeTo(this.x + dx, this.y, this.w - dx, this.h + dy);
	                    break;
	                }
	            }
	        }
	        else {
	            var result = this.testPointerPosition(evt);
	            if (result) {
	                document.body.style.cursor = result + "-resize";
	            }
	            else {
	                document.body.style.cursor = "default";
	            }
	        }
	    };
	    Resizable.TYPE = "resizable";
	    return Resizable;
	}(behavior_1.Behavior));
	exports.Resizable = Resizable;
	behavior_1.BehaviorFactory.register(Resizable.TYPE, function (widget, options) {
	    return new Resizable(widget, options);
	});


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var dialog_1 = __webpack_require__(91);
	var graphics_1 = __webpack_require__(25);
	var list_view_1 = __webpack_require__(111);
	var Events = __webpack_require__(6);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	var list_layouter_1 = __webpack_require__(112);
	var simple_layouter_1 = __webpack_require__(114);
	var Menu = (function (_super) {
	    __extends(Menu, _super);
	    function Menu() {
	        _super.call(this, Menu.TYPE);
	    }
	    Object.defineProperty(Menu.prototype, "openedMenu", {
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
	    Menu.prototype.hasItems = function () {
	        return this._listView.children.length > 0;
	    };
	    Object.defineProperty(Menu.prototype, "itemH", {
	        get: function () {
	            return this._listView.itemH;
	        },
	        set: function (value) {
	            this._listView.itemH = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Menu.prototype, "owner", {
	        get: function () {
	            return this._owner;
	        },
	        /**
	         * owner代表上级菜单或菜单条。
	         */
	        set: function (owner) {
	            this._owner = owner;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Menu.prototype, "trigger", {
	        get: function () {
	            return this._trigger;
	        },
	        /**
	         * 触发该菜单的MenuBarItem或MenuItem。
	         */
	        set: function (trigger) {
	            this._trigger = trigger;
	            this.app = trigger.app;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Menu.prototype.onItemEnter = function (child) {
	        var openedMenu = this._openedMenu;
	        if (child.onInitSubMenu) {
	            if (!openedMenu) {
	                child.openSubMenu();
	            }
	            else if (openedMenu.trigger !== child) {
	                child.reopenSubMenu(openedMenu);
	            }
	        }
	        else if (openedMenu) {
	            openedMenu.close();
	        }
	    };
	    Menu.prototype.dispatchPointerMove = function (evt, ctx) {
	        var owner = this.owner;
	        /*
	         * 如果事件在当前菜单外，把事件转发给owner处理。
	         */
	        if (!evt.pointerDown && owner) {
	            var hitTestResult = this.selfHitTest(evt.x, evt.y, ctx);
	            if (!hitTestResult) {
	                ctx.save();
	                ctx.identity();
	                var x = this.x;
	                var y = this.y;
	                evt.x += x;
	                evt.y += y;
	                evt.x -= owner.x;
	                evt.y -= owner.y;
	                owner.dispatchPointerMove(evt, ctx);
	                evt.x += owner.x;
	                evt.y += owner.y;
	                evt.x -= x;
	                evt.y -= y;
	                ctx.restore();
	            }
	        }
	        _super.prototype.dispatchPointerMove.call(this, evt, ctx);
	    };
	    Menu.prototype.clearContent = function () {
	        this._listView.removeAllChildren();
	        return this;
	    };
	    Menu.prototype.resizeToContent = function () {
	        var w = this.w || 200;
	        var listView = this._listView;
	        var h = listView.desireHeight + this.topPadding + this.bottomPadding;
	        this.resizeTo(w, h);
	        this.relayoutChildren();
	        return this;
	    };
	    Menu.prototype.open = function () {
	        this.resizeToContent();
	        _super.prototype.open.call(this);
	        this.grab();
	        return this;
	    };
	    Menu.prototype.dispatchClick = function (evt) {
	        _super.prototype.dispatchClick.call(this, evt);
	        if (!this.hitTestResult) {
	            this.close();
	        }
	    };
	    Menu.prototype.addSpace = function () {
	        var item = this.addItemExt("-", null);
	        item.styleType = item.type + ".space";
	        return item;
	    };
	    Menu.prototype.addCheckableItem = function (text, onClick, value, shortcut) {
	        var item = this.addItemExt(text, null, shortcut, null);
	        item.set({ checkable: true, value: value });
	        item.styleType = item.type + ".checkable";
	        item.on(Events.CLICK, onClick);
	        return item;
	    };
	    Menu.prototype.addItem = function (text, onClick, iconURL, shortcut) {
	        var item = this.addItemExt(text, iconURL, shortcut, null);
	        item.on(Events.CLICK, onClick);
	        return item;
	    };
	    Menu.prototype.addFolderItem = function (text, onInitSubMenu) {
	        var item = this.addItemExt(text, null, null, onInitSubMenu);
	        item.styleType = item.type + ".folder";
	        return item;
	    };
	    Menu.prototype.addItemExt = function (text, iconURL, shortcut, onInitSubMenu) {
	        var _this = this;
	        var listView = this._listView;
	        if (!listView.app) {
	            listView.app = this.app;
	        }
	        var item = MenuItem.create();
	        var h = text === "-" ? this.itemH >> 1 : this.itemH;
	        item.set({ iconURL: iconURL, text: text, shortcut: shortcut, onInitSubMenu: onInitSubMenu });
	        item.layoutParam = list_layouter_1.ListLayouterParam.create({ h: h });
	        listView.addChild(item);
	        item.on(Events.POINTER_ENTER, function (evt) {
	            _this.onItemEnter(item);
	        });
	        return item;
	    };
	    Menu.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this.hasOwnCanvas = true;
	        this.styleType = "widget.transparent";
	        this.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
	        var listView = list_view_1.ListView.create();
	        listView.padding = 0;
	        listView.itemH = 25;
	        listView.styleType = "menu";
	        listView.dragToScroll = false;
	        listView.slideToScroll = false;
	        listView.bottomPadding = 4;
	        listView.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "0", y: "0px", w: "100%", h: "100%" });
	        this.addChild(listView);
	        this.target = listView;
	        this._listView = listView;
	        this.topPadding = 0;
	        this.bottomPadding = 4;
	        this.leftPadding = 2;
	        this.rightPadding = 2;
	    };
	    Menu.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._trigger = null;
	        this._listView = null;
	        this._openedMenu = null;
	    };
	    Menu.create = function (options) {
	        return Menu.r.create().reset(Menu.TYPE, options);
	    };
	    Menu.TYPE = "menu";
	    Menu.r = new recyclable_creator_1.RecyclableCreator(function () { return new Menu(); });
	    return Menu;
	}(dialog_1.Dialog));
	exports.Menu = Menu;
	;
	var MenuItem = (function (_super) {
	    __extends(MenuItem, _super);
	    function MenuItem() {
	        _super.call(this, MenuItem.TYPE);
	    }
	    Object.defineProperty(MenuItem.prototype, "iconURL", {
	        set: function (value) {
	            var _this = this;
	            if (value) {
	                this._icon = image_tile_1.ImageTile.create(value, function (evt) {
	                    _this.requestRedraw();
	                });
	            }
	            else {
	                this._icon = null;
	            }
	            this._iconURL = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MenuItem.prototype.dispatchClick = function (evt) {
	        _super.prototype.dispatchClick.call(this, evt);
	        if (!this.onInitSubMenu) {
	            this.closeMenu();
	        }
	    };
	    MenuItem.prototype.drawImage = function (ctx, style) {
	        var icon = this._icon;
	        var y = this.topPadding;
	        var x = this.leftPadding;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        var w = h;
	        if (this.checkable && this.value || this.onInitSubMenu) {
	            icon = style.foreGroundImage;
	            if (this.onInitSubMenu) {
	                x = this.w - this.rightPadding - w;
	            }
	        }
	        if (icon) {
	            icon.draw(ctx, image_tile_1.ImageDrawType.ICON, x, y, w, h);
	        }
	        return this;
	    };
	    MenuItem.prototype.drawText = function (ctx, style) {
	        var text = this.getLocaleText();
	        ;
	        var h = this.h - this.topPadding - this.bottomPadding;
	        var x = this.leftPadding + h;
	        var y = this.topPadding;
	        var w = this.w - x - this.rightPadding;
	        if (text) {
	            if (text === "-") {
	                y = this.h >> 1;
	                w = this.w;
	                graphics_1.Graphics.drawLine(ctx, style.lineColor, 1, 0, y, w, y);
	            }
	            else {
	                graphics_1.Graphics.drawTextSL(ctx, text, style, rect_1.Rect.rect.init(x, y, w, h));
	            }
	        }
	        if (this.shortcut) {
	            if (!this._shortCutStyle) {
	                this._shortCutStyle = style.clone();
	                this._shortCutStyle.textAlign = "right";
	            }
	            text = this.shortcut;
	            graphics_1.Graphics.drawTextSL(ctx, text, this._shortCutStyle, rect_1.Rect.rect.init(x, y, w, h));
	        }
	        return this;
	    };
	    MenuItem.prototype.reopenSubMenu = function (menu) {
	        var ownerMenu = this.win;
	        menu.clearContent();
	        this.onInitSubMenu(menu);
	        menu.set({ trigger: this });
	        var p = this.toViewPoint(point_1.Point.point.init(this.w, 0));
	        var x = p.x - menu.leftPadding;
	        var y = p.y - menu.topPadding;
	        menu.moveTo(x, y);
	        menu.resizeToContent();
	    };
	    MenuItem.prototype.openSubMenu = function () {
	        var ownerMenu = this.win;
	        var menu = Menu.create();
	        menu.set({ trigger: this, owner: ownerMenu });
	        this.onInitSubMenu(menu);
	        if (menu.hasItems()) {
	            var p = this.toViewPoint(point_1.Point.point.init(this.w, 0));
	            var x = p.x - menu.leftPadding;
	            var y = p.y - menu.topPadding;
	            menu.moveTo(x, y);
	            ownerMenu.openedMenu = menu;
	            menu.open();
	        }
	        else {
	            menu.dispose();
	        }
	    };
	    MenuItem.prototype.closeMenu = function () {
	        var menu = this.win;
	        while (menu) {
	            var owner = menu.owner;
	            menu.close();
	            if (owner.type === Menu.TYPE) {
	                menu = owner;
	            }
	            else {
	                break;
	            }
	        }
	    };
	    MenuItem.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._icon = null;
	        this.onInitSubMenu = null;
	    };
	    MenuItem.prototype.getDefProps = function () {
	        return MenuItem.defProps;
	    };
	    MenuItem.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._icon = null;
	        this.onInitSubMenu = null;
	    };
	    MenuItem.create = function (options) {
	        return MenuItem.recycleBin.create().reset(MenuItem.TYPE, options);
	    };
	    MenuItem.defProps = Object.assign({}, widget_1.Widget.defProps, { _iconURL: null,
	        checkable: false, shortcut: null, _lp: 2, _rp: 4
	    });
	    MenuItem.TYPE = "menu-item";
	    MenuItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new MenuItem(); });
	    return MenuItem;
	}(widget_1.Widget));
	exports.MenuItem = MenuItem;
	;
	widget_factory_1.WidgetFactory.register(Menu.TYPE, Menu.create);
	widget_factory_1.WidgetFactory.register(MenuItem.TYPE, MenuItem.create);


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var window_1 = __webpack_require__(92);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var WindowNormal = (function (_super) {
	    __extends(WindowNormal, _super);
	    function WindowNormal() {
	        _super.call(this, WindowNormal.TYPE);
	    }
	    WindowNormal.create = function (options) {
	        return WindowNormal.recycleBin.create().reset(WindowNormal.TYPE, options);
	    };
	    WindowNormal.TYPE = "window-normal";
	    WindowNormal.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new WindowNormal(); });
	    return WindowNormal;
	}(window_1.Window));
	exports.WindowNormal = WindowNormal;
	;
	widget_factory_1.WidgetFactory.register(WindowNormal.TYPE, WindowNormal.create);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var menu_1 = __webpack_require__(128);
	var point_1 = __webpack_require__(2);
	var Events = __webpack_require__(6);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var image_tile_1 = __webpack_require__(7);
	var recyclable_creator_1 = __webpack_require__(82);
	var linear_layouter_1 = __webpack_require__(131);
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
	    MenuBar.prototype.addLogo = function (iconURL) {
	        var item = MenuBarItem.create();
	        item.styleType = "widget.transparent";
	        item.setIcons(iconURL, iconURL);
	        item.layoutParam = this.createChildLayoutParam({ w: this.h, h: "100%", position: 0.1 });
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
	        item.on(Events.CLICK, onClick);
	        item.layoutParam = this.createChildLayoutParam({ w: width || this.itemWidth, h: "100%", position: position || 1 });
	        this.addChild(item);
	        return item;
	    };
	    MenuBar.prototype.addImageButton = function (normalIconURL, overIconURL, activeIconURL, disableIconURL, checkedIconURL, onClick, position) {
	        var item = MenuBarItem.create();
	        item.on(Events.CLICK, onClick);
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
	        return MenuBar.recycleBin.create().reset(MenuBar.TYPE, options);
	    };
	    MenuBar.defProps = Object.assign({}, widget_1.Widget.defProps, { _itemWidth: 40 });
	    MenuBar.TYPE = "menu-bar";
	    MenuBar.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new MenuBar(); });
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
	        return MenuBarItem.recycleBin.create().reset(MenuBarItem.TYPE, options);
	    };
	    MenuBarItem.defProps = Object.assign({}, widget_1.Widget.defProps, {
	        _normalIconURL: null, _overIconURL: null, _activeIconURL: null, _disableIconURL: null, _checkedIconURL: null
	    });
	    MenuBarItem.TYPE = "menu-bar-item";
	    MenuBarItem.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new MenuBarItem(); });
	    return MenuBarItem;
	}(widget_1.Widget));
	exports.MenuBarItem = MenuBarItem;
	;
	widget_factory_1.WidgetFactory.register(MenuBar.TYPE, MenuBar.create);
	widget_factory_1.WidgetFactory.register(MenuBarItem.TYPE, MenuBarItem.create);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var consts_1 = __webpack_require__(104);
	var utils_1 = __webpack_require__(21);
	var layouter_1 = __webpack_require__(78);
	var TYPE_H = "linear-h";
	var TYPE_V = "linear-v";
	/**
	 * 线性布局器。可以设置为水平和垂直两个方向。
	 */
	var LinearLayouter = (function (_super) {
	    __extends(LinearLayouter, _super);
	    function LinearLayouter() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(LinearLayouter.prototype, "type", {
	        get: function () {
	            return this.orientation === consts_1.Orientation.V ? TYPE_V : TYPE_H;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 设置参数。
	     */
	    LinearLayouter.prototype.setOptions = function (options) {
	        this.spacing = options.spacing || 0;
	        this.orientation = options.orientation || consts_1.Orientation.V;
	        return this;
	    };
	    LinearLayouter.prototype.layoutChildren = function (widget, children, rect) {
	        var _this = this;
	        var r = rect.clone();
	        var defParam = LinearLayouterParam.defParam;
	        var arr = children.filter(function (child) {
	            var param = child.layoutParam || defParam;
	            return param.position > 0;
	        });
	        utils_1.stableSort(arr, function (a, b) {
	            var ap = a.layoutParam || defParam;
	            var bp = b.layoutParam || defParam;
	            return ap.position - bp.position;
	        });
	        arr.forEach(function (child, index) {
	            if (r.w > 0 && r.h > 0) {
	                _this.layoutChild(child, r, index);
	            }
	        });
	        arr = children.filter(function (child) {
	            var param = child.layoutParam || defParam;
	            return !param.position;
	        });
	        arr.forEach(function (child, index) {
	            if (r.w > 0 && r.h > 0) {
	                _this.layoutChild(child, r, index);
	            }
	        });
	        arr = children.filter(function (child) {
	            var param = child.layoutParam || defParam;
	            return param.position < 0;
	        });
	        utils_1.stableSort(arr, function (a, b) {
	            var ap = a.layoutParam || defParam;
	            var bp = b.layoutParam || defParam;
	            return bp.position - ap.position;
	        });
	        arr.forEach(function (child, index) {
	            if (r.w > 0 && r.h > 0) {
	                _this.layoutChild(child, r, index);
	            }
	        });
	        r.dispose();
	        return rect;
	    };
	    LinearLayouter.prototype.layoutChild = function (child, r, index) {
	        var x = 0;
	        var y = 0;
	        var w = 0;
	        var h = 0;
	        var defParam = LinearLayouterParam.defParam;
	        var param = child.layoutParam || defParam;
	        var position = param.position;
	        if (param && param.type === LinearLayouterParam.TYPE && child.visible) {
	            var spacing = (index > 0 || !position) ? (param.spacing || this.spacing) : 0;
	            if (this.orientation === consts_1.Orientation.V) {
	                r.h -= spacing;
	            }
	            else {
	                r.w -= spacing;
	            }
	            h = Math.min(r.h, param.h ? layouter_1.Layouter.evalValue(param.h, r.h) : child.h);
	            w = Math.min(r.w, param.w ? layouter_1.Layouter.evalValue(param.w, r.w) : child.w);
	            if (this.orientation === consts_1.Orientation.V) {
	                switch (param.align) {
	                    case consts_1.Align.LEFT: {
	                        x = r.x;
	                        break;
	                    }
	                    case consts_1.Align.RIGHT: {
	                        x = r.x + r.w - w;
	                        break;
	                    }
	                    default: {
	                        x = r.x + ((r.w - w) >> 1);
	                        break;
	                    }
	                }
	                var spacingH = spacing + h;
	                if (position >= 0) {
	                    y = r.y + spacing;
	                    r.y += spacingH;
	                }
	                else {
	                    y = r.y + r.h - spacingH;
	                }
	                r.h -= h;
	            }
	            else {
	                switch (param.align) {
	                    case consts_1.Align.TOP: {
	                        y = r.y;
	                        break;
	                    }
	                    case consts_1.Align.BOTTOM: {
	                        y = r.y + r.h - h;
	                        break;
	                    }
	                    default: {
	                        y = r.y + ((r.h - h) >> 1);
	                        break;
	                    }
	                }
	                var spacingW = spacing + w;
	                if (position >= 0) {
	                    x = r.x + spacing;
	                    r.x += spacingW;
	                }
	                else {
	                    x = r.x + r.w - spacingW;
	                }
	                r.w -= w;
	            }
	            child.moveResizeTo(x, y, w, h);
	            child.relayoutChildren();
	        }
	    };
	    LinearLayouter.prototype.createParam = function (options) {
	        return LinearLayouterParam.create(options);
	    };
	    LinearLayouter.createV = function (options) {
	        var layouter = new LinearLayouter();
	        layouter.setOptions(options);
	        layouter.orientation = consts_1.Orientation.V;
	        return layouter;
	    };
	    LinearLayouter.createH = function (options) {
	        var layouter = new LinearLayouter();
	        layouter.setOptions(options || {});
	        layouter.orientation = consts_1.Orientation.H;
	        return layouter;
	    };
	    return LinearLayouter;
	}(layouter_1.Layouter));
	exports.LinearLayouter = LinearLayouter;
	;
	layouter_1.LayouterFactory.register(TYPE_H, LinearLayouter.createH);
	layouter_1.LayouterFactory.register(TYPE_V, LinearLayouter.createV);
	/**
	 * Linear布局器的参数。
	 *
	 * 如果父控件使用LinearLayouter布局器，则子控件需要把layoutParam设置为LinearLayouterParam。
	 *
	 * 对于w参数：
	 * *.如果以px结尾，则直接取它的值。
	 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
	 *
	 */
	var LinearLayouterParam = (function (_super) {
	    __extends(LinearLayouterParam, _super);
	    function LinearLayouterParam(type, w, h, spacing, align, position) {
	        _super.call(this, type || LinearLayouterParam.TYPE);
	        this.w = w || "100%";
	        this.h = h || "100%";
	        this.align = align;
	        this.spacing = spacing;
	        this.position = position;
	    }
	    LinearLayouterParam.createWithType = function (type, opts) {
	        var options = opts || {};
	        return new LinearLayouterParam(LinearLayouterParam.TYPE, options.w || options.width, options.h || options.height, options.spacing || 0, options.align || consts_1.Align.C, options.position === undefined ? 1 : options.position);
	    };
	    LinearLayouterParam.create = function (opts) {
	        return LinearLayouterParam.createWithType(LinearLayouterParam.TYPE, opts);
	    };
	    LinearLayouterParam.TYPE = "linear";
	    LinearLayouterParam.defParam = LinearLayouterParam.create(null);
	    return LinearLayouterParam;
	}(layouter_1.LayouterParam));
	exports.LinearLayouterParam = LinearLayouterParam;
	;
	layouter_1.LayouterParamFactory.register(LinearLayouterParam.TYPE, LinearLayouterParam.create);


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var style_1 = __webpack_require__(3);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var graphics_1 = __webpack_require__(25);
	var consts_1 = __webpack_require__(104);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 颜色控件。
	 */
	var Color = (function (_super) {
	    __extends(Color, _super);
	    function Color(type) {
	        _super.call(this, type);
	    }
	    Object.defineProperty(Color.prototype, "color", {
	        get: function () {
	            return this._style.lineColor;
	        },
	        set: function (value) {
	            this._style.lineColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Color.prototype, "lineColor", {
	        get: function () {
	            return this._style.lineColor;
	        },
	        set: function (value) {
	            this._style.lineColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Color.prototype, "lineWidth", {
	        get: function () {
	            return this._style.lineWidth;
	        },
	        set: function (value) {
	            this._style.lineWidth = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Color.prototype, "value", {
	        get: function () {
	            return this.color;
	        },
	        set: function (color) {
	            this.color = color;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Color.prototype.onToJson = function (json) {
	        if (this._style) {
	            json.style = this._style.toJson();
	        }
	    };
	    Color.prototype.onFromJson = function (json) {
	        if (json.style) {
	            this._style = style_1.Style.create(json.style);
	        }
	    };
	    Color.prototype.setStyle = function (state, style) {
	        this._style = style;
	        return this;
	    };
	    Color.prototype.onReset = function () {
	        this._style = style_1.Style.create();
	        this._style.fontSize = 16;
	        this._style.textColor = "Black";
	    };
	    Color.prototype.getStyle = function () {
	        return this._style;
	    };
	    return Color;
	}(widget_1.Widget));
	exports.Color = Color;
	;
	var ColorTile = (function (_super) {
	    __extends(ColorTile, _super);
	    function ColorTile() {
	        _super.call(this, ColorTile.TYPE);
	    }
	    Object.defineProperty(ColorTile.prototype, "color", {
	        get: function () {
	            return this._style.backGroundColor;
	        },
	        set: function (value) {
	            this._style.backGroundColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorTile.prototype, "roundRadius", {
	        get: function () {
	            return this._style.roundRadius;
	        },
	        set: function (value) {
	            this._style.roundRadius = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ColorTile.create = function (options) {
	        return ColorTile.recycleBin.create().reset(ColorTile.TYPE, options);
	    };
	    ColorTile.TYPE = "color-tile";
	    ColorTile.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ColorTile(); });
	    return ColorTile;
	}(Color));
	exports.ColorTile = ColorTile;
	;
	widget_factory_1.WidgetFactory.register(ColorTile.TYPE, ColorTile.create);
	var ColorLine = (function (_super) {
	    __extends(ColorLine, _super);
	    function ColorLine() {
	        _super.call(this, ColorLine.TYPE);
	    }
	    Object.defineProperty(ColorLine.prototype, "color", {
	        get: function () {
	            return this._style.lineColor;
	        },
	        set: function (value) {
	            this._style.lineColor = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "orientation", {
	        get: function () {
	            return this._orientation;
	        },
	        set: function (value) {
	            this._orientation = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "vAlign", {
	        get: function () {
	            return this._vAlign;
	        },
	        set: function (value) {
	            this._vAlign = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "hAlign", {
	        get: function () {
	            return this._hAlign;
	        },
	        set: function (value) {
	            this._hAlign = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "lineJoin", {
	        get: function () {
	            return this._style.lineJoin;
	        },
	        set: function (value) {
	            this._style.lineJoin = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "lineCap", {
	        get: function () {
	            return this._style.lineCap;
	        },
	        set: function (value) {
	            this._style.lineCap = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColorLine.prototype, "dashLine", {
	        get: function () {
	            return this._style.dashLine;
	        },
	        set: function (value) {
	            this._style.dashLine = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ColorLine.prototype.drawColorBackground = function (ctx, style) {
	        var x = 0;
	        var y = 0;
	        var lineWidth = style.lineWidth || 1;
	        ctx.lineCap = style.lineCap || "butt";
	        ctx.lineJoin = style.lineJoin || "miter";
	        if (style.dashLine) {
	            ctx.setLineDash(style.dashLine);
	        }
	        if (this._orientation === consts_1.Orientation.V) {
	            switch (this._hAlign) {
	                case consts_1.AlignH.L: {
	                    x = 0;
	                    break;
	                }
	                case consts_1.AlignH.R: {
	                    x = this.w - lineWidth;
	                    break;
	                }
	                default: {
	                    x = this.w >> 1;
	                    break;
	                }
	            }
	            graphics_1.Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, x, this.h);
	        }
	        else {
	            switch (this._vAlign) {
	                case consts_1.AlignV.T: {
	                    y = 0;
	                    break;
	                }
	                case consts_1.AlignV.B: {
	                    y = this.h - lineWidth;
	                    break;
	                }
	                default: {
	                    y = this.h >> 1;
	                    break;
	                }
	            }
	            graphics_1.Graphics.drawLine(ctx, style.lineColor, lineWidth, x, y, this.w, y);
	        }
	        return this;
	    };
	    ColorLine.create = function (options) {
	        return ColorLine.recycleBin.create().reset(ColorLine.TYPE, options);
	    };
	    ColorLine.TYPE = "color-tile";
	    ColorLine.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new ColorLine(); });
	    return ColorLine;
	}(Color));
	exports.ColorLine = ColorLine;
	;
	widget_factory_1.WidgetFactory.register(ColorLine.TYPE, ColorLine.create);


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var title_content_1 = __webpack_require__(134);
	var collapsable_title_1 = __webpack_require__(135);
	/**
	 * 手风琴控件。它有多个页面，在每一时刻只展开一个。
	 */
	var Accordion = (function (_super) {
	    __extends(Accordion, _super);
	    function Accordion() {
	        _super.call(this, Accordion.TYPE);
	    }
	    Object.defineProperty(Accordion.prototype, "titleH", {
	        get: function () {
	            return this._titleHeight;
	        },
	        /**
	         * titleH 标题控件的高度。
	         */
	        set: function (value) {
	            this._titleHeight = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 增加一个页面。
	     * @param title 标题文本。
	     * @param contentH 内容控件。
	     * @returns 返回新增加的TitleContent。
	     */
	    Accordion.prototype.addPage = function (title, contentWidget) {
	        var me = this;
	        var titleWidget = collapsable_title_1.CollapsableTitle.create({ text: title });
	        var titleContent = title_content_1.TitleContent.create({
	            collapsed: true,
	            titleWidget: titleWidget,
	            contentWidget: contentWidget,
	            titleH: this.titleH
	        });
	        titleWidget.onClickTrigger = function (collapsed) {
	            me.setActivePage(titleContent, collapsed, 300);
	        };
	        this.addChild(titleContent);
	        return titleContent;
	    };
	    /**
	     * 展开或折叠指定的页面。
	     * @param titleContent 要展开或折叠的页面。
	     * @param collapsed 展开或折叠。
	     * @param duration 动画的时间。
	     * @returns 返回当前控件。
	     */
	    Accordion.prototype.setActivePage = function (titleContent, collapsed, duration) {
	        var _this = this;
	        this.children.forEach(function (child) {
	            if (titleContent === child) {
	                child.triggerCollapsed(duration, function (evt) {
	                    _this.relayoutChildren();
	                });
	            }
	            else {
	                if (!child.collapsed) {
	                    child.triggerCollapsed(duration, function (evt) {
	                        _this.relayoutChildren();
	                    });
	                }
	            }
	        });
	        this.relayoutChildren();
	        return this;
	    };
	    Accordion.prototype.relayoutChildren = function () {
	        var r = this.getLayoutRect();
	        var x = this.leftPadding;
	        var y = this.topPadding;
	        var w = this.clientW;
	        var n = this.children.length;
	        var titleH = this.titleH;
	        var contentH = this.clientH - n * this.titleH;
	        this.children.forEach(function (child) {
	            child.titleH = titleH;
	            child.contentH = contentH;
	            child.moveResizeTo(x, y, w, child.h, 0);
	            child.relayoutChildren();
	            y += child.h;
	        });
	        return r;
	    };
	    Accordion.prototype.getDefProps = function () {
	        return Accordion.defProps;
	    };
	    Accordion.create = function (options) {
	        return Accordion.recycleBin.create().reset(Accordion.TYPE, options);
	    };
	    Accordion.defProps = Object.assign({}, widget_1.Widget.defProps, { _titleHeight: 30 });
	    Accordion.TYPE = "accordion";
	    Accordion.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new Accordion(); });
	    return Accordion;
	}(widget_1.Widget));
	exports.Accordion = Accordion;
	;
	widget_factory_1.WidgetFactory.register(Accordion.TYPE, Accordion.create);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var Events = __webpack_require__(6);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 一个用来显示标题和内容的控件。通常用于Accordion和PropertySheets的子控件。
	 */
	var TitleContent = (function (_super) {
	    __extends(TitleContent, _super);
	    function TitleContent() {
	        _super.call(this, TitleContent.TYPE);
	    }
	    Object.defineProperty(TitleContent.prototype, "titleH", {
	        get: function () {
	            return this._th;
	        },
	        set: function (value) {
	            this._th = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleContent.prototype, "contentH", {
	        get: function () {
	            return this._ch;
	        },
	        set: function (value) {
	            this._ch = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleContent.prototype, "movable", {
	        get: function () {
	            return this._movable;
	        },
	        set: function (value) {
	            this._movable = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 折叠或展开控件。
	     * @param duration 动画时间(可选)。
	     * @param onStep 动画执行期间单步的回调函数(可选)。
	     * @returns 返回控件本身。
	     */
	    TitleContent.prototype.triggerCollapsed = function (duration, onStep) {
	        var _this = this;
	        var value = !this._collapsed;
	        if (this._inited) {
	            if (duration > 0) {
	                var minH = this.topPadding + this.bottomPadding + this.titleH;
	                var maxH = minH + this.contentH;
	                var h = value ? minH : maxH;
	                this._collapsed = false;
	                this.relayoutChildren();
	                this._animating = true;
	                this.h = value ? maxH : minH;
	                this.resizeTo(this.w, h, duration).onComplete(function (evt) {
	                    _this.collapsed = value;
	                    _this._animating = false;
	                }).onUpdate(function () {
	                    if (onStep) {
	                        onStep();
	                    }
	                });
	            }
	            else {
	                this.collapsed = value;
	                this.relayoutChildren();
	            }
	        }
	        else {
	            this._collapsed = value;
	        }
	        return this;
	    };
	    Object.defineProperty(TitleContent.prototype, "collapsed", {
	        get: function () {
	            return this._collapsed;
	        },
	        /**
	         * collapsed 控件当前折叠或展开的状态。
	         */
	        set: function (value) {
	            if (this._inited) {
	                if (this._collapsed !== value) {
	                    this._collapsed = value;
	                    if (value) {
	                        this.dispatchEvent(Events.createAnyEvent(Events.COLLAPSE));
	                    }
	                    else {
	                        this.dispatchEvent(Events.createAnyEvent(Events.EXPAND));
	                    }
	                }
	            }
	            else {
	                this._collapsed = value;
	            }
	            this.reComputeH();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleContent.prototype, "titleWidget", {
	        /**
	         * 标题控件。
	         */
	        get: function () {
	            return this._titleWidget;
	        },
	        set: function (value) {
	            if (this._titleWidget) {
	                this.removeChild(this._titleWidget);
	            }
	            if (value) {
	                this.addChild(value);
	                if (!this.titleH) {
	                    this.titleH = value.h;
	                }
	            }
	            this._titleWidget = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleContent.prototype, "contentWidget", {
	        /**
	         * 内容控件。
	         */
	        get: function () {
	            return this._contentWidget;
	        },
	        set: function (value) {
	            if (this._contentWidget) {
	                this.removeChild(this._contentWidget);
	            }
	            if (value) {
	                this.addChild(value);
	                if (!this.contentH) {
	                    this.contentH = value.h;
	                }
	            }
	            this._contentWidget = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TitleContent.prototype.drawChildren = function (ctx) {
	        ctx.save();
	        ctx.beginPath();
	        ctx.rect(0, 0, this.w, this.h);
	        ctx.clip();
	        _super.prototype.drawChildren.call(this, ctx);
	        ctx.restore();
	        return this;
	    };
	    TitleContent.prototype.onInit = function () {
	        _super.prototype.onInit.call(this);
	        if (this._movable) {
	            this._titleWidget.useBehavior("movable", { moveParent: true });
	        }
	    };
	    TitleContent.prototype.reComputeH = function () {
	        var contentH = (!this._collapsed ? this.contentH : 0);
	        this.h = contentH + this.titleH + this.topPadding + this.bottomPadding;
	    };
	    TitleContent.prototype.relayoutChildren = function () {
	        this.requestRedraw();
	        if (this._animating) {
	            return this.getLayoutRect();
	        }
	        if (this.contentH < 1) {
	            this.contentH = this.h - this.topPadding - this.bottomPadding - this.titleH;
	        }
	        this.reComputeH();
	        var r = this.getLayoutRect();
	        var titleWidget = this._titleWidget;
	        var contentWidget = this._contentWidget;
	        if (titleWidget) {
	            titleWidget.moveResizeTo(r.x, r.y, r.w, this.titleH);
	            titleWidget.relayoutChildren();
	        }
	        if (contentWidget) {
	            if (this._collapsed) {
	                contentWidget.visible = false;
	            }
	            else {
	                var y = r.y + this.titleH;
	                contentWidget.visible = true;
	                contentWidget.moveResizeTo(r.x, y, r.w, this.contentH);
	                contentWidget.relayoutChildren();
	            }
	        }
	        return r;
	    };
	    TitleContent.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._movable = false;
	        this._collapsed = false;
	        this._titleWidget = null;
	        this._contentWidget = null;
	    };
	    TitleContent.prototype.getDefProps = function () {
	        return TitleContent.defProps;
	    };
	    TitleContent.create = function (options) {
	        return TitleContent.rBin.create().reset(TitleContent.TYPE, options);
	    };
	    TitleContent.defProps = Object.assign({}, widget_1.Widget.defProps, { _movable: false, _th: 30, _ch: 0 });
	    TitleContent.TYPE = "title-content";
	    TitleContent.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleContent(); });
	    return TitleContent;
	}(widget_1.Widget));
	exports.TitleContent = TitleContent;
	;
	widget_factory_1.WidgetFactory.register(TitleContent.TYPE, TitleContent.create);


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var rect_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(19);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 可折叠的标题控件，点击折叠图片或双击时折叠或展开。
	 * 只能用于TitleContent的titleWidget。
	 *
	 */
	var CollapsableTitle = (function (_super) {
	    __extends(CollapsableTitle, _super);
	    function CollapsableTitle() {
	        _super.call(this, CollapsableTitle.TYPE);
	    }
	    Object.defineProperty(CollapsableTitle.prototype, "collapsed", {
	        get: function () {
	            var titleContent = this.parent;
	            return titleContent.collapsed;
	        },
	        set: function (value) {
	            var titleContent = this.parent;
	            titleContent.collapsed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollapsableTitle.prototype.trigger = function () {
	        var titleContent = this.parent;
	        var collapsed = !titleContent.collapsed;
	        if (this.onClickTrigger) {
	            this.onClickTrigger(collapsed);
	        }
	    };
	    CollapsableTitle.prototype.getFgImageRect = function (style) {
	        var w = this.clientH;
	        return rect_1.Rect.rect.init(this.leftPadding, this.topPadding, w, w);
	    };
	    CollapsableTitle.prototype.getTextRect = function (style) {
	        var w = this.clientH;
	        return rect_1.Rect.rect.init(this.leftPadding + w, this.topPadding, this.clientW - w, this.clientH);
	    };
	    CollapsableTitle.prototype.getStyleType = function () {
	        return this._styleType || this.collapsed ? "collapsable-title.collapsed" : "collapsable-title.expanded";
	    };
	    CollapsableTitle.prototype.dispatchDblClick = function (evt) {
	        _super.prototype.dispatchDblClick.call(this, evt);
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        this.trigger();
	    };
	    CollapsableTitle.prototype.dispatchClick = function (evt) {
	        _super.prototype.dispatchClick.call(this, evt);
	        if (!this._enable || !this._sensitive) {
	            return;
	        }
	        var p = this.toLocalPoint(point_1.Point.point.copy(evt));
	        if (p.x < this.h) {
	            this.trigger();
	        }
	    };
	    CollapsableTitle.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this.onClickTrigger = null;
	    };
	    CollapsableTitle.create = function (options) {
	        return CollapsableTitle.rBin.create().reset(CollapsableTitle.TYPE, options);
	    };
	    CollapsableTitle.TYPE = "collapsable-title";
	    CollapsableTitle.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new CollapsableTitle(); });
	    return CollapsableTitle;
	}(widget_1.Widget));
	exports.CollapsableTitle = CollapsableTitle;
	;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var Ruler = (function (_super) {
	    __extends(Ruler, _super);
	    function Ruler(type) {
	        _super.call(this, type);
	        this.scale = 1;
	        this.originX = 0;
	        this.originY = 0;
	        this.pointerX = 0;
	        this.pointerY = 0;
	    }
	    Object.defineProperty(Ruler.prototype, "originX", {
	        get: function () {
	            return this._originX;
	        },
	        set: function (value) {
	            this._originX = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Ruler.prototype, "originY", {
	        get: function () {
	            return this._originY;
	        },
	        set: function (value) {
	            this._originY = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Ruler.prototype, "scale", {
	        get: function () {
	            return this._scale;
	        },
	        set: function (value) {
	            this._scale = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Ruler.prototype, "pointerX", {
	        get: function () {
	            return this._pointerX;
	        },
	        set: function (value) {
	            this._pointerX = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Ruler.prototype, "pointerY", {
	        get: function () {
	            return this._pointerY;
	        },
	        set: function (value) {
	            this._pointerY = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ruler.prototype.setPointer = function (x, y) {
	        this._pointerX = x;
	        this._pointerY = y;
	        this.requestRedraw();
	        return this;
	    };
	    Ruler.prototype.setOrigin = function (x, y) {
	        this._originX = x;
	        this._originY = y;
	        this.requestRedraw();
	        return this;
	    };
	    Ruler.prototype.drawBackground = function (ctx, style) {
	        ctx.lineWidth = 1;
	        ctx.font = style.font;
	        ctx.textAlign = "left";
	        ctx.textBaseline = "middle";
	        ctx.strokeStyle = style.lineColor;
	        ctx.fillStyle = style.textColor;
	        ctx.beginPath();
	        this.drawColorBackground(ctx, style);
	        return this;
	    };
	    Ruler.SIZE = 10;
	    return Ruler;
	}(widget_1.Widget));
	exports.Ruler = Ruler;
	;
	var VRuler = (function (_super) {
	    __extends(VRuler, _super);
	    function VRuler() {
	        _super.call(this, VRuler.TYPE);
	    }
	    VRuler.prototype.drawColorBackground = function (ctx, style) {
	        var h = this.w;
	        var w = this.h;
	        var ox = this.originX;
	        var oy = this.originY;
	        var i = 0;
	        var x = 0;
	        var y = 0;
	        var fh = h;
	        var th = h / 3;
	        var hh = h / 2;
	        var scale = this.scale;
	        var rs = Ruler.SIZE;
	        var pixels = Math.floor(10 / scale);
	        var scaledPixels = pixels * scale;
	        ctx.translate(0, oy);
	        ctx.rotate(Math.PI * 0.5);
	        ctx.translate(0, -h);
	        function getH(i) {
	            if (i % 10 === 0) {
	                return fh;
	            }
	            else if (i % 5 === 0) {
	                return hh;
	            }
	            else {
	                return th;
	            }
	        }
	        ox = oy;
	        /////////////////////////////////	
	        ctx.beginPath();
	        var n = Math.floor((w - ox) / scaledPixels);
	        for (i = 0; i < n; i++) {
	            h = getH(i);
	            x = i * scaledPixels;
	            if ((x + ox) < 0)
	                continue;
	            ctx.moveTo(x + 0.5, 0);
	            ctx.lineTo(x + 0.5, h);
	        }
	        ctx.stroke();
	        for (i = 0; i < n; i++) {
	            x = i * scaledPixels;
	            if ((x + ox) < 0)
	                continue;
	            if (i % 10 === 0) {
	                var str = i * pixels;
	                x = x;
	                y = fh;
	                ctx.save();
	                ctx.translate(x, y);
	                ctx.rotate(Math.PI);
	                ctx.fillText(str, 5, th);
	                ctx.restore();
	            }
	        }
	        /////////////////////////////////	
	        ctx.beginPath();
	        var n = Math.floor((ox - rs) / scaledPixels);
	        for (i = 1; i < n; i++) {
	            h = getH(i);
	            x = -i * scaledPixels;
	            ctx.moveTo(x + 0.5, 0);
	            ctx.lineTo(x + 0.5, h);
	        }
	        ctx.stroke();
	        for (i = 1; i < n; i++) {
	            x = -i * scaledPixels;
	            if (i % 10 === 0) {
	                var str = -i * pixels;
	                x = x;
	                y = fh;
	                ctx.save();
	                ctx.translate(x, y);
	                ctx.rotate(Math.PI);
	                ctx.fillText(str, 5, th);
	                ctx.restore();
	            }
	        }
	        /////////////////////////////////	
	        h = fh;
	        x = this.pointerY - oy;
	        ctx.fillStyle = style.foreGroundColor;
	        ctx.beginPath();
	        ctx.moveTo(x - th, hh);
	        ctx.lineTo(x + th, hh);
	        ctx.lineTo(x, 0);
	        ctx.lineTo(x - th, hh);
	        ctx.fill();
	        return this;
	    };
	    VRuler.prototype.relayout = function () {
	        this.moveTo(0, 0, 0);
	        this.resizeTo(this.w, this.parent.h, 0);
	    };
	    VRuler.create = function (options) {
	        return VRuler.recycleBin.create().reset(VRuler.TYPE, options);
	    };
	    VRuler.TYPE = "vruler";
	    VRuler.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new VRuler(); });
	    return VRuler;
	}(Ruler));
	exports.VRuler = VRuler;
	;
	widget_factory_1.WidgetFactory.register(VRuler.TYPE, VRuler.create);
	var HRuler = (function (_super) {
	    __extends(HRuler, _super);
	    function HRuler() {
	        _super.call(this, HRuler.TYPE);
	    }
	    HRuler.prototype.drawColorBackground = function (ctx, style) {
	        var w = this.w;
	        var h = this.h;
	        var ox = this.originX;
	        var oy = this.originY;
	        var i = 0;
	        var x = 0;
	        var fh = h;
	        var th = h / 3;
	        var hh = h / 2;
	        var scale = this.scale;
	        var rs = Ruler.SIZE;
	        var pixels = Math.floor(10 / scale);
	        var scaledPixels = pixels * scale;
	        ctx.translate(ox, h);
	        function getH(i) {
	            if (i % 10 === 0) {
	                return fh;
	            }
	            else if (i % 5 === 0) {
	                return hh;
	            }
	            else {
	                return th;
	            }
	        }
	        /////////////////////////////////	
	        ctx.beginPath();
	        var n = Math.floor((w - ox) / scaledPixels);
	        for (i = 0; i < n; i++) {
	            h = getH(i);
	            x = i * scaledPixels;
	            if ((x + ox) < 0)
	                continue;
	            ctx.moveTo(x + 0.5, 0);
	            ctx.lineTo(x + 0.5, -h);
	        }
	        ctx.stroke();
	        for (i = 0; i < n; i++) {
	            x = i * scaledPixels;
	            if ((x + ox) < 0)
	                continue;
	            if (i % 10 === 0) {
	                var str = i * pixels;
	                ctx.fillText(str, x + 5, -hh);
	            }
	        }
	        /////////////////////////////////	
	        ctx.beginPath();
	        var n = Math.floor((ox - rs) / scaledPixels);
	        for (i = 1; i < n; i++) {
	            h = getH(i);
	            x = -i * scaledPixels;
	            ctx.moveTo(x + 0.5, 0);
	            ctx.lineTo(x + 0.5, -h);
	        }
	        ctx.stroke();
	        for (i = 1; i < n; i++) {
	            x = -i * scaledPixels;
	            if (i % 10 === 0) {
	                var str = -i * pixels;
	                ctx.fillText(str, x + 5, -hh);
	            }
	        }
	        /////////////////////////////////	
	        h = fh;
	        x = this.pointerX - ox;
	        ctx.fillStyle = style.foreGroundColor;
	        ctx.beginPath();
	        ctx.moveTo(x - th, -hh);
	        ctx.lineTo(x + th, -hh);
	        ctx.lineTo(x, 0);
	        ctx.lineTo(x - th, -hh);
	        ctx.fill();
	        return this;
	    };
	    HRuler.prototype.relayout = function () {
	        this.moveTo(0, 0, 0);
	        this.resizeTo(this.parent.w, this.h, 0);
	    };
	    HRuler.create = function (options) {
	        return HRuler.recycleBin.create().reset(HRuler.TYPE, options);
	    };
	    HRuler.TYPE = "hruler";
	    HRuler.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new HRuler(); });
	    return HRuler;
	}(Ruler));
	exports.HRuler = HRuler;
	;
	widget_factory_1.WidgetFactory.register(HRuler.TYPE, HRuler.create);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var label_1 = __webpack_require__(18);
	var title_value_1 = __webpack_require__(138);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TitleLabel = (function (_super) {
	    __extends(TitleLabel, _super);
	    function TitleLabel(type) {
	        _super.call(this, type || TitleLabel.TYPE);
	    }
	    TitleLabel.prototype.createValueWidget = function (options) {
	        return label_1.Label.create(options);
	    };
	    TitleLabel.create = function (options) {
	        return TitleLabel.recycleBin.create().reset(TitleLabel.TYPE, options);
	    };
	    TitleLabel.TYPE = "title-label";
	    TitleLabel.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleLabel(); });
	    return TitleLabel;
	}(title_value_1.TitleValue));
	exports.TitleLabel = TitleLabel;
	;
	widget_factory_1.WidgetFactory.register(TitleLabel.TYPE, TitleLabel.create);


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var label_1 = __webpack_require__(18);
	var widget_1 = __webpack_require__(19);
	var linear_layouter_1 = __webpack_require__(131);
	var TitleValue = (function (_super) {
	    __extends(TitleValue, _super);
	    function TitleValue(type) {
	        _super.call(this, type);
	    }
	    Object.defineProperty(TitleValue.prototype, "title", {
	        get: function () {
	            return this._title;
	        },
	        set: function (value) {
	            this._title = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleValue.prototype, "titleW", {
	        get: function () {
	            return this._titleW;
	        },
	        set: function (value) {
	            this._titleW = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleValue.prototype, "valueW", {
	        get: function () {
	            return this._valueW;
	        },
	        set: function (value) {
	            this._valueW = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleValue.prototype, "titleWidget", {
	        get: function () {
	            return this._titleWidget;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleValue.prototype, "valueWidget", {
	        get: function () {
	            return this._valueWidget;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleValue.prototype, "value", {
	        get: function () {
	            return this._valueWidget ? this.valueWidget.value : this._value;
	        },
	        set: function (value) {
	            this._value = value;
	            if (this._valueWidget) {
	                this._valueWidget.value = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /*
	     * Child must override
	     */
	    TitleValue.prototype.createValueWidget = function (options) {
	        return null;
	    };
	    TitleValue.prototype.onInit = function () {
	        _super.prototype.onInit.call(this);
	        this.titleWidget.text = this._title;
	        this.titleWidget.layoutParam = linear_layouter_1.LinearLayouterParam.create({ w: this._titleW, h: "100%" });
	        this.valueWidget.layoutParam = linear_layouter_1.LinearLayouterParam.create({ w: this._valueW, h: "100%" });
	    };
	    TitleValue.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this.childrenLayouter = linear_layouter_1.LinearLayouter.createH({ spacing: 5 });
	        var titleWidget = label_1.Label.create();
	        this.addChild(titleWidget);
	        this._titleWidget = titleWidget;
	        var valueWidget = this.createValueWidget();
	        this.addChild(valueWidget);
	        this._valueWidget = valueWidget;
	    };
	    TitleValue.prototype.getDefProps = function () {
	        return TitleValue.defProps;
	    };
	    TitleValue.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._titleWidget = null;
	        this._valueWidget = null;
	    };
	    TitleValue.defProps = Object.assign({}, widget_1.Widget.defProps, { _lp: 2, _tp: 2, _rp: 2, _bp: 2,
	        _title: null, _titleW: 60, _valueW: 60 });
	    return TitleValue;
	}(widget_1.Widget));
	exports.TitleValue = TitleValue;
	;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var edit_1 = __webpack_require__(17);
	var title_value_1 = __webpack_require__(138);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TitleEdit = (function (_super) {
	    __extends(TitleEdit, _super);
	    function TitleEdit(type) {
	        _super.call(this, type || TitleEdit.TYPE);
	    }
	    Object.defineProperty(TitleEdit.prototype, "inputFilter", {
	        get: function () {
	            return this._inputFilter;
	        },
	        set: function (value) {
	            this._inputFilter = value;
	            if (this._valueWidget) {
	                this._valueWidget.set({ inputFilter: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleEdit.prototype, "inputType", {
	        get: function () {
	            return this._inputType;
	        },
	        set: function (value) {
	            this._inputType = value;
	            if (this._valueWidget) {
	                this._valueWidget.set({ inputType: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleEdit.prototype, "inputTips", {
	        get: function () {
	            return this._inputTips;
	        },
	        set: function (value) {
	            this._inputTips = value;
	            if (this._valueWidget) {
	                this._valueWidget.set({ inputTips: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TitleEdit.prototype.createValueWidget = function (options) {
	        var opts = options || {};
	        if (this._inputTips) {
	            opts.inputTips = this._inputTips;
	        }
	        if (this._inputType) {
	            opts.inputType = this._inputType;
	        }
	        if (this._inputFilter) {
	            opts.inputFilter = this._inputFilter;
	        }
	        return edit_1.Edit.create(opts);
	    };
	    TitleEdit.create = function (options) {
	        return TitleEdit.recycleBin.create().reset(TitleEdit.TYPE, options);
	    };
	    TitleEdit.TYPE = "title-edit";
	    TitleEdit.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleEdit(); });
	    return TitleEdit;
	}(title_value_1.TitleValue));
	exports.TitleEdit = TitleEdit;
	;
	widget_factory_1.WidgetFactory.register(TitleEdit.TYPE, TitleEdit.create);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var slider_1 = __webpack_require__(94);
	var title_value_1 = __webpack_require__(138);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TitleSlider = (function (_super) {
	    __extends(TitleSlider, _super);
	    function TitleSlider(type) {
	        _super.call(this, type || TitleSlider.TYPE);
	    }
	    TitleSlider.prototype.createValueWidget = function (options) {
	        return slider_1.Slider.create(options);
	    };
	    TitleSlider.create = function (options) {
	        return TitleSlider.recycleBin.create().reset(TitleSlider.TYPE, options);
	    };
	    TitleSlider.TYPE = "title-slider";
	    TitleSlider.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleSlider(); });
	    return TitleSlider;
	}(title_value_1.TitleValue));
	exports.TitleSlider = TitleSlider;
	;
	widget_factory_1.WidgetFactory.register(TitleSlider.TYPE, TitleSlider.create);


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var title_edit_1 = __webpack_require__(139);
	var widget_1 = __webpack_require__(19);
	var title_slider_1 = __webpack_require__(140);
	var title_text_area_1 = __webpack_require__(142);
	var title_combo_box_1 = __webpack_require__(143);
	var title_choosable_edit_1 = __webpack_require__(144);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var linear_layouter_1 = __webpack_require__(131);
	/**
	 * 属性编辑页，包装了各种TitleValue。
	 */
	var PropertyPage = (function (_super) {
	    __extends(PropertyPage, _super);
	    function PropertyPage() {
	        _super.call(this, PropertyPage.TYPE);
	    }
	    Object.defineProperty(PropertyPage.prototype, "itemH", {
	        get: function () {
	            return this._itemH;
	        },
	        set: function (value) {
	            this._itemH = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PropertyPage.prototype, "titleW", {
	        get: function () {
	            return this._titleW;
	        },
	        set: function (value) {
	            this._titleW = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PropertyPage.prototype, "valueW", {
	        get: function () {
	            return this._valueW;
	        },
	        set: function (value) {
	            this._valueW = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PropertyPage.prototype.addEdit = function (title, value, inputTips, inputType, inputFilter) {
	        var itemH = this.itemH;
	        var valueW = inputType === "number" ? "50%" : this.valueW;
	        var widget = title_edit_1.TitleEdit.create({
	            name: title,
	            title: title,
	            value: value,
	            valueW: valueW,
	            titleW: this.titleW,
	            inputType: inputType,
	            inputTips: inputTips,
	            inputFilter: inputFilter,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.addChoosableEdit = function (title, value, inputTips) {
	        var itemH = this.itemH;
	        var widget = title_choosable_edit_1.TitleChoosableEdit.create({
	            name: title,
	            title: title,
	            value: value,
	            inputTips: inputTips,
	            titleW: this.titleW,
	            valueW: this.valueW,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.addComboBox = function (title, value) {
	        var itemH = this.itemH;
	        var widget = title_combo_box_1.TitleComboBox.create({
	            name: title,
	            title: title,
	            value: value,
	            titleW: this.titleW,
	            valueW: this.valueW,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.addComboBoxEditable = function (title, value) {
	        var itemH = this.itemH;
	        var widget = title_combo_box_1.TitleComboBoxEditable.create({
	            name: title,
	            title: title,
	            value: value,
	            titleW: this.titleW,
	            valueW: this.valueW,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.addSlider = function (title, value) {
	        var itemH = this.itemH;
	        var widget = title_slider_1.TitleSlider.create({
	            name: title,
	            title: title,
	            value: value,
	            titleW: this.titleW,
	            valueW: this.valueW,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.addTextArea = function (title, value, h) {
	        var itemH = h || (this.itemH * 4);
	        var widget = title_text_area_1.TitleTextArea.create({
	            name: title,
	            title: title,
	            value: value,
	            titleW: this.titleW,
	            valueW: this.valueW,
	            layoutParam: linear_layouter_1.LinearLayouterParam.create({ h: itemH })
	        });
	        this.addChild(widget, true);
	        return widget;
	    };
	    PropertyPage.prototype.findByTitle = function (title) {
	        return this.findChildByName(title);
	    };
	    PropertyPage.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this.childrenLayouter = linear_layouter_1.LinearLayouter.createV({ spacing: 5 });
	    };
	    PropertyPage.prototype.getDefProps = function () {
	        return PropertyPage.defProps;
	    };
	    PropertyPage.create = function (options) {
	        return PropertyPage.rBin.create().reset(PropertyPage.TYPE, options);
	    };
	    PropertyPage.defProps = Object.assign({}, widget_1.Widget.defProps, { _itemH: 30, _titleW: "60px", _valueW: "100%" });
	    PropertyPage.TYPE = "property-page";
	    PropertyPage.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new PropertyPage(); });
	    return PropertyPage;
	}(widget_1.Widget));
	exports.PropertyPage = PropertyPage;
	;
	widget_factory_1.WidgetFactory.register(PropertyPage.TYPE, PropertyPage.create);


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var edit_1 = __webpack_require__(17);
	var title_value_1 = __webpack_require__(138);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TitleTextArea = (function (_super) {
	    __extends(TitleTextArea, _super);
	    function TitleTextArea(type) {
	        _super.call(this, type || TitleTextArea.TYPE);
	    }
	    Object.defineProperty(TitleTextArea.prototype, "inputTips", {
	        get: function () {
	            return this._inputTips;
	        },
	        set: function (value) {
	            this._inputTips = value;
	            if (this._valueWidget) {
	                this._valueWidget.set({ inputTips: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TitleTextArea.prototype.createValueWidget = function (options) {
	        var opts = options || {};
	        if (this._inputTips) {
	            opts.inputTips = this._inputTips;
	        }
	        opts.multiLines = true;
	        return edit_1.Edit.create(opts);
	    };
	    TitleTextArea.create = function (options) {
	        return TitleTextArea.recycleBin.create().reset(TitleTextArea.TYPE, options);
	    };
	    TitleTextArea.TYPE = "title-text-area";
	    TitleTextArea.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleTextArea(); });
	    return TitleTextArea;
	}(title_value_1.TitleValue));
	exports.TitleTextArea = TitleTextArea;
	;
	widget_factory_1.WidgetFactory.register(TitleTextArea.TYPE, TitleTextArea.create);


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var title_value_1 = __webpack_require__(138);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var combo_box_1 = __webpack_require__(110);
	var TitleComboBoxBase = (function (_super) {
	    __extends(TitleComboBoxBase, _super);
	    function TitleComboBoxBase(type) {
	        _super.call(this, type);
	    }
	    Object.defineProperty(TitleComboBoxBase.prototype, "itemH", {
	        get: function () {
	            var comboBox = this._valueWidget;
	            return comboBox.itemH;
	        },
	        set: function (value) {
	            var comboBox = this._valueWidget;
	            comboBox.itemH = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TitleComboBoxBase.prototype.resetOptions = function () {
	        var comboBox = this._valueWidget;
	        comboBox.resetOptions();
	        return this;
	    };
	    TitleComboBoxBase.prototype.addOption = function (text, value, imageURL, color) {
	        var comboBox = this._valueWidget;
	        comboBox.addOption(text, value, imageURL, color);
	        return this;
	    };
	    return TitleComboBoxBase;
	}(title_value_1.TitleValue));
	exports.TitleComboBoxBase = TitleComboBoxBase;
	var TitleComboBox = (function (_super) {
	    __extends(TitleComboBox, _super);
	    function TitleComboBox(type) {
	        _super.call(this, type || TitleComboBox.TYPE);
	    }
	    TitleComboBox.prototype.createValueWidget = function (options) {
	        return combo_box_1.ComboBox.create(options);
	    };
	    TitleComboBox.create = function (options) {
	        return TitleComboBox.recycleBin.create().reset(TitleComboBox.TYPE, options);
	    };
	    TitleComboBox.TYPE = "title-combo-box";
	    TitleComboBox.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleComboBox(); });
	    return TitleComboBox;
	}(TitleComboBoxBase));
	exports.TitleComboBox = TitleComboBox;
	;
	widget_factory_1.WidgetFactory.register(TitleComboBox.TYPE, TitleComboBox.create);
	var TitleComboBoxEditable = (function (_super) {
	    __extends(TitleComboBoxEditable, _super);
	    function TitleComboBoxEditable(type) {
	        _super.call(this, type || TitleComboBoxEditable.TYPE);
	    }
	    TitleComboBoxEditable.prototype.createValueWidget = function (options) {
	        return combo_box_1.ComboBoxEditable.create(options);
	    };
	    TitleComboBoxEditable.create = function (options) {
	        return TitleComboBoxEditable.recycleBin.create().reset(TitleComboBoxEditable.TYPE, options);
	    };
	    TitleComboBoxEditable.TYPE = "title-combo-box-editable";
	    TitleComboBoxEditable.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleComboBoxEditable(); });
	    return TitleComboBoxEditable;
	}(TitleComboBoxBase));
	exports.TitleComboBoxEditable = TitleComboBoxEditable;
	;
	widget_factory_1.WidgetFactory.register(TitleComboBoxEditable.TYPE, TitleComboBoxEditable.create);


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var title_value_1 = __webpack_require__(138);
	var choosable_edit_1 = __webpack_require__(145);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	var TitleChoosableEdit = (function (_super) {
	    __extends(TitleChoosableEdit, _super);
	    function TitleChoosableEdit(type) {
	        _super.call(this, type || TitleChoosableEdit.TYPE);
	    }
	    Object.defineProperty(TitleChoosableEdit.prototype, "onChoose", {
	        get: function () {
	            var edit = this._valueWidget;
	            return edit.onChoose;
	        },
	        set: function (value) {
	            var edit = this._valueWidget;
	            edit.onChoose = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TitleChoosableEdit.prototype, "inputTips", {
	        get: function () {
	            return this._inputTips;
	        },
	        set: function (value) {
	            this._inputTips = value;
	            if (this._valueWidget) {
	                this._valueWidget.set({ inputTips: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TitleChoosableEdit.prototype.createValueWidget = function (options) {
	        return choosable_edit_1.ChoosableEdit.create();
	    };
	    TitleChoosableEdit.create = function (options) {
	        return TitleChoosableEdit.recycleBin.create().reset(TitleChoosableEdit.TYPE, options);
	    };
	    TitleChoosableEdit.TYPE = "title-choosable-edit";
	    TitleChoosableEdit.recycleBin = new recyclable_creator_1.RecyclableCreator(function () { return new TitleChoosableEdit(); });
	    return TitleChoosableEdit;
	}(title_value_1.TitleValue));
	exports.TitleChoosableEdit = TitleChoosableEdit;
	;
	widget_factory_1.WidgetFactory.register(TitleChoosableEdit.TYPE, TitleChoosableEdit.create);


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var edit_1 = __webpack_require__(17);
	var button_1 = __webpack_require__(93);
	var widget_1 = __webpack_require__(19);
	var Events = __webpack_require__(6);
	var widget_factory_1 = __webpack_require__(23);
	var recyclable_creator_1 = __webpack_require__(82);
	/**
	 * 编辑器+选择按钮。
	 */
	var ChoosableEdit = (function (_super) {
	    __extends(ChoosableEdit, _super);
	    function ChoosableEdit() {
	        _super.call(this, ChoosableEdit.TYPE);
	    }
	    Object.defineProperty(ChoosableEdit.prototype, "inputTips", {
	        get: function () {
	            return this._inputTips;
	        },
	        set: function (value) {
	            this._inputTips = value;
	            if (this._edit) {
	                this._edit.set({ inputTips: value });
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ChoosableEdit.prototype, "value", {
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
	    ChoosableEdit.prototype.relayoutChildren = function () {
	        this.requestRedraw();
	        if (this._edit && this._button) {
	            var x = this.leftPadding;
	            var y = this.topPadding;
	            var h = this.clientH;
	            var w = this.clientW - this.h - 6;
	            this._edit.moveResizeTo(x, y, w, h, 0);
	            w = this.h;
	            x = this.w - w - 4;
	            this._button.moveResizeTo(x, y, w, h, 0);
	        }
	        return this.getLayoutRect();
	    };
	    ChoosableEdit.prototype.dispose = function () {
	        this._edit = null;
	        this._button = null;
	        _super.prototype.dispose.call(this);
	    };
	    ChoosableEdit.prototype.onReset = function () {
	        var _this = this;
	        _super.prototype.onReset.call(this);
	        this.padding = 0;
	        this.onChoose = null;
	        this._edit = edit_1.Edit.create();
	        this.addChild(this._edit);
	        this._edit.on(Events.CHANGE, function (evt) {
	            _this.dispatchEvent(evt);
	        });
	        this._button = button_1.Button.create({ text: "..." });
	        this.addChild(this._button);
	        this._button.on(Events.CLICK, function (evt) {
	            if (_this.onChoose) {
	                _this.onChoose();
	            }
	        });
	    };
	    ChoosableEdit.create = function (options) {
	        return ChoosableEdit.rBin.create().reset(ChoosableEdit.TYPE, options);
	    };
	    ChoosableEdit.TYPE = "choosable.edit";
	    ChoosableEdit.rBin = new recyclable_creator_1.RecyclableCreator(function () {
	        return new ChoosableEdit();
	    });
	    return ChoosableEdit;
	}(widget_1.Widget));
	exports.ChoosableEdit = ChoosableEdit;
	;
	widget_factory_1.WidgetFactory.register(ChoosableEdit.TYPE, ChoosableEdit.create);


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var scroll_view_1 = __webpack_require__(99);
	var widget_factory_1 = __webpack_require__(23);
	var title_content_1 = __webpack_require__(134);
	var recyclable_creator_1 = __webpack_require__(82);
	var collapsable_title_1 = __webpack_require__(135);
	/**
	 * 管理多个页面，每个页面可以展开或折叠。
	 */
	var PropertySheets = (function (_super) {
	    __extends(PropertySheets, _super);
	    function PropertySheets() {
	        _super.call(this, PropertySheets.TYPE);
	    }
	    Object.defineProperty(PropertySheets.prototype, "titleH", {
	        get: function () {
	            return this._titleHeight;
	        },
	        /**
	         * titleH 标题控件的高度。
	         */
	        set: function (value) {
	            this._titleHeight = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PropertySheets.prototype, "childrenLayouter", {
	        get: function () {
	            return this._childrenLayouter;
	        },
	        set: function (layouter) {
	            console.log("set childrenLayouter not work for me.");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * 增加一个页面。
	     * @param title 标题文本。
	     * @param contentH 内容控件。
	     * @returns 返回新增加的TitleContent。
	     */
	    PropertySheets.prototype.addPage = function (title, contentWidget) {
	        var me = this;
	        var titleWidget = collapsable_title_1.CollapsableTitle.create({ text: title });
	        var titleContent = title_content_1.TitleContent.create({
	            collapsed: true,
	            titleWidget: titleWidget,
	            contentWidget: contentWidget,
	            titleH: this.titleH
	        });
	        titleWidget.onClickTrigger = function (collapsed) {
	            titleContent.collapsed = !titleContent.collapsed;
	            me.relayoutChildren();
	        };
	        this.addChild(titleContent);
	        return titleContent;
	    };
	    PropertySheets.prototype.computeDesireContentHeight = function () {
	        var h = 0;
	        this.children.forEach(function (child) {
	            if (child.visible) {
	                h += child.h;
	            }
	        });
	        return h;
	    };
	    PropertySheets.prototype.relayoutChildren = function () {
	        this.contentH = this.computeDesireContentHeight();
	        var r = this.getLayoutRect();
	        var w = r.w;
	        var x = r.x;
	        var y = r.y;
	        this.children.forEach(function (child) {
	            child.moveResizeTo(x, y, w, 0, 0);
	            child.relayoutChildren();
	            y += child.h;
	        });
	        this.contentWidth = r.w + this.leftPadding + this.rightPadding;
	        this.contentH = y + this.bottomPadding + 10;
	        return r;
	    };
	    PropertySheets.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this._titleHeight = 30;
	        this.dragToScroll = true;
	        this.slideToScroll = true;
	        this.scrollerOptions.scrollingX = false;
	    };
	    PropertySheets.create = function (options) {
	        return PropertySheets.rBin.create().reset(PropertySheets.TYPE, options);
	    };
	    PropertySheets.TYPE = "property-sheets";
	    PropertySheets.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new PropertySheets(); });
	    return PropertySheets;
	}(scroll_view_1.ScrollView));
	exports.PropertySheets = PropertySheets;
	;
	widget_factory_1.WidgetFactory.register(PropertySheets.TYPE, PropertySheets.create);


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var consts_1 = __webpack_require__(104);
	var layouter_1 = __webpack_require__(78);
	var TYPE = "dock";
	/**
	 * Dock布局器。
	 */
	var DockLayouter = (function (_super) {
	    __extends(DockLayouter, _super);
	    function DockLayouter() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(DockLayouter.prototype, "type", {
	        get: function () {
	            return TYPE;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DockLayouter.prototype.layoutChildren = function (widget, children, rect) {
	        var _this = this;
	        var r = rect.clone();
	        var arr = widget.children.forEach(function (child) {
	            if (r.w > 0 && r.h > 0) {
	                _this.layoutChild(child, r);
	            }
	        });
	        r.dispose();
	        return rect;
	    };
	    DockLayouter.prototype.layoutChild = function (child, r) {
	        var x = 0;
	        var y = 0;
	        var w = 0;
	        var h = 0;
	        var param = child.layoutParam;
	        if (param && param.type === TYPE && child.visible) {
	            switch (param.position) {
	                case consts_1.Direction.LEFT: {
	                    x = r.x;
	                    y = r.y;
	                    h = r.h;
	                    w = Math.min(r.w, param.size ? layouter_1.Layouter.evalValue(param.size, r.w) : child.w);
	                    r.x += w;
	                    r.w -= w;
	                    break;
	                }
	                case consts_1.Direction.RIGHT: {
	                    y = r.y;
	                    h = r.h;
	                    w = Math.min(r.w, param.size ? layouter_1.Layouter.evalValue(param.size, r.w) : child.w);
	                    x = r.x + r.w - w;
	                    r.w -= w;
	                    break;
	                }
	                case consts_1.Direction.BOTTOM: {
	                    x = r.x;
	                    w = r.w;
	                    h = Math.min(r.h, param.size ? layouter_1.Layouter.evalValue(param.size, r.h) : child.h);
	                    y = r.y + r.h - h;
	                    r.h -= h;
	                    break;
	                }
	                default: {
	                    x = r.x;
	                    y = r.y;
	                    w = r.w;
	                    h = Math.min(r.h, param.size ? layouter_1.Layouter.evalValue(param.size, r.h) : child.h);
	                    r.h -= h;
	                    r.y += h;
	                    break;
	                }
	            }
	            child.moveResizeTo(x, y, w, h);
	            child.relayoutChildren();
	        }
	    };
	    DockLayouter.prototype.createParam = function (options) {
	        return DockLayouterParam.create(options);
	    };
	    DockLayouter.create = function (options) {
	        var layouter = new DockLayouter();
	        return layouter.setOptions(options);
	    };
	    return DockLayouter;
	}(layouter_1.Layouter));
	exports.DockLayouter = DockLayouter;
	;
	layouter_1.LayouterFactory.register(TYPE, DockLayouter.create);
	/**
	 * Dock布局器的参数。
	 *
	 * 如果父控件使用DockLayouter布局器，则子控件需要把layoutParam设置为DockLayouterParam。
	 *
	 * 对于size参数：
	 * *.如果以px结尾，则直接取它的值。
	 * *.如果以%结尾，则表示剩余空间的宽度/高度的百分比。
	 *
	 */
	var DockLayouterParam = (function (_super) {
	    __extends(DockLayouterParam, _super);
	    function DockLayouterParam(position, size) {
	        _super.call(this, TYPE);
	        this.size = size;
	        this.position = position;
	    }
	    DockLayouterParam.create = function (opts) {
	        var options = opts || {};
	        return new DockLayouterParam(options.position, options.size || "");
	    };
	    return DockLayouterParam;
	}(layouter_1.LayouterParam));
	exports.DockLayouterParam = DockLayouterParam;
	;
	layouter_1.LayouterParamFactory.register(TYPE, DockLayouterParam.create);


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var group_1 = __webpack_require__(90);
	var dialog_1 = __webpack_require__(91);
	var label_1 = __webpack_require__(18);
	var edit_1 = __webpack_require__(17);
	var button_1 = __webpack_require__(93);
	var Events = __webpack_require__(6);
	var graphics_1 = __webpack_require__(25);
	var list_view_1 = __webpack_require__(111);
	var progress_bar_1 = __webpack_require__(95);
	var application_1 = __webpack_require__(120);
	var widget_1 = __webpack_require__(19);
	var widget_factory_1 = __webpack_require__(23);
	var consts_1 = __webpack_require__(104);
	var recyclable_creator_1 = __webpack_require__(82);
	var list_item_1 = __webpack_require__(113);
	var dock_layouter_1 = __webpack_require__(147);
	var linear_layouter_1 = __webpack_require__(131);
	var grid_layouter_1 = __webpack_require__(116);
	var simple_layouter_1 = __webpack_require__(114);
	var TitleOptions = (function () {
	    function TitleOptions(text, iconStyleType, hasCloseButton) {
	        this.h = 0;
	        this.text = text;
	        this.draggable = true;
	        this.iconStyleType = iconStyleType;
	        this.hasCloseButton = hasCloseButton;
	    }
	    return TitleOptions;
	}());
	exports.TitleOptions = TitleOptions;
	;
	var ButtonOption = (function () {
	    function ButtonOption() {
	    }
	    return ButtonOption;
	}());
	exports.ButtonOption = ButtonOption;
	var ButtonsOptions = (function () {
	    function ButtonsOptions() {
	        this.buttons = [];
	    }
	    Object.defineProperty(ButtonsOptions.prototype, "buttonCount", {
	        get: function () {
	            return this.buttons.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ButtonsOptions;
	}());
	exports.ButtonsOptions = ButtonsOptions;
	;
	var MessageBox = (function (_super) {
	    __extends(MessageBox, _super);
	    function MessageBox(type) {
	        _super.call(this, type || MessageBox.TYPE);
	        this._contentPadding = 10;
	    }
	    Object.defineProperty(MessageBox.prototype, "title", {
	        get: function () {
	            return this._title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageBox.prototype, "content", {
	        get: function () {
	            return this._content;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageBox.prototype, "buttons", {
	        get: function () {
	            return this._buttons;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MessageBox.prototype.initTitle = function (titleOptions) {
	        var w = this.w;
	        var win = this;
	        if (titleOptions) {
	            var title = group_1.Group.create({ styleType: "dialog.title-bg" });
	            var titleH = titleOptions.h || MessageBox.TITLE_H;
	            title.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.TOP, size: titleH });
	            title.childrenLayouter = linear_layouter_1.LinearLayouter.createH();
	            this.addChild(title);
	            if (titleOptions.draggable) {
	                title.useBehavior("movable", { moveParent: true });
	            }
	            if (titleOptions.iconStyleType) {
	                var icon = button_1.Button.create({ name: "icon", styleType: titleOptions.iconStyleType });
	                icon.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: 1, h: "100%", w: title.h });
	                title.addChild(icon);
	            }
	            if (titleOptions.text) {
	                var label = label_1.Label.create({ name: "text", text: titleOptions.text, styleType: "dialog.title-text" });
	                label.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: 2, h: "100%", w: w - titleH * 2 });
	                title.addChild(label);
	            }
	            if (titleOptions.hasCloseButton) {
	                var button = button_1.Button.create({ name: "close", styleType: "messagebox.button.close" });
	                button.layoutParam = linear_layouter_1.LinearLayouterParam.create({ position: -1, h: "100%", w: titleH });
	                title.addChild(button);
	                button.on(Events.CLICK, function (evt) {
	                    win.animateClose();
	                });
	            }
	            this._title = title;
	        }
	    };
	    MessageBox.prototype.initButtons = function (buttonsOptions) {
	        var w = this.w;
	        var win = this;
	        if (buttonsOptions && buttonsOptions.buttons) {
	            var buttons = group_1.Group.create();
	            var n = buttonsOptions.buttons.length;
	            var buttonsH = buttonsOptions.h || MessageBox.BUTTONS_H;
	            var margin = n < 2 ? w / (4 * n) : w / (8 * n);
	            buttons.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.BOTTOM, size: buttonsH });
	            buttons.childrenLayouter = grid_layouter_1.GridLayouter.create({
	                topMargin: 5,
	                bottomMargin: 5,
	                leftMargin: margin,
	                rightMargin: margin,
	                rows: 1,
	                cols: n
	            });
	            this.addChild(buttons);
	            buttonsOptions.buttons.forEach(function (iter) {
	                var b = button_1.Button.create({ text: iter.text, styleType: iter.styleType });
	                b.on(Events.CLICK, function (evt) {
	                    if (iter.onClick) {
	                        iter.onClick();
	                    }
	                    win.animateClose();
	                });
	                buttons.addChild(b);
	            });
	            this._buttons = buttons;
	        }
	        return this;
	    };
	    MessageBox.prototype.initContent = function (data) {
	        var content = group_1.Group.create();
	        content.layoutParam = dock_layouter_1.DockLayouterParam.create({ position: consts_1.Direction.BOTTOM, size: "100%" });
	        this.addChild(content);
	        if (data) {
	            content.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
	            var label = label_1.Label.create({ text: data, multiLineMode: true, padding: this._contentPadding });
	            label.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ w: "100%", h: "100%" });
	            content.addChild(label);
	        }
	        this._content = content;
	    };
	    MessageBox.prototype.createChildren = function (titleOptions, buttonsOptions, content) {
	        var vp = this.app.getViewPort();
	        var style = this._themeManager.get("messagebox.content", this.stateToString(widget_1.WidgetState.NORMAL));
	        if (this.w <= 10) {
	            var textW = graphics_1.Graphics.measureText(content, style.font);
	            var padding = this.leftPadding + this.rightPadding + this._contentPadding * 2;
	            var w = Math.min(vp.width, Math.max(60, textW + padding));
	            if (buttonsOptions) {
	                w = Math.max(w, buttonsOptions.buttonCount * 128);
	            }
	            this.w = w;
	        }
	        if (this.h < 10) {
	            var lines = graphics_1.Graphics.layoutText(content, this.w, style.font);
	            var n = lines ? lines.length : 0;
	            var padding = this.topPadding + this.bottomPadding + this._contentPadding * 2;
	            var h = n * style.fontSize * 1.5 + padding;
	            if (titleOptions) {
	                h += titleOptions.h || MessageBox.TITLE_H;
	            }
	            if (buttonsOptions) {
	                h += buttonsOptions.h || MessageBox.BUTTONS_H;
	            }
	            this.h = h;
	        }
	        this.initTitle(titleOptions);
	        this.initButtons(buttonsOptions);
	        this.initContent(content);
	    };
	    MessageBox.prototype.onReset = function () {
	        _super.prototype.onReset.call(this);
	        this.padding = 1;
	        this.childrenLayouter = dock_layouter_1.DockLayouter.create();
	    };
	    MessageBox.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        this._title = null;
	        this._content = null;
	        this._buttons = null;
	    };
	    MessageBox.prototype.open = function () {
	        _super.prototype.open.call(this);
	        this.grab();
	        this.moveToCenter();
	        return this;
	    };
	    MessageBox.prototype.animateClose = function () {
	        var _this = this;
	        this.opacityTo(0, 300).onComplete(function (evt) {
	            _this.close();
	        });
	    };
	    MessageBox.showMessage = function (msg, onClose, w) {
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var rw = Math.min(vp.w, w || 0);
	        var messageBox = MessageBox.create({ app: app, w: rw, h: 0 });
	        var buttonsOption = new ButtonsOptions();
	        buttonsOption.buttons.push({ styleType: "button.ok", text: "Close", onClick: null });
	        var titleOptions = new TitleOptions("Infomation", "messagebox.info.icon", true);
	        messageBox.createChildren(titleOptions, buttonsOption, msg);
	        messageBox.on(Events.CLOSE, onClose);
	        messageBox.open();
	    };
	    MessageBox.showConfirm = function (msg, onYes, onNo, w) {
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var rw = Math.min(vp.w, w || 0);
	        var messageBox = MessageBox.create({ app: app, w: rw, h: 0 });
	        var buttonsOption = new ButtonsOptions();
	        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: onNo });
	        buttonsOption.buttons.push({ styleType: "button.ok", text: "Yes", onClick: onYes });
	        var titleOptions = new TitleOptions("Question", "messagebox.question.icon", false);
	        messageBox.createChildren(titleOptions, buttonsOption, msg);
	        messageBox.open();
	    };
	    MessageBox.showToast = function (msg, duration, w) {
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var rw = Math.min(vp.w, w || 0);
	        var messageBox = MessageBox.create({ app: app, styleType: "messagebox.toast", w: rw, h: 0 });
	        messageBox.createChildren(null, null, msg);
	        messageBox.on(Events.POINTER_UP, function (evt) {
	            if (messageBox) {
	                this.animateClose();
	                messageBox = null;
	            }
	        });
	        setTimeout(function (evt) {
	            if (messageBox) {
	                messageBox.animateClose();
	                messageBox = null;
	            }
	        }, duration || 3000);
	        messageBox.open();
	    };
	    MessageBox.showProgress = function (msg, taskStart, onDone, w) {
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var rw = Math.min(vp.w, w || 0) || 200;
	        var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;
	        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
	        var buttonsOption = new ButtonsOptions();
	        buttonsOption.buttons.push({ styleType: "button.ok", text: "Close", onClick: null });
	        var titleOptions = new TitleOptions(msg, "messagebox.info.icon", false);
	        messageBox.createChildren(titleOptions, buttonsOption, null);
	        var group = messageBox.content;
	        var progressBar = progress_bar_1.ProgressBar.create();
	        group.padding = 10;
	        group.topPadding = 20;
	        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
	        progressBar.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "20px" });
	        var closeButton = messageBox.buttons.children[0];
	        closeButton.enable = false;
	        function onProgress(value) {
	            progressBar.value = value;
	            progressBar.requestRedraw();
	            if (value >= 1) {
	                onDone();
	                closeButton.enable = true;
	            }
	        }
	        group.addChild(progressBar);
	        messageBox.open();
	        taskStart(onProgress);
	    };
	    MessageBox.showInput = function (title, inputTips, value, isValueValid, onDone, inputType, w) {
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var rw = Math.min(vp.w, w || 0) || 200;
	        var rh = MessageBox.TITLE_H + MessageBox.BUTTONS_H + 50;
	        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
	        var buttonsOption = new ButtonsOptions();
	        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: null });
	        buttonsOption.buttons.push({ styleType: "button.ok", text: "OK", onClick: onOK });
	        var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
	        messageBox.createChildren(titleOptions, buttonsOption, null);
	        var group = messageBox.content;
	        var edit = edit_1.Edit.create({ inputTips: inputTips, value: value, inputType: inputType || "text" });
	        group.padding = 10;
	        group.topPadding = 15;
	        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
	        edit.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "25px" });
	        function onOK() {
	            onDone(edit.text);
	        }
	        edit.on(Events.CHANGING, function (evt) {
	            okButton.enable = isValueValid(evt.value);
	        });
	        var okButton = messageBox.buttons.children[1];
	        okButton.enable = isValueValid(value);
	        group.addChild(edit);
	        messageBox.open();
	    };
	    MessageBox.showChoice = function (title, data, multiple, onDone, w, h) {
	        var itemH = 30;
	        var app = application_1.Application.get();
	        var vp = app.getViewPort();
	        var contentH = Math.min(8, data.length) * itemH;
	        var rw = Math.min(vp.w, w || 0) || 300;
	        var rh = Math.min(vp.h, h || 0) || MessageBox.TITLE_H + MessageBox.BUTTONS_H + contentH + 30;
	        var messageBox = MessageBox.create({ app: app, w: rw, h: rh });
	        var buttonsOption = new ButtonsOptions();
	        buttonsOption.buttons.push({ styleType: "button.cancel", text: "Cancel", onClick: null });
	        buttonsOption.buttons.push({ styleType: "button.ok", text: "OK", onClick: onOK });
	        var titleOptions = new TitleOptions(title, "messagebox.info.icon", false);
	        messageBox.createChildren(titleOptions, buttonsOption, null);
	        var group = messageBox.content;
	        var listView = list_view_1.ListView.create({ itemH: itemH, dragToScroll: true });
	        group.padding = 5;
	        group.topPadding = 5;
	        group.childrenLayouter = simple_layouter_1.SimpleLayouter.create();
	        listView.layoutParam = simple_layouter_1.SimpleLayouterParam.create({ x: "center", y: "middle", w: "100%", h: "100%" });
	        data.forEach(function (iter) {
	            var item = list_item_1.ListItemCheckable.create({
	                multiCheckable: multiple,
	                iconURL: iter.iconURL,
	                text: iter.text,
	                userData: iter,
	                leftPadding: 2
	            });
	            listView.addChild(item, true);
	        });
	        listView.relayoutChildren();
	        function onOK() {
	            var ret = [];
	            listView.children.forEach(function (iter) {
	                if (iter.value) {
	                    ret.push(iter.userData);
	                }
	            });
	            onDone(ret);
	        }
	        group.addChild(listView);
	        messageBox.open();
	    };
	    MessageBox.create = function (options) {
	        return MessageBox.rBin.create().reset(MessageBox.TYPE, options);
	    };
	    MessageBox.TITLE_H = 25;
	    MessageBox.BUTTONS_H = 40;
	    MessageBox.MSG_FONT_SIZE = 12;
	    MessageBox.TYPE = "messagebox";
	    MessageBox.rBin = new recyclable_creator_1.RecyclableCreator(function () { return new MessageBox(); });
	    return MessageBox;
	}(dialog_1.Dialog));
	exports.MessageBox = MessageBox;
	;
	widget_factory_1.WidgetFactory.register(MessageBox.TYPE, MessageBox.create);


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var view_modal_default_1 = __webpack_require__(150);
	/**
	 * IViewModal的基本实现。如果不能满足要求，可以重载部分函数。
	 */
	var ViewModal = (function (_super) {
	    __extends(ViewModal, _super);
	    function ViewModal() {
	        _super.apply(this, arguments);
	    }
	    ViewModal.create = function (data) {
	        var viewModal = new ViewModal(data);
	        return viewModal;
	    };
	    return ViewModal;
	}(view_modal_default_1.ViewModalDefault));
	exports.ViewModal = ViewModal;
	;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var pointer = __webpack_require__(151);
	var emitter_1 = __webpack_require__(4);
	var Events = __webpack_require__(6);
	var ivalidation_rule_1 = __webpack_require__(153);
	var iview_modal_1 = __webpack_require__(81);
	var ViewModalDefault = (function (_super) {
	    __extends(ViewModalDefault, _super);
	    function ViewModalDefault(data) {
	        _super.call(this);
	        this._commands = {};
	        this._converters = {};
	        this._data = data || {};
	        this._validationRules = {};
	        this.isCollection = false;
	        this._ePropChange = Events.PropChangeEvent.create();
	    }
	    ViewModalDefault.prototype.getBindingMode = function () {
	        return iview_modal_1.BindingMode.TWO_WAY;
	    };
	    ViewModalDefault.prototype.onChange = function (callback) {
	        this.on(Events.PROP_DELETE, callback);
	        this.on(Events.PROP_CHANGE, callback);
	        return this;
	    };
	    ViewModalDefault.prototype.offChange = function (callback) {
	        this.off(Events.PROP_DELETE, callback);
	        this.off(Events.PROP_CHANGE, callback);
	        return this;
	    };
	    ViewModalDefault.prototype.notifyChange = function (type, path, value) {
	        this.dispatchEvent(this._ePropChange.init(type, { prop: path, value: value }));
	    };
	    ViewModalDefault.prototype.fixPath = function (path) {
	        if (path && path.charAt(0) !== '/') {
	            return '/' + path;
	        }
	        else {
	            return path;
	        }
	    };
	    ViewModalDefault.prototype.getProp = function (path, converterName) {
	        var value = pointer.get(this._data, this.fixPath(path));
	        return this.convert(converterName, value);
	    };
	    ViewModalDefault.prototype.delProp = function (path) {
	        pointer.remove(this._data, path);
	        this.notifyChange(Events.PROP_DELETE, this.fixPath(path), null);
	        return this;
	    };
	    ViewModalDefault.prototype.setProp = function (path, v, converterName, validationRule) {
	        var value = this.convertBack(converterName, v);
	        var validateResult = this.isValueValid(validationRule, value);
	        if (!validateResult.code) {
	            pointer.set(this._data, path, value);
	            this.notifyChange(Events.PROP_CHANGE, this.fixPath(path), value);
	        }
	        else {
	            console.log("invalid value");
	        }
	        return validateResult;
	        ;
	    };
	    ViewModalDefault.prototype.getCommand = function (name) {
	        return this._commands[name];
	    };
	    ViewModalDefault.prototype.canExecute = function (name) {
	        var ret = false;
	        var cmd = this.getCommand(name);
	        if (cmd && cmd.canExecute()) {
	            ret = true;
	        }
	        return ret;
	    };
	    ViewModalDefault.prototype.execCommand = function (name, args) {
	        var ret = false;
	        var cmd = this.getCommand(name);
	        if (cmd && cmd.canExecute()) {
	            ret = cmd.execute(args);
	        }
	        return ret;
	    };
	    ViewModalDefault.prototype.registerCommand = function (name, cmd) {
	        this._commands[name] = cmd;
	        return this;
	    };
	    ViewModalDefault.prototype.unregisterCommand = function (name, cmd) {
	        this._commands[name] = null;
	        return this;
	    };
	    ViewModalDefault.prototype.getValueConverter = function (name) {
	        return this._converters[name];
	    };
	    ViewModalDefault.prototype.registerValueConverter = function (name, converter) {
	        this._converters[name] = converter;
	        return this;
	    };
	    ViewModalDefault.prototype.unregisterValueConverter = function (name, converter) {
	        this._converters[name] = null;
	        return this;
	    };
	    ViewModalDefault.prototype.convert = function (converterName, value) {
	        var converter = converterName ? this.getValueConverter(converterName) : null;
	        return converter ? converter.convert(value) : value;
	    };
	    ViewModalDefault.prototype.convertBack = function (converterName, value) {
	        var converter = converterName ? this.getValueConverter(converterName) : null;
	        return converter ? converter.convertBack(value) : value;
	    };
	    ViewModalDefault.prototype.getValidationRule = function (name) {
	        return this._validationRules[name];
	    };
	    ViewModalDefault.prototype.registerValidationRule = function (name, validationRule) {
	        this._validationRules[name] = validationRule;
	        return this;
	    };
	    ViewModalDefault.prototype.unregisterValidationRule = function (name, validationRule) {
	        this._validationRules[name] = null;
	        return this;
	    };
	    ViewModalDefault.prototype.isValueValid = function (ruleName, value) {
	        var validationRule = ruleName ? this.getValidationRule(ruleName) : null;
	        return validationRule ? validationRule.validate(value) : ivalidation_rule_1.ValidationResult.validResult;
	    };
	    return ViewModalDefault;
	}(emitter_1.Emitter));
	exports.ViewModalDefault = ViewModalDefault;
	;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var each = __webpack_require__(152);
	module.exports = api;


	/**
	 * Convenience wrapper around the api.
	 * Calls `.get` when called with an `object` and a `pointer`.
	 * Calls `.set` when also called with `value`.
	 * If only supplied `object`, returns a partially applied function, mapped to the object.
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @param value
	 * @returns {*}
	 */

	function api (obj, pointer, value) {
	    // .set()
	    if (arguments.length === 3) {
	        return api.set(obj, pointer, value);
	    }
	    // .get()
	    if (arguments.length === 2) {
	        return api.get(obj, pointer);
	    }
	    // Return a partially applied function on `obj`.
	    var wrapped = api.bind(api, obj);

	    // Support for oo style
	    for (var name in api) {
	        if (api.hasOwnProperty(name)) {
	            wrapped[name] = api[name].bind(wrapped, obj);
	        }
	    }
	    return wrapped;
	}


	/**
	 * Lookup a json pointer in an object
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @returns {*}
	 */
	api.get = function get (obj, pointer) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);

	    for (var i = 0; i < refTokens.length; ++i) {
	        var tok = refTokens[i];
	        if (!(typeof obj == 'object' && tok in obj)) {
	            throw new Error('Invalid reference token: ' + tok);
	        }
	        obj = obj[tok];
	    }
	    return obj;
	};

	/**
	 * Sets a value on an object
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 * @param value
	 */
	api.set = function set (obj, pointer, value) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer),
	      nextTok = refTokens[0];

	    for (var i = 0; i < refTokens.length - 1; ++i) {
	        var tok = refTokens[i];
	        if (tok === '-' && Array.isArray(obj)) {
	          tok = obj.length;
	        }
	        nextTok = refTokens[i + 1];

	        if (!(tok in obj)) {
	            if (nextTok.match(/^(\d+|-)$/)) {
	                obj[tok] = [];
	            } else {
	                obj[tok] = {};
	            }
	        }
	        obj = obj[tok];
	    }
	    if (nextTok === '-' && Array.isArray(obj)) {
	      nextTok = obj.length;
	    }
	    obj[nextTok] = value;
	    return this;
	};

	/**
	 * Removes an attribute
	 *
	 * @param {Object} obj
	 * @param {String|Array} pointer
	 */
	api.remove = function (obj, pointer) {
	    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
	    var finalToken = refTokens[refTokens.length -1];
	    if (finalToken === undefined) {
	        throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
	    }
	    delete api.get(obj, refTokens.slice(0, -1))[finalToken];
	};

	/**
	 * Returns a (pointer -> value) dictionary for an object
	 *
	 * @param obj
	 * @param {function} descend
	 * @returns {}
	 */
	api.dict = function dict (obj, descend) {
	    var results = {};
	    api.walk(obj, function (value, pointer) {
	        results[pointer] = value;
	    }, descend);
	    return results;
	};

	/**
	 * Iterates over an object
	 * Iterator: function (value, pointer) {}
	 *
	 * @param obj
	 * @param {function} iterator
	 * @param {function} descend
	 */
	api.walk = function walk (obj, iterator, descend) {
	    var refTokens = [];

	    descend = descend || function (value) {
	        var type = Object.prototype.toString.call(value);
	        return type === '[object Object]' || type === '[object Array]';
	    };

	    (function next (cur) {
	        each(cur, function (value, key) {
	            refTokens.push(String(key));
	            if (descend(value)) {
	                next(value);
	            } else {
	                iterator(value, api.compile(refTokens));
	            }
	            refTokens.pop();
	        });
	    }(obj));
	};

	/**
	 * Tests if an object has a value for a json pointer
	 *
	 * @param obj
	 * @param pointer
	 * @returns {boolean}
	 */
	api.has = function has (obj, pointer) {
	    try {
	        api.get(obj, pointer);
	    } catch (e) {
	        return false;
	    }
	    return true;
	};

	/**
	 * Escapes a reference token
	 *
	 * @param str
	 * @returns {string}
	 */
	api.escape = function escape (str) {
	    return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
	};

	/**
	 * Unescapes a reference token
	 *
	 * @param str
	 * @returns {string}
	 */
	api.unescape = function unescape (str) {
	    return str.replace(/~1/g, '/').replace(/~0/g, '~');
	};

	/**
	 * Converts a json pointer into a array of reference tokens
	 *
	 * @param pointer
	 * @returns {Array}
	 */
	api.parse = function parse (pointer) {
	    if (pointer === '') { return []; }
	    if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
	    return pointer.substring(1).split(/\//).map(api.unescape);
	};

	/**
	 * Builds a json pointer from a array of reference tokens
	 *
	 * @param refTokens
	 * @returns {string}
	 */
	api.compile = function compile (refTokens) {
	    if (refTokens.length === 0) { return ''; }
	    return '/' + refTokens.map(api.escape).join('/');
	};


/***/ },
/* 152 */
/***/ function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;

	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};



/***/ },
/* 153 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * 数据有效性检查的结果。
	 */
	var ValidationResult = (function () {
	    function ValidationResult(code, message) {
	        this.code = code;
	        this.message = message;
	    }
	    /**
	     * 创建函数。
	     */
	    ValidationResult.create = function (code, message) {
	        return new ValidationResult(code, message);
	    };
	    /**
	     * 数据有效时，可以共用的结果，不能在运行时修改。
	     */
	    ValidationResult.validResult = ValidationResult.create(0, "valid");
	    /**
	     * 数据无效时，可以共用的结果，不能在运行时修改。
	     */
	    ValidationResult.invalidResult = ValidationResult.create(-1, "invalid");
	    return ValidationResult;
	}());
	exports.ValidationResult = ValidationResult;
	;


/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";
	var DelegateCommand = (function () {
	    function DelegateCommand(execute, canExecute) {
	        this._execute = execute;
	        this._canExecute = canExecute;
	    }
	    DelegateCommand.prototype.canExecute = function () {
	        return this._canExecute ? this._canExecute() : true;
	    };
	    DelegateCommand.prototype.execute = function (args) {
	        return this._execute(args);
	    };
	    DelegateCommand.create = function (execute, canExecute) {
	        return new DelegateCommand(execute, canExecute);
	    };
	    return DelegateCommand;
	}());
	exports.DelegateCommand = DelegateCommand;
	;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Events = __webpack_require__(6);
	var delegate_command_1 = __webpack_require__(154);
	var ivalidation_rule_1 = __webpack_require__(153);
	var view_modal_default_1 = __webpack_require__(150);
	/**
	 * 集合ViewModal。delProp/getProp/setProp操作当前的项。
	 */
	var CollectionViewModal = (function (_super) {
	    __extends(CollectionViewModal, _super);
	    function CollectionViewModal(data) {
	        _super.call(this, data);
	        this.isCollection = true;
	        this._collection = data;
	        var n = data.length;
	        var viewModalItems = [];
	        for (var i = 0; i < n; i++) {
	            viewModalItems.push(this.createItemViewModal(i));
	        }
	        this._current = 0;
	        this._viewModalItems = viewModalItems;
	    }
	    CollectionViewModal.prototype.getProp = function (path, converterName) {
	        var vm = this.currentViewModal;
	        return vm ? vm.getProp(path, converterName) : null;
	    };
	    CollectionViewModal.prototype.delProp = function (path) {
	        var vm = this.currentViewModal;
	        return vm ? vm.delProp(path) : this;
	    };
	    CollectionViewModal.prototype.setProp = function (path, value, converterName, validationRule) {
	        var vm = this.currentViewModal;
	        return vm ? vm.setProp(path, value, converterName, validationRule) : ivalidation_rule_1.ValidationResult.invalidResult;
	    };
	    CollectionViewModal.prototype.onItemsChange = function (callback) {
	        this.on(Events.ITEM_ADD, callback);
	        this.on(Events.ITEM_DELETE, callback);
	        return this;
	    };
	    CollectionViewModal.prototype.offItemsChange = function (callback) {
	        this.off(Events.ITEM_ADD, callback);
	        this.off(Events.ITEM_DELETE, callback);
	        return this;
	    };
	    CollectionViewModal.prototype.fixState = function () {
	        var n = this._collection.length;
	        if (this.current >= n) {
	            this.current = n - 1;
	        }
	        this._viewModalItems.forEach(function (item, index) {
	            item.index = index;
	        });
	    };
	    CollectionViewModal.prototype.addItem = function (data, index) {
	        var n = this._collection.length;
	        var index = index < n ? index : n;
	        this._collection.splice(index, 0, data);
	        this._viewModalItems.splice(index, 0, this.createItemViewModal(index));
	        this.fixState();
	        this.notifyChange(Events.ITEM_ADD, "/", index);
	        return this;
	    };
	    CollectionViewModal.prototype.removeItem = function (index) {
	        this._collection.splice(index, 1);
	        this._viewModalItems.splice(index, 1);
	        this.fixState();
	        this.notifyChange(Events.ITEM_DELETE, "/", index);
	        return this;
	    };
	    Object.defineProperty(CollectionViewModal.prototype, "collection", {
	        get: function () {
	            return this._collection;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CollectionViewModal.prototype, "currentViewModal", {
	        get: function () {
	            return this._viewModalItems[this._current];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CollectionViewModal.prototype, "total", {
	        get: function () {
	            return this._viewModalItems.length;
	        },
	        set: function (value) {
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CollectionViewModal.prototype, "current", {
	        get: function () {
	            return this._current;
	        },
	        set: function (value) {
	            this._current = Math.min(this._viewModalItems.length - 1, Math.max(0, value));
	            this.notifyChange(Events.PROP_CHANGE, "/", value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CollectionViewModal.prototype.getItemViewModal = function (index) {
	        var i = (index >= 0 && index < this._viewModalItems.length) ? index : this._current;
	        return this._viewModalItems[i];
	    };
	    CollectionViewModal.prototype.createItemViewModal = function (index) {
	        return ItemViewModal.create(this, index);
	    };
	    CollectionViewModal.create = function (data) {
	        var viewModal = new CollectionViewModal(data);
	        return viewModal;
	    };
	    return CollectionViewModal;
	}(view_modal_default_1.ViewModalDefault));
	exports.CollectionViewModal = CollectionViewModal;
	;
	/**
	 * 表示集合ViewModal中的单项ViewModal。
	 *
	 */
	var ItemViewModal = (function (_super) {
	    __extends(ItemViewModal, _super);
	    function ItemViewModal(collectionViewModal, index) {
	        _super.call(this, collectionViewModal.collection[index]);
	        this.isCollection = false;
	        this.index = index;
	        this.collectionViewModal = collectionViewModal;
	        this.initCommands();
	    }
	    ItemViewModal.prototype.getCommand = function (name) {
	        var cmd = _super.prototype.getCommand.call(this, name);
	        if (!cmd) {
	            cmd = this.collectionViewModal.getCommand(name);
	        }
	        return cmd;
	    };
	    ItemViewModal.prototype.canExecute = function (name) {
	        if (_super.prototype.canExecute.call(this, name)) {
	            return true;
	        }
	        else {
	            return this.collectionViewModal.canExecute(name);
	        }
	    };
	    ItemViewModal.prototype.execCommand = function (name, args) {
	        var cmd = _super.prototype.getCommand.call(this, name);
	        if (cmd) {
	            return _super.prototype.execCommand.call(this, name, args);
	        }
	        else {
	            if (args) {
	                args.$index = this.index;
	            }
	            else {
	                args = { $index: this.index };
	            }
	            return this.collectionViewModal.execCommand(name, args);
	        }
	    };
	    ItemViewModal.prototype.convert = function (converterName, value) {
	        return this.collectionViewModal.convert(converterName, value);
	    };
	    ItemViewModal.prototype.convertBack = function (converterName, value) {
	        return this.collectionViewModal.convertBack(converterName, value);
	    };
	    ItemViewModal.prototype.isValueValid = function (ruleName, value) {
	        return this.collectionViewModal.isValueValid(ruleName, value);
	    };
	    ItemViewModal.prototype.getValueConverter = function (name) {
	        return this.collectionViewModal.getValueConverter(name);
	    };
	    ItemViewModal.prototype.getValidationRule = function (name) {
	        return this.collectionViewModal.getValidationRule(name);
	    };
	    ItemViewModal.prototype.isCurrent = function () {
	        return this.collectionViewModal.current === this.index;
	    };
	    ItemViewModal.prototype.notifyChange = function (type, path, value) {
	        if (this.isCurrent) {
	            this.collectionViewModal.notifyChange(type, path, value);
	        }
	        _super.prototype.notifyChange.call(this, type, path, value);
	    };
	    ItemViewModal.prototype.initCommands = function () {
	        var _this = this;
	        var collectionViewModal = this.collectionViewModal;
	        this.registerCommand("activate", delegate_command_1.DelegateCommand.create(function (args) {
	            collectionViewModal.current = _this.index;
	        }));
	        this.registerCommand("remove", delegate_command_1.DelegateCommand.create(function (args) {
	            collectionViewModal.removeItem(collectionViewModal.current);
	        }));
	    };
	    ItemViewModal.create = function (collectionViewModal, index) {
	        return new ItemViewModal(collectionViewModal, index);
	    };
	    return ItemViewModal;
	}(view_modal_default_1.ViewModalDefault));
	exports.ItemViewModal = ItemViewModal;


/***/ },
/* 156 */
/***/ function(module, exports) {

	"use strict";
	var DelegateValueConverter = (function () {
	    function DelegateValueConverter(convert, convertBack) {
	        this._convert = convert;
	        this._convertBack = convertBack;
	    }
	    DelegateValueConverter.prototype.convert = function (data) {
	        return this._convert(data);
	    };
	    DelegateValueConverter.prototype.convertBack = function (data) {
	        return this._convertBack(data);
	    };
	    DelegateValueConverter.create = function (convert, convertBack) {
	        return new DelegateValueConverter(convert, convertBack);
	    };
	    return DelegateValueConverter;
	}());
	exports.DelegateValueConverter = DelegateValueConverter;
	;


/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";
	var DelegateValidationRule = (function () {
	    function DelegateValidationRule(validate) {
	        this._validate = validate;
	    }
	    DelegateValidationRule.prototype.validate = function (value) {
	        return this._validate(value);
	    };
	    DelegateValidationRule.create = function (validate) {
	        return new DelegateValidationRule(validate);
	    };
	    return DelegateValidationRule;
	}());
	exports.DelegateValidationRule = DelegateValidationRule;
	;


/***/ }
/******/ ]);