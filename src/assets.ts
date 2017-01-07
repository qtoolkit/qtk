/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>
/// <reference path="../typings/globals/whatwg-fetch/index.d.ts"/>

import "whatwg-fetch";
import path = require("path");
import Events = require("./events");
import {Emitter} from "./emitter";

export declare class Image {
    public width : number;
    public height : number;
    public src : string;

    public onload : Function;
    public onerror : Function;
};

var assetsCache = {};
function load(url:string, type:AssetType) : Promise<any> {
    var item = assetsCache[url];

    if(!item) {
        item = fetch(url).then(function ok(response:Response) {
        	if(response.status !==  200) {
				return Promise.reject(null);
			}

            if(type === AssetType.JSON) {
                return response.json();
            }else if(type === AssetType.BLOB) {
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
 * @enum AssetType 
 * 资源类型。
 */
export enum AssetType {
	/** 
	 * @property {number} [AUDIO=1]
	 * 音频资源。
	 */
	AUDIO = 1,
	/** 
	 * @property {number} [IMAGE]
	 * 图像资源。
	 */
	IMAGE,
	/** 
	 * @property {number} [BLOB]
	 * 二进制资源。
	 */
	BLOB,
	/** 
	 * @property {number} [JSON]
	 * JSON资源。
	 */
	JSON,
	/** 
	 * @property {number} [SCRIPT]
	 * SCRIPT资源。
	 */
	SCRIPT,
	/** 
	 * @property {number} [TEXT]
	 * 文本资源。
	 */
	TEXT
};

/**
 * @class AssetManager
 * 资源管理类，用于加载各种资源。
 */
export class AssetManager {
	/**
	 * @method loadJson
	 * 加载JSON资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadJson(url:string) : Promise<any> {
    	return load(url, AssetType.JSON);
	}

	/**
	 * @method loadText
	 * 加载文本数据资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadText(url:string) : Promise<string> {
		return load(url, AssetType.TEXT);
	}

	/**
	 * @method loadBlob
	 * 加载二进制数据资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadBlob(url:string) : Promise<Blob> {
		return load(url, AssetType.BLOB);
	}

	/**
	 * @method loadImage
	 * 加载图片资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadImage(url:string) : Promise<Image> {
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
	 * @method loadScript
	 * 加载脚本资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadScript(url:string) : Promise<any> {
		var item = new Promise ((resolve: (script: any)=>void, reject: (err: any)=>void) => {
			var node = document.head ? document.head : document.body;
			var script = document.createElement("script");
			script.onload = function (){
				resolve(script);
			}
			script.onerror = function(err) {
				reject(err);
			}
			script.src = url;
			node.appendChild(script);
		});

		return item;
	}

	/**
	 * @method loadAudio
	 * 加载音频资源。
	 * @static
	 * @param {String} url 资源URL。
	 * @return {Promise}
	 */
	public static loadAudio(url:string) : Promise<any> {
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
	 * @method clear
	 * 清除指定URL资源的缓存。
	 * @static
	 * @param {String} url 资源URL。
	 */
	public static clear(url:string) {
		delete assetsCache[url];
	}
}

/**
 * @class AssetItem
 * 表示一个资源项, 用于预加载资源。
 *
 */
export class AssetItem {
    /**
	 * @property {string} src
     * 资源的URL。
     */
    public src : string;
    
    /**
	 * @property {AssetType} type 
     * 资源的类型。
     */
    public type : AssetType;

    constructor(src:string, type?:AssetType) {
    	if(!type) {
        	var name = path.extname(src).toLowerCase();
    		if(name === ".json") {
    			type = AssetType.JSON;
			}else if(name === ".jpg" || name === ".png" || name === ".svg") {
				type = AssetType.IMAGE;
			}else if(name === ".txt") {
				type = AssetType.TEXT;
			}else if(name === ".js") {
				type = AssetType.SCRIPT;
			}else{
				type = AssetType.BLOB;
			}
		}

    	this.src = src;
		this.type = type;
	}

	public static create(src:string, type?:AssetType) : AssetItem {
		return new AssetItem(src, type);
	}
};

/**
 * @class AssetGroup
 *
 * 表示一个资源分组, 用于预加载资源。
 *
 */
export class AssetGroup extends Emitter {
    public total : number;
    public loaded : number;
    public event = {
        total : 0,
        loaded : 0,
        type:Events.PROGRESS
    };

    constructor(items:Array<AssetItem>, onProgress?:Function) {
        super();
        var i = 0;
        var n = items.length;
        this.loaded = 0;    
        this.total = items.length;
        this.event.total = this.total;

        if(onProgress) {
        	this.onProgress(onProgress);
		}

        items.forEach(this.loadOne.bind(this));
    }

    /**
     * 注册加载进度的回调函数。
     */
    public onProgress(callback:Function) {
        this.on(Events.PROGRESS, callback);
    }

    private addLoaded() :void {
        this.loaded++;
        this.event.loaded = this.loaded;
        this.dispatchEvent(this.event);
    }

    private loadOne(item:AssetItem) : void {
        var src = item.src;
        var type = item.type;
        var addLoaded = this.addLoaded.bind(this);
        var name = path.extname(src).toLowerCase();
        
        if(type === AssetType.JSON || (!type && name === '.json')) {
            AssetManager.loadJson(src).then(addLoaded, addLoaded);
        }else if(type === AssetType.IMAGE || (!type && (name === ".jpg" || name === ".png" || name === ".svg"))) {
            AssetManager.loadImage(src).then(addLoaded, addLoaded);
        }else if(type === AssetType.BLOB) {
            AssetManager.loadBlob(src).then(addLoaded, addLoaded);
        }else if(type === AssetType.SCRIPT) {
            AssetManager.loadScript(src).then(addLoaded, addLoaded);
        }else{
            AssetManager.loadText(src).then(addLoaded, addLoaded);
        }
    }
	
	public static create(items:Array<AssetItem>, onProgress?:Function) {
		return new AssetGroup(items, onProgress);
	}

	/**
	 * @method preload
	 * 预加载指定的资源。
	 * @static
	 * @param {Array<string>} assetsURLS 资源URL列表。
	 * @param {Function} onProgress 资源进度回调函数。
	 * @return {AssetGroup} 资源分组对象。
	 */
	public static preload(assetsURLS:Array<string>, onProgress:Function) : AssetGroup {
		var arr = assetsURLS.map((iter:string) => {
			return AssetItem.create(iter);
		});

		return AssetGroup.create(arr, onProgress);
	}
}
