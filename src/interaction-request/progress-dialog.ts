import Events = require("../events");
import {ProgressInfo} from "./progress-info";
import {MessageBox} from "../controls/message-box";

export class ProgressDialog {
	public static show(e:Events.InteractionRequestEvent) {
		var info = <ProgressInfo>e.payload;

		MessageBox.showProgress(info.title, info.runTask, function() {
			e.returnResult();
		}, info.w);
	}
}
