import { Emitter } from "../emitter";
/**
 * @class PropDesc
 * 属性描述的基类。
 */
export declare class PropDesc {
    /**
     * @property {string} type
     * 属性的类型。
     */
    type: string;
    /**
     * @property {string} name
     * 属性的名称。
     */
    name: string;
    /**
     * @property {string} desc
     * 属性的描述。
     */
    desc: string;
    /**
     * @property {string} value
     * 属性的值。
     */
    value: any;
    /**
     * @property {string} titleW
     * 标题的宽度。
     */
    titleW: string;
    /**
     * @property {string} valueW
     * 值的宽度。
     */
    valueW: string;
    /**
     * @property {string} updateTiming
     * 更新时机。可选择值："changing", "changed", "explicit"
     */
    updateTiming: string;
    static keys: string[];
    toJson(): any;
    fromJson(json: any): void;
    constructor(type: string);
    setBasic(name: string, value: any, desc?: string, titleW?: string, valueW?: string): void;
    /**
     * @property {string} path
     * 数据绑定的path。
     */
    path: string;
    /**
     * @property {string} converter
     * 数据绑定的数据转换器的名称。
     */
    converter: string;
    /**
     * @property {string} validationRule
     * 数据绑定的数据有效性验证规则的名称。
     */
    validationRule: string;
    setDataBindingRule(path: string, updateTiming?: string, converter?: string, validationRule?: string): PropDesc;
}
/**
 * @class NumberPropDesc
 * @extends PropDesc
 * 数值类属性描述。
 */
export declare class NumberPropDesc extends PropDesc {
    max: number;
    min: number;
    toJson(): any;
    fromJson(json: any): void;
    constructor(min: number, max: number);
    static TYPE: string;
    static create(min: number, max: number): NumberPropDesc;
}
/**
 * @class TextPropDesc
 * @extends PropDesc
 * 文本类属性描述。
 */
export declare class TextPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): TextPropDesc;
}
/**
 * @class ColorPropDesc
 * @extends PropDesc
 * 颜色类属性描述。
 */
export declare class ColorPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): ColorPropDesc;
}
/**
 * @class LinkPropDesc
 * @extends PropDesc
 * 超链接类属性描述。
 */
export declare class LinkPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): LinkPropDesc;
}
/**
 * @class ReadonlyTextPropDesc
 * @extends PropDesc
 * 只读文本类属性描述。
 */
export declare class ReadonlyTextPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): ReadonlyTextPropDesc;
}
/**
 * @class SliderPropDesc
 * @extends PropDesc
 * Slider类属性描述。
 */
export declare class SliderPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): SliderPropDesc;
}
/**
 * @class RangePropDesc
 * @extends PropDesc
 * 范围类属性描述。
 */
export declare class RangePropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): RangePropDesc;
}
/**
 * @class Vector2PropDesc
 * @extends PropDesc
 * 2维向量类属性描述。
 */
export declare class Vector2PropDesc extends PropDesc {
    xTitle: string;
    yTitle: string;
    toJson(): any;
    fromJson(json: any): void;
    constructor(xTitle: string, yTitle: string);
    static TYPE: string;
    static create(xTitle: string, yTitle: string): Vector2PropDesc;
}
/**
 * @class Vector3PropDesc
 * @extends PropDesc
 * 3维向量类属性描述。
 */
export declare class Vector3PropDesc extends PropDesc {
    xTitle: string;
    yTitle: string;
    zTitle: string;
    toJson(): any;
    fromJson(json: any): void;
    constructor(xTitle: string, yTitle: string, zTitle: string);
    static TYPE: string;
    static create(xTitle: string, yTitle: string, zTitle: string): Vector3PropDesc;
}
/**
 * @class Vector4PropDesc
 * @extends PropDesc
 * 4维向量类属性描述。
 */
export declare class Vector4PropDesc extends PropDesc {
    xTitle: string;
    yTitle: string;
    zTitle: string;
    wTitle: string;
    toJson(): any;
    fromJson(json: any): void;
    constructor(xTitle: string, yTitle: string, zTitle: string, wTitle: string);
    static TYPE: string;
    static create(xTitle: string, yTitle: string, zTitle: string, wTitle: string): Vector4PropDesc;
}
/**
 * @class LinePropDesc
 * @extends PropDesc
 * 分组类属性描述。
 */
export declare class LinePropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): LinePropDesc;
}
/**
 * @class BoolPropDesc
 * @extends PropDesc
 * 布尔类属性描述。
 */
export declare class BoolPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): BoolPropDesc;
}
/**
 * @class OptionsPropDesc
 * @extends PropDesc
 * 下拉框类属性描述。
 */
export declare class OptionsPropDesc extends PropDesc {
    options: any;
    toJson(): any;
    fromJson(json: any): void;
    constructor(options: any);
    static TYPE: string;
    static create(options: any): OptionsPropDesc;
}
/**
 * @class PropsDesc
 * @extends Emitter
 * 属性组。
 */
export declare class PropsDesc extends Emitter {
    _items: Array<PropDesc>;
    notifyChange(): PropsDesc;
    forEach(func: Function): void;
    toJson(): any;
    fromJson(json: any): void;
    parse(json: Array<any>): PropsDesc;
    static create(json: any): PropsDesc;
}
export declare class PagePropsDesc {
    title: string;
    propsDesc: PropsDesc;
    toJson(): any;
    fromJson(json: any): void;
    constructor(title: string, propsDesc: PropsDesc);
    static create(title: string, json: any): PagePropsDesc;
}
