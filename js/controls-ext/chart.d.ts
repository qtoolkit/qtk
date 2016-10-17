import "chart.js";
import { Style } from "../style";
import { Widget } from "../controls/widget";
export declare class ChartView extends Widget {
    protected _chartConfig: any;
    protected _chartCanvas: any;
    protected _chart: any;
    config: any;
    protected syncCavnas(): void;
    protected drawImage(ctx: any, style: Style): Widget;
    onInit(): void;
    constructor();
    static TYPE: string;
    private static recycleBin;
    static create(options?: any): ChartView;
}
