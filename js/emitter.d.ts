/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
/**
 * 事件分发器。
 */
export declare class Emitter {
    private emitter;
    constructor();
    /***
     * 注册事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    on(type: string, callback: Function, useCapture?: boolean): void;
    /***
     * 注册事件处理函数(只执行一次)。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    once(type: string, callback: Function): void;
    /***
     * 注消事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注消capture阶段的处理函数。
     */
    off(type: string, callback: Function, useCapture?: boolean): void;
    /***
     * 注册事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注册为capture阶段的处理函数。
     */
    addEventListener(type: string, callback: Function, useCapture?: boolean): void;
    /***
     * 注消事件处理函数。
     * @param type 事件的名称。
     * @param callback 回调函数。
     * @param useCapture 是否注消capture阶段的处理函数。
     */
    removeEventListener(type: string, callback: Function, useCapture?: boolean): void;
    /***
     * 分发异步事件。
     * @param evt 事件。
     * @param useCapture 是否触发capture阶段的处理函数。
     */
    dispatchEventAsync(evt: any, useCapture?: boolean): void;
    /***
     * 分发事件。
     * @param evt 事件。
     * @param useCapture 是否触发capture阶段的处理函数。
     */
    dispatchEvent(evt: any, useCapture?: boolean): void;
    removeAllListeners(event?: string): void;
}
