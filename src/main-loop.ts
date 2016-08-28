
import Events = require("./events");
import {Emitter} from "./emitter";
import {IMainLoop} from "./imain-loop";
import {DrawEventDetail} from "./event-detail";

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
	private predrawEvent : Events.Event;
	private drawEvent : Events.Event;
	private postdrawEvent : Events.Event;
	private eventDetail : DrawEventDetail;

	constructor() {
		super();	
		this.pendingRedraw = 0;
		this.eventDetail = DrawEventDetail.create();
		this.predrawEvent = Events.createEvent(Events.PREDRAW, this.eventDetail);
		this.drawEvent = Events.createEvent(Events.DRAW, this.eventDetail);
		this.postdrawEvent = Events.createEvent(Events.POSTDRAW, this.eventDetail);
	}

	public requestRedraw() {
		if(!this.pendingRedraw++) {
			requestAnimationFrame(evt => {
				this.exec();
			});
		}
	}

	private exec() {
		this.eventDetail.time = Date.now();

		this.dispatchEvent(this.predrawEvent);
		this.dispatchEvent(this.drawEvent);
		this.dispatchEvent(this.postdrawEvent);
		this.pendingRedraw = 0;
	}

	static create() {
		return new MainLoop();
	}
}

