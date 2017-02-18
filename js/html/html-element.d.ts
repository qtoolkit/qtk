import { Emitter } from "../emitter";
export declare class HtmlElement extends Emitter {
    element: any;
    protected _tag: string;
    constructor();
    readonly x: number;
    readonly y: number;
    z: number;
    readonly tag: string;
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    show(): HtmlElement;
    hide(): HtmlElement;
    move(x: number, y: number): HtmlElement;
    readonly borderWidth: number;
    resize(w: number, h: number): HtmlElement;
    destroy(): void;
    static showColocPicker(value: any, onChange: any): void;
    create(tag: string): HtmlElement;
}
