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
var Events = require("../events");
var emitter_1 = require("../emitter");
/**
 * @class PropDesc
 * 属性描述的基类。
 */
var PropDesc = (function () {
    function PropDesc(type) {
        this.type = type;
    }
    PropDesc.prototype.toJson = function () {
        var _this = this;
        var json = {};
        PropDesc.keys.forEach(function (key) {
            var value = _this[key];
            if (value !== undefined) {
                json[key] = value;
            }
        });
        return json;
    };
    PropDesc.prototype.fromJson = function (json) {
        var _this = this;
        PropDesc.keys.forEach(function (key) {
            var value = _this[key];
            if (value !== undefined) {
                _this[key] = value;
            }
        });
    };
    PropDesc.prototype.setBasic = function (name, value, desc, titleW, valueW) {
        this.name = name;
        this.desc = desc;
        this.value = value;
        this.titleW = titleW;
        this.valueW = valueW;
    };
    PropDesc.prototype.setDataBindingRule = function (path, updateTiming, converter, validationRule) {
        this.path = path;
        this.converter = converter;
        this.validationRule = validationRule;
        this.updateTiming = updateTiming || "changed";
        return this;
    };
    return PropDesc;
}());
PropDesc.keys = ["type", "name", "desc", "value", "path", "titleW", "valueW", "converter", "validationRule"];
exports.PropDesc = PropDesc;
;
/**
 * @class NumberPropDesc
 * @extends PropDesc
 * 数值类属性描述。
 */
var NumberPropDesc = (function (_super) {
    __extends(NumberPropDesc, _super);
    function NumberPropDesc(min, max) {
        var _this = _super.call(this, NumberPropDesc.TYPE) || this;
        _this.min = min;
        _this.max = max;
        return _this;
    }
    NumberPropDesc.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.min = this.min;
        json.max = this.max;
        return json;
    };
    NumberPropDesc.prototype.fromJson = function (json) {
        _super.prototype.fromJson.call(this, json);
        this.min = json.min;
        this.max = json.max;
    };
    NumberPropDesc.create = function (min, max) {
        return new NumberPropDesc(min, max);
    };
    return NumberPropDesc;
}(PropDesc));
NumberPropDesc.TYPE = "number";
exports.NumberPropDesc = NumberPropDesc;
;
/**
 * @class TextPropDesc
 * @extends PropDesc
 * 文本类属性描述。
 */
var TextPropDesc = (function (_super) {
    __extends(TextPropDesc, _super);
    function TextPropDesc(lines) {
        var _this = _super.call(this, TextPropDesc.TYPE) || this;
        _this.lines = lines || 1;
        return _this;
    }
    TextPropDesc.create = function (lines) {
        return new TextPropDesc(lines);
    };
    return TextPropDesc;
}(PropDesc));
TextPropDesc.TYPE = "text";
exports.TextPropDesc = TextPropDesc;
/**
 * @class ButtonPropDesc
 * @extends PropDesc
 * 文本类属性描述。
 */
var ButtonPropDesc = (function (_super) {
    __extends(ButtonPropDesc, _super);
    function ButtonPropDesc(command) {
        var _this = _super.call(this, ButtonPropDesc.TYPE) || this;
        _this.command = command;
        return _this;
    }
    ButtonPropDesc.create = function (command) {
        return new ButtonPropDesc(command);
    };
    return ButtonPropDesc;
}(PropDesc));
ButtonPropDesc.TYPE = "button";
exports.ButtonPropDesc = ButtonPropDesc;
/**
 * @class ColorPropDesc
 * @extends PropDesc
 * 颜色类属性描述。
 */
var ColorPropDesc = (function (_super) {
    __extends(ColorPropDesc, _super);
    function ColorPropDesc() {
        return _super.call(this, ColorPropDesc.TYPE) || this;
    }
    ColorPropDesc.create = function () {
        return new ColorPropDesc();
    };
    return ColorPropDesc;
}(PropDesc));
ColorPropDesc.TYPE = "color";
exports.ColorPropDesc = ColorPropDesc;
/**
 * @class LinkPropDesc
 * @extends PropDesc
 * 超链接类属性描述。
 */
