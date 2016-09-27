
var imageURL = "/demos/assets/test.jpg";

function addPage(tabControl, title, normalIconURL, currentIconURL, closable) {
	var page = tabControl.addPage(title, normalIconURL, currentIconURL, closable);
	page.childrenLayouter = qtk.SimpleLayouter.create();
	var label = qtk.Label.create().set({text:title});
	label.layoutParam = qtk.SimpleLayouterParam.create({x:"25%", y:"25%", w:"50%", h:"50%"});
	page.addChild(label);

	return page;
}

function onReady(app) {
	var Events = qtk.Events;
	var vp = app.getViewPort();
	var win = qtk.WindowNormal.create();
	win.set({app:app, x:0, y:0, w:vp.width, h:vp.height, hasOwnCanvas:true});
	win.childrenLayouter = qtk.SimpleLayouter.create();
	
	var tabControl = qtk.TabControl.create();
	tabControl.layoutParam = qtk.SimpleLayouterParam.create({x:"4%", y:"4%", w:"45%", h:"45%"});
	win.addChild(tabControl);
	addPage(tabControl, "Home", null, null, true);
	addPage(tabControl, "Favor", null, null, true);
	
	var tabControl = qtk.TabControl.create();
	tabControl.layoutParam = qtk.SimpleLayouterParam.create({x:"50%", y:"4%", w:"45%", h:"45%"});
	tabControl.set({value:1});
	win.addChild(tabControl);
	addPage(tabControl, "Home", "/demos/assets/icons/@density/home.normal.png", 
			"/demos/assets/icons/@density/home.current.png", false);
	addPage(tabControl, "Favor", "/demos/assets/icons/@density/favor.normal.png", 
			"/demos/assets/icons/@density/favor.current.png", false);

	var tabControl = qtk.TabControl.create();
	tabControl.layoutParam = qtk.SimpleLayouterParam.create({x:"4%", y:"50%", w:"45%", h:"45%"});
	win.addChild(tabControl);
	addPage(tabControl, "Home", "/demos/assets/icons/@density/home.normal.png", 
			"/demos/assets/icons/@density/home.current.png", false).tabButton.orientation = qtk.Orientation.V;
	addPage(tabControl, "Favor", "/demos/assets/icons/@density/favor.normal.png", 
			"/demos/assets/icons/@density/favor.current.png", false).tabButton.orientation = qtk.Orientation.V;
	tabControl.set({value:0, buttonGroupHeight : 50});
	
	var tabControl = qtk.TabControl.create();
	tabControl.layoutParam = qtk.SimpleLayouterParam.create({x:"50%", y:"50%", w:"45%", h:"45%"});
	win.addChild(tabControl);
	addPage(tabControl, "Home");
	addPage(tabControl, "Favor");
	tabControl.buttonGroup.autoExpand = false;
	tabControl.set({value:1, buttonGroupAtTop : true});

	win.open();
}
