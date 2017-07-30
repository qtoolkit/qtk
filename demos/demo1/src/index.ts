import {Settings} from "./settings"
import {SettingsUI} from "./settings-ui"

import {ViewModel} from "../../../src/mvvm/view-model"
import {DemoApplication}    from "../../src/demo-application";

window.onload = function() {
    var app = new DemoApplication("demo", SettingsUI, new ViewModel(new Settings()));
    app.start();
}