var LinkPropDesc = (function (_super) {
    __extends(LinkPropDesc, _super);
    function LinkPropDesc() {
        return _super.call(this, LinkPropDesc.TYPE) || this;
    }
    LinkPropDesc.create = function () {
        return new LinkPropDesc();
    };
    return LinkPropDesc;
}(PropDesc));
LinkPropDesc.TYPE = "link";
exports.LinkPropDesc = LinkPropDesc;
/**
 * @class ReadonlyTextPropDesc
 * @extends PropDesc
 * 只读文本类属性描述。
 */
var ReadonlyTextPropDesc = (function (_super) {
    __extends(ReadonlyTextPropDesc, _super);
    function ReadonlyTextPropDesc() {
        return _super.call(this, ReadonlyTextPropDesc.TYPE) || this;
    }
    ReadonlyTextPropDesc.create = function () {
        return new ReadonlyTextPropDesc();
    };
    return ReadonlyTextPropDesc;
}(PropDesc));
ReadonlyTextPropDesc.TYPE = "text-readonly";
exports.ReadonlyTextPropDesc = ReadonlyTextPropDesc;
/**
 * @class SliderPropDesc
 * @extends PropDesc
 * Slider类属性描述。
 */
var SliderPropDesc = (function (_super) {
    __extends(SliderPropDesc, _super);
    function SliderPropDesc() {
        return _super.call(this, SliderPropDesc.TYPE) || this;
    }
    SliderPropDesc.create = function () {
        return new SliderPropDesc();
    };
    return SliderPropDesc;
}(PropDesc));
SliderPropDesc.TYPE = "slider";
exports.SliderPropDesc = SliderPropDesc;
/**
 * @class RangePropDesc
 * @extends PropDesc
 * 范围类属性描述。
 */
var RangePropDesc = (function (_super) {
    __extends(RangePropDesc, _super);
    function RangePropDesc() {
        return _super.call(this, RangePropDesc.TYPE) || this;
    }
    RangePropDesc.create = function () {
        return new RangePropDesc();
    };
    return RangePropDesc;
}(PropDesc));
RangePropDesc.TYPE = "range";
exports.RangePropDesc = RangePropDesc;
/**
 * @class Vector2PropDesc
 * @extends PropDesc
 * 2维向量类属性描述。
 */
var Vector2PropDesc = (function (_super) {
    __extends(Vector2PropDesc, _super);
    function Vector2PropDesc(xTitle, yTitle) {
        var _this = _super.call(this, Vector2PropDesc.TYPE) || this;
        _this.xTitle = xTitle;
        _this.yTitle = yTitle;
        return _this;
    }
    Vector2PropDesc.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.xTitle = this.xTitle;
        json.yTitle = this.yTitle;
        return json;
    };
    Vector2PropDesc.prototype.fromJson = function (json) {
        _super.prototype.fromJson.call(this, json);
        this.xTitle = json.xTitle;
        this.yTitle = json.yTitle;
    };
    Vector2PropDesc.create = function (xTitle, yTitle) {
        return new Vector2PropDesc(xTitle, yTitle);
    };
    return Vector2PropDesc;
}(PropDesc));
Vector2PropDesc.TYPE = "vector2";
exports.Vector2PropDesc = Vector2PropDesc;
/**
 * @class Vector3PropDesc
 * @extends PropDesc
 * 3维向量类属性描述。
 */
