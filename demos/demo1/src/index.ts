import {mainwindowJson} from "./mainwindow"
import {DemoApplication}    from "../../src/demo-application";

window.onload = function() {
    var app = new DemoApplication("demo", mainwindowJson);
    app.start();
}
