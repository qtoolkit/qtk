import {Widget} from "./widget";

export enum WindowType {
	NORMAL,
	POPUP
};

export class Window extends Widget {
	constructor(type:string) {
		super(type);
	}

	private windowType: WindowType;
};