var Vector3PropDesc = (function (_super) {
    __extends(Vector3PropDesc, _super);
    function Vector3PropDesc(xTitle, yTitle, zTitle) {
        var _this = _super.call(this, Vector3PropDesc.TYPE) || this;
        _this.xTitle = xTitle;
        _this.yTitle = yTitle;
        _this.zTitle = zTitle;
        return _this;
    }
    Vector3PropDesc.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.xTitle = this.xTitle;
        json.yTitle = this.yTitle;
        json.zTitle = this.zTitle;
        return json;
    };
    Vector3PropDesc.prototype.fromJson = function (json) {
        _super.prototype.fromJson.call(this, json);
        this.xTitle = json.xTitle;
        this.yTitle = json.yTitle;
        this.zTitle = json.zTitle;
    };
    Vector3PropDesc.create = function (xTitle, yTitle, zTitle) {
        return new Vector3PropDesc(xTitle, yTitle, zTitle);
    };
    return Vector3PropDesc;
}(PropDesc));
Vector3PropDesc.TYPE = "vector3";
exports.Vector3PropDesc = Vector3PropDesc;
/**
 * @class Vector4PropDesc
 * @extends PropDesc
 * 4维向量类属性描述。
 */
var Vector4PropDesc = (function (_super) {
    __extends(Vector4PropDesc, _super);
    function Vector4PropDesc(xTitle, yTitle, zTitle, wTitle) {
        var _this = _super.call(this, Vector4PropDesc.TYPE) || this;
        _this.xTitle = xTitle;
        _this.yTitle = yTitle;
        _this.zTitle = zTitle;
        _this.wTitle = wTitle;
        return _this;
    }
    Vector4PropDesc.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.xTitle = this.xTitle;
        json.yTitle = this.yTitle;
        json.zTitle = this.zTitle;
        json.wTitle = this.wTitle;
        return json;
    };
    Vector4PropDesc.prototype.fromJson = function (json) {
        _super.prototype.fromJson.call(this, json);
        this.xTitle = json.xTitle;
        this.yTitle = json.yTitle;
        this.zTitle = json.zTitle;
        this.wTitle = json.wTitle;
    };
    Vector4PropDesc.create = function (xTitle, yTitle, zTitle, wTitle) {
        return new Vector4PropDesc(xTitle, yTitle, zTitle, wTitle);
    };
    return Vector4PropDesc;
}(PropDesc));
Vector4PropDesc.TYPE = "vector4";
exports.Vector4PropDesc = Vector4PropDesc;
/**
 * @class LinePropDesc
 * @extends PropDesc
 * 分组类属性描述。
 */
var LinePropDesc = (function (_super) {
    __extends(LinePropDesc, _super);
    function LinePropDesc() {
        return _super.call(this, LinePropDesc.TYPE) || this;
    }
    LinePropDesc.create = function () {
        return new LinePropDesc();
    };
    return LinePropDesc;
}(PropDesc));
LinePropDesc.TYPE = "line";
exports.LinePropDesc = LinePropDesc;
/**
 * @class BoolPropDesc
 * @extends PropDesc
 * 布尔类属性描述。
 */
var BoolPropDesc = (function (_super) {
    __extends(BoolPropDesc, _super);
    function BoolPropDesc() {
        return _super.call(this, BoolPropDesc.TYPE) || this;
    }
    BoolPropDesc.create = function () {
        return new BoolPropDesc();
    };
    return BoolPropDesc;
}(PropDesc));
BoolPropDesc.TYPE = "bool";
exports.BoolPropDesc = BoolPropDesc;
/**
 * @class OptionsPropDesc
 * @extends PropDesc
 * 下拉框类属性描述。
 */
var OptionsPropDesc = (function (_super) {
    __extends(OptionsPropDesc, _super);
    function OptionsPropDesc(options) {
        var _this = _super.call(this, OptionsPropDesc.TYPE) || this;
        _this.options = options;
        return _this;
    }
    OptionsPropDesc.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.options = this.options;
        return json;
    };
    OptionsPropDesc.prototype.fromJson = function (json) {
        _super.prototype.fromJson.call(this, json);
        this.options = json.options;
    };
    OptionsPropDesc.create = function (options) {
        return new OptionsPropDesc(options);
    };
    return OptionsPropDesc;
}(PropDesc));
OptionsPropDesc.TYPE = "options";
exports.OptionsPropDesc = OptionsPropDesc;
/**
 * @class PropsDesc
 * @extends Emitter
 * 属性组。
 */
