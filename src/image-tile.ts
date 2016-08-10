/// <reference path="../typings/globals/es6-promise/index.d.ts"/>
/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import "whatwg-fetch";
import path = require("path");
import {Promise} from 'es6-promise';
import EventEmitter = require("eventemitter3");
import Assets = require("./assets");

export = class ImageTile extends EventEmitter {	
	public x : number;
	public y : number;
	public w : number;
	public h : number;
	public ox : number;
	public oy : number;
	public rw : number;
	public rh : number;
	public img : any;
	public _src : string;
	public trimmed : boolean;

	constructor(src:string) {
		super();
		this._src = src;
		this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);
		this.create(src);
	}

	private create(src:string){
		var index = src.indexOf('#');
		if(index < 0) {
			this.createNormal(src);
		}else{
			var base = src.substr(0, index);
			var ext = src.substr(index+1);
			if(ext[0] === 'x') {
				this.createXYWH(base, ext);
			}else if(ext[0] === 'r') {
				this.createRowColIndex(base, ext);
			}else {
				this.createTexturePacker(base,ext);
			}
		}
	}

	private init(img:any, trimmed:boolean, x:number, y:number, w:number, h:number, ox:number, oy:number, rw:number, rh:number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.ox = ox;
		this.oy = oy;
		this.rw = rw;
		this.rh = rh;
		this.img = img;
		this.trimmed = trimmed;

		this.emit("loaded", this);
	}
 
    public get complete():boolean {
        return this.img && this.img.width;
    }
    public get src():string {
        return this._src;
    }

	private createNormal(src:string) {
		Assets.loadImage(src).then(img => {
			this.init(img, false, 0, 0, img.width, img.height, 0, 0, 0, 0);	
		}).catch(err => {
			this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);	
		});
	}

	private createXYWH(base:string, meta:string){
		var xywh = meta.match(/x([0-9]+)y([0-9]+)w([0-9]+)h([0-9]+)/i);
		var x = parseInt(xywh[1]);
		var y = parseInt(xywh[2]);
		var w = parseInt(xywh[3]);
		var h = parseInt(xywh[4]);
		Assets.loadImage(base).then(img => {
			this.init(img, false, x, y, w, h, x, y, w, h);	
		}).catch(err => {
			this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);	
		});
	}

	private createRowColIndex(base:string, meta:string){
		var rowcolIndex = meta.match(/r([0-9]+)c([0-9]+)i([0-9]+)/i);
		var rows = parseInt(rowcolIndex[1]);
		var cols = parseInt(rowcolIndex[2]);
		var index = parseInt(rowcolIndex[3]);

		Assets.loadImage(base).then(img => {
			var iw = img.width/cols;
			var ih = img.height/rows;
			var r = (index/cols) >> 0;
			var c = index%cols;
			var x = c * iw;
			var y = r * ih;
			this.init(img, false, x, y, iw, ih, x, y, iw, ih);	
		}).catch(err => {
			this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);	
		});
	}	

	private createTexturePacker(jsonURL:string, name:string){
		Assets.loadJSON(jsonURL).then(json => {
			var info = json.frames[name];
			var imgSRC = path.dirname(jsonURL) + "/" + (json.file || json.meta.image);
			Assets.loadImage(imgSRC).then(img => {
				var rect = info.frame || info;
				var x = rect.x;
				var y = rect.y;
				var w = rect.w;
				var h = rect.h;
				if(!info.trimmed) {
					this.init(img, false, x, y, w, h, x, y, w, h);
				}else {
					var ox = info.spriteSourceSize.x;
					var oy = info.spriteSourceSize.y;
					var rw = info.spriteSourceSize.w;
					var rh = info.spriteSourceSize.h;
				
					this.init(img, true, x, y, w, h, ox, oy, rw, rh);
				}
			}).catch(err => {
				this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);	
			});
		}).catch(err => {
			this.init(null, false, 0, 0, 0, 0, 0, 0, 0, 0);	
		});
	}	


	public draw(ctx:any, display:number) : ImageTile {
		return this;
	}

 	static cache = {};
	static create(src:string, onDone:Function) : ImageTile {
		var it = ImageTile.cache[src];

		if(!it) {
			it = new ImageTile(src);
			ImageTile.cache[src] = it;
		}
		
		if(onDone) {
			it.once("loaded", onDone)
		}

		return it;
	}
};
