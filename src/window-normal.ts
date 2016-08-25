
import {Window, WindowType} from "./window";
import {IApplication} from "./iapplication";

export class WindowNormal extends Window {

	static create(app:IApplication, options:any) {
		var win = new WindowNormal();

		win.app = app;
	
		return win.init(options);
	}
};