var PropsDesc = (function (_super) {
    __extends(PropsDesc, _super);
    function PropsDesc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropsDesc.prototype.notifyChange = function () {
        var e = Events.ChangeEvent.create().init(Events.CHANGE, { value: null });
        this.dispatchEvent(e);
        e.dispose();
        return this;
    };
    PropsDesc.prototype.forEach = function (func) {
        var items = this._items;
        items.forEach(function (item) {
            func(item);
        });
    };
    PropsDesc.prototype.toJson = function () {
        var json = {};
        json.items = this._items.map(function (item) {
            return item.toJson();
        });
        return json;
    };
    ;
    PropsDesc.prototype.fromJson = function (json) {
        this.parse(json.items);
    };
    PropsDesc.prototype.parse = function (json) {
        var items = [];
        json.forEach(function (data) {
            var desc = null;
            var type = data.type;
            if (type === NumberPropDesc.TYPE) {
                desc = NumberPropDesc.create(data.min, data.max);
            }
            else if (type === SliderPropDesc.TYPE) {
                desc = SliderPropDesc.create();
            }
            else if (type === TextPropDesc.TYPE) {
                desc = TextPropDesc.create(data.lines);
            }
            else if (type === ColorPropDesc.TYPE) {
                desc = ColorPropDesc.create();
            }
            else if (type === LinkPropDesc.TYPE) {
                desc = LinkPropDesc.create();
            }
            else if (type === ReadonlyTextPropDesc.TYPE) {
                desc = ReadonlyTextPropDesc.create();
            }
            else if (type === RangePropDesc.TYPE) {
                desc = RangePropDesc.create();
            }
            else if (type === Vector2PropDesc.TYPE) {
                desc = Vector2PropDesc.create(data.xTitle, data.yTitle);
            }
            else if (type === Vector3PropDesc.TYPE) {
                desc = Vector3PropDesc.create(data.xTitle, data.yTitle, data.zTitle);
            }
            else if (type === Vector4PropDesc.TYPE) {
                desc = Vector4PropDesc.create(data.xTitle, data.yTitle, data.zTitle, data.wTitle);
            }
            else if (type === OptionsPropDesc.TYPE) {
                desc = OptionsPropDesc.create(data.options);
            }
            else if (type === LinePropDesc.TYPE) {
                desc = LinePropDesc.create();
            }
            else if (type === BoolPropDesc.TYPE) {
                desc = BoolPropDesc.create();
            }
            else if (type === ButtonPropDesc.TYPE) {
                desc = ButtonPropDesc.create(data.command);
            }
            else {
                console.log("not supported:" + type);
                return;
            }
            items.push(desc);
            desc.setBasic(data.name, data.value, data.desc, data.titleW, data.valueW);
            desc.setDataBindingRule(data.path, data.updateTiming, data.converter, data.validationRule);
        });
        this._items = items;
        return this;
    };
    PropsDesc.create = function (json) {
        var propsDesc = new PropsDesc();
        if (json) {
            propsDesc.parse(json);
        }
        return propsDesc;
    };
    return PropsDesc;
}(emitter_1.Emitter));
exports.PropsDesc = PropsDesc;
;
var PagePropsDesc = (function () {
    function PagePropsDesc(title, propsDesc) {
        this.title = title;
        this.propsDesc = propsDesc;
    }
    PagePropsDesc.prototype.toJson = function () {
        return { title: this.title, propsDesc: this.propsDesc.toJson() };
    };
    PagePropsDesc.prototype.fromJson = function (json) {
        this.title = json.title;
        this.propsDesc = PropsDesc.create(json.propsDesc.items);
    };
    PagePropsDesc.create = function (title, json) {
        var propsDesc = PropsDesc.create(json);
        var pagePropsDesc = new PagePropsDesc(title, propsDesc);
        return pagePropsDesc;
    };
    return PagePropsDesc;
}());
exports.PagePropsDesc = PagePropsDesc;
;
