import { Emitter } from "../emitter";
export declare class PropDesc {
    type: string;
    name: string;
    desc: string;
    value: any;
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
    constructor();
    static TYPE: string;
    static create(): Vector2PropDesc;
}
export declare class Vector3PropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): Vector3PropDesc;
}
export declare class LinePropDesc extends PropDesc {
    constructor();
    static TYPE: string;
    static create(): LinePropDesc;
}
export declare class OptionsPropDesc extends PropDesc {
    options: any;
    constructor(options: any);
    static TYPE: string;
    static create(options: any): OptionsPropDesc;
}
export declare class PropsDesc extends Emitter {
    _items: Array<PropDesc>;
    notifyChange(): PropsDesc;
    forEach(func: Function): void;
    parse(json: Array<any>): PropsDesc;
    static create(json: any): PropsDesc;
}
export declare class PagePropsDesc {
    title: string;
    propsDesc: PropsDesc;
    constructor(title: string, propsDesc: PropsDesc);
    static create(title: string, json: any): PagePropsDesc;
}
