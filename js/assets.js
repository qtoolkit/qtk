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
exports.AUDIO = "audio";
exports.IMAGE = "image";
exports.BLOB = "blob";
exports.JSON = "json";
exports.TEXT = "text";
;
var assetsCache = {};
function load(url, type) {
    var item = assetsCache[url];
    if (!item) {
        item = fetch(url).then(function ok(response) {
            if (response.status !== 200) {
                return Promise.reject(null);
            }
            if (type === exports.JSON) {
                return response.json();
            }
            else if (type === exports.BLOB) {
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
 * Load JSON Data and Cache It.
 * @param url URL Of JSON.
 * @returns Promise
 */
function loadJSON(url) {
    return load(url, exports.JSON);
}
exports.loadJSON = loadJSON;
/**
 * Load Text Data and Cache It.
 * @param url URL Of Text.
 * @returns Promise
 */
function loadText(url) {
    return load(url, exports.TEXT);
}
exports.loadText = loadText;
/**
 * Load Blob Data and Cache It.
 * @param url URL Of Blob.
 * @returns Promise
 */
function loadBlob(url) {
    return load(url, exports.BLOB);
}
exports.loadBlob = loadBlob;
/**
 * Load Image and Cache It.
 * @param url URL Of Image.
 * @returns Promise
 */
function loadImage(url) {
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
}
exports.loadImage = loadImage;
/**
 * Load Script
 * @param url URL Of Script.
 * @returns Promise
 */
function loadScript(url) {
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
}
exports.loadScript = loadScript;
/**
 * Load Audio and Cache It.
 * @param url URL Of Audio.
 * @returns Promise
 */
function loadAudio(url) {
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
}
exports.loadAudio = loadAudio;
/**
 * Clear asset cache
 * @param url URL Of asset.
 */
function clear(url) {
    delete assetsCache[url];
}
exports.clear = clear;
/**
 * Present one asset.
 */
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
;
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
var Group = (function (_super) {
    __extends(Group, _super);
    function Group(items) {
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
        items.forEach(this.loadOne.bind(this));
    }
    /**
     * Register of a progress callback function
     */
    Group.prototype.onProgress = function (callback) {
        this.on(Events.PROGRESS, callback);
    };
    Group.prototype.addLoaded = function () {
        this.loaded++;
        this.event.loaded = this.loaded;
        this.dispatchEvent(this.event);
    };
    Group.prototype.loadOne = function (item) {
        var src = item.src;
        var type = item.type;
        var addLoaded = this.addLoaded.bind(this);
        var name = path.extname(src).toLowerCase();
        if (type === exports.JSON || (!type && name === 'json')) {
            loadJSON(src).then(addLoaded, addLoaded);
        }
        else if (type === exports.IMAGE || (!type && (name === "jpg" || name === "png" || name === "svg"))) {
            loadImage(src).then(addLoaded, addLoaded);
        }
        else if (type === exports.BLOB) {
            loadBlob(src).then(addLoaded, addLoaded);
        }
        else {
            loadText(src).then(addLoaded, addLoaded);
        }
    };
    return Group;
}(emitter_1.Emitter));
exports.Group = Group;
