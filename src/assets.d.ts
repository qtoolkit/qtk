/// <reference path="../typings/globals/es6-promise/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
import "whatwg-fetch";
import { Emitter } from "./emitter";
export declare const AUDIO: string;
export declare const IMAGE: string;
export declare const BLOB: string;
export declare const JSON: string;
export declare const TEXT: string;
export declare class Image {
    width: number;
    height: number;
    src: string;
    onload: Function;
    onerror: Function;
}
/**
 * Load JSON Data and Cache It.
 * @param url URL Of JSON.
 * @returns Promise
 */
export declare function loadJSON(url: string): Promise<any>;
/**
 * Load Text Data and Cache It.
 * @param url URL Of Text.
 * @returns Promise
 */
export declare function loadText(url: string): Promise<string>;
/**
 * Load Blob Data and Cache It.
 * @param url URL Of Blob.
 * @returns Promise
 */
export declare function loadBlob(url: string): Promise<Blob>;
/**
 * Load Image and Cache It.
 * @param url URL Of Image.
 * @returns Promise
 */
export declare function loadImage(url: string): Promise<Image>;
/**
 * Load Script
 * @param url URL Of Script.
 * @returns Promise
 */
export declare function loadScript(url: string): Promise<any>;
/**
 * Load Audio and Cache It.
 * @param url URL Of Audio.
 * @returns Promise
 */
export declare function loadAudio(url: string): Promise<any>;
/**
 * Clear asset cache
 * @param url URL Of asset.
 */
export declare function clear(url: string): void;
/**
 * Present one asset.
 */
export declare class Item {
    /**
     * The URL of asset.
     */
    src: string;
    /**
     * The type of asset, options are TEXT, JSON, BLOB, IMAGE, AUDIO.
     */
    type: string;
}
/**
 * Assets group to preload
 * Example:
 * ```
 *  var items = [
 *    {type:qtk.Assets.TEXT, src:"http://localhost:9876/base/www/test.txt"},
 *    {type:qtk.Assets.JSON, src:"http://localhost:9876/base/www/test.json"},
 *    {type:qtk.Assets.IMAGE, src:"http://localhost:9876/base/www/test.jpg"},
 *    {type:qtk.Assets.BLOB, src:"http://localhost:9876/base/www/test.blob"}
 * ];
 * var assets = new qtk.Assets.Group(items);
 * assets.onProgress(function(info) {
 *   console.log(info.loaded + "/" + info.total);
 * });
 * ```
 */
export declare class Group extends Emitter {
    total: number;
    loaded: number;
    event: {
        total: number;
        loaded: number;
        type: string;
    };
    constructor(items: Array<Item>);
    /**
     * Register of a progress callback function
     */
    onProgress(callback: Function): void;
    private addLoaded();
    private loadOne(item);
}
