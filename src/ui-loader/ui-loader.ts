
import {Edit} from "../controls/edit";
import {Application} from "../application";
import {Widget} from "../controls/widget";
import {Label} from "../controls/label";
import {Group} from "../controls/group";
import {Pages} from "../controls/pages";
import {Dialog} from "../controls/dialog";
import {Button} from "../controls/button";
import {Slider} from "../controls/slider";
import {Switch} from "../controls/switch";
import {RichTextEdit} from "../controls/rich-text-edit";
import {TabButtonGroup} from "../controls/tab-button-group";
import {ComboBox, ComboBoxEditable} from "../controls/combo-box";
import {GridView} from "../controls/grid-view";
import {ListView} from "../controls/list-view";
import {TreeItem} from "../controls/tree-item";
import {TreeView} from "../controls/tree-view";
import {CheckButton} from "../controls/check-button";
import {WindowNormal} from "../controls/window-normal";
import {MenuBar, MenuBarItem} from "../controls/menu-bar";
import {ToolBar, ToolBarItem} from "../controls/tool-bar";
import {ColorTile, ColorLine} from "../controls/color-tile";
import {ListItem, ListItemStyle} from "../controls/list-item";

import {ChartView} from "../controls-ext/chart-view";
import {Accordion} from "../controls/accordion";

export class UILoader {
    public constructor() {}

    public createWidget(app:Application, parentJson:any, widgetJson:any) : Widget {
        var widget:Widget;
        var type:string = widgetJson["class"];
        var geometry = widgetJson.geometry || parentJson.geometry;

        var rect = geometry.rect;
        var options = {app:app, x:rect.x, y:rect.y, w:rect.width, h:rect.height};

        if(type == "QMainWindow") {
            widget = WindowNormal.create(options);
        }else if(type == "QWidget") {
            widget = Group.create(options);
        }else if(type == "QLineEdit") {
            widget = Edit.create(options);
        }else if(type == "QLabel") {
            widget = Label.create(options);
        }else if(type == "QPushButton") {
            widget = Button.create(options);
        }

        if(widgetJson.widgets) {
            widgetJson.widgets.forEach(iter => {
                var child:Widget = this.createWidget(app, widgetJson, iter);
                if(child) {
                    widget.addChild(child);
                }
            });
        }

        if(widgetJson.text) {
            if(widget) {
                widget.text = widgetJson.text.string;
            }
        }

        return widget;
    }

    public load(app:Application, json:any) : Widget {
        var widgetJson = json.ui.widgets[0];

        if(widgetJson) {
            return this.createWidget(app, null, widgetJson);
        }

        return null;
    }
}

