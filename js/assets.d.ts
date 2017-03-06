/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/eventemitter3/index.d.ts" />
import "whatwg-fetch";
import { Emitter } from "./emitter";
export declare class Image {
    width: number;
    height: number;
    src: string;
    onload: Function;
    onerror: Function;
}
/**
 * @enum AssetType
 * 资源类型。
 */
export declare enum AssetType {
    /**
     * @property {number} [AUDIO=1]
     * 音频资源。
     */
    AUDIO = 1,
    /**
     * @property {number} [IMAGE]
     * 图像资源。
     */
    IMAGE = 2,
    /**
     * @property {number} [BLOB]
     * 二进制资源。
     */
    BLOB = 3,
    /**
     * @property {number} [JSON]
     * JSON资源。
     */
    JSON = 4,
    /**
     * @property {number} [SCRIPT]
     * SCRIPT资源。
     */
    SCRIPT = 5,
    /**
     * @property {number} [TEXT]
     * 文本资源。
     */
    TEXT = 6,
}
/**
 * @class AssetManager
 * 资源管理类，用于加载各种资源。
 */
export declare class AssetManager {
    /**
     * @method loadJson
     * 加载JSON资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadJson(url: string): Promise<any>;
    /**
     * @method loadText
     * 加载文本数据资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadText(url: string): Promise<string>;
    /**
     * @method loadBlob
     * 加载二进制数据资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadBlob(url: string): Promise<Blob>;
    /**
     * @method loadImage
     * 加载图片资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadImage(url: string): Promise<Image>;
    /**
     * @method loadScript
     * 加载脚本资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadScript(url: string): Promise<any>;
    /**
     * @method loadAudio
     * 加载音频资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    static loadAudio(url: string): Promise<any>;
    /**
     * @method clear
     * 清除指定URL资源的缓存。
     * @static
     * @param {String} url 资源URL。
     */
    static clear(url: string): void;
}
/**
 * @class AssetItem
 * 表示一个资源项, 用于预加载资源。
 *
 */
export declare class AssetItem {
    /**
     * @property {string} src
     * 资源的URL。
     */
    src: string;
    /**
     * @property {AssetType} type
     * 资源的类型。
     */
    type: AssetType;
    constructor(src: string, type?: AssetType);
    static create(src: string, type?: AssetType): AssetItem;
}
/**
 * @class AssetGroup
 *
 * 表示一个资源分组, 用于预加载资源。
 *
 */
export declare class AssetGroup extends Emitter {
    total: number;
    loaded: number;
    event: {
        total: number;
        loaded: number;
        type: string;
    };
    constructor(items: Array<AssetItem>, onProgress?: Function);
    /**
     * 注册加载进度的回调函数。
     */
    onProgress(callback: Function): void;
    private addLoaded();
    private loadOne(item);
    static create(items: Array<AssetItem>, onProgress?: Function): AssetGroup;
    /**
     * @method preload
     * 预加载指定的资源。
     * @static
     * @param {Array<string>} assetsURLS 资源URL列表。
     * @param {Function} onProgress 资源进度回调函数。
     * @return {AssetGroup} 资源分组对象。
     */
    static preload(assetsURLS: Array<string>, onProgress: Function): AssetGroup;
}
