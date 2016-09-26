import { CheckButton } from "./check-button";
export declare class RadioButton extends CheckButton {
    constructor(type?: string);
    value: boolean;
    static TYPE: string;
    private static r;
    static create(options?: any): RadioButton;
}
