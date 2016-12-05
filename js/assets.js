/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
/// <reference path="../typings/globals/whatwg-fetch/index.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("whatwg-fetch");
var path = require("path");
var Events = require("./events");
var emitter_1 = require("./emitter");
;
var assetsCache = {};
function load(url, type) {
    var item = assetsCache[url];
    if (!item) {
        item = fetch(url).then(function ok(response) {
            if (response.status !== 200) {
                return Promise.reject(null);
            }
            if (type === AssetType.JSON) {
                return response.json();
            }
            else if (type === AssetType.BLOB) {
                return response.blob();
            }
            else {
                return response.text();
            }
        }, function fail(err) {
            return null;
        });
        assetsCache[url] = item;
    }
    return item;
}
/**
 * @enum AssetType
 * 资源类型。
 */
(function (AssetType) {
    /**
     * @property {number} [AUDIO=1]
     * 音频资源。
     */
    AssetType[AssetType["AUDIO"] = 1] = "AUDIO";
    /**
     * @property {number} [IMAGE]
     * 图像资源。
     */
    AssetType[AssetType["IMAGE"] = 2] = "IMAGE";
    /**
     * @property {number} [BLOB]
     * 二进制资源。
     */
    AssetType[AssetType["BLOB"] = 3] = "BLOB";
    /**
     * @property {number} [JSON]
     * JSON资源。
     */
    AssetType[AssetType["JSON"] = 4] = "JSON";
    /**
     * @property {number} [TEXT]
     * 文本资源。
     */
    AssetType[AssetType["TEXT"] = 5] = "TEXT";
})(exports.AssetType || (exports.AssetType = {}));
var AssetType = exports.AssetType;
;
/**
 * @class AssetManager
 * 资源管理类，用于加载各种资源。
 */
var AssetManager = (function () {
    function AssetManager() {
    }
    /**
     * @method loadJson
     * 加载JSON资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadJson = function (url) {
        return load(url, AssetType.JSON);
    };
    /**
     * @method loadText
     * 加载文本数据资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadText = function (url) {
        return load(url, AssetType.TEXT);
    };
    /**
     * @method loadBlob
     * 加载二进制数据资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadBlob = function (url) {
        return load(url, AssetType.BLOB);
    };
    /**
     * @method loadImage
     * 加载图片资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadImage = function (url) {
        var item = assetsCache[url];
        if (!item) {
            item = new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = function (err) {
                    reject(err);
                };
                image.src = url;
            });
        }
        assetsCache[url] = item;
        return item;
    };
    /**
     * @method loadScript
     * 加载脚本资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadScript = function (url) {
        var item = new Promise(function (resolve, reject) {
            var node = document.head ? document.head : document.body;
            var script = document.createElement("script");
            script.onload = function () {
                resolve(script);
            };
            script.onerror = function (err) {
                reject(err);
            };
            script.src = url;
            node.appendChild(script);
        });
        return item;
    };
    /**
     * @method loadAudio
     * 加载音频资源。
     * @static
     * @param {String} url 资源URL。
     * @return {Promise}
     */
    AssetManager.loadAudio = function (url) {
        var item = assetsCache[url];
        if (!item) {
            item = new Promise(function (resolve, reject) {
                var audio = new Audio();
                audio.onload = function () {
                    resolve(audio);
                };
                audio.onerror = function (err) {
                    reject(err);
                };
                audio.src = url;
            });
        }
        assetsCache[url] = item;
        return item;
    };
    /**
     * @method clear
     * 清除指定URL资源的缓存。
     * @static
     * @param {String} url 资源URL。
     */
    AssetManager.clear = function (url) {
        delete assetsCache[url];
    };
    return AssetManager;
}());
exports.AssetManager = AssetManager;
/**
 * @class AssetItem
 * 表示一个资源项, 用于预加载资源。
 *
 */
var AssetItem = (function () {
    function AssetItem(src, type) {
        if (!type) {
            var name = path.extname(src).toLowerCase();
            if (name === ".json") {
                type = AssetType.JSON;
            }
            else if (name === ".jpg" || name === ".png" || name === ".svg") {
                type = AssetType.IMAGE;
            }
            else if (name === ".txt") {
                type = AssetType.TEXT;
            }
            else {
                type = AssetType.BLOB;
            }
        }
        this.src = src;
        this.type = type;
    }
    AssetItem.create = function (src, type) {
        return new AssetItem(src, type);
    };
    return AssetItem;
}());
exports.AssetItem = AssetItem;
;
/**
 * @class AssetGroup
 *
 * 表示一个资源分组, 用于预加载资源。
 *
 */
var AssetGroup = (function (_super) {
    __extends(AssetGroup, _super);
    function AssetGroup(items, onProgress) {
        _super.call(this);
        this.event = {
            total: 0,
            loaded: 0,
            type: Events.PROGRESS
        };
        var i = 0;
        var n = items.length;
        this.loaded = 0;
        this.total = items.length;
        this.event.total = this.total;
        if (onProgress) {
            this.onProgress(onProgress);
        }
        items.forEach(this.loadOne.bind(this));
    }
    /**
     * 注册加载进度的回调函数。
     */
    AssetGroup.prototype.onProgress = function (callback) {
        this.on(Events.PROGRESS, callback);
    };
    AssetGroup.prototype.addLoaded = function () {
        this.loaded++;
        this.event.loaded = this.loaded;
        this.dispatchEvent(this.event);
    };
    AssetGroup.prototype.loadOne = function (item) {
        var src = item.src;
        var type = item.type;
        var addLoaded = this.addLoaded.bind(this);
        var name = path.extname(src).toLowerCase();
        if (type === AssetType.JSON || (!type && name === '.json')) {
            AssetManager.loadJson(src).then(addLoaded, addLoaded);
        }
        else if (type === AssetType.IMAGE || (!type && (name === ".jpg" || name === ".png" || name === ".svg"))) {
            AssetManager.loadImage(src).then(addLoaded, addLoaded);
        }
        else if (type === AssetType.BLOB) {
            AssetManager.loadBlob(src).then(addLoaded, addLoaded);
        }
        else {
            AssetManager.loadText(src).then(addLoaded, addLoaded);
        }
    };
    AssetGroup.create = function (items, onProgress) {
        return new AssetGroup(items, onProgress);
    };
    /**
     * @method preload
     * 预加载指定的资源。
     * @static
     * @param {Array<string>} assetsURLS 资源URL列表。
     * @param {Function} onProgress 资源进度回调函数。
     * @return {AssetGroup} 资源分组对象。
     */
    AssetGroup.preload = function (assetsURLS, onProgress) {
        var arr = assetsURLS.map(function (iter) {
            return AssetItem.create(iter);
        });
        return AssetGroup.create(arr, onProgress);
    };
    return AssetGroup;
}(emitter_1.Emitter));
exports.AssetGroup = AssetGroup;
