import { Group } from "./group";
import { Dialog } from "./dialog";
import { Widget } from "./widget";
export declare class TitleOptions {
    h: number;
    text: string;
    draggable: boolean;
    iconStyleType: string;
    hasCloseButton: boolean;
    constructor(text: string, iconStyleType: string, hasCloseButton: boolean);
}
export declare class ButtonOption {
    text: string;
    styleType: string;
    onClick: Function;
}
export declare class ButtonsOptions {
    h: number;
    buttons: Array<ButtonOption>;
    readonly buttonCount: number;
    constructor();
}
export declare class MessageBox extends Dialog {
    protected _title: Group;
    protected _content: Group;
    protected _buttons: Group;
    protected _contentPadding: number;
    readonly title: Group;
    readonly content: Group;
    readonly buttons: Group;
    constructor(type?: string);
    protected initTitle(titleOptions: TitleOptions): void;
    protected initButtons(buttonsOptions: ButtonsOptions): this;
    protected initContent(data?: string): void;
    protected createChildren(titleOptions: TitleOptions, buttonsOptions: ButtonsOptions, content?: string): void;
    protected onReset(): void;
    dispose(): void;
    open(): Widget;
    animateClose(): void;
    static showMessage(msg: string, onClose: Function, w?: number): void;
    static showConfirm(msg: string, onYes: Function, onNo: Function, w?: number): void;
    static showToast(msg: string, duration: number, w?: number): void;
    static showProgress(msg: string, taskStart: Function, onDone: Function, w?: number): void;
    static showInput(title: string, inputTips: string, value: string, isValueValid: Function, onDone: Function, inputType?: string, w?: number): void;
    static showChoice(title: string, data: Array<any>, multiple: boolean, onDone: Function, w?: number, h?: number): void;
    static TITLE_H: number;
    static BUTTONS_H: number;
    static MSG_FONT_SIZE: number;
    static TYPE: string;
    private static rBin;
    static create(options?: any): MessageBox;
}
