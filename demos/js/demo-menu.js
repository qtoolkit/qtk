
function createFileMenu(menu) {
	menu.addItem("Open");
	menu.addItem("Close");
}

function createEditMenu(menu) {
	menu.addItem("Copy");
	menu.addItem("Paste");
}

function createViewMenu(menu) {
	menu.addItem("Zoom In");
	menu.addItem("Zoom Out");
	menu.addSpace();
	menu.addItem("Zoom Out");
	menu.addCheckableItem("Zoom Out", true, "Ctrl+T");
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});

	win.childrenLayouter = qtk.DockLayouter.create();

	var menuBar = qtk.MenuBar.create().set({h:30});
	menuBar.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	win.addChild(menuBar);
	
	menuBar.addImageItem("/demos/assets/icons/x2/apple.png", null, 40, 1);	
	menuBar.addTextItem("File", 40, 1, createFileMenu);	
	menuBar.addTextItem("Edit", 40, 2, createEditMenu);	
	menuBar.addTextItem("View", 40, 3, createViewMenu);

	win.open();
}
