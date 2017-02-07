
function addButton(group, position, text,  w, h, spacing, align) {
	group.addChild(qtk.Button.create().set({text:text,
		layoutParam: qtk.LinearLayouterParam.createWithOptions({w:w, h:h, spacing:spacing, align:align, position:position})
	}));
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app,  w:vp.width, h:vp.height, padding : 10});

	win.childrenLayouter = qtk.DockLayouter.createWithOptions();

	var topGroup = qtk.Group.create().set({text:"Top", h:50});
	topGroup.layoutParam = qtk.DockLayouterParam.createWithOptions({position:qtk.Direction.TOP});
	win.addChild(topGroup);
	topGroup.childrenLayouter = qtk.LinearLayouter.createHWithOptions({spacing:10});
	addButton(topGroup, 1, "left1-top", "100", "50%", 10, qtk.Align.TOP);
	addButton(topGroup, 2, "left2-middle", "100", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, 3, "left3-bottom", "100", "50%", 10, qtk.Align.BOTTOM);

	addButton(topGroup, 0, "middle1", "60", "50%", 20, qtk.Align.MIDDLE);
	addButton(topGroup, 0, "middle2", "60", "50%", 20, qtk.Align.MIDDLE);
	addButton(topGroup, 0, "middle3", "60", "50%", 20, qtk.Align.MIDDLE);

	addButton(topGroup, -1, "right1", "60", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, -2, "right2", "60", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, -3, "right3", "60", "50%", 10, qtk.Align.MIDDLE);

	var leftGroup = qtk.Group.create().set({text:"Left", w:300});
	leftGroup.layoutParam = qtk.DockLayouterParam.createWithOptions({position:qtk.Direction.LEFT});
	leftGroup.childrenLayouter = qtk.LinearLayouter.createVWithOptions({spacing:10});
	win.addChild(leftGroup);

	addButton(leftGroup, 1, "top1-left", "50%", "30", 10, qtk.Align.LEFT);
	addButton(leftGroup, 2, "top2-center", "50%", "30", 10, qtk.Align.CENTER);
	addButton(leftGroup, 3, "top3-right", "50%", "30", 10, qtk.Align.RIGHT);
	
	addButton(leftGroup, 0, "middle1", "-20", "30", 10, qtk.Align.CENTER);
	addButton(leftGroup, 0, "middle2", "100%", "30", 10, qtk.Align.CENTER);
	
	addButton(leftGroup, -1, "bottom1", "100%", "30", 10, qtk.Align.CENTER);
	addButton(leftGroup, -2, "bottom2", "100%", "30", 10, qtk.Align.CENTER);
	addButton(leftGroup, -3, "bottom3", "100%", "30", 10, qtk.Align.CENTER);

	win.open();
}
