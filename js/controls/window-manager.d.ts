import { Widget } from "./widget";
import Events = require("../events");
export declare class WindowManager extends Widget {
    constructor();
    onWindowCreate(evt: Events.WindowEvent): void;
    onWindowCreated(evt: Events.WindowEvent): void;
    onWindowOpen(evt: Events.WindowEvent): void;
    onWindowClose(evt: Events.WindowEvent): void;
    onCreated(): void;
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): WindowManager;
}
