import {Widget} from "./widget";

export interface ILayouter {
	layoutChildren(widget:Widget, children:Array<Widget>);
};

