"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropDesc = (function () {
    function PropDesc(type) {
        this.type = type;
    }
    PropDesc.prototype.setBasic = function (name, value, desc) {
        this.name = name;
        this.desc = desc;
        this.value = value;
    };
    PropDesc.prototype.setDataBindingRule = function (path, converter, validationRule) {
        this.path = path;
        this.converter = converter;
        this.validationRule = validationRule;
        return this;
    };
    return PropDesc;
}());
exports.PropDesc = PropDesc;
;
var NumberPropDesc = (function (_super) {
    __extends(NumberPropDesc, _super);
    function NumberPropDesc(min, max) {
        _super.call(this, NumberPropDesc.TYPE);
        this.min = min;
        this.max = max;
    }
    NumberPropDesc.create = function (min, max) {
        return new NumberPropDesc(min, max);
    };
    NumberPropDesc.TYPE = "number";
    return NumberPropDesc;
}(PropDesc));
exports.NumberPropDesc = NumberPropDesc;
;
var TextPropDesc = (function (_super) {
    __extends(TextPropDesc, _super);
    function TextPropDesc() {
        _super.call(this, TextPropDesc.TYPE);
    }
    TextPropDesc.create = function () {
        return new TextPropDesc();
    };
    TextPropDesc.TYPE = "text";
    return TextPropDesc;
}(PropDesc));
exports.TextPropDesc = TextPropDesc;
var ReadonlyTextPropDesc = (function (_super) {
    __extends(ReadonlyTextPropDesc, _super);
    function ReadonlyTextPropDesc() {
        _super.call(this, ReadonlyTextPropDesc.TYPE);
    }
    ReadonlyTextPropDesc.create = function () {
        return new ReadonlyTextPropDesc();
    };
    ReadonlyTextPropDesc.TYPE = "text-readonly";
    return ReadonlyTextPropDesc;
}(PropDesc));
exports.ReadonlyTextPropDesc = ReadonlyTextPropDesc;
var SliderPropDesc = (function (_super) {
    __extends(SliderPropDesc, _super);
    function SliderPropDesc() {
        _super.call(this, SliderPropDesc.TYPE);
    }
    SliderPropDesc.create = function () {
        return new SliderPropDesc();
    };
    SliderPropDesc.TYPE = "slider";
    return SliderPropDesc;
}(PropDesc));
exports.SliderPropDesc = SliderPropDesc;
var RangePropDesc = (function (_super) {
    __extends(RangePropDesc, _super);
    function RangePropDesc() {
        _super.call(this, RangePropDesc.TYPE);
    }
    RangePropDesc.create = function () {
        return new RangePropDesc();
    };
    RangePropDesc.TYPE = "range";
    return RangePropDesc;
}(PropDesc));
exports.RangePropDesc = RangePropDesc;
var Vector2PropDesc = (function (_super) {
    __extends(Vector2PropDesc, _super);
    function Vector2PropDesc() {
        _super.call(this, Vector2PropDesc.TYPE);
    }
    Vector2PropDesc.create = function () {
        return new Vector2PropDesc();
    };
    Vector2PropDesc.TYPE = "vector2";
    return Vector2PropDesc;
}(PropDesc));
exports.Vector2PropDesc = Vector2PropDesc;
var Vector3PropDesc = (function (_super) {
    __extends(Vector3PropDesc, _super);
    function Vector3PropDesc() {
        _super.call(this, Vector3PropDesc.TYPE);
    }
    Vector3PropDesc.create = function () {
        return new Vector3PropDesc();
    };
    Vector3PropDesc.TYPE = "vector3";
    return Vector3PropDesc;
}(PropDesc));
exports.Vector3PropDesc = Vector3PropDesc;
var LinePropDesc = (function (_super) {
    __extends(LinePropDesc, _super);
    function LinePropDesc() {
        _super.call(this, LinePropDesc.TYPE);
    }
    LinePropDesc.create = function () {
        return new LinePropDesc();
    };
    LinePropDesc.TYPE = "line";
    return LinePropDesc;
}(PropDesc));
exports.LinePropDesc = LinePropDesc;
var OptionsPropDesc = (function (_super) {
    __extends(OptionsPropDesc, _super);
    function OptionsPropDesc(options) {
        _super.call(this, OptionsPropDesc.TYPE);
        this.options = options;
    }
    OptionsPropDesc.create = function (options) {
        return new OptionsPropDesc(options);
    };
    OptionsPropDesc.TYPE = "options";
    return OptionsPropDesc;
}(PropDesc));
exports.OptionsPropDesc = OptionsPropDesc;
var PropsDesc = (function () {
    function PropsDesc() {
    }
    PropsDesc.prototype.forEach = function (func) {
        var items = this._items;
        items.forEach(function (item) {
            func(item);
        });
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
                desc = TextPropDesc.create();
            }
            else if (type === ReadonlyTextPropDesc.TYPE) {
                desc = ReadonlyTextPropDesc.create();
            }
            else if (type === RangePropDesc.TYPE) {
                desc = RangePropDesc.create();
            }
            else if (type === Vector2PropDesc.TYPE) {
                desc = Vector2PropDesc.create();
            }
            else if (type === Vector3PropDesc.TYPE) {
                desc = Vector3PropDesc.create();
            }
            else if (type === OptionsPropDesc.TYPE) {
                desc = OptionsPropDesc.create(data.options);
            }
            else if (type === LinePropDesc.TYPE) {
                desc = LinePropDesc.create();
            }
            else {
                console.log("not supported:" + type);
                return;
            }
            items.push(desc);
            desc.setBasic(data.name, data.value, data.desc);
            desc.setDataBindingRule(data.path, data.converter, data.validationRule);
        });
        this._items = items;
        return this;
    };
    PropsDesc.create = function (json) {
        var propsDesc = new PropsDesc();
        return propsDesc.parse(json);
    };
    return PropsDesc;
}());
exports.PropsDesc = PropsDesc;
;
var PagePropsDesc = (function () {
    function PagePropsDesc(title, propsDesc) {
        this.title = title;
        this.propsDesc = propsDesc;
    }
    PagePropsDesc.create = function (title, json) {
        var propsDesc = PropsDesc.create(json);
        var pagePropsDesc = new PagePropsDesc(title, propsDesc);
        return pagePropsDesc;
    };
    return PagePropsDesc;
}());
exports.PagePropsDesc = PagePropsDesc;
;
