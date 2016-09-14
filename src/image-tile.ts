/// <reference path="../typings/globals/es6-promise/index.d.ts"/>
/// <reference path="../typings/globals/node/index.d.ts"/>
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import "whatwg-fetch";
import path = require("path");
import {Promise} from 'es6-promise';
import {Emitter} from "./emitter";
import Assets = require("./assets");
import Events = require("./events");

export enum ImageDrawType {
	/**
	 * 画在填满指定的矩形区域。
	 */
	DEFAULT = 0,
	
	/**
	 * 按1比1大小画在指定的矩形区域的中间。
	 */
	CENTER = 1,

	/**
	 * 把图分成3行3列等大小的区域，按9宫格的方式填满指定的矩形区域。
	 */
	PATCH9 = 2,
	
	/**
	 * 把图分成3行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
	 */
	PATCH3_V = 3,
	
	/**
	 * 把图分成1行1列等大小的区域，按3宫格的方式填满指定的矩形区域。
	 */
	PATCH3_H = 4,
	
	/**
	 * 按平铺的方式填满指定的矩形区域。
	 */
	TILE = 5,
	
	/**
	 * 按垂直平铺的方式填满指定的矩形区域。
	 */
	TILE_V = 6,
	
	/**
	 * 按水平平铺的方式填满指定的矩形区域。
	 */
	TILE_H = 7,

	/**
	 * 保持比例缩放到指定的矩形区域。
	 */
	AUTO = 8,
	
	/**
	 * ICON
	 */
	ICON = 9
}

/**
 * 把多个小的图片合并成一张大图，不但可以减少网路请求和GPU的调用次数，还可以提高内存的利用率。
 * ImageTile用来表示大图中的一张小图，QTK中支持下面几种方式：
 *
 * 0.普通图片。如果URL中没有#，则表示一张普通图片，它的位置为(0,0)，大小为图片的整个大小。
 *
 * 1.指定子图的位置和大小，#之前的部分是大图的URL，后面是子图的位置和大小信息。
 *  字母x后紧跟x坐标，字母y后紧跟y坐标，字母w后紧跟宽度，字母h后紧跟高度。
 *  下面的URL表示图片demo.png中位置为(100,200)，大小为(300,400)的子图。
 *
 * ```
 * https://qtoolkit.github.io/demo.png#x100y200w300h400
 * ```
 *
 * 2.指定图片的行列数以及小图的序数，#之前的部分是大图的URL，后面是行数、列数和序数。
 *  字母r紧跟行数，字母c后紧跟列数，字母i后紧跟序数。
 *
 *  下面的URL表示图片demo.png分成3行3列，序数为0的子图。
 *
 * ```
 * https://qtoolkit.github.io/demo.png#r3c3i0
 * ```
 *
 * 3.用TexturePacker打包的JSON Hash格式。#之前部分是JSON的URL，后面是子图的名称。如：
 *
 * ```
 * https://qtoolkit.github.io/demo.json#demo.png
 * ```
 *
 *
 */
export class ImageTile extends Emitter {	
	public x : number;
	public y : number;
	public w : number;
	public h : number;
	public img : any;
	public src : string;
	public _id : number;

	constructor(src:string) {
		super();
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this._id = 0;
		this.img = null;
		this.src = src;
		if(src) {
			
			this.create(src);
		}
	}

