import "chart.js";
import { Style } from "../style";
import Events = require("../events");
import { Widget } from "../controls/widget";
import { MatrixStack } from "../matrix-stack";
/**
 * 图表视图。对chart.js的封装。
 */
export declare class ChartView extends Widget {
    protected _chart: any;
    protected _chartConfig: any;
    protected _chartCanvas: any;
    /**
     * Chart需要的数据和配置。请在窗口open之前设置好。
     */
    config: any;
    /**
     * 数据和配置变化时，需要调用此函数请求图表更新。
     */
    update(): Widget;
    /**
     * 把事件转发给隐藏的Canvas处理。
     */
    protected forwardPointerEvent(type: string, x: number, y: number): void;
    dispatchPointerDown(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerMove(evt: Events.PointerEvent, ctx: MatrixStack): void;
    dispatchPointerUp(evt: Events.PointerEvent): void;
    protected syncCavnas(): void;
    protected drawImage(ctx: any, style: Style): Widget;
    onInit(): void;
    onDeinit(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ChartView;
}
