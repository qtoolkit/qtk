import { Emitter } from "../emitter";
export declare class PropDesc {
    type: string;
    name: string;
    desc: string;
    value: any;
    static keys: string[];
    toJson(): any;
    fromJson(json: any): void;
    constructor(type: string);
    setBasic(name: string, value: any, desc?: string): void;
    /**
     * DataBinding
     */
    path: string;
    converter: string;
    validationRule: string;
    setDataBindingRule(path: string, converter?: string, validationRule?: string): PropDesc;
}
export declare class NumberPropDesc extends PropDesc {
    max: number;
    min: number;
    toJson(): any;
    fromJson(json: any): void;
    constructor(min: number, max: number);
    static TYPE: string;
    static create(min: number, max: number): NumberPropDesc;
}
export declare class TextPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): TextPropDesc;
}
export declare class LinkPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): LinkPropDesc;
}
export declare class ReadonlyTextPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): ReadonlyTextPropDesc;
}
export declare class SliderPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): SliderPropDesc;
}
export declare class RangePropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): RangePropDesc;
}
export declare class Vector2PropDesc extends PropDesc {
    xTitle: string;
    yTitle: string;
    toJson(): any;
    fromJson(json: any): void;
    constructor(xTitle: string, yTitle: string);
    static TYPE: string;
    static create(xTitle: string, yTitle: string): Vector2PropDesc;
}
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
export declare class LinePropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): LinePropDesc;
}
export declare class BoolPropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): BoolPropDesc;
}
export declare class OptionsPropDesc extends PropDesc {
    options: any;
    toJson(): any;
    fromJson(json: any): void;
    constructor(options: any);
    static TYPE: string;
    static create(options: any): OptionsPropDesc;
}
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
