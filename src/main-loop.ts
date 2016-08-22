
/// <reference path="../typings/globals/eventemitter3/index.d.ts"/>

import EventEmitter = require("eventemitter3");

class MainLoopImpl extends EventEmitter {
	public pendingRedraw : number;
	
	constructor() {
		super();	
		this.pendingRedraw = 0;
	}

	redraw() {
		if(!this.pendingRedraw++) {
			requestAnimationFrame(MainLoopImpl.onLoop);
		}
	}

	exec() {
		var data = {
			time : Date.now()
		};

		this.emit(MainLoop.PREDRAW, data);
		this.emit(MainLoop.DRAW, data);
		this.emit(MainLoop.POSTDRAW, data);
		this.pendingRedraw = 0;
	}
	
	static instance = new MainLoopImpl();
	static onLoop() {
		MainLoopImpl.instance.exec();
	}
}

/**
 * 负责渲染UI的主循环。为了省电，只有在调用requestRedraw之后，才会触发下一次渲染循环。
 * 每个渲染循环分为三个阶段：
 *
 * *.predraw 绘制前做一些工作，通常用于动画改变对象的属性。 
 * 
 * *.draw 绘制阶段。
 *
 * *.postdraw 绘制后一些收尾工作，如果绘制阶段只是生成命令队列，可以在此阶段提交。
 * 
 */
class MainLoop {
	/**
	 * 请求重绘。
	 * 
	 * ``` javascript
	 * qtk.MainLoop.requestRedraw();
	 * ```
	 * 
	 */
	public static requestRedraw() {
		MainLoopImpl.instance.redraw();
	}

	/**
	 * 绘制前事件。
	 */
	public static PREDRAW  = "predraw";
	
	/**
	 * 绘制事件。
	 */
	public static DRAW     = "draw";
	
	/**
	 * 绘制后事件。
	 */
	public static POSTDRAW = "postdraw";	
	
	/**
	 * 注册事件处理函数。
	 *
	 * ``` javascript
	 * function predraw(evt) {
	 * }
	 * qtk.MainLoop.on(qtk.MainLoop.PREDRAW, predraw);
	 * 
	 * function draw(evt) {
	 * }
	 * qtk.MainLoop.on(qtk.MainLoop.DRAW, draw);
	 *
	 * function postdraw(evt) {
	 * }
	 * qtk.MainLoop.on(qtk.MainLoop.POSTDRAW, postdraw);
	 * ```
	 */
 	static on(type:string, callback:Function) {
		MainLoopImpl.instance.on(type, callback);
	}
	
	/**
	 * 注册事件处理函数。
	 *
	 * ``` javascript
	 * function predraw(evt) {
	 * }
	 * qtk.MainLoop.off(qtk.MainLoop.PREDRAW, predraw);
	 */
	static off(type:string, callback:Function) {
		MainLoopImpl.instance.off(type, callback);
	}
}

export = MainLoop;

