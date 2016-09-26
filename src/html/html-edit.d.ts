import Events = require("../events");
import { HtmlElement } from "./html-element";
export declare class HtmlEdit extends HtmlElement {
    protected _visible: boolean;
    protected e: Events.ChangeEvent;
    inputType: string;
    text: string;
    show(): HtmlElement;
    hide(): HtmlElement;
    create(tag: string): HtmlEdit;
    protected static _input: HtmlEdit;
    static input: HtmlEdit;
    protected static _textArea: HtmlEdit;
    static textArea: HtmlEdit;
}
