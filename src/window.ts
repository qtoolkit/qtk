import {Widget} from "./widget";

export enum WindowType {
	NORMAL,
	POPUP
};

export class Window extends Widget {
	private windowType: WindowType;
};
