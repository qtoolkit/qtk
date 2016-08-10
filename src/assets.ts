/// <reference path="../typings/globals/es6-promise/index.d.ts"/>
/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import "whatwg-fetch";
import path = require("path");
import {Promise} from 'es6-promise';
import EventEmitter = require("eventemitter3");

export const AUDIO = "audio";
export const IMAGE = "image";
export const BLOB = "blob";
export const JSON = "json";
export const TEXT = "text";

export declare class Image {
    public width : number;
    public height : number;
    public src : string;

    public onload : Function;
    public onerror : Function;
};

var assetsCache = {};
function load(url:string, type:string) : Promise<any> {
    var item = assetsCache[url];

    if(!item) {
        item = fetch(url).then(function ok(response:Response) {
        	if(response.status !==  200) {
				return Promise.reject(null);
			}

            if(type === JSON) {
                return response.json();
            }else if(type === BLOB) {
                return response.blob();
            }else{
                return response.text();
            }
         }, function fail(err:Error) {
            return null;
        })

        assetsCache[url] = item;
    }

    return item;
}

/**
 * Load JSON Data and Cache It.
 * @param url URL Of JSON.
 * @returns Promise
 */
export function loadJSON(url:string) : Promise<any> {
    return load(url, JSON);
}

/**
 * Load Text Data and Cache It.
 * @param url URL Of Text.
 * @returns Promise
 */
export function loadText(url:string) : Promise<string> {
    return load(url, TEXT);
}

/**
 * Load Blob Data and Cache It.
 * @param url URL Of Blob.
 * @returns Promise
 */
export function loadBlob(url:string) : Promise<Blob> {
    return load(url, BLOB);
}

/**
 * Load Image and Cache It.
 * @param url URL Of Image.
 * @returns Promise
 */
export function loadImage(url:string) : Promise<Image> {
    var item = assetsCache[url];

    if(!item) {
        item = new Promise ((resolve: (img: any)=>void, reject: (err: any)=>void) => {
            var image = new Image();
            image.onload = function (){
                resolve(image);
            }
            image.onerror = function(err) {
                reject(err);
            }
            image.src = url
        });
    }
    assetsCache[url] = item;

    return item;
}

/**
 * Load Audio and Cache It.
 * @param url URL Of Audio.
 * @returns Promise
 */
export function loadAudio(url:string) : Promise<any> {
    var item = assetsCache[url];

    if(!item) {
        item = new Promise ((resolve: (img: any)=>void, reject: (err: any)=>void) => {
            var audio = new Audio();
            audio.onload = function (){
                resolve(audio);
            }
            audio.onerror = function(err) {
                reject(err);
            }
            audio.src = url
        });
    }
    assetsCache[url] = item;

    return item;
}


/**
 * Clear asset cache
 * @param url URL Of asset.
 */
export function clear(url:string) {
	delete assetsCache[url];
}

/**
 * Present one asset.
 */
export class Item {
    /**
     * The URL of asset.
     */
    public src : string;
    /**
     * The type of asset, options are TEXT, JSON, BLOB, IMAGE, AUDIO. 
     */
    public type : string;
};

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
export class Group extends EventEmitter {
    public total : number;
    public loaded : number;
    public event = {
        total : 0,
        loaded : 0
    };

    public static EVENT_PROGRESS = "progress";

    constructor(items:Array<Item>) {
        super();
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
    onProgress(callback:Function) {
        this.on(Group.EVENT_PROGRESS, callback);
    }

    private addLoaded() :void {
        this.loaded++;
        this.event.loaded = this.loaded;
        this.emit(Group.EVENT_PROGRESS, this.event);
    }

    private loadOne(item:Item) : void {
        var src = item.src;
        var type = item.type;
        var addLoaded = this.addLoaded.bind(this);
        var name = path.extname(src).toLowerCase();
        
        if(type === JSON || (!type && name === 'json')) {
            loadJSON(src).then(addLoaded, addLoaded);
        }else if(type === IMAGE || (!type && (name === "jpg" || name === "png" || name === "svg"))) {
            loadImage(src).then(addLoaded, addLoaded);
        }else if(type === BLOB) {
            loadBlob(src).then(addLoaded, addLoaded);
        }else{
            loadText(src).then(addLoaded, addLoaded);
        }
    }
}
