import "chart.js"
import {Point} from "../point";
import {Style} from "../style";
import Events = require("../events");
import {Widget} from "../controls/widget";
import {IMainLoop} from "../imain-loop";
import {MatrixStack} from "../matrix-stack";
import {IApplication} from "../iapplication";
import {WidgetFactory} from "../controls/widget-factory";
import {RecyclableCreator} from "../recyclable-creator";

declare var Chart : any;

Chart.helpers.getRelativePosition = function(evt, chart) {
	return {x:evt.clientX, y:evt.clientY};
}

Chart.helpers.getMaximumWidth = function(domNode) {
	return domNode.width;
}

Chart.helpers.getMaximumHeight = function(domNode) {
	return domNode.height;
}

/**
 * 图表视图。对chart.js的封装。
 */
export class ChartView extends Widget {
	protected _chart : any;
	protected _chartConfig : any;
	protected _chartCanvas : any;

	/**
	 * Chart需要的数据和配置。请在窗口open之前设置好。
	 */
	public set config(value:any) {
		this._chartConfig = value;
		if(value && value.options) {
			value.options.responsive = false;
		}
	}
	
	public get config() : any {
		return this._chartConfig;
	}

	/**
	 * 数据和配置变化时，需要调用此函数请求图表更新。
	 */
	public update() : Widget {
		this._chart.update();

		return this;
	}

	/**
	 * 把事件转发给隐藏的Canvas处理。
	 */
	protected forwardPointerEvent(type:string, x:number, y:number) {
		var p = this.toLocalPoint(Point.point.init(x, y));
		var e = document.createEvent('MouseEvent');
		e.initMouseEvent(type, true, true, window, 0, 0, 0, p.x, p.y, false, false, false, false, 0, null);
		this._chartCanvas.dispatchEvent(e);
	}

	protected dispatchPointerDown(evt:Events.PointerEvent, ctx:MatrixStack) {
		super.dispatchPointerDown(evt, ctx);
    	this.forwardPointerEvent("mousedown", evt.x, evt.y); 
	}

	protected dispatchPointerMove(evt:Events.PointerEvent, ctx:MatrixStack) {
		super.dispatchPointerMove(evt, ctx);
    	this.forwardPointerEvent("mousemove", evt.x, evt.y); 
	}
	
	protected dispatchPointerUp(evt:Events.PointerEvent) {
		super.dispatchPointerUp(evt);
    	this.forwardPointerEvent("mouseup", evt.x, evt.y); 
	}

	protected syncCavnas() {
		var canvas = this._chartCanvas;
		canvas.width = this.w;
		canvas.height = this.h;
	}

	protected drawImage(ctx:any, style:Style) : Widget {
		var w = this.w;
		var h = this.h;
		var sw = this._chartCanvas.width;
		var sh = this._chartCanvas.height;

		ctx.drawImage(this._chartCanvas, 0, 0, sw, sh, 0, 0, w, h);

		return this;
	}

	public onInit() {
		super.onInit();
		this._chartCanvas = document.createElement("canvas");
		this.syncCavnas();
		var ctx = this._chartCanvas.getContext("2d");
		
		var me = this;
		ctx.oFill = ctx.fill;
		ctx.oStroke = ctx.stroke;

		ctx.fill = function() {
			ctx.oFill();
			me.requestRedraw();
		}

		ctx.stroke = function() {
			ctx.oStroke();
			me.requestRedraw();
		}

		this._chart = new Chart(ctx, this.config);
		
		var me = this;
		var chart = this._chart;
		var canvas = this._chartCanvas;
		this.on(Events.PROP_CHANGE, (evt:Events.PropChangeEvent) => {
			var prop = evt.prop;
			var value = evt.newValue;
			
			if(prop === "w" || prop === "h") {
				canvas.width = this.w;
				canvas.height = this.h;
				chart.resize();
			}
		});
	}

	public onDeinit(){
		super.onDeinit();
		this._chart = null;
		this._chartCanvas = null;
		this._chartConfig = null;
	}
	
	constructor() {
		super(ChartView.TYPE);
	}

	public static TYPE = "chart-view";
	private static recycleBin = new RecyclableCreator<ChartView>(function() {return new ChartView()});
	public static create(options?:any) : ChartView {
		return <ChartView>ChartView.recycleBin.create().reset(ChartView.TYPE, options);
	}
};

WidgetFactory.register(ChartView.TYPE, ChartView.create);

