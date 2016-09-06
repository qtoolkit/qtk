
function addButton(group, z, w, h, spacing, align) {
	group.addChild(qtk.Button.create().set({text:z.toString(), z:z,
		layoutParam: qtk.LinearLayouterParam.create({w:w, h:h, spacing:spacing, align:align})
	}));
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});

	win.childrenLayouter = qtk.DockLayouter.create();

	var topGroup = qtk.Group.create().set({text:"Top", h:50});
	topGroup.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	win.addChild(topGroup);
	topGroup.childrenLayouter = qtk.LinearLayouter.createH({spacing:10});
	addButton(topGroup, 1, "60", "50%", 10, qtk.Align.TOP);
	addButton(topGroup, 2, "60", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, 3, "60", "50%", 10, qtk.Align.BOTTOM);

	addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);
	addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);
	addButton(topGroup, 0, "60", "50%", 20, qtk.Align.MIDDLE);

	addButton(topGroup, -1, "60", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, -2, "60", "50%", 10, qtk.Align.MIDDLE);
	addButton(topGroup, -3, "60", "50%", 10, qtk.Align.MIDDLE);

	var leftGroup = qtk.Group.create().set({text:"Left", w:100});
	leftGroup.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.LEFT});
	leftGroup.childrenLayouter = qtk.LinearLayouter.createV({spacing:10});
	win.addChild(leftGroup);

	addButton(leftGroup, 1, "50%", "60", 10, qtk.Align.LEFT);
	addButton(leftGroup, 2, "50%", "60", 10, qtk.Align.CENTER);
	addButton(leftGroup, 3, "50%", "100", 10, qtk.Align.RIGHT);
	
	addButton(leftGroup, 0, "-20", "60", 10, qtk.Align.CENTER);
	addButton(leftGroup, 0, "100%", "60", 10, qtk.Align.RIGHT);
	
	addButton(leftGroup, -1, "100%", "60", 10, qtk.Align.RIGHT);
	addButton(leftGroup, -2, "100%", "60", 10, qtk.Align.RIGHT);
	addButton(leftGroup, -3, "100%", "60", 10, qtk.Align.RIGHT);

	win.open();
}
