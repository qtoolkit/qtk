
function addCheckButton(group, z, w, h, spacing, align) {
	group.addChild(qtk.CheckButton.create().set({text:"text"+z.toString(),
		layoutParam: qtk.LinearLayouterParam.create({w:w, h:h, spacing:spacing, align:align, position:z})
	}));
}

function addRadioButton(group, z, w, h, spacing, align) {
	group.addChild(qtk.RadioButton.create().set({text:"text"+z.toString(),
		layoutParam: qtk.LinearLayouterParam.create({w:w, h:h, spacing:spacing, align:align, position:z})
	}));
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});

	win.childrenLayouter = qtk.DockLayouter.create();

	var group = qtk.Group.create().set({text:"Top", h:50});
	group.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	win.addChild(group);
	group.childrenLayouter = qtk.LinearLayouter.createH({spacing:10});
	addCheckButton(group, 1, "160", "50%", 10, qtk.Align.MIDDLE);
	addCheckButton(group, 2, "160", "50%", 10, qtk.Align.MIDDLE);
	addCheckButton(group, 3, "160", "50%", 10, qtk.Align.MIDDLE);
	
	group = qtk.Group.create().set({text:"Top", h:50});
	group.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	group.childrenLayouter = qtk.LinearLayouter.createH({spacing:10});
	win.addChild(group);

	addRadioButton(group, 1, "160", "50%", 10, qtk.Align.MIDDLE);
	addRadioButton(group, 2, "160", "50%", 10, qtk.Align.MIDDLE);
	addRadioButton(group, 3, "160", "50%", 10, qtk.Align.MIDDLE);
	

	win.open();
}
