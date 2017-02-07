var Group = qtk.Group;
var Align = qtk.Align;
var Events = qtk.Events;
var ListItem = qtk.ListItem;
var ListView = qtk.ListView;
var Direction = qtk.Direction;
var CheckButton = qtk.CheckButton;
var RadioButton = qtk.RadioButton;
var WindowNormal = qtk.WindowNormal;
var DockLayouter = qtk.DockLayouter;
var DockLayouterParam = qtk.DockLayouterParam;
var LinearLayouter = qtk.LinearLayouter;
var LinearLayouterParam = qtk.LinearLayouterParam;

function addCheckButton(group, z, w, h, spacing, align) {
	group.addChild(CheckButton.create({
		text:"text"+z.toString(),
		layoutParam: LinearLayouterParam.createWithOptions({w:w, h:h, spacing:spacing, align:align, position:z})
	}));
}

function addRadioButton(group, z, w, h, spacing, align) {
	group.addChild(RadioButton.create({
		text:"text"+z.toString(),
		layoutParam: LinearLayouterParam.createWithOptions({w:w, h:h, spacing:spacing, align:align, position:z})
	}));
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = WindowNormal.create({app:app, w:vp.width, h:vp.height});

	win.childrenLayouter = DockLayouter.createWithOptions();

	var group = Group.create({text:"Top", h:50});
	group.layoutParam = DockLayouterParam.createWithOptions({position:Direction.TOP});
	group.childrenLayouter = LinearLayouter.createHWithOptions({spacing:10});
	win.addChild(group);
	
	addCheckButton(group, 1, "30%", "50%", 10, Align.MIDDLE);
	addCheckButton(group, 2, "30%", "50%", 10, Align.MIDDLE);
	addCheckButton(group, 3, "30%", "50%", 10, Align.MIDDLE);
	
	group = Group.create({text:"Top", h:50});
	group.layoutParam = DockLayouterParam.createWithOptions({position:Direction.TOP});
	group.childrenLayouter = LinearLayouter.createHWithOptions({spacing:10});
	win.addChild(group);

	addRadioButton(group, 1, "30%", "50%", 10, Align.MIDDLE);
	addRadioButton(group, 2, "30%", "50%", 10, Align.MIDDLE);
	addRadioButton(group, 3, "30%", "50%", 10, Align.MIDDLE);

	win.open();
}
