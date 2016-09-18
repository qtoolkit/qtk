
function onClick(evt) {
	console.log("clicked:" + this.text);
}

function onInitFileMenu(menu) {
	menu.addItem("New", onClick, "/demos/assets/icons/@density/new.png");
	menu.addItem("Open", onClick, "/demos/assets/icons/@density/open.png");
	menu.addItem("Save", onClick, "/demos/assets/icons/@density/save.png");
	menu.addItem("Save All", onClick);
	menu.addFolderItem("More", onInitMoreMenu);
	menu.addFolderItem("Options", onInitExtMenu);
}

function onInitMoreMenu(menu) {
	menu.addItem("Copy", onClick);
	menu.addItem("Paste", onClick);
}

function onInitExtMenu(menu) {
	menu.addItem("Copy", onClick);
	menu.addItem("Paste", onClick);
}

function onInitEditMenu(menu) {
	menu.addItem("Copy", onClick);
	menu.addItem("Paste", onClick);
}

function onInitViewMenu(menu) {
	menu.addItem("Zoom In", onClick);
	menu.addItem("Zoom Out", onClick);
	menu.addSpace();
	menu.addCheckableItem("Show RefLine", onClick, true, "Ctrl+T");
	menu.addCheckableItem("Show Grid", onClick, true, "Ctrl+T");
}

function onReady(app) {
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create({app:app, w:vp.width, h:vp.height});

	win.childrenLayouter = qtk.DockLayouter.create();

	var menuBar = qtk.MenuBar.create({h:30, itemWidth:40});
	menuBar.layoutParam = qtk.DockLayouterParam.create({position:qtk.Direction.TOP});
	win.addChild(menuBar);
	
	menuBar.addLogo("/demos/assets/icons/x2/apple.png", null);	
	menuBar.addItem("File", onInitFileMenu);	
	menuBar.addItem("Edit", onInitEditMenu);
	menuBar.addItem("View", onInitViewMenu);
	menuBar.addSpace();
	menuBar.addTextButton("About", onClick);
	menuBar.addTextButton("Login", onClick, 100, -1);

	win.open();
}
