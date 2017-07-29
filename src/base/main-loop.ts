
import Events = require("./events");
import {Emitter} from "./emitter";
import {IMainLoop} from "./imain-loop";

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
export class MainLoop extends Emitter implements IMainLoop {
	private pendingRedraw : number;
	private predrawEvent : Events.TickEvent;
	private drawEvent : Events.TickEvent;
	private postdrawEvent : Events.TickEvent;

	constructor() {
		super();	
		this.pendingRedraw = 0;
		this.predrawEvent = Events.TickEvent.create(Events.PRETICK);
		this.drawEvent = Events.TickEvent.create(Events.TICK);
		this.postdrawEvent = Events.TickEvent.create(Events.POSTTICK);
	}

	public requestRedraw() {
		if(!this.pendingRedraw++) {
			requestAnimationFrame(evt => {
				this.exec();
			});
		}
	}

	private exec() {
		var fps = 0;
		var time = Date.now();
		var deltaTime = performance.now();
		var detail = {fps:fps, time:time, deltaTime:deltaTime};

		this.drawEvent.init(Events.PRETICK, detail);
		this.predrawEvent.init(Events.TICK, detail);
		this.postdrawEvent.init(Events.POSTTICK, detail);
		
		this.pendingRedraw = 0;
		this.dispatchEvent(this.predrawEvent);
		this.dispatchEvent(this.drawEvent);
		this.dispatchEvent(this.postdrawEvent);
	}

	static create() {
		return new MainLoop();
	}
}

