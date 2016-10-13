export declare class ChoiceOption {
    text: string;
    iconURL: string;
    constructor(text: string, iconURL?: string);
    static create(text: string, iconURL?: string): ChoiceOption;
}
export declare class ChoiceInfo {
    w: number;
    h: number;
    value: any;
    title: string;
    multiple: boolean;
    options: Array<ChoiceOption>;
    resetOptions(): void;
    addOption(text: string, iconURL?: string): void;
    constructor(title: string, multiple?: boolean, w?: number, h?: number);
    static create(title: string, multiple?: boolean, w?: number, h?: number): ChoiceInfo;
}