	public toJson() {
		return this.src;
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

	private init(img:any, x:number, y:number, w:number, h:number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.img = img;

		if(ImageTile.onImageLoaded) {
			ImageTile.onImageLoaded(this);
		}
		this.dispatchEventAsync({type:Events.LOAD, detail:this});
	}
 
    public get complete():boolean {
        return this.img && this.img.width;
    }
    
    public get id():number{
        return this._id;
    }
    
    public set id(id){
        this._id = id;
        if(this.img) {
        	this.img.imgID = id;
		}
    }

	private createNormal(src:string) {
		Assets.loadImage(src).then(img => {
			this.init(img, 0, 0, img.width, img.height);	
		}).catch(err => {
			this.init(null, 0, 0, 0, 0);	
		});
	}

	private createXYWH(base:string, meta:string){
		var xywh = meta.match(/x([0-9]+)y([0-9]+)w([0-9]+)h([0-9]+)/i);
		var x = parseInt(xywh[1]);
		var y = parseInt(xywh[2]);
		var w = parseInt(xywh[3]);
		var h = parseInt(xywh[4]);
		Assets.loadImage(base).then(img => {
			this.init(img, x, y, w, h);	
		}).catch(err => {
			this.init(null, 0, 0, 0, 0);	
		});
	}

	private createRowColIndex(base:string, meta:string){
		var rowcolIndex = meta.match(/r([0-9]+)c([0-9]+)i([0-9]+)/i);
		var rows = parseInt(rowcolIndex[1]);
		var cols = parseInt(rowcolIndex[2]);
		var index = parseInt(rowcolIndex[3]);

		Assets.loadImage(base).then(img => {
			var w = img.width/cols;
			var h = img.height/rows;
			var r = (index/cols) >> 0;
			var c = index%cols;
			var x = c * w;
			var y = r * h;
			this.init(img, x, y, w, h);	
		}).catch(err => {
			this.init(null, 0, 0, 0, 0);	
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
				if(!info.trimmed && !info.rotate) {
					this.init(img, x, y, w, h);
				}else {
					console.log("Not support trimmed mode or rotated mode");
					this.init(null, 0, 0, 0, 0);	
				}
			}).catch(err => {
				this.init(null, 0, 0, 0, 0);	
			});
		}).catch(err => {
			this.init(null, 0, 0, 0, 0);	
		});
	}	

	private drawDefault(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h, dx, dy, dw, dh);	  
	}

	private drawIcon(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var cx = dx + (dw >> 1);
		var cy = dy + (dh >> 1);
		var x = dx + ((dw - this.w) >> 1);
		var y = dy + ((dh - this.h) >> 1);
		ctx.save();
		ctx.translate(cx, cy);
		ctx.scale(ImageTile.scale, ImageTile.scale);
		ctx.translate(-cx, -cy);
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);	  
		ctx.restore();
	}

	private drawCenter(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var x = dx + ((dw - this.w) >> 1);
		var y = dy + ((dh - this.h) >> 1);

		ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, this.w, this.h);	  
	}
	
	private drawAuto(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var x = dx;
		var y = dy;
		var w = 0;
		var h = 0;
		var scaleX = dw/this.w;
		var scaleY = dh/this.h;
		if(scaleX >= scaleY) {
			h = dh;
			w = scaleY * this.w;
			x += ((dw - w) >> 1);
		}else{
			w = dw;
			h = scaleX * this.h;
			y += ((dh - h) >> 1);
		}

		ctx.drawImage(this.img, this.x, this.y, this.w, this.h, x, y, w, h);	  
	}
	
	private draw3PatchH(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var w = Math.min(dw >> 1, (this.w / 3) >> 0);
		ctx.drawImage(this.img, this.x, this.y, w, this.h, dx, dy, w, dh);
		ctx.drawImage(this.img, this.x+this.w-w, this.y, w, this.h, dx+dw-w, dy, w, dh);
		
		var cw = dw - w - w;
		if(cw > 0) {
			ctx.drawImage(this.img, this.x+w, this.y, w, this.h, dx+w, dy, cw, dh);
		}
	}
	
	private draw9Patch(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var w = Math.min(dw >> 1, (this.w / 3) >> 0);
		var h = Math.min(dh >> 1, (this.h / 3) >> 0);
		var cw = dw - w - w;
		var ch = dh - h - h;
		var rightSX = this.x+this.w-w;
		var rightDX =  dx+dw-w;
		var bottomSY = this.y + this.h - h;
		var bottomDY = dy + dh - h;

		ctx.drawImage(this.img, this.x, this.y, w, h, dx, dy, w, h);	
		ctx.drawImage(this.img, rightSX, this.y, w, h, rightDX, dy, w, h);
		if(cw > 0) {
			ctx.drawImage(this.img, this.x+w, this.y, w, h, dx+w, dy, cw, h);
		}
		
		ctx.drawImage(this.img, this.x, this.y+h, w, h, dx, dy+h, w, ch);	
		ctx.drawImage(this.img, rightSX, this.y+h, w, h, rightDX, dy+h, w, ch);
		if(cw > 0 && ch > 0) {
			ctx.drawImage(this.img, this.x+w, this.y+h, w, h, dx+w, dy+h, cw, ch);
		}
		
		ctx.drawImage(this.img, this.x, bottomSY, w, h, dx, bottomDY, w, h);	
		ctx.drawImage(this.img, rightSX, bottomSY, w, h, rightDX, bottomDY, w, h);
		if(cw > 0) {
			ctx.drawImage(this.img, this.x+w, bottomSY, w, h, dx+w, bottomDY, cw, h);
		}
	}
	
	private draw3PatchV(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var h = Math.min(dh >> 1, (this.h / 3) >> 0);
		ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, dy, dw, h);
		ctx.drawImage(this.img, this.x, this.y+this.h-h, this.w, h, dx, dy+dh-h, dw, h);
		var ch = dh - h - h;
		if(ch > 0) {
			ctx.drawImage(this.img, this.x, this.y+h, this.w, h, dx, dy+h, dw, ch);
		}
	}
	
	private drawTileH(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var x = dx;
		var w = 0;
		var remainW = dw;

		while(remainW > 0) {
			w = Math.min(this.w, remainW);
			ctx.drawImage(this.img, this.x, this.y, w, this.h, x, dy, w, dh);
			x += w;
			remainW -= w;
		}
	}
	
	private drawTileV(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var y = dy;
		var h = 0;
		var remainH = dh;

		while(remainH > 0) {
			h = Math.min(this.h, remainH);
			ctx.drawImage(this.img, this.x, this.y, this.w, h, dx, y, dw, h);
			y += h;
			remainH -= h;
		}
	}
	
	private drawTile(ctx:any, dx:number, dy:number, dw:number, dh:number) {
		var x = dx;
		var y = dy;
		var w = 0;
		var h = 0;
		var remainW = dw;
		var remainH = dh;

		while(remainH > 0) {
			h = Math.min(this.h, remainH);
			while(remainW > 0) {
				w = Math.min(this.w, remainW);
				ctx.drawImage(this.img, this.x, this.y, w, h, x, y, w, h);
				x += w;
				remainW -= w;
			}
			x = 0;
			remainW = dw;
			y += h;
			remainH -= h;
 		}
	}

	public draw(ctx:any, type:number, dx:number, dy:number, dw:number, dh:number) {
		if(ctx && this.complete) {
			if(type === ImageDrawType.DEFAULT) {
				this.drawDefault(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.CENTER) {
				this.drawCenter(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.AUTO) {
				this.drawAuto(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.PATCH3_H) {
				this.draw3PatchH(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.PATCH3_V) {
				this.draw3PatchV(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.PATCH9) {
				this.draw9Patch(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.TILE_H) {
				this.drawTileH(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.TILE_V) {
				this.drawTileV(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.TILE) {
				this.drawTile(ctx, dx, dy, dw, dh);
			}else if(type === ImageDrawType.ICON) {
				this.drawIcon(ctx, dx, dy, dw, dh);
			}
		}
	}

	private static scale = 1;
	private static density = 1;
	private static onImageLoaded : Function;

	public static init(density:number, scale:number, onImageLoaded:Function) {
		ImageTile.scale = scale;
		ImageTile.density = density;
		ImageTile.onImageLoaded = onImageLoaded;
	}

 	static cache = {};
	public static fixURL(src:string) : string {
		var ret = src.replace("@density", "x"+ImageTile.density);

		return ret;
	}

	public static create(_src:string, onDone?:Function) : ImageTile {
		var src = ImageTile.fixURL(_src);
		var it = ImageTile.cache[src];

		if(!it) {
			it = new ImageTile(src);
			ImageTile.cache[src] = it;
		}
		
		if(onDone) {
			if(it.complete) {
				setTimeout(onDone, 0);
			}else{
				it.once(Events.LOAD, onDone)
			}
		}

		return it;
	}
};
