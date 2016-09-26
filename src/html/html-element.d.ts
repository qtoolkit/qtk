import { Emitter } from "../emitter";
export declare class HtmlElement extends Emitter {
    element: any;
    protected _tag: string;
    constructor();
    tag: string;
    z: number;
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    show(): HtmlElement;
    hide(): HtmlElement;
    move(x: number, y: number): HtmlElement;
    resize(w: number, h: number): HtmlElement;
    destroy(): void;
    create(tag: string): HtmlElement;
}
