import { Window } from "./window";
export declare class WindowNormal extends Window {
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): Window;
}
