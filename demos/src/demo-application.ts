import {Application} from "../../src/application";
import {IApplication} from "../../src/iapplication";
import {UILoader}    from "../../src/ui-loader/ui-loader"

var themeURL = "/demos/assets/theme/default/theme.js";
var appThemeURL = "/demos/assets/theme/default/demo.js";
var assetsURLs = [themeURL, appThemeURL];

export class DemoApplication extends Application {
	constructor(name:string, mainwindowJson:any) {
		super(name);
		this.mainwindowJson = mainwindowJson;
	}

	public onReady(app:IApplication) {
		var ui = new UILoader();
		var win = ui.load(this, this.mainwindowJson);
		win.open();
	}

	public start() {
		this.preload(assetsURLs, () => {
			this.init({sysThemeDataURL:themeURL, appThemeDataURL:appThemeURL});
			this.run();
		});
	}

	private mainwindowJson : any;
}


